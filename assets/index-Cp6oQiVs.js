(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sl="174",es={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mu=0,Rl=1,Su=2,Jc=1,Eu=2,On=3,oi=0,Xe=1,Ge=2,ii=0,ns=1,rs=2,Pl=3,Ll=4,bu=5,Mi=100,wu=101,Tu=102,Au=103,Cu=104,Ru=200,Pu=201,Lu=202,Du=203,oa=204,aa=205,Iu=206,Uu=207,Nu=208,Fu=209,Ou=210,Bu=211,zu=212,ku=213,Hu=214,la=0,ca=1,ha=2,os=3,ua=4,da=5,fa=6,pa=7,jc=0,Vu=1,Gu=2,si=0,Wu=1,Xu=2,Yu=3,Qc=4,qu=5,$u=6,Zu=7,th=300,as=301,ls=302,ma=303,ga=304,io=306,ks=1e3,kn=1001,_a=1002,tn=1003,Ku=1004,sr=1005,We=1006,vo=1007,ni=1008,Xn=1009,eh=1010,nh=1011,Hs=1012,rl=1013,Ei=1014,cn=1015,Hn=1016,ol=1017,al=1018,cs=1020,ih=35902,sh=1021,rh=1022,hn=1023,oh=1024,ah=1025,is=1026,hs=1027,ll=1028,cl=1029,lh=1030,hl=1031,ul=1033,Hr=33776,Vr=33777,Gr=33778,Wr=33779,va=35840,xa=35841,ya=35842,Ma=35843,Sa=36196,Ea=37492,ba=37496,wa=37808,Ta=37809,Aa=37810,Ca=37811,Ra=37812,Pa=37813,La=37814,Da=37815,Ia=37816,Ua=37817,Na=37818,Fa=37819,Oa=37820,Ba=37821,Xr=36492,za=36494,ka=36495,ch=36283,Ha=36284,Va=36285,Ga=36286,Ju=3200,ju=3201,hh=0,Qu=1,Bn="",qe="srgb",ai="srgb-linear",$r="linear",pe="srgb",Li=7680,Dl=519,td=512,ed=513,nd=514,uh=515,id=516,sd=517,rd=518,od=519,Wa=35044,Il="300 es",Vn=2e3,Zr=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Is=Math.PI/180,Vs=180/Math.PI;function En(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function ee(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ld(i,t,e){return i!==t?(e-i)/(t-i):0}function Us(i,t,e){return(1-e)*i+e*t}function cd(i,t,e,n){return Us(i,t,1-Math.exp(-e*n))}function hd(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pd(i,t){return i+Math.random()*(t-i)}function md(i){return i*(.5-Math.random())}function gd(i){i!==void 0&&(Ul=i);let t=Ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _d(i){return i*Is}function vd(i){return i*Vs}function xd(i){return(i&i-1)===0&&i!==0}function yd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:Is,RAD2DEG:Vs,generateUUID:En,clamp:ee,euclideanModulo:dl,mapLinear:ad,inverseLerp:ld,lerp:Us,damp:cd,pingpong:hd,smoothstep:ud,smootherstep:dd,randInt:fd,randFloat:pd,randFloatSpread:md,seededRandom:gd,degToRad:_d,radToDeg:vd,isPowerOfTwo:xd,ceilPowerOfTwo:yd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:Sd,normalize:fe,denormalize:vn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ie{constructor(t,e,n,s,r,o,a,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],v=n[8],y=s[0],_=s[3],f=s[6],E=s[1],S=s[4],x=s[7],O=s[2],I=s[5],F=s[8];return r[0]=o*y+a*E+l*O,r[3]=o*_+a*S+l*I,r[6]=o*f+a*x+l*F,r[1]=c*y+h*E+u*O,r[4]=c*_+h*S+u*I,r[7]=c*f+h*x+u*F,r[2]=d*y+p*E+v*O,r[5]=d*_+p*S+v*I,r[8]=d*f+p*x+v*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,v=e*u+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new ie;function dh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){const i=Gs("canvas");return i.style.display="block",i}const Nl={};function xi(i){i in Nl||(Nl[i]=!0,console.warn(i))}function bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fl=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ad(){const i={enabled:!0,workingColorSpace:ai,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?$r:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ai]:{primaries:t,whitePoint:n,transfer:$r,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}const he=Ad();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Di;class Cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Gs("canvas")),Di.width=t.width,Di.height=t.height;const n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rd=0;class fl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yo(s[o].image)):r.push(yo(s[o]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pd=0;class Oe extends Ai{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=kn,s=kn,r=We,o=ni,a=hn,l=Xn,c=Oe.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=En(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=th;Oe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],v=l[9],y=l[2],_=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(v-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(v+_)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(p+1)/2,O=(f+1)/2,I=(h+d)/4,F=(u+y)/4,z=(v+_)/4;return S>x&&S>O?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=I/n,r=F/n):x>O?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=I/s,r=z/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=F/r,s=z/r),this.set(n,s,r,e),this}let E=Math.sqrt((_-v)*(_-v)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(_-v)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new fl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Ld{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fh extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dd extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],v=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==v){let _=1-a;const f=l*d+c*p+h*v+u*y,E=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const O=Math.sqrt(S),I=Math.atan2(O,f*E);_=Math.sin(_*I)/O,a=Math.sin(a*I)/O}const x=a*E;if(l=l*_+d*x,c=c*_+p*x,h=h*_+v*x,u=u*_+y*x,_===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+h*u+l*p-c*d,t[e+1]=l*v+h*d+c*u-a*p,t[e+2]=c*v+h*p+a*d-l*u,t[e+3]=h*v-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"YXZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"ZXY":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"ZYX":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"YZX":this._x=d*h*u+c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u-d*p*v;break;case"XZY":this._x=d*h*u-c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new B,Bl=new wi;class Zs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),or.subVectors(this.max,Ms),Ii.subVectors(t.a,Ms),Ui.subVectors(t.b,Ms),Ni.subVectors(t.c,Ms),qn.subVectors(Ui,Ii),$n.subVectors(Ni,Ui),di.subVectors(Ii,Ni);let e=[0,-qn.z,qn.y,0,-$n.z,$n.y,0,-di.z,di.y,qn.z,0,-qn.x,$n.z,0,-$n.x,di.z,0,-di.x,-qn.y,qn.x,0,-$n.y,$n.x,0,-di.y,di.x,0];return!So(e,Ii,Ui,Ni,or)||(e=[1,0,0,0,1,0,0,0,1],!So(e,Ii,Ui,Ni,or))?!1:(ar.crossVectors(qn,$n),e=[ar.x,ar.y,ar.z],So(e,Ii,Ui,Ni,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new B,new B,new B,new B,new B,new B,new B,new B],fn=new B,rr=new Zs,Ii=new B,Ui=new B,Ni=new B,qn=new B,$n=new B,di=new B,Ms=new B,or=new B,ar=new B,fi=new B;function So(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);const a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Id=new Zs,Ss=new B,Eo=new B;class so{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Eo)),this.expandByPoint(Ss.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new B,bo=new B,lr=new B,Zn=new B,wo=new B,cr=new B,To=new B;class ro{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=Zn.dot(this.direction),l=-Zn.dot(lr),c=Zn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,v;if(h>0)if(u=o*l-a,d=o*a-l,v=r*h,u>=0)if(d>=-v)if(d<=v){const y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bo).addScaledVector(lr,d),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){wo.subVectors(e,t),cr.subVectors(n,t),To.crossVectors(wo,cr);let o=this.direction.dot(To),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(cr.crossVectors(Zn,cr));if(l<0)return null;const c=a*this.direction.dot(wo.cross(Zn));if(c<0||l+c>o)return null;const h=-a*Zn.dot(To);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,v,y,_){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,v,y,_)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,v,y,_){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=v,f[11]=y,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,v=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+v*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,v=c*h,y=c*u;e[0]=d+y*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-v,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,v=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,v=a*h,y=a*u;e[0]=l*h,e[4]=v*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,v=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=v*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+v,e[10]=d-y*u}else if(t.order==="XZY"){const d=o*l,p=o*c,v=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-v,e[2]=v*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Nd)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Kn.crossVectors(n,Ke),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Kn.crossVectors(n,Ke)),Kn.normalize(),hr.crossVectors(Ke,Kn),s[0]=Kn.x,s[4]=hr.x,s[8]=Ke.x,s[1]=Kn.y,s[5]=hr.y,s[9]=Ke.y,s[2]=Kn.z,s[6]=hr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],v=n[2],y=n[6],_=n[10],f=n[14],E=n[3],S=n[7],x=n[11],O=n[15],I=s[0],F=s[4],z=s[8],T=s[12],M=s[1],D=s[5],W=s[9],X=s[13],K=s[2],$=s[6],q=s[10],tt=s[14],Z=s[3],vt=s[7],yt=s[11],At=s[15];return r[0]=o*I+a*M+l*K+c*Z,r[4]=o*F+a*D+l*$+c*vt,r[8]=o*z+a*W+l*q+c*yt,r[12]=o*T+a*X+l*tt+c*At,r[1]=h*I+u*M+d*K+p*Z,r[5]=h*F+u*D+d*$+p*vt,r[9]=h*z+u*W+d*q+p*yt,r[13]=h*T+u*X+d*tt+p*At,r[2]=v*I+y*M+_*K+f*Z,r[6]=v*F+y*D+_*$+f*vt,r[10]=v*z+y*W+_*q+f*yt,r[14]=v*T+y*X+_*tt+f*At,r[3]=E*I+S*M+x*K+O*Z,r[7]=E*F+S*D+x*$+O*vt,r[11]=E*z+S*W+x*q+O*yt,r[15]=E*T+S*X+x*tt+O*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],v=t[3],y=t[7],_=t[11],f=t[15];return v*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+y*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+_*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],v=t[12],y=t[13],_=t[14],f=t[15],E=u*_*c-y*d*c+y*l*p-a*_*p-u*l*f+a*d*f,S=v*d*c-h*_*c-v*l*p+o*_*p+h*l*f-o*d*f,x=h*y*c-v*u*c+v*a*p-o*y*p-h*a*f+o*u*f,O=v*u*l-h*y*l-v*a*d+o*y*d+h*a*_-o*u*_,I=e*E+n*S+s*x+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return t[0]=E*F,t[1]=(y*d*r-u*_*r-y*s*p+n*_*p+u*s*f-n*d*f)*F,t[2]=(a*_*r-y*l*r+y*s*c-n*_*c-a*s*f+n*l*f)*F,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*F,t[4]=S*F,t[5]=(h*_*r-v*d*r+v*s*p-e*_*p-h*s*f+e*d*f)*F,t[6]=(v*l*r-o*_*r-v*s*c+e*_*c+o*s*f-e*l*f)*F,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*F,t[8]=x*F,t[9]=(v*u*r-h*y*r-v*n*p+e*y*p+h*n*f-e*u*f)*F,t[10]=(o*y*r-v*a*r+v*n*c-e*y*c-o*n*f+e*a*f)*F,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*F,t[12]=O*F,t[13]=(h*y*s-v*u*s+v*n*d-e*y*d-h*n*_+e*u*_)*F,t[14]=(v*a*s-o*y*s-v*n*l+e*y*l+o*n*_-e*a*_)*F,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*F,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,v=r*u,y=o*h,_=o*u,f=a*u,E=l*c,S=l*h,x=l*u,O=n.x,I=n.y,F=n.z;return s[0]=(1-(y+f))*O,s[1]=(p+x)*O,s[2]=(v-S)*O,s[3]=0,s[4]=(p-x)*I,s[5]=(1-(d+f))*I,s[6]=(_+E)*I,s[7]=0,s[8]=(v+S)*F,s[9]=(_-E)*F,s[10]=(1-(d+y))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),a=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const c=1/r,h=1/o,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let p,v;if(a===Vn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Zr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h;let v,y;if(a===Vn)v=(o+r)*u,y=-2*u;else if(a===Zr)v=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new B,pn=new _e,Ud=new B(0,0,0),Nd=new B(1,1,1),Kn=new B,hr=new B,Ke=new B,zl=new _e,kl=new wi;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fd=0;const Hl=new B,Oi=new wi,In=new _e,ur=new B,Es=new B,Od=new B,Bd=new wi,Vl=new B(1,0,0),Gl=new B(0,1,0),Wl=new B(0,0,1),Xl={type:"added"},zd={type:"removed"},Bi={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Le extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new B,e=new wn,n=new wi,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ie}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ur.copy(t):ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Es,ur,this.up):In.lookAt(ur,Es,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(In),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new B(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new B,Un=new B,Co=new B,Nn=new B,zi=new B,ki=new B,Yl=new B,Ro=new B,Po=new B,Lo=new B,Do=new ge,Io=new ge,Uo=new ge;class on{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Un.subVectors(n,e),Co.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Un),l=mn.dot(Co),c=Un.dot(Un),h=Un.dot(Co),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,v=(o*h-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Do.setScalar(0),Io.setScalar(0),Uo.setScalar(0),Do.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Do,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(Uo,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Un.subVectors(t,e),mn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,n),ki.subVectors(r,n),Ro.subVectors(t,n);const l=zi.dot(Ro),c=ki.dot(Ro);if(l<=0&&c<=0)return e.copy(n);Po.subVectors(t,s);const h=zi.dot(Po),u=ki.dot(Po);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(zi,o);Lo.subVectors(t,r);const p=zi.dot(Lo),v=ki.dot(Lo);if(v>=0&&p<=v)return e.copy(r);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(ki,a);const _=h*v-p*u;if(_<=0&&u-h>=0&&p-v>=0)return Yl.subVectors(r,s),a=(u-h)/(u-h+(p-v)),e.copy(s).addScaledVector(Yl,a);const f=1/(_+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(zi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function No(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=dl(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=No(o,r,t+1/3),this.g=No(o,r,t),this.b=No(o,r,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return he.fromWorkingColorSpace(ke.copy(this),t),Math.round(ee(ke.r*255,0,255))*65536+Math.round(ee(ke.g*255,0,255))*256+Math.round(ee(ke.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=qe){he.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(dr);const n=Us(Jn.h,dr.h,e),s=Us(Jn.s,dr.s,e),r=Us(Jn.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new te;te.NAMES=ph;let kd=0;class Ci extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=En(),this.name="",this.type="Material",this.blending=ns,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==Mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ml extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zn=Hd();function Hd(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Vd(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=ee(i,-65504,65504),zn.floatView[0]=i;const t=zn.uint32View[0],e=t>>23&511;return zn.baseTable[e]+((t&8388607)>>zn.shiftTable[e])}function Gd(i){const t=i>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[t]+(i&1023)]+zn.exponentTable[t],zn.floatView[0]}class ql{static toHalfFloat(t){return Vd(t)}static fromHalfFloat(t){return Gd(t)}}const Ae=new B,fr=new ht;let Wd=0;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wa,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wa&&(t.usage=this.usage),t}}class mh extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gh extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xd=0;const nn=new _e,Fo=new Le,Hi=new B,Je=new Zs,bs=new Zs,Fe=new B;class Be extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dh(t)?gh:mh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(Je.min,bs.min),Je.expandByPoint(Fe),Fe.addVectors(Je.max,bs.max),Je.expandByPoint(Fe)):(Je.expandByPoint(bs.min),Je.expandByPoint(bs.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fe.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(t,c),Fe.add(Hi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new B,l[z]=new B;const c=new B,h=new B,u=new B,d=new ht,p=new ht,v=new ht,y=new B,_=new B;function f(z,T,M){c.fromBufferAttribute(n,z),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,z),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),v.sub(d);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(D),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(D),a[z].add(y),a[T].add(y),a[M].add(y),l[z].add(_),l[T].add(_),l[M].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let z=0,T=E.length;z<T;++z){const M=E[z],D=M.start,W=M.count;for(let X=D,K=D+W;X<K;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const S=new B,x=new B,O=new B,I=new B;function F(z){O.fromBufferAttribute(s,z),I.copy(O);const T=a[z];S.copy(T),S.sub(O.multiplyScalar(O.dot(T))).normalize(),x.crossVectors(I,T);const D=x.dot(l[z])<0?-1:1;o.setXYZW(z,S.x,S.y,S.z,D)}for(let z=0,T=E.length;z<T;++z){const M=E[z],D=M.start,W=M.count;for(let X=D,K=D+W;X<K;X+=3)F(t.getX(X+0)),F(t.getX(X+1)),F(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),y=t.getX(d+1),_=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,_),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let y=0,_=l.length;y<_;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[v++]=c[p++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $l=new _e,pi=new ro,pr=new so,Zl=new B,mr=new B,gr=new B,_r=new B,Oo=new B,vr=new B,Kl=new B,xr=new B;class $t extends Le{constructor(t=new Be,e=new ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,t),o?vr.addScaledVector(Oo,h):vr.addScaledVector(Oo.sub(e),h))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(pr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(pr,Zl)===null||pi.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&($l.copy(r).invert(),pi.copy(t.ray).applyMatrix4($l),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const _=d[v],f=o[_.materialIndex],E=Math.max(_.start,p.start),S=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let x=E,O=S;x<O;x+=3){const I=a.getX(x),F=a.getX(x+1),z=a.getX(x+2);s=yr(this,f,t,n,c,h,u,I,F,z),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let _=v,f=y;_<f;_+=3){const E=a.getX(_),S=a.getX(_+1),x=a.getX(_+2);s=yr(this,o,t,n,c,h,u,E,S,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const _=d[v],f=o[_.materialIndex],E=Math.max(_.start,p.start),S=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let x=E,O=S;x<O;x+=3){const I=x,F=x+1,z=x+2;s=yr(this,f,t,n,c,h,u,I,F,z),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let _=v,f=y;_<f;_+=3){const E=_,S=_+1,x=_+2;s=yr(this,o,t,n,c,h,u,E,S,x),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function Yd(i,t,e,n,s,r,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===oi,a),l===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function yr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,mr),i.getVertexPosition(l,gr),i.getVertexPosition(c,_r);const h=Yd(i,t,e,n,mr,gr,_r,Kl);if(h){const u=new B;on.getBarycoord(Kl,mr,gr,_r,u),s&&(h.uv=on.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=on.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=on.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};on.getNormal(mr,gr,_r,d.normal),h.face=d,h.barycoord=u}return h}class $e extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function v(y,_,f,E,S,x,O,I,F,z,T){const M=x/F,D=O/z,W=x/2,X=O/2,K=I/2,$=F+1,q=z+1;let tt=0,Z=0;const vt=new B;for(let yt=0;yt<q;yt++){const At=yt*D-X;for(let zt=0;zt<$;zt++){const ne=zt*M-W;vt[y]=ne*E,vt[_]=At*S,vt[f]=K,c.push(vt.x,vt.y,vt.z),vt[y]=0,vt[_]=0,vt[f]=I>0?1:-1,h.push(vt.x,vt.y,vt.z),u.push(zt/F),u.push(1-yt/z),tt+=1}}for(let yt=0;yt<z;yt++)for(let At=0;At<F;At++){const zt=d+At+$*yt,ne=d+At+$*(yt+1),et=d+(At+1)+$*(yt+1),xt=d+(At+1)+$*yt;l.push(zt,ne,xt),l.push(ne,et,xt),Z+=6}a.addGroup(p,Z,T),p+=Z,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=us(i[e]);for(const s in n)t[s]=n[s]}return t}function qd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const $d={clone:us,merge:Ve};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new B,Jl=new ht,jl=new ht;class Qe extends vh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(Is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,jl),e.subVectors(jl,Jl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Is*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Gi=1;class Jd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Vi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Vi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Vi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Vi,Gi,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Vi,Gi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Vi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class xh extends Oe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends bi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $e(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:ii});r.uniforms.tEquirect.value=e;const o=new $t(s,r),a=e.minFilter;return e.minFilter===ni&&(e.minFilter=We),new Jd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class be extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qd={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const y of t.hand.values()){const _=e.getJointPose(y,n),f=this._getHandJoint(c,y);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class gl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new gl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class tf extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ef{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wa,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new B;class Kr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Kr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yh extends Ci{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const ws=new B,Xi=new B,Yi=new B,qi=new ht,Ts=new ht,Mh=new _e,Mr=new B,As=new B,Sr=new B,Ql=new ht,zo=new ht,tc=new ht;class nf extends Le{constructor(t=new yh){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ef(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Kr(n,3,0,!1)),Wi.setAttribute("uv",new Kr(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Mh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-Yi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Er(Mr.set(-.5,-.5,0),Yi,o,Xi,s,r),Er(As.set(.5,-.5,0),Yi,o,Xi,s,r),Er(Sr.set(.5,.5,0),Yi,o,Xi,s,r),Ql.set(0,0),zo.set(1,0),tc.set(1,1);let a=t.ray.intersectTriangle(Mr,As,Sr,!1,ws);if(a===null&&(Er(As.set(-.5,.5,0),Yi,o,Xi,s,r),zo.set(0,1),a=t.ray.intersectTriangle(Mr,Sr,As,!1,ws),a===null))return;const l=t.ray.origin.distanceTo(ws);l<t.near||l>t.far||e.push({distance:l,point:ws.clone(),uv:on.getInterpolation(ws,Mr,As,Sr,Ql,zo,tc,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Er(i,t,e,n,s,r){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*qi.x-s*qi.y,Ts.y=s*qi.x+r*qi.y):Ts.copy(qi),i.copy(t),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4(Mh)}class sf extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=tn,h=tn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ko=new B,rf=new B,of=new ie;class ei{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ko.subVectors(n,e).cross(rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||of.getNormalMatrix(t),s=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new so,br=new B;class _l{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],v=s[9],y=s[10],_=s[11],f=s[12],E=s[13],S=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,_-p,x-f).normalize(),n[1].setComponents(l+r,d+c,_+p,x+f).normalize(),n[2].setComponents(l+o,d+h,_+v,x+E).normalize(),n[3].setComponents(l-o,d-h,_-v,x-E).normalize(),n[4].setComponents(l-a,d-u,_-y,x-S).normalize(),e===Vn)n[5].setComponents(l+a,d+u,_+y,x+S).normalize();else if(e===Zr)n[5].setComponents(a,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sh extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ec=new _e,Xa=new ro,wr=new so,Tr=new B;class af extends Le{constructor(t=new Be,e=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,t.ray.intersectsSphere(wr)===!1)return;ec.copy(s).invert(),Xa.copy(t.ray).applyMatrix4(ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,y=p;v<y;v++){const _=c.getX(v);Tr.fromBufferAttribute(u,_),nc(Tr,_,l,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,y=p;v<y;v++)Tr.fromBufferAttribute(u,v),nc(Tr,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nc(i,t,e,n,s,r,o){const a=Xa.distanceSqToPoint(i);if(a<e){const l=new B;Xa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class lf extends Oe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Eh extends Oe{constructor(t,e,n,s,r,o,a,l,c,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ei),n===void 0&&h===hs&&(n=cs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,s=[],r=[],o=[],a=new B,l=new _e;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(ee(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ee(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vl extends Cn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cf extends vl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ar=new B,Ho=new xl,Vo=new xl,Go=new xl;class hf extends Cn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),c=Ar);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),v<1e-4&&(v=y),_<1e-4&&(_=y),Ho.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,y,_),Vo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,y,_),Go.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,y,_)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Vo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Go.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ho.calc(l),Vo.calc(l),Go.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function uf(i,t){const e=1-i;return e*e*t}function df(i,t){return 2*(1-i)*i*t}function ff(i,t){return i*i*t}function Ns(i,t,e,n){return uf(i,t)+df(i,e)+ff(i,n)}function pf(i,t){const e=1-i;return e*e*e*t}function mf(i,t){const e=1-i;return 3*e*e*i*t}function gf(i,t){return 3*(1-i)*i*i*t}function _f(i,t){return i*i*i*t}function Fs(i,t,e,n,s){return pf(i,t)+mf(i,e)+gf(i,n)+_f(i,s)}class bh extends Cn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,s.x,r.x,o.x,a.x),Fs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vf extends Cn{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fs(t,s.x,r.x,o.x,a.x),Fs(t,s.y,r.y,o.y,a.y),Fs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wh extends Cn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xf extends Cn{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends Cn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Cn{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(t,s.x,r.x,o.x),Ns(t,s.y,r.y,o.y),Ns(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ah extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ic(a,l.x,c.x,h.x,u.x),ic(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var Ya=Object.freeze({__proto__:null,ArcCurve:cf,CatmullRomCurve3:hf,CubicBezierCurve:bh,CubicBezierCurve3:vf,EllipseCurve:vl,LineCurve:wh,LineCurve3:xf,QuadraticBezierCurve:Th,QuadraticBezierCurve3:yf,SplineCurve:Ah});class Mf extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ya[s.type]().fromJSON(s))}return this}}class Jr extends Mf{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wh(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Th(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new bh(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ah(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new vl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class yl extends Be{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ee(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new B,d=new ht,p=new B,v=new B,y=new B;let _=0,f=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:_=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-_,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:_=t[E+1].x-t[E].x,f=t[E+1].y-t[E].y,p.x=f*1,p.y=-_,p.z=f*0,v.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(v)}for(let E=0;E<=e;E++){const S=n+E*h*s,x=Math.sin(S),O=Math.cos(S);for(let I=0;I<=t.length-1;I++){u.x=t[I].x*x,u.y=t[I].y,u.z=t[I].x*O,o.push(u.x,u.y,u.z),d.x=E/e,d.y=I/(t.length-1),a.push(d.x,d.y);const F=l[3*I+0]*x,z=l[3*I+1],T=l[3*I+0]*O;c.push(F,z,T)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){const x=S+E*t.length,O=x,I=x+t.length,F=x+t.length+1,z=x+1;r.push(O,I,z),r.push(F,z,I)}this.setIndex(r),this.setAttribute("position",new ve(o,3)),this.setAttribute("uv",new ve(a,2)),this.setAttribute("normal",new ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.points,t.segments,t.phiStart,t.phiLength)}}class yn extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let v=0;const y=[],_=n/2;let f=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ve(u,3)),this.setAttribute("normal",new ve(d,3)),this.setAttribute("uv",new ve(p,2));function E(){const x=new B,O=new B;let I=0;const F=(e-t)/n;for(let z=0;z<=r;z++){const T=[],M=z/r,D=M*(e-t)+t;for(let W=0;W<=s;W++){const X=W/s,K=X*l+a,$=Math.sin(K),q=Math.cos(K);O.x=D*$,O.y=-M*n+_,O.z=D*q,u.push(O.x,O.y,O.z),x.set($,F,q).normalize(),d.push(x.x,x.y,x.z),p.push(X,1-M),T.push(v++)}y.push(T)}for(let z=0;z<s;z++)for(let T=0;T<r;T++){const M=y[T][z],D=y[T+1][z],W=y[T+1][z+1],X=y[T][z+1];(t>0||T!==0)&&(h.push(M,D,X),I+=3),(e>0||T!==r-1)&&(h.push(D,W,X),I+=3)}c.addGroup(f,I,0),f+=I}function S(x){const O=v,I=new ht,F=new B;let z=0;const T=x===!0?t:e,M=x===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,_*M,0),d.push(0,M,0),p.push(.5,.5),v++;const D=v;for(let W=0;W<=s;W++){const K=W/s*l+a,$=Math.cos(K),q=Math.sin(K);F.x=T*q,F.y=_*M,F.z=T*$,u.push(F.x,F.y,F.z),d.push(0,M,0),I.x=$*.5+.5,I.y=q*.5*M+.5,p.push(I.x,I.y),v++}for(let W=0;W<s;W++){const X=O+W,K=D+W;x===!0?h.push(K,K+1,X):h.push(K+1,K,X),z+=3}c.addGroup(f,z,x===!0?1:2),f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(r.slice(),3)),this.setAttribute("uv",new ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const S=new B,x=new B,O=new B;for(let I=0;I<e.length;I+=3)p(e[I+0],S),p(e[I+1],x),p(e[I+2],O),l(S,x,O,E)}function l(E,S,x,O){const I=O+1,F=[];for(let z=0;z<=I;z++){F[z]=[];const T=E.clone().lerp(x,z/I),M=S.clone().lerp(x,z/I),D=I-z;for(let W=0;W<=D;W++)W===0&&z===I?F[z][W]=T:F[z][W]=T.clone().lerp(M,W/D)}for(let z=0;z<I;z++)for(let T=0;T<2*(I-z)-1;T++){const M=Math.floor(T/2);T%2===0?(d(F[z][M+1]),d(F[z+1][M]),d(F[z][M])):(d(F[z][M+1]),d(F[z+1][M+1]),d(F[z+1][M]))}}function c(E){const S=new B;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(E),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const E=new B;for(let S=0;S<r.length;S+=3){E.x=r[S+0],E.y=r[S+1],E.z=r[S+2];const x=_(E)/2/Math.PI+.5,O=f(E)/Math.PI+.5;o.push(x,1-O)}v(),u()}function u(){for(let E=0;E<o.length;E+=6){const S=o[E+0],x=o[E+2],O=o[E+4],I=Math.max(S,x,O),F=Math.min(S,x,O);I>.9&&F<.1&&(S<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),O<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,S){const x=E*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function v(){const E=new B,S=new B,x=new B,O=new B,I=new ht,F=new ht,z=new ht;for(let T=0,M=0;T<r.length;T+=9,M+=6){E.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),I.set(o[M+0],o[M+1]),F.set(o[M+2],o[M+3]),z.set(o[M+4],o[M+5]),O.copy(E).add(S).add(x).divideScalar(3);const D=_(O);y(I,M+0,E,D),y(F,M+2,S,D),y(z,M+4,x,D)}}function y(E,S,x,O){O<0&&E.x===1&&(o[S]=E.x-1),x.x===0&&x.z===0&&(o[S]=O/2/Math.PI+.5)}function _(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.vertices,t.indices,t.radius,t.details)}}class Ml extends oo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ml(t.radius,t.detail)}}class Gn extends Jr{constructor(t){super(t),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Jr().fromJSON(s))}return this}}class Sf{static triangulate(t,e,n=2){const s=e&&e.length,r=s?e[0]*n:t.length;let o=Ch(t,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,u,d,p,v;if(s&&(o=Af(t,e,o,n)),t.length>80*n){l=h=t[0],c=u=t[1];for(let y=n;y<r;y+=n)d=t[y],p=t[y+1],d<l&&(l=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p);v=Math.max(h-l,u-c),v=v!==0?32767/v:0}return Ws(o,a,n,l,c,v,0),a}}function Ch(i,t,e,n,s){let r,o;if(s===Bf(i,t,e,n)>0)for(r=t;r<e;r+=n)o=sc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=sc(r,i[r],i[r+1],o);return o&&ao(o,o.next)&&(Ys(o),o=o.next),o}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ao(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Df(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?bf(i,n,s,r):Ef(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ys(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=wf(Ti(i),t,e),Ws(i,t,e,n,s,r,2)):o===2&&Tf(i,t,e,n,s,r):Ws(Ti(i),t,e,n,s,r,1);break}}}function Ef(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=d&&v.y>=u&&v.y<=p&&Ji(s,a,r,l,o,c,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function bf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,v=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,_=h>u?h>d?h:d:u>d?u:d,f=qa(p,v,t,e,n),E=qa(y,_,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=f&&x&&x.z<=E;){if(S.x>=p&&S.x<=y&&S.y>=v&&S.y<=_&&S!==s&&S!==o&&Ji(a,h,l,u,c,d,S.x,S.y)&&Ee(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=y&&x.y>=v&&x.y<=_&&x!==s&&x!==o&&Ji(a,h,l,u,c,d,x.x,x.y)&&Ee(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=y&&S.y>=v&&S.y<=_&&S!==s&&S!==o&&Ji(a,h,l,u,c,d,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=E;){if(x.x>=p&&x.x<=y&&x.y>=v&&x.y<=_&&x!==s&&x!==o&&Ji(a,h,l,u,c,d,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wf(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ao(s,r)&&Rh(s,n,n.next,r)&&Xs(s,r)&&Xs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ys(n),Ys(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function Tf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nf(o,a)){let l=Ph(o,a);o=Ti(o,o.next),l=Ti(l,l.next),Ws(o,t,e,n,s,r,0),Ws(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Af(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Ch(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Uf(c));for(s.sort(Cf),r=0;r<s.length;r++)e=Rf(s[r],e);return e}function Cf(i,t){return i.x-t.x}function Rf(i,t){const e=Pf(i,t);if(!e)return t;const n=Ph(e,i);return Ti(n,n.next),Ti(e,e.next)}function Pf(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ji(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Xs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Lf(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Lf(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Df(i,t,e,n){let s=i;do s.z===0&&(s.z=qa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,If(s)}function If(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function qa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Uf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ji(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Nf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ff(i,t)&&(Xs(i,t)&&Xs(t,i)&&Of(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||ao(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ao(i,t){return i.x===t.x&&i.y===t.y}function Rh(i,t,e,n){const s=Rr(Ee(i,t,e)),r=Rr(Ee(i,t,n)),o=Rr(Ee(e,n,i)),a=Rr(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Cr(i,e,t)||r===0&&Cr(i,n,t)||o===0&&Cr(e,i,n)||a===0&&Cr(e,t,n))}function Cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Rr(i){return i>0?1:i<0?-1:0}function Ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Rh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xs(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Of(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ph(i,t){const e=new $a(i.i,i.x,i.y),n=new $a(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sc(i,t,e,n){const s=new $a(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $a(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Bf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ri{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ri.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];rc(t),oc(n,t);let o=t.length;e.forEach(rc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,oc(n,e[l]);const a=Sf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function rc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function oc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Os extends Be{constructor(t=new Gn([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ve(s,3)),this.setAttribute("uv",new ve(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,v=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:zf;let S,x=!1,O,I,F,z;f&&(S=f.getSpacedPoints(h),x=!0,d=!1,O=f.computeFrenetFrames(h,!1),I=new B,F=new B,z=new B),d||(_=0,p=0,v=0,y=0);const T=a.extractPoints(c);let M=T.shape;const D=T.holes;if(!ri.isClockWise(M)){M=M.reverse();for(let dt=0,lt=D.length;dt<lt;dt++){const P=D[dt];ri.isClockWise(P)&&(D[dt]=P.reverse())}}const X=ri.triangulateShape(M,D),K=M;for(let dt=0,lt=D.length;dt<lt;dt++){const P=D[dt];M=M.concat(P)}function $(dt,lt,P){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(lt,P)}const q=M.length,tt=X.length;function Z(dt,lt,P){let Ht,ft,Pt;const Mt=dt.x-lt.x,Zt=dt.y-lt.y,wt=P.x-dt.x,R=P.y-dt.y,b=Mt*Mt+Zt*Zt,Y=Mt*R-Zt*wt;if(Math.abs(Y)>Number.EPSILON){const nt=Math.sqrt(b),ct=Math.sqrt(wt*wt+R*R),it=lt.x-Zt/nt,Bt=lt.y+Mt/nt,Et=P.x-R/ct,Ct=P.y+wt/ct,oe=((Et-it)*R-(Ct-Bt)*wt)/(Mt*R-Zt*wt);Ht=it+Mt*oe-dt.x,ft=Bt+Zt*oe-dt.y;const gt=Ht*Ht+ft*ft;if(gt<=2)return new ht(Ht,ft);Pt=Math.sqrt(gt/2)}else{let nt=!1;Mt>Number.EPSILON?wt>Number.EPSILON&&(nt=!0):Mt<-Number.EPSILON?wt<-Number.EPSILON&&(nt=!0):Math.sign(Zt)===Math.sign(R)&&(nt=!0),nt?(Ht=-Zt,ft=Mt,Pt=Math.sqrt(b)):(Ht=Mt,ft=Zt,Pt=Math.sqrt(b/2))}return new ht(Ht/Pt,ft/Pt)}const vt=[];for(let dt=0,lt=K.length,P=lt-1,Ht=dt+1;dt<lt;dt++,P++,Ht++)P===lt&&(P=0),Ht===lt&&(Ht=0),vt[dt]=Z(K[dt],K[P],K[Ht]);const yt=[];let At,zt=vt.concat();for(let dt=0,lt=D.length;dt<lt;dt++){const P=D[dt];At=[];for(let Ht=0,ft=P.length,Pt=ft-1,Mt=Ht+1;Ht<ft;Ht++,Pt++,Mt++)Pt===ft&&(Pt=0),Mt===ft&&(Mt=0),At[Ht]=Z(P[Ht],P[Pt],P[Mt]);yt.push(At),zt=zt.concat(At)}for(let dt=0;dt<_;dt++){const lt=dt/_,P=p*Math.cos(lt*Math.PI/2),Ht=v*Math.sin(lt*Math.PI/2)+y;for(let ft=0,Pt=K.length;ft<Pt;ft++){const Mt=$(K[ft],vt[ft],Ht);pt(Mt.x,Mt.y,-P)}for(let ft=0,Pt=D.length;ft<Pt;ft++){const Mt=D[ft];At=yt[ft];for(let Zt=0,wt=Mt.length;Zt<wt;Zt++){const R=$(Mt[Zt],At[Zt],Ht);pt(R.x,R.y,-P)}}}const ne=v+y;for(let dt=0;dt<q;dt++){const lt=d?$(M[dt],zt[dt],ne):M[dt];x?(F.copy(O.normals[0]).multiplyScalar(lt.x),I.copy(O.binormals[0]).multiplyScalar(lt.y),z.copy(S[0]).add(F).add(I),pt(z.x,z.y,z.z)):pt(lt.x,lt.y,0)}for(let dt=1;dt<=h;dt++)for(let lt=0;lt<q;lt++){const P=d?$(M[lt],zt[lt],ne):M[lt];x?(F.copy(O.normals[dt]).multiplyScalar(P.x),I.copy(O.binormals[dt]).multiplyScalar(P.y),z.copy(S[dt]).add(F).add(I),pt(z.x,z.y,z.z)):pt(P.x,P.y,u/h*dt)}for(let dt=_-1;dt>=0;dt--){const lt=dt/_,P=p*Math.cos(lt*Math.PI/2),Ht=v*Math.sin(lt*Math.PI/2)+y;for(let ft=0,Pt=K.length;ft<Pt;ft++){const Mt=$(K[ft],vt[ft],Ht);pt(Mt.x,Mt.y,u+P)}for(let ft=0,Pt=D.length;ft<Pt;ft++){const Mt=D[ft];At=yt[ft];for(let Zt=0,wt=Mt.length;Zt<wt;Zt++){const R=$(Mt[Zt],At[Zt],Ht);x?pt(R.x,R.y+S[h-1].y,S[h-1].x+P):pt(R.x,R.y,u+P)}}}et(),xt();function et(){const dt=s.length/3;if(d){let lt=0,P=q*lt;for(let Ht=0;Ht<tt;Ht++){const ft=X[Ht];Ft(ft[2]+P,ft[1]+P,ft[0]+P)}lt=h+_*2,P=q*lt;for(let Ht=0;Ht<tt;Ht++){const ft=X[Ht];Ft(ft[0]+P,ft[1]+P,ft[2]+P)}}else{for(let lt=0;lt<tt;lt++){const P=X[lt];Ft(P[2],P[1],P[0])}for(let lt=0;lt<tt;lt++){const P=X[lt];Ft(P[0]+q*h,P[1]+q*h,P[2]+q*h)}}n.addGroup(dt,s.length/3-dt,0)}function xt(){const dt=s.length/3;let lt=0;mt(K,lt),lt+=K.length;for(let P=0,Ht=D.length;P<Ht;P++){const ft=D[P];mt(ft,lt),lt+=ft.length}n.addGroup(dt,s.length/3-dt,1)}function mt(dt,lt){let P=dt.length;for(;--P>=0;){const Ht=P;let ft=P-1;ft<0&&(ft=dt.length-1);for(let Pt=0,Mt=h+_*2;Pt<Mt;Pt++){const Zt=q*Pt,wt=q*(Pt+1),R=lt+Ht+Zt,b=lt+ft+Zt,Y=lt+ft+wt,nt=lt+Ht+wt;re(R,b,Y,nt)}}}function pt(dt,lt,P){l.push(dt),l.push(lt),l.push(P)}function Ft(dt,lt,P){kt(dt),kt(lt),kt(P);const Ht=s.length/3,ft=E.generateTopUV(n,s,Ht-3,Ht-2,Ht-1);ae(ft[0]),ae(ft[1]),ae(ft[2])}function re(dt,lt,P,Ht){kt(dt),kt(lt),kt(Ht),kt(lt),kt(P),kt(Ht);const ft=s.length/3,Pt=E.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);ae(Pt[0]),ae(Pt[1]),ae(Pt[3]),ae(Pt[1]),ae(Pt[2]),ae(Pt[3])}function kt(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function ae(dt){r.push(dt.x),r.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ya[s.type]().fromJSON(s)),new Os(n,t.options)}}const zf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],v=t[s*3+2],y=t[r*3],_=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(d,1-v),new ht(y,1-f)]:[new ht(a,1-l),new ht(h,1-u),new ht(p,1-v),new ht(_,1-f)]}};function kf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class lo extends oo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new lo(t.radius,t.detail)}}class Ks extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],v=[],y=[],_=[];for(let f=0;f<h;f++){const E=f*d-o;for(let S=0;S<c;S++){const x=S*u-r;v.push(x,-E,0),y.push(0,0,1),_.push(S/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const S=E+c*f,x=E+c*(f+1),O=E+1+c*(f+1),I=E+1+c*f;p.push(S,x,I),p.push(x,O,I)}this.setIndex(p),this.setAttribute("position",new ve(v,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.width,t.height,t.widthSegments,t.heightSegments)}}class ji extends Be{constructor(t=new Gn([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ve(s,3)),this.setAttribute("normal",new ve(r,3)),this.setAttribute("uv",new ve(o,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let p=d.shape;const v=d.holes;ri.isClockWise(p)===!1&&(p=p.reverse());for(let _=0,f=v.length;_<f;_++){const E=v[_];ri.isClockWise(E)===!0&&(v[_]=E.reverse())}const y=ri.triangulateShape(p,v);for(let _=0,f=v.length;_<f;_++){const E=v[_];p=p.concat(E)}for(let _=0,f=p.length;_<f;_++){const E=p[_];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let _=0,f=y.length;_<f;_++){const E=y[_],S=E[0]+u,x=E[1]+u,O=E[2]+u;n.push(S,x,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Hf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ji(n,t.curveSegments)}}function Hf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class An extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new B,d=new B,p=[],v=[],y=[],_=[];for(let f=0;f<=n;f++){const E=[],S=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let O=0;O<=e;O++){const I=O/e;u.x=-t*Math.cos(s+I*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+I*r)*Math.sin(o+S*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),_.push(I+x,1-S),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const S=h[f][E+1],x=h[f][E],O=h[f+1][E],I=h[f+1][E+1];(f!==0||o>0)&&p.push(S,x,I),(f!==n-1||l<Math.PI)&&p.push(x,O,I)}this.setIndex(p),this.setAttribute("position",new ve(v,3)),this.setAttribute("normal",new ve(y,3)),this.setAttribute("uv",new ve(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sl extends Be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new B,u=new B,d=new B;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const y=v/s*r,_=p/n*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(y),u.y=(t+e*Math.cos(_))*Math.sin(y),u.z=e*Math.sin(_),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const y=(s+1)*p+v-1,_=(s+1)*(p-1)+v-1,f=(s+1)*(p-1)+v,E=(s+1)*p+v;o.push(y,_,E),o.push(_,f,E)}this.setIndex(o),this.setAttribute("position",new ve(a,3)),this.setAttribute("normal",new ve(l,3)),this.setAttribute("uv",new ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Te extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vf extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gf extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wf{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],v=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const Xf=new Wf;class Js{constructor(t){this.manager=t!==void 0?t:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Js.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class Yf extends Error{constructor(t,e){super(t),this.response=e}}class qf extends Js{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=jr.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Fn[t]!==void 0){Fn[t].push({onLoad:e,onProgress:n,onError:s});return}Fn[t]=[],Fn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Fn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,v=p!==0;let y=0;const _=new ReadableStream({start(f){E();function E(){u.read().then(({done:S,value:x})=>{if(S)f.close();else{y+=x.byteLength;const O=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:p});for(let I=0,F=h.length;I<F;I++){const z=h[I];z.onProgress&&z.onProgress(O)}f.enqueue(x),E()}},S=>{f.error(S)})}}});return new Response(_)}else throw new Yf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{jr.add(t,c);const h=Fn[t];delete Fn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Fn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Fn[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class $f extends Js{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=jr.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Gs("img");function l(){h(),jr.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Zf extends Js{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new sf,a=new qf(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:kn,o.wrapT=c.wrapT!==void 0?c.wrapT:kn,o.magFilter=c.magFilter!==void 0?c.magFilter:We,o.minFilter=c.minFilter!==void 0?c.minFilter:We,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ni),c.mipmapCount===1&&(o.minFilter=We),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,s),o}}class Kf extends Js{constructor(t){super(t)}load(t,e,n,s){const r=new Oe,o=new $f(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class co extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jf extends co{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wo=new _e,ac=new B,lc=new B;class Lh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(ac),lc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lc),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const cc=new _e,Cs=new B,Xo=new B;class jf extends Lh{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cs),Xo.copy(n.position),Xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xo),n.updateMatrixWorld(),s.makeTranslation(-Cs.x,-Cs.y,-Cs.z),cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc)}}class Dh extends co{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ih extends vh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qf extends Lh{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uh extends co{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Qf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tp extends co{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ep extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class np{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hc(){return performance.now()}const uc=new _e;class ip{constructor(t,e,n=0,s=1/0){this.ray=new ro(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(t,e=!0,n=[]){return Za(t,this,n,e),n.sort(dc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Za(t[s],this,n,e);return n.sort(dc),n}}function dc(i,t){return i.distance-t.distance}function Za(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Za(r[o],t,e,!0)}}class fc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sp extends Ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function pc(i,t,e,n){const s=rp(n);switch(e){case sh:return i*t;case oh:return i*t;case ah:return i*t*2;case ll:return i*t/s.components*s.byteLength;case cl:return i*t/s.components*s.byteLength;case lh:return i*t*2/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case rh:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case ul:return i*t*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case va:case ya:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Xr:case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ch:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(i){switch(i){case Xn:case eh:return{byteLength:1,components:1};case Hs:case nh:case Hn:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case Ei:case rl:case cn:return{byteLength:4,components:1};case ih:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function op(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<u.length;p++){const v=u[d],y=u[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,v=u.length;p<v;p++){const y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:ap,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:xp,iridescence_fragment:yp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:bp,clipping_planes_vertex:wp,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Cp,color_vertex:Rp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Up,emissivemap_fragment:Np,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Hp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:Qp,envmap_vertex:Gp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:qp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Zp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:Jp,lights_pars_begin:jp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:om,lights_fragment_maps:am,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphinstance_vertex:xm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Em,normal_fragment_begin:bm,normal_fragment_maps:wm,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Cm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Im,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:Ym,skinning_pars_vertex:qm,skinning_vertex:$m,skinnormal_vertex:Zm,specularmap_fragment:Km,specularmap_pars_fragment:Jm,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:Eg,meshmatcap_vert:bg,meshmatcap_frag:wg,meshnormal_vert:Tg,meshnormal_frag:Ag,meshphong_vert:Cg,meshphong_frag:Rg,meshphysical_vert:Pg,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ig,points_vert:Ug,points_frag:Ng,shadow_vert:Fg,shadow_frag:Og,sprite_vert:Bg,sprite_frag:zg},bt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},Sn={basic:{uniforms:Ve([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ve([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new te(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ve([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ve([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ve([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new te(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ve([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ve([bt.points,bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ve([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ve([bt.common,bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ve([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ve([bt.sprite,bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ve([bt.common,bt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ve([bt.lights,bt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Sn.physical={uniforms:Ve([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Pr={r:0,b:0,g:0},gi=new wn,kg=new _e;function Hg(i,t,e,n,s,r,o){const a=new te(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function v(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function y(S){let x=!1;const O=v(S);O===null?f(a,l):O&&O.isColor&&(f(O,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,x){const O=v(x);O&&(O.isCubeTexture||O.mapping===io)?(h===void 0&&(h=new $t(new $e(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:us(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(x.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=O,h.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(gi)),h.material.toneMapped=he.getTransfer(O.colorSpace)!==pe,(u!==O||d!==O.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=O,d=O.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):O&&O.isTexture&&(c===void 0&&(c=new $t(new Ks(2,2),new Tn({name:"BackgroundMaterial",uniforms:us(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=O,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(O.colorSpace)!==pe,O.matrixAutoUpdate===!0&&O.updateMatrix(),c.material.uniforms.uvTransform.value.copy(O.matrix),(u!==O||d!==O.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=O,d=O.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(Pr,_h(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,x,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:y,addToRenderList:_,dispose:E}}function Vg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,D,W,X,K){let $=!1;const q=u(X,W,D);r!==q&&(r=q,c(r.object)),$=p(M,X,W,K),$&&v(M,X,W,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,D,W,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,W){const X=W.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let $=K[D.id];$===void 0&&($={},K[D.id]=$);let q=$[X];return q===void 0&&(q=d(l()),$[X]=q),q}function d(M){const D=[],W=[],X=[];for(let K=0;K<e;K++)D[K]=0,W[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:W,attributeDivisors:X,object:M,attributes:{},index:null}}function p(M,D,W,X){const K=r.attributes,$=D.attributes;let q=0;const tt=W.getAttributes();for(const Z in tt)if(tt[Z].location>=0){const yt=K[Z];let At=$[Z];if(At===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(At=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(At=M.instanceColor)),yt===void 0||yt.attribute!==At||At&&yt.data!==At.data)return!0;q++}return r.attributesNum!==q||r.index!==X}function v(M,D,W,X){const K={},$=D.attributes;let q=0;const tt=W.getAttributes();for(const Z in tt)if(tt[Z].location>=0){let yt=$[Z];yt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const At={};At.attribute=yt,yt&&yt.data&&(At.data=yt.data),K[Z]=At,q++}r.attributes=K,r.attributesNum=q,r.index=X}function y(){const M=r.newAttributes;for(let D=0,W=M.length;D<W;D++)M[D]=0}function _(M){f(M,0)}function f(M,D){const W=r.newAttributes,X=r.enabledAttributes,K=r.attributeDivisors;W[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),K[M]!==D&&(i.vertexAttribDivisor(M,D),K[M]=D)}function E(){const M=r.newAttributes,D=r.enabledAttributes;for(let W=0,X=D.length;W<X;W++)D[W]!==M[W]&&(i.disableVertexAttribArray(W),D[W]=0)}function S(M,D,W,X,K,$,q){q===!0?i.vertexAttribIPointer(M,D,W,K,$):i.vertexAttribPointer(M,D,W,X,K,$)}function x(M,D,W,X){y();const K=X.attributes,$=W.getAttributes(),q=D.defaultAttributeValues;for(const tt in $){const Z=$[tt];if(Z.location>=0){let vt=K[tt];if(vt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),vt!==void 0){const yt=vt.normalized,At=vt.itemSize,zt=t.get(vt);if(zt===void 0)continue;const ne=zt.buffer,et=zt.type,xt=zt.bytesPerElement,mt=et===i.INT||et===i.UNSIGNED_INT||vt.gpuType===rl;if(vt.isInterleavedBufferAttribute){const pt=vt.data,Ft=pt.stride,re=vt.offset;if(pt.isInstancedInterleavedBuffer){for(let kt=0;kt<Z.locationSize;kt++)f(Z.location+kt,pt.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let kt=0;kt<Z.locationSize;kt++)_(Z.location+kt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let kt=0;kt<Z.locationSize;kt++)S(Z.location+kt,At/Z.locationSize,et,yt,Ft*xt,(re+At/Z.locationSize*kt)*xt,mt)}else{if(vt.isInstancedBufferAttribute){for(let pt=0;pt<Z.locationSize;pt++)f(Z.location+pt,vt.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let pt=0;pt<Z.locationSize;pt++)_(Z.location+pt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let pt=0;pt<Z.locationSize;pt++)S(Z.location+pt,At/Z.locationSize,et,yt,At*xt,At/Z.locationSize*pt*xt,mt)}}else if(q!==void 0){const yt=q[tt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(Z.location,yt);break;case 3:i.vertexAttrib3fv(Z.location,yt);break;case 4:i.vertexAttrib4fv(Z.location,yt);break;default:i.vertexAttrib1fv(Z.location,yt)}}}}E()}function O(){z();for(const M in n){const D=n[M];for(const W in D){const X=D[W];for(const K in X)h(X[K].object),delete X[K];delete D[W]}delete n[M]}}function I(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const W in D){const X=D[W];for(const K in X)h(X[K].object),delete X[K];delete D[W]}delete n[M.id]}function F(M){for(const D in n){const W=n[D];if(W[M.id]===void 0)continue;const X=W[M.id];for(const K in X)h(X[K].object),delete X[K];delete W[M.id]}}function z(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:_,disableUnusedAttributes:E}}function Gg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let y=0;y<u;y++)v+=h[y]*d[y];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==hn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const z=F===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Xn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==cn&&!z)}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:O,maxSamples:I}}function Xg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const v=u.clippingPlanes,y=u.clipIntersection,_=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!_)r?h(null):c();else{const E=r?0:n,S=E*4;let x=f.clippingState||null;l.value=x,x=h(v,d,S,p);for(let O=0;O!==S;++O)x[O]=e[O];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,v){const y=u!==null?u.length:0;let _=null;if(y!==0){if(_=l.value,v!==!0||_===null){const f=p+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<f)&&(_=new Float32Array(f));for(let S=0,x=p;S!==y;++S,x+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(_,x),_[x+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,_}}function Yg(i){let t=new WeakMap;function e(o,a){return a===ma?o.mapping=as:a===ga&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ma||a===ga)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Qi=4,mc=[.125,.215,.35,.446,.526,.582],Si=20,Yo=new Ih,gc=new te;let qo=null,$o=0,Zo=0,Ko=!1;const yi=(1+Math.sqrt(5))/2,$i=1/yi,_c=[new B(-yi,$i,0),new B(yi,$i,0),new B(-$i,0,yi),new B($i,0,yi),new B(0,yi,-$i),new B(0,yi,$i),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],qg=new B;class vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=qg}=r;qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo,$o,Zo),this._renderer.xr.enabled=Ko,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Hn,format:hn,colorSpace:ai,depthBuffer:!1},s=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$g(r)),this._blurMaterial=Zg(r,t,e)}return s}_compileMaterial(t){const e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Yo)}_sceneToCubeUV(t,e,n,s,r){const l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(gc),u.toneMapping=si,u.autoClear=!1;const v=new ml({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),y=new $t(new $e,v);let _=!1;const f=t.background;f?f.isColor&&(v.color.copy(f),t.background=null,_=!0):(v.color.copy(gc),_=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const x=this._cubeSize;Lr(s,S*x,E>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(y,l),u.render(t,l)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===as||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Yo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_c[(s-r-1)%_c.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $t(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Si-1),y=r/v,_=isFinite(r)?1+Math.floor(h*y):Si;_>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Si}`);const f=[];let E=0;for(let F=0;F<Si;++F){const z=F/y,T=Math.exp(-z*z/2);f.push(T),F===0?E+=T:F<_&&(E+=2*T)}for(let F=0;F<f.length;F++)f[F]=f[F]/E;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=v,d.mipInt.value=S-n;const x=this._sizeLods[s],O=3*x*(s>S-Qi?s-S+Qi:0),I=4*(this._cubeSize-x);Lr(e,O,I,3*x,2*x),l.setRenderTarget(e),l.render(u,Yo)}}function $g(i){const t=[],e=[],n=[];let s=i;const r=i-Qi+1+mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=mc[o-i+Qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,y=3,_=2,f=1,E=new Float32Array(y*v*p),S=new Float32Array(_*v*p),x=new Float32Array(f*v*p);for(let I=0;I<p;I++){const F=I%3*2/3-1,z=I>2?0:-1,T=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];E.set(T,y*v*I),S.set(d,_*v*I);const M=[I,I,I,I,I,I];x.set(M,f*v*I)}const O=new Be;O.setAttribute("position",new en(E,y)),O.setAttribute("uv",new en(S,_)),O.setAttribute("faceIndex",new en(x,f)),t.push(O),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(i,t,e){const n=new bi(i,t,e);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zg(i,t,e){const n=new Float32Array(Si),s=new B(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function yc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Mc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ma||l===ga,h=l===as||l===ls;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new vc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new vc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Jg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,v=u.attributes.position;let y=0;if(p!==null){const E=p.array;y=p.version;for(let S=0,x=E.length;S<x;S+=3){const O=E[S+0],I=E[S+1],F=E[S+2];d.push(O,I,I,F,F,O)}}else if(v!==void 0){const E=v.array;y=v.version;for(let S=0,x=E.length/3-1;S<x;S+=3){const O=S+0,I=S+1,F=S+2;d.push(O,I,I,F,F,O)}}else return;const _=new(dh(d)?gh:mh)(d,1);_.version=y;const f=r.get(u);f&&t.remove(f),r.set(u,_)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Qg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,d*o,v),e.update(p,n,v))}function h(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,v);let _=0;for(let f=0;f<v;f++)_+=p[f];e.update(_,n,1)}function u(d,p,v,y){if(v===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{_.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,v);let f=0;for(let E=0;E<v;E++)f+=p[E]*y[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function t0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e0(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){z.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),y===!0&&(x=2),_===!0&&(x=3);let O=a.attributes.position.count*x,I=1;O>t.maxTextureSize&&(I=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const F=new Float32Array(O*I*4*u),z=new fh(F,O,I,u);z.type=cn,z.needsUpdate=!0;const T=x*4;for(let D=0;D<u;D++){const W=f[D],X=E[D],K=S[D],$=O*I*4*D;for(let q=0;q<W.count;q++){const tt=q*T;v===!0&&(s.fromBufferAttribute(W,q),F[$+tt+0]=s.x,F[$+tt+1]=s.y,F[$+tt+2]=s.z,F[$+tt+3]=0),y===!0&&(s.fromBufferAttribute(X,q),F[$+tt+4]=s.x,F[$+tt+5]=s.y,F[$+tt+6]=s.z,F[$+tt+7]=0),_===!0&&(s.fromBufferAttribute(K,q),F[$+tt+8]=s.x,F[$+tt+9]=s.y,F[$+tt+10]=s.z,F[$+tt+11]=K.itemSize===4?s.w:1)}}d={count:u,texture:z,size:new ht(O,I)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function n0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Fh=new Oe,Sc=new Eh(1,1),Oh=new fh,Bh=new Dd,zh=new xh,Ec=[],bc=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ec[s];if(r===void 0&&(r=new Float32Array(s),Ec[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ho(i,t){let e=bc[t];e===void 0&&(e=new Int32Array(t),bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Ie(e,n)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),Ie(e,n)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(De(e,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Ie(e,n)}}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function p0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function _0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=uh,r=Sc):r=Fh,e.setTexture2D(t||r,s)}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bh,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zh,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}function E0(i,t){i.uniform1fv(this.addr,t)}function b0(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function w0(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function A0(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function C0(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R0(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function P0(i,t){i.uniform1iv(this.addr,t)}function L0(i,t){i.uniform2iv(this.addr,t)}function D0(i,t){i.uniform3iv(this.addr,t)}function I0(i,t){i.uniform4iv(this.addr,t)}function U0(i,t){i.uniform1uiv(this.addr,t)}function N0(i,t){i.uniform2uiv(this.addr,t)}function F0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function B0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function z0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bh,r[o])}function k0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zh,r[o])}function H0(i,t,e){const n=this.cache,s=t.length,r=ho(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function V0(i){switch(i){case 5126:return E0;case 35664:return b0;case 35665:return w0;case 35666:return T0;case 35674:return A0;case 35675:return C0;case 35676:return R0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return H0}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S0(e.type)}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V0(e.type)}}class X0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Cc(i,t){i.seq.push(t),i.map[t.id]=t}function Y0(i,t,e){const n=i.name,s=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),o=Jo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cc(e,c===void 0?new G0(a,i,t):new W0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new X0(a),Cc(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Y0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const q0=37297;let $0=0;function Z0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Pc=new ie;function K0(i){he._getMatrix(Pc,he.workingColorSpace,i);const t=`mat3( ${Pc.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Z0(i.getShaderSource(t),o)}else return s}function J0(i,t){const e=K0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,t){let e;switch(t){case Wu:e="Linear";break;case Xu:e="Reinhard";break;case Yu:e="Cineon";break;case Qc:e="ACESFilmic";break;case $u:e="AgX";break;case Zu:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dr=new B;function Q0(){he.getLuminanceCoefficients(Dr);const i=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function e_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function Dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ic(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(i_,r_)}const s_=new Map;function r_(i,t){let e=se[t];if(e===void 0){const n=s_.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ka(e)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(o_,a_)}function a_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function c_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function u_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jc:t="ENVMAP_BLENDING_MULTIPLY";break;case Vu:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function d_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function f_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=l_(e),c=c_(e),h=h_(e),u=u_(e),d=d_(e),p=t_(e),v=e_(r),y=s.createProgram();let _,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rs).join(`
`),_.length>0&&(_+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Rs).join(`
`),f.length>0&&(f+=`
`)):(_=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),f=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?se.tonemapping_pars_fragment:"",e.toneMapping!==si?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Ka(o),o=Dc(o,e),o=Ic(o,e),a=Ka(a),a=Dc(a,e),a=Ic(a,e),o=Uc(o),a=Uc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,f=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=E+_+o,x=E+f+a,O=Rc(s,s.VERTEX_SHADER,S),I=Rc(s,s.FRAGMENT_SHADER,x);s.attachShader(y,O),s.attachShader(y,I),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function F(D){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(y).trim(),X=s.getShaderInfoLog(O).trim(),K=s.getShaderInfoLog(I).trim();let $=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,O,I);else{const tt=Lc(s,O,"vertex"),Z=Lc(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+tt+`
`+Z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||K==="")&&(q=!1);q&&(D.diagnostics={runnable:$,programLog:W,vertexShader:{log:X,prefix:_},fragmentShader:{log:K,prefix:f}})}s.deleteShader(O),s.deleteShader(I),z=new Yr(s,y),T=n_(s,y)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,q0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=I,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g_(t),e.set(t,n)),n}}class g_{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}}function __(i,t,e,n,s,r,o){const a=new pl,l=new m_,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,M,D,W,X){const K=W.fog,$=X.geometry,q=T.isMeshStandardMaterial?W.environment:null,tt=(T.isMeshStandardMaterial?e:t).get(T.envMap||q),Z=tt&&tt.mapping===io?tt.image.height:null,vt=v[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,At=yt!==void 0?yt.length:0;let zt=0;$.morphAttributes.position!==void 0&&(zt=1),$.morphAttributes.normal!==void 0&&(zt=2),$.morphAttributes.color!==void 0&&(zt=3);let ne,et,xt,mt;if(vt){const ue=Sn[vt];ne=ue.vertexShader,et=ue.fragmentShader}else ne=T.vertexShader,et=T.fragmentShader,l.update(T),xt=l.getVertexShaderID(T),mt=l.getFragmentShaderID(T);const pt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),re=X.isInstancedMesh===!0,kt=X.isBatchedMesh===!0,ae=!!T.map,dt=!!T.matcap,lt=!!tt,P=!!T.aoMap,Ht=!!T.lightMap,ft=!!T.bumpMap,Pt=!!T.normalMap,Mt=!!T.displacementMap,Zt=!!T.emissiveMap,wt=!!T.metalnessMap,R=!!T.roughnessMap,b=T.anisotropy>0,Y=T.clearcoat>0,nt=T.dispersion>0,ct=T.iridescence>0,it=T.sheen>0,Bt=T.transmission>0,Et=b&&!!T.anisotropyMap,Ct=Y&&!!T.clearcoatMap,oe=Y&&!!T.clearcoatNormalMap,gt=Y&&!!T.clearcoatRoughnessMap,Dt=ct&&!!T.iridescenceMap,Vt=ct&&!!T.iridescenceThicknessMap,Gt=it&&!!T.sheenColorMap,Lt=it&&!!T.sheenRoughnessMap,Kt=!!T.specularMap,Xt=!!T.specularColorMap,Jt=!!T.specularIntensityMap,H=Bt&&!!T.transmissionMap,J=Bt&&!!T.thicknessMap,Q=!!T.gradientMap,ot=!!T.alphaMap,Rt=T.alphaTest>0,Tt=!!T.alphaHash,jt=!!T.extensions;let Se=si;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Ue={shaderID:vt,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:et,defines:T.defines,customVertexShaderID:xt,customFragmentShaderID:mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:kt,batchingColor:kt&&X._colorsTexture!==null,instancing:re,instancingColor:re&&X.instanceColor!==null,instancingMorph:re&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ai,alphaToCoverage:!!T.alphaToCoverage,map:ae,matcap:dt,envMap:lt,envMapMode:lt&&tt.mapping,envMapCubeUVHeight:Z,aoMap:P,lightMap:Ht,bumpMap:ft,normalMap:Pt,displacementMap:d&&Mt,emissiveMap:Zt,normalMapObjectSpace:Pt&&T.normalMapType===Qu,normalMapTangentSpace:Pt&&T.normalMapType===hh,metalnessMap:wt,roughnessMap:R,anisotropy:b,anisotropyMap:Et,clearcoat:Y,clearcoatMap:Ct,clearcoatNormalMap:oe,clearcoatRoughnessMap:gt,dispersion:nt,iridescence:ct,iridescenceMap:Dt,iridescenceThicknessMap:Vt,sheen:it,sheenColorMap:Gt,sheenRoughnessMap:Lt,specularMap:Kt,specularColorMap:Xt,specularIntensityMap:Jt,transmission:Bt,transmissionMap:H,thicknessMap:J,gradientMap:Q,opaque:T.transparent===!1&&T.blending===ns&&T.alphaToCoverage===!1,alphaMap:ot,alphaTest:Rt,alphaHash:Tt,combine:T.combine,mapUv:ae&&y(T.map.channel),aoMapUv:P&&y(T.aoMap.channel),lightMapUv:Ht&&y(T.lightMap.channel),bumpMapUv:ft&&y(T.bumpMap.channel),normalMapUv:Pt&&y(T.normalMap.channel),displacementMapUv:Mt&&y(T.displacementMap.channel),emissiveMapUv:Zt&&y(T.emissiveMap.channel),metalnessMapUv:wt&&y(T.metalnessMap.channel),roughnessMapUv:R&&y(T.roughnessMap.channel),anisotropyMapUv:Et&&y(T.anisotropyMap.channel),clearcoatMapUv:Ct&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&y(T.sheenRoughnessMap.channel),specularMapUv:Kt&&y(T.specularMap.channel),specularColorMapUv:Xt&&y(T.specularColorMap.channel),specularIntensityMapUv:Jt&&y(T.specularIntensityMap.channel),transmissionMapUv:H&&y(T.transmissionMap.channel),thicknessMapUv:J&&y(T.thicknessMap.channel),alphaMapUv:ot&&y(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Pt||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(ae||ot),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ft,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:ae&&T.map.isVideoTexture===!0&&he.getTransfer(T.map.colorSpace)===pe,decodeVideoTextureEmissive:Zt&&T.emissiveMap.isVideoTexture===!0&&he.getTransfer(T.emissiveMap.colorSpace)===pe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ge,flipSided:T.side===Xe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:jt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&T.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(E(M,T),S(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function E(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function S(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const M=v[T.type];let D;if(M){const W=Sn[M];D=$d.clone(W.uniforms)}else D=T.uniforms;return D}function O(T,M){let D;for(let W=0,X=h.length;W<X;W++){const K=h[W];if(K.cacheKey===M){D=K,++D.usedTimes;break}}return D===void 0&&(D=new f_(i,M,T,r),h.push(D)),D}function I(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function F(T){l.remove(T)}function z(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:x,acquireProgram:O,releaseProgram:I,releaseShaderCache:F,programs:h,dispose:z}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function x_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,v,y,_){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:y,group:_},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=y,f.group=_),t++,f}function a(u,d,p,v,y,_){const f=o(u,d,p,v,y,_);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,v,y,_){const f=o(u,d,p,v,y,_);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||x_),n.length>1&&n.sort(d||Fc),s.length>1&&s.sort(d||Fc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function y_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Oc,i.set(n,[o])):s>=r.length?(o=new Oc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function M_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new te};break;case"SpotLight":e={position:new B,direction:new B,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let E_=0;function b_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){const t=new M_,e=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,r=new _e,o=new _e;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,v=0,y=0,_=0,f=0,E=0,S=0,x=0,O=0,I=0,F=0;c.sort(b_);for(let T=0,M=c.length;T<M;T++){const D=c[T],W=D.color,X=D.intensity,K=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=W.r*X,u+=W.g*X,d+=W.b*X;else if(D.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(D.sh.coefficients[q],X);F++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const tt=D.shadow,Z=e.get(D);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=q,p++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(W).multiplyScalar(X),q.distance=K,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,n.spot[y]=q;const tt=D.shadow;if(D.map&&(n.spotLightMap[O]=D.map,O++,tt.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[y]=tt.matrix,D.castShadow){const Z=e.get(D);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=$,x++}y++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(W).multiplyScalar(X),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),n.rectArea[_]=q,_++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const tt=D.shadow,Z=e.get(D);Z.shadowIntensity=tt.intensity,Z.shadowBias=tt.bias,Z.shadowNormalBias=tt.normalBias,Z.shadowRadius=tt.radius,Z.shadowMapSize=tt.mapSize,Z.shadowCameraNear=tt.camera.near,Z.shadowCameraFar=tt.camera.far,n.pointShadow[v]=Z,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=D.shadow.matrix,S++}n.point[v]=q,v++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(X),q.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[f]=q,f++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const z=n.hash;(z.directionalLength!==p||z.pointLength!==v||z.spotLength!==y||z.rectAreaLength!==_||z.hemiLength!==f||z.numDirectionalShadows!==E||z.numPointShadows!==S||z.numSpotShadows!==x||z.numSpotMaps!==O||z.numLightProbes!==F)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=_,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+O-I,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=F,z.directionalLength=p,z.pointLength=v,z.spotLength=y,z.rectAreaLength=_,z.hemiLength=f,z.numDirectionalShadows=E,z.numPointShadows=S,z.numSpotShadows=x,z.numSpotMaps=O,z.numLightProbes=F,n.version=E_++)}function l(c,h){let u=0,d=0,p=0,v=0,y=0;const _=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const S=c[f];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),u++}else if(S.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),p++}else if(S.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),o.identity(),r.copy(S.matrixWorld),r.premultiply(_),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(_),d++}else if(S.isHemisphereLight){const x=n.hemi[y];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(_),y++}}}return{setup:a,setupView:l,state:n}}function Bc(i){const t=new w_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function T_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bc(i),t.set(s,[a])):r>=o.length?(a=new Bc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(i,t,e){let n=new _l;const s=new ht,r=new ht,o=new ge,a=new Vf({depthPacking:ju}),l=new Gf,c={},h=e.maxTextureSize,u={[oi]:Xe,[Xe]:oi,[Ge]:Ge},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Be;v.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new $t(v,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let f=this.type;this.render=function(I,F,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ii),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=f!==On&&this.type===On,K=f===On&&this.type!==On;for(let $=0,q=I.length;$<q;$++){const tt=I[$],Z=tt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const vt=Z.getFrameExtents();if(s.multiply(vt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/vt.x),s.x=r.x*vt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/vt.y),s.y=r.y*vt.y,Z.mapSize.y=r.y)),Z.map===null||X===!0||K===!0){const At=this.type!==On?{minFilter:tn,magFilter:tn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new bi(s.x,s.y,At),Z.map.texture.name=tt.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const yt=Z.getViewportCount();for(let At=0;At<yt;At++){const zt=Z.getViewport(At);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),W.viewport(o),Z.updateMatrices(tt,At),n=Z.getFrustum(),x(F,z,Z.camera,tt,this.type)}Z.isPointLightShadow!==!0&&this.type===On&&E(Z,z),Z.needsUpdate=!1}f=this.type,_.needsUpdate=!1,i.setRenderTarget(T,M,D)};function E(I,F){const z=t.update(y);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(F,null,z,d,y,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(F,null,z,p,y,null)}function S(I,F,z,T){let M=null;const D=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)M=D;else if(M=z.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const W=M.uuid,X=F.uuid;let K=c[W];K===void 0&&(K={},c[W]=K);let $=K[X];$===void 0&&($=M.clone(),K[X]=$,F.addEventListener("dispose",O)),M=$}if(M.visible=F.visible,M.wireframe=F.wireframe,T===On?M.side=F.shadowSide!==null?F.shadowSide:F.side:M.side=F.shadowSide!==null?F.shadowSide:u[F.side],M.alphaMap=F.alphaMap,M.alphaTest=F.alphaTest,M.map=F.map,M.clipShadows=F.clipShadows,M.clippingPlanes=F.clippingPlanes,M.clipIntersection=F.clipIntersection,M.displacementMap=F.displacementMap,M.displacementScale=F.displacementScale,M.displacementBias=F.displacementBias,M.wireframeLinewidth=F.wireframeLinewidth,M.linewidth=F.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=z}return M}function x(I,F,z,T,M){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===On)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const X=t.update(I),K=I.material;if(Array.isArray(K)){const $=X.groups;for(let q=0,tt=$.length;q<tt;q++){const Z=$[q],vt=K[Z.materialIndex];if(vt&&vt.visible){const yt=S(I,vt,T,M);I.onBeforeShadow(i,I,F,z,X,yt,Z),i.renderBufferDirect(z,null,X,yt,I,Z),I.onAfterShadow(i,I,F,z,X,yt,Z)}}}else if(K.visible){const $=S(I,K,T,M);I.onBeforeShadow(i,I,F,z,X,$,null),i.renderBufferDirect(z,null,X,$,I,null),I.onAfterShadow(i,I,F,z,X,$,null)}}const W=I.children;for(let X=0,K=W.length;X<K;X++)x(W[X],F,z,T,M)}function O(I){I.target.removeEventListener("dispose",O);for(const z in c){const T=c[z],M=I.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const P_={[la]:ca,[ha]:fa,[ua]:pa,[os]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:os};function L_(i,t){function e(){let H=!1;const J=new ge;let Q=null;const ot=new ge(0,0,0,0);return{setMask:function(Rt){Q!==Rt&&!H&&(i.colorMask(Rt,Rt,Rt,Rt),Q=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,Tt,jt,Se,Ue){Ue===!0&&(Rt*=Se,Tt*=Se,jt*=Se),J.set(Rt,Tt,jt,Se),ot.equals(J)===!1&&(i.clearColor(Rt,Tt,jt,Se),ot.copy(J))},reset:function(){H=!1,Q=null,ot.set(-1,0,0,0)}}}function n(){let H=!1,J=!1,Q=null,ot=null,Rt=null;return{setReversed:function(Tt){if(J!==Tt){const jt=t.get("EXT_clip_control");J?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Se=Rt;Rt=null,this.setClear(Se)}J=Tt},getReversed:function(){return J},setTest:function(Tt){Tt?pt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(Tt){Q!==Tt&&!H&&(i.depthMask(Tt),Q=Tt)},setFunc:function(Tt){if(J&&(Tt=P_[Tt]),ot!==Tt){switch(Tt){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Tt}},setLocked:function(Tt){H=Tt},setClear:function(Tt){Rt!==Tt&&(J&&(Tt=1-Tt),i.clearDepth(Tt),Rt=Tt)},reset:function(){H=!1,Q=null,ot=null,Rt=null,J=!1}}}function s(){let H=!1,J=null,Q=null,ot=null,Rt=null,Tt=null,jt=null,Se=null,Ue=null;return{setTest:function(ue){H||(ue?pt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(ue){J!==ue&&!H&&(i.stencilMask(ue),J=ue)},setFunc:function(ue,Ze,dn){(Q!==ue||ot!==Ze||Rt!==dn)&&(i.stencilFunc(ue,Ze,dn),Q=ue,ot=Ze,Rt=dn)},setOp:function(ue,Ze,dn){(Tt!==ue||jt!==Ze||Se!==dn)&&(i.stencilOp(ue,Ze,dn),Tt=ue,jt=Ze,Se=dn)},setLocked:function(ue){H=ue},setClear:function(ue){Ue!==ue&&(i.clearStencil(ue),Ue=ue)},reset:function(){H=!1,J=null,Q=null,ot=null,Rt=null,Tt=null,jt=null,Se=null,Ue=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],v=null,y=!1,_=null,f=null,E=null,S=null,x=null,O=null,I=null,F=new te(0,0,0),z=0,T=!1,M=null,D=null,W=null,X=null,K=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,tt=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=tt>=1):Z.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=tt>=2);let vt=null,yt={};const At=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),ne=new ge().fromArray(At),et=new ge().fromArray(zt);function xt(H,J,Q,ot){const Rt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(H,Tt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<Q;jt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(J+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return Tt}const mt={};mt[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),o.setFunc(os),ft(!1),Pt(Rl),pt(i.CULL_FACE),P(ii);function pt(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function Ft(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function re(H,J){return u[H]!==J?(i.bindFramebuffer(H,J),u[H]=J,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=J),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=J),!0):!1}function kt(H,J){let Q=p,ot=!1;if(H){Q=d.get(J),Q===void 0&&(Q=[],d.set(J,Q));const Rt=H.textures;if(Q.length!==Rt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,jt=Rt.length;Tt<jt;Tt++)Q[Tt]=i.COLOR_ATTACHMENT0+Tt;Q.length=Rt.length,ot=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ot=!0);ot&&i.drawBuffers(Q)}function ae(H){return v!==H?(i.useProgram(H),v=H,!0):!1}const dt={[Mi]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};dt[Au]=i.MIN,dt[Cu]=i.MAX;const lt={[Ru]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[aa]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(H,J,Q,ot,Rt,Tt,jt,Se,Ue,ue){if(H===ii){y===!0&&(Ft(i.BLEND),y=!1);return}if(y===!1&&(pt(i.BLEND),y=!0),H!==bu){if(H!==_||ue!==T){if((f!==Mi||x!==Mi)&&(i.blendEquation(i.FUNC_ADD),f=Mi,x=Mi),ue)switch(H){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,S=null,O=null,I=null,F.set(0,0,0),z=0,_=H,T=ue}return}Rt=Rt||J,Tt=Tt||Q,jt=jt||ot,(J!==f||Rt!==x)&&(i.blendEquationSeparate(dt[J],dt[Rt]),f=J,x=Rt),(Q!==E||ot!==S||Tt!==O||jt!==I)&&(i.blendFuncSeparate(lt[Q],lt[ot],lt[Tt],lt[jt]),E=Q,S=ot,O=Tt,I=jt),(Se.equals(F)===!1||Ue!==z)&&(i.blendColor(Se.r,Se.g,Se.b,Ue),F.copy(Se),z=Ue),_=H,T=!1}function Ht(H,J){H.side===Ge?Ft(i.CULL_FACE):pt(i.CULL_FACE);let Q=H.side===Xe;J&&(Q=!Q),ft(Q),H.blending===ns&&H.transparent===!1?P(ii):P(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const ot=H.stencilWrite;a.setTest(ot),ot&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Zt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){M!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),M=H)}function Pt(H){H!==Mu?(pt(i.CULL_FACE),H!==D&&(H===Rl?i.cullFace(i.BACK):H===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),D=H}function Mt(H){H!==W&&(q&&i.lineWidth(H),W=H)}function Zt(H,J,Q){H?(pt(i.POLYGON_OFFSET_FILL),(X!==J||K!==Q)&&(i.polygonOffset(J,Q),X=J,K=Q)):Ft(i.POLYGON_OFFSET_FILL)}function wt(H){H?pt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function R(H){H===void 0&&(H=i.TEXTURE0+$-1),vt!==H&&(i.activeTexture(H),vt=H)}function b(H,J,Q){Q===void 0&&(vt===null?Q=i.TEXTURE0+$-1:Q=vt);let ot=yt[Q];ot===void 0&&(ot={type:void 0,texture:void 0},yt[Q]=ot),(ot.type!==H||ot.texture!==J)&&(vt!==Q&&(i.activeTexture(Q),vt=Q),i.bindTexture(H,J||mt[H]),ot.type=H,ot.texture=J)}function Y(){const H=yt[vt];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function it(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Bt(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Et(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(H){ne.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function Lt(H){et.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),et.copy(H))}function Kt(H,J){let Q=c.get(J);Q===void 0&&(Q=new WeakMap,c.set(J,Q));let ot=Q.get(H);ot===void 0&&(ot=i.getUniformBlockIndex(J,H.name),Q.set(H,ot))}function Xt(H,J){const ot=c.get(J).get(H);l.get(J)!==ot&&(i.uniformBlockBinding(J,ot,H.__bindingPointIndex),l.set(J,ot))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},vt=null,yt={},u={},d=new WeakMap,p=[],v=null,y=!1,_=null,f=null,E=null,S=null,x=null,O=null,I=null,F=new te(0,0,0),z=0,T=!1,M=null,D=null,W=null,X=null,K=null,ne.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Ft,bindFramebuffer:re,drawBuffers:kt,useProgram:ae,setBlending:P,setMaterial:Ht,setFlipSided:ft,setCullFace:Pt,setLineWidth:Mt,setPolygonOffset:Zt,setScissorTest:wt,activeTexture:R,bindTexture:b,unbindTexture:Y,compressedTexImage2D:nt,compressedTexImage3D:ct,texImage2D:Dt,texImage3D:Vt,updateUBOMapping:Kt,uniformBlockBinding:Xt,texStorage2D:oe,texStorage3D:gt,texSubImage2D:it,texSubImage3D:Bt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Ct,scissor:Gt,viewport:Lt,reset:Jt}}function D_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return p?new OffscreenCanvas(R,b):Gs("canvas")}function y(R,b,Y){let nt=1;const ct=wt(R);if((ct.width>Y||ct.height>Y)&&(nt=Y/Math.max(ct.width,ct.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const it=Math.floor(nt*ct.width),Bt=Math.floor(nt*ct.height);u===void 0&&(u=v(it,Bt));const Et=b?v(it,Bt):u;return Et.width=it,Et.height=Bt,Et.getContext("2d").drawImage(R,0,0,it,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+it+"x"+Bt+")."),Et}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function _(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,b,Y,nt,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let it=b;if(b===i.RED&&(Y===i.FLOAT&&(it=i.R32F),Y===i.HALF_FLOAT&&(it=i.R16F),Y===i.UNSIGNED_BYTE&&(it=i.R8)),b===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.R8UI),Y===i.UNSIGNED_SHORT&&(it=i.R16UI),Y===i.UNSIGNED_INT&&(it=i.R32UI),Y===i.BYTE&&(it=i.R8I),Y===i.SHORT&&(it=i.R16I),Y===i.INT&&(it=i.R32I)),b===i.RG&&(Y===i.FLOAT&&(it=i.RG32F),Y===i.HALF_FLOAT&&(it=i.RG16F),Y===i.UNSIGNED_BYTE&&(it=i.RG8)),b===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RG8UI),Y===i.UNSIGNED_SHORT&&(it=i.RG16UI),Y===i.UNSIGNED_INT&&(it=i.RG32UI),Y===i.BYTE&&(it=i.RG8I),Y===i.SHORT&&(it=i.RG16I),Y===i.INT&&(it=i.RG32I)),b===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(it=i.RGB16UI),Y===i.UNSIGNED_INT&&(it=i.RGB32UI),Y===i.BYTE&&(it=i.RGB8I),Y===i.SHORT&&(it=i.RGB16I),Y===i.INT&&(it=i.RGB32I)),b===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),Y===i.UNSIGNED_INT&&(it=i.RGBA32UI),Y===i.BYTE&&(it=i.RGBA8I),Y===i.SHORT&&(it=i.RGBA16I),Y===i.INT&&(it=i.RGBA32I)),b===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),b===i.RGBA){const Bt=ct?$r:he.getTransfer(nt);Y===i.FLOAT&&(it=i.RGBA32F),Y===i.HALF_FLOAT&&(it=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(it=Bt===pe?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(R,b){let Y;return R?b===null||b===Ei||b===cs?Y=i.DEPTH24_STENCIL8:b===cn?Y=i.DEPTH32F_STENCIL8:b===Hs&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ei||b===cs?Y=i.DEPTH_COMPONENT24:b===cn?Y=i.DEPTH_COMPONENT32F:b===Hs&&(Y=i.DEPTH_COMPONENT16),Y}function O(R,b){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==We?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function I(R){const b=R.target;b.removeEventListener("dispose",I),z(b),b.isVideoTexture&&h.delete(b)}function F(R){const b=R.target;b.removeEventListener("dispose",F),M(b)}function z(R){const b=n.get(R);if(b.__webglInit===void 0)return;const Y=R.source,nt=d.get(Y);if(nt){const ct=nt[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&T(R),Object.keys(nt).length===0&&d.delete(Y)}n.remove(R)}function T(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const Y=R.source,nt=d.get(Y);delete nt[b.__cacheKey],o.memory.textures--}function M(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(b.__webglFramebuffer[nt]))for(let ct=0;ct<b.__webglFramebuffer[nt].length;ct++)i.deleteFramebuffer(b.__webglFramebuffer[nt][ct]);else i.deleteFramebuffer(b.__webglFramebuffer[nt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[nt])}else{if(Array.isArray(b.__webglFramebuffer))for(let nt=0;nt<b.__webglFramebuffer.length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[nt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let nt=0;nt<b.__webglColorRenderbuffer.length;nt++)b.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[nt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=R.textures;for(let nt=0,ct=Y.length;nt<ct;nt++){const it=n.get(Y[nt]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(Y[nt])}n.remove(R)}let D=0;function W(){D=0}function X(){const R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function K(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function $(R,b){const Y=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(Y,R,b);return}}e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+b)}function q(R,b){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){et(Y,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+b)}function tt(R,b){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){et(Y,R,b);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+b)}function Z(R,b){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){xt(Y,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+b)}const vt={[ks]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[_a]:i.MIRRORED_REPEAT},yt={[tn]:i.NEAREST,[Ku]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},At={[td]:i.NEVER,[od]:i.ALWAYS,[ed]:i.LESS,[uh]:i.LEQUAL,[nd]:i.EQUAL,[rd]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function zt(R,b){if(b.type===cn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===We||b.magFilter===vo||b.magFilter===sr||b.magFilter===ni||b.minFilter===We||b.minFilter===vo||b.minFilter===sr||b.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,vt[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,vt[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,vt[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,yt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,At[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==sr&&b.minFilter!==ni||b.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ne(R,b){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",I));const nt=b.source;let ct=d.get(nt);ct===void 0&&(ct={},d.set(nt,ct));const it=K(b);if(it!==R.__cacheKey){ct[it]===void 0&&(ct[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ct[it].usedTimes++;const Bt=ct[R.__cacheKey];Bt!==void 0&&(ct[R.__cacheKey].usedTimes--,Bt.usedTimes===0&&T(b)),R.__cacheKey=it,R.__webglTexture=ct[it].texture}return Y}function et(R,b,Y){let nt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=i.TEXTURE_3D);const ct=ne(R,b),it=b.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+Y);const Bt=n.get(it);if(it.version!==Bt.__version||ct===!0){e.activeTexture(i.TEXTURE0+Y);const Et=he.getPrimaries(he.workingColorSpace),Ct=b.colorSpace===Bn?null:he.getPrimaries(b.colorSpace),oe=b.colorSpace===Bn||Et===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let gt=y(b.image,!1,s.maxTextureSize);gt=Zt(b,gt);const Dt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type);let Gt=S(b.internalFormat,Dt,Vt,b.colorSpace,b.isVideoTexture);zt(nt,b);let Lt;const Kt=b.mipmaps,Xt=b.isVideoTexture!==!0,Jt=Bt.__version===void 0||ct===!0,H=it.dataReady,J=O(b,gt);if(b.isDepthTexture)Gt=x(b.format===hs,b.type),Jt&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Gt,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Dt,Vt,null));else if(b.isDataTexture)if(Kt.length>0){Xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,J,Gt,Kt[0].width,Kt[0].height);for(let Q=0,ot=Kt.length;Q<ot;Q++)Lt=Kt[Q],Xt?H&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Lt.width,Lt.height,Dt,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,Q,Gt,Lt.width,Lt.height,0,Dt,Vt,Lt.data);b.generateMipmaps=!1}else Xt?(Jt&&e.texStorage2D(i.TEXTURE_2D,J,Gt,gt.width,gt.height),H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt.width,gt.height,Dt,Vt,gt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,gt.width,gt.height,0,Dt,Vt,gt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,Gt,Kt[0].width,Kt[0].height,gt.depth);for(let Q=0,ot=Kt.length;Q<ot;Q++)if(Lt=Kt[Q],b.format!==hn)if(Dt!==null)if(Xt){if(H)if(b.layerUpdates.size>0){const Rt=pc(Lt.width,Lt.height,b.format,b.type);for(const Tt of b.layerUpdates){const jt=Lt.data.subarray(Tt*Rt/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*Rt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Tt,Lt.width,Lt.height,1,Dt,jt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Lt.width,Lt.height,gt.depth,Dt,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Gt,Lt.width,Lt.height,gt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?H&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Lt.width,Lt.height,gt.depth,Dt,Vt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Gt,Lt.width,Lt.height,gt.depth,0,Dt,Vt,Lt.data)}else{Xt&&Jt&&e.texStorage2D(i.TEXTURE_2D,J,Gt,Kt[0].width,Kt[0].height);for(let Q=0,ot=Kt.length;Q<ot;Q++)Lt=Kt[Q],b.format!==hn?Dt!==null?Xt?H&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Lt.width,Lt.height,Dt,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Gt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?H&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Lt.width,Lt.height,Dt,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,Q,Gt,Lt.width,Lt.height,0,Dt,Vt,Lt.data)}else if(b.isDataArrayTexture)if(Xt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,J,Gt,gt.width,gt.height,gt.depth),H)if(b.layerUpdates.size>0){const Q=pc(gt.width,gt.height,b.format,b.type);for(const ot of b.layerUpdates){const Rt=gt.data.subarray(ot*Q/gt.data.BYTES_PER_ELEMENT,(ot+1)*Q/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,gt.width,gt.height,1,Dt,Vt,Rt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Dt,Vt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,gt.width,gt.height,gt.depth,0,Dt,Vt,gt.data);else if(b.isData3DTexture)Xt?(Jt&&e.texStorage3D(i.TEXTURE_3D,J,Gt,gt.width,gt.height,gt.depth),H&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Dt,Vt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,gt.width,gt.height,gt.depth,0,Dt,Vt,gt.data);else if(b.isFramebufferTexture){if(Jt)if(Xt)e.texStorage2D(i.TEXTURE_2D,J,Gt,gt.width,gt.height);else{let Q=gt.width,ot=gt.height;for(let Rt=0;Rt<J;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Gt,Q,ot,0,Dt,Vt,null),Q>>=1,ot>>=1}}else if(Kt.length>0){if(Xt&&Jt){const Q=wt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,J,Gt,Q.width,Q.height)}for(let Q=0,ot=Kt.length;Q<ot;Q++)Lt=Kt[Q],Xt?H&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,Dt,Vt,Lt):e.texImage2D(i.TEXTURE_2D,Q,Gt,Dt,Vt,Lt);b.generateMipmaps=!1}else if(Xt){if(Jt){const Q=wt(gt);e.texStorage2D(i.TEXTURE_2D,J,Gt,Q.width,Q.height)}H&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,Vt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Dt,Vt,gt);_(b)&&f(nt),Bt.__version=it.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function xt(R,b,Y){if(b.image.length!==6)return;const nt=ne(R,b),ct=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);const it=n.get(ct);if(ct.version!==it.__version||nt===!0){e.activeTexture(i.TEXTURE0+Y);const Bt=he.getPrimaries(he.workingColorSpace),Et=b.colorSpace===Bn?null:he.getPrimaries(b.colorSpace),Ct=b.colorSpace===Bn||Bt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,Dt=[];for(let ot=0;ot<6;ot++)!oe&&!gt?Dt[ot]=y(b.image[ot],!0,s.maxCubemapSize):Dt[ot]=gt?b.image[ot].image:b.image[ot],Dt[ot]=Zt(b,Dt[ot]);const Vt=Dt[0],Gt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),Kt=S(b.internalFormat,Gt,Lt,b.colorSpace),Xt=b.isVideoTexture!==!0,Jt=it.__version===void 0||nt===!0,H=ct.dataReady;let J=O(b,Vt);zt(i.TEXTURE_CUBE_MAP,b);let Q;if(oe){Xt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Kt,Vt.width,Vt.height);for(let ot=0;ot<6;ot++){Q=Dt[ot].mipmaps;for(let Rt=0;Rt<Q.length;Rt++){const Tt=Q[Rt];b.format!==hn?Gt!==null?Xt?H&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,Tt.width,Tt.height,Gt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,Kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,Tt.width,Tt.height,Gt,Lt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,Kt,Tt.width,Tt.height,0,Gt,Lt,Tt.data)}}}else{if(Q=b.mipmaps,Xt&&Jt){Q.length>0&&J++;const ot=wt(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,J,Kt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(gt){Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Dt[ot].width,Dt[ot].height,Gt,Lt,Dt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Kt,Dt[ot].width,Dt[ot].height,0,Gt,Lt,Dt[ot].data);for(let Rt=0;Rt<Q.length;Rt++){const jt=Q[Rt].image[ot].image;Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,jt.width,jt.height,Gt,Lt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,Kt,jt.width,jt.height,0,Gt,Lt,jt.data)}}else{Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Gt,Lt,Dt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Kt,Gt,Lt,Dt[ot]);for(let Rt=0;Rt<Q.length;Rt++){const Tt=Q[Rt];Xt?H&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,Gt,Lt,Tt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,Kt,Gt,Lt,Tt.image[ot])}}}_(b)&&f(i.TEXTURE_CUBE_MAP),it.__version=ct.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function mt(R,b,Y,nt,ct,it){const Bt=r.convert(Y.format,Y.colorSpace),Et=r.convert(Y.type),Ct=S(Y.internalFormat,Bt,Et,Y.colorSpace),oe=n.get(b),gt=n.get(Y);if(gt.__renderTarget=b,!oe.__hasExternalTextures){const Dt=Math.max(1,b.width>>it),Vt=Math.max(1,b.height>>it);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,it,Ct,Dt,Vt,b.depth,0,Bt,Et,null):e.texImage2D(ct,it,Ct,Dt,Vt,0,Bt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Pt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ct,gt.__webglTexture,0,ft(b)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ct,gt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,b,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const nt=b.depthTexture,ct=nt&&nt.isDepthTexture?nt.type:null,it=x(b.stencilBuffer,ct),Bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=ft(b);Pt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,it,b.width,b.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,it,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,it,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,R)}else{const nt=b.textures;for(let ct=0;ct<nt.length;ct++){const it=nt[ct],Bt=r.convert(it.format,it.colorSpace),Et=r.convert(it.type),Ct=S(it.internalFormat,Bt,Et,it.colorSpace),oe=ft(b);Y&&Pt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Ct,b.width,b.height):Pt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Ct,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(b.depthTexture);nt.__renderTarget=b,(!nt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const ct=nt.__webglTexture,it=ft(b);if(b.depthTexture.format===is)Pt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(b.depthTexture.format===hs)Pt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function re(R){const b=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const nt=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),nt){const ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,nt.removeEventListener("dispose",ct)};nt.addEventListener("dispose",ct),b.__depthDisposeCallback=ct}b.__boundDepthTexture=nt}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ft(b.__webglFramebuffer,R)}else if(Y){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]===void 0)b.__webglDepthbuffer[nt]=i.createRenderbuffer(),pt(b.__webglDepthbuffer[nt],R,!1);else{const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=b.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pt(b.__webglDepthbuffer,R,!1);else{const nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(R,b,Y){const nt=n.get(R);b!==void 0&&mt(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&re(R)}function ae(R){const b=R.texture,Y=n.get(R),nt=n.get(b);R.addEventListener("dispose",F);const ct=R.textures,it=R.isWebGLCubeRenderTarget===!0,Bt=ct.length>1;if(Bt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=b.version,o.memory.textures++),it){Y.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Et]=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)Y.__webglFramebuffer[Et][Ct]=i.createFramebuffer()}else Y.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Et=0;Et<b.mipmaps.length;Et++)Y.__webglFramebuffer[Et]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let Et=0,Ct=ct.length;Et<Ct;Et++){const oe=n.get(ct[Et]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Pt(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Et=0;Et<ct.length;Et++){const Ct=ct[Et];Y.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Et]);const oe=r.convert(Ct.format,Ct.colorSpace),gt=r.convert(Ct.type),Dt=S(Ct.internalFormat,oe,gt,Ct.colorSpace,R.isXRRenderTarget===!0),Vt=ft(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),zt(i.TEXTURE_CUBE_MAP,b);for(let Et=0;Et<6;Et++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)mt(Y.__webglFramebuffer[Et][Ct],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ct);else mt(Y.__webglFramebuffer[Et],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);_(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let Et=0,Ct=ct.length;Et<Ct;Et++){const oe=ct[Et],gt=n.get(oe);e.bindTexture(i.TEXTURE_2D,gt.__webglTexture),zt(i.TEXTURE_2D,oe),mt(Y.__webglFramebuffer,R,oe,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),_(oe)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Et=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,nt.__webglTexture),zt(Et,b),b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)mt(Y.__webglFramebuffer[Ct],R,b,i.COLOR_ATTACHMENT0,Et,Ct);else mt(Y.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Et,0);_(b)&&f(Et),e.unbindTexture()}R.depthBuffer&&re(R)}function dt(R){const b=R.textures;for(let Y=0,nt=b.length;Y<nt;Y++){const ct=b[Y];if(_(ct)){const it=E(R),Bt=n.get(ct).__webglTexture;e.bindTexture(it,Bt),f(it),e.unbindTexture()}}}const lt=[],P=[];function Ht(R){if(R.samples>0){if(Pt(R)===!1){const b=R.textures,Y=R.width,nt=R.height;let ct=i.COLOR_BUFFER_BIT;const it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(R),Et=b.length>1;if(Et)for(let Ct=0;Ct<b.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ct]);const oe=n.get(b[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,Y,nt,0,0,Y,nt,ct,i.NEAREST),l===!0&&(lt.length=0,P.length=0,lt.push(i.COLOR_ATTACHMENT0+Ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(lt.push(it),P.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Ct=0;Ct<b.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ct]);const oe=n.get(b[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ft(R){return Math.min(s.maxSamples,R.samples)}function Pt(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Mt(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Zt(R,b){const Y=R.colorSpace,nt=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==ai&&Y!==Bn&&(he.getTransfer(Y)===pe?(nt!==hn||ct!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=Z,this.rebindTextures=kt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Pt}function I_(i,t){function e(n,s=Bn){let r;const o=he.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eh)return i.BYTE;if(n===nh)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===sh)return i.ALPHA;if(n===rh)return i.RGB;if(n===hn)return i.RGBA;if(n===oh)return i.LUMINANCE;if(n===ah)return i.LUMINANCE_ALPHA;if(n===is)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===lh)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===Hr||n===Vr||n===Gr||n===Wr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===ya||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ea||n===ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===Ea)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ta||n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Na)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===za||n===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Xr)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ch||n===Ha||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:U_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends Ai{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,v=null;const y=new F_,_=e.getContextAttributes();let f=null,E=null;const S=[],x=[],O=new ht;let I=null;const F=new Qe;F.viewport=new ge;const z=new Qe;z.viewport=new ge;const T=[F,z],M=new ep;let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let xt=S[et];return xt===void 0&&(xt=new Bo,S[et]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(et){let xt=S[et];return xt===void 0&&(xt=new Bo,S[et]=xt),xt.getGripSpace()},this.getHand=function(et){let xt=S[et];return xt===void 0&&(xt=new Bo,S[et]=xt),xt.getHandSpace()};function X(et){const xt=x.indexOf(et.inputSource);if(xt===-1)return;const mt=S[xt];mt!==void 0&&(mt.update(et.inputSource,et.frame,c||o),mt.dispatchEvent({type:et.type,data:et.inputSource}))}function K(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",$);for(let et=0;et<S.length;et++){const xt=x[et];xt!==null&&(x[et]=null,S[et].disconnect(xt))}D=null,W=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",K),s.addEventListener("inputsourceschange",$),_.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(O),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,pt=null,Ft=null;_.depth&&(Ft=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=_.stencil?hs:is,pt=_.stencil?cs:Ei);const re={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(re),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new bi(d.textureWidth,d.textureHeight,{format:hn,type:Xn,depthTexture:new Eh(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new bi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(et){for(let xt=0;xt<et.removed.length;xt++){const mt=et.removed[xt],pt=x.indexOf(mt);pt>=0&&(x[pt]=null,S[pt].disconnect(mt))}for(let xt=0;xt<et.added.length;xt++){const mt=et.added[xt];let pt=x.indexOf(mt);if(pt===-1){for(let re=0;re<S.length;re++)if(re>=x.length){x.push(mt),pt=re;break}else if(x[re]===null){x[re]=mt,pt=re;break}if(pt===-1)break}const Ft=S[pt];Ft&&Ft.connect(mt)}}const q=new B,tt=new B;function Z(et,xt,mt){q.setFromMatrixPosition(xt.matrixWorld),tt.setFromMatrixPosition(mt.matrixWorld);const pt=q.distanceTo(tt),Ft=xt.projectionMatrix.elements,re=mt.projectionMatrix.elements,kt=Ft[14]/(Ft[10]-1),ae=Ft[14]/(Ft[10]+1),dt=(Ft[9]+1)/Ft[5],lt=(Ft[9]-1)/Ft[5],P=(Ft[8]-1)/Ft[0],Ht=(re[8]+1)/re[0],ft=kt*P,Pt=kt*Ht,Mt=pt/(-P+Ht),Zt=Mt*-P;if(xt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Zt),et.translateZ(Mt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ft[10]===-1)et.projectionMatrix.copy(xt.projectionMatrix),et.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const wt=kt+Mt,R=ae+Mt,b=ft-Zt,Y=Pt+(pt-Zt),nt=dt*ae/R*wt,ct=lt*ae/R*wt;et.projectionMatrix.makePerspective(b,Y,nt,ct,wt,R),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function vt(et,xt){xt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(xt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let xt=et.near,mt=et.far;y.texture!==null&&(y.depthNear>0&&(xt=y.depthNear),y.depthFar>0&&(mt=y.depthFar)),M.near=z.near=F.near=xt,M.far=z.far=F.far=mt,(D!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,W=M.far),F.layers.mask=et.layers.mask|2,z.layers.mask=et.layers.mask|4,M.layers.mask=F.layers.mask|z.layers.mask;const pt=et.parent,Ft=M.cameras;vt(M,pt);for(let re=0;re<Ft.length;re++)vt(Ft[re],pt);Ft.length===2?Z(M,F,z):M.projectionMatrix.copy(F.projectionMatrix),yt(et,M,pt)};function yt(et,xt,mt){mt===null?et.matrix.copy(xt.matrixWorld):(et.matrix.copy(mt.matrixWorld),et.matrix.invert(),et.matrix.multiply(xt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(xt.projectionMatrix),et.projectionMatrixInverse.copy(xt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Vs*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(et){l=et,d!==null&&(d.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let At=null;function zt(et,xt){if(h=xt.getViewerPose(c||o),v=xt,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let pt=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let kt=0;kt<mt.length;kt++){const ae=mt[kt];let dt=null;if(p!==null)dt=p.getViewport(ae);else{const P=u.getViewSubImage(d,ae);dt=P.viewport,kt===0&&(t.setRenderTargetTextures(E,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(E))}let lt=T[kt];lt===void 0&&(lt=new Qe,lt.layers.enable(kt),lt.viewport=new ge,T[kt]=lt),lt.matrix.fromArray(ae.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ae.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(dt.x,dt.y,dt.width,dt.height),kt===0&&(M.matrix.copy(lt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(lt)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const kt=u.getDepthInformation(mt[0]);kt&&kt.isValid&&kt.texture&&y.init(t,kt,s.renderState)}}for(let mt=0;mt<S.length;mt++){const pt=x[mt],Ft=S[mt];pt!==null&&Ft!==void 0&&Ft.update(pt,xt,c||o)}At&&At(et,xt),xt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xt}),v=null}const ne=new Nh;ne.setAnimationLoop(zt),this.setAnimationLoop=function(et){At=et},this.dispose=function(){}}}const _i=new wn,B_=new _e;function z_(i,t){function e(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function n(_,f){f.color.getRGB(_.fogColor.value,_h(i)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function s(_,f,E,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(_,f):f.isMeshToonMaterial?(r(_,f),u(_,f)):f.isMeshPhongMaterial?(r(_,f),h(_,f)):f.isMeshStandardMaterial?(r(_,f),d(_,f),f.isMeshPhysicalMaterial&&p(_,f,x)):f.isMeshMatcapMaterial?(r(_,f),v(_,f)):f.isMeshDepthMaterial?r(_,f):f.isMeshDistanceMaterial?(r(_,f),y(_,f)):f.isMeshNormalMaterial?r(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,E,S):f.isSpriteMaterial?c(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,e(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===Xe&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,e(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===Xe&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,e(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,e(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const E=t.get(f),S=E.envMap,x=E.envMapRotation;S&&(_.envMap.value=S,_i.copy(x),_i.x*=-1,_i.y*=-1,_i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),_.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(_i)),_.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap&&(_.lightMap.value=f.lightMap,_.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,_.lightMapTransform)),f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,E,S){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*E,_.scale.value=S*.5,f.map&&(_.map.value=f.map,e(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,e(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,e(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function h(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function u(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function d(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,_.roughnessMapTransform)),f.envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,E){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xe&&_.clearcoatNormalScale.value.negate())),f.dispersion>0&&(_.dispersion.value=f.dispersion),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,f){f.matcap&&(_.matcap.value=f.matcap)}function y(_,f){const E=t.get(f).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const x=S.program;n.uniformBlockBinding(E,x)}function c(E,S){let x=s[E.id];x===void 0&&(v(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",_));const O=S.program;n.updateUBOMapping(E,O);const I=t.render.frame;r[E.id]!==I&&(d(E),r[E.id]=I)}function h(E){const S=u();E.__bindingPointIndex=S;const x=i.createBuffer(),O=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=s[E.id],x=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let I=0,F=x.length;I<F;I++){const z=Array.isArray(x[I])?x[I]:[x[I]];for(let T=0,M=z.length;T<M;T++){const D=z[T];if(p(D,I,T,O)===!0){const W=D.__offset,X=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let $=0;$<X.length;$++){const q=X[$],tt=y(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,W+K,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,K),K+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,x,O){const I=E.value,F=S+"_"+x;if(O[F]===void 0)return typeof I=="number"||typeof I=="boolean"?O[F]=I:O[F]=I.clone(),!0;{const z=O[F];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return O[F]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function v(E){const S=E.uniforms;let x=0;const O=16;for(let F=0,z=S.length;F<z;F++){const T=Array.isArray(S[F])?S[F]:[S[F]];for(let M=0,D=T.length;M<D;M++){const W=T[M],X=Array.isArray(W.value)?W.value:[W.value];for(let K=0,$=X.length;K<$;K++){const q=X[K],tt=y(q),Z=x%O,vt=Z%tt.boundary,yt=Z+vt;x+=vt,yt!==0&&O-yt<tt.storage&&(x+=O-yt),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=tt.storage}}}const I=x%O;return I>0&&(x+=O-I),E.__size=x,E.__cache={},this}function y(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function _(E){const S=E.target;S.removeEventListener("dispose",_);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class H_{constructor(t={}){const{canvas:e=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),y=new Int32Array(4);let _=null,f=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=si,this.toneMappingExposure=1;const x=this;let O=!1,I=0,F=0,z=null,T=-1,M=null;const D=new ge,W=new ge;let X=null;const K=new te(0);let $=0,q=e.width,tt=e.height,Z=1,vt=null,yt=null;const At=new ge(0,0,q,tt),zt=new ge(0,0,q,tt);let ne=!1;const et=new _l;let xt=!1,mt=!1;this.transmissionResolutionScale=1;const pt=new _e,Ft=new _e,re=new B,kt=new ge,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function lt(){return z===null?Z:1}let P=n;function Ht(g,A){return e.getContext(g,A)}try{const g={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sl}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),P===null){const A="webgl2";if(P=Ht(A,g),P===null)throw Ht(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let ft,Pt,Mt,Zt,wt,R,b,Y,nt,ct,it,Bt,Et,Ct,oe,gt,Dt,Vt,Gt,Lt,Kt,Xt,Jt,H;function J(){ft=new Jg(P),ft.init(),Xt=new I_(P,ft),Pt=new Wg(P,ft,t,Xt),Mt=new L_(P,ft),Pt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Zt=new t0(P),wt=new v_,R=new D_(P,ft,Mt,wt,Pt,Xt,Zt),b=new Yg(x),Y=new Kg(x),nt=new op(P),Jt=new Vg(P,nt),ct=new jg(P,nt,Zt,Jt),it=new n0(P,ct,nt,Zt),Gt=new e0(P,Pt,R),gt=new Xg(wt),Bt=new __(x,b,Y,ft,Pt,Jt,gt),Et=new z_(x,wt),Ct=new y_,oe=new T_(ft),Vt=new Hg(x,b,Y,Mt,it,p,l),Dt=new R_(x,it,Pt),H=new k_(P,Zt,Pt,Mt),Lt=new Gg(P,ft,Zt),Kt=new Qg(P,ft,Zt),Zt.programs=Bt.programs,x.capabilities=Pt,x.extensions=ft,x.properties=wt,x.renderLists=Ct,x.shadowMap=Dt,x.state=Mt,x.info=Zt}J();const Q=new O_(x,P);this.xr=Q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const g=ft.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=ft.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(g){g!==void 0&&(Z=g,this.setSize(q,tt,!1))},this.getSize=function(g){return g.set(q,tt)},this.setSize=function(g,A,C=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=g,tt=A,e.width=Math.floor(g*Z),e.height=Math.floor(A*Z),C===!0&&(e.style.width=g+"px",e.style.height=A+"px"),this.setViewport(0,0,g,A)},this.getDrawingBufferSize=function(g){return g.set(q*Z,tt*Z).floor()},this.setDrawingBufferSize=function(g,A,C){q=g,tt=A,Z=C,e.width=Math.floor(g*C),e.height=Math.floor(A*C),this.setViewport(0,0,g,A)},this.getCurrentViewport=function(g){return g.copy(D)},this.getViewport=function(g){return g.copy(At)},this.setViewport=function(g,A,C,N){g.isVector4?At.set(g.x,g.y,g.z,g.w):At.set(g,A,C,N),Mt.viewport(D.copy(At).multiplyScalar(Z).round())},this.getScissor=function(g){return g.copy(zt)},this.setScissor=function(g,A,C,N){g.isVector4?zt.set(g.x,g.y,g.z,g.w):zt.set(g,A,C,N),Mt.scissor(W.copy(zt).multiplyScalar(Z).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(g){Mt.setScissorTest(ne=g)},this.setOpaqueSort=function(g){vt=g},this.setTransparentSort=function(g){yt=g},this.getClearColor=function(g){return g.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(g=!0,A=!0,C=!0){let N=0;if(g){let L=!1;if(z!==null){const k=z.texture.format;L=k===ul||k===hl||k===cl}if(L){const k=z.texture.type,V=k===Xn||k===Ei||k===Hs||k===cs||k===ol||k===al,G=Vt.getClearColor(),j=Vt.getClearAlpha(),st=G.r,rt=G.g,at=G.b;V?(v[0]=st,v[1]=rt,v[2]=at,v[3]=j,P.clearBufferuiv(P.COLOR,0,v)):(y[0]=st,y[1]=rt,y[2]=at,y[3]=j,P.clearBufferiv(P.COLOR,0,y))}else N|=P.COLOR_BUFFER_BIT}A&&(N|=P.DEPTH_BUFFER_BIT),C&&(N|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Vt.dispose(),Ct.dispose(),oe.dispose(),wt.dispose(),b.dispose(),Y.dispose(),it.dispose(),Jt.dispose(),H.dispose(),Bt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",tr),Q.removeEventListener("sessionend",er),Rn.stop()};function ot(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const g=Zt.autoReset,A=Dt.enabled,C=Dt.autoUpdate,N=Dt.needsUpdate,L=Dt.type;J(),Zt.autoReset=g,Dt.enabled=A,Dt.autoUpdate=C,Dt.needsUpdate=N,Dt.type=L}function Tt(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function jt(g){const A=g.target;A.removeEventListener("dispose",jt),Se(A)}function Se(g){Ue(g),wt.remove(g)}function Ue(g){const A=wt.get(g).programs;A!==void 0&&(A.forEach(function(C){Bt.releaseProgram(C)}),g.isShaderMaterial&&Bt.releaseShaderCache(g))}this.renderBufferDirect=function(g,A,C,N,L,k){A===null&&(A=ae);const V=L.isMesh&&L.matrixWorld.determinant()<0,G=go(g,A,C,N,L);Mt.setMaterial(N,V);let j=C.index,st=1;if(N.wireframe===!0){if(j=ct.getWireframeAttribute(C),j===void 0)return;st=2}const rt=C.drawRange,at=C.attributes.position;let ut=rt.start*st,_t=(rt.start+rt.count)*st;k!==null&&(ut=Math.max(ut,k.start*st),_t=Math.min(_t,(k.start+k.count)*st)),j!==null?(ut=Math.max(ut,0),_t=Math.min(_t,j.count)):at!=null&&(ut=Math.max(ut,0),_t=Math.min(_t,at.count));const Ut=_t-ut;if(Ut<0||Ut===1/0)return;Jt.setup(L,N,G,C,j);let Yt,Wt=Lt;if(j!==null&&(Yt=nt.get(j),Wt=Kt,Wt.setIndex(Yt)),L.isMesh)N.wireframe===!0?(Mt.setLineWidth(N.wireframeLinewidth*lt()),Wt.setMode(P.LINES)):Wt.setMode(P.TRIANGLES);else if(L.isLine){let It=N.linewidth;It===void 0&&(It=1),Mt.setLineWidth(It*lt()),L.isLineSegments?Wt.setMode(P.LINES):L.isLineLoop?Wt.setMode(P.LINE_LOOP):Wt.setMode(P.LINE_STRIP)}else L.isPoints?Wt.setMode(P.POINTS):L.isSprite&&Wt.setMode(P.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Wt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const It=L._multiDrawStarts,Qt=L._multiDrawCounts,Nt=L._multiDrawCount,de=j?nt.get(j).bytesPerElement:1,Ce=wt.get(N).currentProgram.getUniforms();for(let ce=0;ce<Nt;ce++)Ce.setValue(P,"_gl_DrawID",ce),Wt.render(It[ce]/de,Qt[ce])}else if(L.isInstancedMesh)Wt.renderInstances(ut,Ut,L.count);else if(C.isInstancedBufferGeometry){const It=C._maxInstanceCount!==void 0?C._maxInstanceCount:1/0,Qt=Math.min(C.instanceCount,It);Wt.renderInstances(ut,Ut,Qt)}else Wt.render(ut,Ut)};function ue(g,A,C){g.transparent===!0&&g.side===Ge&&g.forceSinglePass===!1?(g.side=Xe,g.needsUpdate=!0,Pi(g,A,C),g.side=oi,g.needsUpdate=!0,Pi(g,A,C),g.side=Ge):Pi(g,A,C)}this.compile=function(g,A,C=null){C===null&&(C=g),f=oe.get(C),f.init(A),S.push(f),C.traverseVisible(function(L){L.isLight&&L.layers.test(A.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),g!==C&&g.traverseVisible(function(L){L.isLight&&L.layers.test(A.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();const N=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const k=L.material;if(k)if(Array.isArray(k))for(let V=0;V<k.length;V++){const G=k[V];ue(G,C,L),N.add(G)}else ue(k,C,L),N.add(k)}),f=S.pop(),N},this.compileAsync=function(g,A,C=null){const N=this.compile(g,A,C);return new Promise(L=>{function k(){if(N.forEach(function(V){wt.get(V).currentProgram.isReady()&&N.delete(V)}),N.size===0){L(g);return}setTimeout(k,10)}ft.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Ze=null;function dn(g){Ze&&Ze(g)}function tr(){Rn.stop()}function er(){Rn.start()}const Rn=new Nh;Rn.setAnimationLoop(dn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(g){Ze=g,Q.setAnimationLoop(g),g===null?Rn.stop():Rn.start()},Q.addEventListener("sessionstart",tr),Q.addEventListener("sessionend",er),this.render=function(g,A){if(A!==void 0&&A.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(A),A=Q.getCamera()),g.isScene===!0&&g.onBeforeRender(x,g,A,z),f=oe.get(g,S.length),f.init(A),S.push(f),Ft.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),et.setFromProjectionMatrix(Ft),mt=this.localClippingEnabled,xt=gt.init(this.clippingPlanes,mt),_=Ct.get(g,E.length),_.init(),E.push(_),Q.enabled===!0&&Q.isPresenting===!0){const k=x.xr.getDepthSensingMesh();k!==null&&_s(k,A,-1/0,x.sortObjects)}_s(g,A,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(vt,yt),dt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,dt&&Vt.addToRenderList(_,g),this.info.render.frame++,xt===!0&&gt.beginShadows();const C=f.state.shadowsArray;Dt.render(C,g,A),xt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=_.opaque,L=_.transmissive;if(f.setupLights(),A.isArrayCamera){const k=A.cameras;if(L.length>0)for(let V=0,G=k.length;V<G;V++){const j=k[V];nr(N,L,g,j)}dt&&Vt.render(g);for(let V=0,G=k.length;V<G;V++){const j=k[V];vs(_,g,j,j.viewport)}}else L.length>0&&nr(N,L,g,A),dt&&Vt.render(g),vs(_,g,A);z!==null&&F===0&&(R.updateMultisampleRenderTarget(z),R.updateRenderTargetMipmap(z)),g.isScene===!0&&g.onAfterRender(x,g,A),Jt.resetDefaultState(),T=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],xt===!0&&gt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function _s(g,A,C,N){if(g.visible===!1)return;if(g.layers.test(A.layers)){if(g.isGroup)C=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(A);else if(g.isLight)f.pushLight(g),g.castShadow&&f.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||et.intersectsSprite(g)){N&&kt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Ft);const V=it.update(g),G=g.material;G.visible&&_.push(g,V,G,C,kt.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||et.intersectsObject(g))){const V=it.update(g),G=g.material;if(N&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),kt.copy(g.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),kt.copy(V.boundingSphere.center)),kt.applyMatrix4(g.matrixWorld).applyMatrix4(Ft)),Array.isArray(G)){const j=V.groups;for(let st=0,rt=j.length;st<rt;st++){const at=j[st],ut=G[at.materialIndex];ut&&ut.visible&&_.push(g,V,ut,C,kt.z,at)}}else G.visible&&_.push(g,V,G,C,kt.z,null)}}const k=g.children;for(let V=0,G=k.length;V<G;V++)_s(k[V],A,C,N)}function vs(g,A,C,N){const L=g.opaque,k=g.transmissive,V=g.transparent;f.setupLightsView(C),xt===!0&&gt.setGlobalState(x.clippingPlanes,C),N&&Mt.viewport(D.copy(N)),L.length>0&&Ri(L,A,C),k.length>0&&Ri(k,A,C),V.length>0&&Ri(V,A,C),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function nr(g,A,C,N){if((C.isScene===!0?C.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[N.id]===void 0&&(f.state.transmissionRenderTarget[N.id]=new bi(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Hn:Xn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const k=f.state.transmissionRenderTarget[N.id],V=N.viewport||D;k.setSize(V.z*x.transmissionResolutionScale,V.w*x.transmissionResolutionScale);const G=x.getRenderTarget();x.setRenderTarget(k),x.getClearColor(K),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),dt&&Vt.render(C);const j=x.toneMapping;x.toneMapping=si;const st=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),f.setupLightsView(N),xt===!0&&gt.setGlobalState(x.clippingPlanes,N),Ri(g,C,N),R.updateMultisampleRenderTarget(k),R.updateRenderTargetMipmap(k),ft.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let at=0,ut=A.length;at<ut;at++){const _t=A[at],Ut=_t.object,Yt=_t.geometry,Wt=_t.material,It=_t.group;if(Wt.side===Ge&&Ut.layers.test(N.layers)){const Qt=Wt.side;Wt.side=Xe,Wt.needsUpdate=!0,ir(Ut,C,N,Yt,Wt,It),Wt.side=Qt,Wt.needsUpdate=!0,rt=!0}}rt===!0&&(R.updateMultisampleRenderTarget(k),R.updateRenderTargetMipmap(k))}x.setRenderTarget(G),x.setClearColor(K,$),st!==void 0&&(N.viewport=st),x.toneMapping=j}function Ri(g,A,C){const N=A.isScene===!0?A.overrideMaterial:null;for(let L=0,k=g.length;L<k;L++){const V=g[L],G=V.object,j=V.geometry,st=N===null?V.material:N,rt=V.group;G.layers.test(C.layers)&&ir(G,A,C,j,st,rt)}}function ir(g,A,C,N,L,k){g.onBeforeRender(x,A,C,N,L,k),g.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(x,A,C,N,g,k),L.transparent===!0&&L.side===Ge&&L.forceSinglePass===!1?(L.side=Xe,L.needsUpdate=!0,x.renderBufferDirect(C,A,N,L,g,k),L.side=oi,L.needsUpdate=!0,x.renderBufferDirect(C,A,N,L,g,k),L.side=Ge):x.renderBufferDirect(C,A,N,L,g,k),g.onAfterRender(x,A,C,N,L,k)}function Pi(g,A,C){A.isScene!==!0&&(A=ae);const N=wt.get(g),L=f.state.lights,k=f.state.shadowsArray,V=L.state.version,G=Bt.getParameters(g,L.state,k,A,C),j=Bt.getProgramCacheKey(G);let st=N.programs;N.environment=g.isMeshStandardMaterial?A.environment:null,N.fog=A.fog,N.envMap=(g.isMeshStandardMaterial?Y:b).get(g.envMap||N.environment),N.envMapRotation=N.environment!==null&&g.envMap===null?A.environmentRotation:g.envMapRotation,st===void 0&&(g.addEventListener("dispose",jt),st=new Map,N.programs=st);let rt=st.get(j);if(rt!==void 0){if(N.currentProgram===rt&&N.lightsStateVersion===V)return ys(g,G),rt}else G.uniforms=Bt.getUniforms(g),g.onBeforeCompile(G,x),rt=Bt.acquireProgram(G,j),st.set(j,rt),N.uniforms=G.uniforms;const at=N.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(at.clippingPlanes=gt.uniform),ys(g,G),N.needsLights=Yn(g),N.lightsStateVersion=V,N.needsLights&&(at.ambientLightColor.value=L.state.ambient,at.lightProbe.value=L.state.probe,at.directionalLights.value=L.state.directional,at.directionalLightShadows.value=L.state.directionalShadow,at.spotLights.value=L.state.spot,at.spotLightShadows.value=L.state.spotShadow,at.rectAreaLights.value=L.state.rectArea,at.ltc_1.value=L.state.rectAreaLTC1,at.ltc_2.value=L.state.rectAreaLTC2,at.pointLights.value=L.state.point,at.pointLightShadows.value=L.state.pointShadow,at.hemisphereLights.value=L.state.hemi,at.directionalShadowMap.value=L.state.directionalShadowMap,at.directionalShadowMatrix.value=L.state.directionalShadowMatrix,at.spotShadowMap.value=L.state.spotShadowMap,at.spotLightMatrix.value=L.state.spotLightMatrix,at.spotLightMap.value=L.state.spotLightMap,at.pointShadowMap.value=L.state.pointShadowMap,at.pointShadowMatrix.value=L.state.pointShadowMatrix),N.currentProgram=rt,N.uniformsList=null,rt}function xs(g){if(g.uniformsList===null){const A=g.currentProgram.getUniforms();g.uniformsList=Yr.seqWithValue(A.seq,g.uniforms)}return g.uniformsList}function ys(g,A){const C=wt.get(g);C.outputColorSpace=A.outputColorSpace,C.batching=A.batching,C.batchingColor=A.batchingColor,C.instancing=A.instancing,C.instancingColor=A.instancingColor,C.instancingMorph=A.instancingMorph,C.skinning=A.skinning,C.morphTargets=A.morphTargets,C.morphNormals=A.morphNormals,C.morphColors=A.morphColors,C.morphTargetsCount=A.morphTargetsCount,C.numClippingPlanes=A.numClippingPlanes,C.numIntersection=A.numClipIntersection,C.vertexAlphas=A.vertexAlphas,C.vertexTangents=A.vertexTangents,C.toneMapping=A.toneMapping}function go(g,A,C,N,L){A.isScene!==!0&&(A=ae),R.resetTextureUnits();const k=A.fog,V=N.isMeshStandardMaterial?A.environment:null,G=z===null?x.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ai,j=(N.isMeshStandardMaterial?Y:b).get(N.envMap||V),st=N.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,rt=!!C.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),at=!!C.morphAttributes.position,ut=!!C.morphAttributes.normal,_t=!!C.morphAttributes.color;let Ut=si;N.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ut=x.toneMapping);const Yt=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Wt=Yt!==void 0?Yt.length:0,It=wt.get(N),Qt=f.state.lights;if(xt===!0&&(mt===!0||g!==M)){const xe=g===M&&N.id===T;gt.setState(N,g,xe)}let Nt=!1;N.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Qt.state.version||It.outputColorSpace!==G||L.isBatchedMesh&&It.batching===!1||!L.isBatchedMesh&&It.batching===!0||L.isBatchedMesh&&It.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&It.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&It.instancing===!1||!L.isInstancedMesh&&It.instancing===!0||L.isSkinnedMesh&&It.skinning===!1||!L.isSkinnedMesh&&It.skinning===!0||L.isInstancedMesh&&It.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&It.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&It.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&It.instancingMorph===!1&&L.morphTexture!==null||It.envMap!==j||N.fog===!0&&It.fog!==k||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==gt.numPlanes||It.numIntersection!==gt.numIntersection)||It.vertexAlphas!==st||It.vertexTangents!==rt||It.morphTargets!==at||It.morphNormals!==ut||It.morphColors!==_t||It.toneMapping!==Ut||It.morphTargetsCount!==Wt)&&(Nt=!0):(Nt=!0,It.__version=N.version);let de=It.currentProgram;Nt===!0&&(de=Pi(N,A,L));let Ce=!1,ce=!1,le=!1;const qt=de.getUniforms(),we=It.uniforms;if(Mt.useProgram(de.program)&&(Ce=!0,ce=!0,le=!0),N.id!==T&&(T=N.id,ce=!0),Ce||M!==g){Mt.buffers.depth.getReversed()?(pt.copy(g.projectionMatrix),wd(pt),Td(pt),qt.setValue(P,"projectionMatrix",pt)):qt.setValue(P,"projectionMatrix",g.projectionMatrix),qt.setValue(P,"viewMatrix",g.matrixWorldInverse);const Re=qt.map.cameraPosition;Re!==void 0&&Re.setValue(P,re.setFromMatrixPosition(g.matrixWorld)),Pt.logarithmicDepthBuffer&&qt.setValue(P,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&qt.setValue(P,"isOrthographic",g.isOrthographicCamera===!0),M!==g&&(M=g,ce=!0,le=!0)}if(L.isSkinnedMesh){qt.setOptional(P,L,"bindMatrix"),qt.setOptional(P,L,"bindMatrixInverse");const xe=L.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),qt.setValue(P,"boneTexture",xe.boneTexture,R))}L.isBatchedMesh&&(qt.setOptional(P,L,"batchingTexture"),qt.setValue(P,"batchingTexture",L._matricesTexture,R),qt.setOptional(P,L,"batchingIdTexture"),qt.setValue(P,"batchingIdTexture",L._indirectTexture,R),qt.setOptional(P,L,"batchingColorTexture"),L._colorsTexture!==null&&qt.setValue(P,"batchingColorTexture",L._colorsTexture,R));const Ne=C.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&Gt.update(L,C,de),(ce||It.receiveShadow!==L.receiveShadow)&&(It.receiveShadow=L.receiveShadow,qt.setValue(P,"receiveShadow",L.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(we.envMap.value=j,we.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&A.environment!==null&&(we.envMapIntensity.value=A.environmentIntensity),ce&&(qt.setValue(P,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Pn(we,le),k&&N.fog===!0&&Et.refreshFogUniforms(we,k),Et.refreshMaterialUniforms(we,N,Z,tt,f.state.transmissionRenderTarget[g.id]),Yr.upload(P,xs(It),we,R)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Yr.upload(P,xs(It),we,R),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&qt.setValue(P,"center",L.center),qt.setValue(P,"modelViewMatrix",L.modelViewMatrix),qt.setValue(P,"normalMatrix",L.normalMatrix),qt.setValue(P,"modelMatrix",L.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const xe=N.uniformsGroups;for(let Re=0,_o=xe.length;Re<_o;Re++){const ui=xe[Re];H.update(ui,de),H.bind(ui,de)}}return de}function Pn(g,A){g.ambientLightColor.needsUpdate=A,g.lightProbe.needsUpdate=A,g.directionalLights.needsUpdate=A,g.directionalLightShadows.needsUpdate=A,g.pointLights.needsUpdate=A,g.pointLightShadows.needsUpdate=A,g.spotLights.needsUpdate=A,g.spotLightShadows.needsUpdate=A,g.rectAreaLights.needsUpdate=A,g.hemisphereLights.needsUpdate=A}function Yn(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(g,A,C){wt.get(g.texture).__webglTexture=A,wt.get(g.depthTexture).__webglTexture=C;const N=wt.get(g);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=C===void 0,N.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,A){const C=wt.get(g);C.__webglFramebuffer=A,C.__useDefaultFramebuffer=A===void 0};const m=P.createFramebuffer();this.setRenderTarget=function(g,A=0,C=0){z=g,I=A,F=C;let N=!0,L=null,k=!1,V=!1;if(g){const j=wt.get(g);if(j.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(P.FRAMEBUFFER,null),N=!1;else if(j.__webglFramebuffer===void 0)R.setupRenderTarget(g);else if(j.__hasExternalTextures)R.rebindTextures(g,wt.get(g.texture).__webglTexture,wt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const at=g.depthTexture;if(j.__boundDepthTexture!==at){if(at!==null&&wt.has(at)&&(g.width!==at.image.width||g.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(g)}}const st=g.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(V=!0);const rt=wt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(rt[A])?L=rt[A][C]:L=rt[A],k=!0):g.samples>0&&R.useMultisampledRTT(g)===!1?L=wt.get(g).__webglMultisampledFramebuffer:Array.isArray(rt)?L=rt[C]:L=rt,D.copy(g.viewport),W.copy(g.scissor),X=g.scissorTest}else D.copy(At).multiplyScalar(Z).floor(),W.copy(zt).multiplyScalar(Z).floor(),X=ne;if(C!==0&&(L=m),Mt.bindFramebuffer(P.FRAMEBUFFER,L)&&N&&Mt.drawBuffers(g,L),Mt.viewport(D),Mt.scissor(W),Mt.setScissorTest(X),k){const j=wt.get(g.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+A,j.__webglTexture,C)}else if(V){const j=wt.get(g.texture),st=A;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,j.__webglTexture,C,st)}else if(g!==null&&C!==0){const j=wt.get(g.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,j.__webglTexture,C)}T=-1},this.readRenderTargetPixels=function(g,A,C,N,L,k,V){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let G=wt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&V!==void 0&&(G=G[V]),G){Mt.bindFramebuffer(P.FRAMEBUFFER,G);try{const j=g.texture,st=j.format,rt=j.type;if(!Pt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=g.width-N&&C>=0&&C<=g.height-L&&P.readPixels(A,C,N,L,Xt.convert(st),Xt.convert(rt),k)}finally{const j=z!==null?wt.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(g,A,C,N,L,k,V){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let G=wt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&V!==void 0&&(G=G[V]),G){const j=g.texture,st=j.format,rt=j.type;if(!Pt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(A>=0&&A<=g.width-N&&C>=0&&C<=g.height-L){Mt.bindFramebuffer(P.FRAMEBUFFER,G);const at=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.bufferData(P.PIXEL_PACK_BUFFER,k.byteLength,P.STREAM_READ),P.readPixels(A,C,N,L,Xt.convert(st),Xt.convert(rt),0);const ut=z!==null?wt.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,ut);const _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await bd(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,at),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,k),P.deleteBuffer(at),P.deleteSync(_t),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,A=null,C=0){g.isTexture!==!0&&(xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),A=arguments[0]||null,g=arguments[1]);const N=Math.pow(2,-C),L=Math.floor(g.image.width*N),k=Math.floor(g.image.height*N),V=A!==null?A.x:0,G=A!==null?A.y:0;R.setTexture2D(g,0),P.copyTexSubImage2D(P.TEXTURE_2D,C,0,0,V,G,L,k),Mt.unbindTexture()};const w=P.createFramebuffer(),U=P.createFramebuffer();this.copyTextureToTexture=function(g,A,C=null,N=null,L=0,k=null){g.isTexture!==!0&&(xi("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,g=arguments[1],A=arguments[2],k=arguments[3]||0,C=null),k===null&&(L!==0?(xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),k=L,L=0):k=0);let V,G,j,st,rt,at,ut,_t,Ut;const Yt=g.isCompressedTexture?g.mipmaps[k]:g.image;if(C!==null)V=C.max.x-C.min.x,G=C.max.y-C.min.y,j=C.isBox3?C.max.z-C.min.z:1,st=C.min.x,rt=C.min.y,at=C.isBox3?C.min.z:0;else{const Ne=Math.pow(2,-L);V=Math.floor(Yt.width*Ne),G=Math.floor(Yt.height*Ne),g.isDataArrayTexture?j=Yt.depth:g.isData3DTexture?j=Math.floor(Yt.depth*Ne):j=1,st=0,rt=0,at=0}N!==null?(ut=N.x,_t=N.y,Ut=N.z):(ut=0,_t=0,Ut=0);const Wt=Xt.convert(A.format),It=Xt.convert(A.type);let Qt;A.isData3DTexture?(R.setTexture3D(A,0),Qt=P.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(R.setTexture2DArray(A,0),Qt=P.TEXTURE_2D_ARRAY):(R.setTexture2D(A,0),Qt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,A.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,A.unpackAlignment);const Nt=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ce=P.getParameter(P.UNPACK_SKIP_PIXELS),ce=P.getParameter(P.UNPACK_SKIP_ROWS),le=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Yt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,st),P.pixelStorei(P.UNPACK_SKIP_ROWS,rt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,at);const qt=g.isDataArrayTexture||g.isData3DTexture,we=A.isDataArrayTexture||A.isData3DTexture;if(g.isDepthTexture){const Ne=wt.get(g),xe=wt.get(A),Re=wt.get(Ne.__renderTarget),_o=wt.get(xe.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Re.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,_o.__webglFramebuffer);for(let ui=0;ui<j;ui++)qt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wt.get(g).__webglTexture,L,at+ui),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,wt.get(A).__webglTexture,k,Ut+ui)),P.blitFramebuffer(st,rt,V,G,ut,_t,V,G,P.DEPTH_BUFFER_BIT,P.NEAREST);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(L!==0||g.isRenderTargetTexture||wt.has(g)){const Ne=wt.get(g),xe=wt.get(A);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,w),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,U);for(let Re=0;Re<j;Re++)qt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ne.__webglTexture,L,at+Re):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ne.__webglTexture,L),we?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,k,Ut+Re):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,k),L!==0?P.blitFramebuffer(st,rt,V,G,ut,_t,V,G,P.COLOR_BUFFER_BIT,P.NEAREST):we?P.copyTexSubImage3D(Qt,k,ut,_t,Ut+Re,st,rt,V,G):P.copyTexSubImage2D(Qt,k,ut,_t,st,rt,V,G);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else we?g.isDataTexture||g.isData3DTexture?P.texSubImage3D(Qt,k,ut,_t,Ut,V,G,j,Wt,It,Yt.data):A.isCompressedArrayTexture?P.compressedTexSubImage3D(Qt,k,ut,_t,Ut,V,G,j,Wt,Yt.data):P.texSubImage3D(Qt,k,ut,_t,Ut,V,G,j,Wt,It,Yt):g.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,ut,_t,V,G,Wt,It,Yt.data):g.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,ut,_t,Yt.width,Yt.height,Wt,Yt.data):P.texSubImage2D(P.TEXTURE_2D,k,ut,_t,V,G,Wt,It,Yt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Nt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,le),k===0&&A.generateMipmaps&&P.generateMipmap(Qt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(g,A,C=null,N=null,L=0){return g.isTexture!==!0&&(xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),C=arguments[0]||null,N=arguments[1]||null,g=arguments[2],A=arguments[3],L=arguments[4]||0),xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,A,C,N,L)},this.initRenderTarget=function(g){wt.get(g).__webglFramebuffer===void 0&&R.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?R.setTextureCube(g,0):g.isData3DTexture?R.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?R.setTexture2DArray(g,0):R.setTexture2D(g,0),Mt.unbindTexture()},this.resetState=function(){I=0,F=0,z=null,Mt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const zc={type:"change"},bl={type:"start"},kh={type:"end"},Ir=new ro,kc=new ei,V_=Math.cos(70*St.DEG2RAD),Pe=new B,Ye=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jo=1e-6;class G_ extends sp{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new wi,this._lastTargetPosition=new B,this._quat=new wi().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fc,this._sphericalDelta=new fc,this._scale=1,this._panOffset=new B,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new B,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X_.bind(this),this._onPointerDown=W_.bind(this),this._onPointerUp=Y_.bind(this),this._onContextMenu=Q_.bind(this),this._onMouseWheel=Z_.bind(this),this._onKeyDown=K_.bind(this),this._onTouchStart=J_.bind(this),this._onTouchMove=j_.bind(this),this._onMouseDown=q_.bind(this),this._onMouseMove=$_.bind(this),this._interceptControlDown=tv.bind(this),this._interceptControlUp=ev.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zc),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),s<-Math.PI?s+=Ye:s>Math.PI&&(s-=Ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ir.origin.copy(this.object.position),Ir.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ir.direction))<V_?this.object.lookAt(this.target):(kc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ir.intersectPlane(kc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jo||this._lastTargetPosition.distanceToSquared(this.target)>jo?(this.dispatchEvent(zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function W_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function X_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Y_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kh),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function q_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=me.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bl)}function $_(i){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Z_(i){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(i.preventDefault(),this.dispatchEvent(bl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(kh))}function K_(i){this.enabled!==!1&&this._handleKeyDown(i)}function J_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=me.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=me.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bl)}function j_(i){switch(this._trackPointer(i),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=me.NONE}}function Q_(i){this.enabled!==!1&&i.preventDefault()}function tv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ev(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var an=Uint8Array,ts=Uint16Array,nv=Int32Array,Hh=new an([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Vh=new an([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),iv=new an([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Gh=function(i,t){for(var e=new ts(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new nv(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},Wh=Gh(Hh,2),Xh=Wh.b,sv=Wh.r;Xh[28]=258,sv[258]=28;var rv=Gh(Vh,0),ov=rv.b,Ja=new ts(32768);for(var Me=0;Me<32768;++Me){var Qn=(Me&43690)>>1|(Me&21845)<<1;Qn=(Qn&52428)>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>4|(Qn&3855)<<4,Ja[Me]=((Qn&65280)>>8|(Qn&255)<<8)>>1}var Bs=(function(i,t,e){for(var n=i.length,s=0,r=new ts(t);s<n;++s)i[s]&&++r[i[s]-1];var o=new ts(t);for(s=1;s<t;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(e){a=new ts(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=t-i[s],u=o[i[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Ja[u]>>l]=c}else for(a=new ts(n),s=0;s<n;++s)i[s]&&(a[s]=Ja[o[i[s]-1]++]>>15-i[s]);return a}),js=new an(288);for(var Me=0;Me<144;++Me)js[Me]=8;for(var Me=144;Me<256;++Me)js[Me]=9;for(var Me=256;Me<280;++Me)js[Me]=7;for(var Me=280;Me<288;++Me)js[Me]=8;var Yh=new an(32);for(var Me=0;Me<32;++Me)Yh[Me]=5;var av=Bs(js,9,1),lv=Bs(Yh,5,1),Qo=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},gn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},ta=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},cv=function(i){return(i+7)/8|0},hv=function(i,t,e){return(e==null||e>i.length)&&(e=i.length),new an(i.subarray(t,e))},uv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_n=function(i,t,e){var n=new Error(t||uv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,_n),!e)throw n;return n},dv=function(i,t,e,n){var s=i.length,r=0;if(!s||t.f&&!t.l)return e||new an(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new an(s*3));var c=function(ae){var dt=e.length;if(ae>dt){var lt=new an(Math.max(dt*2,ae));lt.set(e),e=lt}},h=t.f||0,u=t.p||0,d=t.b||0,p=t.l,v=t.d,y=t.m,_=t.n,f=s*8;do{if(!p){h=gn(i,u,1);var E=gn(i,u+1,3);if(u+=3,E)if(E==1)p=av,v=lv,y=9,_=5;else if(E==2){var I=gn(i,u,31)+257,F=gn(i,u+10,15)+4,z=I+gn(i,u+5,31)+1;u+=14;for(var T=new an(z),M=new an(19),D=0;D<F;++D)M[iv[D]]=gn(i,u+D*3,7);u+=F*3;for(var W=Qo(M),X=(1<<W)-1,K=Bs(M,W,1),D=0;D<z;){var $=K[gn(i,u,X)];u+=$&15;var S=$>>4;if(S<16)T[D++]=S;else{var q=0,tt=0;for(S==16?(tt=3+gn(i,u,3),u+=2,q=T[D-1]):S==17?(tt=3+gn(i,u,7),u+=3):S==18&&(tt=11+gn(i,u,127),u+=7);tt--;)T[D++]=q}}var Z=T.subarray(0,I),vt=T.subarray(I);y=Qo(Z),_=Qo(vt),p=Bs(Z,y,1),v=Bs(vt,_,1)}else _n(1);else{var S=cv(u)+4,x=i[S-4]|i[S-3]<<8,O=S+x;if(O>s){l&&_n(0);break}a&&c(d+x),e.set(i.subarray(S,O),d),t.b=d+=x,t.p=u=O*8,t.f=h;continue}if(u>f){l&&_n(0);break}}a&&c(d+131072);for(var yt=(1<<y)-1,At=(1<<_)-1,zt=u;;zt=u){var q=p[ta(i,u)&yt],ne=q>>4;if(u+=q&15,u>f){l&&_n(0);break}if(q||_n(2),ne<256)e[d++]=ne;else if(ne==256){zt=u,p=null;break}else{var et=ne-254;if(ne>264){var D=ne-257,xt=Hh[D];et=gn(i,u,(1<<xt)-1)+Xh[D],u+=xt}var mt=v[ta(i,u)&At],pt=mt>>4;mt||_n(3),u+=mt&15;var vt=ov[pt];if(pt>3){var xt=Vh[pt];vt+=ta(i,u)&(1<<xt)-1,u+=xt}if(u>f){l&&_n(0);break}a&&c(d+131072);var Ft=d+et;if(d<vt){var re=r-vt,kt=Math.min(vt,Ft);for(re+d<0&&_n(3);d<kt;++d)e[d]=n[re+d]}for(;d<Ft;++d)e[d]=e[d-vt]}}t.l=p,t.p=zt,t.b=d,t.f=h,p&&(h=1,t.m=y,t.d=v,t.n=_)}while(!h);return d!=e.length&&o?hv(e,0,d):e.subarray(0,d)},fv=new an(0),pv=function(i,t){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&_n(6,"invalid zlib data"),(i[1]>>5&1)==1&&_n(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Ur(i,t){return dv(i.subarray(pv(i),-4),{i:2},t,t)}var mv=typeof TextDecoder<"u"&&new TextDecoder,gv=0;try{mv.decode(fv,{stream:!0}),gv=1}catch{}class _v extends Zf{constructor(t){super(t),this.type=Hn}parse(t){const T=Math.pow(2.7182818,2.2);function M(m,w){let U=0;for(let A=0;A<65536;++A)(A==0||m[A>>3]&1<<(A&7))&&(w[U++]=A);const g=U-1;for(;U<65536;)w[U++]=0;return g}function D(m){for(let w=0;w<16384;w++)m[w]={},m[w].len=0,m[w].lit=0,m[w].p=null}const W={l:0,c:0,lc:0};function X(m,w,U,g,A){for(;U<m;)w=w<<8|Lt(g,A),U+=8;U-=m,W.l=w>>U&(1<<m)-1,W.c=w,W.lc=U}const K=new Array(59);function $(m){for(let U=0;U<=58;++U)K[U]=0;for(let U=0;U<65537;++U)K[m[U]]+=1;let w=0;for(let U=58;U>0;--U){const g=w+K[U]>>1;K[U]=w,w=g}for(let U=0;U<65537;++U){const g=m[U];g>0&&(m[U]=g|K[g]++<<6)}}function q(m,w,U,g,A,C){const N=w;let L=0,k=0;for(;g<=A;g++){if(N.value-w.value>U)return!1;X(6,L,k,m,N);const V=W.l;if(L=W.c,k=W.lc,C[g]=V,V==63){if(N.value-w.value>U)throw new Error("Something wrong with hufUnpackEncTable");X(8,L,k,m,N);let G=W.l+6;if(L=W.c,k=W.lc,g+G>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)C[g++]=0;g--}else if(V>=59){let G=V-59+2;if(g+G>A+1)throw new Error("Something wrong with hufUnpackEncTable");for(;G--;)C[g++]=0;g--}}$(C)}function tt(m){return m&63}function Z(m){return m>>6}function vt(m,w,U,g){for(;w<=U;w++){const A=Z(m[w]),C=tt(m[w]);if(A>>C)throw new Error("Invalid table entry");if(C>14){const N=g[A>>C-14];if(N.len)throw new Error("Invalid table entry");if(N.lit++,N.p){const L=N.p;N.p=new Array(N.lit);for(let k=0;k<N.lit-1;++k)N.p[k]=L[k]}else N.p=new Array(1);N.p[N.lit-1]=w}else if(C){let N=0;for(let L=1<<14-C;L>0;L--){const k=g[(A<<14-C)+N];if(k.len||k.p)throw new Error("Invalid table entry");k.len=C,k.lit=w,N++}}}return!0}const yt={c:0,lc:0};function At(m,w,U,g){m=m<<8|Lt(U,g),w+=8,yt.c=m,yt.lc=w}const zt={c:0,lc:0};function ne(m,w,U,g,A,C,N,L,k){if(m==w){g<8&&(At(U,g,A,C),U=yt.c,g=yt.lc),g-=8;let V=U>>g;if(V=new Uint8Array([V])[0],L.value+V>k)return!1;const G=N[L.value-1];for(;V-- >0;)N[L.value++]=G}else if(L.value<k)N[L.value++]=m;else return!1;zt.c=U,zt.lc=g}function et(m){return m&65535}function xt(m){const w=et(m);return w>32767?w-65536:w}const mt={a:0,b:0};function pt(m,w){const U=xt(m),A=xt(w),C=U+(A&1)+(A>>1),N=C,L=C-A;mt.a=N,mt.b=L}function Ft(m,w){const U=et(m),g=et(w),A=U-(g>>1)&65535,C=g+A-32768&65535;mt.a=C,mt.b=A}function re(m,w,U,g,A,C,N){const L=N<16384,k=U>A?A:U;let V=1,G,j;for(;V<=k;)V<<=1;for(V>>=1,G=V,V>>=1;V>=1;){j=0;const st=j+C*(A-G),rt=C*V,at=C*G,ut=g*V,_t=g*G;let Ut,Yt,Wt,It;for(;j<=st;j+=at){let Qt=j;const Nt=j+g*(U-G);for(;Qt<=Nt;Qt+=_t){const de=Qt+ut,Ce=Qt+rt,ce=Ce+ut;L?(pt(m[Qt+w],m[Ce+w]),Ut=mt.a,Wt=mt.b,pt(m[de+w],m[ce+w]),Yt=mt.a,It=mt.b,pt(Ut,Yt),m[Qt+w]=mt.a,m[de+w]=mt.b,pt(Wt,It),m[Ce+w]=mt.a,m[ce+w]=mt.b):(Ft(m[Qt+w],m[Ce+w]),Ut=mt.a,Wt=mt.b,Ft(m[de+w],m[ce+w]),Yt=mt.a,It=mt.b,Ft(Ut,Yt),m[Qt+w]=mt.a,m[de+w]=mt.b,Ft(Wt,It),m[Ce+w]=mt.a,m[ce+w]=mt.b)}if(U&V){const de=Qt+rt;L?pt(m[Qt+w],m[de+w]):Ft(m[Qt+w],m[de+w]),Ut=mt.a,m[de+w]=mt.b,m[Qt+w]=Ut}}if(A&V){let Qt=j;const Nt=j+g*(U-G);for(;Qt<=Nt;Qt+=_t){const de=Qt+ut;L?pt(m[Qt+w],m[de+w]):Ft(m[Qt+w],m[de+w]),Ut=mt.a,m[de+w]=mt.b,m[Qt+w]=Ut}}G=V,V>>=1}return j}function kt(m,w,U,g,A,C,N,L,k){let V=0,G=0;const j=N,st=Math.trunc(g.value+(A+7)/8);for(;g.value<st;)for(At(V,G,U,g),V=yt.c,G=yt.lc;G>=14;){const at=V>>G-14&16383,ut=w[at];if(ut.len)G-=ut.len,ne(ut.lit,C,V,G,U,g,L,k,j),V=zt.c,G=zt.lc;else{if(!ut.p)throw new Error("hufDecode issues");let _t;for(_t=0;_t<ut.lit;_t++){const Ut=tt(m[ut.p[_t]]);for(;G<Ut&&g.value<st;)At(V,G,U,g),V=yt.c,G=yt.lc;if(G>=Ut&&Z(m[ut.p[_t]])==(V>>G-Ut&(1<<Ut)-1)){G-=Ut,ne(ut.p[_t],C,V,G,U,g,L,k,j),V=zt.c,G=zt.lc;break}}if(_t==ut.lit)throw new Error("hufDecode issues")}}const rt=8-A&7;for(V>>=rt,G-=rt;G>0;){const at=w[V<<14-G&16383];if(at.len)G-=at.len,ne(at.lit,C,V,G,U,g,L,k,j),V=zt.c,G=zt.lc;else throw new Error("hufDecode issues")}return!0}function ae(m,w,U,g,A,C){const N={value:0},L=U.value,k=Gt(w,U),V=Gt(w,U);U.value+=4;const G=Gt(w,U);if(U.value+=4,k<0||k>=65537||V<0||V>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const j=new Array(65537),st=new Array(16384);D(st);const rt=g-(U.value-L);if(q(m,U,rt,k,V,j),G>8*(g-(U.value-L)))throw new Error("Something wrong with hufUncompress");vt(j,k,V,st),kt(j,st,m,U,G,V,C,A,N)}function dt(m,w,U){for(let g=0;g<U;++g)w[g]=m[w[g]]}function lt(m){for(let w=1;w<m.length;w++){const U=m[w-1]+m[w]-128;m[w]=U}}function P(m,w){let U=0,g=Math.floor((m.length+1)/2),A=0;const C=m.length-1;for(;!(A>C||(w[A++]=m[U++],A>C));)w[A++]=m[g++]}function Ht(m){let w=m.byteLength;const U=new Array;let g=0;const A=new DataView(m);for(;w>0;){const C=A.getInt8(g++);if(C<0){const N=-C;w-=N+1;for(let L=0;L<N;L++)U.push(A.getUint8(g++))}else{const N=C;w-=2;const L=A.getUint8(g++);for(let k=0;k<N+1;k++)U.push(L)}}return U}function ft(m,w,U,g,A,C){let N=new DataView(C.buffer);const L=U[m.idx[0]].width,k=U[m.idx[0]].height,V=3,G=Math.floor(L/8),j=Math.ceil(L/8),st=Math.ceil(k/8),rt=L-(j-1)*8,at=k-(st-1)*8,ut={value:0},_t=new Array(V),Ut=new Array(V),Yt=new Array(V),Wt=new Array(V),It=new Array(V);for(let Nt=0;Nt<V;++Nt)It[Nt]=w[m.idx[Nt]],_t[Nt]=Nt<1?0:_t[Nt-1]+j*st,Ut[Nt]=new Float32Array(64),Yt[Nt]=new Uint16Array(64),Wt[Nt]=new Uint16Array(j*64);for(let Nt=0;Nt<st;++Nt){let de=8;Nt==st-1&&(de=at);let Ce=8;for(let le=0;le<j;++le){le==j-1&&(Ce=rt);for(let qt=0;qt<V;++qt)Yt[qt].fill(0),Yt[qt][0]=A[_t[qt]++],Pt(ut,g,Yt[qt]),Mt(Yt[qt],Ut[qt]),Zt(Ut[qt]);wt(Ut);for(let qt=0;qt<V;++qt)R(Ut[qt],Wt[qt],le*64)}let ce=0;for(let le=0;le<V;++le){const qt=U[m.idx[le]].type;for(let we=8*Nt;we<8*Nt+de;++we){ce=It[le][we];for(let Ne=0;Ne<G;++Ne){const xe=Ne*64+(we&7)*8;N.setUint16(ce+0*qt,Wt[le][xe+0],!0),N.setUint16(ce+2*qt,Wt[le][xe+1],!0),N.setUint16(ce+4*qt,Wt[le][xe+2],!0),N.setUint16(ce+6*qt,Wt[le][xe+3],!0),N.setUint16(ce+8*qt,Wt[le][xe+4],!0),N.setUint16(ce+10*qt,Wt[le][xe+5],!0),N.setUint16(ce+12*qt,Wt[le][xe+6],!0),N.setUint16(ce+14*qt,Wt[le][xe+7],!0),ce+=16*qt}}if(G!=j)for(let we=8*Nt;we<8*Nt+de;++we){const Ne=It[le][we]+8*G*2*qt,xe=G*64+(we&7)*8;for(let Re=0;Re<Ce;++Re)N.setUint16(Ne+Re*2*qt,Wt[le][xe+Re],!0)}}}const Qt=new Uint16Array(L);N=new DataView(C.buffer);for(let Nt=0;Nt<V;++Nt){U[m.idx[Nt]].decoded=!0;const de=U[m.idx[Nt]].type;if(U[Nt].type==2)for(let Ce=0;Ce<k;++Ce){const ce=It[Nt][Ce];for(let le=0;le<L;++le)Qt[le]=N.getUint16(ce+le*2*de,!0);for(let le=0;le<L;++le)N.setFloat32(ce+le*2*de,J(Qt[le]),!0)}}}function Pt(m,w,U){let g,A=1;for(;A<64;)g=w[m.value],g==65280?A=64:g>>8==255?A+=g&255:(U[A]=g,A++),m.value++}function Mt(m,w){w[0]=J(m[0]),w[1]=J(m[1]),w[2]=J(m[5]),w[3]=J(m[6]),w[4]=J(m[14]),w[5]=J(m[15]),w[6]=J(m[27]),w[7]=J(m[28]),w[8]=J(m[2]),w[9]=J(m[4]),w[10]=J(m[7]),w[11]=J(m[13]),w[12]=J(m[16]),w[13]=J(m[26]),w[14]=J(m[29]),w[15]=J(m[42]),w[16]=J(m[3]),w[17]=J(m[8]),w[18]=J(m[12]),w[19]=J(m[17]),w[20]=J(m[25]),w[21]=J(m[30]),w[22]=J(m[41]),w[23]=J(m[43]),w[24]=J(m[9]),w[25]=J(m[11]),w[26]=J(m[18]),w[27]=J(m[24]),w[28]=J(m[31]),w[29]=J(m[40]),w[30]=J(m[44]),w[31]=J(m[53]),w[32]=J(m[10]),w[33]=J(m[19]),w[34]=J(m[23]),w[35]=J(m[32]),w[36]=J(m[39]),w[37]=J(m[45]),w[38]=J(m[52]),w[39]=J(m[54]),w[40]=J(m[20]),w[41]=J(m[22]),w[42]=J(m[33]),w[43]=J(m[38]),w[44]=J(m[46]),w[45]=J(m[51]),w[46]=J(m[55]),w[47]=J(m[60]),w[48]=J(m[21]),w[49]=J(m[34]),w[50]=J(m[37]),w[51]=J(m[47]),w[52]=J(m[50]),w[53]=J(m[56]),w[54]=J(m[59]),w[55]=J(m[61]),w[56]=J(m[35]),w[57]=J(m[36]),w[58]=J(m[48]),w[59]=J(m[49]),w[60]=J(m[57]),w[61]=J(m[58]),w[62]=J(m[62]),w[63]=J(m[63])}function Zt(m){const w=.5*Math.cos(.7853975),U=.5*Math.cos(3.14159/16),g=.5*Math.cos(3.14159/8),A=.5*Math.cos(3*3.14159/16),C=.5*Math.cos(5*3.14159/16),N=.5*Math.cos(3*3.14159/8),L=.5*Math.cos(7*3.14159/16),k=new Array(4),V=new Array(4),G=new Array(4),j=new Array(4);for(let st=0;st<8;++st){const rt=st*8;k[0]=g*m[rt+2],k[1]=N*m[rt+2],k[2]=g*m[rt+6],k[3]=N*m[rt+6],V[0]=U*m[rt+1]+A*m[rt+3]+C*m[rt+5]+L*m[rt+7],V[1]=A*m[rt+1]-L*m[rt+3]-U*m[rt+5]-C*m[rt+7],V[2]=C*m[rt+1]-U*m[rt+3]+L*m[rt+5]+A*m[rt+7],V[3]=L*m[rt+1]-C*m[rt+3]+A*m[rt+5]-U*m[rt+7],G[0]=w*(m[rt+0]+m[rt+4]),G[3]=w*(m[rt+0]-m[rt+4]),G[1]=k[0]+k[3],G[2]=k[1]-k[2],j[0]=G[0]+G[1],j[1]=G[3]+G[2],j[2]=G[3]-G[2],j[3]=G[0]-G[1],m[rt+0]=j[0]+V[0],m[rt+1]=j[1]+V[1],m[rt+2]=j[2]+V[2],m[rt+3]=j[3]+V[3],m[rt+4]=j[3]-V[3],m[rt+5]=j[2]-V[2],m[rt+6]=j[1]-V[1],m[rt+7]=j[0]-V[0]}for(let st=0;st<8;++st)k[0]=g*m[16+st],k[1]=N*m[16+st],k[2]=g*m[48+st],k[3]=N*m[48+st],V[0]=U*m[8+st]+A*m[24+st]+C*m[40+st]+L*m[56+st],V[1]=A*m[8+st]-L*m[24+st]-U*m[40+st]-C*m[56+st],V[2]=C*m[8+st]-U*m[24+st]+L*m[40+st]+A*m[56+st],V[3]=L*m[8+st]-C*m[24+st]+A*m[40+st]-U*m[56+st],G[0]=w*(m[st]+m[32+st]),G[3]=w*(m[st]-m[32+st]),G[1]=k[0]+k[3],G[2]=k[1]-k[2],j[0]=G[0]+G[1],j[1]=G[3]+G[2],j[2]=G[3]-G[2],j[3]=G[0]-G[1],m[0+st]=j[0]+V[0],m[8+st]=j[1]+V[1],m[16+st]=j[2]+V[2],m[24+st]=j[3]+V[3],m[32+st]=j[3]-V[3],m[40+st]=j[2]-V[2],m[48+st]=j[1]-V[1],m[56+st]=j[0]-V[0]}function wt(m){for(let w=0;w<64;++w){const U=m[0][w],g=m[1][w],A=m[2][w];m[0][w]=U+1.5747*A,m[1][w]=U-.1873*g-.4682*A,m[2][w]=U+1.8556*g}}function R(m,w,U){for(let g=0;g<64;++g)w[U+g]=ql.toHalfFloat(b(m[g]))}function b(m){return m<=1?Math.sign(m)*Math.pow(Math.abs(m),2.2):Math.sign(m)*Math.pow(T,Math.abs(m)-1)}function Y(m){return new DataView(m.array.buffer,m.offset.value,m.size)}function nt(m){const w=m.viewer.buffer.slice(m.offset.value,m.offset.value+m.size),U=new Uint8Array(Ht(w)),g=new Uint8Array(U.length);return lt(U),P(U,g),new DataView(g.buffer)}function ct(m){const w=m.array.slice(m.offset.value,m.offset.value+m.size),U=Ur(w),g=new Uint8Array(U.length);return lt(U),P(U,g),new DataView(g.buffer)}function it(m){const w=m.viewer,U={value:m.offset.value},g=new Uint16Array(m.columns*m.lines*(m.inputChannels.length*m.type)),A=new Uint8Array(8192);let C=0;const N=new Array(m.inputChannels.length);for(let at=0,ut=m.inputChannels.length;at<ut;at++)N[at]={},N[at].start=C,N[at].end=N[at].start,N[at].nx=m.columns,N[at].ny=m.lines,N[at].size=m.type,C+=N[at].nx*N[at].ny*N[at].size;const L=Q(w,U),k=Q(w,U);if(k>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(L<=k)for(let at=0;at<k-L+1;at++)A[at+L]=Kt(w,U);const V=new Uint16Array(65536),G=M(A,V),j=Gt(w,U);ae(m.array,w,U,j,g,C);for(let at=0;at<m.inputChannels.length;++at){const ut=N[at];for(let _t=0;_t<N[at].size;++_t)re(g,ut.start+_t,ut.nx,ut.size,ut.ny,ut.nx*ut.size,G)}dt(V,g,C);let st=0;const rt=new Uint8Array(g.buffer.byteLength);for(let at=0;at<m.lines;at++)for(let ut=0;ut<m.inputChannels.length;ut++){const _t=N[ut],Ut=_t.nx*_t.size,Yt=new Uint8Array(g.buffer,_t.end*2,Ut*2);rt.set(Yt,st),st+=Ut*2,_t.end+=Ut}return new DataView(rt.buffer)}function Bt(m){const w=m.array.slice(m.offset.value,m.offset.value+m.size),U=Ur(w),g=m.inputChannels.length*m.lines*m.columns*m.totalBytes,A=new ArrayBuffer(g),C=new DataView(A);let N=0,L=0;const k=new Array(4);for(let V=0;V<m.lines;V++)for(let G=0;G<m.inputChannels.length;G++){let j=0;switch(m.inputChannels[G].pixelType){case 1:k[0]=N,k[1]=k[0]+m.columns,N=k[1]+m.columns;for(let rt=0;rt<m.columns;++rt){const at=U[k[0]++]<<8|U[k[1]++];j+=at,C.setUint16(L,j,!0),L+=2}break;case 2:k[0]=N,k[1]=k[0]+m.columns,k[2]=k[1]+m.columns,N=k[2]+m.columns;for(let rt=0;rt<m.columns;++rt){const at=U[k[0]++]<<24|U[k[1]++]<<16|U[k[2]++]<<8;j+=at,C.setUint32(L,j,!0),L+=4}break}}return C}function Et(m){const w=m.viewer,U={value:m.offset.value},g=new Uint8Array(m.columns*m.lines*(m.inputChannels.length*m.type*2)),A={version:Xt(w,U),unknownUncompressedSize:Xt(w,U),unknownCompressedSize:Xt(w,U),acCompressedSize:Xt(w,U),dcCompressedSize:Xt(w,U),rleCompressedSize:Xt(w,U),rleUncompressedSize:Xt(w,U),rleRawSize:Xt(w,U),totalAcUncompressedCount:Xt(w,U),totalDcUncompressedCount:Xt(w,U),acCompression:Xt(w,U)};if(A.version<2)throw new Error("EXRLoader.parse: "+Pn.compression+" version "+A.version+" is unsupported");const C=new Array;let N=Q(w,U)-2;for(;N>0;){const ut=Ct(w.buffer,U),_t=Kt(w,U),Ut=_t>>2&3,Yt=(_t>>4)-1,Wt=new Int8Array([Yt])[0],It=Kt(w,U);C.push({name:ut,index:Wt,type:It,compression:Ut}),N-=ut.length+3}const L=Pn.channels,k=new Array(m.inputChannels.length);for(let ut=0;ut<m.inputChannels.length;++ut){const _t=k[ut]={},Ut=L[ut];_t.name=Ut.name,_t.compression=0,_t.decoded=!1,_t.type=Ut.pixelType,_t.pLinear=Ut.pLinear,_t.width=m.columns,_t.height=m.lines}const V={idx:new Array(3)};for(let ut=0;ut<m.inputChannels.length;++ut){const _t=k[ut];for(let Ut=0;Ut<C.length;++Ut){const Yt=C[Ut];_t.name==Yt.name&&(_t.compression=Yt.compression,Yt.index>=0&&(V.idx[Yt.index]=ut),_t.offset=ut)}}let G,j,st;if(A.acCompressedSize>0)switch(A.acCompression){case 0:G=new Uint16Array(A.totalAcUncompressedCount),ae(m.array,w,U,A.acCompressedSize,G,A.totalAcUncompressedCount);break;case 1:const ut=m.array.slice(U.value,U.value+A.totalAcUncompressedCount),_t=Ur(ut);G=new Uint16Array(_t.buffer),U.value+=A.totalAcUncompressedCount;break}if(A.dcCompressedSize>0){const ut={array:m.array,offset:U,size:A.dcCompressedSize};j=new Uint16Array(ct(ut).buffer),U.value+=A.dcCompressedSize}if(A.rleRawSize>0){const ut=m.array.slice(U.value,U.value+A.rleCompressedSize),_t=Ur(ut);st=Ht(_t.buffer),U.value+=A.rleCompressedSize}let rt=0;const at=new Array(k.length);for(let ut=0;ut<at.length;++ut)at[ut]=new Array;for(let ut=0;ut<m.lines;++ut)for(let _t=0;_t<k.length;++_t)at[_t].push(rt),rt+=k[_t].width*m.type*2;ft(V,at,k,G,j,g);for(let ut=0;ut<k.length;++ut){const _t=k[ut];if(!_t.decoded)switch(_t.compression){case 2:let Ut=0,Yt=0;for(let Wt=0;Wt<m.lines;++Wt){let It=at[ut][Ut];for(let Qt=0;Qt<_t.width;++Qt){for(let Nt=0;Nt<2*_t.type;++Nt)g[It++]=st[Yt+Nt*_t.width*_t.height];Yt++}Ut++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(g.buffer)}function Ct(m,w){const U=new Uint8Array(m);let g=0;for(;U[w.value+g]!=0;)g+=1;const A=new TextDecoder().decode(U.slice(w.value,w.value+g));return w.value=w.value+g+1,A}function oe(m,w,U){const g=new TextDecoder().decode(new Uint8Array(m).slice(w.value,w.value+U));return w.value=w.value+U,g}function gt(m,w){const U=Vt(m,w),g=Gt(m,w);return[U,g]}function Dt(m,w){const U=Gt(m,w),g=Gt(m,w);return[U,g]}function Vt(m,w){const U=m.getInt32(w.value,!0);return w.value=w.value+4,U}function Gt(m,w){const U=m.getUint32(w.value,!0);return w.value=w.value+4,U}function Lt(m,w){const U=m[w.value];return w.value=w.value+1,U}function Kt(m,w){const U=m.getUint8(w.value);return w.value=w.value+1,U}const Xt=function(m,w){let U;return"getBigInt64"in DataView.prototype?U=Number(m.getBigInt64(w.value,!0)):U=m.getUint32(w.value+4,!0)+Number(m.getUint32(w.value,!0)<<32),w.value+=8,U};function Jt(m,w){const U=m.getFloat32(w.value,!0);return w.value+=4,U}function H(m,w){return ql.toHalfFloat(Jt(m,w))}function J(m){const w=(m&31744)>>10,U=m&1023;return(m>>15?-1:1)*(w?w===31?U?NaN:1/0:Math.pow(2,w-15)*(1+U/1024):6103515625e-14*(U/1024))}function Q(m,w){const U=m.getUint16(w.value,!0);return w.value+=2,U}function ot(m,w){return J(Q(m,w))}function Rt(m,w,U,g){const A=U.value,C=[];for(;U.value<A+g-1;){const N=Ct(w,U),L=Vt(m,U),k=Kt(m,U);U.value+=3;const V=Vt(m,U),G=Vt(m,U);C.push({name:N,pixelType:L,pLinear:k,xSampling:V,ySampling:G})}return U.value+=1,C}function Tt(m,w){const U=Jt(m,w),g=Jt(m,w),A=Jt(m,w),C=Jt(m,w),N=Jt(m,w),L=Jt(m,w),k=Jt(m,w),V=Jt(m,w);return{redX:U,redY:g,greenX:A,greenY:C,blueX:N,blueY:L,whiteX:k,whiteY:V}}function jt(m,w){const U=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],g=Kt(m,w);return U[g]}function Se(m,w){const U=Vt(m,w),g=Vt(m,w),A=Vt(m,w),C=Vt(m,w);return{xMin:U,yMin:g,xMax:A,yMax:C}}function Ue(m,w){const U=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],g=Kt(m,w);return U[g]}function ue(m,w){const U=["ENVMAP_LATLONG","ENVMAP_CUBE"],g=Kt(m,w);return U[g]}function Ze(m,w){const U=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],g=["ROUND_DOWN","ROUND_UP"],A=Gt(m,w),C=Gt(m,w),N=Kt(m,w);return{xSize:A,ySize:C,levelMode:U[N&15],roundingMode:g[N>>4]}}function dn(m,w){const U=Jt(m,w),g=Jt(m,w);return[U,g]}function tr(m,w){const U=Jt(m,w),g=Jt(m,w),A=Jt(m,w);return[U,g,A]}function er(m,w,U,g,A){if(g==="string"||g==="stringvector"||g==="iccProfile")return oe(w,U,A);if(g==="chlist")return Rt(m,w,U,A);if(g==="chromaticities")return Tt(m,U);if(g==="compression")return jt(m,U);if(g==="box2i")return Se(m,U);if(g==="envmap")return ue(m,U);if(g==="tiledesc")return Ze(m,U);if(g==="lineOrder")return Ue(m,U);if(g==="float")return Jt(m,U);if(g==="v2f")return dn(m,U);if(g==="v3f")return tr(m,U);if(g==="int")return Vt(m,U);if(g==="rational")return gt(m,U);if(g==="timecode")return Dt(m,U);if(g==="preview")return U.value+=A,"skipped";U.value+=A}function Rn(m,w){const U=Math.log2(m);return w=="ROUND_DOWN"?Math.floor(U):Math.ceil(U)}function _s(m,w,U){let g=0;switch(m.levelMode){case"ONE_LEVEL":g=1;break;case"MIPMAP_LEVELS":g=Rn(Math.max(w,U),m.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return g}function vs(m,w,U,g){const A=new Array(m);for(let C=0;C<m;C++){const N=1<<C;let L=w/N|0;g=="ROUND_UP"&&L*N<w&&(L+=1);const k=Math.max(L,1);A[C]=(k+U-1)/U|0}return A}function nr(){const m=this,w=m.offset,U={value:0};for(let g=0;g<m.tileCount;g++){const A=Vt(m.viewer,w),C=Vt(m.viewer,w);w.value+=8,m.size=Gt(m.viewer,w);const N=A*m.blockWidth,L=C*m.blockHeight;m.columns=N+m.blockWidth>m.width?m.width-N:m.blockWidth,m.lines=L+m.blockHeight>m.height?m.height-L:m.blockHeight;const k=m.columns*m.totalBytes,G=m.size<m.lines*k?m.uncompress(m):Y(m);w.value+=m.size;for(let j=0;j<m.lines;j++){const st=j*m.columns*m.totalBytes;for(let rt=0;rt<m.inputChannels.length;rt++){const at=Pn.channels[rt].name,ut=m.channelByteOffsets[at]*m.columns,_t=m.decodeChannels[at];if(_t===void 0)continue;U.value=st+ut;const Ut=(m.height-(1+L+j))*m.outLineWidth;for(let Yt=0;Yt<m.columns;Yt++){const Wt=Ut+(Yt+N)*m.outputChannels+_t;m.byteArray[Wt]=m.getter(G,U)}}}}}function Ri(){const m=this,w=m.offset,U={value:0};for(let g=0;g<m.height/m.blockHeight;g++){const A=Vt(m.viewer,w)-Pn.dataWindow.yMin;m.size=Gt(m.viewer,w),m.lines=A+m.blockHeight>m.height?m.height-A:m.blockHeight;const C=m.columns*m.totalBytes,L=m.size<m.lines*C?m.uncompress(m):Y(m);w.value+=m.size;for(let k=0;k<m.blockHeight;k++){const V=g*m.blockHeight,G=k+m.scanOrder(V);if(G>=m.height)continue;const j=k*C,st=(m.height-1-G)*m.outLineWidth;for(let rt=0;rt<m.inputChannels.length;rt++){const at=Pn.channels[rt].name,ut=m.channelByteOffsets[at]*m.columns,_t=m.decodeChannels[at];if(_t!==void 0){U.value=j+ut;for(let Ut=0;Ut<m.columns;Ut++){const Yt=st+Ut*m.outputChannels+_t;m.byteArray[Yt]=m.getter(L,U)}}}}}}function ir(m,w,U){const g={};if(m.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");g.version=m.getUint8(4);const A=m.getUint8(5);g.spec={singleTile:!!(A&2),longName:!!(A&4),deepFormat:!!(A&8),multiPart:!!(A&16)},U.value=8;let C=!0;for(;C;){const N=Ct(w,U);if(N==0)C=!1;else{const L=Ct(w,U),k=Gt(m,U),V=er(m,w,U,L,k);V===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${L}'.`):g[N]=V}}if((A&-7)!=0)throw console.error("THREE.EXRHeader:",g),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return g}function Pi(m,w,U,g,A){const C={size:0,viewer:w,array:U,offset:g,width:m.dataWindow.xMax-m.dataWindow.xMin+1,height:m.dataWindow.yMax-m.dataWindow.yMin+1,inputChannels:m.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:ai};switch(m.compression){case"NO_COMPRESSION":C.blockHeight=1,C.uncompress=Y;break;case"RLE_COMPRESSION":C.blockHeight=1,C.uncompress=nt;break;case"ZIPS_COMPRESSION":C.blockHeight=1,C.uncompress=ct;break;case"ZIP_COMPRESSION":C.blockHeight=16,C.uncompress=ct;break;case"PIZ_COMPRESSION":C.blockHeight=32,C.uncompress=it;break;case"PXR24_COMPRESSION":C.blockHeight=16,C.uncompress=Bt;break;case"DWAA_COMPRESSION":C.blockHeight=32,C.uncompress=Et;break;case"DWAB_COMPRESSION":C.blockHeight=256,C.uncompress=Et;break;default:throw new Error("EXRLoader.parse: "+m.compression+" is unsupported")}const N={};for(const G of m.channels)switch(G.name){case"Y":case"R":case"G":case"B":case"A":N[G.name]=!0,C.type=G.pixelType}let L=!1;if(N.R&&N.G&&N.B)L=!N.A,C.outputChannels=4,C.decodeChannels={R:0,G:1,B:2,A:3};else if(N.Y)C.outputChannels=1,C.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(C.type==1)switch(A){case cn:C.getter=ot;break;case Hn:C.getter=Q;break}else if(C.type==2)switch(A){case cn:C.getter=Jt;break;case Hn:C.getter=H}else throw new Error("EXRLoader.parse: unsupported pixelType "+C.type+" for "+m.compression+".");C.columns=C.width;const k=C.width*C.height*C.outputChannels;switch(A){case cn:C.byteArray=new Float32Array(k),L&&C.byteArray.fill(1,0,k);break;case Hn:C.byteArray=new Uint16Array(k),L&&C.byteArray.fill(15360,0,k);break;default:console.error("THREE.EXRLoader: unsupported type: ",A);break}let V=0;for(const G of m.channels)C.decodeChannels[G.name]!==void 0&&(C.channelByteOffsets[G.name]=V),V+=G.pixelType*2;if(C.totalBytes=V,C.outLineWidth=C.width*C.outputChannels,m.lineOrder==="INCREASING_Y"?C.scanOrder=G=>G:C.scanOrder=G=>C.height-1-G,C.outputChannels==4?(C.format=hn,C.colorSpace=ai):(C.format=ll,C.colorSpace=Bn),m.spec.singleTile){C.blockHeight=m.tiles.ySize,C.blockWidth=m.tiles.xSize;const G=_s(m.tiles,C.width,C.height),j=vs(G,C.width,m.tiles.xSize,m.tiles.roundingMode),st=vs(G,C.height,m.tiles.ySize,m.tiles.roundingMode);C.tileCount=j[0]*st[0];for(let rt=0;rt<G;rt++)for(let at=0;at<st[rt];at++)for(let ut=0;ut<j[rt];ut++)Xt(w,g);C.decode=nr.bind(C)}else{C.blockWidth=C.width;const G=Math.ceil(C.height/C.blockHeight);for(let j=0;j<G;j++)Xt(w,g);C.decode=Ri.bind(C)}return C}const xs={value:0},ys=new DataView(t),go=new Uint8Array(t),Pn=ir(ys,t,xs),Yn=Pi(Pn,ys,go,xs,this.type);return Yn.decode(),{header:Pn,width:Yn.width,height:Yn.height,data:Yn.byteArray,format:Yn.format,colorSpace:Yn.colorSpace,type:this.type}}setDataType(t){return this.type=t,this}load(t,e,n,s){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=We,o.magFilter=We,o.generateMipmaps=!1,o.flipY=!1,e&&e(o,a)}return super.load(t,r,n,s)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class bn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),bn.nextNameID=bn.nextNameID||0,this.$name.id=`lil-gui-name-${++bn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class vv extends bn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ja(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const xv={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ja,toHexString:ja},qs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},yv={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=qs.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return qs.toHexString(s)}},Mv={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=qs.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return qs.toHexString(s)}},Sv=[xv,qs,yv,Mv];function Ev(i){return Sv.find(t=>t.match(i))}class bv extends bn{constructor(t,e,n,s){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ev(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ja(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ea extends bn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class wv extends bn{constructor(t,e,n,s,r,o){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const S=parseFloat(this.$input.value);isNaN(S)||(this._snapClampSetValue(S+E),this.$input.value=this.getValue())},s=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},r=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let o=!1,a,l,c,h,u;const d=5,p=E=>{a=E.clientX,l=c=E.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",y)},v=E=>{if(o){const S=E.clientX-a,x=E.clientY-l;Math.abs(x)>d?(E.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(S)>d&&y()}if(!o){const S=E.clientY-c;u-=S*this._step*this._arrowKeyMultiplier(E),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=E.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",y)},_=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",_),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,E,S,x,O)=>(f-E)/(S-E)*(O-x)+x,e=f=>{const E=this.$slider.getBoundingClientRect();let S=t(f,E.left,E.right,this._min,this._max);this._snapClampSetValue(S)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),o=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(o){const E=f.touches[0].clientX-a,S=f.touches[0].clientY-l;Math.abs(E)>Math.abs(S)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),v=400;let y;const _=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const S=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+S),this.$input.value=this.getValue(),clearTimeout(y),y=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",_,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Tv extends bn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class Av extends bn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Cv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Rv(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Hc=!1;class wl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Hc&&a&&(Rv(Cv),Hc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new Tv(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new wv(this,t,e,n,s,r);case"boolean":return new vv(this,t,e);case"string":return new Av(this,t,e);case"function":return new ea(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new bv(this,t,e,n)}addFolder(t){const e=new wl({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ea||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ea)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Ot={waterColor:744056,fogDensity:.014,floorY:-10,waterTop:8,currentStrength:1,godRayIntensity:.6,causticStrength:.55,boundsXZ:20,fishCount:48,minSpeed:1.2,maxSpeed:3.5,maxForce:5,perception:5,separationDist:1.6,wSeparation:2.5,wAlignment:1,wCohesion:.8,wFood:3.5,foodFallSpeed:.9,foodSeekRadius:30,foodEatDistance:.6,foodLifetimeOnFloor:8,kelpBushCount:28,giantKelpCount:9,rockClusterCount:9,rocksPerCluster:4,extraCoralClusters:18,outcropCount:5,bubbleCount:70},uo=document.querySelector("canvas.webgl"),rn={width:window.innerWidth,height:window.innerHeight},ye=new tf;ye.background=new te(Ot.waterColor);ye.fog=new gl(Ot.waterColor,Ot.fogDensity);const li=new Qe(60,rn.width/rn.height,.1,200);li.position.set(0,1,17);ye.add(li);const ci=new H_({canvas:uo,antialias:!0});ci.setSize(rn.width,rn.height);ci.setPixelRatio(Math.min(window.devicePixelRatio,2));ci.toneMapping=Qc;ci.toneMappingExposure=.95;const ps=new G_(li,uo);ps.enableDamping=!0;ps.target.set(0,-3,0);ps.minDistance=5;ps.maxDistance=45;ps.maxPolarAngle=Math.PI*.53;const Pv=new Jf(9367295,1933204,2.1);ye.add(Pv);const Lv=new tp(3844036,.4);ye.add(Lv);const Tl=new Uh(14875903,2.5);Tl.position.set(6,20,8);ye.add(Tl);const qh=new Uh(6001919,.9);qh.position.set(-10,6,-12);ye.add(qh);const $h={uTop:{value:new te(6479084)},uHorizon:{value:new te(Ot.waterColor)},uBottom:{value:new te(271930)}},fo=new $t(new An(150,32,16),new Tn({uniforms:$h,side:Xe,depthWrite:!1,fog:!1,toneMapped:!1,vertexShader:`
            varying vec3 vDir;
            void main() {
                vDir = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
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
        `}));fo.renderOrder=-10;fo.frustumCulled=!1;ye.add(fo);function Dv(){const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new lf(i);return n.colorSpace=qe,n}const Zh=Dv(),Qr={uTime:{value:0},uStrength:{value:Ot.causticStrength}},Iv=`
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
`;function hi(i,t=1){i.onBeforeCompile=e=>{e.uniforms.uCTime=Qr.uTime,e.uniforms.uCStrength=Qr.uStrength,e.uniforms.uCK={value:t},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCausticPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCausticPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCausticPos;
uniform float uCTime;
uniform float uCStrength;
uniform float uCK;
`+Iv).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
                {
                    vec2 cp = mod(vCausticPos.xz * 0.63 + vec2(vCausticPos.y * 0.25, 0.0), 6.28318) - 250.0;
                    float cv = causticPattern(cp, uCTime * 0.55);
                    float up = clamp(inverseTransformDirection(normal, viewMatrix).y * 0.5 + 0.5, 0.0, 1.0);
                    float depthFade = clamp((vCausticPos.y + 14.0) / 22.0, 0.35, 1.0);
                    totalEmissiveRadiance += diffuseColor.rgb * vec3(0.75, 1.0, 1.0) * cv * uCStrength * uCK * mix(0.25, 1.0, up) * depthFade * 0.9;
                }`)}}const Uv=(()=>{const e=new Float32Array(2100),n=new Float32Array(700);for(let o=0;o<700;o++)e[o*3]=St.randFloatSpread(76),e[o*3+1]=St.randFloat(Ot.floorY+1,Ot.waterTop),e[o*3+2]=St.randFloatSpread(76),n[o]=Math.random();const s=new Be;s.setAttribute("position",new en(e,3));const r=new af(s,new Sh({map:Zh,color:12580095,size:.22,sizeAttenuation:!0,transparent:!0,opacity:.55,depthWrite:!1,blending:rs}));return r.frustumCulled=!1,ye.add(r),{update(o,a){for(let l=0;l<700;l++){const c=n[l];e[l*3]+=Math.sin(a*.2+c*20)*o*.18,e[l*3+1]+=o*(.04+c*.08),e[l*3+2]+=Math.cos(a*.17+c*15)*o*.18,e[l*3+1]>Ot.waterTop&&(e[l*3+1]=Ot.floorY+1)}s.attributes.position.needsUpdate=!0}}})(),to=6,eo=4;function Kh(i,t){const e=Math.hypot(i-to,t-eo),n=St.clamp((e-1.5)/4.5,0,1),s=Math.sin(i*.11+Math.sin(t*.07)*1.5)*Math.cos(t*.09)*2,r=Math.sin(i*.22+t*.18)*.7,o=Math.sin(i*.5+t*.4)*.15;return(s+r+o)*n}function Mn(i,t){return Ot.floorY+Kh(i,t)}const Qs=new Ks(160,160,150,150);Qs.rotateX(-Math.PI/2);const xn=new Kf,Vc=new _v;function un(i,t,{color:e=!1,repeat:n=1}={}){const s=i.load(t,void 0,void 0,r=>{console.error(`Не вдалося завантажити текстуру ${t}:`,r)});return s.wrapS=ks,s.wrapT=ks,s.repeat.set(n,n),e&&(s.colorSpace=qe),s}function ln(i,t,e="jpg",n=1){const s=`${i}/textures/${t}`;return{map:un(xn,`${s}_diff_1k.jpg`,{color:!0,repeat:n}),normalMap:un(Vc,`${s}_nor_gl_1k.exr`,{repeat:n}),roughnessMap:un(e==="exr"?Vc:xn,`${s}_rough_1k.${e}`,{repeat:n})}}const Ps=Qs.attributes.position,qr=new Float32Array(Ps.count*3),Nv=new te(10388306),Fv=new te(14732701),Nr=new te;for(let i=0;i<Ps.count;i++){const t=Ps.getX(i),e=Ps.getZ(i),n=Kh(t,e);Ps.setY(i,Ot.floorY+n);const s=St.clamp((n+2.5)/5,0,1);Nr.lerpColors(Nv,Fv,s),qr[i*3]=Nr.r,qr[i*3+1]=Nr.g,qr[i*3+2]=Nr.b}Qs.setAttribute("color",new en(qr,3));Qs.computeVertexNormals();const Jh=new Te({color:16777215,vertexColors:!0,roughness:1,metalness:0,...ln("./sand/aerial_beach_01_1k.blend","aerial_beach_01","jpg",12)});hi(Jh);const jh=new $t(Qs,Jh);ye.add(jh);const je={x:-14,z:-13,scale:2.2,rotY:-.35};function Qh(i,t,e=2){const n=i-je.x,s=t-je.z,r=Math.cos(je.rotY),o=Math.sin(je.rotY),a=n*r-s*o,l=n*o+s*r;return a>-6*je.scale-e&&a<7*je.scale+e&&Math.abs(l)<2*je.scale+e}function tu(i,t,e=4){return Math.hypot(i-to,t-eo)<e}function Al(i,t=2,e=4){let n=0,s=0;for(let r=0;r<60&&(n=St.randFloatSpread(i*2),s=St.randFloatSpread(i*2),!(!Qh(n,s,t)&&!tu(n,s,e)));r++);return{x:n,z:s}}function Qa({segments:i,segLength:t,radius:e,material:n,direction:s=1}){const r=new yn(.8,1,t,6,1);r.translate(0,s*t/2,0);const o=new be,a=[];let l=o;for(let c=0;c<i;c++){const h=new be;h.position.y=c===0?0:s*t,l.add(h);const u=new $t(r,n),d=1-c/i*.65;u.scale.set(e*d,1,e*d),h.add(u),a.push(h),l=h}return{root:o,segs:a}}const Ls=[new Te({color:16777215,roughness:.7,...ln("./algae/concrete_moss_1k.blend","concrete_moss","exr")}),new Te({color:16777215,roughness:.7,...ln("./algae/moss_wood_1k.blend","moss_wood")})];Ls.forEach(i=>hi(i));const eu=[];function nu(i,t,e=!1){const n=new be;n.position.set(i,Mn(i,t)-.1,t);const s=e?St.randInt(1,2):St.randInt(2,4);for(let r=0;r<s;r++){const o=Qa(e?{segments:St.randInt(16,22),segLength:St.randFloat(.8,1),radius:St.randFloat(.16,.22),material:Ls[Math.floor(Math.random()*Ls.length)]}:{segments:St.randInt(6,9),segLength:St.randFloat(.6,.9),radius:St.randFloat(.1,.16),material:Ls[Math.floor(Math.random()*Ls.length)]}),a=Math.random()*Math.PI*2;o.root.position.set(Math.cos(a)*.3,0,Math.sin(a)*.3),n.add(o.root),eu.push({segs:o.segs,phase:Math.random()*Math.PI*2,amp:e?.05:.1,lean:e?.02:.05,speed:e?.6:.9})}ye.add(n)}for(let i=0;i<Ot.kelpBushCount;i++){const{x:t,z:e}=Al(50,2,4);nu(t,e,!1)}for(let i=0;i<Ot.giantKelpCount;i++){const{x:t,z:e}=Al(34,3,5);nu(t,e,!0)}function Ov(i){const t=Ot.currentStrength;for(const e of eu)for(let n=0;n<e.segs.length;n++){const s=e.segs[n];s.rotation.z=-e.lean*t+Math.sin(i*e.speed+e.phase+n*.55)*e.amp*t,s.rotation.x=Math.sin(i*e.speed*.78+e.phase*1.7+n*.45)*e.amp*.7*t}}const $s=[new Te({color:16777215,roughness:1,flatShading:!0,...ln("./stone/stone1_1k.blend","marble_cliff_05","exr")}),new Te({color:16777215,roughness:1,flatShading:!0,...ln("./stone/seaside_rock_1k.blend","seaside_rock","exr")})];$s.forEach(i=>hi(i));function iu(i,t=0){const e=Math.random()<.5?new Ml(i,t):new lo(i,t),n=e.attributes.position,s=Math.random()*100;for(let r=0;r<n.count;r++){const o=n.getX(r),a=n.getY(r),l=n.getZ(r),c=1+.18*Math.sin(o*3.1/i+s)*Math.cos(a*2.7/i+s*1.3);n.setXYZ(r,o*c,a*c,l*c)}return e.computeVertexNormals(),e}function Gc(i,t,e){const n=new $t(iu(e,e>1?1:0),$s[Math.floor(Math.random()*$s.length)]),s=St.randFloat(.55,.9);return n.scale.set(St.randFloat(.9,1.2),s,St.randFloat(.8,1.1)),n.rotation.set(Math.random()*.4,Math.random()*Math.PI*2,Math.random()*.4),n.position.set(i,Mn(i,t)+e*s*.25,t),ye.add(n),n}const no=[];function Bv(i,t){for(let e=0;e<Ot.rocksPerCluster;e++)if(e===0){const n=St.randFloat(1.1,1.8);Gc(i,t,n),no.push({x:i,z:t,radius:n})}else{const n=Math.random()*Math.PI*2,s=St.randFloat(1.4,3.2),r=i+Math.cos(n)*s,o=t+Math.sin(n)*s,a=St.randFloat(.35,.9);Gc(r,o,a),no.push({x:r,z:o,radius:a})}}function zv(i,t){const e=new be;e.position.set(i,Mn(i,t)-.6,t);const n=[{r:2.4,y:.8},{r:1.8,y:2.5},{r:1.25,y:4},{r:.8,y:5.1}],s=$s[Math.floor(Math.random()*$s.length)];for(const r of n){const o=new $t(iu(r.r,1),s);o.scale.y=St.randFloat(1.1,1.5),o.position.set(St.randFloatSpread(.5),r.y,St.randFloatSpread(.5)),o.rotation.y=Math.random()*Math.PI*2,e.add(o)}e.scale.setScalar(St.randFloat(.8,1.35)),ye.add(e),no.push({x:i,z:t,radius:3.5})}const kv=[16727435,16742938,1697488,16734781,11554303,16765501],su=un(xn,"./corals/Sponge001_1K-JPG/Sponge001_1K-JPG_NormalGL.jpg",{repeat:.7}),ru=un(xn,"./corals/Sponge001_1K-JPG/Sponge001_1K-JPG_Roughness.jpg",{repeat:.7});su.repeat.set(.7,.7);ru.repeat.set(.7,.7);const ds=kv.map(i=>{const t=new Te({color:i,emissive:i,emissiveIntensity:.03,roughness:.9,normalMap:su,roughnessMap:ru});return t.normalScale.set(8,8),t}),ou=ds.map(i=>{const t=i.clone();return t.side=Ge,t.roughness=.9,t.normalScale.set(8,8),t});ds.forEach(i=>hi(i,.3));ou.forEach(i=>hi(i,.3));const tl=new yn(.05,.12,1,6);tl.translate(0,.5,0);const Wc=new lo(1,2),au=new yn(.11,.15,1,8,1,!0);au.translate(0,.5,0);function Xc(i){const t=new be,e=ds[i],n=St.randInt(4,7);for(let s=0;s<n;s++){const r=new be;r.rotation.order="YXZ",r.rotation.set(St.randFloat(.2,.7),Math.random()*Math.PI*2,0);const o=St.randFloat(.7,1.5),a=new $t(tl,e);a.scale.set(1,o,1),r.add(a);const l=new be;l.position.y=o*.6,l.rotation.z=(Math.random()<.5?-1:1)*St.randFloat(.5,.9);const c=o*.45,h=new $t(tl,e);h.scale.set(.7,c,.7),l.add(h),r.add(l),t.add(r)}return t}function Hv(i){const t=new be,e=St.randFloat(.2,.45),n=new $t(Wc,ds[i]);n.scale.set(e,e*.65,e),n.position.y=e*.1,t.add(n);for(let s=0;s<2;s++){const r=new $t(Wc,ds[i]),o=e*St.randFloat(.4,.6);r.scale.set(o,o*.7,o),r.position.set(St.randFloatSpread(e*2),o*.1,St.randFloatSpread(e*2)),t.add(r)}return t}function Vv(i){const t=new be,e=St.randInt(5,8);for(let n=0;n<e;n++){const s=new $t(au,ou[i]);s.scale.set(St.randFloat(.8,1.3),St.randFloat(.4,1.3),St.randFloat(.8,1.3)),s.position.set(St.randFloatSpread(.7),0,St.randFloatSpread(.7)),s.rotation.set(St.randFloatSpread(.3),0,St.randFloatSpread(.3)),t.add(s)}return t}const Yc=[Xc,Xc,Hv,Vv];function Gv(i,t){return no.some(n=>{const s=n.radius*1.2+1.2;return Math.hypot(i-n.x,t-n.z)<s})}function po(i,t,e=St.randInt(8,14)){for(let n=0;n<e;n++)for(let s=0;s<4;s++){const r=Math.random()*Math.PI*2,o=St.randFloat(2,3.8),a=i+Math.cos(r)*o,l=t+Math.sin(r)*o;if(Qh(a,l,1)||tu(a,l,2.5)||Gv(a,l))continue;const c=Yc[Math.floor(Math.random()*Yc.length)],h=c(Math.floor(Math.random()*ds.length));h.position.set(a,Mn(a,l)+.05,l),h.rotation.y=Math.random()*Math.PI*2,h.scale.setScalar(St.randFloat(.7,1.4)),ye.add(h);break}}const qc=[[-6,6],[13,-5],[-19,5],[3,-14],[19,11],[-4,-3],[-14,15],[9,-24],[24,0]],lu=[];for(let i=0;i<Ot.rockClusterCount;i++){const t=qc[i%qc.length],e=t[0]+St.randFloatSpread(3),n=t[1]+St.randFloatSpread(3);Bv(e,n),lu.push({x:e,z:n})}const $c=[[-22,4],[20,-12],[6,-26],[-14,9],[26,8]],cu=[];for(let i=0;i<Ot.outcropCount;i++){const t=$c[i%$c.length],e=t[0]+St.randFloatSpread(2),n=t[1]+St.randFloatSpread(2);zv(e,n),cu.push({x:e,z:n})}for(const{x:i,z:t}of lu)po(i+St.randFloatSpread(3),t+St.randFloatSpread(3));for(let i=0;i<Ot.extraCoralClusters;i++){const{x:t,z:e}=Al(30,2,3);po(t,e)}for(const{x:i,z:t}of cu)po(i+2.5,t+1.5,St.randInt(8,14));for(let i=0;i<48;i++){const t=St.randFloatSpread(36),e=St.randFloat(-4,24);po(t,e,1)}const el=new Te({color:16777215,roughness:.85,...ln("./coffer/plank_flooring_04_1k.blend","plank_flooring_04","exr",2)});function hu(i,t=2){const e=`./coffer/${i}_1K-JPG/${i}_1K-JPG`;return{map:un(xn,`${e}_Color.jpg`,{color:!0,repeat:t}),normalMap:un(xn,`${e}_NormalGL.jpg`,{repeat:t}),roughnessMap:un(xn,`${e}_Roughness.jpg`,{repeat:t}),metalnessMap:un(xn,`${e}_Metalness.jpg`,{repeat:t})}}const Fr=new Te({color:16762941,metalness:1,roughness:.35,emissive:5584896,emissiveIntensity:.5,...hu("Metal042A")}),nl=new Te({color:16766720,metalness:.9,roughness:.35,emissive:0,emissiveIntensity:.05,...hu("Metal034",3)});nl.normalScale.set(2.5,2.5);hi(el);function Wv(){const i=new be,t=new $t(new $e(1.8,.9,1.1),el);t.position.y=.45,i.add(t);const e=new $t(new $e(1.86,.16,1.16),Fr);e.position.y=.08,i.add(e);const n=new $t(new $e(1.86,.1,1.16),Fr);n.position.y=.87,i.add(n);const s=new $t(new $e(.22,.28,.08),Fr);s.position.set(0,.75,.58),i.add(s);const r=new be;r.position.set(0,.9,-.55),r.rotation.x=-.9,i.add(r);const o=new yn(.55,.55,1.8,20,1,!1,0,Math.PI);o.rotateZ(Math.PI/2);const a=el.clone();a.side=Ge,hi(a);const l=new $t(o,a);l.position.z=.55,r.add(l);const c=new yn(.57,.57,.14,20,1,!1,0,Math.PI);c.rotateZ(Math.PI/2);for(const v of[-.55,.55]){const y=new $t(c,Fr);y.position.set(v,0,.55),r.add(y)}const h=new $t(new An(.7,16,8,0,Math.PI*2,0,Math.PI/2),nl);h.scale.set(1.15,.4,.7),h.position.y=.92,i.add(h);const u=new yn(.12,.12,.03,12);for(let v=0;v<7;v++){const y=new $t(u,nl);y.position.set(St.randFloatSpread(1),1.05+Math.random()*.1,St.randFloatSpread(.5)),y.rotation.set(Math.random(),Math.random(),Math.random()),i.add(y)}const d=new Dh(16762954,28,16,2);d.position.set(0,1.4,0),i.add(d);const p=new $t(new An(.9,20,16),new ml({color:16762954,transparent:!0,opacity:.15,blending:rs,depthWrite:!1}));return p.position.set(0,1.3,0),i.add(p),i.position.set(to,Mn(to,eo)-.02,eo),i.rotation.y=-.6,ye.add(i),{chest:i,light:d,glow:p}}const{chest:uu,light:Xv,glow:Yv}=Wv();uu.updateMatrixWorld(!0);const na=uu.localToWorld(new B(0,1.3,0));function qv(i){const t=Math.sin(i*2.2)*.5+.5;Xv.intensity=20+t*12,Yv.material.opacity=.1+t*.1}const du=[];function $v(){const i=new Te({color:3154971,roughness:1,flatShading:!0,...ln("./ship/rough_wood_1k.blend","rough_wood")}),t=new Te({color:16777215,roughness:1,...ln("./ship/plank_flooring_03_1k.blend","plank_flooring_03","exr",2)}),e=ln("./ship/knotted_pine_bark_1k.blend","knotted_pine_bark","exr"),n=new Te({color:16777215,roughness:1,...e}),s=new Te({color:16777215,roughness:1,...e}),r=new Te({color:16777215,roughness:1,...ln("./ship/wooden_gate_1k.blend","wooden_gate","exr")}),o=new Te({color:16777215,roughness:.9,side:Ge,transparent:!0,opacity:.85,...ln("./ship/curly_teddy_natural_1k.blend","curly_teddy_natural","exr")});for(const $ of[i,t,n,s,r])hi($);const a=new Gn;a.moveTo(-1.7,1.4),a.lineTo(1.7,1.4),a.lineTo(1.6,-.8),a.lineTo(1.1,-1.2),a.lineTo(.7,-.7),a.lineTo(.2,-1.4),a.lineTo(-.3,-.9),a.lineTo(-.8,-1.3),a.lineTo(-1.3,-.7),a.lineTo(-1.7,-1.4),a.closePath();const l=new Jr;l.moveTo(.3,.2),l.lineTo(.7,.4),l.lineTo(.9,0),l.lineTo(.6,-.4),l.lineTo(.1,-.3),l.lineTo(.2,.1),l.closePath(),a.holes=[l];const c=new Os(a,{depth:.01,bevelEnabled:!1});o.normalScale.set(.1,.1);const h=new be,u=[[-6,-2],[3,-2],[5.2,-1.3],[4.5,-.5],[6,.2],[4.6,.9],[5.2,1.5],[3,2],[-6,2]],d=[[-5.65,-1.65],[2.9,-1.65],[4.6,-1],[4,-.4],[5,.2],[4.1,.6],[4.5,1.1],[2.9,1.65],[-5.65,1.65]],p=new Gn;u.forEach(([$,q],tt)=>tt===0?p.moveTo($,q):p.lineTo($,q)),p.closePath();const v=new Jr;d.forEach(([$,q],tt)=>tt===0?v.moveTo($,q):v.lineTo($,q)),v.closePath(),p.holes.push(v);const y=new Os(p,{depth:3.8,bevelEnabled:!1});y.rotateX(-Math.PI/2),y.translate(0,-1,0),h.add(new $t(y,i));const _=new Gn;d.forEach(([$,q],tt)=>tt===0?_.moveTo($,q):_.lineTo($,q)),_.closePath();const f=new Os(_,{depth:.25,bevelEnabled:!1});f.rotateX(-Math.PI/2),f.translate(0,1.75,0),h.add(new $t(f,t));const E=new $e(.05,.02,3.2);for(let $=-5.2;$<2.6;$+=.8){const q=new $t(E,t);q.position.set($,2.01,0),h.add(q)}const S=new $t(new $e(3,1.6,3.2),i);S.position.set(-4.3,2.8,0),h.add(S);const x=new $t(new $e(1.2,.3,1.2),n);x.position.set(-.8,2.15,.1),h.add(x);const O=[],I=.75;O.push(new ht(0,-I/2));for(let $=0;$<=10;$++){const q=$/10,tt=(q-.5)*I,Z=.35+Math.sin(q*Math.PI)*.08;O.push(new ht(Z,tt))}O.push(new ht(0,I/2));const F=new yl(O,16),z=new $t(F,r);z.position.set(.9,2.4,.95),h.add(z);const T=new $t(F,r);T.position.set(1.7,2.2,-.9),T.rotation.z=Math.PI/2-.2,h.add(T);const M=new $e(.14,2.2,.14),D=[[3.2,1.9,.2],[3.9,-1.9,-.25],[4.6,1.7,.3],[5,-1.2,-.3]];for(const[$,q,tt]of D){const Z=new $t(M,s);Z.position.set($,3.6,q),Z.rotation.x=tt,h.add(Z)}const W=new $t(new yn(.1,.16,2.6,6),s);W.rotation.z=-Math.PI/2+.5,W.position.set(5.4,2.7,.2),h.add(W);const X=[{x:-2.5,h:6,tilt:.05,sail:!1},{x:1.5,h:7.5,tilt:-.08,sail:!0},{x:4.2,h:3.2,tilt:-.55,sail:!1}];for(const{x:$,h:q,tilt:tt,sail:Z}of X){const vt=new yn(.12,.17,q,6);vt.translate(0,q/2,0);const yt=new $t(vt,s);yt.position.set($,1.95,0),yt.rotation.z=tt,h.add(yt);const At=new $t(new $e(.12,.12,4.5),s);if(At.position.set(0,q*.75,0),yt.add(At),Z){const zt=new $t(c,o);zt.rotation.y=Math.PI/2,zt.position.set(.05,q*.75-1.5,0),yt.add(zt),du.push(zt)}}h.rotation.set(.3,0,-.06);const K=new be;K.add(h),K.rotation.y=je.rotY,K.scale.setScalar(je.scale),K.position.set(je.x,Mn(je.x,je.z)-1.2,je.z),ye.add(K)}$v();const fu=[],Zv=`
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
`,Kv=`
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
`;function ms({x:i,z:t,radius:e,tilt:n,tiltX:s,phase:r}){const o=Ot.waterTop-Ot.floorY+6,a=new be,l=[];for(const c of[{scale:1,strength:.28},{scale:.55,strength:.22}]){const h=new yn(e*c.scale*.25,e*c.scale,o,32,1,!0),u=new Tn({uniforms:{uTime:{value:0},uIntensity:{value:0},uPhase:{value:r},uColor:{value:new te(9428210)}},vertexShader:Zv,fragmentShader:Kv,transparent:!0,blending:rs,depthWrite:!1,side:Ge,fog:!1});a.add(new $t(h,u)),l.push({material:u,baseStrength:c.strength})}a.position.set(i,Ot.waterTop+3-o/2,t),a.rotation.set(s,0,n),ye.add(a),fu.push({group:a,layers:l,phase:r,baseTilt:n,baseTiltX:s})}ms({x:-12,z:-4,radius:3.4,tilt:.14,tiltX:-.06,phase:0});ms({x:-2,z:-10,radius:4.4,tilt:.1,tiltX:-.1,phase:1.7});ms({x:10,z:0,radius:3.2,tilt:.16,tiltX:-.04,phase:3.1});ms({x:-5,z:6,radius:2.6,tilt:.12,tiltX:-.08,phase:4.4});ms({x:15,z:-9,radius:3.8,tilt:.18,tiltX:-.05,phase:5.2});ms({x:2,z:-20,radius:5,tilt:.1,tiltX:-.1,phase:2.4});function Jv(i){for(const t of fu){const e=.65+.35*Math.sin(i*.7+t.phase);for(const n of t.layers)n.material.uniforms.uTime.value=i,n.material.uniforms.uIntensity.value=n.baseStrength*e*Ot.godRayIntensity;t.group.rotation.z=t.baseTilt+Math.sin(i*.25+t.phase)*.025,t.group.rotation.x=t.baseTiltX+Math.cos(i*.2+t.phase)*.015}}function jv({color:i,scale:t,x:e,z:n,bottomY:s,topY:r,verticalSpeed:o,verticalPhase:a,withLight:l=!1}){const c=new be,h=new Te({color:i,emissive:i,emissiveIntensity:.9,transparent:!0,opacity:.5,roughness:.15,side:Ge,depthWrite:!1}),u=new Te({color:i,emissive:i,emissiveIntensity:1.8,transparent:!0,opacity:.7,depthWrite:!1}),d=new Te({color:i,emissive:i,emissiveIntensity:1.1,transparent:!0,opacity:.6,depthWrite:!1}),p=new $t(new An(1,28,16,0,Math.PI*2,0,Math.PI*.55),h);p.scale.set(1,.75,1),c.add(p);const v=new $t(new Sl(.985,.035,8,40),u);v.rotation.x=Math.PI/2,v.position.y=Math.cos(Math.PI*.55),p.add(v);const y=new $t(new An(.35,12,10),u);y.position.y=.2,c.add(y);const _=new nf(new yh({map:Zh,color:i,transparent:!0,opacity:.45,blending:rs,depthWrite:!1}));_.scale.set(4.2,4.2,1),_.position.y=-.1,c.add(_);const f=[],E=7;for(let S=0;S<E;S++){const x=S/E*Math.PI*2,O=Qa({segments:5,segLength:.55,radius:.05,material:d,direction:-1});O.root.position.set(Math.cos(x)*.72,-.1,Math.sin(x)*.72),c.add(O.root),f.push({segs:O.segs,phase:S*.7})}for(let S=0;S<2;S++){const x=S/2*Math.PI*2,O=Qa({segments:6,segLength:.62,radius:.09,material:d,direction:-1});O.root.position.set(Math.cos(x)*.2,-.05,Math.sin(x)*.2),c.add(O.root),f.push({segs:O.segs,phase:S*1.9+.5})}if(l){const S=new Dh(i,25*t,14*t,2);S.position.y=-.3,c.add(S)}return c.scale.setScalar(t),c.position.set(e,s,n),ye.add(c),{group:c,bell:p,glow:_,tentacles:f,scale:t,baseX:e,baseZ:n,bottomY:s,topY:r,verticalSpeed:o,verticalPhase:a,driftRadius:St.randFloat(1.5,3.2),driftSpeed:St.randFloat(.18,.35),pulseSpeed:St.randFloat(1.6,2.4),pulsePhase:Math.random()*Math.PI*2}}const Zc=[16728251,62932,10309341,5032432,16758531,16739229,8188570],Qv=[{x:-9,z:3,count:4,spread:5.5},{x:11,z:-1,count:4,spread:5.5},{x:1,z:-11,count:3,spread:6.5},{x:-2,z:9,count:2,spread:3.5}],il=[];function pu(i,t,e=!1){const n=St.randFloat(-4,-.5);il.push(jv({color:Zc[Math.floor(Math.random()*Zc.length)],scale:e?St.randFloat(.9,1.25):St.randFloat(.5,.85),x:i,z:t,bottomY:n,topY:n+St.randFloat(4,8),verticalSpeed:St.randFloat(.15,.32),verticalPhase:Math.random()*Math.PI*2,withLight:il.length%4===0}))}for(const i of Qv)for(let t=0;t<i.count;t++){const e=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*i.spread;pu(i.x+Math.cos(e)*n,i.z+Math.sin(e)*n)}for(let i=0;i<3;i++)pu(St.randFloatSpread(36),St.randFloat(-14,12),!0);function tx(i){const t=Ot.currentStrength;for(const e of il){const n=e.baseX+Math.sin(i*e.driftSpeed+e.verticalPhase)*e.driftRadius+Math.sin(i*.13+e.pulsePhase)*1.5,s=e.baseZ+Math.cos(i*e.driftSpeed*.8+e.verticalPhase)*e.driftRadius,r=(Math.sin(i*e.verticalSpeed+e.verticalPhase)+1)/2,o=St.lerp(e.bottomY,e.topY,r),a=Mn(n,s)+1+4.6*e.scale,l=Math.sin(i*e.pulseSpeed+e.pulsePhase),c=Math.pow((l+1)/2,2);e.group.position.set(n,Math.max(a,o)+c*.25*e.scale,s),e.group.rotation.x=Math.sin(i*.4+e.pulsePhase)*.1,e.group.rotation.z=Math.cos(i*.33+e.pulsePhase)*.1,e.bell.scale.set(1-c*.12,.75+c*.2,1-c*.12),e.glow.material.opacity=.3+c*.25;for(const h of e.tentacles)for(let u=0;u<h.segs.length;u++){const d=i*1.8+h.phase+u*.6;h.segs[u].rotation.x=Math.sin(d)*.25*t,h.segs[u].rotation.z=Math.cos(d*.85)*.25*t}}}const ex=new An(1,10,10),nx=new Te({color:12578815,emissive:8376319,emissiveIntensity:.25,transparent:!0,opacity:.35,roughness:.1,depthWrite:!1}),mu=[];function gu(i,t){i.fromChest?(i.x=na.x+St.randFloatSpread(.8),i.z=na.z+St.randFloatSpread(.6),i.startY=na.y):(i.x=St.randFloatSpread(Ot.boundsXZ*2),i.z=St.randFloatSpread(Ot.boundsXZ*2),i.startY=Mn(i.x,i.z)+.2),i.y=t?St.lerp(i.startY,Ot.waterTop,Math.random()):i.startY}for(let i=0;i<Ot.bubbleCount;i++){const t=new $t(ex,nx),e=St.randFloat(.05,.17);t.scale.setScalar(e),ye.add(t);const n={mesh:t,fromChest:i<Math.floor(Ot.bubbleCount*.4),speed:.6+e*7,phase:Math.random()*Math.PI*2,x:0,y:0,z:0,startY:0};gu(n,!0),mu.push(n)}function ix(i,t){for(const e of mu)e.y+=e.speed*i,e.y>Ot.waterTop&&gu(e,!1),e.mesh.position.set(e.x+Math.sin(t*1.5+e.phase)*.15,e.y,e.z+Math.cos(t*1.2+e.phase)*.15)}function ia(i,t,e=2){return{map:un(xn,`${i}_${t.color}`,{color:!0,repeat:e}),normalMap:un(xn,`${i}_${t.normal}`,{repeat:e}),roughnessMap:un(xn,`${i}_${t.roughness}`,{repeat:e})}}const vi={redPlastic:ia("./fish/plastic_0002_1k_UBw2zj/plastic_0002",{color:"color_1k.jpg",normal:"normal_opengl_1k.png",roughness:"roughness_1k.jpg"}),leather038:ia("./fish/Leather038_1K-JPG/Leather038_1K-JPG",{color:"Color.jpg",normal:"NormalGL.jpg",roughness:"Roughness.jpg"}),leather035D:ia("./fish/Leather035D_1K-JPG/Leather035D_1K-JPG",{color:"Color.jpg",normal:"NormalGL.jpg",roughness:"Roughness.jpg"}),biStretch:ln("./fish/bi_stretch_1k.blend","bi_stretch","exr",2)};function sx(i){const t=new be,e=[{body:16718336,belly:15902112,fin:11083300,pattern:16777215,bodyMaps:vi.redPlastic,finMaps:vi.redPlastic,type:"red"},{body:16746296,belly:16766624,fin:15817525,pattern:16777215,bodyMaps:vi.leather038,patternMaps:vi.leather035D,type:"orange"},{body:16766023,belly:16773283,fin:16753950,pattern:15895592,bodyMaps:vi.biStretch,bellyMaps:vi.biStretch,finMaps:vi.biStretch,type:"yellow"},{body:10771432,belly:15055103,fin:7815357,pattern:16766044,type:"purple"}],n=e[Math.abs(i)%e.length],s=(M,D=.42,W=null)=>new Te({color:M,roughness:D,metalness:0,side:Ge,...W||{}}),r=s(n.body,.34,n.bodyMaps),o=s(n.belly,.42,n.bellyMaps),a=s(n.fin,.38,n.finMaps),l=s(n.pattern,.35,n.patternMaps),c=s(16777215,.2),h=s(1515563,.18),u=s(7420472);function d(M,D,W,X,K=20){const $=new $t(new An(1,K,16),D);return $.position.set(...W),$.scale.set(...X),$.castShadow=!0,$.receiveShadow=!0,M.add($),$}const p=n.type==="yellow",v=p?[.175,.28,.5]:[.21,.28,.5],y=p?[.14,.14,.38]:[.17,.14,.38];d(t,r,[0,0,0],v,32),d(t,o,[0,-.105,.025],y,24);const _=new be;_.position.set(0,0,-.42);const f=new Gn;f.moveTo(0,0),f.quadraticCurveTo(.1,.18,.35,.28),f.quadraticCurveTo(.22,0,.35,-.28),f.quadraticCurveTo(.1,-.18,0,0),f.closePath();const E=new $t(new ji(f,16),a);E.rotation.y=Math.PI/2,E.position.z=-.01,_.add(E),t.add(_);const S=new Gn;S.moveTo(-.24,0),S.quadraticCurveTo(-.2,.17,-.08,.205),S.quadraticCurveTo(.015,.215,.1,.12),S.quadraticCurveTo(.18,.075,.24,0),S.closePath();const x=new $t(new ji(S,12),a);x.rotation.y=Math.PI/2,x.position.set(0,.23,-.035),t.add(x);const O=new Gn;O.moveTo(-.14,0),O.quadraticCurveTo(0,-.12,.14,0),O.quadraticCurveTo(0,-.055,-.14,0),O.closePath();const I=new $t(new ji(O,10),a);I.rotation.y=Math.PI/2,I.position.set(0,-.23,-.12),t.add(I);const F=[],z=p?.15:.18;for(const M of[-1,1]){const D=new be,W=new Gn;W.moveTo(0,.055),W.quadraticCurveTo(.17,.1,.205,-.015),W.quadraticCurveTo(.12,-.13,.015,-.09),W.quadraticCurveTo(-.025,-.015,0,.055);const X=new $t(new ji(W,12),a);X.rotation.y=M*.45,D.add(X),D.position.set(M*z,-.025,.015),t.add(D),F.push(D)}const T=p?.145:.17;for(const M of[-1,1]){const D=new be;d(D,c,[0,0,0],[.071,.075,.045],20),d(D,h,[M*.008,.004,.036],[.042,.047,.022],16),d(D,c,[M*.012-.012,.022,.055],[.014,.015,.009],10),D.position.set(M*T,.065,.275),D.rotation.y=M*.35,t.add(D)}if(d(t,u,[0,-.005,.522],[.045,.018,.012],12),n.type==="orange")for(const M of[-.245,-.045,.15]){const D=d(t,l,[0,.008,M],[.22,.285,.038],24);D.scale.z=.038}if(n.type==="red"&&(d(_,l,[0,0,-.15],[.03,.18,.08],16),d(t,l,[0,.21,-.035],[.12,.025,.3],20)),n.type==="yellow")for(const[M,D,W]of[[-.09,.09,.12],[.09,.09,.12],[-.09,.08,-.1],[.09,.08,-.1]])d(t,l,[M,D,W],[.045,.035,.045],12);return n.type==="purple"&&d(t,l,[0,.22,-.22],[.1,.025,.11],16),t.userData.tailPivot=_,t.userData.pectoralFins=F,t}const Ds=[];function rx(i){const t=i%4,e=sx(t),n=Ot.boundsXZ,s=new B(St.randFloatSpread(n*1.2),St.randFloat(-6,5),St.randFloatSpread(n*1.2)),r=new B(St.randFloatSpread(2),St.randFloatSpread(.5),St.randFloatSpread(2)).setLength(Ot.minSpeed+1);return e.position.copy(s),ye.add(e),{mesh:e,position:s,velocity:r,groupId:t,tailPhase:Math.random()*Math.PI*2}}for(let i=0;i<Ot.fishCount;i++)Ds.push(rx(i));const ox=new An(.12,10,10),ax=new Te({color:16773288,emissive:16765517,emissiveIntensity:.6});let zs=[];function lx(i){for(let t=0;t<4;t++){const e=new $t(ox,ax),n=new B(St.randFloatSpread(.8),St.randFloat(0,.4),St.randFloatSpread(.8));e.position.copy(i).add(n),ye.add(e),zs.push({mesh:e,position:e.position,landed:!1,landedAt:0,eaten:!1})}}function cx(i,t){for(const e of zs)if(e.landed)t-e.landedAt>Ot.foodLifetimeOnFloor&&(e.eaten=!0);else{e.position.y-=Ot.foodFallSpeed*i;const n=Mn(e.position.x,e.position.z)+.1;e.position.y<=n&&(e.position.y=n,e.landed=!0,e.landedAt=t)}zs=zs.filter(e=>(e.eaten&&ye.remove(e.mesh),!e.eaten))}const Or=new B,Br=new B,zr=new B,ti=new B,Zi=new B,sn=new B;function kr(i,t,e,n){return i.lengthSq()<1e-5?n.set(0,0,0):n.copy(i).setLength(e).sub(t).clampLength(0,Ot.maxForce)}function hx(i,t){const e=Ot.boundsXZ;for(let n=0;n<Ds.length;n++){const s=Ds[n];Or.set(0,0,0),Br.set(0,0,0),zr.set(0,0,0),sn.set(0,0,0);let r=0;for(let p=0;p<Ds.length;p++){if(n===p)continue;const v=Ds[p],y=s.position.distanceTo(v.position);y<Ot.separationDist&&y>1e-4&&(Zi.subVectors(s.position,v.position).divideScalar(y*y),zr.add(Zi)),v.groupId===s.groupId&&y<Ot.perception&&(Or.add(v.velocity),Br.add(v.position),r++)}let o=Ot.maxSpeed;r>0&&(Or.divideScalar(r),kr(Or,s.velocity,o,ti),sn.addScaledVector(ti,Ot.wAlignment),Br.divideScalar(r).sub(s.position),kr(Br,s.velocity,o,ti),sn.addScaledVector(ti,Ot.wCohesion)),zr.lengthSq()>0&&(kr(zr,s.velocity,o,ti),sn.addScaledVector(ti,Ot.wSeparation));let a=null,l=Ot.foodSeekRadius;for(const p of zs){if(p.eaten)continue;const v=s.position.distanceTo(p.position);v<l&&(l=v,a=p)}a&&(o=Ot.maxSpeed*1.5,Zi.subVectors(a.position,s.position),kr(Zi,s.velocity,o,ti),sn.addScaledVector(ti,Ot.wFood),l<Ot.foodEatDistance&&(a.eaten=!0));const c=8,h=s.position;h.x>e&&(sn.x-=c),h.x<-e&&(sn.x+=c),h.z>e&&(sn.z-=c),h.z<-e&&(sn.z+=c),h.y>Ot.waterTop-1&&(sn.y-=c),!a&&h.y<Mn(h.x,h.z)+3&&(sn.y+=c),s.velocity.addScaledVector(sn,i),s.velocity.clampLength(Ot.minSpeed,o),s.position.addScaledVector(s.velocity,i);const u=Mn(h.x,h.z)+.5;h.y<u&&(h.y=u,s.velocity.y<0&&(s.velocity.y=0)),s.mesh.position.copy(h),Zi.copy(h).add(s.velocity),s.mesh.lookAt(Zi);const d=s.mesh.userData.tailPivot;if(d){const p=Math.sin(t*(2.8+s.velocity.length()*.9)+s.tailPhase);d.rotation.y=p*.35}}}const sa=new ip,ra=new ht;let _u=0,vu=0;uo.addEventListener("pointerdown",i=>{_u=i.clientX,vu=i.clientY});uo.addEventListener("pointerup",i=>{if(Math.hypot(i.clientX-_u,i.clientY-vu)>5)return;ra.x=i.clientX/rn.width*2-1,ra.y=-(i.clientY/rn.height)*2+1,sa.setFromCamera(ra,li);const t=new B,e=sa.intersectObject(jh);e.length>0?(t.copy(e[0].point),t.y=Math.min(t.y+12,Ot.waterTop)):(sa.ray.at(18,t),t.y=Math.min(t.y,Ot.waterTop)),lx(t)});const Cl=new wl({title:"Панель керування"}),gs=Cl.addFolder("Вода та атмосфера");gs.add(Ot,"fogDensity",0,.1,.001).name("Густина туману").onChange(i=>ye.fog.density=i);gs.addColor(Ot,"waterColor").name("Колір води").onChange(i=>{ye.background.set(i),ye.fog.color.set(i),$h.uHorizon.value.set(i)});gs.add(Ot,"currentStrength",0,3,.05).name("Сила течії");gs.add(Ot,"godRayIntensity",0,3,.05).name("Промені світла");gs.add(Ot,"causticStrength",0,3,.05).name("Каустика").onChange(i=>Qr.uStrength.value=i);gs.add(ci,"toneMappingExposure",.5,2,.05).name("Експозиція");const xu=Cl.addFolder("Рибки: швидкість");xu.add(Ot,"minSpeed",.2,6,.1).name("Мін. швидкість");xu.add(Ot,"maxSpeed",1,12,.1).name("Макс. швидкість");const mo=Cl.addFolder("Boids: ваги правил");mo.add(Ot,"wSeparation",0,5,.05).name("Розділення");mo.add(Ot,"wAlignment",0,5,.05).name("Вирівнювання");mo.add(Ot,"wCohesion",0,5,.05).name("Зближення");mo.add(Ot,"wFood",0,10,.1).name("Потяг до їжі");window.addEventListener("resize",()=>{rn.width=window.innerWidth,rn.height=window.innerHeight,li.aspect=rn.width/rn.height,li.updateProjectionMatrix(),ci.setSize(rn.width,rn.height),ci.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Kc=new np;function yu(){const i=Math.min(Kc.getDelta(),.05),t=Kc.elapsedTime;cx(i,t),hx(i,t),Ov(t),tx(t),qv(t);for(const e of du)e.rotation.y=Math.PI/2+Math.sin(t*1.2)*.08*Ot.currentStrength,e.rotation.z=Math.cos(t*.9)*.05*Ot.currentStrength;ix(i,t),Jv(t),Uv.update(i,t),Qr.uTime.value=t,Tl.intensity=2.5+Math.sin(t*.8)*.15,fo.position.copy(li.position),ps.update(),ci.render(ye,li),requestAnimationFrame(yu)}yu();
//# sourceMappingURL=index-Cp6oQiVs.js.map
