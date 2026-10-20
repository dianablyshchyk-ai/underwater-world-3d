import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
import GUI from 'lil-gui'

const CONFIG = {
    waterColor: 0x0b5a78,
    fogDensity: 0.014,
    floorY: -10,
    waterTop: 8,
    currentStrength: 1,
    godRayIntensity: 0.6,
    causticStrength: 0.55,

    boundsXZ: 20,

    fishCount: 48,
    minSpeed: 1.2,
    maxSpeed: 3.5,
    maxForce: 5,
    perception: 5.0,
    separationDist: 1.6,

    wSeparation: 2.5,
    wAlignment: 1.0,
    wCohesion: 0.8,
    wFood: 3.5,

    foodFallSpeed: 0.9,
    foodSeekRadius: 30,
    foodEatDistance: 0.6,
    foodLifetimeOnFloor: 8,

    kelpBushCount: 28,
    giantKelpCount: 9,
    rockClusterCount: 9,
    rocksPerCluster: 4,
    extraCoralClusters: 18,
    outcropCount: 5,
    bubbleCount: 70,
}

const canvas = document.querySelector('canvas.webgl')
const sizes = { width: window.innerWidth, height: window.innerHeight }

const scene = new THREE.Scene()
scene.background = new THREE.Color(CONFIG.waterColor)
scene.fog = new THREE.FogExp2(CONFIG.waterColor, CONFIG.fogDensity)

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 200)
camera.position.set(0, 1, 17)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.95

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.target.set(0, -3, 0)
controls.minDistance = 5
controls.maxDistance = 45
controls.maxPolarAngle = Math.PI * 0.53


// Освітлення
const hemiLight = new THREE.HemisphereLight(0x8eeeff, 0x1d7f94, 2.1)
scene.add(hemiLight)

const ambientLight = new THREE.AmbientLight(0x3aa7c4, 0.4)
scene.add(ambientLight)

const sunLight = new THREE.DirectionalLight(0xe2fcff, 2.5)
sunLight.position.set(6, 20, 8)
scene.add(sunLight)

const rimLight = new THREE.DirectionalLight(0x5b94ff, 0.9)
rimLight.position.set(-10, 6, -12)
scene.add(rimLight)

const skyUniforms = {
    uTop: { value: new THREE.Color(0x62dcec) },
    uHorizon: { value: new THREE.Color(CONFIG.waterColor) },
    uBottom: { value: new THREE.Color(0x04263a) },
}
const sky = new THREE.Mesh(
    new THREE.SphereGeometry(150, 32, 16),
    new THREE.ShaderMaterial({
        uniforms: skyUniforms,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        toneMapped: false,
        vertexShader: `
            varying vec3 vDir;
            void main() {
                vDir = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 uTop;
            uniform vec3 uHorizon;
            uniform vec3 uBottom;
            varying vec3 vDir;
            void main() {
                float h = normalize(vDir).y;
                vec3 col = h > 0.0
                    ? mix(uHorizon, uTop, pow(h, 0.55))
                    : mix(uHorizon, uBottom, pow(-h, 0.7));
                gl_FragColor = linearToOutputTexel(vec4(col, 1.0));
            }
        `,
    })
)
sky.renderOrder = -10
sky.frustumCulled = false
scene.add(sky)


// Свічення медуз і планктону
function createGlowTexture() {
    const c = document.createElement('canvas')
    c.width = c.height = 128
    const g = c.getContext('2d')
    const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64)
    grad.addColorStop(0, 'rgba(255,255,255,1)')
    grad.addColorStop(0.3, 'rgba(255,255,255,0.35)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    g.fillStyle = grad
    g.fillRect(0, 0, 128, 128)
    const tex = new THREE.CanvasTexture(c)
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
}
const glowTexture = createGlowTexture()


// Каустика
const causticUniforms = {
    uTime: { value: 0 },
    uStrength: { value: CONFIG.causticStrength },
}

const CAUSTIC_GLSL = `
    float causticPattern(vec2 p, float t) {
        vec2 i = p;
        float c = 1.0;
        float inten = 0.005;
        for (int n = 0; n < 4; n++) {
            float tt = t * (1.0 - (3.5 / float(n + 1)));
            i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
            c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
        }
        c /= 4.0;
        c = 1.17 - pow(c, 1.4);
        return pow(abs(c), 8.0);
    }
`

function addCaustics(material, k = 1) {
    material.onBeforeCompile = (shader) => {
        shader.uniforms.uCTime = causticUniforms.uTime
        shader.uniforms.uCStrength = causticUniforms.uStrength
        shader.uniforms.uCK = { value: k }

        shader.vertexShader = shader.vertexShader
            .replace('#include <common>', '#include <common>\nvarying vec3 vCausticPos;')
            .replace(
                '#include <begin_vertex>',
                '#include <begin_vertex>\nvCausticPos = (modelMatrix * vec4(transformed, 1.0)).xyz;'
            )

        shader.fragmentShader = shader.fragmentShader
            .replace(
                '#include <common>',
                '#include <common>\nvarying vec3 vCausticPos;\nuniform float uCTime;\nuniform float uCStrength;\nuniform float uCK;\n' + CAUSTIC_GLSL
            )
            .replace(
                '#include <emissivemap_fragment>',
                `#include <emissivemap_fragment>
                {
                    vec2 cp = mod(vCausticPos.xz * 0.63 + vec2(vCausticPos.y * 0.25, 0.0), 6.28318) - 250.0;
                    float cv = causticPattern(cp, uCTime * 0.55);
                    float up = clamp(inverseTransformDirection(normal, viewMatrix).y * 0.5 + 0.5, 0.0, 1.0);
                    float depthFade = clamp((vCausticPos.y + 14.0) / 22.0, 0.35, 1.0);
                    totalEmissiveRadiance += diffuseColor.rgb * vec3(0.75, 1.0, 1.0) * cv * uCStrength * uCK * mix(0.25, 1.0, up) * depthFade * 0.9;
                }`
            )
    }
}


// Планктон
const plankton = (() => {
    const count = 700
    const range = 38
    const positions = new Float32Array(count * 3)
    const seeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
        positions[i * 3] = THREE.MathUtils.randFloatSpread(range * 2)
        positions[i * 3 + 1] = THREE.MathUtils.randFloat(CONFIG.floorY + 1, CONFIG.waterTop)
        positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(range * 2)
        seeds[i] = Math.random()
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({
        map: glowTexture,
        color: 0xbff4ff,
        size: 0.22,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    }))
    points.frustumCulled = false
    scene.add(points)

    return {
        update(dt, t) {
            for (let i = 0; i < count; i++) {
                const seed = seeds[i]
                positions[i * 3] += Math.sin(t * 0.2 + seed * 20) * dt * 0.18
                positions[i * 3 + 1] += dt * (0.04 + seed * 0.08)
                positions[i * 3 + 2] += Math.cos(t * 0.17 + seed * 15) * dt * 0.18
                if (positions[i * 3 + 1] > CONFIG.waterTop) positions[i * 3 + 1] = CONFIG.floorY + 1
            }
            geometry.attributes.position.needsUpdate = true
        },
    }
})()


//Дно
const CHEST_X = 6
const CHEST_Z = 4

function heightAt(x, z) {
    const distToChest = Math.hypot(x - CHEST_X, z - CHEST_Z)
    const chestFlatten = THREE.MathUtils.clamp((distToChest - 1.5) / 4.5, 0, 1)

    const dunes = Math.sin(x * 0.11 + Math.sin(z * 0.07) * 1.5) * Math.cos(z * 0.09) * 2.0
    const ridges = Math.sin(x * 0.22 + z * 0.18) * 0.7
    const ripples = Math.sin(x * 0.5 + z * 0.4) * 0.15

    return (dunes + ridges + ripples) * chestFlatten
}

function groundY(x, z) {
    return CONFIG.floorY + heightAt(x, z)
}

const floorGeometry = new THREE.PlaneGeometry(160, 160, 150, 150)
floorGeometry.rotateX(-Math.PI / 2)

const textureLoader = new THREE.TextureLoader()
const exrLoader = new EXRLoader()

function loadPbrTexture(loader, path, { color = false, repeat = 1 } = {}) {
    const texture = loader.load(path, undefined, undefined, (error) => {
        console.error(`Не вдалося завантажити текстуру ${path}:`, error)
    })
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(repeat, repeat)
    if (color) texture.colorSpace = THREE.SRGBColorSpace
    return texture
}

function loadPbrMaps(directory, name, roughnessExtension = 'jpg', repeat = 1) {
    const texturePath = `${directory}/textures/${name}`
    return {
        map: loadPbrTexture(
            textureLoader,
            `${texturePath}_diff_1k.jpg`,
            { color: true, repeat }
        ),
        normalMap: loadPbrTexture(
            exrLoader,
            `${texturePath}_nor_gl_1k.exr`,
            { repeat }
        ),
        roughnessMap: loadPbrTexture(
            roughnessExtension === 'exr' ? exrLoader : textureLoader,
            `${texturePath}_rough_1k.${roughnessExtension}`,
            { repeat }
        ),
    }
}

const floorPositions = floorGeometry.attributes.position
const floorColors = new Float32Array(floorPositions.count * 3)
const sandLow = new THREE.Color(0x9e8352)
const sandHigh = new THREE.Color(0xe0cd9d)
const sandTmp = new THREE.Color()

for (let i = 0; i < floorPositions.count; i++) {
    const x = floorPositions.getX(i)
    const z = floorPositions.getZ(i)
    const h = heightAt(x, z)
    floorPositions.setY(i, CONFIG.floorY + h)

    const t = THREE.MathUtils.clamp((h + 2.5) / 5, 0, 1)
    sandTmp.lerpColors(sandLow, sandHigh, t)
    floorColors[i * 3] = sandTmp.r
    floorColors[i * 3 + 1] = sandTmp.g
    floorColors[i * 3 + 2] = sandTmp.b
}
floorGeometry.setAttribute('color', new THREE.BufferAttribute(floorColors, 3))
floorGeometry.computeVertexNormals()

const floorMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    vertexColors: true,
    roughness: 1,
    metalness: 0,
    ...loadPbrMaps('/sand/aerial_beach_01_1k.blend', 'aerial_beach_01', 'jpg', 12),
})
addCaustics(floorMaterial)
const floor = new THREE.Mesh(floorGeometry, floorMaterial)
scene.add(floor)

const SHIP = { x: -14, z: -13, scale: 2.2, rotY: -0.35 }

function nearShip(x, z, margin = 2) {
    const dx = x - SHIP.x
    const dz = z - SHIP.z
    const c = Math.cos(SHIP.rotY)
    const s = Math.sin(SHIP.rotY)
    const lx = dx * c - dz * s
    const lz = dx * s + dz * c
    return (
        lx > -6 * SHIP.scale - margin &&
        lx < 7 * SHIP.scale + margin &&
        Math.abs(lz) < 2 * SHIP.scale + margin
    )
}

function nearChest(x, z, radius = 4) {
    return Math.hypot(x - CHEST_X, z - CHEST_Z) < radius
}

function randomSpot(range, margin = 2, chestRadius = 4) {
    let x = 0, z = 0
    for (let tries = 0; tries < 60; tries++) {
        x = THREE.MathUtils.randFloatSpread(range * 2)
        z = THREE.MathUtils.randFloatSpread(range * 2)
        if (!nearShip(x, z, margin) && !nearChest(x, z, chestRadius)) break
    }
    return { x, z }
}


function createChain({ segments, segLength, radius, material, direction = 1 }) {
    const geometry = new THREE.CylinderGeometry(0.8, 1, segLength, 6, 1)
    geometry.translate(0, (direction * segLength) / 2, 0)

    const root = new THREE.Group()
    const segs = []
    let parent = root

    for (let i = 0; i < segments; i++) {
        const seg = new THREE.Group()
        seg.position.y = i === 0 ? 0 : direction * segLength
        parent.add(seg)

        const mesh = new THREE.Mesh(geometry, material)
        const taper = 1 - (i / segments) * 0.65
        mesh.scale.set(radius * taper, 1, radius * taper)
        seg.add(mesh)

        segs.push(seg)
        parent = seg
    }

    return { root, segs }
}


//Водорості
const kelpMaterials = [
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.7,
        ...loadPbrMaps('/algae/concrete_moss_1k.blend', 'concrete_moss', 'exr'),
    }),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.7,
        ...loadPbrMaps('/algae/moss_wood_1k.blend', 'moss_wood'),
    }),
]

kelpMaterials.forEach((m) => addCaustics(m))

const kelpStrands = []

function createKelpBush(x, z, giant = false) {
    const bush = new THREE.Group()
    bush.position.set(x, groundY(x, z) - 0.1, z)

    const strands = giant ? THREE.MathUtils.randInt(1, 2) : THREE.MathUtils.randInt(2, 4)
    for (let s = 0; s < strands; s++) {
        const chain = createChain(
            giant
                ? {
                      segments: THREE.MathUtils.randInt(16, 22),
                      segLength: THREE.MathUtils.randFloat(0.8, 1.0),
                      radius: THREE.MathUtils.randFloat(0.16, 0.22),
                      material: kelpMaterials[Math.floor(Math.random() * kelpMaterials.length)],
                  }
                : {
                      segments: THREE.MathUtils.randInt(6, 9),
                      segLength: THREE.MathUtils.randFloat(0.6, 0.9),
                      radius: THREE.MathUtils.randFloat(0.1, 0.16),
                      material: kelpMaterials[Math.floor(Math.random() * kelpMaterials.length)],
                  }
        )
        const angle = Math.random() * Math.PI * 2
        chain.root.position.set(Math.cos(angle) * 0.3, 0, Math.sin(angle) * 0.3)
        bush.add(chain.root)

        kelpStrands.push({
            segs: chain.segs,
            phase: Math.random() * Math.PI * 2,
            amp: giant ? 0.05 : 0.1,
            lean: giant ? 0.02 : 0.05,
            speed: giant ? 0.6 : 0.9,
        })
    }

    scene.add(bush)
}

for (let i = 0; i < CONFIG.kelpBushCount; i++) {
    const { x, z } = randomSpot(50, 2, 4)
    createKelpBush(x, z, false)
}
for (let i = 0; i < CONFIG.giantKelpCount; i++) {
    const { x, z } = randomSpot(34, 3, 5)
    createKelpBush(x, z, true)
}

function updateKelp(t) {
    const s = CONFIG.currentStrength
    for (const strand of kelpStrands) {
        for (let i = 0; i < strand.segs.length; i++) {
            const seg = strand.segs[i]
            seg.rotation.z = -strand.lean * s + Math.sin(t * strand.speed + strand.phase + i * 0.55) * strand.amp * s
            seg.rotation.x = Math.sin(t * strand.speed * 0.78 + strand.phase * 1.7 + i * 0.45) * strand.amp * 0.7 * s
        }
    }
}

const rockMaterials = [
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 1,
        flatShading: true,
        ...loadPbrMaps('/stone/stone1_1k.blend', 'marble_cliff_05', 'exr'),
    }),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 1,
        flatShading: true,
        ...loadPbrMaps('/stone/seaside_rock_1k.blend', 'seaside_rock', 'exr'),
    }),
]

rockMaterials.forEach((m) => addCaustics(m))

function createRockGeometry(radius, detail = 0) {
    const geometry = Math.random() < 0.5
        ? new THREE.DodecahedronGeometry(radius, detail)
        : new THREE.IcosahedronGeometry(radius, detail)

    const pos = geometry.attributes.position
    const seed = Math.random() * 100
    for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i)
        const k = 1 + 0.18 * Math.sin((x * 3.1) / radius + seed) * Math.cos((y * 2.7) / radius + seed * 1.3)
        pos.setXYZ(i, x * k, y * k, z * k)
    }
    geometry.computeVertexNormals()
    return geometry
}

function createRock(x, z, radius) {
    const mesh = new THREE.Mesh(
        createRockGeometry(radius, radius > 1 ? 1 : 0),
        rockMaterials[Math.floor(Math.random() * rockMaterials.length)]
    )
    const squash = THREE.MathUtils.randFloat(0.55, 0.9)
    mesh.scale.set(THREE.MathUtils.randFloat(0.9, 1.2), squash, THREE.MathUtils.randFloat(0.8, 1.1))
    mesh.rotation.set(Math.random() * 0.4, Math.random() * Math.PI * 2, Math.random() * 0.4)
    mesh.position.set(x, groundY(x, z) + radius * squash * 0.25, z)
    scene.add(mesh)
    return mesh
}

const rockLocations = []

function createRockCluster(cx, cz) {
    for (let i = 0; i < CONFIG.rocksPerCluster; i++) {
        if (i === 0) {
            const radius = THREE.MathUtils.randFloat(1.1, 1.8)
            createRock(cx, cz, radius)
            rockLocations.push({ x: cx, z: cz, radius })
        } else {
            const angle = Math.random() * Math.PI * 2
            const dist = THREE.MathUtils.randFloat(1.4, 3.2)
            const x = cx + Math.cos(angle) * dist
            const z = cz + Math.sin(angle) * dist
            const radius = THREE.MathUtils.randFloat(0.35, 0.9)
            createRock(x, z, radius)
            rockLocations.push({ x, z, radius })
        }
    }
}

function createOutcrop(x, z) {
    const group = new THREE.Group()
    group.position.set(x, groundY(x, z) - 0.6, z)
    const levels = [{ r: 2.4, y: 0.8 }, { r: 1.8, y: 2.5 }, { r: 1.25, y: 4.0 }, { r: 0.8, y: 5.1 }]
    const mat = rockMaterials[Math.floor(Math.random() * rockMaterials.length)]

    for (const level of levels) {
        const mesh = new THREE.Mesh(createRockGeometry(level.r, 1), mat)
        mesh.scale.y = THREE.MathUtils.randFloat(1.1, 1.5)
        mesh.position.set(THREE.MathUtils.randFloatSpread(0.5), level.y, THREE.MathUtils.randFloatSpread(0.5))
        mesh.rotation.y = Math.random() * Math.PI * 2
        group.add(mesh)
    }
    group.scale.setScalar(THREE.MathUtils.randFloat(0.8, 1.35))
    scene.add(group)
    rockLocations.push({ x, z, radius: 3.5 })
}

// Корали
const coralColors = [0xff3d8b, 0xff7a1a, 0x19e6d0, 0xff5a3d, 0xb04dff, 0xffd23d]
const spongeNormalMap = loadPbrTexture(
    textureLoader,
    '/corals/Sponge001_1K-JPG/Sponge001_1K-JPG_NormalGL.jpg',
    { repeat: 0.7 }
)
const spongeRoughnessMap = loadPbrTexture(
    textureLoader,
    '/corals/Sponge001_1K-JPG/Sponge001_1K-JPG_Roughness.jpg',
    { repeat: 0.7 }
)
spongeNormalMap.repeat.set(0.7, 0.7)
spongeRoughnessMap.repeat.set(0.7, 0.7)
const coralMaterials = coralColors.map(color => {
    const material = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.03,
        roughness: 0.9,
        normalMap: spongeNormalMap,
        roughnessMap: spongeRoughnessMap,
    })
    material.normalScale.set(8, 8)
    return material
})
const coralTubeMaterials = coralMaterials.map(m => {
    const clone = m.clone()
    clone.side = THREE.DoubleSide
    clone.roughness = 0.9
    clone.normalScale.set(8, 8)
    return clone
})

coralMaterials.forEach((m) => addCaustics(m, 0.3))
coralTubeMaterials.forEach((m) => addCaustics(m, 0.3))

const branchGeometry = new THREE.CylinderGeometry(0.05, 0.12, 1, 6)
branchGeometry.translate(0, 0.5, 0)
const brainGeometry = new THREE.IcosahedronGeometry(1, 2)
const tubeGeometry = new THREE.CylinderGeometry(0.11, 0.15, 1, 8, 1, true)
tubeGeometry.translate(0, 0.5, 0)

function createBranchCoral(materialIndex) {
    const group = new THREE.Group()
    const material = coralMaterials[materialIndex]
    const branches = THREE.MathUtils.randInt(4, 7)

    for (let k = 0; k < branches; k++) {
        const pivot = new THREE.Group()
        pivot.rotation.order = 'YXZ'
        pivot.rotation.set(THREE.MathUtils.randFloat(0.2, 0.7), Math.random() * Math.PI * 2, 0)

        const len = THREE.MathUtils.randFloat(0.7, 1.5)
        const branch = new THREE.Mesh(branchGeometry, material)
        branch.scale.set(1, len, 1)
        pivot.add(branch)

        const sub = new THREE.Group()
        sub.position.y = len * 0.6
        sub.rotation.z = (Math.random() < 0.5 ? -1 : 1) * THREE.MathUtils.randFloat(0.5, 0.9)
        const subLen = len * 0.45
        const subBranch = new THREE.Mesh(branchGeometry, material)
        subBranch.scale.set(0.7, subLen, 0.7)
        sub.add(subBranch)

        pivot.add(sub)
        group.add(pivot)
    }
    return group
}

function createBrainCoral(materialIndex) {
    const group = new THREE.Group()
    const r = THREE.MathUtils.randFloat(0.2, 0.45)
    const mesh = new THREE.Mesh(brainGeometry, coralMaterials[materialIndex])
    mesh.scale.set(r, r * 0.65, r)
    mesh.position.y = r * 0.1
    group.add(mesh)

    for (let k = 0; k < 2; k++) {
        const small = new THREE.Mesh(brainGeometry, coralMaterials[materialIndex])
        const sr = r * THREE.MathUtils.randFloat(0.4, 0.6)
        small.scale.set(sr, sr * 0.7, sr)
        small.position.set(THREE.MathUtils.randFloatSpread(r * 2), sr * 0.1, THREE.MathUtils.randFloatSpread(r * 2))
        group.add(small)
    }
    return group
}

function createTubeCoral(materialIndex) {
    const group = new THREE.Group()
    const count = THREE.MathUtils.randInt(5, 8)
    for (let k = 0; k < count; k++) {
        const tube = new THREE.Mesh(tubeGeometry, coralTubeMaterials[materialIndex])
        tube.scale.set(THREE.MathUtils.randFloat(0.8, 1.3), THREE.MathUtils.randFloat(0.4, 1.3), THREE.MathUtils.randFloat(0.8, 1.3))
        tube.position.set(THREE.MathUtils.randFloatSpread(0.7), 0, THREE.MathUtils.randFloatSpread(0.7))
        tube.rotation.set(THREE.MathUtils.randFloatSpread(0.3), 0, THREE.MathUtils.randFloatSpread(0.3))
        group.add(tube)
    }
    return group
}

const coralBuilders = [createBranchCoral, createBranchCoral, createBrainCoral, createTubeCoral]

function isNearRock(x, z) {
    const coralClearance = 1.2
    return rockLocations.some((rock) => {
        const clearance = rock.radius * 1.2 + coralClearance
        return Math.hypot(x - rock.x, z - rock.z) < clearance
    })
}

function createCoralCluster(cx, cz, count = THREE.MathUtils.randInt(8, 14)) {
    for (let i = 0; i < count; i++) {
        for (let attempt = 0; attempt < 4; attempt++) {
            const angle = Math.random() * Math.PI * 2
            const dist = THREE.MathUtils.randFloat(2.0, 3.8)
            const x = cx + Math.cos(angle) * dist
            const z = cz + Math.sin(angle) * dist
            if (nearShip(x, z, 1) || nearChest(x, z, 2.5) || isNearRock(x, z)) continue

            const build = coralBuilders[Math.floor(Math.random() * coralBuilders.length)]
            const coral = build(Math.floor(Math.random() * coralMaterials.length))
            coral.position.set(x, groundY(x, z) + 0.05, z)
            coral.rotation.y = Math.random() * Math.PI * 2
            coral.scale.setScalar(THREE.MathUtils.randFloat(0.7, 1.4))
            scene.add(coral)
            break
        }
    }
}

const rockAnchors = [[-6, 6], [13, -5], [-19, 5], [3, -14], [19, 11], [-4, -3], [-14, 15], [9, -24], [24, 0]]
const rockClusterCenters = []
for (let i = 0; i < CONFIG.rockClusterCount; i++) {
    const anchor = rockAnchors[i % rockAnchors.length]
    const x = anchor[0] + THREE.MathUtils.randFloatSpread(3)
    const z = anchor[1] + THREE.MathUtils.randFloatSpread(3)
    createRockCluster(x, z)
    rockClusterCenters.push({ x, z })
}

const outcropAnchors = [[-22, 4], [20, -12], [6, -26], [-14, 9], [26, 8]]
const outcropCenters = []
for (let i = 0; i < CONFIG.outcropCount; i++) {
    const anchor = outcropAnchors[i % outcropAnchors.length]
    const x = anchor[0] + THREE.MathUtils.randFloatSpread(2)
    const z = anchor[1] + THREE.MathUtils.randFloatSpread(2)
    createOutcrop(x, z)
    outcropCenters.push({ x, z })
}

for (const { x, z } of rockClusterCenters) {
    createCoralCluster(x + THREE.MathUtils.randFloatSpread(3), z + THREE.MathUtils.randFloatSpread(3))
}

for (let i = 0; i < CONFIG.extraCoralClusters; i++) {
    const { x, z } = randomSpot(30, 2, 3)
    createCoralCluster(x, z)
}

for (const { x, z } of outcropCenters) {
    createCoralCluster(x + 2.5, z + 1.5, THREE.MathUtils.randInt(8, 14))
}

for (let i = 0; i < 48; i++) {
    const x = THREE.MathUtils.randFloatSpread(36)
    const z = THREE.MathUtils.randFloat(-4, 24)
    createCoralCluster(x, z, 1)
}


//Скриня зі скарбами
const woodMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.85,
    ...loadPbrMaps('/coffer/plank_flooring_04_1k.blend', 'plank_flooring_04', 'exr', 2),
})

function loadCofferMetalMaps(name, repeat = 2) {
    const directory = `/coffer/${name}_1K-JPG/${name}_1K-JPG`
    return {
        map: loadPbrTexture(textureLoader, `${directory}_Color.jpg`, { color: true, repeat }),
        normalMap: loadPbrTexture(textureLoader, `${directory}_NormalGL.jpg`, { repeat }),
        roughnessMap: loadPbrTexture(textureLoader, `${directory}_Roughness.jpg`, { repeat }),
        metalnessMap: loadPbrTexture(textureLoader, `${directory}_Metalness.jpg`, { repeat }),
    }
}

const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xffc83d,
    metalness: 1,
    roughness: 0.35,
    emissive: 0x553800,
    emissiveIntensity: 0.5,
    ...loadCofferMetalMaps('Metal042A'),
})
const treasureMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 0.9,
    roughness: 0.35,
    emissive: 0x000000,
    emissiveIntensity: 0.05,
    ...loadCofferMetalMaps('Metal034', 3),
})
treasureMaterial.normalScale.set(2.5, 2.5)

addCaustics(woodMaterial)

function createTreasureChest() {
    const chest = new THREE.Group()

    const base = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.9, 1.1), woodMaterial)
    base.position.y = 0.45
    chest.add(base)

    const bottomStripe = new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.16, 1.16), goldMaterial)
    bottomStripe.position.y = 0.08
    chest.add(bottomStripe)

    const rim = new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.1, 1.16), goldMaterial)
    rim.position.y = 0.87
    chest.add(rim)

    const lock = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.28, 0.08), goldMaterial)
    lock.position.set(0, 0.75, 0.58)
    chest.add(lock)

    const lidPivot = new THREE.Group()
    lidPivot.position.set(0, 0.9, -0.55)
    lidPivot.rotation.x = -0.9
    chest.add(lidPivot)

    const lidGeometry = new THREE.CylinderGeometry(0.55, 0.55, 1.8, 20, 1, false, 0, Math.PI)
    lidGeometry.rotateZ(Math.PI / 2)
    const lidMat = woodMaterial.clone()
    lidMat.side = THREE.DoubleSide
    addCaustics(lidMat)
    const lid = new THREE.Mesh(lidGeometry, lidMat)
    lid.position.z = 0.55
    lidPivot.add(lid)

    const bandGeometry = new THREE.CylinderGeometry(0.57, 0.57, 0.14, 20, 1, false, 0, Math.PI)
    bandGeometry.rotateZ(Math.PI / 2)
    for (const x of [-0.55, 0.55]) {
        const band = new THREE.Mesh(bandGeometry, goldMaterial)
        band.position.set(x, 0, 0.55)
        lidPivot.add(band)
    }

    const pile = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
        treasureMaterial
    )
    pile.scale.set(1.15, 0.4, 0.7)
    pile.position.y = 0.92
    chest.add(pile)

    const coinGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.03, 12)
    for (let i = 0; i < 7; i++) {
        const coin = new THREE.Mesh(coinGeometry, treasureMaterial)
        coin.position.set(
            THREE.MathUtils.randFloatSpread(1.0),
            1.05 + Math.random() * 0.1,
            THREE.MathUtils.randFloatSpread(0.5)
        )
        coin.rotation.set(Math.random(), Math.random(), Math.random())
        chest.add(coin)
    }

    const light = new THREE.PointLight(0xffc84a, 28, 16, 2)
    light.position.set(0, 1.4, 0)
    chest.add(light)

    const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 20, 16),
        new THREE.MeshBasicMaterial({
            color: 0xffc84a, transparent: true, opacity: 0.15,
            blending: THREE.AdditiveBlending, depthWrite: false
        })
    )
    glow.position.set(0, 1.3, 0)
    chest.add(glow)

    chest.position.set(CHEST_X, groundY(CHEST_X, CHEST_Z) - 0.02, CHEST_Z)
    chest.rotation.y = -0.6
    scene.add(chest)

    return { chest, light, glow }
}

const { chest, light: chestLight, glow: chestGlow } = createTreasureChest()
chest.updateMatrixWorld(true)
const chestMouth = chest.localToWorld(new THREE.Vector3(0, 1.3, 0))

function updateChest(t) {
    const pulse = Math.sin(t * 2.2) * 0.5 + 0.5
    chestLight.intensity = 20 + pulse * 12
    chestGlow.material.opacity = 0.1 + pulse * 0.1
}


//Затонулий Корабель
const shipSails = []

function createShipwreck() {
    const hullMaterial = new THREE.MeshStandardMaterial({
        color: 0x30241b,
        roughness: 1,
        flatShading: true,
        ...loadPbrMaps('/ship/rough_wood_1k.blend', 'rough_wood'),
    })
    const deckMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 1,
        ...loadPbrMaps('/ship/plank_flooring_03_1k.blend', 'plank_flooring_03', 'exr', 2),
    })
    const mastMaps = loadPbrMaps('/ship/knotted_pine_bark_1k.blend', 'knotted_pine_bark', 'exr')
    const plankMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 1,
        ...mastMaps,
    })
    const mastMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 1,
        ...mastMaps,
    })
    const barrelMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 1,
        ...loadPbrMaps('/ship/wooden_gate_1k.blend', 'wooden_gate', 'exr'),
    })
    const sailMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.9,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
        ...loadPbrMaps('/ship/curly_teddy_natural_1k.blend', 'curly_teddy_natural', 'exr'),
    })
    for (const m of [hullMaterial, deckMaterial, plankMaterial, mastMaterial, barrelMaterial]) addCaustics(m)

    const sailShape = new THREE.Shape()
    sailShape.moveTo(-1.7, 1.4)
    sailShape.lineTo(1.7, 1.4)
    sailShape.lineTo(1.6, -0.8)
    sailShape.lineTo(1.1, -1.2)
    sailShape.lineTo(0.7, -0.7)
    sailShape.lineTo(0.2, -1.4)
    sailShape.lineTo(-0.3, -0.9)
    sailShape.lineTo(-0.8, -1.3)
    sailShape.lineTo(-1.3, -0.7)
    sailShape.lineTo(-1.7, -1.4)
    sailShape.closePath()

    const holePath = new THREE.Path()
    holePath.moveTo(0.3, 0.2)
    holePath.lineTo(0.7, 0.4)
    holePath.lineTo(0.9, 0.0)
    holePath.lineTo(0.6, -0.4)
    holePath.lineTo(0.1, -0.3)
    holePath.lineTo(0.2, 0.1)
    holePath.closePath()
    sailShape.holes = [holePath]
    const sailGeometry = new THREE.ExtrudeGeometry(sailShape, { depth: 0.01, bevelEnabled: false })
    sailMaterial.normalScale.set(0.1, 0.1)

    const ship = new THREE.Group()

    const outer = [[-6, -2], [3, -2], [5.2, -1.3], [4.5, -0.5], [6, 0.2], [4.6, 0.9], [5.2, 1.5], [3, 2], [-6, 2]]
    const inner = [[-5.65, -1.65], [2.9, -1.65], [4.6, -1.0], [4.0, -0.4], [5.0, 0.2], [4.1, 0.6], [4.5, 1.1], [2.9, 1.65], [-5.65, 1.65]]

    const hullShape = new THREE.Shape()
    outer.forEach(([x, y], i) => (i === 0 ? hullShape.moveTo(x, y) : hullShape.lineTo(x, y)))
    hullShape.closePath()

    const hole = new THREE.Path()
    inner.forEach(([x, y], i) => (i === 0 ? hole.moveTo(x, y) : hole.lineTo(x, y)))
    hole.closePath()
    hullShape.holes.push(hole)

    const hullGeometry = new THREE.ExtrudeGeometry(hullShape, { depth: 3.8, bevelEnabled: false })
    hullGeometry.rotateX(-Math.PI / 2)
    hullGeometry.translate(0, -1, 0)
    ship.add(new THREE.Mesh(hullGeometry, hullMaterial))

    const deckShape = new THREE.Shape()
    inner.forEach(([x, y], i) => (i === 0 ? deckShape.moveTo(x, y) : deckShape.lineTo(x, y)))
    deckShape.closePath()
    const deckGeometry = new THREE.ExtrudeGeometry(deckShape, { depth: 0.25, bevelEnabled: false })
    deckGeometry.rotateX(-Math.PI / 2)
    deckGeometry.translate(0, 1.75, 0)
    ship.add(new THREE.Mesh(deckGeometry, deckMaterial))

    const plankGeometry = new THREE.BoxGeometry(0.05, 0.02, 3.2)
    for (let x = -5.2; x < 2.6; x += 0.8) {
        const plank = new THREE.Mesh(plankGeometry, deckMaterial)
        plank.position.set(x, 2.01, 0)
        ship.add(plank)
    }

    const cabin = new THREE.Mesh(new THREE.BoxGeometry(3, 1.6, 3.2), hullMaterial)
    cabin.position.set(-4.3, 2.8, 0)
    ship.add(cabin)

    const hatch = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.3, 1.2), plankMaterial)
    hatch.position.set(-0.8, 2.15, 0.1)
    ship.add(hatch)

    const barrelProfile = []
    const barrelHeight = 0.75
    barrelProfile.push(new THREE.Vector2(0, -barrelHeight / 2))
    for (let i = 0; i <= 10; i++) {
        const t = i / 10
        const y = (t - 0.5) * barrelHeight
        const radius = 0.35 + Math.sin(t * Math.PI) * 0.08
        barrelProfile.push(new THREE.Vector2(radius, y))
    }
    barrelProfile.push(new THREE.Vector2(0, barrelHeight / 2))
    const barrelGeometry = new THREE.LatheGeometry(barrelProfile, 16)
    const barrelA = new THREE.Mesh(barrelGeometry, barrelMaterial)
    barrelA.position.set(0.9, 2.4, 0.95)
    ship.add(barrelA)

    const barrelB = new THREE.Mesh(barrelGeometry, barrelMaterial)
    barrelB.position.set(1.7, 2.2, -0.9)
    barrelB.rotation.z = Math.PI / 2 - 0.2
    ship.add(barrelB)

    const ribGeometry = new THREE.BoxGeometry(0.14, 2.2, 0.14)
    const ribs = [[3.2, 1.9, 0.2], [3.9, -1.9, -0.25], [4.6, 1.7, 0.3], [5.0, -1.2, -0.3]]
    for (const [x, z, tiltX] of ribs) {
        const rib = new THREE.Mesh(ribGeometry, mastMaterial)
        rib.position.set(x, 3.6, z)
        rib.rotation.x = tiltX
        ship.add(rib)
    }

    const bowsprit = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.16, 2.6, 6), mastMaterial)
    bowsprit.rotation.z = -Math.PI / 2 + 0.5
    bowsprit.position.set(5.4, 2.7, 0.2)
    ship.add(bowsprit)

    const masts = [
        { x: -2.5, h: 6, tilt: 0.05, sail: false },
        { x: 1.5, h: 7.5, tilt: -0.08, sail: true },
        { x: 4.2, h: 3.2, tilt: -0.55, sail: false },
    ]
    for (const { x, h, tilt, sail } of masts) {
        const mastGeometry = new THREE.CylinderGeometry(0.12, 0.17, h, 6)
        mastGeometry.translate(0, h / 2, 0)
        const mast = new THREE.Mesh(mastGeometry, mastMaterial)
        mast.position.set(x, 1.95, 0)
        mast.rotation.z = tilt
        ship.add(mast)

        const yard = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 4.5), mastMaterial)
        yard.position.set(0, h * 0.75, 0)
        mast.add(yard)

        if (sail) {
            const cloth = new THREE.Mesh(sailGeometry, sailMaterial)
            cloth.rotation.y = Math.PI / 2
            cloth.position.set(0.05, h * 0.75 - 1.5, 0)
            mast.add(cloth)
            shipSails.push(cloth)
        }
    }

    ship.rotation.set(0.3, 0, -0.06)

    const pivot = new THREE.Group()
    pivot.add(ship)
    pivot.rotation.y = SHIP.rotY
    pivot.scale.setScalar(SHIP.scale)
    pivot.position.set(SHIP.x, groundY(SHIP.x, SHIP.z) - 1.2, SHIP.z)
    scene.add(pivot)
}

createShipwreck()


//  Промені світла
const godRays = []

const godRayVertexShader = `
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vV;
    varying float vDist;
    void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        vDist = -mv.z;
        gl_Position = projectionMatrix * mv;
    }
`
const godRayFragmentShader = `
    uniform float uTime;
    uniform float uIntensity;
    uniform float uPhase;
    uniform vec3 uColor;
    varying vec2 vUv;
    varying vec3 vN;
    varying vec3 vV;
    varying float vDist;
    void main() {
        float edge = pow(abs(dot(normalize(vN), normalize(vV))), 2.2);
        float nearFade = smoothstep(5.0, 22.0, vDist);
        float vert = pow(smoothstep(0.0, 1.0, vUv.y), 1.5);
        float streak = 0.65 + 0.35
            * sin(vUv.x * 6.28318 * 5.0 + uTime * 0.35 + uPhase)
            * sin(vUv.x * 6.28318 * 3.0 - uTime * 0.22 + uPhase * 2.0);
        gl_FragColor = vec4(uColor, edge * vert * streak * nearFade * uIntensity);
    }
`

function createGodRay({ x, z, radius, tilt, tiltX, phase }) {
    const height = CONFIG.waterTop - CONFIG.floorY + 6
    const group = new THREE.Group()
    const layers = []

    for (const layer of [
        { scale: 1, strength: 0.28 },
        { scale: 0.55, strength: 0.22 },
    ]) {
        const geometry = new THREE.CylinderGeometry(radius * layer.scale * 0.25, radius * layer.scale, height, 32, 1, true)
        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uIntensity: { value: 0 },
                uPhase: { value: phase },
                uColor: { value: new THREE.Color(0x8fdcf2) },
            },
            vertexShader: godRayVertexShader,
            fragmentShader: godRayFragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide,
            fog: false,
        })
        group.add(new THREE.Mesh(geometry, material))
        layers.push({ material, baseStrength: layer.strength })
    }

    group.position.set(x, CONFIG.waterTop + 3 - height / 2, z)
    group.rotation.set(tiltX, 0, tilt)
    scene.add(group)

    godRays.push({ group, layers, phase, baseTilt: tilt, baseTiltX: tiltX })
}

createGodRay({ x: -12, z: -4, radius: 3.4, tilt: 0.14, tiltX: -0.06, phase: 0.0 })
createGodRay({ x: -2, z: -10, radius: 4.4, tilt: 0.10, tiltX: -0.10, phase: 1.7 })
createGodRay({ x: 10, z: 0, radius: 3.2, tilt: 0.16, tiltX: -0.04, phase: 3.1 })
createGodRay({ x: -5, z: 6, radius: 2.6, tilt: 0.12, tiltX: -0.08, phase: 4.4 })
createGodRay({ x: 15, z: -9, radius: 3.8, tilt: 0.18, tiltX: -0.05, phase: 5.2 })
createGodRay({ x: 2, z: -20, radius: 5.0, tilt: 0.10, tiltX: -0.10, phase: 2.4 })

function updateGodRays(t) {
    for (const ray of godRays) {
        const pulse = 0.65 + 0.35 * Math.sin(t * 0.7 + ray.phase)
        for (const layer of ray.layers) {
            layer.material.uniforms.uTime.value = t
            layer.material.uniforms.uIntensity.value = layer.baseStrength * pulse * CONFIG.godRayIntensity
        }
        ray.group.rotation.z = ray.baseTilt + Math.sin(t * 0.25 + ray.phase) * 0.025
        ray.group.rotation.x = ray.baseTiltX + Math.cos(t * 0.2 + ray.phase) * 0.015
    }
}


// Медузи
function createJellyfish({ color, scale, x, z, bottomY, topY, verticalSpeed, verticalPhase, withLight = false }) {
    const group = new THREE.Group()

    const bellMaterial = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 0.9, transparent: true, opacity: 0.5,
        roughness: 0.15, side: THREE.DoubleSide, depthWrite: false,
    })
    const innerMaterial = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 1.8, transparent: true, opacity: 0.7, depthWrite: false,
    })
    const tentacleMaterial = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 1.1, transparent: true, opacity: 0.6, depthWrite: false,
    })

    const bell = new THREE.Mesh(new THREE.SphereGeometry(1, 28, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), bellMaterial)
    bell.scale.set(1, 0.75, 1)
    group.add(bell)

    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.985, 0.035, 8, 40), innerMaterial)
    rim.rotation.x = Math.PI / 2
    rim.position.y = Math.cos(Math.PI * 0.55)
    bell.add(rim)

    const innerCore = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), innerMaterial)
    innerCore.position.y = 0.2
    group.add(innerCore)

    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTexture, color, transparent: true, opacity: 0.45,
        blending: THREE.AdditiveBlending, depthWrite: false,
    }))
    glow.scale.set(4.2, 4.2, 1)
    glow.position.y = -0.1
    group.add(glow)

    const tentacles = []
    const count = 7
    for (let k = 0; k < count; k++) {
        const angle = (k / count) * Math.PI * 2
        const chain = createChain({ segments: 5, segLength: 0.55, radius: 0.05, material: tentacleMaterial, direction: -1 })
        chain.root.position.set(Math.cos(angle) * 0.72, -0.1, Math.sin(angle) * 0.72)
        group.add(chain.root)
        tentacles.push({ segs: chain.segs, phase: k * 0.7 })
    }

    for (let k = 0; k < 2; k++) {
        const angle = (k / 2) * Math.PI * 2
        const chain = createChain({ segments: 6, segLength: 0.62, radius: 0.09, material: tentacleMaterial, direction: -1 })
        chain.root.position.set(Math.cos(angle) * 0.2, -0.05, Math.sin(angle) * 0.2)
        group.add(chain.root)
        tentacles.push({ segs: chain.segs, phase: k * 1.9 + 0.5 })
    }

    // Точкове світло
    if (withLight) {
        const light = new THREE.PointLight(color, 25 * scale, 14 * scale, 2)
        light.position.y = -0.3
        group.add(light)
    }

    group.scale.setScalar(scale)
    group.position.set(x, bottomY, z)
    scene.add(group)

    return {
        group, bell, glow, tentacles, scale,
        baseX: x, baseZ: z,
        bottomY, topY,
        verticalSpeed, verticalPhase,
        driftRadius: THREE.MathUtils.randFloat(1.5, 3.2),
        driftSpeed: THREE.MathUtils.randFloat(0.18, 0.35),
        pulseSpeed: THREE.MathUtils.randFloat(1.6, 2.4),
        pulsePhase: Math.random() * Math.PI * 2,
    }
}

const JELLY_COLORS = [0xff40bb, 0x00f5d4, 0x9d4edd, 0x4cc9f0, 0xffb703, 0xff6b9d, 0x7cf29a]

// Групи
const jellyBlooms = [
    { x: -9, z: 3, count: 4, spread: 5.5 },
    { x: 11, z: -1, count: 4, spread: 5.5 },
    { x: 1, z: -11, count: 3, spread: 6.5 },
    { x: -2, z: 9, count: 2, spread: 3.5 },
]

const jellyfishes = []

function spawnJelly(x, z, big = false) {
    const bottomY = THREE.MathUtils.randFloat(-4, -0.5)
    jellyfishes.push(createJellyfish({
        color: JELLY_COLORS[Math.floor(Math.random() * JELLY_COLORS.length)],
        scale: big ? THREE.MathUtils.randFloat(0.9, 1.25) : THREE.MathUtils.randFloat(0.5, 0.85),
        x, z,
        bottomY,
        topY: bottomY + THREE.MathUtils.randFloat(4, 8),
        verticalSpeed: THREE.MathUtils.randFloat(0.15, 0.32),
        verticalPhase: Math.random() * Math.PI * 2,
        withLight: jellyfishes.length % 4 === 0,
    }))
}

for (const bloom of jellyBlooms) {
    for (let i = 0; i < bloom.count; i++) {
        const angle = Math.random() * Math.PI * 2
        const dist = Math.sqrt(Math.random()) * bloom.spread
        spawnJelly(bloom.x + Math.cos(angle) * dist, bloom.z + Math.sin(angle) * dist)
    }
}
for (let i = 0; i < 3; i++) {
    spawnJelly(THREE.MathUtils.randFloatSpread(36), THREE.MathUtils.randFloat(-14, 12), true)
}

function updateJellyfish(t) {
    const s = CONFIG.currentStrength
    for (const j of jellyfishes) {
        const driftX = j.baseX
            + Math.sin(t * j.driftSpeed + j.verticalPhase) * j.driftRadius
            + Math.sin(t * 0.13 + j.pulsePhase) * 1.5
        const driftZ = j.baseZ + Math.cos(t * j.driftSpeed * 0.8 + j.verticalPhase) * j.driftRadius

        const progress = (Math.sin(t * j.verticalSpeed + j.verticalPhase) + 1) / 2
        const rawY = THREE.MathUtils.lerp(j.bottomY, j.topY, progress)
        const minSafeY = groundY(driftX, driftZ) + 1 + 4.6 * j.scale
        const pulseRaw = Math.sin(t * j.pulseSpeed + j.pulsePhase)
        const pulse = Math.pow((pulseRaw + 1) / 2, 2)

        j.group.position.set(driftX, Math.max(minSafeY, rawY) + pulse * 0.25 * j.scale, driftZ)
        j.group.rotation.x = Math.sin(t * 0.4 + j.pulsePhase) * 0.1
        j.group.rotation.z = Math.cos(t * 0.33 + j.pulsePhase) * 0.1

        j.bell.scale.set(1 - pulse * 0.12, 0.75 + pulse * 0.2, 1 - pulse * 0.12)
        j.glow.material.opacity = 0.3 + pulse * 0.25

        for (const tentacle of j.tentacles) {
            for (let i = 0; i < tentacle.segs.length; i++) {
                const a = t * 1.8 + tentacle.phase + i * 0.6
                tentacle.segs[i].rotation.x = Math.sin(a) * 0.25 * s
                tentacle.segs[i].rotation.z = Math.cos(a * 0.85) * 0.25 * s
            }
        }
    }
}


// Бульбашки
const bubbleGeometry = new THREE.SphereGeometry(1, 10, 10)
const bubbleMaterial = new THREE.MeshStandardMaterial({
    color: 0xbfefff, emissive: 0x7fcfff, emissiveIntensity: 0.25, transparent: true, opacity: 0.35, roughness: 0.1, depthWrite: false
})
const bubbles = []

function resetBubble(b, randomHeight) {
    if (b.fromChest) {
        b.x = chestMouth.x + THREE.MathUtils.randFloatSpread(0.8)
        b.z = chestMouth.z + THREE.MathUtils.randFloatSpread(0.6)
        b.startY = chestMouth.y
    } else {
        b.x = THREE.MathUtils.randFloatSpread(CONFIG.boundsXZ * 2)
        b.z = THREE.MathUtils.randFloatSpread(CONFIG.boundsXZ * 2)
        b.startY = groundY(b.x, b.z) + 0.2
    }
    b.y = randomHeight ? THREE.MathUtils.lerp(b.startY, CONFIG.waterTop, Math.random()) : b.startY
}

for (let i = 0; i < CONFIG.bubbleCount; i++) {
    const mesh = new THREE.Mesh(bubbleGeometry, bubbleMaterial)
    const size = THREE.MathUtils.randFloat(0.05, 0.17)
    mesh.scale.setScalar(size)
    scene.add(mesh)

    const bubble = {
        mesh, fromChest: i < Math.floor(CONFIG.bubbleCount * 0.4), speed: 0.6 + size * 7,
        phase: Math.random() * Math.PI * 2, x: 0, y: 0, z: 0, startY: 0,
    }
    resetBubble(bubble, true)
    bubbles.push(bubble)
}

function updateBubbles(dt, t) {
    for (const b of bubbles) {
        b.y += b.speed * dt
        if (b.y > CONFIG.waterTop) resetBubble(b, false)
        b.mesh.position.set(b.x + Math.sin(t * 1.5 + b.phase) * 0.15, b.y, b.z + Math.cos(t * 1.2 + b.phase) * 0.15)
    }
}

// Рибки
function loadFishTextureMaps(basePath, files, repeat = 2) {
    return {
        map: loadPbrTexture(textureLoader, `${basePath}_${files.color}`, { color: true, repeat }),
        normalMap: loadPbrTexture(textureLoader, `${basePath}_${files.normal}`, { repeat }),
        roughnessMap: loadPbrTexture(textureLoader, `${basePath}_${files.roughness}`, { repeat }),
    }
}

const fishTextureMaps = {
    redPlastic: loadFishTextureMaps(
        '/fish/plastic_0002_1k_UBw2zj/plastic_0002',
        { color: 'color_1k.jpg', normal: 'normal_opengl_1k.png', roughness: 'roughness_1k.jpg' }
    ),
    leather038: loadFishTextureMaps(
        '/fish/Leather038_1K-JPG/Leather038_1K-JPG',
        { color: 'Color.jpg', normal: 'NormalGL.jpg', roughness: 'Roughness.jpg' }
    ),
    leather035D: loadFishTextureMaps(
        '/fish/Leather035D_1K-JPG/Leather035D_1K-JPG',
        { color: 'Color.jpg', normal: 'NormalGL.jpg', roughness: 'Roughness.jpg' }
    ),
    biStretch: loadPbrMaps('/fish/bi_stretch_1k.blend', 'bi_stretch', 'exr', 2),
}

function createProceduralFishMesh(speciesId) {
    const fishGroup = new THREE.Group();

    const speciesConfigs = [
        // перша рибка
        {
            body: 0xff1a00,
            belly: 0xf2a5a0,
            fin: 0xa91e24,
            pattern: 0xffffff,
            bodyMaps: fishTextureMaps.redPlastic,
            finMaps: fishTextureMaps.redPlastic,
            type: "red"
        },
        // Риба клоун
        {
            body: 0xff8738,
            belly: 0xffd6a0,
            fin: 0xf15b35,
            pattern: 0xffffff,
            bodyMaps: fishTextureMaps.leather038,
            patternMaps: fishTextureMaps.leather035D,
            type: "orange"
        },
        // жовта рибка
        {
            body: 0xffd447,
            belly: 0xfff0a3,
            fin: 0xffa51e,
            pattern: 0xf28c28,
            bodyMaps: fishTextureMaps.biStretch,
            bellyMaps: fishTextureMaps.biStretch,
            finMaps: fishTextureMaps.biStretch,
            type: "yellow"
        },
        // ще одна риба
        {
            body: 0xa45be8,
            belly: 0xe5b8ff,
            fin: 0x7740bd,
            pattern: 0xffd45c,
            type: "purple"
        }
    ];

    const cfg = speciesConfigs[
        Math.abs(speciesId) % speciesConfigs.length
    ];

    const material = (color, roughness = 0.42, maps = null) =>
        new THREE.MeshStandardMaterial({
            color,
            roughness,
            metalness: 0,
            side: THREE.DoubleSide,
            ...(maps || {}),
        });

    const bodyMat = material(cfg.body, 0.34, cfg.bodyMaps);
    const bellyMat = material(cfg.belly, 0.42, cfg.bellyMaps);
    const finMat = material(cfg.fin, 0.38, cfg.finMaps);
    const patternMat = material(cfg.pattern, 0.35, cfg.patternMaps);
    const whiteMat = material(0xffffff, 0.2);
    const pupilMat = material(0x17202b, 0.18);
    const mouthMat = material(0x713a38);

    function addEllipsoid(parent, mat, position, scale, segments = 20) {
        const mesh = new THREE.Mesh(
            new THREE.SphereGeometry(1, segments, 16),
            mat
        );

        mesh.position.set(...position);
        mesh.scale.set(...scale);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        parent.add(mesh);
        return mesh;
    }


    const isSlim = cfg.type === "yellow";
    const bodyScale = isSlim ? [0.175, 0.28, 0.50] : [0.21, 0.28, 0.50];
    const bellyScale = isSlim ? [0.14, 0.14, 0.38] : [0.17, 0.14, 0.38];

    addEllipsoid(
        fishGroup,
        bodyMat,
        [0, 0, 0],
        bodyScale,
        32
    );

    addEllipsoid(
        fishGroup,
        bellyMat,
        [0, -0.105, 0.025],
        bellyScale,
        24
    );

    const tailPivot = new THREE.Group();
    tailPivot.position.set(0, 0, -0.42);

    const tailShape = new THREE.Shape();
    tailShape.moveTo(0, 0);
    tailShape.quadraticCurveTo(0.1, 0.18, 0.35, 0.28);
    tailShape.quadraticCurveTo(0.22, 0.0, 0.35, -0.28);
    tailShape.quadraticCurveTo(0.1, -0.18, 0, 0);
    tailShape.closePath();

    const tail = new THREE.Mesh(
        new THREE.ShapeGeometry(tailShape, 16),
        finMat
    );

    tail.rotation.y = Math.PI / 2;
    tail.position.z = -0.01;
    tailPivot.add(tail);
    fishGroup.add(tailPivot);


    const dorsalShape = new THREE.Shape();
    dorsalShape.moveTo(-0.24, 0);
    dorsalShape.quadraticCurveTo(-0.20, 0.17, -0.08, 0.205);
    dorsalShape.quadraticCurveTo(0.015, 0.215, 0.10, 0.12);
    dorsalShape.quadraticCurveTo(0.18, 0.075, 0.24, 0);
    dorsalShape.closePath();

    const dorsalFin = new THREE.Mesh(
        new THREE.ShapeGeometry(dorsalShape, 12),
        finMat
    );

    dorsalFin.rotation.y = Math.PI / 2;
    dorsalFin.position.set(0, 0.23, -0.035);
    fishGroup.add(dorsalFin);

    const bottomShape = new THREE.Shape();
    bottomShape.moveTo(-0.14, 0);
    bottomShape.quadraticCurveTo(0, -0.12, 0.14, 0);
    bottomShape.quadraticCurveTo(0, -0.055, -0.14, 0);
    bottomShape.closePath();

    const bottomFin = new THREE.Mesh(
        new THREE.ShapeGeometry(bottomShape, 10),
        finMat
    );

    bottomFin.rotation.y = Math.PI / 2;
    bottomFin.position.set(0, -0.23, -0.12);
    fishGroup.add(bottomFin);


    const pectoralFins = [];
    const pectoralX = isSlim ? 0.15 : 0.18;

    for (const side of [-1, 1]) {
        const finGroup = new THREE.Group();

        const pectoralShape = new THREE.Shape();
        pectoralShape.moveTo(0, 0.055);
        pectoralShape.quadraticCurveTo(0.17, 0.10, 0.205, -0.015);
        pectoralShape.quadraticCurveTo(0.12, -0.13, 0.015, -0.09);
        pectoralShape.quadraticCurveTo(-0.025, -0.015, 0, 0.055);

        const pectoralFin = new THREE.Mesh(
            new THREE.ShapeGeometry(pectoralShape, 12),
            finMat
        );

        pectoralFin.rotation.y = side * 0.45;
        finGroup.add(pectoralFin);

        finGroup.position.set(
            side * pectoralX,
            -0.025,
            0.015
        );

        fishGroup.add(finGroup);
        pectoralFins.push(finGroup);
    }

    const eyeX = isSlim ? 0.145 : 0.17;

    for (const side of [-1, 1]) {
        const eyeGroup = new THREE.Group();

        // Біла основа ока
        addEllipsoid(
            eyeGroup,
            whiteMat,
            [0, 0, 0],
            [0.071, 0.075, 0.045],
            20
        );

        // Зіниця
        addEllipsoid(
            eyeGroup,
            pupilMat,
            [side * 0.008, 0.004, 0.036],
            [0.042, 0.047, 0.022],
            16
        );

        addEllipsoid(
            eyeGroup,
            whiteMat,
            [side * 0.012 - 0.012, 0.022, 0.055],
            [0.014, 0.015, 0.009],
            10
        );

        eyeGroup.position.set(
            side * eyeX,
            0.065,
            0.275
        );

        eyeGroup.rotation.y = side * 0.35;

        fishGroup.add(eyeGroup);
    }


    addEllipsoid(
        fishGroup,
        mouthMat,
        [0, -0.005, 0.522],
        [0.045, 0.018, 0.012],
        12
    );


    if (cfg.type === "orange") {
        for (const z of [-0.245, -0.045, 0.15]) {
            const stripe = addEllipsoid(
                fishGroup,
                patternMat,
                [0, 0.008, z],
                [0.22, 0.285, 0.038],
                24
            );
            stripe.scale.z = 0.038;
        }
    }

    if (cfg.type === "red") {
        addEllipsoid(
            tailPivot,
            patternMat,
            [0, 0, -0.15],
            [0.03, 0.18, 0.08],
            16
        );

        addEllipsoid(
            fishGroup,
            patternMat,
            [0, 0.21, -0.035],
            [0.12, 0.025, 0.30],
            20
        );
    }

    if (cfg.type === "yellow") {
        for (const [x, y, z] of [
            [-0.09, 0.09, 0.12],
            [0.09, 0.09, 0.12],
            [-0.09, 0.08, -0.10],
            [0.09, 0.08, -0.10]
        ]) {
            addEllipsoid(
                fishGroup,
                patternMat,
                [x, y, z],
                [0.045, 0.035, 0.045],
                12
            );
        }
    }

    if (cfg.type === "purple") {
        addEllipsoid(
            fishGroup,
            patternMat,
            [0, 0.22, -0.22],
            [0.10, 0.025, 0.11],
            16
        );
    }

    fishGroup.userData.tailPivot = tailPivot;
    fishGroup.userData.pectoralFins = pectoralFins;

    return fishGroup;
}

const fishes = []

function createFish(index) {
    const groupId = index % 4
    const mesh = createProceduralFishMesh(groupId)

    const half = CONFIG.boundsXZ
    const position = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(half * 1.2),
        THREE.MathUtils.randFloat(-6, 5),
        THREE.MathUtils.randFloatSpread(half * 1.2)
    )
    const velocity = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(2),
        THREE.MathUtils.randFloatSpread(0.5),
        THREE.MathUtils.randFloatSpread(2)
    ).setLength(CONFIG.minSpeed + 1)

    mesh.position.copy(position)
    scene.add(mesh)

    return {
        mesh,
        position,
        velocity,
        groupId,
        tailPhase: Math.random() * Math.PI * 2,
    }
}

for (let i = 0; i < CONFIG.fishCount; i++) {
    fishes.push(createFish(i))
}


// Їжа
const foodGeometry = new THREE.SphereGeometry(0.12, 10, 10)
const foodMaterial = new THREE.MeshStandardMaterial({ color: 0xfff0a8, emissive: 0xffd24d, emissiveIntensity: 0.6 })
let foodPellets = []

function spawnFood(point) {
    for (let k = 0; k < 4; k++) {
        const mesh = new THREE.Mesh(foodGeometry, foodMaterial)
        const offset = new THREE.Vector3(
            THREE.MathUtils.randFloatSpread(0.8),
            THREE.MathUtils.randFloat(0, 0.4),
            THREE.MathUtils.randFloatSpread(0.8)
        )
        mesh.position.copy(point).add(offset)
        scene.add(mesh)

        foodPellets.push({
            mesh,
            position: mesh.position,
            landed: false,
            landedAt: 0,
            eaten: false
        })
    }
}

function updateFood(dt, elapsed) {
    for (const food of foodPellets) {
        if (!food.landed) {
            food.position.y -= CONFIG.foodFallSpeed * dt
            const ground = groundY(food.position.x, food.position.z) + 0.1
            if (food.position.y <= ground) {
                food.position.y = ground
                food.landed = true
                food.landedAt = elapsed
            }
        } else if (elapsed - food.landedAt > CONFIG.foodLifetimeOnFloor) {
            food.eaten = true
        }
    }

    foodPellets = foodPellets.filter((food) => {
        if (food.eaten) scene.remove(food.mesh)
        return !food.eaten
    })
}

const _alignment = new THREE.Vector3()
const _cohesion = new THREE.Vector3()
const _separation = new THREE.Vector3()
const _steer = new THREE.Vector3()
const _tmp = new THREE.Vector3()
const _accel = new THREE.Vector3()

function steerTowards(direction, velocity, maxSpeed, out) {
    if (direction.lengthSq() < 0.00001) return out.set(0, 0, 0)
    return out.copy(direction).setLength(maxSpeed).sub(velocity).clampLength(0, CONFIG.maxForce)
}

function updateBoids(dt, elapsed) {
    const bound = CONFIG.boundsXZ

    for (let i = 0; i < fishes.length; i++) {
        const fish = fishes[i]

        _alignment.set(0, 0, 0)
        _cohesion.set(0, 0, 0)
        _separation.set(0, 0, 0)
        _accel.set(0, 0, 0)

        let sameGroupNeighbours = 0

        for (let j = 0; j < fishes.length; j++) {
            if (i === j) continue
            const other = fishes[j]
            const dist = fish.position.distanceTo(other.position)

            if (dist < CONFIG.separationDist && dist > 0.0001) {
                _tmp.subVectors(fish.position, other.position).divideScalar(dist * dist)
                _separation.add(_tmp)
            }

            if (other.groupId === fish.groupId && dist < CONFIG.perception) {
                _alignment.add(other.velocity)
                _cohesion.add(other.position)
                sameGroupNeighbours++
            }
        }

        let maxSpeed = CONFIG.maxSpeed

        if (sameGroupNeighbours > 0) {
            _alignment.divideScalar(sameGroupNeighbours)
            steerTowards(_alignment, fish.velocity, maxSpeed, _steer)
            _accel.addScaledVector(_steer, CONFIG.wAlignment)

            _cohesion.divideScalar(sameGroupNeighbours).sub(fish.position)
            steerTowards(_cohesion, fish.velocity, maxSpeed, _steer)
            _accel.addScaledVector(_steer, CONFIG.wCohesion)
        }

        if (_separation.lengthSq() > 0) {
            steerTowards(_separation, fish.velocity, maxSpeed, _steer)
            _accel.addScaledVector(_steer, CONFIG.wSeparation)
        }

        let nearestFood = null
        let nearestDist = CONFIG.foodSeekRadius

        for (const food of foodPellets) {
            if (food.eaten) continue
            const d = fish.position.distanceTo(food.position)
            if (d < nearestDist) {
                nearestDist = d
                nearestFood = food
            }
        }

        if (nearestFood) {
            maxSpeed = CONFIG.maxSpeed * 1.5
            _tmp.subVectors(nearestFood.position, fish.position)
            steerTowards(_tmp, fish.velocity, maxSpeed, _steer)
            _accel.addScaledVector(_steer, CONFIG.wFood)

            if (nearestDist < CONFIG.foodEatDistance) {
                nearestFood.eaten = true
            }
        }

        const turn = 8
        const p = fish.position
        if (p.x > bound) _accel.x -= turn
        if (p.x < -bound) _accel.x += turn
        if (p.z > bound) _accel.z -= turn
        if (p.z < -bound) _accel.z += turn
        if (p.y > CONFIG.waterTop - 1) _accel.y -= turn
        if (!nearestFood && p.y < groundY(p.x, p.z) + 3) _accel.y += turn

        fish.velocity.addScaledVector(_accel, dt)
        fish.velocity.clampLength(CONFIG.minSpeed, maxSpeed)
        fish.position.addScaledVector(fish.velocity, dt)

        const minY = groundY(p.x, p.z) + 0.5
        if (p.y < minY) {
            p.y = minY
            if (fish.velocity.y < 0) fish.velocity.y = 0
        }

        fish.mesh.position.copy(p)
        _tmp.copy(p).add(fish.velocity)
        fish.mesh.lookAt(_tmp)

        const tailPivot = fish.mesh.userData.tailPivot
        if (tailPivot) {
            const wag = Math.sin(elapsed * (2.8 + fish.velocity.length() * 0.9) + fish.tailPhase)
            tailPivot.rotation.y = wag * 0.35
        }
    }
}


//Інтерактив: Клік по воді

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
let pointerDownX = 0, pointerDownY = 0

canvas.addEventListener('pointerdown', (e) => {
    pointerDownX = e.clientX
    pointerDownY = e.clientY
})

canvas.addEventListener('pointerup', (e) => {
    if (Math.hypot(e.clientX - pointerDownX, e.clientY - pointerDownY) > 5) return

    pointer.x = (e.clientX / sizes.width) * 2 - 1
    pointer.y = -(e.clientY / sizes.height) * 2 + 1
    raycaster.setFromCamera(pointer, camera)

    const spawnPoint = new THREE.Vector3()
    const hits = raycaster.intersectObject(floor)

    if (hits.length > 0) {
        spawnPoint.copy(hits[0].point)
        spawnPoint.y = Math.min(spawnPoint.y + 12, CONFIG.waterTop)
    } else {
        raycaster.ray.at(18, spawnPoint)
        spawnPoint.y = Math.min(spawnPoint.y, CONFIG.waterTop)
    }

    spawnFood(spawnPoint)
})

const gui = new GUI({ title: 'Панель керування' })

const envFolder = gui.addFolder('Вода та атмосфера')
envFolder.add(CONFIG, 'fogDensity', 0, 0.1, 0.001).name('Густина туману').onChange((v) => scene.fog.density = v)
envFolder.addColor(CONFIG, 'waterColor').name('Колір води').onChange((v) => {
    scene.background.set(v)
    scene.fog.color.set(v)
    skyUniforms.uHorizon.value.set(v)
})
envFolder.add(CONFIG, 'currentStrength', 0, 3, 0.05).name('Сила течії')
envFolder.add(CONFIG, 'godRayIntensity', 0, 3, 0.05).name('Промені світла')
envFolder.add(CONFIG, 'causticStrength', 0, 3, 0.05).name('Каустика').onChange((v) => causticUniforms.uStrength.value = v)
envFolder.add(renderer, 'toneMappingExposure', 0.5, 2, 0.05).name('Експозиція')

const speedFolder = gui.addFolder('Рибки: швидкість')
speedFolder.add(CONFIG, 'minSpeed', 0.2, 6, 0.1).name('Мін. швидкість')
speedFolder.add(CONFIG, 'maxSpeed', 1, 12, 0.1).name('Макс. швидкість')

const boidsFolder = gui.addFolder('Boids: ваги правил')
boidsFolder.add(CONFIG, 'wSeparation', 0, 5, 0.05).name('Розділення')
boidsFolder.add(CONFIG, 'wAlignment', 0, 5, 0.05).name('Вирівнювання')
boidsFolder.add(CONFIG, 'wCohesion', 0, 5, 0.05).name('Зближення')
boidsFolder.add(CONFIG, 'wFood', 0, 10, 0.1).name('Потяг до їжі')


window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})


const clock = new THREE.Clock()

function animate() {
    const dt = Math.min(clock.getDelta(), 0.05)
    const elapsed = clock.elapsedTime

    updateFood(dt, elapsed)
    updateBoids(dt, elapsed)

    updateKelp(elapsed)
    updateJellyfish(elapsed)
    updateChest(elapsed)
    for (const sail of shipSails) {
        sail.rotation.y = Math.PI / 2 + Math.sin(elapsed * 1.2) * 0.08 * CONFIG.currentStrength
        sail.rotation.z = Math.cos(elapsed * 0.9) * 0.05 * CONFIG.currentStrength
    }
    updateBubbles(dt, elapsed)
    updateGodRays(elapsed)
    plankton.update(dt, elapsed)

    causticUniforms.uTime.value = elapsed
    sunLight.intensity = 2.5 + Math.sin(elapsed * 0.8) * 0.15
    sky.position.copy(camera.position)

    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()