(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="175",Sm=0,oh=1,Mm=2,_d=1,Tm=2,yi=3,Ci=0,un=1,ln=2,Ki=0,rs=1,lh=2,ch=3,uh=4,Em=5,_r=100,bm=101,Am=102,wm=103,Rm=104,Cm=200,Pm=201,Dm=202,Um=203,tc=204,nc=205,Lm=206,Im=207,Fm=208,Nm=209,Om=210,Bm=211,km=212,Gm=213,zm=214,ic=0,rc=1,sc=2,hs=3,ac=4,oc=5,lc=6,cc=7,vd=0,Vm=1,Hm=2,Zi=0,Wm=1,Xm=2,Ym=3,xd=4,qm=5,jm=6,Km=7,hh="attached",Zm="detached",yd=300,fs=301,ds=302,wo=303,uc=304,zo=306,ps=1e3,ri=1001,Ro=1002,tn=1003,Sd=1004,Js=1005,yt=1006,po=1007,si=1008,Pi=1009,Md=1010,Td=1011,ua=1012,cu=1013,Ar=1014,cn=1015,bi=1016,uu=1017,hu=1018,ha=1020,Ed=35902,bd=1021,Ad=1022,Un=1023,wd=1024,Rd=1025,fa=1026,da=1027,fu=1028,du=1029,Cd=1030,pu=1031,mu=1033,mo=33776,go=33777,_o=33778,vo=33779,hc=35840,fc=35841,dc=35842,pc=35843,mc=36196,gc=37492,_c=37496,vc=37808,xc=37809,yc=37810,Sc=37811,Mc=37812,Tc=37813,Ec=37814,bc=37815,Ac=37816,wc=37817,Rc=37818,Cc=37819,Pc=37820,Dc=37821,xo=36492,Uc=36494,Lc=36495,Pd=36283,Ic=36284,Fc=36285,Nc=36286,pa=2300,ma=2301,al=2302,fh=2400,dh=2401,ph=2402,Jm=2500,Qm=0,Dd=1,Oc=2,$m=3200,Ud=3201,Ld=0,eg=1,Wi="",Nt="srgb",Kt="srgb-linear",Co="linear",lt="srgb",Nr=7680,mh=519,tg=512,ng=513,ig=514,Id=515,rg=516,sg=517,ag=518,og=519,Bc=35044,gh="300 es",Ai=2e3,Po=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _h=1234567;const na=Math.PI/180,ms=180/Math.PI;function Yn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[a&255]+Wt[a>>8&255]+Wt[a>>16&255]+Wt[a>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ze(a,e,t){return Math.max(e,Math.min(t,a))}function gu(a,e){return(a%e+e)%e}function lg(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function cg(a,e,t){return a!==e?(t-a)/(e-a):0}function ia(a,e,t){return(1-t)*a+t*e}function ug(a,e,t,i){return ia(a,e,1-Math.exp(-t*i))}function hg(a,e=1){return e-Math.abs(gu(a,e*2)-e)}function fg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function dg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function pg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function mg(a,e){return a+Math.random()*(e-a)}function gg(a){return a*(.5-Math.random())}function _g(a){a!==void 0&&(_h=a);let e=_h+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vg(a){return a*na}function xg(a){return a*ms}function yg(a){return(a&a-1)===0&&a!==0}function Sg(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Mg(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Tg(a,e,t,i,n){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+i)/2),u=s((e+i)/2),h=r((e-i)/2),f=s((e-i)/2),d=r((i-e)/2),_=s((i-e)/2);switch(n){case"XYX":a.set(o*u,l*h,l*f,o*c);break;case"YZY":a.set(l*f,o*u,l*h,o*c);break;case"ZXZ":a.set(l*h,l*f,o*u,o*c);break;case"XZX":a.set(o*u,l*_,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*_,o*c);break;case"ZYZ":a.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Hn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function at(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Eg={DEG2RAD:na,RAD2DEG:ms,generateUUID:Yn,clamp:Ze,euclideanModulo:gu,mapLinear:lg,inverseLerp:cg,lerp:ia,damp:ug,pingpong:hg,smoothstep:fg,smootherstep:dg,randInt:pg,randFloat:mg,randFloatSpread:gg,seededRandom:_g,degToRad:vg,radToDeg:xg,isPowerOfTwo:yg,ceilPowerOfTwo:Sg,floorPowerOfTwo:Mg,setQuaternionFromProperEuler:Tg,normalize:at,denormalize:Hn};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,n,r,s,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c)}set(e,t,i,n,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=n[0],p=n[3],m=n[6],y=n[1],x=n[4],v=n[7],E=n[2],w=n[5],T=n[8];return r[0]=s*g+o*y+l*E,r[3]=s*p+o*x+l*w,r[6]=s*m+o*v+l*T,r[1]=c*g+u*y+h*E,r[4]=c*p+u*x+h*w,r[7]=c*m+u*v+h*T,r[2]=f*g+d*y+_*E,r[5]=f*p+d*x+_*w,r[8]=f*m+d*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*l+n*r*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*s-o*c,f=o*l-u*r,d=c*r-s*l,_=t*h+i*f+n*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(n*c-u*i)*g,e[2]=(o*i-n*s)*g,e[3]=f*g,e[4]=(u*t-n*l)*g,e[5]=(n*r-o*t)*g,e[6]=d*g,e[7]=(i*l-c*t)*g,e[8]=(s*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new Ye;function Fd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ga(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function bg(){const a=ga("canvas");return a.style.display="block",a}const vh={};function yo(a){a in vh||(vh[a]=!0,console.warn(a))}function Ag(a,e,t){return new Promise(function(i,n){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function wg(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Rg(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cg(){const a={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===lt&&(n.r=wi(n.r),n.g=wi(n.g),n.b=wi(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===lt&&(n.r=ss(n.r),n.g=ss(n.g),n.b=ss(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wi?Co:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Kt]:{primaries:e,whitePoint:i,transfer:Co,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),a}const rt=Cg();function wi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ss(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Or;class Pg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=ga("canvas")),Or.width=e.width,Or.height=e.height;const n=Or.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=wi(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dg=0;class _u{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?r.push(ll(n[s].image)):r.push(ll(n[s]))}else r=ll(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function ll(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Pg.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ug=0;class Rt extends As{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,i=ri,n=ri,r=yt,s=si,o=Un,l=Pi,c=Rt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Yn(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=yd;Rt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,E=(m+1)/2,w=(u+f)/4,T=(h+g)/4,b=(_+p)/4;return x>v&&x>E?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=w/i,r=T/i):v>E?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=w/n,r=b/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=T/r,n=b/r),this.set(i,n,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lg extends As{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Rt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new _u(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends Lg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nd extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=tn,this.minFilter=tn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ig extends Rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=tn,this.minFilter=tn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3];const f=r[s+0],d=r[s+1],_=r[s+2],g=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-o;const m=l*f+c*d+u*_+h*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,m*y);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E}const v=o*y;if(l=l*p+f*v,c=c*p+d*v,u=u*p+_*v,h=h*p+g*v,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,n,r,s){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=r[s],f=r[s+1],d=r[s+2],_=r[s+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),h=o(r/2),f=l(i/2),d=l(n/2),_=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+n*c-r*l,this._y=n*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-n*o,this._w=s*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=s*h+this._w*f,this._x=i*h+this._x*f,this._y=n*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),u=2*(o*t-r*n),h=2*(r*i-s*t);return this.x=t+l*c+s*h-o*u,this.y=i+l*u+o*c-r*h,this.z=n+l*h+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new J,Sh=new tr;class qn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Bn):Bn.fromBufferAttribute(r,s),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ia.copy(i.boundingBox)),Ia.applyMatrix4(e.matrixWorld),this.union(Ia)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Fa.subVectors(this.max,Gs),Br.subVectors(e.a,Gs),kr.subVectors(e.b,Gs),Gr.subVectors(e.c,Gs),Oi.subVectors(kr,Br),Bi.subVectors(Gr,kr),ir.subVectors(Br,Gr);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ir.z,ir.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ir.z,0,-ir.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ir.y,ir.x,0];return!ul(t,Br,kr,Gr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Br,kr,Gr,Fa))?!1:(Na.crossVectors(Oi,Bi),t=[Na.x,Na.y,Na.z],ul(t,Br,kr,Gr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new J,new J,new J,new J,new J,new J,new J,new J],Bn=new J,Ia=new qn,Br=new J,kr=new J,Gr=new J,Oi=new J,Bi=new J,ir=new J,Gs=new J,Fa=new J,Na=new J,rr=new J;function ul(a,e,t,i,n){for(let r=0,s=a.length-3;r<=s;r+=3){rr.fromArray(a,r);const o=n.x*Math.abs(rr.x)+n.y*Math.abs(rr.y)+n.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),u=i.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Fg=new qn,zs=new J,hl=new J;class jn{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fg.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(zs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(hl)),this.expandByPoint(zs.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new J,fl=new J,Oa=new J,ki=new J,dl=new J,Ba=new J,pl=new J;class Vo{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){fl.copy(e).add(t).multiplyScalar(.5),Oa.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(fl);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Oa),o=ki.dot(this.direction),l=-ki.dot(Oa),c=ki.lengthSq(),u=Math.abs(1-s*s);let h,f,d,_;if(u>0)if(h=s*l-o,f=s*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+s*f+2*o)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-s*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(s*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+o)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(fl).addScaledVector(Oa,f),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),n=mi.dot(mi)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,n,r){dl.subVectors(t,e),Ba.subVectors(i,e),pl.crossVectors(dl,Ba);let s=this.direction.dot(pl),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Ba.crossVectors(ki,Ba));if(l<0)return null;const c=o*this.direction.dot(dl.cross(ki));if(c<0||l+c>s)return null;const u=-o*ki.dot(pl);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,n,r,s,o,l,c,u,h,f,d,_,g,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c,u,h,f,d,_,g,p)}set(e,t,i,n,r,s,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),s=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=s*u,d=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=s*c,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-s*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=s*u,t[9]=g-f*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*u,d=s*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,d=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=s*l,d=s*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=s*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ng,e,Og)}lookAt(e,t,i){const n=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Gi.crossVectors(i,vn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Gi.crossVectors(i,vn)),Gi.normalize(),ka.crossVectors(vn,Gi),n[0]=Gi.x,n[4]=ka.x,n[8]=vn.x,n[1]=Gi.y,n[5]=ka.y,n[9]=vn.y,n[2]=Gi.z,n[6]=ka.z,n[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],p=i[10],m=i[14],y=i[3],x=i[7],v=i[11],E=i[15],w=n[0],T=n[4],b=n[8],S=n[12],M=n[1],D=n[5],P=n[9],U=n[13],L=n[2],G=n[6],O=n[10],Y=n[14],H=n[3],j=n[7],X=n[11],F=n[15];return r[0]=s*w+o*M+l*L+c*H,r[4]=s*T+o*D+l*G+c*j,r[8]=s*b+o*P+l*O+c*X,r[12]=s*S+o*U+l*Y+c*F,r[1]=u*w+h*M+f*L+d*H,r[5]=u*T+h*D+f*G+d*j,r[9]=u*b+h*P+f*O+d*X,r[13]=u*S+h*U+f*Y+d*F,r[2]=_*w+g*M+p*L+m*H,r[6]=_*T+g*D+p*G+m*j,r[10]=_*b+g*P+p*O+m*X,r[14]=_*S+g*U+p*Y+m*F,r[3]=y*w+x*M+v*L+E*H,r[7]=y*T+x*D+v*G+E*j,r[11]=y*b+x*P+v*O+E*X,r[15]=y*S+x*U+v*Y+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*h-n*c*h-r*o*f+i*c*f+n*o*d-i*l*d)+g*(+t*l*d-t*c*f+r*s*f-n*s*d+n*c*u-r*l*u)+p*(+t*c*h-t*o*d-r*s*h+i*s*d+r*o*u-i*c*u)+m*(-n*o*u-t*l*h+t*o*f+n*s*h-i*s*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],y=h*p*c-g*f*c+g*l*d-o*p*d-h*l*m+o*f*m,x=_*f*c-u*p*c-_*l*d+s*p*d+u*l*m-s*f*m,v=u*g*c-_*h*c+_*o*d-s*g*d-u*o*m+s*h*m,E=_*h*l-u*g*l-_*o*f+s*g*f+u*o*p-s*h*p,w=t*y+i*x+n*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(g*f*r-h*p*r-g*n*d+i*p*d+h*n*m-i*f*m)*T,e[2]=(o*p*r-g*l*r+g*n*c-i*p*c-o*n*m+i*l*m)*T,e[3]=(h*l*r-o*f*r-h*n*c+i*f*c+o*n*d-i*l*d)*T,e[4]=x*T,e[5]=(u*p*r-_*f*r+_*n*d-t*p*d-u*n*m+t*f*m)*T,e[6]=(_*l*r-s*p*r-_*n*c+t*p*c+s*n*m-t*l*m)*T,e[7]=(s*f*r-u*l*r+u*n*c-t*f*c-s*n*d+t*l*d)*T,e[8]=v*T,e[9]=(_*h*r-u*g*r-_*i*d+t*g*d+u*i*m-t*h*m)*T,e[10]=(s*g*r-_*o*r+_*i*c-t*g*c-s*i*m+t*o*m)*T,e[11]=(u*o*r-s*h*r-u*i*c+t*h*c+s*i*d-t*o*d)*T,e[12]=E*T,e[13]=(u*g*n-_*h*n+_*i*f-t*g*f-u*i*p+t*h*p)*T,e[14]=(_*o*n-s*g*n-_*i*l+t*g*l+s*i*p-t*o*p)*T,e[15]=(s*h*n-u*o*n+u*i*l-t*h*l-s*i*f+t*o*f)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*s,0,c*l-n*o,u*l+n*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,h=o+o,f=r*c,d=r*u,_=r*h,g=s*u,p=s*h,m=o*h,y=l*c,x=l*u,v=l*h,E=i.x,w=i.y,T=i.z;return n[0]=(1-(g+m))*E,n[1]=(d+v)*E,n[2]=(_-x)*E,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(f+m))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(_+x)*T,n[9]=(p-y)*T,n[10]=(1-(f+g))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=zr.set(n[0],n[1],n[2]).length();const s=zr.set(n[4],n[5],n[6]).length(),o=zr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],kn.copy(this);const c=1/r,u=1/s,h=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,n,r,s,o=Ai){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),h=(t+e)/(t-e),f=(i+n)/(i-n);let d,_;if(o===Ai)d=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Po)d=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=Ai){const l=this.elements,c=1/(t-e),u=1/(i-n),h=1/(s-r),f=(t+e)*c,d=(i+n)*u;let _,g;if(o===Ai)_=(s+r)*h,g=-2*h;else if(o===Po)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new J,kn=new qe,Ng=new J(0,0,0),Og=new J(1,1,1),Gi=new J,ka=new J,vn=new J,Mh=new qe,Th=new tr;class hi{constructor(e=0,t=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bg=0;const Eh=new J,Vr=new tr,gi=new qe,Ga=new J,Vs=new J,kg=new J,Gg=new tr,bh=new J(1,0,0),Ah=new J(0,1,0),wh=new J(0,0,1),Rh={type:"added"},zg={type:"removed"},Hr={type:"childadded",child:null},ml={type:"childremoved",child:null};class vt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new J,t=new hi,i=new tr,n=new J(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ga.copy(e):Ga.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Vs,Ga,this.up):gi.lookAt(Ga,Vs,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),Vr.setFromRotationMatrix(gi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zg),ml.child=e,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),h=s(e.shapes),f=s(e.skeletons),d=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=n,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vt.DEFAULT_UP=new J(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new J,_i=new J,gl=new J,vi=new J,Wr=new J,Xr=new J,Ch=new J,_l=new J,vl=new J,xl=new J,yl=new st,Sl=new st,Ml=new st;class Wn{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Gn.subVectors(e,t),n.cross(Gn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Gn.subVectors(n,t),_i.subVectors(i,t),gl.subVectors(e,t);const s=Gn.dot(Gn),o=Gn.dot(_i),l=Gn.dot(gl),c=_i.dot(_i),u=_i.dot(gl),h=s*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(s*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,n,r,s,o,l){return this.getBarycoord(e,t,i,n,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,s){return yl.setScalar(0),Sl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(yl,r.x),s.addScaledVector(Sl,r.y),s.addScaledVector(Ml,r.z),s}static isFrontFacing(e,t,i,n){return Gn.subVectors(i,t),_i.subVectors(e,t),Gn.cross(_i).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let s,o;Wr.subVectors(n,i),Xr.subVectors(r,i),_l.subVectors(e,i);const l=Wr.dot(_l),c=Xr.dot(_l);if(l<=0&&c<=0)return t.copy(i);vl.subVectors(e,n);const u=Wr.dot(vl),h=Xr.dot(vl);if(u>=0&&h<=u)return t.copy(n);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Wr,s);xl.subVectors(e,r);const d=Wr.dot(xl),_=Xr.dot(xl);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Xr,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Ch.subVectors(r,n),o=(h-u)/(h-u+(d-_)),t.copy(n).addScaledVector(Ch,o);const m=1/(p+g+f);return s=g*m,o=f*m,t.copy(i).addScaledVector(Wr,s).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},za={h:0,s:0,l:0};function Tl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=rt.workingColorSpace){if(e=gu(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Tl(s,r,e+1/3),this.g=Tl(s,r,e),this.b=Tl(s,r,e-1/3)}return rt.toWorkingColorSpace(this,n),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=Bd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return rt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Ze(Xt.r*255,0,255))*65536+Math.round(Ze(Xt.g*255,0,255))*256+Math.round(Ze(Xt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Xt.copy(this),t);const i=Xt.r,n=Xt.g,r=Xt.b,s=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const h=s-o;switch(c=u<=.5?h/(s+o):h/(2-s-o),s){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Nt){rt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,i=Xt.g,n=Xt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(za);const i=ia(zi.h,za.h,t),n=ia(zi.s,za.s,t),r=ia(zi.l,za.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Xe;Xe.NAMES=Bd;let Vg=0;class li extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=rs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ai extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ei=Hg();function Hg(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:s,offsetTable:o}}function Wg(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=Ze(a,-65504,65504),Ei.floatView[0]=a;const e=Ei.uint32View[0],t=e>>23&511;return Ei.baseTable[t]+((e&8388607)>>Ei.shiftTable[t])}function Xg(a){const e=a>>10;return Ei.uint32View[0]=Ei.mantissaTable[Ei.offsetTable[e]+(a&1023)]+Ei.exponentTable[e],Ei.floatView[0]}class Va{static toHalfFloat(e){return Wg(e)}static fromHalfFloat(e){return Xg(e)}}const Et=new J,Ha=new Je;let Yg=0;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bc&&(e.usage=this.usage),e}}class kd extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gd extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ri extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let qg=0;const Rn=new qe,El=new vt,Yr=new J,xn=new qn,Hs=new qn,Ft=new J;class Kn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fd(e)?Gd:kd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return El.lookAt(e),El.updateMatrix(),this.applyMatrix4(El.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ri(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(xn.min,Hs.min),xn.expandByPoint(Ft),Ft.addVectors(xn.max,Hs.max),xn.expandByPoint(Ft)):(xn.expandByPoint(Hs.min),xn.expandByPoint(Hs.max))}xn.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ft));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),Ft.add(Yr)),n=Math.max(n,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let b=0;b<i.count;b++)o[b]=new J,l[b]=new J;const c=new J,u=new J,h=new J,f=new Je,d=new Je,_=new Je,g=new J,p=new J;function m(b,S,M){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),o[b].add(g),o[S].add(g),o[M].add(g),l[b].add(p),l[S].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let b=0,S=y.length;b<S;++b){const M=y[b],D=M.start,P=M.count;for(let U=D,L=D+P;U<L;U+=3)m(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new J,v=new J,E=new J,w=new J;function T(b){E.fromBufferAttribute(n,b),w.copy(E);const S=o[b];x.copy(S),x.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const D=v.dot(l[b])<0?-1:1;s.setXYZW(b,x.x,x.y,x.z,D)}for(let b=0,S=y.length;b<S;++b){const M=y[b],D=M.start,P=M.count;for(let U=D,L=D+P;U<L;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new J,r=new J,s=new J,o=new J,l=new J,c=new J,u=new J,h=new J;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,r),h.subVectors(n,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new nn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kn,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new qe,sr=new Vo,Wa=new jn,Dh=new J,Xa=new J,Ya=new J,qa=new J,bl=new J,ja=new J,Uh=new J,Ka=new J;class wt extends vt{constructor(e=new Kn,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(bl.fromBufferAttribute(h,e),s?ja.addScaledVector(bl,u):ja.addScaledVector(bl.sub(t),u))}t.add(ja)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),sr.copy(e.ray).recast(e.near),!(Wa.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Wa,Dh)===null||sr.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Ph.copy(r).invert(),sr.copy(e.ray).applyMatrix4(Ph),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=s[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){const w=o.getX(v),T=o.getX(v+1),b=o.getX(v+2);n=Za(this,m,e,i,c,u,h,w,T,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=o.getX(p),x=o.getX(p+1),v=o.getX(p+2);n=Za(this,s,e,i,c,u,h,y,x,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=s[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){const w=v,T=v+1,b=v+2;n=Za(this,m,e,i,c,u,h,w,T,b),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,v=p+2;n=Za(this,s,e,i,c,u,h,y,x,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function jg(a,e,t,i,n,r,s,o){let l;if(e.side===un?l=i.intersectTriangle(s,r,n,!0,o):l=i.intersectTriangle(n,r,s,e.side===Ci,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:a}}function Za(a,e,t,i,n,r,s,o,l,c){a.getVertexPosition(o,Xa),a.getVertexPosition(l,Ya),a.getVertexPosition(c,qa);const u=jg(a,e,t,i,Xa,Ya,qa,Uh);if(u){const h=new J;Wn.getBarycoord(Uh,Xa,Ya,qa,h),n&&(u.uv=Wn.getInterpolatedAttribute(n,o,l,c,h,new Je)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,o,l,c,h,new Je)),s&&(u.normal=Wn.getInterpolatedAttribute(s,o,l,c,h,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new J,materialIndex:0};Wn.getNormal(Xa,Ya,qa,f.normal),u.face=f,u.barycoord=h}return u}class ba extends Kn{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};const o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,s,r,0),_("z","y","x",1,-1,i,t,-e,s,r,1),_("x","z","y",1,1,e,i,t,n,s,2),_("x","z","y",1,-1,e,i,-t,n,s,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ri(c,3)),this.setAttribute("normal",new Ri(u,3)),this.setAttribute("uv",new Ri(h,2));function _(g,p,m,y,x,v,E,w,T,b,S){const M=v/T,D=E/b,P=v/2,U=E/2,L=w/2,G=T+1,O=b+1;let Y=0,H=0;const j=new J;for(let X=0;X<O;X++){const F=X*D-U;for(let V=0;V<G;V++){const Q=V*M-P;j[g]=Q*y,j[p]=F*x,j[m]=L,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[m]=w>0?1:-1,u.push(j.x,j.y,j.z),h.push(V/T),h.push(1-X/b),Y+=1}}for(let X=0;X<b;X++)for(let F=0;F<T;F++){const V=f+F+G*X,Q=f+F+G*(X+1),N=f+(F+1)+G*(X+1),k=f+(F+1)+G*X;l.push(V,Q,k),l.push(Q,N,k),H+=6}o.addGroup(d,H,S),d+=H,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Qt(a){const e={};for(let t=0;t<a.length;t++){const i=gs(a[t]);for(const n in i)e[n]=i[n]}return e}function Kg(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function zd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Vd={clone:gs,merge:Qt};var Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=Kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hd extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new J,Lh=new Je,Ih=new Je;class $t extends Hd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,Lh,Ih),t.subVectors(Ih,Lh)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,jr=1;class Qg extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new $t(qr,jr,e,t);n.layers=this.layers,this.add(n);const r=new $t(qr,jr,e,t);r.layers=this.layers,this.add(r);const s=new $t(qr,jr,e,t);s.layers=this.layers,this.add(s);const o=new $t(qr,jr,e,t);o.layers=this.layers,this.add(o);const l=new $t(qr,jr,e,t);l.layers=this.layers,this.add(l);const c=new $t(qr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wd extends Rt{constructor(e=[],t=fs,i,n,r,s,o,l,c,u){super(e,t,i,n,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $g extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Wd(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ba(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ki});r.uniforms.tEquirect.value=t;const s=new wt(n,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=yt),new Qg(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}class xr extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e_={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class t_ extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class n_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new J;class vu{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fh=new J,Nh=new st,Oh=new st,i_=new J,Bh=new qe,Ja=new J,wl=new jn,kh=new qe,Rl=new Vo;class r_ extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ja),this.boundingBox.expandByPoint(Ja)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ja),this.boundingSphere.expandByPoint(Ja)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(n),e.ray.intersectsSphere(wl)!==!1&&(kh.copy(n).invert(),Rl.copy(e.ray).applyMatrix4(kh),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Nh.fromBufferAttribute(n.attributes.skinIndex,e),Oh.fromBufferAttribute(n.attributes.skinWeight,e),Fh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Oh.getComponent(r);if(s!==0){const o=Nh.getComponent(r);Bh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(i_.copy(Fh).applyMatrix4(Bh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xd extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xu extends Rt{constructor(e=null,t=1,i=1,n,r,s,o,l,c=tn,u=tn,h,f){super(null,s,o,l,c,u,n,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gh=new qe,s_=new qe;class yu{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:s_;Gh.multiplyMatrices(o,t[r]),Gh.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new yu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new xu(t,e,e,Un,cn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Xd),this.bones.push(s),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const s=t[n];e.bones.push(s.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Do extends nn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Kr=new qe,zh=new qe,Qa=[],Vh=new qn,a_=new qe,Ws=new wt,Xs=new jn;class o_ extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,a_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),Vh.copy(e.boundingBox).applyMatrix4(Kr),this.boundingBox.union(Vh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kr),Xs.copy(e.boundingSphere).applyMatrix4(Kr),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Kr),zh.multiplyMatrices(i,Kr),Ws.matrixWorld=zh,Ws.raycast(e,Qa);for(let s=0,o=Qa.length;s<o;s++){const l=Qa[s];l.instanceId=r,l.object=this,t.push(l)}Qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new xu(new Float32Array(n*this.count),n,this.count,fu,cn));const r=this.morphTexture.source.data.data;let s=0;for(let c=0;c<i.length;c++)s+=i[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cl=new J,l_=new J,c_=new Ye;class pr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Cl.subVectors(i,t).cross(l_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cl),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||c_.getNormalMatrix(e),n=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new jn,$a=new J;class Su{constructor(e=new pr,t=new pr,i=new pr,n=new pr,r=new pr,s=new pr){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],h=n[6],f=n[7],d=n[8],_=n[9],g=n[10],p=n[11],m=n[12],y=n[13],x=n[14],v=n[15];if(i[0].setComponents(l-r,f-c,p-d,v-m).normalize(),i[1].setComponents(l+r,f+c,p+d,v+m).normalize(),i[2].setComponents(l+s,f+u,p+_,v+y).normalize(),i[3].setComponents(l-s,f-u,p-_,v-y).normalize(),i[4].setComponents(l-o,f-h,p-g,v-x).normalize(),t===Ai)i[5].setComponents(l+o,f+h,p+g,v+x).normalize();else if(t===Po)i[5].setComponents(o,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if($a.x=n.normal.x>0?e.max.x:e.min.x,$a.y=n.normal.y>0?e.max.y:e.min.y,$a.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yd extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new J,Lo=new J,Hh=new qe,Ys=new Vo,eo=new jn,Pl=new J,Wh=new J;class Mu extends vt{constructor(e=new Kn,t=new Yd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Uo.fromBufferAttribute(t,n-1),Lo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Uo.distanceTo(Lo);e.setAttribute("lineDistance",new Ri(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(n),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;Hh.copy(n).invert(),Ys.copy(e.ray).applyMatrix4(Hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),y=u.getX(g+1),x=to(this,e,Ys,l,m,y,g);x&&t.push(x)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=to(this,e,Ys,l,g,p,_-1);m&&t.push(m)}}else{const d=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let g=d,p=_-1;g<p;g+=c){const m=to(this,e,Ys,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=to(this,e,Ys,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function to(a,e,t,i,n,r,s){const o=a.geometry.attributes.position;if(Uo.fromBufferAttribute(o,n),Lo.fromBufferAttribute(o,r),t.distanceSqToSegment(Uo,Lo,Pl,Wh)>i)return;Pl.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Pl);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}const Xh=new J,Yh=new J;class u_ extends Mu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Xh.fromBufferAttribute(t,n),Yh.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Xh.distanceTo(Yh);e.setAttribute("lineDistance",new Ri(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h_ extends Mu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qd extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qh=new qe,kc=new Vo,no=new jn,io=new J;class f_ extends vt{constructor(e=new Kn,t=new qd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(n),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;qh.copy(n).invert(),kc.copy(e.ray).applyMatrix4(qh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);io.fromBufferAttribute(h,p),jh(io,p,l,n,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let _=f,g=d;_<g;_++)io.fromBufferAttribute(h,_),jh(io,_,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jh(a,e,t,i,n,r,s){const o=kc.distanceSqToPoint(a);if(o<t){const l=new J;kc.closestPointToPoint(a,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class d_ extends Rt{constructor(e,t,i,n,r=yt,s=yt,o,l,c){super(e,t,i,n,r,s,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class jd extends Rt{constructor(e,t,i=Ar,n,r,s,o=tn,l=tn,c,u=fa){if(u!==fa&&u!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,n,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _u(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xn extends Kn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*f-s;for(let x=0;x<c;x++){const v=x*h-r;_.push(v,-y,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,v=y+c*(m+1),E=y+1+c*(m+1),w=y+1+c*m;d.push(x,v,w),d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new Ri(_,3)),this.setAttribute("normal",new Ri(g,3)),this.setAttribute("uv",new Ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.widthSegments,e.heightSegments)}}class _a extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends _a{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kd extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zd extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ro(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function p_(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function m_(a){function e(n,r){return a[n]-a[r]}const t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Kh(a,e,t){const i=a.length,n=new a.constructor(i);for(let r=0,s=0;s!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[s++]=a[o+l]}return n}function Jd(a,e,t,i){let n=1,r=a[0];for(;r!==void 0&&r[i]===void 0;)r=a[n++];if(r===void 0)return;let s=r[i];if(s!==void 0)if(Array.isArray(s))do s=r[i],s!==void 0&&(e.push(r.time),t.push(...s)),r=a[n++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[i],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[n++];while(r!==void 0);else do s=r[i],s!==void 0&&(e.push(r.time),t.push(s)),r=a[n++];while(r!==void 0)}class Aa{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break n}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class g_ extends Aa{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fh,endingEnd:fh}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,o=n[r],l=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case dh:r=e,o=2*t-i;break;case ph:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dh:s=e,l=2*i-t;break;case ph:s=1,l=i+n[1]-n[0];break;default:s=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(i-t)/(n-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,y=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*p+(1.5+d)*g+.5*_,v=d*p-d*g;for(let E=0;E!==o;++E)r[E]=m*s[u+E]+y*s[c+E]+x*s[l+E]+v*s[h+E];return r}}class __ extends Aa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),h=1-u;for(let f=0;f!==o;++f)r[f]=s[c+f]*h+s[l+f]*u;return r}}class v_ extends Aa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zn{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ro(t,this.TimeBufferType),this.values=ro(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ro(e.times,Array),values:ro(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new v_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new __(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new g_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case ma:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(n!==void 0&&p_(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===al,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{const h=o*i,f=h-i,d=h+i;for(let _=0;_!==i;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const h=o*i,f=s*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=ma;class ws extends Zn{constructor(e,t,i){super(e,t,i)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=pa;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Qd extends Zn{constructor(e,t,i,n){super(e,t,i,n)}}Qd.prototype.ValueTypeName="color";class _s extends Zn{constructor(e,t,i,n){super(e,t,i,n)}}_s.prototype.ValueTypeName="number";class x_ extends Aa{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let u=c+o;c!==u;c+=4)tr.slerpFlat(r,0,s,c-o,s,c,l);return r}}class vs extends Zn{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new x_(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Zn{constructor(e,t,i){super(e,t,i)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=pa;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Zn{constructor(e,t,i,n){super(e,t,i,n)}}xs.prototype.ValueTypeName="vector";class y_{constructor(e="",t=-1,i=[],n=Jm){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(M_(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=i.length;r!==s;++r)t.push(Zn.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=m_(l);l=Kh(l,1,u),c=Kh(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new _s(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=n[h];f||(n[h]=f=[]),f.push(c)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];Jd(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},n=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let y=0;y!==f[_].morphTargets.length;++y){const x=f[_];p.push(x.time),m.push(x.morphTarget===g?1:0)}n.push(new _s(".morphTargetInfluence["+g+"]",p,m))}l=d.length*s}else{const d=".bones["+t[h].name+"]";i(xs,d+".position",f,"pos",n),i(vs,d+".quaternion",f,"rot",n),i(xs,d+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function S_(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return Qd;case"quaternion":return vs;case"bool":case"boolean":return ws;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function M_(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=S_(a.type);if(a.times===void 0){const t=[],i=[];Jd(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Xi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class $d{constructor(e,t,i){const n=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const T_=new $d;class Pr{constructor(e){this.manager=e!==void 0?e:T_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class E_ extends Error{constructor(e,t){super(e),this.response=t}}class Tu extends Pr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Xi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:i,onError:n});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){h.read().then(({done:x,value:v})=>{if(x)m.close();else{g+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,T=u.length;w<T;w++){const b=u[w];b.onProgress&&b.onProgress(E)}m.enqueue(v),y()}},x=>{m.error(x)})}}});return new Response(p)}else throw new E_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Xi.add(e,c);const u=xi[e];delete xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class b_ extends Pr{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=ga("img");function l(){u(),Xi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),n&&n(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class A_ extends Pr{constructor(e){super(e)}load(e,t,i,n){const r=this,s=new xu,o=new Tu(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(n!==void 0)n(u);else{console.error(u);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:ri,s.wrapT=c.wrapT!==void 0?c.wrapT:ri,s.magFilter=c.magFilter!==void 0?c.magFilter:yt,s.minFilter=c.minFilter!==void 0?c.minFilter:yt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=si),c.mipmapCount===1&&(s.minFilter=yt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},i,n),s}}class ep extends Pr{constructor(e){super(e)}load(e,t,i,n){const r=new Rt,s=new b_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Eu extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Dl=new qe,Zh=new J,Jh=new J;class bu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Su,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class w_ extends bu{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ms*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class R_ extends Eu{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new w_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qh=new qe,qs=new J,Ul=new J;class C_ extends bu{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),i.position.copy(qs),Ul.copy(i.position),Ul.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ul),i.updateMatrixWorld(),n.makeTranslation(-qs.x,-qs.y,-qs.z),Qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh)}}class P_ extends Eu{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new C_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ho extends Hd{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class D_ extends bu{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U_ extends Eu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new D_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ra{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class L_ extends Kn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class I_ extends Pr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Xi.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Xi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Xi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(e,l),r.manager.itemStart(e)}}class F_ extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Au="\\[\\]\\.:\\/",N_=new RegExp("["+Au+"]","g"),wu="[^"+Au+"]",O_="[^"+Au.replace("\\.","")+"]",B_=/((?:WC+[\/:])*)/.source.replace("WC",wu),k_=/(WCOD+)?/.source.replace("WCOD",O_),G_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),V_=new RegExp("^"+B_+k_+G_+z_+"$"),H_=["material","materials","bones","map"];class W_{constructor(e,t,i){const n=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(e){const t=V_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);H_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[n];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=W_;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function $h(a,e,t,i){const n=X_(i);switch(t){case bd:return a*e;case wd:return a*e;case Rd:return a*e*2;case fu:return a*e/n.components*n.byteLength;case du:return a*e/n.components*n.byteLength;case Cd:return a*e*2/n.components*n.byteLength;case pu:return a*e*2/n.components*n.byteLength;case Ad:return a*e*3/n.components*n.byteLength;case Un:return a*e*4/n.components*n.byteLength;case mu:return a*e*4/n.components*n.byteLength;case mo:case go:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case _o:case vo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case fc:case pc:return Math.max(a,16)*Math.max(e,8)/4;case hc:case dc:return Math.max(a,8)*Math.max(e,8)/2;case mc:case gc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case _c:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case xo:case Uc:case Lc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Pd:case Ic:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Fc:case Nc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X_(a){switch(a){case Pi:case Md:return{byteLength:1,components:1};case ua:case Td:case bi:return{byteLength:2,components:1};case uu:case hu:return{byteLength:2,components:4};case Ar:case cu:case cn:return{byteLength:4,components:1};case Ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tp(){let a=null,e=!1,t=null,i=null;function n(r,s){t(r,s),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Y_(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=a.createBuffer();a.bindBuffer(l,f),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(a.bindBuffer(c,o),h.length===0)a.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];a.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:s}}var q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$_=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`struct PhysicalMaterial {
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
}`,Y0=`
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nv=`#if defined( USE_POINTS_UV )
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
#endif`,iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`#ifdef USE_MORPHTARGETS
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
#endif`,cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mv=`#ifdef USE_NORMALMAP
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
#endif`,gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dv=`float getShadowMask() {
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
}`,Uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,Nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gv=`#ifdef USE_TRANSMISSION
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
#endif`,zv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qv=`uniform sampler2D t2D;
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
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
}`,$v=`#if DEPTH_PACKING == 3200
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
}`,ex=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,ux=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,fx=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,px=`#define PHONG
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
}`,mx=`#define PHONG
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
}`,gx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,xx=`#define TOON
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
}`,yx=`uniform float size;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:q_,alphahash_pars_fragment:j_,alphamap_fragment:K_,alphamap_pars_fragment:Z_,alphatest_fragment:J_,alphatest_pars_fragment:Q_,aomap_fragment:$_,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:r0,bsdfs:s0,iridescence_fragment:a0,bumpmap_pars_fragment:o0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:h0,color_fragment:f0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:v0,displacementmap_pars_vertex:x0,displacementmap_vertex:y0,emissivemap_fragment:S0,emissivemap_pars_fragment:M0,colorspace_fragment:T0,colorspace_pars_fragment:E0,envmap_fragment:b0,envmap_common_pars_fragment:A0,envmap_pars_fragment:w0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:k0,envmap_vertex:C0,fog_vertex:P0,fog_pars_vertex:D0,fog_fragment:U0,fog_pars_fragment:L0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:F0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:G0,lights_toon_pars_fragment:z0,lights_phong_fragment:V0,lights_phong_pars_fragment:H0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:Y0,lights_fragment_maps:q0,lights_fragment_end:j0,logdepthbuf_fragment:K0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:Q0,map_fragment:$0,map_pars_fragment:ev,map_particle_fragment:tv,map_particle_pars_fragment:nv,metalnessmap_fragment:iv,metalnessmap_pars_fragment:rv,morphinstance_vertex:sv,morphcolor_vertex:av,morphnormal_vertex:ov,morphtarget_pars_vertex:lv,morphtarget_vertex:cv,normal_fragment_begin:uv,normal_fragment_maps:hv,normal_pars_fragment:fv,normal_pars_vertex:dv,normal_vertex:pv,normalmap_pars_fragment:mv,clearcoat_normal_fragment_begin:gv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:vv,iridescence_pars_fragment:xv,opaque_fragment:yv,packing:Sv,premultiplied_alpha_fragment:Mv,project_vertex:Tv,dithering_fragment:Ev,dithering_pars_fragment:bv,roughnessmap_fragment:Av,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Rv,shadowmap_pars_vertex:Cv,shadowmap_vertex:Pv,shadowmask_pars_fragment:Dv,skinbase_vertex:Uv,skinning_pars_vertex:Lv,skinning_vertex:Iv,skinnormal_vertex:Fv,specularmap_fragment:Nv,specularmap_pars_fragment:Ov,tonemapping_fragment:Bv,tonemapping_pars_fragment:kv,transmission_fragment:Gv,transmission_pars_fragment:zv,uv_pars_fragment:Vv,uv_pars_vertex:Hv,uv_vertex:Wv,worldpos_vertex:Xv,background_vert:Yv,background_frag:qv,backgroundCube_vert:jv,backgroundCube_frag:Kv,cube_vert:Zv,cube_frag:Jv,depth_vert:Qv,depth_frag:$v,distanceRGBA_vert:ex,distanceRGBA_frag:tx,equirect_vert:nx,equirect_frag:ix,linedashed_vert:rx,linedashed_frag:sx,meshbasic_vert:ax,meshbasic_frag:ox,meshlambert_vert:lx,meshlambert_frag:cx,meshmatcap_vert:ux,meshmatcap_frag:hx,meshnormal_vert:fx,meshnormal_frag:dx,meshphong_vert:px,meshphong_frag:mx,meshphysical_vert:gx,meshphysical_frag:_x,meshtoon_vert:vx,meshtoon_frag:xx,points_vert:yx,points_frag:Sx,shadow_vert:Mx,shadow_frag:Tx,sprite_vert:Ex,sprite_frag:bx},Ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ni={basic:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Qt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Qt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Qt([Ce.points,Ce.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Qt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Qt([Ce.common,Ce.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Qt([Ce.sprite,Ce.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Qt([Ce.common,Ce.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Qt([Ce.lights,Ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ni.physical={uniforms:Qt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const so={r:0,b:0,g:0},or=new hi,Ax=new qe;function wx(a,e,t,i,n,r,s){const o=new Xe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function g(x){let v=!1;const E=_(x);E===null?m(o,l):E&&E.isColor&&(m(E,1),v=!0);const w=a.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(a.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===zo)?(u===void 0&&(u=new wt(new ba(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:gs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),or.copy(v.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(or)),u.material.toneMapped=rt.getTransfer(E.colorSpace)!==lt,(h!==E||f!==E.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=a.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new wt(new Xn(2,2),new Di({name:"BackgroundMaterial",uniforms:gs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(so,zd(a)),i.buffers.color.setClear(so.r,so.g,so.b,v,s)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:g,addToRenderList:p,dispose:y}}function Rx(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,s=!1;function o(M,D,P,U,L){let G=!1;const O=h(U,P,D);r!==O&&(r=O,c(r.object)),G=d(M,U,P,L),G&&_(M,U,P,L),L!==null&&e.update(L,a.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,v(M,D,P,U),L!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return a.createVertexArray()}function c(M){return a.bindVertexArray(M)}function u(M){return a.deleteVertexArray(M)}function h(M,D,P){const U=P.wireframe===!0;let L=i[M.id];L===void 0&&(L={},i[M.id]=L);let G=L[D.id];G===void 0&&(G={},L[D.id]=G);let O=G[U];return O===void 0&&(O=f(l()),G[U]=O),O}function f(M){const D=[],P=[],U=[];for(let L=0;L<t;L++)D[L]=0,P[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,D,P,U){const L=r.attributes,G=D.attributes;let O=0;const Y=P.getAttributes();for(const H in Y)if(Y[H].location>=0){const X=L[H];let F=G[H];if(F===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),X===void 0||X.attribute!==F||F&&X.data!==F.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function _(M,D,P,U){const L={},G=D.attributes;let O=0;const Y=P.getAttributes();for(const H in Y)if(Y[H].location>=0){let X=G[H];X===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(X=M.instanceColor));const F={};F.attribute=X,X&&X.data&&(F.data=X.data),L[H]=F,O++}r.attributes=L,r.attributesNum=O,r.index=U}function g(){const M=r.newAttributes;for(let D=0,P=M.length;D<P;D++)M[D]=0}function p(M){m(M,0)}function m(M,D){const P=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;P[M]=1,U[M]===0&&(a.enableVertexAttribArray(M),U[M]=1),L[M]!==D&&(a.vertexAttribDivisor(M,D),L[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let P=0,U=D.length;P<U;P++)D[P]!==M[P]&&(a.disableVertexAttribArray(P),D[P]=0)}function x(M,D,P,U,L,G,O){O===!0?a.vertexAttribIPointer(M,D,P,L,G):a.vertexAttribPointer(M,D,P,U,L,G)}function v(M,D,P,U){g();const L=U.attributes,G=P.getAttributes(),O=D.defaultAttributeValues;for(const Y in G){const H=G[Y];if(H.location>=0){let j=L[Y];if(j===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const X=j.normalized,F=j.itemSize,V=e.get(j);if(V===void 0)continue;const Q=V.buffer,N=V.type,k=V.bytesPerElement,ne=N===a.INT||N===a.UNSIGNED_INT||j.gpuType===cu;if(j.isInterleavedBufferAttribute){const q=j.data,ie=q.stride,xe=j.offset;if(q.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e,q.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let _e=0;_e<H.locationSize;_e++)x(H.location+_e,F/H.locationSize,N,X,ie*k,(xe+F/H.locationSize*_e)*k,ne)}else{if(j.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)m(H.location+q,j.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let q=0;q<H.locationSize;q++)p(H.location+q);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let q=0;q<H.locationSize;q++)x(H.location+q,F/H.locationSize,N,X,F*k,F/H.locationSize*q*k,ne)}}else if(O!==void 0){const X=O[Y];if(X!==void 0)switch(X.length){case 2:a.vertexAttrib2fv(H.location,X);break;case 3:a.vertexAttrib3fv(H.location,X);break;case 4:a.vertexAttrib4fv(H.location,X);break;default:a.vertexAttrib1fv(H.location,X)}}}}y()}function E(){b();for(const M in i){const D=i[M];for(const P in D){const U=D[P];for(const L in U)u(U[L].object),delete U[L];delete D[P]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const P in D){const U=D[P];for(const L in U)u(U[L].object),delete U[L];delete D[P]}delete i[M.id]}function T(M){for(const D in i){const P=i[D];if(P[M.id]===void 0)continue;const U=P[M.id];for(const L in U)u(U[L].object),delete U[L];delete P[M.id]}}function b(){S(),s=!0,r!==n&&(r=n,c(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:b,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function Cx(a,e,t){let i;function n(c){i=c}function r(c,u){a.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,h){h!==0&&(a.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)s(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,i,1)}}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Px(a,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==Un&&i.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const b=T===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Pi&&i.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!b)}function l(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),y=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),x=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function Dx(a){const e=this;let t=null,i=0,n=!1,r=!1;const s=new pr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=a.get(h);if(!n||_===null||_.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,x=y*4;let v=m.clippingState||null;l.value=v,v=u(_,f,x,d);for(let E=0;E!==x;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,v=d;x!==g;++x,v+=4)s.copy(h[x]).applyMatrix4(y,o),s.normal.toArray(p,v),p[v+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Ux(a){let e=new WeakMap;function t(s,o){return o===wo?s.mapping=fs:o===uc&&(s.mapping=ds),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===wo||o===uc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new $g(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ts=4,ef=[.125,.215,.35,.446,.526,.582],vr=20,Ll=new Ho,tf=new Xe;let Il=null,Fl=0,Nl=0,Ol=!1;const mr=(1+Math.sqrt(5))/2,Zr=1/mr,nf=[new J(-mr,Zr,0),new J(mr,Zr,0),new J(-Zr,0,mr),new J(Zr,0,mr),new J(0,mr,-Zr),new J(0,mr,Zr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],Lx=new J;class rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:o=Lx}=r;Il=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Fl,Nl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:bi,format:Un,colorSpace:Kt,depthBuffer:!1},n=sf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Fx(r,e,t)}return n}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ll)}_sceneToCubeUV(e,t,i,n,r){const l=new $t(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(tf),h.toneMapping=Zi,h.autoClear=!1;const _=new ai({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new wt(new ba,_);let p=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(tf),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const v=this._cubeSize;ao(n,x*v,y>2?v:0,v,v),h.setRenderTarget(n),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===fs||e.mapping===ds;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const r=n?this._cubemapMaterial:this._equirectMaterial,s=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ll)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nf[(n-r-1)%nf.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wt(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vr-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):vr;p>vr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vr}`);const m=[];let y=0;for(let T=0;T<vr;++T){const b=T/g,S=Math.exp(-b*b/2);m.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const v=this._sizeLods[n],E=3*v*(n>x-ts?n-x+ts:0),w=4*(this._cubeSize-v);ao(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Ll)}}function Ix(a){const e=[],t=[],i=[];let n=a;const r=a-ts+1+ef.length;for(let s=0;s<r;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-ts?l=ef[s-a+ts-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*d),x=new Float32Array(p*_*d),v=new Float32Array(m*_*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,b=w>2?0:-1,S=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];y.set(S,g*_*w),x.set(f,p*_*w);const M=[w,w,w,w,w,w];v.set(M,m*_*w)}const E=new Kn;E.setAttribute("position",new nn(y,g)),E.setAttribute("uv",new nn(x,p)),E.setAttribute("faceIndex",new nn(v,m)),e.push(E),n>ts&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function sf(a,e,t){const i=new wr(a,e,t);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ao(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function Fx(a,e,t){const i=new Float32Array(vr),n=new J(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function af(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function of(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function Nx(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===wo||l===uc,u=l===fs||l===ds;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new rf(a)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new rf(a)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Ox(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Bx(a,e,t,i){const n={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",s),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return n[f.id]===!0||(f.addEventListener("dispose",s),n[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],a.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],w=y[x+1],T=y[x+2];f.push(E,w,w,T,T,E)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,w=x+1,T=x+2;f.push(E,w,w,T,T,E)}}else return;const p=new(Fd(f)?Gd:kd)(f,1);p.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function kx(a,e,t){let i;function n(f){i=f}let r,s;function o(f){r=f.type,s=f.bytesPerElement}function l(f,d){a.drawElements(i,d,r,f*s),t.update(d,i,1)}function c(f,d,_){_!==0&&(a.drawElementsInstanced(i,d,r,f*s,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,i,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/s,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=d[y]*g[y];t.update(m,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Gx(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function zx(a,e,t){const i=new WeakMap,n=new st;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let M=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let E=o.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*w*4*h),b=new Nd(T,E,w,h);b.type=cn,b.needsUpdate=!0;const S=v*4;for(let D=0;D<h;D++){const P=m[D],U=y[D],L=x[D],G=E*w*4*D;for(let O=0;O<P.count;O++){const Y=O*S;_===!0&&(n.fromBufferAttribute(P,O),T[G+Y+0]=n.x,T[G+Y+1]=n.y,T[G+Y+2]=n.z,T[G+Y+3]=0),g===!0&&(n.fromBufferAttribute(U,O),T[G+Y+4]=n.x,T[G+Y+5]=n.y,T[G+Y+6]=n.z,T[G+Y+7]=0),p===!0&&(n.fromBufferAttribute(L,O),T[G+Y+8]=n.x,T[G+Y+9]=n.y,T[G+Y+10]=n.z,T[G+Y+11]=L.itemSize===4?n.w:1)}}f={count:h,texture:b,size:new Je(E,w)},i.set(o,f),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(a,"morphTargetBaseInfluence",g),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:r}}function Vx(a,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return h}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const np=new Rt,lf=new jd(1,1),ip=new Nd,rp=new Ig,sp=new Wd,cf=[],uf=[],hf=new Float32Array(16),ff=new Float32Array(9),df=new Float32Array(4);function Cs(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let r=cf[n];if(r===void 0&&(r=new Float32Array(n),cf[n]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Pt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Dt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Wo(a,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Hx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Wx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2fv(this.addr,e),Dt(t,e)}}function Xx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;a.uniform3fv(this.addr,e),Dt(t,e)}}function Yx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4fv(this.addr,e),Dt(t,e)}}function qx(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;df.set(i),a.uniformMatrix2fv(this.addr,!1,df),Dt(t,i)}}function jx(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;ff.set(i),a.uniformMatrix3fv(this.addr,!1,ff),Dt(t,i)}}function Kx(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;hf.set(i),a.uniformMatrix4fv(this.addr,!1,hf),Dt(t,i)}}function Zx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Jx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2iv(this.addr,e),Dt(t,e)}}function Qx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;a.uniform3iv(this.addr,e),Dt(t,e)}}function $x(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4iv(this.addr,e),Dt(t,e)}}function ey(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function ty(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2uiv(this.addr,e),Dt(t,e)}}function ny(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;a.uniform3uiv(this.addr,e),Dt(t,e)}}function iy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4uiv(this.addr,e),Dt(t,e)}}function ry(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let r;this.type===a.SAMPLER_2D_SHADOW?(lf.compareFunction=Id,r=lf):r=np,t.setTexture2D(e||r,n)}function sy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||rp,n)}function ay(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||sp,n)}function oy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||ip,n)}function ly(a){switch(a){case 5126:return Hx;case 35664:return Wx;case 35665:return Xx;case 35666:return Yx;case 35674:return qx;case 35675:return jx;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return $x;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function cy(a,e){a.uniform1fv(this.addr,e)}function uy(a,e){const t=Cs(e,this.size,2);a.uniform2fv(this.addr,t)}function hy(a,e){const t=Cs(e,this.size,3);a.uniform3fv(this.addr,t)}function fy(a,e){const t=Cs(e,this.size,4);a.uniform4fv(this.addr,t)}function dy(a,e){const t=Cs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function py(a,e){const t=Cs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function my(a,e){const t=Cs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function gy(a,e){a.uniform1iv(this.addr,e)}function _y(a,e){a.uniform2iv(this.addr,e)}function vy(a,e){a.uniform3iv(this.addr,e)}function xy(a,e){a.uniform4iv(this.addr,e)}function yy(a,e){a.uniform1uiv(this.addr,e)}function Sy(a,e){a.uniform2uiv(this.addr,e)}function My(a,e){a.uniform3uiv(this.addr,e)}function Ty(a,e){a.uniform4uiv(this.addr,e)}function Ey(a,e,t){const i=this.cache,n=e.length,r=Wo(t,n);Pt(i,r)||(a.uniform1iv(this.addr,r),Dt(i,r));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||np,r[s])}function by(a,e,t){const i=this.cache,n=e.length,r=Wo(t,n);Pt(i,r)||(a.uniform1iv(this.addr,r),Dt(i,r));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||rp,r[s])}function Ay(a,e,t){const i=this.cache,n=e.length,r=Wo(t,n);Pt(i,r)||(a.uniform1iv(this.addr,r),Dt(i,r));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||sp,r[s])}function wy(a,e,t){const i=this.cache,n=e.length,r=Wo(t,n);Pt(i,r)||(a.uniform1iv(this.addr,r),Dt(i,r));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||ip,r[s])}function Ry(a){switch(a){case 5126:return cy;case 35664:return uy;case 35665:return hy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return vy;case 35669:case 35673:return xy;case 5125:return yy;case 36294:return Sy;case 36295:return My;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return wy}}class Cy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ly(t.type)}}class Py{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ry(t.type)}}class Dy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function pf(a,e){a.seq.push(e),a.map[e.id]=e}function Uy(a,e,t){const i=a.name,n=i.length;for(Bl.lastIndex=0;;){const r=Bl.exec(i),s=Bl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){pf(t,c===void 0?new Cy(o,a,e):new Py(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Dy(o),pf(t,h)),t=h}}}class So{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),s=e.getUniformLocation(t,r.name);Uy(r,s,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function mf(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Ly=37297;let Iy=0;function Fy(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=n;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const gf=new Ye;function Ny(a){rt._getMatrix(gf,rt.workingColorSpace,a);const e=`mat3( ${gf.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(a)){case Co:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function _f(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+Fy(a.getShaderSource(e),s)}else return n}function Oy(a,e){const t=Ny(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function By(a,e){let t;switch(e){case Wm:t="Linear";break;case Xm:t="Reinhard";break;case Ym:t="Cineon";break;case xd:t="ACESFilmic";break;case jm:t="AgX";break;case Km:t="Neutral";break;case qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oo=new J;function ky(){rt.getLuminanceCoefficients(oo);const a=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gy(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function zy(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vy(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=a.getActiveAttrib(e,n),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Qs(a){return a!==""}function vf(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(a){return a.replace(Hy,Xy)}const Wy=new Map;function Xy(a,e){let t=Ke[e];if(t===void 0){const i=Wy.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gc(t)}const Yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(a){return a.replace(Yy,qy)}function qy(a,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Sf(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jy(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ky(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case fs:case ds:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zy(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function Jy(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case vd:e="ENVMAP_BLENDING_MULTIPLY";break;case Vm:e="ENVMAP_BLENDING_MIX";break;case Hm:e="ENVMAP_BLENDING_ADD";break}return e}function Qy(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $y(a,e,t,i){const n=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=jy(t),c=Ky(t),u=Zy(t),h=Jy(t),f=Qy(t),d=Gy(t),_=zy(r),g=n.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qs).join(`
`),m.length>0&&(m+=`
`)):(p=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),m=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Zi?By("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Oy("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),s=Gc(s),s=vf(s,t),s=xf(s,t),o=Gc(o),o=vf(o,t),o=xf(o,t),s=yf(s),o=yf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+s,v=y+m+o,E=mf(n,n.VERTEX_SHADER,x),w=mf(n,n.FRAGMENT_SHADER,v);n.attachShader(g,E),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function T(D){if(a.debug.checkShaderErrors){const P=n.getProgramInfoLog(g).trim(),U=n.getShaderInfoLog(E).trim(),L=n.getShaderInfoLog(w).trim();let G=!0,O=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,g,E,w);else{const Y=_f(n,E,"vertex"),H=_f(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+Y+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(U===""||L==="")&&(O=!1);O&&(D.diagnostics={runnable:G,programLog:P,vertexShader:{log:U,prefix:p},fragmentShader:{log:L,prefix:m}})}n.deleteShader(E),n.deleteShader(w),b=new So(n,g),S=Vy(n,g)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(g,Ly)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let eS=0;class tS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nS(e),t.set(e,i)),i}}class nS{constructor(e){this.id=eS++,this.code=e,this.usedTimes=0}}function iS(a,e,t,i,n,r,s){const o=new Od,l=new tS,c=new Set,u=[],h=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,D,P,U){const L=P.fog,G=U.geometry,O=S.isMeshStandardMaterial?P.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),H=Y&&Y.mapping===zo?Y.image.height:null,j=_[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,F=X!==void 0?X.length:0;let V=0;G.morphAttributes.position!==void 0&&(V=1),G.morphAttributes.normal!==void 0&&(V=2),G.morphAttributes.color!==void 0&&(V=3);let Q,N,k,ne;if(j){const ze=ni[j];Q=ze.vertexShader,N=ze.fragmentShader}else Q=S.vertexShader,N=S.fragmentShader,l.update(S),k=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const q=a.getRenderTarget(),ie=a.state.buffers.depth.getReversed(),xe=U.isInstancedMesh===!0,_e=U.isBatchedMesh===!0,ve=!!S.map,he=!!S.matcap,Pe=!!Y,I=!!S.aoMap,Oe=!!S.lightMap,Ae=!!S.bumpMap,Re=!!S.normalMap,ae=!!S.displacementMap,be=!!S.emissiveMap,de=!!S.metalnessMap,R=!!S.roughnessMap,A=S.anisotropy>0,B=S.clearcoat>0,$=S.dispersion>0,ee=S.iridescence>0,se=S.sheen>0,fe=S.transmission>0,le=A&&!!S.anisotropyMap,me=B&&!!S.clearcoatMap,Ue=B&&!!S.clearcoatNormalMap,ce=B&&!!S.clearcoatRoughnessMap,Se=ee&&!!S.iridescenceMap,Te=ee&&!!S.iridescenceThicknessMap,Ee=se&&!!S.sheenColorMap,oe=se&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Fe=!!S.specularColorMap,je=!!S.specularIntensityMap,z=fe&&!!S.transmissionMap,ue=fe&&!!S.thicknessMap,te=!!S.gradientMap,pe=!!S.alphaMap,ye=S.alphaTest>0,ge=!!S.alphaHash,Ne=!!S.extensions;let We=Zi;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(We=a.toneMapping);const Be={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:N,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:_e,batchingColor:_e&&U._colorsTexture!==null,instancing:xe,instancingColor:xe&&U.instanceColor!==null,instancingMorph:xe&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?a.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Kt,alphaToCoverage:!!S.alphaToCoverage,map:ve,matcap:he,envMap:Pe,envMapMode:Pe&&Y.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Oe,bumpMap:Ae,normalMap:Re,displacementMap:f&&ae,emissiveMap:be,normalMapObjectSpace:Re&&S.normalMapType===eg,normalMapTangentSpace:Re&&S.normalMapType===Ld,metalnessMap:de,roughnessMap:R,anisotropy:A,anisotropyMap:le,clearcoat:B,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ce,dispersion:$,iridescence:ee,iridescenceMap:Se,iridescenceThicknessMap:Te,sheen:se,sheenColorMap:Ee,sheenRoughnessMap:oe,specularMap:Le,specularColorMap:Fe,specularIntensityMap:je,transmission:fe,transmissionMap:z,thicknessMap:ue,gradientMap:te,opaque:S.transparent===!1&&S.blending===rs&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:ye,alphaHash:ge,combine:S.combine,mapUv:ve&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:Oe&&g(S.lightMap.channel),bumpMapUv:Ae&&g(S.bumpMap.channel),normalMapUv:Re&&g(S.normalMap.channel),displacementMapUv:ae&&g(S.displacementMap.channel),emissiveMapUv:be&&g(S.emissiveMap.channel),metalnessMapUv:de&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(S.sheenRoughnessMap.channel),specularMapUv:Le&&g(S.specularMap.channel),specularColorMapUv:Fe&&g(S.specularColorMap.channel),specularIntensityMapUv:je&&g(S.specularIntensityMap.channel),transmissionMapUv:z&&g(S.transmissionMap.channel),thicknessMapUv:ue&&g(S.thicknessMap.channel),alphaMapUv:pe&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Re||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(ve||pe),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ie,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:V,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:We,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&rt.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(a.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=_[S.type];let D;if(M){const P=ni[M];D=Vd.clone(P.uniforms)}else D=S.uniforms;return D}function E(S,M){let D;for(let P=0,U=u.length;P<U;P++){const L=u[P];if(L.cacheKey===M){D=L,++D.usedTimes;break}}return D===void 0&&(D=new $y(a,M,S,r),u.push(D)),D}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:b}}function rS(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function i(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function sS(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Mf(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Tf(){const a=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function s(h,f,d,_,g,p){let m=a[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},a[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function o(h,f,d,_,g,p){const m=s(h,f,d,_,g,p);d.transmission>0?i.push(m):d.transparent===!0?n.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=s(h,f,d,_,g,p);d.transmission>0?i.unshift(m):d.transparent===!0?n.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||sS),i.length>1&&i.sort(f||Mf),n.length>1&&n.sort(f||Mf)}function u(){for(let h=e,f=a.length;h<f;h++){const d=a[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function aS(){let a=new WeakMap;function e(i,n){const r=a.get(i);let s;return r===void 0?(s=new Tf,a.set(i,[s])):n>=r.length?(s=new Tf,r.push(s)):s=r[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function oS(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Xe};break;case"SpotLight":t={position:new J,direction:new J,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=t,t}}}function lS(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let cS=0;function uS(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function hS(a){const e=new oS,t=lS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const n=new J,r=new qe,s=new qe;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,y=0,x=0,v=0,E=0,w=0,T=0;c.sort(uS);for(let S=0,M=c.length;S<M;S++){const D=c[S],P=D.color,U=D.intensity,L=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*U,h+=P.g*U,f+=P.b*U;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],U);T++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=D.shadow.matrix,y++}i.directional[d]=O,d++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(P).multiplyScalar(U),O.distance=L,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[g]=O;const Y=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,Y.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[g]=Y.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=G,v++}g++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(P).multiplyScalar(U),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=O,p++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const Y=D.shadow,H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=D.shadow.matrix,x++}i.point[_]=O,_++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(U),O.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[m]=O,m++}}p>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==d||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==p||b.hemiLength!==m||b.numDirectionalShadows!==y||b.numPointShadows!==x||b.numSpotShadows!==v||b.numSpotMaps!==E||b.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,b.directionalLength=d,b.pointLength=_,b.spotLength=g,b.rectAreaLength=p,b.hemiLength=m,b.numDirectionalShadows=y,b.numPointShadows=x,b.numSpotShadows=v,b.numSpotMaps=E,b.numLightProbes=T,i.version=cS++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),h++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),s.identity(),r.copy(x.matrixWorld),r.premultiply(p),s.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Ef(a){const e=new hS(a),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function fS(a){let e=new WeakMap;function t(n,r=0){const s=e.get(n);let o;return s===void 0?(o=new Ef(a),e.set(n,[o])):r>=s.length?(o=new Ef(a),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
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
}`;function mS(a,e,t){let i=new Su;const n=new Je,r=new Je,s=new st,o=new Kd({depthPacking:Ud}),l=new Zd,c={},u=t.maxTextureSize,h={[Ci]:un,[un]:Ci,[ln]:ln},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:dS,fragmentShader:pS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Kn;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_d;let m=this.type;this.render=function(w,T,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=a.getRenderTarget(),M=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Ki),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const U=m!==yi&&this.type===yi,L=m===yi&&this.type!==yi;for(let G=0,O=w.length;G<O;G++){const Y=w[G],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const j=H.getFrameExtents();if(n.multiply(j),r.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/j.x),n.x=r.x*j.x,H.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/j.y),n.y=r.y*j.y,H.mapSize.y=r.y)),H.map===null||U===!0||L===!0){const F=this.type!==yi?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new wr(n.x,n.y,F),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const X=H.getViewportCount();for(let F=0;F<X;F++){const V=H.getViewport(F);s.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(s),H.updateMatrices(Y,F),i=H.getFrustum(),v(T,b,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===yi&&y(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,a.setRenderTarget(S,M,D)};function y(w,T){const b=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new wr(n.x,n.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(T,null,b,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(T,null,b,d,g,null)}function x(w,T,b,S){let M=null;const D=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=b.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=M.uuid,U=T.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let G=L[U];G===void 0&&(G=M.clone(),L[U]=G,T.addEventListener("dispose",E)),M=G}if(M.visible=T.visible,M.wireframe=T.wireframe,S===yi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=a.properties.get(M);P.light=b}return M}function v(w,T,b,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const U=e.update(w),L=w.material;if(Array.isArray(L)){const G=U.groups;for(let O=0,Y=G.length;O<Y;O++){const H=G[O],j=L[H.materialIndex];if(j&&j.visible){const X=x(w,j,S,M);w.onBeforeShadow(a,w,T,b,U,X,H),a.renderBufferDirect(b,null,U,X,w,H),w.onAfterShadow(a,w,T,b,U,X,H)}}}else if(L.visible){const G=x(w,L,S,M);w.onBeforeShadow(a,w,T,b,U,G,null),a.renderBufferDirect(b,null,U,G,w,null),w.onAfterShadow(a,w,T,b,U,G,null)}}const P=w.children;for(let U=0,L=P.length;U<L;U++)v(P[U],T,b,S,M)}function E(w){w.target.removeEventListener("dispose",E);for(const b in c){const S=c[b],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const gS={[ic]:rc,[sc]:lc,[ac]:cc,[hs]:oc,[rc]:ic,[lc]:sc,[cc]:ac,[oc]:hs};function _S(a,e){function t(){let z=!1;const ue=new st;let te=null;const pe=new st(0,0,0,0);return{setMask:function(ye){te!==ye&&!z&&(a.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ge,Ne,We,Be){Be===!0&&(ye*=We,ge*=We,Ne*=We),ue.set(ye,ge,Ne,We),pe.equals(ue)===!1&&(a.clearColor(ye,ge,Ne,We),pe.copy(ue))},reset:function(){z=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let z=!1,ue=!1,te=null,pe=null,ye=null;return{setReversed:function(ge){if(ue!==ge){const Ne=e.get("EXT_clip_control");ge?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=ge;const We=ye;ye=null,this.setClear(We)}},getReversed:function(){return ue},setTest:function(ge){ge?q(a.DEPTH_TEST):ie(a.DEPTH_TEST)},setMask:function(ge){te!==ge&&!z&&(a.depthMask(ge),te=ge)},setFunc:function(ge){if(ue&&(ge=gS[ge]),pe!==ge){switch(ge){case ic:a.depthFunc(a.NEVER);break;case rc:a.depthFunc(a.ALWAYS);break;case sc:a.depthFunc(a.LESS);break;case hs:a.depthFunc(a.LEQUAL);break;case ac:a.depthFunc(a.EQUAL);break;case oc:a.depthFunc(a.GEQUAL);break;case lc:a.depthFunc(a.GREATER);break;case cc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=ge}},setLocked:function(ge){z=ge},setClear:function(ge){ye!==ge&&(ue&&(ge=1-ge),a.clearDepth(ge),ye=ge)},reset:function(){z=!1,te=null,pe=null,ye=null,ue=!1}}}function n(){let z=!1,ue=null,te=null,pe=null,ye=null,ge=null,Ne=null,We=null,Be=null;return{setTest:function(ze){z||(ze?q(a.STENCIL_TEST):ie(a.STENCIL_TEST))},setMask:function(ze){ue!==ze&&!z&&(a.stencilMask(ze),ue=ze)},setFunc:function(ze,ct,ht){(te!==ze||pe!==ct||ye!==ht)&&(a.stencilFunc(ze,ct,ht),te=ze,pe=ct,ye=ht)},setOp:function(ze,ct,ht){(ge!==ze||Ne!==ct||We!==ht)&&(a.stencilOp(ze,ct,ht),ge=ze,Ne=ct,We=ht)},setLocked:function(ze){z=ze},setClear:function(ze){Be!==ze&&(a.clearStencil(ze),Be=ze)},reset:function(){z=!1,ue=null,te=null,pe=null,ye=null,ge=null,Ne=null,We=null,Be=null}}}const r=new t,s=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,y=null,x=null,v=null,E=null,w=null,T=new Xe(0,0,0),b=0,S=!1,M=null,D=null,P=null,U=null,L=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const H=a.getParameter(a.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=Y>=2);let j=null,X={};const F=a.getParameter(a.SCISSOR_BOX),V=a.getParameter(a.VIEWPORT),Q=new st().fromArray(F),N=new st().fromArray(V);function k(z,ue,te,pe){const ye=new Uint8Array(4),ge=a.createTexture();a.bindTexture(z,ge),a.texParameteri(z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ne=0;Ne<te;Ne++)z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?a.texImage3D(ue,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,ye):a.texImage2D(ue+Ne,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ye);return ge}const ne={};ne[a.TEXTURE_2D]=k(a.TEXTURE_2D,a.TEXTURE_2D,1),ne[a.TEXTURE_CUBE_MAP]=k(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[a.TEXTURE_2D_ARRAY]=k(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ne[a.TEXTURE_3D]=k(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),q(a.DEPTH_TEST),s.setFunc(hs),Ae(!1),Re(oh),q(a.CULL_FACE),I(Ki);function q(z){u[z]!==!0&&(a.enable(z),u[z]=!0)}function ie(z){u[z]!==!1&&(a.disable(z),u[z]=!1)}function xe(z,ue){return h[z]!==ue?(a.bindFramebuffer(z,ue),h[z]=ue,z===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=ue),z===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(z,ue){let te=d,pe=!1;if(z){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));const ye=z.textures;if(te.length!==ye.length||te[0]!==a.COLOR_ATTACHMENT0){for(let ge=0,Ne=ye.length;ge<Ne;ge++)te[ge]=a.COLOR_ATTACHMENT0+ge;te.length=ye.length,pe=!0}}else te[0]!==a.BACK&&(te[0]=a.BACK,pe=!0);pe&&a.drawBuffers(te)}function ve(z){return _!==z?(a.useProgram(z),_=z,!0):!1}const he={[_r]:a.FUNC_ADD,[bm]:a.FUNC_SUBTRACT,[Am]:a.FUNC_REVERSE_SUBTRACT};he[wm]=a.MIN,he[Rm]=a.MAX;const Pe={[Cm]:a.ZERO,[Pm]:a.ONE,[Dm]:a.SRC_COLOR,[tc]:a.SRC_ALPHA,[Om]:a.SRC_ALPHA_SATURATE,[Fm]:a.DST_COLOR,[Lm]:a.DST_ALPHA,[Um]:a.ONE_MINUS_SRC_COLOR,[nc]:a.ONE_MINUS_SRC_ALPHA,[Nm]:a.ONE_MINUS_DST_COLOR,[Im]:a.ONE_MINUS_DST_ALPHA,[Bm]:a.CONSTANT_COLOR,[km]:a.ONE_MINUS_CONSTANT_COLOR,[Gm]:a.CONSTANT_ALPHA,[zm]:a.ONE_MINUS_CONSTANT_ALPHA};function I(z,ue,te,pe,ye,ge,Ne,We,Be,ze){if(z===Ki){g===!0&&(ie(a.BLEND),g=!1);return}if(g===!1&&(q(a.BLEND),g=!0),z!==Em){if(z!==p||ze!==S){if((m!==_r||v!==_r)&&(a.blendEquation(a.FUNC_ADD),m=_r,v=_r),ze)switch(z){case rs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lh:a.blendFunc(a.ONE,a.ONE);break;case ch:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case uh:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case rs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case lh:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case ch:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case uh:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,x=null,E=null,w=null,T.set(0,0,0),b=0,p=z,S=ze}return}ye=ye||ue,ge=ge||te,Ne=Ne||pe,(ue!==m||ye!==v)&&(a.blendEquationSeparate(he[ue],he[ye]),m=ue,v=ye),(te!==y||pe!==x||ge!==E||Ne!==w)&&(a.blendFuncSeparate(Pe[te],Pe[pe],Pe[ge],Pe[Ne]),y=te,x=pe,E=ge,w=Ne),(We.equals(T)===!1||Be!==b)&&(a.blendColor(We.r,We.g,We.b,Be),T.copy(We),b=Be),p=z,S=!1}function Oe(z,ue){z.side===ln?ie(a.CULL_FACE):q(a.CULL_FACE);let te=z.side===un;ue&&(te=!te),Ae(te),z.blending===rs&&z.transparent===!1?I(Ki):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const pe=z.stencilWrite;o.setTest(pe),pe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),be(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?q(a.SAMPLE_ALPHA_TO_COVERAGE):ie(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(z){M!==z&&(z?a.frontFace(a.CW):a.frontFace(a.CCW),M=z)}function Re(z){z!==Sm?(q(a.CULL_FACE),z!==D&&(z===oh?a.cullFace(a.BACK):z===Mm?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ie(a.CULL_FACE),D=z}function ae(z){z!==P&&(O&&a.lineWidth(z),P=z)}function be(z,ue,te){z?(q(a.POLYGON_OFFSET_FILL),(U!==ue||L!==te)&&(a.polygonOffset(ue,te),U=ue,L=te)):ie(a.POLYGON_OFFSET_FILL)}function de(z){z?q(a.SCISSOR_TEST):ie(a.SCISSOR_TEST)}function R(z){z===void 0&&(z=a.TEXTURE0+G-1),j!==z&&(a.activeTexture(z),j=z)}function A(z,ue,te){te===void 0&&(j===null?te=a.TEXTURE0+G-1:te=j);let pe=X[te];pe===void 0&&(pe={type:void 0,texture:void 0},X[te]=pe),(pe.type!==z||pe.texture!==ue)&&(j!==te&&(a.activeTexture(te),j=te),a.bindTexture(z,ue||ne[z]),pe.type=z,pe.texture=ue)}function B(){const z=X[j];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{a.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{a.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{a.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{a.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{a.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{a.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{a.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{a.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){Q.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),Q.copy(z))}function oe(z){N.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),N.copy(z))}function Le(z,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(z);pe===void 0&&(pe=a.getUniformBlockIndex(ue,z.name),te.set(z,pe))}function Fe(z,ue){const pe=c.get(ue).get(z);l.get(ue)!==pe&&(a.uniformBlockBinding(ue,pe,z.__bindingPointIndex),l.set(ue,pe))}function je(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},j=null,X={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,y=null,x=null,v=null,E=null,w=null,T=new Xe(0,0,0),b=0,S=!1,M=null,D=null,P=null,U=null,L=null,Q.set(0,0,a.canvas.width,a.canvas.height),N.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:q,disable:ie,bindFramebuffer:xe,drawBuffers:_e,useProgram:ve,setBlending:I,setMaterial:Oe,setFlipSided:Ae,setCullFace:Re,setLineWidth:ae,setPolygonOffset:be,setScissorTest:de,activeTexture:R,bindTexture:A,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:Se,texImage3D:Te,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:Ue,texStorage3D:ce,texSubImage2D:se,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Ee,viewport:oe,reset:je}}function vS(a,e,t,i,n,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return d?new OffscreenCanvas(R,A):ga("canvas")}function g(R,A,B){let $=1;const ee=de(R);if((ee.width>B||ee.height>B)&&($=B/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor($*ee.width),fe=Math.floor($*ee.height);h===void 0&&(h=_(se,fe));const le=A?_(se,fe):h;return le.width=se,le.height=fe,le.getContext("2d").drawImage(R,0,0,se,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+se+"x"+fe+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){a.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?a.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function x(R,A,B,$,ee=!1){if(R!==null){if(a[R]!==void 0)return a[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=A;if(A===a.RED&&(B===a.FLOAT&&(se=a.R32F),B===a.HALF_FLOAT&&(se=a.R16F),B===a.UNSIGNED_BYTE&&(se=a.R8)),A===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(se=a.R8UI),B===a.UNSIGNED_SHORT&&(se=a.R16UI),B===a.UNSIGNED_INT&&(se=a.R32UI),B===a.BYTE&&(se=a.R8I),B===a.SHORT&&(se=a.R16I),B===a.INT&&(se=a.R32I)),A===a.RG&&(B===a.FLOAT&&(se=a.RG32F),B===a.HALF_FLOAT&&(se=a.RG16F),B===a.UNSIGNED_BYTE&&(se=a.RG8)),A===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(se=a.RG8UI),B===a.UNSIGNED_SHORT&&(se=a.RG16UI),B===a.UNSIGNED_INT&&(se=a.RG32UI),B===a.BYTE&&(se=a.RG8I),B===a.SHORT&&(se=a.RG16I),B===a.INT&&(se=a.RG32I)),A===a.RGB_INTEGER&&(B===a.UNSIGNED_BYTE&&(se=a.RGB8UI),B===a.UNSIGNED_SHORT&&(se=a.RGB16UI),B===a.UNSIGNED_INT&&(se=a.RGB32UI),B===a.BYTE&&(se=a.RGB8I),B===a.SHORT&&(se=a.RGB16I),B===a.INT&&(se=a.RGB32I)),A===a.RGBA_INTEGER&&(B===a.UNSIGNED_BYTE&&(se=a.RGBA8UI),B===a.UNSIGNED_SHORT&&(se=a.RGBA16UI),B===a.UNSIGNED_INT&&(se=a.RGBA32UI),B===a.BYTE&&(se=a.RGBA8I),B===a.SHORT&&(se=a.RGBA16I),B===a.INT&&(se=a.RGBA32I)),A===a.RGB&&B===a.UNSIGNED_INT_5_9_9_9_REV&&(se=a.RGB9_E5),A===a.RGBA){const fe=ee?Co:rt.getTransfer($);B===a.FLOAT&&(se=a.RGBA32F),B===a.HALF_FLOAT&&(se=a.RGBA16F),B===a.UNSIGNED_BYTE&&(se=fe===lt?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(se=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(se=a.RGB5_A1)}return(se===a.R16F||se===a.R32F||se===a.RG16F||se===a.RG32F||se===a.RGBA16F||se===a.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(R,A){let B;return R?A===null||A===Ar||A===ha?B=a.DEPTH24_STENCIL8:A===cn?B=a.DEPTH32F_STENCIL8:A===ua&&(B=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ar||A===ha?B=a.DEPTH_COMPONENT24:A===cn?B=a.DEPTH_COMPONENT32F:A===ua&&(B=a.DEPTH_COMPONENT16),B}function E(R,A){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==yt?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function w(R){const A=R.target;A.removeEventListener("dispose",w),b(A),A.isVideoTexture&&u.delete(A)}function T(R){const A=R.target;A.removeEventListener("dispose",T),M(A)}function b(R){const A=i.get(R);if(A.__webglInit===void 0)return;const B=R.source,$=f.get(B);if($){const ee=$[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(R),Object.keys($).length===0&&f.delete(B)}i.remove(R)}function S(R){const A=i.get(R);a.deleteTexture(A.__webglTexture);const B=R.source,$=f.get(B);delete $[A.__cacheKey],s.memory.textures--}function M(R){const A=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(A.__webglFramebuffer[$]))for(let ee=0;ee<A.__webglFramebuffer[$].length;ee++)a.deleteFramebuffer(A.__webglFramebuffer[$][ee]);else a.deleteFramebuffer(A.__webglFramebuffer[$]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[$])}else{if(Array.isArray(A.__webglFramebuffer))for(let $=0;$<A.__webglFramebuffer.length;$++)a.deleteFramebuffer(A.__webglFramebuffer[$]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let $=0;$<A.__webglColorRenderbuffer.length;$++)A.__webglColorRenderbuffer[$]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[$]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,ee=B.length;$<ee;$++){const se=i.get(B[$]);se.__webglTexture&&(a.deleteTexture(se.__webglTexture),s.memory.textures--),i.remove(B[$])}i.remove(R)}let D=0;function P(){D=0}function U(){const R=D;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),D+=1,R}function L(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function G(R,A){const B=i.get(R);if(R.isVideoTexture&&ae(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(B,R,A);return}}t.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+A)}function O(R,A){const B=i.get(R);if(R.version>0&&B.__version!==R.version){N(B,R,A);return}t.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+A)}function Y(R,A){const B=i.get(R);if(R.version>0&&B.__version!==R.version){N(B,R,A);return}t.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+A)}function H(R,A){const B=i.get(R);if(R.version>0&&B.__version!==R.version){k(B,R,A);return}t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+A)}const j={[ps]:a.REPEAT,[ri]:a.CLAMP_TO_EDGE,[Ro]:a.MIRRORED_REPEAT},X={[tn]:a.NEAREST,[Sd]:a.NEAREST_MIPMAP_NEAREST,[Js]:a.NEAREST_MIPMAP_LINEAR,[yt]:a.LINEAR,[po]:a.LINEAR_MIPMAP_NEAREST,[si]:a.LINEAR_MIPMAP_LINEAR},F={[tg]:a.NEVER,[og]:a.ALWAYS,[ng]:a.LESS,[Id]:a.LEQUAL,[ig]:a.EQUAL,[ag]:a.GEQUAL,[rg]:a.GREATER,[sg]:a.NOTEQUAL};function V(R,A){if(A.type===cn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===yt||A.magFilter===po||A.magFilter===Js||A.magFilter===si||A.minFilter===yt||A.minFilter===po||A.minFilter===Js||A.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(R,a.TEXTURE_WRAP_S,j[A.wrapS]),a.texParameteri(R,a.TEXTURE_WRAP_T,j[A.wrapT]),(R===a.TEXTURE_3D||R===a.TEXTURE_2D_ARRAY)&&a.texParameteri(R,a.TEXTURE_WRAP_R,j[A.wrapR]),a.texParameteri(R,a.TEXTURE_MAG_FILTER,X[A.magFilter]),a.texParameteri(R,a.TEXTURE_MIN_FILTER,X[A.minFilter]),A.compareFunction&&(a.texParameteri(R,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(R,a.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===tn||A.minFilter!==Js&&A.minFilter!==si||A.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");a.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,n.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Q(R,A){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",w));const $=A.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const se=L(A);if(se!==R.__cacheKey){ee[se]===void 0&&(ee[se]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,B=!0),ee[se].usedTimes++;const fe=ee[R.__cacheKey];fe!==void 0&&(ee[R.__cacheKey].usedTimes--,fe.usedTimes===0&&S(A)),R.__cacheKey=se,R.__webglTexture=ee[se].texture}return B}function N(R,A,B){let $=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&($=a.TEXTURE_3D);const ee=Q(R,A),se=A.source;t.bindTexture($,R.__webglTexture,a.TEXTURE0+B);const fe=i.get(se);if(se.version!==fe.__version||ee===!0){t.activeTexture(a.TEXTURE0+B);const le=rt.getPrimaries(rt.workingColorSpace),me=A.colorSpace===Wi?null:rt.getPrimaries(A.colorSpace),Ue=A.colorSpace===Wi||le===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ce=g(A.image,!1,n.maxTextureSize);ce=be(A,ce);const Se=r.convert(A.format,A.colorSpace),Te=r.convert(A.type);let Ee=x(A.internalFormat,Se,Te,A.colorSpace,A.isVideoTexture);V($,A);let oe;const Le=A.mipmaps,Fe=A.isVideoTexture!==!0,je=fe.__version===void 0||ee===!0,z=se.dataReady,ue=E(A,ce);if(A.isDepthTexture)Ee=v(A.format===da,A.type),je&&(Fe?t.texStorage2D(a.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(a.TEXTURE_2D,0,Ee,ce.width,ce.height,0,Se,Te,null));else if(A.isDataTexture)if(Le.length>0){Fe&&je&&t.texStorage2D(a.TEXTURE_2D,ue,Ee,Le[0].width,Le[0].height);for(let te=0,pe=Le.length;te<pe;te++)oe=Le[te],Fe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,Te,oe.data):t.texImage2D(a.TEXTURE_2D,te,Ee,oe.width,oe.height,0,Se,Te,oe.data);A.generateMipmaps=!1}else Fe?(je&&t.texStorage2D(a.TEXTURE_2D,ue,Ee,ce.width,ce.height),z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ce.width,ce.height,Se,Te,ce.data)):t.texImage2D(a.TEXTURE_2D,0,Ee,ce.width,ce.height,0,Se,Te,ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Fe&&je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,Ee,Le[0].width,Le[0].height,ce.depth);for(let te=0,pe=Le.length;te<pe;te++)if(oe=Le[te],A.format!==Un)if(Se!==null)if(Fe){if(z)if(A.layerUpdates.size>0){const ye=$h(oe.width,oe.height,A.format,A.type);for(const ge of A.layerUpdates){const Ne=oe.data.subarray(ge*ye/oe.data.BYTES_PER_ELEMENT,(ge+1)*ye/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,ge,oe.width,oe.height,1,Se,Ne)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,Se,oe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ce.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?z&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,Se,Te,oe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ce.depth,0,Se,Te,oe.data)}else{Fe&&je&&t.texStorage2D(a.TEXTURE_2D,ue,Ee,Le[0].width,Le[0].height);for(let te=0,pe=Le.length;te<pe;te++)oe=Le[te],A.format!==Un?Se!==null?Fe?z&&t.compressedTexSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,oe.data):t.compressedTexImage2D(a.TEXTURE_2D,te,Ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,Te,oe.data):t.texImage2D(a.TEXTURE_2D,te,Ee,oe.width,oe.height,0,Se,Te,oe.data)}else if(A.isDataArrayTexture)if(Fe){if(je&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,Ee,ce.width,ce.height,ce.depth),z)if(A.layerUpdates.size>0){const te=$h(ce.width,ce.height,A.format,A.type);for(const pe of A.layerUpdates){const ye=ce.data.subarray(pe*te/ce.data.BYTES_PER_ELEMENT,(pe+1)*te/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,ce.width,ce.height,1,Se,Te,ye)}A.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,Te,ce.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,Se,Te,ce.data);else if(A.isData3DTexture)Fe?(je&&t.texStorage3D(a.TEXTURE_3D,ue,Ee,ce.width,ce.height,ce.depth),z&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,Te,ce.data)):t.texImage3D(a.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,Se,Te,ce.data);else if(A.isFramebufferTexture){if(je)if(Fe)t.texStorage2D(a.TEXTURE_2D,ue,Ee,ce.width,ce.height);else{let te=ce.width,pe=ce.height;for(let ye=0;ye<ue;ye++)t.texImage2D(a.TEXTURE_2D,ye,Ee,te,pe,0,Se,Te,null),te>>=1,pe>>=1}}else if(Le.length>0){if(Fe&&je){const te=de(Le[0]);t.texStorage2D(a.TEXTURE_2D,ue,Ee,te.width,te.height)}for(let te=0,pe=Le.length;te<pe;te++)oe=Le[te],Fe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,Se,Te,oe):t.texImage2D(a.TEXTURE_2D,te,Ee,Se,Te,oe);A.generateMipmaps=!1}else if(Fe){if(je){const te=de(ce);t.texStorage2D(a.TEXTURE_2D,ue,Ee,te.width,te.height)}z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Se,Te,ce)}else t.texImage2D(a.TEXTURE_2D,0,Ee,Se,Te,ce);p(A)&&m($),fe.__version=se.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function k(R,A,B){if(A.image.length!==6)return;const $=Q(R,A),ee=A.source;t.bindTexture(a.TEXTURE_CUBE_MAP,R.__webglTexture,a.TEXTURE0+B);const se=i.get(ee);if(ee.version!==se.__version||$===!0){t.activeTexture(a.TEXTURE0+B);const fe=rt.getPrimaries(rt.workingColorSpace),le=A.colorSpace===Wi?null:rt.getPrimaries(A.colorSpace),me=A.colorSpace===Wi||fe===le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ue=A.isCompressedTexture||A.image[0].isCompressedTexture,ce=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let pe=0;pe<6;pe++)!Ue&&!ce?Se[pe]=g(A.image[pe],!0,n.maxCubemapSize):Se[pe]=ce?A.image[pe].image:A.image[pe],Se[pe]=be(A,Se[pe]);const Te=Se[0],Ee=r.convert(A.format,A.colorSpace),oe=r.convert(A.type),Le=x(A.internalFormat,Ee,oe,A.colorSpace),Fe=A.isVideoTexture!==!0,je=se.__version===void 0||$===!0,z=ee.dataReady;let ue=E(A,Te);V(a.TEXTURE_CUBE_MAP,A);let te;if(Ue){Fe&&je&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ue,Le,Te.width,Te.height);for(let pe=0;pe<6;pe++){te=Se[pe].mipmaps;for(let ye=0;ye<te.length;ye++){const ge=te[ye];A.format!==Un?Ee!==null?Fe?z&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Ee,ge.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Ee,oe,ge.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Le,ge.width,ge.height,0,Ee,oe,ge.data)}}}else{if(te=A.mipmaps,Fe&&je){te.length>0&&ue++;const pe=de(Se[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ue,Le,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ce){Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Se[pe].width,Se[pe].height,Ee,oe,Se[pe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,Se[pe].width,Se[pe].height,0,Ee,oe,Se[pe].data);for(let ye=0;ye<te.length;ye++){const Ne=te[ye].image[pe].image;Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Ne.width,Ne.height,Ee,oe,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Le,Ne.width,Ne.height,0,Ee,oe,Ne.data)}}else{Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ee,oe,Se[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,Ee,oe,Se[pe]);for(let ye=0;ye<te.length;ye++){const ge=te[ye];Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Ee,oe,ge.image[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Le,Ee,oe,ge.image[pe])}}}p(A)&&m(a.TEXTURE_CUBE_MAP),se.__version=ee.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ne(R,A,B,$,ee,se){const fe=r.convert(B.format,B.colorSpace),le=r.convert(B.type),me=x(B.internalFormat,fe,le,B.colorSpace),Ue=i.get(A),ce=i.get(B);if(ce.__renderTarget=A,!Ue.__hasExternalTextures){const Se=Math.max(1,A.width>>se),Te=Math.max(1,A.height>>se);ee===a.TEXTURE_3D||ee===a.TEXTURE_2D_ARRAY?t.texImage3D(ee,se,me,Se,Te,A.depth,0,fe,le,null):t.texImage2D(ee,se,me,Se,Te,0,fe,le,null)}t.bindFramebuffer(a.FRAMEBUFFER,R),Re(A)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,ee,ce.__webglTexture,0,Ae(A)):(ee===a.TEXTURE_2D||ee>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,ee,ce.__webglTexture,se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function q(R,A,B){if(a.bindRenderbuffer(a.RENDERBUFFER,R),A.depthBuffer){const $=A.depthTexture,ee=$&&$.isDepthTexture?$.type:null,se=v(A.stencilBuffer,ee),fe=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=Ae(A);Re(A)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,le,se,A.width,A.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,le,se,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,se,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,fe,a.RENDERBUFFER,R)}else{const $=A.textures;for(let ee=0;ee<$.length;ee++){const se=$[ee],fe=r.convert(se.format,se.colorSpace),le=r.convert(se.type),me=x(se.internalFormat,fe,le,se.colorSpace),Ue=Ae(A);B&&Re(A)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ue,me,A.width,A.height):Re(A)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ue,me,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,me,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ie(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(A.depthTexture);$.__renderTarget=A,(!$.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const ee=$.__webglTexture,se=Ae(A);if(A.depthTexture.format===fa)Re(A)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ee,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ee,0);else if(A.depthTexture.format===da)Re(A)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ee,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function xe(R){const A=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),$){const ee=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),A.__depthDisposeCallback=ee}A.__boundDepthTexture=$}if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ie(A.__webglFramebuffer,R)}else if(B){A.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[$]),A.__webglDepthbuffer[$]===void 0)A.__webglDepthbuffer[$]=a.createRenderbuffer(),q(A.__webglDepthbuffer[$],R,!1);else{const ee=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=A.__webglDepthbuffer[$];a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,ee,a.RENDERBUFFER,se)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),q(A.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ee=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,ee),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,ee)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function _e(R,A,B){const $=i.get(R);A!==void 0&&ne($.__webglFramebuffer,R,R.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&xe(R)}function ve(R){const A=R.texture,B=i.get(R),$=i.get(A);R.addEventListener("dispose",T);const ee=R.textures,se=R.isWebGLCubeRenderTarget===!0,fe=ee.length>1;if(fe||($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=A.version,s.memory.textures++),se){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let me=0;me<A.mipmaps.length;me++)B.__webglFramebuffer[le][me]=a.createFramebuffer()}else B.__webglFramebuffer[le]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<A.mipmaps.length;le++)B.__webglFramebuffer[le]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(fe)for(let le=0,me=ee.length;le<me;le++){const Ue=i.get(ee[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=a.createTexture(),s.memory.textures++)}if(R.samples>0&&Re(R)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const me=ee[le];B.__webglColorRenderbuffer[le]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const Ue=r.convert(me.format,me.colorSpace),ce=r.convert(me.type),Se=x(me.internalFormat,Ue,ce,me.colorSpace,R.isXRRenderTarget===!0),Te=Ae(R);a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,Se,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,B.__webglColorRenderbuffer[le])}a.bindRenderbuffer(a.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),q(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){t.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),V(a.TEXTURE_CUBE_MAP,A);for(let le=0;le<6;le++)if(A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ne(B.__webglFramebuffer[le][me],R,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ne(B.__webglFramebuffer[le],R,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(A)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,me=ee.length;le<me;le++){const Ue=ee[le],ce=i.get(Ue);t.bindTexture(a.TEXTURE_2D,ce.__webglTexture),V(a.TEXTURE_2D,Ue),ne(B.__webglFramebuffer,R,Ue,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,0),p(Ue)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let le=a.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),V(le,A),A.mipmaps&&A.mipmaps.length>0)for(let me=0;me<A.mipmaps.length;me++)ne(B.__webglFramebuffer[me],R,A,a.COLOR_ATTACHMENT0,le,me);else ne(B.__webglFramebuffer,R,A,a.COLOR_ATTACHMENT0,le,0);p(A)&&m(le),t.unbindTexture()}R.depthBuffer&&xe(R)}function he(R){const A=R.textures;for(let B=0,$=A.length;B<$;B++){const ee=A[B];if(p(ee)){const se=y(R),fe=i.get(ee).__webglTexture;t.bindTexture(se,fe),m(se),t.unbindTexture()}}}const Pe=[],I=[];function Oe(R){if(R.samples>0){if(Re(R)===!1){const A=R.textures,B=R.width,$=R.height;let ee=a.COLOR_BUFFER_BIT;const se=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,fe=i.get(R),le=A.length>1;if(le)for(let me=0;me<A.length;me++)t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<A.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=a.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=a.STENCIL_BUFFER_BIT)),le){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Ue=i.get(A[me]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ue,0)}a.blitFramebuffer(0,0,B,$,0,0,B,$,ee,a.NEAREST),l===!0&&(Pe.length=0,I.length=0,Pe.push(a.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Pe.push(se),I.push(se),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,I)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<A.length;me++){t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Ue=i.get(A[me]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,Ue,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const A=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function Ae(R){return Math.min(n.maxSamples,R.samples)}function Re(R){const A=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ae(R){const A=s.render.frame;u.get(R)!==A&&(u.set(R,A),R.update())}function be(R,A){const B=R.colorSpace,$=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Kt&&B!==Wi&&(rt.getTransfer(B)===lt?($!==Un||ee!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),A}function de(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Re}function xS(a,e){function t(i,n=Wi){let r;const s=rt.getTransfer(n);if(i===Pi)return a.UNSIGNED_BYTE;if(i===uu)return a.UNSIGNED_SHORT_4_4_4_4;if(i===hu)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Ed)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Md)return a.BYTE;if(i===Td)return a.SHORT;if(i===ua)return a.UNSIGNED_SHORT;if(i===cu)return a.INT;if(i===Ar)return a.UNSIGNED_INT;if(i===cn)return a.FLOAT;if(i===bi)return a.HALF_FLOAT;if(i===bd)return a.ALPHA;if(i===Ad)return a.RGB;if(i===Un)return a.RGBA;if(i===wd)return a.LUMINANCE;if(i===Rd)return a.LUMINANCE_ALPHA;if(i===fa)return a.DEPTH_COMPONENT;if(i===da)return a.DEPTH_STENCIL;if(i===fu)return a.RED;if(i===du)return a.RED_INTEGER;if(i===Cd)return a.RG;if(i===pu)return a.RG_INTEGER;if(i===mu)return a.RGBA_INTEGER;if(i===mo||i===go||i===_o||i===vo)if(s===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hc||i===fc||i===dc||i===pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===_c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return s===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===xc||i===yc||i===Sc||i===Mc||i===Tc||i===Ec||i===bc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xo||i===Uc||i===Lc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===xo)return s===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pd||i===Ic||i===Fc||i===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const yS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SS=`
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

}`;class MS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Rt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Di({vertexShader:yS,fragmentShader:SS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TS extends As{constructor(e,t){super();const i=this;let n=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new MS,p=t.getContextAttributes();let m=null,y=null;const x=[],v=[],E=new Je;let w=null;const T=new $t;T.viewport=new st;const b=new $t;b.viewport=new st;const S=[T,b],M=new F_;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=x[N];return k===void 0&&(k=new Al,x[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=x[N];return k===void 0&&(k=new Al,x[N]=k),k.getGripSpace()},this.getHand=function(N){let k=x[N];return k===void 0&&(k=new Al,x[N]=k),k.getHandSpace()};function U(N){const k=v.indexOf(N.inputSource);if(k===-1)return;const ne=x[k];ne!==void 0&&(ne.update(N.inputSource,N.frame,c||s),ne.dispatchEvent({type:N.type,data:N.inputSource}))}function L(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",L),n.removeEventListener("inputsourceschange",G);for(let N=0;N<x.length;N++){const k=v[N];k!==null&&(v[N]=null,x[N].disconnect(k))}D=null,P=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,n=null,y=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",L),n.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,q=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?da:fa,q=p.stencil?ha:Ar);const xe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(n,t),f=h.createProjectionLayer(xe),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new wr(f.textureWidth,f.textureHeight,{format:Un,type:Pi,depthTexture:new jd(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new wr(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Q.setContext(n),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(N){for(let k=0;k<N.removed.length;k++){const ne=N.removed[k],q=v.indexOf(ne);q>=0&&(v[q]=null,x[q].disconnect(ne))}for(let k=0;k<N.added.length;k++){const ne=N.added[k];let q=v.indexOf(ne);if(q===-1){for(let xe=0;xe<x.length;xe++)if(xe>=v.length){v.push(ne),q=xe;break}else if(v[xe]===null){v[xe]=ne,q=xe;break}if(q===-1)break}const ie=x[q];ie&&ie.connect(ne)}}const O=new J,Y=new J;function H(N,k,ne){O.setFromMatrixPosition(k.matrixWorld),Y.setFromMatrixPosition(ne.matrixWorld);const q=O.distanceTo(Y),ie=k.projectionMatrix.elements,xe=ne.projectionMatrix.elements,_e=ie[14]/(ie[10]-1),ve=ie[14]/(ie[10]+1),he=(ie[9]+1)/ie[5],Pe=(ie[9]-1)/ie[5],I=(ie[8]-1)/ie[0],Oe=(xe[8]+1)/xe[0],Ae=_e*I,Re=_e*Oe,ae=q/(-I+Oe),be=ae*-I;if(k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(be),N.translateZ(ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ie[10]===-1)N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const de=_e+ae,R=ve+ae,A=Ae-be,B=Re+(q-be),$=he*ve/R*de,ee=Pe*ve/R*de;N.projectionMatrix.makePerspective(A,B,$,ee,de,R),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function j(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;let k=N.near,ne=N.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),M.near=b.near=T.near=k,M.far=b.far=T.far=ne,(D!==M.near||P!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,P=M.far),T.layers.mask=N.layers.mask|2,b.layers.mask=N.layers.mask|4,M.layers.mask=T.layers.mask|b.layers.mask;const q=N.parent,ie=M.cameras;j(M,q);for(let xe=0;xe<ie.length;xe++)j(ie[xe],q);ie.length===2?H(M,T,b):M.projectionMatrix.copy(T.projectionMatrix),X(N,M,q)};function X(N,k,ne){ne===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(ne.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ms*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let F=null;function V(N,k){if(u=k.getViewerPose(c||s),_=k,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let q=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,q=!0);for(let _e=0;_e<ne.length;_e++){const ve=ne[_e];let he=null;if(d!==null)he=d.getViewport(ve);else{const I=h.getViewSubImage(f,ve);he=I.viewport,_e===0&&(e.setRenderTargetTextures(y,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(y))}let Pe=S[_e];Pe===void 0&&(Pe=new $t,Pe.layers.enable(_e),Pe.viewport=new st,S[_e]=Pe),Pe.matrix.fromArray(ve.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ve.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(he.x,he.y,he.width,he.height),_e===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),q===!0&&M.cameras.push(Pe)}const ie=n.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&h){const _e=h.getDepthInformation(ne[0]);_e&&_e.isValid&&_e.texture&&g.init(e,_e,n.renderState)}}for(let ne=0;ne<x.length;ne++){const q=v[ne],ie=x[ne];q!==null&&ie!==void 0&&ie.update(q,k,c||s)}F&&F(N,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const Q=new tp;Q.setAnimationLoop(V),this.setAnimationLoop=function(N){F=N},this.dispose=function(){}}}const lr=new hi,ES=new qe;function bS(a,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,zd(a)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,v=y.envMapRotation;x&&(p.envMap.value=x,lr.copy(v),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),p.envMapRotation.value.setFromMatrix4(ES.makeRotationFromEuler(lr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function AS(a,e,t,i){let n={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function c(y,x){let v=n[y.id];v===void 0&&(_(y),v=u(y),n[y.id]=v,y.addEventListener("dispose",p));const E=x.program;i.updateUBOMapping(y,E);const w=e.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){const x=h();y.__bindingPointIndex=x;const v=a.createBuffer(),E=y.__size,w=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,E,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,v),v}function h(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=n[y.id],v=y.uniforms,E=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let w=0,T=v.length;w<T;w++){const b=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=b.length;S<M;S++){const D=b[S];if(d(D,w,S,E)===!0){const P=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let L=0;for(let G=0;G<U.length;G++){const O=U[G],Y=g(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,P+L,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,P,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,x,v,E){const w=y.value,T=x+"_"+v;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const b=E[T];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return E[T]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function _(y){const x=y.uniforms;let v=0;const E=16;for(let T=0,b=x.length;T<b;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,D=S.length;M<D;M++){const P=S[M],U=Array.isArray(P.value)?P.value:[P.value];for(let L=0,G=U.length;L<G;L++){const O=U[L],Y=g(O),H=v%E,j=H%Y.boundary,X=H+j;v+=j,X!==0&&E-X<Y.storage&&(v+=E-X),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=Y.storage}}}const w=v%E;return w>0&&(v+=E-w),y.__size=v,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function m(){for(const y in n)a.deleteBuffer(n[y]);s=[],n={},r={}}return{bind:l,update:c,dispose:m}}class wS{constructor(e={}){const{canvas:t=bg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Nt;let w=0,T=0,b=null,S=-1,M=null;const D=new st,P=new st;let U=null;const L=new Xe(0);let G=0,O=t.width,Y=t.height,H=1,j=null,X=null;const F=new st(0,0,O,Y),V=new st(0,0,O,Y);let Q=!1;const N=new Su;let k=!1,ne=!1;const q=new qe,ie=new qe,xe=new J,_e=new st,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Pe(){return b===null?H:1}let I=i;function Oe(C,K){return t.getContext(C,K)}try{const C={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lu}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const K="webgl2";if(I=Oe(K,C),I===null)throw Oe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Re,ae,be,de,R,A,B,$,ee,se,fe,le,me,Ue,ce,Se,Te,Ee,oe,Le,Fe,je,z;function ue(){Ae=new Ox(I),Ae.init(),Fe=new xS(I,Ae),Re=new Px(I,Ae,e,Fe),ae=new _S(I,Ae),Re.reverseDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),be=new Gx(I),de=new rS,R=new vS(I,Ae,ae,de,Re,Fe,be),A=new Ux(v),B=new Nx(v),$=new Y_(I),je=new Rx(I,$),ee=new Bx(I,$,be,je),se=new Vx(I,ee,$,be),Ee=new zx(I,Re,R),ce=new Dx(de),fe=new iS(v,A,B,Ae,Re,je,ce),le=new bS(v,de),me=new aS,Ue=new fS(Ae),Te=new wx(v,A,B,ae,se,d,l),Se=new mS(v,se,Re),z=new AS(I,be,Re,ae),oe=new Cx(I,Ae,be),Le=new kx(I,Ae,be),be.programs=fe.programs,v.capabilities=Re,v.extensions=Ae,v.properties=de,v.renderLists=me,v.shadowMap=Se,v.state=ae,v.info=be}ue();const te=new TS(v,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(O,Y,!1))},this.getSize=function(C){return C.set(O,Y)},this.setSize=function(C,K,re=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,Y=K,t.width=Math.floor(C*H),t.height=Math.floor(K*H),re===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(O*H,Y*H).floor()},this.setDrawingBufferSize=function(C,K,re){O=C,Y=K,H=re,t.width=Math.floor(C*re),t.height=Math.floor(K*re),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,K,re,W){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,K,re,W),ae.viewport(D.copy(F).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(V)},this.setScissor=function(C,K,re,W){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,K,re,W),ae.scissor(P.copy(V).multiplyScalar(H).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){ae.setScissorTest(Q=C)},this.setOpaqueSort=function(C){j=C},this.setTransparentSort=function(C){X=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,re=!0){let W=0;if(C){let Z=!1;if(b!==null){const Me=b.texture.format;Z=Me===mu||Me===pu||Me===du}if(Z){const Me=b.texture.type,we=Me===Pi||Me===Ar||Me===ua||Me===ha||Me===uu||Me===hu,De=Te.getClearColor(),Ie=Te.getClearAlpha(),He=De.r,Ve=De.g,ke=De.b;we?(_[0]=He,_[1]=Ve,_[2]=ke,_[3]=Ie,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=He,g[1]=Ve,g[2]=ke,g[3]=Ie,I.clearBufferiv(I.COLOR,0,g))}else W|=I.COLOR_BUFFER_BIT}K&&(W|=I.DEPTH_BUFFER_BIT),re&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Te.dispose(),me.dispose(),Ue.dispose(),de.dispose(),A.dispose(),B.dispose(),se.dispose(),je.dispose(),z.dispose(),fe.dispose(),te.dispose(),te.removeEventListener("sessionstart",xt),te.removeEventListener("sessionend",rn),Vt.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=be.autoReset,K=Se.enabled,re=Se.autoUpdate,W=Se.needsUpdate,Z=Se.type;ue(),be.autoReset=C,Se.enabled=K,Se.autoUpdate=re,Se.needsUpdate=W,Se.type=Z}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ne(C){const K=C.target;K.removeEventListener("dispose",Ne),We(K)}function We(C){Be(C),de.remove(C)}function Be(C){const K=de.get(C).programs;K!==void 0&&(K.forEach(function(re){fe.releaseProgram(re)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,re,W,Z,Me){K===null&&(K=ve);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,De=Ko(C,K,re,W,Z);ae.setMaterial(W,we);let Ie=re.index,He=1;if(W.wireframe===!0){if(Ie=ee.getWireframeAttribute(re),Ie===void 0)return;He=2}const Ve=re.drawRange,ke=re.attributes.position;let et=Ve.start*He,tt=(Ve.start+Ve.count)*He;Me!==null&&(et=Math.max(et,Me.start*He),tt=Math.min(tt,(Me.start+Me.count)*He)),Ie!==null?(et=Math.max(et,0),tt=Math.min(tt,Ie.count)):ke!=null&&(et=Math.max(et,0),tt=Math.min(tt,ke.count));const mt=tt-et;if(mt<0||mt===1/0)return;je.setup(Z,W,De,re,Ie);let ft,nt=oe;if(Ie!==null&&(ft=$.get(Ie),nt=Le,nt.setIndex(ft)),Z.isMesh)W.wireframe===!0?(ae.setLineWidth(W.wireframeLinewidth*Pe()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(Z.isLine){let Ge=W.linewidth;Ge===void 0&&(Ge=1),ae.setLineWidth(Ge*Pe()),Z.isLineSegments?nt.setMode(I.LINES):Z.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else Z.isPoints?nt.setMode(I.POINTS):Z.isSprite&&nt.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))nt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ge=Z._multiDrawStarts,Mt=Z._multiDrawCounts,Qe=Z._multiDrawCount,Zt=Ie?$.get(Ie).bytesPerElement:1,Qn=de.get(W).currentProgram.getUniforms();for(let Bt=0;Bt<Qe;Bt++)Qn.setValue(I,"_gl_DrawID",Bt),nt.render(Ge[Bt]/Zt,Mt[Bt])}else if(Z.isInstancedMesh)nt.renderInstances(et,mt,Z.count);else if(re.isInstancedBufferGeometry){const Ge=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Mt=Math.min(re.instanceCount,Ge);nt.renderInstances(et,mt,Mt)}else nt.render(et,mt)};function ze(C,K,re){C.transparent===!0&&C.side===ln&&C.forceSinglePass===!1?(C.side=un,C.needsUpdate=!0,wn(C,K,re),C.side=Ci,C.needsUpdate=!0,wn(C,K,re),C.side=ln):wn(C,K,re)}this.compile=function(C,K,re=null){re===null&&(re=C),m=Ue.get(re),m.init(K),x.push(m),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),C!==re&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();const W=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Me=Z.material;if(Me)if(Array.isArray(Me))for(let we=0;we<Me.length;we++){const De=Me[we];ze(De,re,Z),W.add(De)}else ze(Me,re,Z),W.add(Me)}),m=x.pop(),W},this.compileAsync=function(C,K,re=null){const W=this.compile(C,K,re);return new Promise(Z=>{function Me(){if(W.forEach(function(we){de.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){Z(C);return}setTimeout(Me,10)}Ae.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ct=null;function ht(C){ct&&ct(C)}function xt(){Vt.stop()}function rn(){Vt.start()}const Vt=new tp;Vt.setAnimationLoop(ht),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(C){ct=C,te.setAnimationLoop(C),C===null?Vt.stop():Vt.start()},te.addEventListener("sessionstart",xt),te.addEventListener("sessionend",rn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(K),K=te.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,K,b),m=Ue.get(C,x.length),m.init(K),x.push(m),ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),N.setFromProjectionMatrix(ie),ne=this.localClippingEnabled,k=ce.init(this.clippingPlanes,ne),p=me.get(C,y.length),p.init(),y.push(p),te.enabled===!0&&te.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&gn(Me,K,-1/0,v.sortObjects)}gn(C,K,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(j,X),he=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,he&&Te.addToRenderList(p,C),this.info.render.frame++,k===!0&&ce.beginShadows();const re=m.state.shadowsArray;Se.render(re,C,K),k===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,Z=p.transmissive;if(m.setupLights(),K.isArrayCamera){const Me=K.cameras;if(Z.length>0)for(let we=0,De=Me.length;we<De;we++){const Ie=Me[we];Jn(W,Z,C,Ie)}he&&Te.render(C);for(let we=0,De=Me.length;we<De;we++){const Ie=Me[we];In(p,C,Ie,Ie.viewport)}}else Z.length>0&&Jn(W,Z,C,K),he&&Te.render(C),In(p,C,K);b!==null&&T===0&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),C.isScene===!0&&C.onAfterRender(v,C,K),je.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(m=x[x.length-1],k===!0&&ce.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function gn(C,K,re,W){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||N.intersectsSprite(C)){W&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ie);const we=se.update(C),De=C.material;De.visible&&p.push(C,we,De,re,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||N.intersectsObject(C))){const we=se.update(C),De=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),_e.copy(we.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(ie)),Array.isArray(De)){const Ie=we.groups;for(let He=0,Ve=Ie.length;He<Ve;He++){const ke=Ie[He],et=De[ke.materialIndex];et&&et.visible&&p.push(C,we,et,re,_e.z,ke)}}else De.visible&&p.push(C,we,De,re,_e.z,null)}}const Me=C.children;for(let we=0,De=Me.length;we<De;we++)gn(Me[we],K,re,W)}function In(C,K,re,W){const Z=C.opaque,Me=C.transmissive,we=C.transparent;m.setupLightsView(re),k===!0&&ce.setGlobalState(v.clippingPlanes,re),W&&ae.viewport(D.copy(W)),Z.length>0&&sn(Z,K,re),Me.length>0&&sn(Me,K,re),we.length>0&&sn(we,K,re),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Jn(C,K,re,W){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new wr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?bi:Pi,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Me=m.state.transmissionRenderTarget[W.id],we=W.viewport||D;Me.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const De=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(L),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),he&&Te.render(re);const Ie=v.toneMapping;v.toneMapping=Zi;const He=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),k===!0&&ce.setGlobalState(v.clippingPlanes,W),sn(C,re,W),R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ke=0,et=K.length;ke<et;ke++){const tt=K[ke],mt=tt.object,ft=tt.geometry,nt=tt.material,Ge=tt.group;if(nt.side===ln&&mt.layers.test(W.layers)){const Mt=nt.side;nt.side=un,nt.needsUpdate=!0,Ut(mt,re,W,ft,nt,Ge),nt.side=Mt,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(Me),R.updateRenderTargetMipmap(Me))}v.setRenderTarget(De),v.setClearColor(L,G),He!==void 0&&(W.viewport=He),v.toneMapping=Ie}function sn(C,K,re){const W=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Me=C.length;Z<Me;Z++){const we=C[Z],De=we.object,Ie=we.geometry,He=we.group;let Ve=we.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),De.layers.test(re.layers)&&Ut(De,K,re,Ie,Ve,He)}}function Ut(C,K,re,W,Z,Me){C.onBeforeRender(v,K,re,W,Z,Me),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(v,K,re,W,C,Me),Z.transparent===!0&&Z.side===ln&&Z.forceSinglePass===!1?(Z.side=un,Z.needsUpdate=!0,v.renderBufferDirect(re,K,W,Z,C,Me),Z.side=Ci,Z.needsUpdate=!0,v.renderBufferDirect(re,K,W,Z,C,Me),Z.side=ln):v.renderBufferDirect(re,K,W,Z,C,Me),C.onAfterRender(v,K,re,W,Z,Me)}function wn(C,K,re){K.isScene!==!0&&(K=ve);const W=de.get(C),Z=m.state.lights,Me=m.state.shadowsArray,we=Z.state.version,De=fe.getParameters(C,Z.state,Me,K,re),Ie=fe.getProgramCacheKey(De);let He=W.programs;W.environment=C.isMeshStandardMaterial?K.environment:null,W.fog=K.fog,W.envMap=(C.isMeshStandardMaterial?B:A).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Ne),He=new Map,W.programs=He);let Ve=He.get(Ie);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===we)return Ur(C,De),Ve}else De.uniforms=fe.getUniforms(C),C.onBeforeCompile(De,v),Ve=fe.acquireProgram(De,Ie),He.set(Ie,Ve),W.uniforms=De.uniforms;const ke=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=ce.uniform),Ur(C,De),W.needsLights=Lr(C),W.lightsStateVersion=we,W.needsLights&&(ke.ambientLightColor.value=Z.state.ambient,ke.lightProbe.value=Z.state.probe,ke.directionalLights.value=Z.state.directional,ke.directionalLightShadows.value=Z.state.directionalShadow,ke.spotLights.value=Z.state.spot,ke.spotLightShadows.value=Z.state.spotShadow,ke.rectAreaLights.value=Z.state.rectArea,ke.ltc_1.value=Z.state.rectAreaLTC1,ke.ltc_2.value=Z.state.rectAreaLTC2,ke.pointLights.value=Z.state.point,ke.pointLightShadows.value=Z.state.pointShadow,ke.hemisphereLights.value=Z.state.hemi,ke.directionalShadowMap.value=Z.state.directionalShadowMap,ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ke.spotShadowMap.value=Z.state.spotShadowMap,ke.spotLightMatrix.value=Z.state.spotLightMatrix,ke.spotLightMap.value=Z.state.spotLightMap,ke.pointShadowMap.value=Z.state.pointShadowMap,ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function Ds(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=So.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Ur(C,K){const re=de.get(C);re.outputColorSpace=K.outputColorSpace,re.batching=K.batching,re.batchingColor=K.batchingColor,re.instancing=K.instancing,re.instancingColor=K.instancingColor,re.instancingMorph=K.instancingMorph,re.skinning=K.skinning,re.morphTargets=K.morphTargets,re.morphNormals=K.morphNormals,re.morphColors=K.morphColors,re.morphTargetsCount=K.morphTargetsCount,re.numClippingPlanes=K.numClippingPlanes,re.numIntersection=K.numClipIntersection,re.vertexAlphas=K.vertexAlphas,re.vertexTangents=K.vertexTangents,re.toneMapping=K.toneMapping}function Ko(C,K,re,W,Z){K.isScene!==!0&&(K=ve),R.resetTextureUnits();const Me=K.fog,we=W.isMeshStandardMaterial?K.environment:null,De=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Kt,Ie=(W.isMeshStandardMaterial?B:A).get(W.envMap||we),He=W.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ve=!!re.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!re.morphAttributes.position,et=!!re.morphAttributes.normal,tt=!!re.morphAttributes.color;let mt=Zi;W.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(mt=v.toneMapping);const ft=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,nt=ft!==void 0?ft.length:0,Ge=de.get(W),Mt=m.state.lights;if(k===!0&&(ne===!0||C!==M)){const It=C===M&&W.id===S;ce.setState(W,C,It)}let Qe=!1;W.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Mt.state.version||Ge.outputColorSpace!==De||Z.isBatchedMesh&&Ge.batching===!1||!Z.isBatchedMesh&&Ge.batching===!0||Z.isBatchedMesh&&Ge.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ge.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ge.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ge.instancingMorph===!1&&Z.morphTexture!==null||Ge.envMap!==Ie||W.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ce.numPlanes||Ge.numIntersection!==ce.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Ve||Ge.morphTargets!==ke||Ge.morphNormals!==et||Ge.morphColors!==tt||Ge.toneMapping!==mt||Ge.morphTargetsCount!==nt)&&(Qe=!0):(Qe=!0,Ge.__version=W.version);let Zt=Ge.currentProgram;Qe===!0&&(Zt=wn(W,K,Z));let Qn=!1,Bt=!1,Ht=!1;const dt=Zt.getUniforms(),kt=Ge.uniforms;if(ae.useProgram(Zt.program)&&(Qn=!0,Bt=!0,Ht=!0),W.id!==S&&(S=W.id,Bt=!0),Qn||M!==C){ae.buffers.depth.getReversed()?(q.copy(C.projectionMatrix),wg(q),Rg(q),dt.setValue(I,"projectionMatrix",q)):dt.setValue(I,"projectionMatrix",C.projectionMatrix),dt.setValue(I,"viewMatrix",C.matrixWorldInverse);const Ct=dt.map.cameraPosition;Ct!==void 0&&Ct.setValue(I,xe.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&dt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&dt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Bt=!0,Ht=!0)}if(Z.isSkinnedMesh){dt.setOptional(I,Z,"bindMatrix"),dt.setOptional(I,Z,"bindMatrixInverse");const It=Z.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(I,"boneTexture",It.boneTexture,R))}Z.isBatchedMesh&&(dt.setOptional(I,Z,"batchingTexture"),dt.setValue(I,"batchingTexture",Z._matricesTexture,R),dt.setOptional(I,Z,"batchingIdTexture"),dt.setValue(I,"batchingIdTexture",Z._indirectTexture,R),dt.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&dt.setValue(I,"batchingColorTexture",Z._colorsTexture,R));const Lt=re.morphAttributes;if((Lt.position!==void 0||Lt.normal!==void 0||Lt.color!==void 0)&&Ee.update(Z,re,Zt),(Bt||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,dt.setValue(I,"receiveShadow",Z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(kt.envMap.value=Ie,kt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&K.environment!==null&&(kt.envMapIntensity.value=K.environmentIntensity),Bt&&(dt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&Ra(kt,Ht),Me&&W.fog===!0&&le.refreshFogUniforms(kt,Me),le.refreshMaterialUniforms(kt,W,H,Y,m.state.transmissionRenderTarget[C.id]),So.upload(I,Ds(Ge),kt,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(So.upload(I,Ds(Ge),kt,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&dt.setValue(I,"center",Z.center),dt.setValue(I,"modelViewMatrix",Z.modelViewMatrix),dt.setValue(I,"normalMatrix",Z.normalMatrix),dt.setValue(I,"modelMatrix",Z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const It=W.uniformsGroups;for(let Ct=0,Ii=It.length;Ct<Ii;Ct++){const Fn=It[Ct];z.update(Fn,Zt),z.bind(Fn,Zt)}}return Zt}function Ra(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Lr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,K,re){const W=de.get(C);W.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),de.get(C.texture).__webglTexture=K,de.get(C.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:re,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const re=de.get(C);re.__webglFramebuffer=K,re.__useDefaultFramebuffer=K===void 0};const Us=I.createFramebuffer();this.setRenderTarget=function(C,K=0,re=0){b=C,w=K,T=re;let W=!0,Z=null,Me=!1,we=!1;if(C){const Ie=de.get(C);if(Ie.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(Ie.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Ie.__hasExternalTextures)R.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(Ie.__boundDepthTexture!==ke){if(ke!==null&&de.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const Ve=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[K])?Z=Ve[K][re]:Z=Ve[K],Me=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?Z=de.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?Z=Ve[re]:Z=Ve,D.copy(C.viewport),P.copy(C.scissor),U=C.scissorTest}else D.copy(F).multiplyScalar(H).floor(),P.copy(V).multiplyScalar(H).floor(),U=Q;if(re!==0&&(Z=Us),ae.bindFramebuffer(I.FRAMEBUFFER,Z)&&W&&ae.drawBuffers(C,Z),ae.viewport(D),ae.scissor(P),ae.setScissorTest(U),Me){const Ie=de.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ie.__webglTexture,re)}else if(we){const Ie=de.get(C.texture),He=K;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,re,He)}else if(C!==null&&re!==0){const Ie=de.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,re)}S=-1},this.readRenderTargetPixels=function(C,K,re,W,Z,Me,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){ae.bindFramebuffer(I.FRAMEBUFFER,De);try{const Ie=C.texture,He=Ie.format,Ve=Ie.type;if(!Re.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-W&&re>=0&&re<=C.height-Z&&I.readPixels(K,re,W,Z,Fe.convert(He),Fe.convert(Ve),Me)}finally{const Ie=b!==null?de.get(b).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,K,re,W,Z,Me,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(K>=0&&K<=C.width-W&&re>=0&&re<=C.height-Z){ae.bindFramebuffer(I.FRAMEBUFFER,De);const Ie=C.texture,He=Ie.format,Ve=Ie.type;if(!Re.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.bufferData(I.PIXEL_PACK_BUFFER,Me.byteLength,I.STREAM_READ),I.readPixels(K,re,W,Z,Fe.convert(He),Fe.convert(Ve),0);const et=b!==null?de.get(b).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,et);const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ag(I,tt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Me),I.deleteBuffer(ke),I.deleteSync(tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,re=0){const W=Math.pow(2,-re),Z=Math.floor(C.image.width*W),Me=Math.floor(C.image.height*W),we=K!==null?K.x:0,De=K!==null?K.y:0;R.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,re,0,0,we,De,Z,Me),ae.unbindTexture()};const Zo=I.createFramebuffer(),Ca=I.createFramebuffer();this.copyTextureToTexture=function(C,K,re=null,W=null,Z=0,Me=null){Me===null&&(Z!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Z,Z=0):Me=0);let we,De,Ie,He,Ve,ke,et,tt,mt;const ft=C.isCompressedTexture?C.mipmaps[Me]:C.image;if(re!==null)we=re.max.x-re.min.x,De=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,He=re.min.x,Ve=re.min.y,ke=re.isBox3?re.min.z:0;else{const Lt=Math.pow(2,-Z);we=Math.floor(ft.width*Lt),De=Math.floor(ft.height*Lt),C.isDataArrayTexture?Ie=ft.depth:C.isData3DTexture?Ie=Math.floor(ft.depth*Lt):Ie=1,He=0,Ve=0,ke=0}W!==null?(et=W.x,tt=W.y,mt=W.z):(et=0,tt=0,mt=0);const nt=Fe.convert(K.format),Ge=Fe.convert(K.type);let Mt;K.isData3DTexture?(R.setTexture3D(K,0),Mt=I.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(R.setTexture2DArray(K,0),Mt=I.TEXTURE_2D_ARRAY):(R.setTexture2D(K,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,K.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,K.unpackAlignment);const Qe=I.getParameter(I.UNPACK_ROW_LENGTH),Zt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qn=I.getParameter(I.UNPACK_SKIP_PIXELS),Bt=I.getParameter(I.UNPACK_SKIP_ROWS),Ht=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const dt=C.isDataArrayTexture||C.isData3DTexture,kt=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const Lt=de.get(C),It=de.get(K),Ct=de.get(Lt.__renderTarget),Ii=de.get(It.__renderTarget);ae.bindFramebuffer(I.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Fn=0;Fn<Ie;Fn++)dt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(C).__webglTexture,Z,ke+Fn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(K).__webglTexture,Me,mt+Fn)),I.blitFramebuffer(He,Ve,we,De,et,tt,we,De,I.DEPTH_BUFFER_BIT,I.NEAREST);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||de.has(C)){const Lt=de.get(C),It=de.get(K);ae.bindFramebuffer(I.READ_FRAMEBUFFER,Zo),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ca);for(let Ct=0;Ct<Ie;Ct++)dt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,Z,ke+Ct):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,Z),kt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.__webglTexture,Me,mt+Ct):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,It.__webglTexture,Me),Z!==0?I.blitFramebuffer(He,Ve,we,De,et,tt,we,De,I.COLOR_BUFFER_BIT,I.NEAREST):kt?I.copyTexSubImage3D(Mt,Me,et,tt,mt+Ct,He,Ve,we,De):I.copyTexSubImage2D(Mt,Me,et,tt,He,Ve,we,De);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else kt?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Mt,Me,et,tt,mt,we,De,Ie,nt,Ge,ft.data):K.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,Me,et,tt,mt,we,De,Ie,nt,ft.data):I.texSubImage3D(Mt,Me,et,tt,mt,we,De,Ie,nt,Ge,ft):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Me,et,tt,we,De,nt,Ge,ft.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Me,et,tt,ft.width,ft.height,nt,ft.data):I.texSubImage2D(I.TEXTURE_2D,Me,et,tt,we,De,nt,Ge,ft);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ht),Me===0&&K.generateMipmaps&&I.generateMipmap(Mt),ae.unbindTexture()},this.copyTextureToTexture3D=function(C,K,re=null,W=null,Z=0){return yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,K,re,W,Z)},this.initRenderTarget=function(C){de.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ae.unbindTexture()},this.resetState=function(){w=0,T=0,b=null,ae.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class RS extends A_{constructor(e){super(e),this.type=bi}parse(e){const s=function(b,S){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},u=`
`,h=function(b,S,M){S=S||1024;let P=b.pos,U=-1,L=0,G="",O=String.fromCharCode.apply(null,new Uint16Array(b.subarray(P,P+128)));for(;0>(U=O.indexOf(u))&&L<S&&P<b.byteLength;)G+=O,L+=O.length,P+=128,O+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(P,P+128)));return-1<U?(b.pos+=L+U+1,G+O.slice(0,U)):!1},f=function(b){const S=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let G,O;for((b.pos>=b.byteLength||!(G=h(b)))&&s(1,"no header found"),(O=G.match(S))||s(3,"bad initial token"),L.valid|=1,L.programtype=O[1],L.string+=G+`
`;G=h(b),G!==!1;){if(L.string+=G+`
`,G.charAt(0)==="#"){L.comments+=G+`
`;continue}if((O=G.match(M))&&(L.gamma=parseFloat(O[1])),(O=G.match(D))&&(L.exposure=parseFloat(O[1])),(O=G.match(P))&&(L.valid|=2,L.format=O[1]),(O=G.match(U))&&(L.valid|=4,L.height=parseInt(O[1],10),L.width=parseInt(O[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||s(3,"missing format specifier"),L.valid&4||s(3,"missing image size specifier"),L},d=function(b,S,M){const D=S;if(D<8||D>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);D!==(b[2]<<8|b[3])&&s(3,"wrong scanline width");const P=new Uint8Array(4*S*M);P.length||s(4,"unable to allocate buffer space");let U=0,L=0;const G=4*D,O=new Uint8Array(4),Y=new Uint8Array(G);let H=M;for(;H>0&&L<b.byteLength;){L+4>b.byteLength&&s(1),O[0]=b[L++],O[1]=b[L++],O[2]=b[L++],O[3]=b[L++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=D)&&s(3,"bad rgbe scanline format");let j=0,X;for(;j<G&&L<b.byteLength;){X=b[L++];const V=X>128;if(V&&(X-=128),(X===0||j+X>G)&&s(3,"bad scanline data"),V){const Q=b[L++];for(let N=0;N<X;N++)Y[j++]=Q}else Y.set(b.subarray(L,L+X),j),j+=X,L+=X}const F=D;for(let V=0;V<F;V++){let Q=0;P[U]=Y[V+Q],Q+=D,P[U+1]=Y[V+Q],Q+=D,P[U+2]=Y[V+Q],Q+=D,P[U+3]=Y[V+Q],U+=4}H--}return P},_=function(b,S,M,D){const P=b[S+3],U=Math.pow(2,P-128)/255;M[D+0]=b[S+0]*U,M[D+1]=b[S+1]*U,M[D+2]=b[S+2]*U,M[D+3]=1},g=function(b,S,M,D){const P=b[S+3],U=Math.pow(2,P-128)/255;M[D+0]=Va.toHalfFloat(Math.min(b[S+0]*U,65504)),M[D+1]=Va.toHalfFloat(Math.min(b[S+1]*U,65504)),M[D+2]=Va.toHalfFloat(Math.min(b[S+2]*U,65504)),M[D+3]=Va.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),y=m.width,x=m.height,v=d(p.subarray(p.pos),y,x);let E,w,T;switch(this.type){case cn:T=v.length/4;const b=new Float32Array(T*4);for(let M=0;M<T;M++)_(v,M*4,b,M*4);E=b,w=cn;break;case bi:T=v.length/4;const S=new Uint16Array(T*4);for(let M=0;M<T;M++)g(v,M*4,S,M*4);E=S,w=bi;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:x,data:E,header:m.string,gamma:m.gamma,exposure:m.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,i,n){function r(s,o){switch(s.type){case cn:case bi:s.colorSpace=Kt,s.minFilter=yt,s.magFilter=yt,s.generateMipmaps=!1,s.flipY=!0;break}t&&t(s,o)}return super.load(e,r,i,n)}}function bf(a,e){if(e===Qm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Oc||e===Dd){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,n=[];if(e===Oc)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class CS extends Pr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new IS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new jS(t)})}load(e,t,i,n){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=ra.extractUrlBase(e);s=ra.resolveURL(c,this.path)}else s=ra.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Tu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ap){try{s[$e.KHR_BINARY_GLTF]=new KS(e)}catch(h){n&&n(h);return}r=JSON.parse(s[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,s[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:s[h]=new US;break;case $e.KHR_DRACO_MESH_COMPRESSION:s[h]=new ZS(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:s[h]=new JS;break;case $e.KHR_MESH_QUANTIZATION:s[h]=new QS;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function PS(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DS{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Xe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Kt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new U_(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new P_(u),c.distance=h;break;case"spot":c=new R_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class US{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ai}extendParams(e,t,i){const n=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],Kt),e.opacity=s[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(n)}}class LS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class IS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(r)}}class FS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class NS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class OS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Kt)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Nt)),s.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class BS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class kS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(o[0],o[1],o[2],Kt),Promise.all(r)}}class GS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class zS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(o[0],o[1],o[2],Kt),s.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Nt)),Promise.all(r)}}class VS{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class HS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class WS{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class XS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qS{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,u=n.count,h=n.byteStride,f=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,h,f,n.mode,n.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(u*h);return s.decodeGltfBuffer(new Uint8Array(d),u,h,f,n.mode,n.filter),d})})}else return null}}class jS{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=i.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new qe,p=new J,m=new tr,y=new J(1,1,1),x=new o_(_.geometry,_.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,g.compose(p,m,y));for(const v in l)if(v==="_COLOR_0"){const E=l[v];x.instanceColor=new Do(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const ap="glTF",js=12,Af={JSON:1313821514,BIN:5130562};class KS{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-js,r=new DataView(e,js);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Af.JSON){const c=new Uint8Array(e,js+s,o);this.content=i.decode(c)}else if(l===Af.BIN){const c=js+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ZS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const h=zc[u]||u.toLowerCase();o[h]=s[u]}for(const u in e.attributes){const h=zc[u]||u.toLowerCase();if(s[u]!==void 0){const f=i.accessors[e.attributes[u]],d=as[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){n.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},o,c,Kt,f)})})}}class JS{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class QS{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class op extends Aa{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=n-t,h=(i-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,y=1-p,x=m-f+h;for(let v=0;v!==o;v++){const E=s[g+v+o],w=s[g+v+l]*u,T=s[_+v+o],b=s[_+v]*u;r[v]=y*E+x*w+p*T+m*b}return r}}const $S=new tr;class eM extends op{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return $S.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wf={9728:tn,9729:yt,9984:Sd,9985:po,9986:Js,9987:si},Rf={33071:ri,33648:Ro,10497:ps},kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tM={CUBICSPLINE:void 0,LINEAR:ma,STEP:pa},Gl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nM(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new _a({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),a.DefaultMaterial}function cr(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Si(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iM(a,e,t){let i=!1,n=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(n=!0),h.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):a.attributes.position;s.push(f)}if(n){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):a.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):a.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(a.morphAttributes.position=u),n&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function rM(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sM(a){let e;const t=a.extensions&&a.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+zl(t.attributes):e=a.indices+":"+zl(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)e+=":"+zl(a.targets[i]);return e}function zl(a){let e="";const t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function Vc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const oM=new qe;class lM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&s<98?this.textureLoader=new ep(this.options.manager):this.textureLoader=new I_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return cr(r,o,n),Si(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,s){i.load(ra.resolveURL(t.uri,n.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=kl[n.type],o=as[n.componentType],l=n.normalized===!0,c=new o(n.count*s);return Promise.resolve(new nn(c,s,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=kl[n.type],c=as[n.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,_=n.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let x=t.cache.get(y);x||(g=new c(o,m*d,n.count*d/u),x=new n_(g,d/u),t.cache.add(y,x)),p=new vu(x,l,f%d/u,_)}else o===null?g=new c(n.count*l):g=new c(o,f,n.count*l),p=new nn(g,l,_);if(n.sparse!==void 0){const m=kl.SCALAR,y=as[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,E=new y(s[1],x,n.sparse.count*m),w=new c(s[2],v,n.sparse.count*l);o!==null&&(p=new nn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,b=E.length;T<b;T++){const S=E[T];if(p.setX(S,w[T*l]),l>=2&&p.setY(S,w[T*l+1]),l>=3&&p.setZ(S,w[T*l+2]),l>=4&&p.setW(S,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=i.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const n=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[s.sampler]||{};return u.magFilter=wf[f.magFilter]||yt,u.minFilter=wf[f.minFilter]||si,u.wrapS=Rf[f.wrapS]||ps,u.wrapT=Rf[f.wrapT]||ps,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==yt,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const s=n.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:s.mimeType});return l=o.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Rt(g);p.needsUpdate=!0,f(p)}),t.load(ra.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Si(h,s),h.userData.mimeType=s.mimeType||aM(s.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new qd,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Yd,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||s){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return _a}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=n[$e.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Kt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Nt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ln);const u=r.alphaMode||Gl.OPAQUE;if(u===Gl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Gl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==ai&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&s!==ai&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==ai){const h=r.emissiveFactor;o.emissive=new Xe().setRGB(h[0],h[1],h[2],Kt)}return r.emissiveTexture!==void 0&&s!==ai&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){const h=new s(o);return r.name&&(h.name=r.name),Si(h,r),t.associations.set(h,{materials:e}),r.extensions&&cr(n,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Cf(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=sM(c),h=n[u];if(h)s.push(h.promise);else{let f;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Cf(new Kn,c,t),n[u]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?nM(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=s[d];let m;const y=c[d];if(p.mode===Dn.TRIANGLES||p.mode===Dn.TRIANGLE_STRIP||p.mode===Dn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new r_(g,y):new wt(g,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Dn.TRIANGLE_STRIP?m.geometry=bf(m.geometry,Dd):p.mode===Dn.TRIANGLE_FAN&&(m.geometry=bf(m.geometry,Oc));else if(p.mode===Dn.LINES)m=new u_(g,y);else if(p.mode===Dn.LINE_STRIP)m=new Mu(g,y);else if(p.mode===Dn.LINE_LOOP)m=new h_(g,y);else if(p.mode===Dn.POINTS)m=new f_(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&rM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Si(m,r),p.extensions&&cr(n,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&cr(n,h[0],r),h[0];const f=new xr;r.extensions&&cr(n,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new $t(Eg.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Ho(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Si(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),s=n,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h){o.push(h);const f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new yu(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],l=[],c=[],u=[];for(let h=0,f=n.channels.length;h<f;h++){const d=n.channels[h],_=n.samplers[d.sampler],g=d.target,p=g.node,m=n.parameters!==void 0?n.parameters[_.input]:_.input,y=n.parameters!==void 0?n.parameters[_.output]:_.output;g.node!==void 0&&(s.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(_),u.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let y=0,x=f.length;y<x;y++){const v=f[y],E=d[y],w=_[y],T=g[y],b=p[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=i._createAnimationTracks(v,E,w,T,b);if(S)for(let M=0;M<S.length;M++)m.push(S[M])}return new y_(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const s=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],o=n.children||[];for(let c=0,u=o.length;c<u;c++)s.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,oM)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Xd:c.length>1?u=new xr:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=s),Si(u,r),r.extensions&&cr(i,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new xr;i.name&&(r.name=n.createUniqueName(i.name)),Si(r,i),i.extensions&&cr(t,r,i);const s=i.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(n.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of n.associations)(f instanceof li||f instanceof Rt)&&h.set(f,d);return u.traverse(f=>{const d=n.associations.get(f);d!=null&&h.set(f,d)}),h};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const s=[],o=e.name?e.name:e.uuid,l=[];Hi[r.path]===Hi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Hi[r.path]){case Hi.weights:c=_s;break;case Hi.rotation:c=vs;break;case Hi.translation:case Hi.scale:c=xs;break;default:switch(i.itemSize){case 1:c=_s;break;case 2:case 3:default:c=xs;break}break}const u=n.interpolation!==void 0?tM[n.interpolation]:ma,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Hi[r.path],t.array,h,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),s.push(_)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Vc(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof vs?eM:op;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cM(a,e,t){const i=e.attributes,n=new qn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new J(l[0],l[1],l[2]),new J(c[0],c[1],c[2])),o.normalized){const u=Vc(as[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new J,l=new J;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Vc(as[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;const s=new jn;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=s}function Cf(a,e,t){const i=e.attributes,n=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in i){const o=zc[s]||s.toLowerCase();o in a.attributes||n.push(r(i[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(s)}return rt.workingColorSpace!==Kt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Si(a,e),cM(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?iM(a,e.targets,t):a})}var uM=`uniform float progress;
uniform float direction;

#define PI 3.1415926538

vec3 rotateAxis(vec3 p, vec3 axis, float angle) {
    return mix(dot(axis, p) * axis, p, cos(angle)) + cross(axis, p) * sin(angle);
}

void main() {
    vec3 pos = position;

    float twirlPeriod = sin(progress * PI * 2.);

    float rotateAngle = -direction * pow(sin(progress * PI), 1.5) * PI * 2.;

    float twirlAngle = -sin(uv.x - .5) * pow(twirlPeriod, 2.0) * -4.;

    float twirlRotate = rotateAngle + twirlAngle;

    pos = rotateAxis(pos, vec3(1., 0., 0.), twirlRotate);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`;function Mi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function lp(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},Cu,zt,pt,ci=1e8,qt=1/ci,Hc=Math.PI*2,hM=Hc/4,fM=0,cp=Math.sqrt,dM=Math.cos,pM=Math.sin,Ot=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Ui=function(e){return typeof e=="number"},Pu=function(e){return typeof e>"u"},fi=function(e){return typeof e=="object"},hn=function(e){return e!==!1},Du=function(){return typeof window<"u"},lo=function(e){return St(e)||Ot(e)},up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,Wc=/(?:-?\.?\d|\.)+/gi,hp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fp=/[+-]=-?[.\d]+/,dp=/[^,'"\[\]\s]+/gi,mM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,ti,Xc,Uu,bn={},Io={},pp,mp=function(e){return(Io=Ss(e,bn))&&mn},Lu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},va=function(e,t){return!t&&console.warn(e)},gp=function(e,t){return e&&(bn[e]=t)&&Io&&(Io[e]=t)||bn},xa=function(){return 0},gM={suppressEvents:!0,isStart:!0,kill:!1},Mo={suppressEvents:!0,kill:!1},_M={suppressEvents:!0},Iu={},Ji=[],Yc={},_p,Sn={},Hl={},Pf=30,To=[],Fu="",Nu=function(e){var t=e[0],i,n;if(fi(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=To.length;n--&&!To[n].targetTest(t););i=To[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new zp(e[n],i)))||e.splice(n,1);return e},Sr=function(e){return e._gsap||Nu(Ln(e))[0]._gsap},vp=function(e,t,i){return(i=e[t])&&St(i)?e[t]():Pu(i)&&e.getAttribute&&e.getAttribute(t)||i},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},os=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},vM=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Fo=function(){var e=Ji.length,t=Ji.slice(0),i,n;for(Yc={},Ji.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},xp=function(e,t,i,n){Ji.length&&!zt&&Fo(),e.render(t,i,zt&&t<0&&(e._initted||e._startAt)),Ji.length&&!zt&&Fo()},yp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dp).length<2?t:Ot(e)?e.trim():e},Sp=function(e){return e},An=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},xM=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Ss=function(e,t){for(var i in t)e[i]=t[i];return e},Df=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=fi(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},No=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},sa=function(e){var t=e.parent||gt,i=e.keyframes?xM(jt(e.keyframes)):An;if(hn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},yM=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Mp=function(e,t,i,n,r){var s=e[n],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=s,t.parent=t._dp=e,t},Xo=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,s=t._next;r?r._next=s:e[i]===t&&(e[i]=s),s?s._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},$i=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},SM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qc=function(e,t,i,n){return e._startAt&&(zt?e._startAt.revert(Mo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},MM=function a(e){return!e||e._ts&&a(e.parent)},Uf=function(e){return e._repeat?Ms(e._tTime,e=e.duration()+e._rDelay)*e:0},Ms=function(e,t){var i=Math.floor(e=At(e/t));return e&&i===e?i-1:i},Oo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Yo=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||qt)||0))},qo=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=At(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Yo(e),i._dirty||Mr(i,e)),e},Tp=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Oo(e.rawTime(),t),(!t._dur||wa(0,t.totalDuration(),i)-t._tTime>qt)&&t.render(i,!0)),Mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},ii=function(e,t,i,n){return t.parent&&$i(t),t._start=At((Ui(i)?i:i||e!==gt?Pn(e,i,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mp(e,t,"_first","_last",e._sort?"_start":0),jc(t)||(e._recent=t),n||Tp(e,t),e._ts<0&&qo(e,e._tTime),e},Ep=function(e,t){return(bn.ScrollTrigger||Lu("scrollTrigger",t))&&bn.ScrollTrigger.create(t,e)},bp=function(e,t,i,n,r){if(Bu(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_p!==Mn.frame)return Ji.push(e),e._lazy=[r,n],1},TM=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},jc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},EM=function(e,t,i,n){var r=e.ratio,s=t<0||!t&&(!e._start&&TM(e)&&!(!e._initted&&jc(e))||(e._ts<0||e._dp._ts<0)&&!jc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=wa(0,e._tDur,t),u=Ms(l,o),e._yoyo&&u&1&&(s=1-s),u!==Ms(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||zt||n||e._zTime===qt||!t&&e._zTime){if(!e._initted&&bp(e,t,n,i,l))return;for(h=e._zTime,e._zTime=t||(i?qt:0),i||(i=t&&!h),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&qc(e,t,i,!0),e._onUpdate&&!i&&Tn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Tn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&$i(e,1),!i&&!zt&&(Tn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bM=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ts=function(e,t,i,n){var r=e._repeat,s=At(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:At(s*(r+1)+e._rDelay*r):s,o>0&&!n&&qo(e,e._tTime=e._tDur*o),e.parent&&Yo(e),i||Mr(e.parent,e),e},Lf=function(e){return e instanceof en?Mr(e):Ts(e,e._dur)},AM={_start:0,endTime:xa,totalDuration:xa},Pn=function a(e,t,i){var n=e.labels,r=e._recent||AM,s=e.duration()>=ci?r.endTime(!1):e._dur,o,l,c;return Ot(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(jt(i)?i[0]:i).totalDuration()),o>1?a(e,t.substr(0,o-1),i)+l:s+l)):t==null?s:+t},aa=function(e,t,i){var n=Ui(t[1]),r=(n?2:1)+(e<2?0:1),s=t[r],o,l;if(n&&(s.duration=t[1]),s.parent=i,e){for(o=s,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=hn(l.vars.inherit)&&l.parent;s.immediateRender=hn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new bt(t[0],s,t[r+1])},nr=function(e,t){return e||e===0?t(e):t},wa=function(e,t,i){return i<e?e:i>t?t:i},Yt=function(e,t){return!Ot(e)||!(t=mM.exec(e))?"":t[1]},wM=function(e,t,i){return nr(i,function(n){return wa(e,t,n)})},Kc=[].slice,Ap=function(e,t){return e&&fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fi(e[0]))&&!e.nodeType&&e!==ti},RM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Ot(n)&&!t||Ap(n,1)?(r=i).push.apply(r,Ln(n)):i.push(n)})||i},Ln=function(e,t,i){return pt&&!t&&pt.selector?pt.selector(e):Ot(e)&&!i&&(Xc||!Es())?Kc.call((t||Uu).querySelectorAll(e),0):jt(e)?RM(e,i):Ap(e)?Kc.call(e,0):e?[e]:[]},Zc=function(e){return e=Ln(e)[0]||va("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ln(t,i.querySelectorAll?i:i===e?va("Invalid scope")||Uu.createElement("div"):e)}},wp=function(e){return e.sort(function(){return .5-Math.random()})},Rp=function(e){if(St(e))return e;var t=fi(e)?e:{each:e},i=Tr(t.ease),n=t.from||0,r=parseFloat(t.base)||0,s={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,h=n;return Ot(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],h=n[1]),function(f,d,_){var g=(_||t).length,p=s[g],m,y,x,v,E,w,T,b,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,ci])[1],!S){for(T=-1e8;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(p=s[g]=[],m=l?Math.min(S,g)*u-.5:n%S,y=S===ci?0:l?g*h/S-.5:n/S|0,T=0,b=ci,w=0;w<g;w++)x=w%S-m,v=y-(w/S|0),p[w]=E=c?Math.abs(c==="y"?v:x):cp(x*x+v*v),E>T&&(T=E),E<b&&(b=E);n==="random"&&wp(p),p.max=T-b,p.min=b,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(n==="edges"?-1:1),p.b=g<0?r-g:r,p.u=Yt(t.amount||t.each)||0,i=i&&g<0?Bp(i):i}return g=(p[f]-p.min)/p.max||0,At(p.b+(i?i(g):g)*p.v)+p.u}},Jc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=At(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Ui(i)?0:Yt(i))}},Cp=function(e,t){var i=jt(e),n,r;return!i&&fi(e)&&(n=i=e.radius||ci,e.values?(e=Ln(e.values),(r=!Ui(e[0]))&&(n*=n)):e=Jc(e.increment)),nr(t,i?St(e)?function(s){return r=e(s),Math.abs(r-s)<=n?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=ci,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!n||c<=n?e[u]:s,r||u===s||Ui(s)?u:u+Yt(s)}:Jc(e))},Pp=function(e,t,i,n){return nr(jt(e)?!t:i===!0?!!(i=0):!n,function(){return jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},CM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,s){return s(r)},n)}},PM=function(e,t){return function(i){return e(parseFloat(i))+(t||Yt(i))}},DM=function(e,t,i){return Up(e,t,0,1,i)},Dp=function(e,t,i){return nr(i,function(n){return e[~~t(n)]})},UM=function a(e,t,i){var n=t-e;return jt(e)?Dp(e,a(0,e.length),t):nr(i,function(r){return(n+(r-e)%n)%n+e})},LM=function a(e,t,i){var n=t-e,r=n*2;return jt(e)?Dp(e,a(0,e.length-1),t):nr(i,function(s){return s=(r+(s-e)%r)%r||0,e+(s>n?r-s:s)})},ya=function(e){for(var t=0,i="",n,r,s,o;~(n=e.indexOf("random(",t));)s=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,s-n-7).match(o?dp:Wc),i+=e.substr(t,n-t)+Pp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return i+e.substr(t,e.length-t)},Up=function(e,t,i,n,r){var s=t-e,o=n-i;return nr(r,function(l){return i+((l-e)/s*o||0)})},IM=function a(e,t,i,n){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Ot(e),o={},l,c,u,h,f;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},i=t}else n||(e=Ss(jt(e)?[]:{},e));if(!u){for(l in t)Ou.call(o,e,l,"get",t[l]);r=function(_){return zu(_,o)||(s?e.p:e)}}}return nr(i,r)},If=function(e,t,i){var n=e.labels,r=ci,s,o,l;for(s in n)o=n[s]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},Tn=function(e,t,i){var n=e.vars,r=n[t],s=pt,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Ji.length&&Fo(),o&&(pt=o),u=l?r.apply(c,l):r.call(c),pt=s,u},$s=function(e){return $i(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&Tn(e,"onInterrupt"),e},is,Lp=[],Ip=function(e){if(e)if(e=!e.name&&e.default||e,Du()||e.headless){var t=e.name,i=St(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:xa,render:zu,add:Ou,kill:ZM,modifier:KM,rawVars:0},s={targetTest:0,get:0,getSetter:Gu,aliases:{},register:0};if(Es(),e!==n){if(Sn[t])return;An(n,An(No(e,r),s)),Ss(n.prototype,Ss(r,No(e,s))),Sn[n.prop=t]=n,e.targetTest&&(To.push(n),Iu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gp(t,n),e.register&&e.register(mn,n,dn)}else Lp.push(e)},ut=255,ea={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Wl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},Fp=function(e,t,i){var n=e?Ui(e)?[e>>16,e>>8&ut,e&ut]:0:ea.black,r,s,o,l,c,u,h,f,d,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ea[e])n=ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ut,n&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Wc),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,n.length>3&&(n[3]*=1),n[0]=Wl(l+1/3,r,s),n[1]=Wl(l,r,s),n[2]=Wl(l-1/3,r,s);else if(~e.indexOf("="))return n=e.match(hp),i&&n.length<4&&(n[3]=1),n}else n=e.match(Wc)||ea.transparent;n=n.map(Number)}return t&&!_&&(r=n[0]/ut,s=n[1]/ut,o=n[2]/ut,h=Math.max(r,s,o),f=Math.min(r,s,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(s-o)/d+(s<o?6:0):h===s?(o-r)/d+2:(r-s)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Np=function(e){var t=[],i=[],n=-1;return e.split(Qi).forEach(function(r){var s=r.match(ns)||[];t.push.apply(t,s),i.push(n+=s.length+1)}),t.c=i,t},Ff=function(e,t,i){var n="",r=(e+n).match(Qi),s=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Fp(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=Np(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Qi,"1").split(ns),h=c.length-1;o<h;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Qi),h=c.length-1;o<h;o++)n+=c[o]+r[o];return n+c[h]},Qi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ea)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),FM=/hsl[a]?\(/,Op=function(e){var t=e.join(" "),i;if(Qi.lastIndex=0,Qi.test(t))return i=FM.test(t),e[1]=Ff(e[1],i),e[0]=Ff(e[0],i,Np(e[1])),!0},Sa,Mn=function(){var a=Date.now,e=500,t=33,i=a(),n=i,r=1e3/240,s=r,o=[],l,c,u,h,f,d,_=function g(p){var m=a()-n,y=p===!0,x,v,E,w;if((m>e||m<0)&&(i+=m-t),n+=m,E=n-i,x=E-s,(x>0||y)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,s+=x+(x>=r?4:r-x),v=1),y||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](E,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){pp&&(!Xc&&Du()&&(ti=Xc=window,Uu=ti.document||{},bn.gsap=mn,(ti.gsapVersions||(ti.gsapVersions=[])).push(mn.version),mp(Io||ti.GreenSockGlobals||!ti.gsap&&ti||{}),Lp.forEach(Ip)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,s-h.time*1e3+1|0)},Sa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sa=0,c=xa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),s=h.time*1e3+r},add:function(p,m,y){var x=m?function(v,E,w,T){p(v,E,w,T),h.remove(x)}:p;return h.remove(p),o[y?"unshift":"push"](x),Es(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Es=function(){return!Sa&&Mn.wake()},it={},NM=/^[\d.\-M][\d.\-,\s]/,OM=/["']/g,BM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,s=i.length,o,l,c;r<s;r++)l=i[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(OM,"").trim():+c,n=l.substr(o+1).trim();return t},kM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},GM=function(e){var t=(e+"").split("("),i=it[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[BM(t[1])]:kM(e).split(",").map(yp)):it._CE&&NM.test(e)?it._CE("",e):i},Bp=function(e){return function(t){return 1-e(1-t)}},kp=function a(e,t){for(var i=e._first,n;i;)i instanceof en?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Tr=function(e,t){return e&&(St(e)?e:it[e]||GM(e))||t},Dr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},s;return fn(e,function(o){it[o]=bn[o]=r,it[s=o.toLowerCase()]=i;for(var l in r)it[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=r[l]}),r},Gp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xl=function a(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),s=r/Hc*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*pM((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Gp(o);return r=Hc/r,l.config=function(c,u){return a(e,c,u)},l},Yl=function a(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Gp(i);return n.config=function(r){return a(e,r)},n};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Dr(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Dr("Elastic",Xl("in"),Xl("out"),Xl());(function(a,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?a*o*o:o<i?a*Math.pow(o-1.5/e,2)+.75:o<n?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Dr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Dr("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Dr("Circ",function(a){return-(cp(1-a*a)-1)});Dr("Sine",function(a){return a===1?1:-dM(a*hM)+1});Dr("Back",Yl("in"),Yl("out"),Yl());it.SteppedEase=it.steps=bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,s=1-qt;return function(o){return((n*wa(0,s,o)|0)+r)*i}}};ys.ease=it["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Fu+=a+","+a+"Params,"});var zp=function(e,t){this.id=fM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vp,this.set=t?t.getSetter:Gu},Ma=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ts(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Sa||Mn.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Es(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(qo(this,i),!r._dp||r.parent||Tp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===qt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),xp(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Uf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Uf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?Ms(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Oo(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(wa(-Math.abs(this._delay),this._tDur,r),n!==!1),Yo(this),SM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qt&&(this._tTime-=qt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ii(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(hn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oo(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_M);var n=zt;return zt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),zt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Lf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Lf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Pn(this,i),hn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,hn(n)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-qt)},e.eventCallback=function(i,n,r){var s=this.vars;return arguments.length>1?(n?(s[i]=n,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete s[i],this):s[i]},e.then=function(i){var n=this;return new Promise(function(r){var s=St(i)?i:Sp,o=function(){var c=n.then;n.then=null,St(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),r(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){$s(this)},a}();An(Ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var en=function(a){lp(e,a);function e(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=hn(i.sortChildren),gt&&ii(i.parent||gt,Mi(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Ep(Mi(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,s){return aa(0,arguments,this),this},t.from=function(n,r,s){return aa(1,arguments,this),this},t.fromTo=function(n,r,s,o){return aa(2,arguments,this),this},t.set=function(n,r,s){return r.duration=0,r.parent=this,sa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new bt(n,r,Pn(this,s),1),this},t.call=function(n,r,s){return ii(this,bt.delayedCall(0,n,r),s)},t.staggerTo=function(n,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new bt(n,s,Pn(this,l)),this},t.staggerFrom=function(n,r,s,o,l,c,u){return s.runBackwards=1,sa(s).immediateRender=hn(s.immediateRender),this.staggerTo(n,r,s,o,l,c,u)},t.staggerFromTo=function(n,r,s,o,l,c,u,h){return o.startAt=s,sa(o).immediateRender=hn(o.immediateRender),this.staggerTo(n,r,o,l,c,u,h)},t.render=function(n,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:At(n),h=this._zTime<0!=n<0&&(this._initted||!c),f,d,_,g,p,m,y,x,v,E,w,T;if(this!==gt&&u>l&&n>=0&&(u=l),u!==this._tTime||s||h){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),f=u,v=this._start,x=this._ts,m=!x,h&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,s);if(f=At(u%p),u===l?(g=this._repeat,f=c):(E=At(u/p),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=Ms(this._tTime,p),!o&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),w&&g&1&&(f=c-f,T=1),g!==E&&!this._lock){var b=w&&E&1,S=b===(w&&g&1);if(g<E&&(b=!b),o=b?0:u%c?c:u,this._lock=1,this.render(o||(T?0:At(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Tn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=b?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;kp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=bM(this,At(o),At(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&f&&!r&&!g&&(Tn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&n>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,s),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var M=n<0?n:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,s);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,s||zt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=M?-1e-8:qt);break}}d=_}}if(y&&!r&&(this.pause(),y.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=v,Yo(this),this.render(n,r,s);this._onUpdate&&!r&&Tn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$i(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(Tn(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var s=this;if(Ui(r)||(r=Pn(this,r,n)),!(n instanceof Ma)){if(jt(n))return n.forEach(function(o){return s.add(o,r)}),this;if(Ot(n))return this.addLabel(n,r);if(St(n))n=bt.delayedCall(0,n);else return this}return this!==n?ii(this,n,r):this},t.getChildren=function(n,r,s,o){n===void 0&&(n=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof bt?r&&l.push(c):(s&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===n)return r[s]},t.remove=function(n){return Ot(n)?this.removeLabel(n):St(n)?this.killTweensOf(n):(n.parent===this&&Xo(this,n),n===this._recent&&(this._recent=this._last),Mr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(Mn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Pn(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,s){var o=bt.delayedCall(0,r||xa,s);return o.data="isPause",this._hasPause=1,ii(this,o,Pn(this,n))},t.removePause=function(n){var r=this._first;for(n=Pn(this,n);r;)r._start===n&&r.data==="isPause"&&$i(r),r=r._next},t.killTweensOf=function(n,r,s){for(var o=this.getTweensOf(n,s),l=o.length;l--;)Yi!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var s=[],o=Ln(n),l=this._first,c=Ui(r),u;l;)l instanceof bt?vM(l._targets,o)&&(c?(!Yi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(n,r){r=r||{};var s=this,o=Pn(s,n),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=bt.to(s,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||qt,onStart:function(){if(s.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==p&&Ts(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(n,r,s){return this.tweenTo(r,An({startAt:{time:Pn(this,n)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),If(this,Pn(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),If(this,Pn(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+qt)},t.shiftChildren=function(n,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=n);return Mr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Mr(this)},t.totalDuration=function(n){var r=0,s=this,o=s._last,l=ci,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(h=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,ii(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ts(s,s===gt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(n){if(gt._ts&&(xp(gt,Oo(n,gt)),_p=Mn.frame),Mn.frame>=Pf){Pf+=En.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&En.autoSleep&&Mn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Mn.sleep()}}},e}(Ma);An(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var zM=function(e,t,i,n,r,s,o){var l=new dn(this._pt,e,t,0,1,qp,null,r),c=0,u=0,h,f,d,_,g,p,m,y;for(l.b=i,l.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=ya(n)),s&&(y=[i,n],s(y,e,t),i=y[0],n=y[1]),f=i.match(Vl)||[];h=Vl.exec(n);)_=h[0],g=n.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?os(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Vl.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(fp.test(n)||m)&&(l.e=0),this._pt=l,l},Ou=function(e,t,i,n,r,s,o,l,c,u){St(n)&&(n=n(r||0,e,s));var h=e[t],f=i!=="get"?i:St(h)?c?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=St(h)?c?YM:Xp:ku,_;if(Ot(n)&&(~n.indexOf("random(")&&(n=ya(n)),n.charAt(1)==="="&&(_=os(f,n)+(Yt(f)||0),(_||_===0)&&(n=_))),!u||f!==n||Qc)return!isNaN(f*n)&&n!==""?(_=new dn(this._pt,e,t,+f||0,n-(f||0),typeof h=="boolean"?jM:Yp,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Lu(t,n),zM.call(this,e,t,f,n,d,l||En.stringFilter,c))},VM=function(e,t,i,n,r){if(St(e)&&(e=oa(e,r,t,i,n)),!fi(e)||e.style&&e.nodeType||jt(e)||up(e))return Ot(e)?oa(e,r,t,i,n):e;var s={},o;for(o in e)s[o]=oa(e[o],r,t,i,n);return s},Vp=function(e,t,i,n,r,s){var o,l,c,u;if(Sn[e]&&(o=new Sn[e]).init(r,o.rawVars?t[e]:VM(t[e],n,r,s,i),i,n,s)!==!1&&(i._pt=l=new dn(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==is))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Yi,Qc,Bu=function a(e,t,i){var n=e.vars,r=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,f=n.keyframes,d=n.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Cu,v=e.timeline,E,w,T,b,S,M,D,P,U,L,G,O,Y;if(v&&(!f||!r)&&(r="none"),e._ease=Tr(r,ys.ease),e._yEase=h?Bp(Tr(h===!0?r:h,ys.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!n.runBackwards,!v||f&&!n.stagger){if(P=p[0]?Sr(p[0]).harness:0,O=P&&n[P.prop],E=No(n,Iu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Mo:gM),g._lazy=0),s){if($i(e._startAt=bt.set(p,An({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&hn(l),startAt:null,delay:0,onUpdate:c&&function(){return Tn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!o&&!d)&&e._startAt.revert(Mo),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),T=An({overwrite:!1,data:"isFromStart",lazy:o&&!g&&hn(l),immediateRender:o,stagger:0,parent:m},E),O&&(T[P.prop]=O),$i(e._startAt=bt.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(Mo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,qt,qt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&hn(l)||l&&!_,w=0;w<p.length;w++){if(S=p[w],D=S._gsap||Nu(p)[w]._gsap,e._ptLookup[w]=L={},Yc[D.id]&&Ji.length&&Fo(),G=y===p?w:y.indexOf(S),P&&(U=new P).init(S,O||E,e,G,y)!==!1&&(e._pt=b=new dn(e._pt,S,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(H){L[H]=b}),U.priority&&(M=1)),!P||O)for(T in E)Sn[T]&&(U=Vp(T,E,e,G,S,y))?U.priority&&(M=1):L[T]=b=Ou.call(e,S,T,"get",E[T],G,y,0,n.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(Yi=e,gt.killTweensOf(S,L,e.globalTime(t)),Y=!e.parent,Yi=0),e._pt&&l&&(Yc[D.id]=1)}M&&jp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&v.render(ci,!0,!0)},HM=function(e,t,i,n,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qc=1,e.vars[t]="+=0",Bu(e,o),Qc=0,l?va(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(n||n===0)&&!r?n:u.s+(n||0)+s*u.c,u.c=i-u.s,h.e&&(h.e=Tt(i)+Yt(h.e)),h.b&&(h.b=u.s+Yt(h.b))},WM=function(e,t){var i=e[0]?Sr(e[0]).harness:0,n=i&&i.aliases,r,s,o,l;if(!n)return t;r=Ss({},t);for(s in n)if(s in r)for(l=n[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},XM=function(e,t,i,n){var r=t.ease||n||"power1.inOut",s,o;if(jt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},oa=function(e,t,i,n,r){return St(e)?e.call(t,i,n,r):Ot(e)&&~e.indexOf("random(")?ya(e):e},Hp=Fu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wp={};fn(Hp+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Wp[a]=1});var bt=function(a){lp(e,a);function e(i,n,r,s){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=a.call(this,s?n:sa(n))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=n.parent||gt,x=(jt(i)||up(i)?Ui(i[0]):"length"in n)?[i]:Ln(i),v,E,w,T,b,S,M,D;if(o._targets=x.length?Nu(x):va("GSAP target "+i+" not found. https://gsap.com",!En.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||lo(c)||lo(u)){if(n=o.vars,v=o.timeline=new en({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Mi(o),v._start=0,f||lo(c)||lo(u)){if(T=x.length,M=f&&Rp(f),fi(f))for(b in f)~Hp.indexOf(b)&&(D||(D={}),D[b]=f[b]);for(E=0;E<T;E++)w=No(n,Wp),w.stagger=0,m&&(w.yoyoEase=m),D&&Ss(w,D),S=x[E],w.duration=+oa(c,Mi(o),E,S,x),w.delay=(+oa(u,Mi(o),E,S,x)||0)-o._delay,!f&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(S,w,M?M(E,S,x):0),v._ease=it.none;v.duration()?c=u=0:o.timeline=0}else if(_){sa(An(v.vars.defaults,{ease:"none"})),v._ease=Tr(_.ease||n.ease||"none");var P=0,U,L,G;if(jt(_))_.forEach(function(O){return v.to(x,O,">")}),v.duration();else{w={};for(b in _)b==="ease"||b==="easeEach"||XM(b,_[b],w,_.easeEach);for(b in w)for(U=w[b].sort(function(O,Y){return O.t-Y.t}),P=0,E=0;E<U.length;E++)L=U[E],G={ease:L.e,duration:(L.t-(E?U[E-1].t:0))/100*c},G[b]=L.v,v.to(x,G,P),P+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Cu&&(Yi=Mi(o),gt.killTweensOf(x),Yi=0),ii(y,Mi(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(h||!c&&!_&&o._start===At(y._time)&&hn(h)&&MM(Mi(o))&&y.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),p&&Ep(Mi(o),p),o}var t=e.prototype;return t.render=function(n,r,s){var o=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-qt&&!u?l:n<qt?0:n,f,d,_,g,p,m,y,x,v;if(!c)EM(this,n,r,s);else if(h!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+n,r,s);if(f=At(h%g),h===l?(_=this._repeat,f=c):(p=At(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,f=c-f),p=Ms(this._tTime,g),f===o&&!s&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(x&&this._yEase&&kp(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=s=1,this.render(At(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(bp(this,u?n:f,s,r,h))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(n,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),f&&!o&&!r&&!_&&(Tn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(n<0?n:x._dur*x._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&qc(this,n,r,s),Tn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Tn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&qc(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&$i(this,1),!r&&!(u&&!o)&&(h||o||m)&&(Tn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,s,o,l){Sa||Mn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bu(this,c),u=this._ease(c/this._dur),HM(this,n,r,s,o,u,c,l)?this.resetTo(n,r,s,o,1):(qo(this,0),this.parent||Mp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$s(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,Yi&&Yi.vars.overwrite!==!0)._first||$s(this),this.parent&&s!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=n?Ln(n):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!r||r==="all")&&yM(o,l))return r==="all"&&(this._pt=0),$s(this);for(h=this._op=this._op||[],r!=="all"&&(Ot(r)&&(g={},fn(r,function(y){return g[y]=1}),r=g),r=WM(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(h[m]=r,_=f,d={}):(d=h[m]=h[m]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Xo(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&$s(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return aa(1,arguments)},e.delayedCall=function(n,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(n,r,s){return aa(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,s){return gt.killTweensOf(n,r,s)},e}(Ma);An(bt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(a){bt[a]=function(){var e=new en,t=Kc.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var ku=function(e,t,i){return e[t]=i},Xp=function(e,t,i){return e[t](i)},YM=function(e,t,i,n){return e[t](n.fp,i)},qM=function(e,t,i){return e.setAttribute(t,i)},Gu=function(e,t){return St(e[t])?Xp:Pu(e[t])&&e.setAttribute?qM:ku},Yp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qp=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},zu=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},KM=function(e,t,i,n){for(var r=this._pt,s;r;)s=r._next,r.p===n&&r.modifier(e,t,i),r=s},ZM=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Xo(this,t,"_pt"):t.dep||(i=1),t=n;return!i},JM=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},jp=function(e){for(var t=e._pt,i,n,r,s;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:s)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:s=t,t=i}e._pt=r},dn=function(){function a(t,i,n,r,s,o,l,c,u){this.t=i,this.s=r,this.c=s,this.p=n,this.r=o||Yp,this.d=l||this,this.set=c||ku,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=JM,this.m=i,this.mt=r,this.tween=n},a}();fn(Fu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Iu[a]=1});bn.TweenMax=bn.TweenLite=bt;bn.TimelineLite=bn.TimelineMax=en;gt=new en({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=Op;var Er=[],Eo={},QM=[],Nf=0,$M=0,ql=function(e){return(Eo[e]||QM).map(function(t){return t()})},$c=function(){var e=Date.now(),t=[];e-Nf>2&&(ql("matchMediaInit"),Er.forEach(function(i){var n=i.queries,r=i.conditions,s,o,l,c;for(o in n)s=ti.matchMedia(n[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(i.revert(),l&&t.push(i))}),ql("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Nf=e,ql("matchMedia"))},Kp=function(){function a(t,i){this.selector=i&&Zc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=$M++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,n,r){St(i)&&(r=n,n=i,i=St);var s=this,o=function(){var c=pt,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=Zc(r)),pt=s,h=n.apply(s,arguments),St(h)&&s._r.push(h),pt=c,s.selector=u,s.isReverted=!1,h};return s.last=o,i===St?o(s,function(l){return s.add(null,l)}):i?s[i]=o:o},e.ignore=function(i){var n=pt;pt=null,i(this),pt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof bt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof en?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof bt)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var s=Er.length;s--;)Er[s].id===this.id&&Er.splice(s,1)},e.revert=function(i){this.kill(i||{})},a}(),e1=function(){function a(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=a.prototype;return e.add=function(i,n,r){fi(i)||(i={matches:i});var s=new Kp(0,r||this.scope),o=s.conditions={},l,c,u;pt&&!s.selector&&(s.selector=pt.selector),this.contexts.push(s),n=s.add("onMatch",n),s.queries=i;for(c in i)c==="all"?u=1:(l=ti.matchMedia(i[c]),l&&(Er.indexOf(s)<0&&Er.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener($c):l.addEventListener("change",$c)));return u&&n(s,function(h){return s.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a}(),Bo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Ip(n)})},timeline:function(e){return new en(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ot(e)&&(e=Ln(e)[0]);var r=Sr(e||{}).get,s=i?Sp:yp;return i==="native"&&(i=""),e&&(t?s((Sn[t]&&Sn[t].get||r)(e,t,i,n)):function(o,l,c){return s((Sn[o]&&Sn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Ln(e),e.length>1){var n=e.map(function(u){return mn.quickSetter(u,t,i)}),r=n.length;return function(u){for(var h=r;h--;)n[h](u)}}e=e[0]||{};var s=Sn[t],o=Sr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var h=new s;is._pt=0,h.init(e,i?u+i:u,is,0,[e]),h.render(1,h),is._pt&&zu(1,is)}:o.set(e,l);return s?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=mn.to(e,An((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Tr(e.ease,ys.ease)),Df(ys,e||{})},config:function(e){return Df(En,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,s=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Sn[o]&&!bn[o]&&va(t+" effect requires "+o+" plugin.")}),Hl[t]=function(o,l,c){return i(Ln(o),An(l||{},r),c)},s&&(en.prototype[t]=function(o,l,c){return this.add(Hl[t](o,fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Tr(t)},parseEase:function(e,t){return arguments.length?Tr(e,t):it},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new en(e),n,r;for(i.smoothChildTiming=hn(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,n=gt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof bt&&n.vars.onComplete===n._targets[0]))&&ii(i,n,n._start-n._delay),n=r;return ii(gt,i,0),i},context:function(e,t){return e?new Kp(e,t):pt},matchMedia:function(e){return new e1(e)},matchMediaRefresh:function(){return Er.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||$c()},addEventListener:function(e,t){var i=Eo[e]||(Eo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Eo[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:UM,wrapYoyo:LM,distribute:Rp,random:Pp,snap:Cp,normalize:DM,getUnit:Yt,clamp:wM,splitColor:Fp,toArray:Ln,selector:Zc,mapRange:Up,pipe:CM,unitize:PM,interpolate:IM,shuffle:wp},install:mp,effects:Hl,ticker:Mn,updateRoot:en.updateRoot,plugins:Sn,globalTimeline:gt,core:{PropTween:dn,globals:gp,Tween:bt,Timeline:en,Animation:Ma,getCache:Sr,_removeLinkedListItem:Xo,reverting:function(){return zt},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Cu=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Bo[a]=bt[a]});Mn.add(en.updateRoot);is=Bo.to({},{duration:0});var t1=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},n1=function(e,t){var i=e._targets,n,r,s;for(n in t)for(r=i.length;r--;)s=e._ptLookup[r][n],s&&(s=s.d)&&(s._pt&&(s=t1(s,n)),s&&s.modifier&&s.modifier(t[n],e,i[r],n))},jl=function(e,t){return{name:e,rawVars:1,init:function(n,r,s){s._onInit=function(o){var l,c;if(Ot(r)&&(l={},fn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}n1(o,r)}}}},mn=Bo.registerPlugin({name:"attr",init:function(e,t,i,n,r){var s,o,l;this.tween=i;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],n,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)zt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},jl("roundProps",Jc),jl("modifiers"),jl("snap",Cp))||Bo;bt.version=en.version=mn.version="3.12.7";pp=1;Du()&&Es();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Of,qi,ls,Vu,yr,Bf,Hu,i1=function(){return typeof window<"u"},Li={},gr=180/Math.PI,cs=Math.PI/180,Jr=Math.atan2,kf=1e8,Wu=/([A-Z])/g,r1=/(left|right|width|margin|padding|x)/i,s1=/[\s,\(]\S/,oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},a1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},o1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},l1=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Zp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},c1=function(e,t,i){return e.style[t]=i},u1=function(e,t,i){return e.style.setProperty(t,i)},h1=function(e,t,i){return e._gsap[t]=i},f1=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},d1=function(e,t,i,n,r){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},p1=function(e,t,i,n,r){var s=e._gsap;s[t]=i,s.renderTransform(r,s)},_t="transform",pn=_t+"Origin",m1=function a(e,t){var i=this,n=this.target,r=n.style,s=n._gsap;if(e in Li&&r){if(this.tfm=this.tfm||{},e!=="transform")e=oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Ti(n,o)}):this.tfm[e]=s.x?s[e]:Ti(n,e),e===pn&&(this.tfm.zOrigin=s.zOrigin);else return oi.transform.split(",").forEach(function(o){return a.call(i,o,t)});if(this.props.indexOf(_t)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(pn,t,"")),e=_t}(r||t)&&this.props.push(e,t,r[e])},Qp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},g1=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Wu,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)n[s]=this.tfm[s];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Hu(),(!r||!r.isStart)&&!i[_t]&&(Qp(i),n.zOrigin&&i[pn]&&(i[pn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},$p=function(e,t){var i={target:e,props:[],revert:g1,save:m1};return e._gsap||mn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},em,tu=function(e,t){var i=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return i&&i.style?i:qi.createElement(e)},ui=function a(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Wu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&a(e,bs(t)||t,1)||""},Gf="O,Moz,ms,Ms,Webkit".split(","),bs=function(e,t,i){var n=t||yr,r=n.style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Gf[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Gf[s]:"")+e},nu=function(){i1()&&window.document&&(Of=window,qi=Of.document,ls=qi.documentElement,yr=tu("div")||{style:{}},tu("div"),_t=bs(_t),pn=_t+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",em=!!bs("perspective"),Hu=mn.core.reverting,Vu=1)},zf=function(e){var t=e.ownerSVGElement,i=tu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),ls.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),ls.removeChild(i),r},Vf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},tm=function(e){var t,i;try{t=e.getBBox()}catch{t=zf(e),i=1}return t&&(t.width||t.height)||i||(t=zf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Vf(e,["x","cx","x1"])||0,y:+Vf(e,["y","cy","y1"])||0,width:0,height:0}:t},nm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tm(e))},Rr=function(e,t){if(t){var i=e.style,n;t in Li&&t!==pn&&(t=_t),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Wu,"-$1").toLowerCase())):i.removeAttribute(t)}},ji=function(e,t,i,n,r,s){var o=new dn(e._pt,t,i,0,1,s?Jp:Zp);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},Hf={deg:1,rad:1,turn:1},_1={grid:1,flex:1},er=function a(e,t,i,n){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",o=yr.style,l=r1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=n==="px",d=n==="%",_,g,p,m;if(n===s||!r||Hf[n]||Hf[s])return r;if(s!=="px"&&!f&&(r=a(e,t,i,"px")),m=e.getCTM&&nm(e),(d||s==="%")&&(Li[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Tt(d?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(f?s:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===qi||!g.appendChild)&&(g=qi.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Mn.time&&!p.uncache)return Tt(r/p.width*h);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+n,_=e[u],y?e.style[t]=y:Rr(e,t)}else(d||s==="%")&&!_1[ui(g,"display")]&&(o.position=ui(e,"position")),g===e&&(o.position="static"),g.appendChild(yr),_=yr[u],g.removeChild(yr),o.position="absolute";return l&&d&&(p=Sr(g),p.time=Mn.time,p.width=g[u]),Tt(f?_*r/h:_&&r?h/_*r:0)},Ti=function(e,t,i,n){var r;return Vu||nu(),t in oi&&t!=="transform"&&(t=oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Li[t]&&t!=="transform"?(r=Ea(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Go(ui(e,pn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=ko[t]&&ko[t](e,t,i)||ui(e,t)||vp(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?er(e,t,r,i)+i:r},v1=function(e,t,i,n){if(!i||i==="none"){var r=bs(t,e,1),s=r&&ui(e,r,1);s&&s!==i?(t=r,i=s):t==="borderColor"&&(i=ui(e,"borderTopColor"))}var o=new dn(this._pt,e.style,t,0,1,qp),l=0,c=0,u,h,f,d,_,g,p,m,y,x,v,E;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(g=e.style[t],e.style[t]=n,n=ui(e,t)||n,g?e.style[t]=g:Rr(e,t)),u=[i,n],Op(u),i=u[0],n=u[1],f=i.match(ns)||[],E=n.match(ns)||[],E.length){for(;h=ns.exec(n);)p=h[0],y=n.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),p.charAt(1)==="="&&(p=os(d,p)+v),m=parseFloat(p),x=p.substr((m+"").length),l=ns.lastIndex-x.length,x||(x=x||En.units[t]||v,l===n.length&&(n+=x,o.e+=x)),v!==x&&(d=er(e,t,g,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Jp:Zp;return fp.test(n)&&(o.e=0),this._pt=o,o},Wf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},x1=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Wf[i]||i,t[1]=Wf[n]||n,t.join(" ")},y1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,s=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Li[o]&&(l=1,o=o==="transformOrigin"?pn:_t),Rr(i,o);l&&(Rr(i,_t),s&&(s.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ea(i,1),s.uncache=1,Qp(n)))}},ko={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var s=e._pt=new dn(e._pt,t,i,0,0,y1);return s.u=n,s.pr=-10,s.tween=r,e._props.push(i),1}}},Ta=[1,0,0,1,0,0],im={},rm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Xf=function(e){var t=ui(e,_t);return rm(t)?Ta:t.substr(7).match(hp).map(Tt)},Xu=function(e,t){var i=e._gsap||Sr(e),n=e.style,r=Xf(e),s,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ta:r):(r===Ta&&!e.offsetParent&&e!==ls&&!i.svg&&(l=n.display,n.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,ls.appendChild(e)),r=Xf(e),l?n.display=l:Rr(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):ls.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},iu=function(e,t,i,n,r,s){var o=e._gsap,l=r||Xu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,T,b,S;i?l!==Ta&&(T=d*p-_*g)&&(b=v*(p/T)+E*(-g/T)+(g*y-p*m)/T,S=v*(-_/T)+E*(d/T)-(d*y-_*m)/T,v=b,E=S):(w=tm(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),n||n!==!1&&o.smooth?(m=v-c,y=E-u,o.xOffset=h+(m*d+y*g)-m,o.yOffset=f+(m*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[pn]="0px 0px",s&&(ji(s,o,"xOrigin",c,v),ji(s,o,"yOrigin",u,E),ji(s,o,"xOffset",h,o.xOffset),ji(s,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},Ea=function(e,t){var i=e._gsap||new zp(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=ui(e,pn)||"0",u,h,f,d,_,g,p,m,y,x,v,E,w,T,b,S,M,D,P,U,L,G,O,Y,H,j,X,F,V,Q,N,k;return u=h=f=g=p=m=y=x=v=0,d=_=1,i.svg=!!(e.getCTM&&nm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),n.scale=n.rotate=n.translate="none"),T=Xu(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),iu(e,Y||c,!!Y||i.originIsAbsolute,i.smooth!==!1,T)),E=i.xOrigin||0,w=i.yOrigin||0,T!==Ta&&(D=T[0],P=T[1],U=T[2],L=T[3],u=G=T[4],h=O=T[5],T.length===6?(d=Math.sqrt(D*D+P*P),_=Math.sqrt(L*L+U*U),g=D||P?Jr(P,D)*gr:0,y=U||L?Jr(U,L)*gr+g:0,y&&(_*=Math.abs(Math.cos(y*cs))),i.svg&&(u-=E-(E*D+w*U),h-=w-(E*P+w*L))):(k=T[6],Q=T[7],X=T[8],F=T[9],V=T[10],N=T[11],u=T[12],h=T[13],f=T[14],b=Jr(k,V),p=b*gr,b&&(S=Math.cos(-b),M=Math.sin(-b),Y=G*S+X*M,H=O*S+F*M,j=k*S+V*M,X=G*-M+X*S,F=O*-M+F*S,V=k*-M+V*S,N=Q*-M+N*S,G=Y,O=H,k=j),b=Jr(-U,V),m=b*gr,b&&(S=Math.cos(-b),M=Math.sin(-b),Y=D*S-X*M,H=P*S-F*M,j=U*S-V*M,N=L*M+N*S,D=Y,P=H,U=j),b=Jr(P,D),g=b*gr,b&&(S=Math.cos(b),M=Math.sin(b),Y=D*S+P*M,H=G*S+O*M,P=P*S-D*M,O=O*S-G*M,D=Y,G=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Tt(Math.sqrt(D*D+P*P+U*U)),_=Tt(Math.sqrt(O*O+k*k)),b=Jr(G,O),y=Math.abs(b)>2e-4?b*gr:0,v=N?1/(N<0?-N:N):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!rm(ui(e,_t)),Y&&e.setAttribute("transform",Y))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=f+s,i.scaleX=Tt(d),i.scaleY=Tt(_),i.rotation=Tt(g)+o,i.rotationX=Tt(p)+o,i.rotationY=Tt(m)+o,i.skewX=y+o,i.skewY=x+o,i.transformPerspective=v+s,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[pn]=Go(c)),i.xOffset=i.yOffset=0,i.force3D=En.force3D,i.renderTransform=i.svg?M1:em?sm:S1,i.uncache=0,i},Go=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kl=function(e,t,i){var n=Yt(t);return Tt(parseFloat(t)+parseFloat(er(e,"x",i+"px",n)))+n},S1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sm(e,t)},ur="0deg",Ks="0px",hr=") ",sm=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,p=i.transformPerspective,m=i.force3D,y=i.target,x=i.zOrigin,v="",E=m==="auto"&&e&&e!==1||m===!0;if(x&&(h!==ur||u!==ur)){var w=parseFloat(u)*cs,T=Math.sin(w),b=Math.cos(w),S;w=parseFloat(h)*cs,S=Math.cos(w),s=Kl(y,s,T*S*-x),o=Kl(y,o,-Math.sin(w)*-x),l=Kl(y,l,b*S*-x+x)}p!==Ks&&(v+="perspective("+p+hr),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(E||s!==Ks||o!==Ks||l!==Ks)&&(v+=l!==Ks||E?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+hr),c!==ur&&(v+="rotate("+c+hr),u!==ur&&(v+="rotateY("+u+hr),h!==ur&&(v+="rotateX("+h+hr),(f!==ur||d!==ur)&&(v+="skew("+f+", "+d+hr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+hr),y.style[_t]=v||"translate(0, 0)"},M1=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,p=i.xOffset,m=i.yOffset,y=i.forceCSS,x=parseFloat(s),v=parseFloat(o),E,w,T,b,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=cs,c*=cs,E=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-c)*-f,b=Math.cos(l-c)*f,c&&(u*=cs,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,b*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=Tt(E),w=Tt(w),T=Tt(T),b=Tt(b)):(E=h,b=f,w=T=0),(x&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=er(d,"x",s,"px"),v=er(d,"y",o,"px")),(_||g||p||m)&&(x=Tt(x+_-(_*E+g*T)+p),v=Tt(v+g-(_*w+g*b)+m)),(n||r)&&(S=d.getBBox(),x=Tt(x+n/100*S.width),v=Tt(v+r/100*S.height)),S="matrix("+E+","+w+","+T+","+b+","+x+","+v+")",d.setAttribute("transform",S),y&&(d.style[_t]=S)},T1=function(e,t,i,n,r){var s=360,o=Ot(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?gr:1),c=l-n,u=n+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-360)),h==="cw"&&c<0?c=(c+s*kf)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*kf)%s-~~(c/s)*s)),e._pt=f=new dn(e._pt,t,i,n,c,a1),f.e=u,f.u="deg",e._props.push(i),f},Yf=function(e,t){for(var i in t)e[i]=t[i];return e},E1=function(e,t,i){var n=Yf({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,l,c,u,h,f,d,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),s[_t]=t,o=Ea(i,1),Rr(i,_t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_t],s[_t]=t,o=Ea(i,1),s[_t]=c);for(l in Li)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Yt(c),_=Yt(u),h=d!==_?er(i,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new dn(e._pt,o,l,h,f-h,eu),e._pt.u=_||0,e._props.push(l));Yf(o,n)};fn("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",n="Bottom",r="Left",s=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?a+o:"border"+o+a});ko[e>1?"border"+a:a]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=s.map(function(_){return Ti(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},s.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var am={name:"css",register:nu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var s=this._props,o=e.style,l=i.vars.startAt,c,u,h,f,d,_,g,p,m,y,x,v,E,w,T,b;Vu||nu(),this.styles=this.styles||$p(e),b=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Sn[g]&&Vp(g,t,i,n,e,r)))){if(d=typeof u,_=ko[g],d==="function"&&(u=u.call(i,n,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ya(u)),_)_(this,e,g,u,i)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Qi.lastIndex=0,Qi.test(c)||(p=Yt(c),m=Yt(u)),m?p!==m&&(c=er(e,g,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,n,r,0,0,g),s.push(g),b.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,r):l[g],Ot(c)&&~c.indexOf("random(")&&(c=ya(c)),Yt(c+"")||c==="auto"||(c+=En.units[g]||Yt(Ti(e,g))||""),(c+"").charAt(1)==="="&&(c=Ti(e,g))):c=Ti(e,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in oi&&(g==="autoAlpha"&&(f===1&&Ti(e,"visibility")==="hidden"&&h&&(f=0),b.push("visibility",0,o.visibility),ji(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=oi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Li,x){if(this.styles.save(g),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||Ea(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new dn(this._pt,o,_t,0,1,E.renderTransform,E,0,-1),v.dep=1),g==="scale")this._pt=new dn(this._pt,E,"scaleY",E.scaleY,(y?os(E.scaleY,y+h):h)-E.scaleY||0,eu),this._pt.u=0,s.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(pn,0,o[pn]),u=x1(u),E.svg?iu(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&ji(this,E,"zOrigin",E.zOrigin,m),ji(this,o,g,Go(c),Go(u)));continue}else if(g==="svgOrigin"){iu(e,u,1,w,0,this);continue}else if(g in im){T1(this,E,g,f,y?os(f,y+u):u);continue}else if(g==="smoothOrigin"){ji(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){E1(this,u,e);continue}}else g in o||(g=bs(g)||g);if(x||(h||h===0)&&(f||f===0)&&!s1.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=Yt(u)||(g in En.units?En.units[g]:p),p!==m&&(f=er(e,g,c,m)),this._pt=new dn(this._pt,x?E:o,g,f,(y?os(f,y+h):h)-f,!x&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?l1:eu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=o1);else if(g in o)v1.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,n,r);else if(g!=="parseTransform"){Lu(g,u);continue}x||(g in o?b.push(g,0,o[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,c||e[g])),s.push(g)}}T&&jp(this)},render:function(e,t){if(t.tween._time||!Hu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ti,aliases:oi,getSetter:function(e,t,i){var n=oi[t];return n&&n.indexOf(",")<0&&(t=n),t in Li&&t!==pn&&(e._gsap.x||Ti(e,"x"))?i&&Bf===i?t==="scale"?f1:h1:(Bf=i||{})&&(t==="scale"?d1:p1):e.style&&!Pu(e.style[t])?c1:~t.indexOf("-")?u1:Gu(e,t)},core:{_removeProperty:Rr,_getMatrix:Xu}};mn.utils.checkPrefix=bs;mn.core.getStyleSaver=$p;(function(a,e,t,i){var n=fn(a+","+e+","+t,function(r){Li[r]=1});fn(e,function(r){En.units[r]="deg",im[r]=1}),oi[n[13]]=a+","+e,fn(i,function(r){var s=r.split(":");oi[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){En.units[a]="px"});mn.registerPlugin(am);var $n=mn.registerPlugin(am)||mn;$n.core.Tween;const qf=a=>{let e;const t=new Set,i=(c,u)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const f=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(d=>d(e,f))}},n=()=>e,o={setState:i,getState:n,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=a(i,n,o);return o},b1=a=>a?qf(a):qf;function A1(){var a=Object.create(null);function e(n,r){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=a[f.id].value),f}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=a[o].getTransferables&&a[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var r=n.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function w1(a){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,i=a.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var om=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return om=function(){return a},a},R1=0,C1=0,Zl=!1,la=Object.create(null),ca=Object.create(null),ru=Object.create(null);function Ps(a){if((!a||typeof a.init!="function")&&!Zl)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,i=a.getTransferables,n=a.workerId,r=w1(a);n==null&&(n="#default");var s="workerModule"+ ++R1,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(Zl=!0,u=Ps({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+bo(u)+`
)}`}),Zl=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!om())return r.apply(void 0,u);if(!l){l=jf(n,"registerModule",c.workerModuleData);var f=function(){l=null,ca[n].delete(f)};(ca[n]||(ca[n]=new Set)).add(f)}return l.then(function(d){var _=d.isCallable;if(_)return jf(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:bo(t),getTransferables:i&&bo(i)},c.onMainThread=r,c}function P1(a){ca[a]&&ca[a].forEach(function(e){e()}),la[a]&&(la[a].terminate(),delete la[a])}function bo(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function D1(a){var e=la[a];if(!e){var t=bo(A1);e=la[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,s=ru[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete ru[r],s(n)}}return e}function jf(a,e,t){return new Promise(function(i,n){var r=++C1;ru[r]=function(s){s.success?i(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},D1(a).postMessage({messageId:r,action:e,data:t})})}function lm(){var a=function(e){function t(j,X,F,V,Q,N,k,ne){var q=1-k;ne.x=q*q*j+2*q*k*F+k*k*Q,ne.y=q*q*X+2*q*k*V+k*k*N}function i(j,X,F,V,Q,N,k,ne,q,ie){var xe=1-q;ie.x=xe*xe*xe*j+3*xe*xe*q*F+3*xe*q*q*Q+q*q*q*k,ie.y=xe*xe*xe*X+3*xe*xe*q*V+3*xe*q*q*N+q*q*q*ne}function n(j,X){for(var F=/([MLQCZ])([^MLQCZ]*)/g,V,Q,N,k,ne;V=F.exec(j);){var q=V[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(V[1]){case"M":k=Q=q[0],ne=N=q[1];break;case"L":(q[0]!==k||q[1]!==ne)&&X("L",k,ne,k=q[0],ne=q[1]);break;case"Q":{X("Q",k,ne,k=q[2],ne=q[3],q[0],q[1]);break}case"C":{X("C",k,ne,k=q[4],ne=q[5],q[0],q[1],q[2],q[3]);break}case"Z":(k!==Q||ne!==N)&&X("L",k,ne,Q,N);break}}}function r(j,X,F){F===void 0&&(F=16);var V={x:0,y:0};n(j,function(Q,N,k,ne,q,ie,xe,_e,ve){switch(Q){case"L":X(N,k,ne,q);break;case"Q":{for(var he=N,Pe=k,I=1;I<F;I++)t(N,k,ie,xe,ne,q,I/(F-1),V),X(he,Pe,V.x,V.y),he=V.x,Pe=V.y;break}case"C":{for(var Oe=N,Ae=k,Re=1;Re<F;Re++)i(N,k,ie,xe,_e,ve,ne,q,Re/(F-1),V),X(Oe,Ae,V.x,V.y),Oe=V.x,Ae=V.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(j,X){var F=j.getContext?j.getContext("webgl",c):j,V=l.get(F);if(!V){let Oe=function(R){var A=N[R];if(!A&&(A=N[R]=F.getExtension(R),!A))throw new Error(R+" not supported");return A},Ae=function(R,A){var B=F.createShader(A);return F.shaderSource(B,R),F.compileShader(B),B},Re=function(R,A,B,$){if(!k[R]){var ee={},se={},fe=F.createProgram();F.attachShader(fe,Ae(A,F.VERTEX_SHADER)),F.attachShader(fe,Ae(B,F.FRAGMENT_SHADER)),F.linkProgram(fe),k[R]={program:fe,transaction:function(me){F.useProgram(fe),me({setUniform:function(ce,Se){for(var Te=[],Ee=arguments.length-2;Ee-- >0;)Te[Ee]=arguments[Ee+2];var oe=se[Se]||(se[Se]=F.getUniformLocation(fe,Se));F["uniform"+ce].apply(F,[oe].concat(Te))},setAttribute:function(ce,Se,Te,Ee,oe){var Le=ee[ce];Le||(Le=ee[ce]={buf:F.createBuffer(),loc:F.getAttribLocation(fe,ce),data:null}),F.bindBuffer(F.ARRAY_BUFFER,Le.buf),F.vertexAttribPointer(Le.loc,Se,F.FLOAT,!1,0,0),F.enableVertexAttribArray(Le.loc),Q?F.vertexAttribDivisor(Le.loc,Ee):Oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Le.loc,Ee),oe!==Le.data&&(F.bufferData(F.ARRAY_BUFFER,oe,Te),Le.data=oe)}})}}}k[R].transaction($)},ae=function(R,A){q++;try{F.activeTexture(F.TEXTURE0+q);var B=ne[R];B||(B=ne[R]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,B),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,B),A(B,q)}finally{q--}},be=function(R,A,B){var $=F.createFramebuffer();ie.push($),F.bindFramebuffer(F.FRAMEBUFFER,$),F.activeTexture(F.TEXTURE0+A),F.bindTexture(F.TEXTURE_2D,R),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,R,0);try{B($)}finally{F.deleteFramebuffer($),F.bindFramebuffer(F.FRAMEBUFFER,ie[--ie.length-1]||null)}},de=function(){N={},k={},ne={},q=-1,ie.length=0};var xe=Oe,_e=Ae,ve=Re,he=ae,Pe=be,I=de,Q=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,N={},k={},ne={},q=-1,ie=[];F.canvas.addEventListener("webglcontextlost",function(R){de(),R.preventDefault()},!1),l.set(F,V={gl:F,isWebGL2:Q,getExtension:Oe,withProgram:Re,withTexture:ae,withTextureFramebuffer:be,handleContextLoss:de})}X(V)}function h(j,X,F,V,Q,N,k,ne){k===void 0&&(k=15),ne===void 0&&(ne=null),u(j,function(q){var ie=q.gl,xe=q.withProgram,_e=q.withTexture;_e("copy",function(ve,he){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,Q,N,0,ie.RGBA,ie.UNSIGNED_BYTE,X),xe("copy",s,o,function(Pe){var I=Pe.setUniform,Oe=Pe.setAttribute;Oe("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),I("1i","image",he),ie.bindFramebuffer(ie.FRAMEBUFFER,ne||null),ie.disable(ie.BLEND),ie.colorMask(k&8,k&4,k&2,k&1),ie.viewport(F,V,Q,N),ie.scissor(F,V,Q,N),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function f(j,X,F){var V=j.width,Q=j.height;u(j,function(N){var k=N.gl,ne=new Uint8Array(V*Q*4);k.readPixels(0,0,V,Q,k.RGBA,k.UNSIGNED_BYTE,ne),j.width=X,j.height=F,h(k,ne,0,0,V,Q)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function _(j,X,F,V,Q,N){N===void 0&&(N=1);var k=new Uint8Array(j*X),ne=V[2]-V[0],q=V[3]-V[1],ie=[];r(F,function(Oe,Ae,Re,ae){ie.push({x1:Oe,y1:Ae,x2:Re,y2:ae,minX:Math.min(Oe,Re),minY:Math.min(Ae,ae),maxX:Math.max(Oe,Re),maxY:Math.max(Ae,ae)})}),ie.sort(function(Oe,Ae){return Oe.maxX-Ae.maxX});for(var xe=0;xe<j;xe++)for(var _e=0;_e<X;_e++){var ve=Pe(V[0]+ne*(xe+.5)/j,V[1]+q*(_e+.5)/X),he=Math.pow(1-Math.abs(ve)/Q,N)/2;ve<0&&(he=1-he),he=Math.max(0,Math.min(255,Math.round(he*255))),k[_e*j+xe]=he}return k;function Pe(Oe,Ae){for(var Re=1/0,ae=1/0,be=ie.length;be--;){var de=ie[be];if(de.maxX+ae<=Oe)break;if(Oe+ae>de.minX&&Ae-ae<de.maxY&&Ae+ae>de.minY){var R=m(Oe,Ae,de.x1,de.y1,de.x2,de.y2);R<Re&&(Re=R,ae=Math.sqrt(Re))}}return I(Oe,Ae)&&(ae=-ae),ae}function I(Oe,Ae){for(var Re=0,ae=ie.length;ae--;){var be=ie[ae];if(be.maxX<=Oe)break;var de=be.y1>Ae!=be.y2>Ae&&Oe<(be.x2-be.x1)*(Ae-be.y1)/(be.y2-be.y1)+be.x1;de&&(Re+=be.y1<be.y2?1:-1)}return Re!==0}}function g(j,X,F,V,Q,N,k,ne,q,ie){N===void 0&&(N=1),ne===void 0&&(ne=0),q===void 0&&(q=0),ie===void 0&&(ie=0),p(j,X,F,V,Q,N,k,null,ne,q,ie)}function p(j,X,F,V,Q,N,k,ne,q,ie,xe){N===void 0&&(N=1),q===void 0&&(q=0),ie===void 0&&(ie=0),xe===void 0&&(xe=0);for(var _e=_(j,X,F,V,Q,N),ve=new Uint8Array(_e.length*4),he=0;he<_e.length;he++)ve[he*4+xe]=_e[he];h(k,ve,q,ie,j,X,1<<3-xe,ne)}function m(j,X,F,V,Q,N){var k=Q-F,ne=N-V,q=k*k+ne*ne,ie=q?Math.max(0,Math.min(1,((j-F)*k+(X-V)*ne)/q)):0,xe=j-(F+ie*k),_e=X-(V+ie*ne);return xe*xe+_e*_e}var y=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:g,generateIntoFramebuffer:p}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,b=!1,S={},M=new WeakMap;function D(j){if(!b&&!G(j))throw new Error("WebGL generation not supported")}function P(j,X,F,V,Q,N,k){if(N===void 0&&(N=1),k===void 0&&(k=null),!k&&(k=T,!k)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");k=T=ne.getContext("webgl",{depth:!1})}D(k);var q=new Uint8Array(j*X*4);u(k,function(ve){var he=ve.gl,Pe=ve.withTexture,I=ve.withTextureFramebuffer;Pe("readable",function(Oe,Ae){he.texImage2D(he.TEXTURE_2D,0,he.RGBA,j,X,0,he.RGBA,he.UNSIGNED_BYTE,null),I(Oe,Ae,function(Re){L(j,X,F,V,Q,N,he,Re,0,0,0),he.readPixels(0,0,j,X,he.RGBA,he.UNSIGNED_BYTE,q)})})});for(var ie=new Uint8Array(j*X),xe=0,_e=0;xe<q.length;xe+=4)ie[_e++]=q[xe];return ie}function U(j,X,F,V,Q,N,k,ne,q,ie){N===void 0&&(N=1),ne===void 0&&(ne=0),q===void 0&&(q=0),ie===void 0&&(ie=0),L(j,X,F,V,Q,N,k,null,ne,q,ie)}function L(j,X,F,V,Q,N,k,ne,q,ie,xe){N===void 0&&(N=1),q===void 0&&(q=0),ie===void 0&&(ie=0),xe===void 0&&(xe=0),D(k);var _e=[];r(F,function(ve,he,Pe,I){_e.push(ve,he,Pe,I)}),_e=new Float32Array(_e),u(k,function(ve){var he=ve.gl,Pe=ve.isWebGL2,I=ve.getExtension,Oe=ve.withProgram,Ae=ve.withTexture,Re=ve.withTextureFramebuffer,ae=ve.handleContextLoss;if(Ae("rawDistances",function(be,de){(j!==be._lastWidth||X!==be._lastHeight)&&he.texImage2D(he.TEXTURE_2D,0,he.RGBA,be._lastWidth=j,be._lastHeight=X,0,he.RGBA,he.UNSIGNED_BYTE,null),Oe("main",x,v,function(R){var A=R.setAttribute,B=R.setUniform,$=!Pe&&I("ANGLE_instanced_arrays"),ee=!Pe&&I("EXT_blend_minmax");A("aUV",2,he.STATIC_DRAW,0,w),A("aLineSegment",4,he.DYNAMIC_DRAW,1,_e),B.apply(void 0,["4f","uGlyphBounds"].concat(V)),B("1f","uMaxDistance",Q),B("1f","uExponent",N),Re(be,de,function(se){he.enable(he.BLEND),he.colorMask(!0,!0,!0,!0),he.viewport(0,0,j,X),he.scissor(0,0,j,X),he.blendFunc(he.ONE,he.ONE),he.blendEquationSeparate(he.FUNC_ADD,Pe?he.MAX:ee.MAX_EXT),he.clear(he.COLOR_BUFFER_BIT),Pe?he.drawArraysInstanced(he.TRIANGLES,0,3,_e.length/4):$.drawArraysInstancedANGLE(he.TRIANGLES,0,3,_e.length/4)})}),Oe("post",s,E,function(R){R.setAttribute("aUV",2,he.STATIC_DRAW,0,w),R.setUniform("1i","tex",de),he.bindFramebuffer(he.FRAMEBUFFER,ne),he.disable(he.BLEND),he.colorMask(xe===0,xe===1,xe===2,xe===3),he.viewport(q,ie,j,X),he.scissor(q,ie,j,X),he.drawArrays(he.TRIANGLES,0,3)})}),he.isContextLost())throw ae(),new Error("webgl context lost")})}function G(j){var X=!j||j===T?S:j.canvas||j,F=M.get(X);if(F===void 0){b=!0;var V=null;try{var Q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=P(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,j);F=N&&Q.length===N.length&&N.every(function(k,ne){return k===Q[ne]}),F||(V="bad trial run results",console.info(Q,N))}catch(k){F=!1,V=k.message}V&&console.warn("WebGL SDF generation not supported:",V),b=!1,M.set(X,F)}return F}var O=Object.freeze({__proto__:null,generate:P,generateIntoCanvas:U,generateIntoFramebuffer:L,isSupported:G});function Y(j,X,F,V,Q,N){Q===void 0&&(Q=Math.max(V[2]-V[0],V[3]-V[1])/2),N===void 0&&(N=1);try{return P.apply(O,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),_.apply(y,arguments)}}function H(j,X,F,V,Q,N,k,ne,q,ie){Q===void 0&&(Q=Math.max(V[2]-V[0],V[3]-V[1])/2),N===void 0&&(N=1),ne===void 0&&(ne=0),q===void 0&&(q=0),ie===void 0&&(ie=0);try{return U.apply(O,arguments)}catch(xe){return console.info("WebGL SDF generation failed, falling back to JS",xe),g.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=Y,e.generateIntoCanvas=H,e.javascript=y,e.pathToLineSegments=r,e.webgl=O,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function U1(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,be){i[ae]=1<<be+1,n[i[ae]]=ae}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,s=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function h(){if(!u){u=new Map;var ae=function(de){if(t.hasOwnProperty(de)){var R=0;t[de].split(",").forEach(function(A){var B=A.split("+"),$=B[0],ee=B[1];$=parseInt($,36),ee=ee?parseInt(ee,36):0,u.set(R+=$,i[de]);for(var se=0;se<ee;se++)u.set(++R,i[de])})}};for(var be in t)ae(be)}}function f(ae){return h(),u.get(ae.codePointAt(0))||i.L}function d(ae){return n[f(ae)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(ae,be){var de=36,R=0,A=new Map,B=be&&new Map,$;return ae.split(",").forEach(function ee(se){if(se.indexOf("+")!==-1)for(var fe=+se;fe--;)ee($);else{$=se;var le=se.split(">"),me=le[0],Ue=le[1];me=String.fromCodePoint(R+=parseInt(me,de)),Ue=String.fromCodePoint(R+=parseInt(Ue,de)),A.set(me,Ue),be&&B.set(Ue,me)}}),{map:A,reverseMap:B}}var p,m,y;function x(){if(!p){var ae=g(_.pairs,!0),be=ae.map,de=ae.reverseMap;p=be,m=de,y=g(_.canonical,!1).map}}function v(ae){return x(),p.get(ae)||null}function E(ae){return x(),m.get(ae)||null}function w(ae){return x(),y.get(ae)||null}var T=i.L,b=i.R,S=i.EN,M=i.ES,D=i.ET,P=i.AN,U=i.CS,L=i.B,G=i.S,O=i.ON,Y=i.BN,H=i.NSM,j=i.AL,X=i.LRO,F=i.RLO,V=i.LRE,Q=i.RLE,N=i.PDF,k=i.LRI,ne=i.RLI,q=i.FSI,ie=i.PDI;function xe(ae,be){for(var de=125,R=new Uint32Array(ae.length),A=0;A<ae.length;A++)R[A]=f(ae[A]);var B=new Map;function $(an,On){var on=R[an];R[an]=On,B.set(on,B.get(on)-1),on&o&&B.set(o,B.get(o)-1),B.set(On,(B.get(On)||0)+1),On&o&&B.set(o,(B.get(o)||0)+1)}for(var ee=new Uint8Array(ae.length),se=new Map,fe=[],le=null,me=0;me<ae.length;me++)le||fe.push(le={start:me,end:ae.length-1,level:be==="rtl"?1:be==="ltr"?0:sh(me,!1)}),R[me]&L&&(le.end=me,le=null);for(var Ue=Q|V|F|X|r|ie|N|L,ce=function(an){return an+(an&1?1:2)},Se=function(an){return an+(an&1?2:1)},Te=0;Te<fe.length;Te++){le=fe[Te];var Ee=[{_level:le.level,_override:0,_isolate:0}],oe=void 0,Le=0,Fe=0,je=0;B.clear();for(var z=le.start;z<=le.end;z++){var ue=R[z];if(oe=Ee[Ee.length-1],B.set(ue,(B.get(ue)||0)+1),ue&o&&B.set(o,(B.get(o)||0)+1),ue&Ue)if(ue&(Q|V)){ee[z]=oe._level;var te=(ue===Q?Se:ce)(oe._level);te<=de&&!Le&&!Fe?Ee.push({_level:te,_override:0,_isolate:0}):Le||Fe++}else if(ue&(F|X)){ee[z]=oe._level;var pe=(ue===F?Se:ce)(oe._level);pe<=de&&!Le&&!Fe?Ee.push({_level:pe,_override:ue&F?b:T,_isolate:0}):Le||Fe++}else if(ue&r){ue&q&&(ue=sh(z+1,!0)===1?ne:k),ee[z]=oe._level,oe._override&&$(z,oe._override);var ye=(ue===ne?Se:ce)(oe._level);ye<=de&&Le===0&&Fe===0?(je++,Ee.push({_level:ye,_override:0,_isolate:1,_isolInitIndex:z})):Le++}else if(ue&ie){if(Le>0)Le--;else if(je>0){for(Fe=0;!Ee[Ee.length-1]._isolate;)Ee.pop();var ge=Ee[Ee.length-1]._isolInitIndex;ge!=null&&(se.set(ge,z),se.set(z,ge)),Ee.pop(),je--}oe=Ee[Ee.length-1],ee[z]=oe._level,oe._override&&$(z,oe._override)}else ue&N?(Le===0&&(Fe>0?Fe--:!oe._isolate&&Ee.length>1&&(Ee.pop(),oe=Ee[Ee.length-1])),ee[z]=oe._level):ue&L&&(ee[z]=le.level);else ee[z]=oe._level,oe._override&&ue!==Y&&$(z,oe._override)}for(var Ne=[],We=null,Be=le.start;Be<=le.end;Be++){var ze=R[Be];if(!(ze&l)){var ct=ee[Be],ht=ze&r,xt=ze===ie;We&&ct===We._level?(We._end=Be,We._endsWithIsolInit=ht):Ne.push(We={_start:Be,_end:Be,_level:ct,_startsWithPDI:xt,_endsWithIsolInit:ht})}}for(var rn=[],Vt=0;Vt<Ne.length;Vt++){var gn=Ne[Vt];if(!gn._startsWithPDI||gn._startsWithPDI&&!se.has(gn._start)){for(var In=[We=gn],Jn=void 0;We&&We._endsWithIsolInit&&(Jn=se.get(We._end))!=null;)for(var sn=Vt+1;sn<Ne.length;sn++)if(Ne[sn]._start===Jn){In.push(We=Ne[sn]);break}for(var Ut=[],wn=0;wn<In.length;wn++)for(var Ds=In[wn],Ur=Ds._start;Ur<=Ds._end;Ur++)Ut.push(Ur);for(var Ko=ee[Ut[0]],Ra=le.level,Lr=Ut[0]-1;Lr>=0;Lr--)if(!(R[Lr]&l)){Ra=ee[Lr];break}var Us=Ut[Ut.length-1],Zo=ee[Us],Ca=le.level;if(!(R[Us]&r)){for(var C=Us+1;C<=le.end;C++)if(!(R[C]&l)){Ca=ee[C];break}}rn.push({_seqIndices:Ut,_sosType:Math.max(Ra,Ko)%2?b:T,_eosType:Math.max(Ca,Zo)%2?b:T})}}for(var K=0;K<rn.length;K++){var re=rn[K],W=re._seqIndices,Z=re._sosType,Me=re._eosType,we=ee[W[0]]&1?b:T;if(B.get(H))for(var De=0;De<W.length;De++){var Ie=W[De];if(R[Ie]&H){for(var He=Z,Ve=De-1;Ve>=0;Ve--)if(!(R[W[Ve]]&l)){He=R[W[Ve]];break}$(Ie,He&(r|ie)?O:He)}}if(B.get(S))for(var ke=0;ke<W.length;ke++){var et=W[ke];if(R[et]&S)for(var tt=ke-1;tt>=-1;tt--){var mt=tt===-1?Z:R[W[tt]];if(mt&s){mt===j&&$(et,P);break}}}if(B.get(j))for(var ft=0;ft<W.length;ft++){var nt=W[ft];R[nt]&j&&$(nt,b)}if(B.get(M)||B.get(U))for(var Ge=1;Ge<W.length-1;Ge++){var Mt=W[Ge];if(R[Mt]&(M|U)){for(var Qe=0,Zt=0,Qn=Ge-1;Qn>=0&&(Qe=R[W[Qn]],!!(Qe&l));Qn--);for(var Bt=Ge+1;Bt<W.length&&(Zt=R[W[Bt]],!!(Zt&l));Bt++);Qe===Zt&&(R[Mt]===M?Qe===S:Qe&(S|P))&&$(Mt,Qe)}}if(B.get(S))for(var Ht=0;Ht<W.length;Ht++){var dt=W[Ht];if(R[dt]&S){for(var kt=Ht-1;kt>=0&&R[W[kt]]&(D|l);kt--)$(W[kt],S);for(Ht++;Ht<W.length&&R[W[Ht]]&(D|l|S);Ht++)R[W[Ht]]!==S&&$(W[Ht],S)}}if(B.get(D)||B.get(M)||B.get(U))for(var Lt=0;Lt<W.length;Lt++){var It=W[Lt];if(R[It]&(D|M|U)){$(It,O);for(var Ct=Lt-1;Ct>=0&&R[W[Ct]]&l;Ct--)$(W[Ct],O);for(var Ii=Lt+1;Ii<W.length&&R[W[Ii]]&l;Ii++)$(W[Ii],O)}}if(B.get(S))for(var Fn=0,qu=Z;Fn<W.length;Fn++){var ju=W[Fn],Jo=R[ju];Jo&S?qu===T&&$(ju,T):Jo&s&&(qu=Jo)}if(B.get(o)){var Ls=b|S|P,Ku=Ls|T,Pa=[];{for(var Ir=[],Fr=0;Fr<W.length;Fr++)if(R[W[Fr]]&o){var Is=ae[W[Fr]],Zu=void 0;if(v(Is)!==null)if(Ir.length<63)Ir.push({char:Is,seqIndex:Fr});else break;else if((Zu=E(Is))!==null)for(var Fs=Ir.length-1;Fs>=0;Fs--){var Qo=Ir[Fs].char;if(Qo===Zu||Qo===E(w(Is))||v(w(Qo))===Is){Pa.push([Ir[Fs].seqIndex,Fr]),Ir.length=Fs;break}}}Pa.sort(function(an,On){return an[0]-On[0]})}for(var $o=0;$o<Pa.length;$o++){for(var Ju=Pa[$o],Da=Ju[0],el=Ju[1],Qu=!1,Nn=0,tl=Da+1;tl<el;tl++){var $u=W[tl];if(R[$u]&Ku){Qu=!0;var eh=R[$u]&Ls?b:T;if(eh===we){Nn=eh;break}}}if(Qu&&!Nn){Nn=Z;for(var nl=Da-1;nl>=0;nl--){var th=W[nl];if(R[th]&Ku){var nh=R[th]&Ls?b:T;nh!==we?Nn=nh:Nn=we;break}}}if(Nn){if(R[W[Da]]=R[W[el]]=Nn,Nn!==we){for(var Ns=Da+1;Ns<W.length;Ns++)if(!(R[W[Ns]]&l)){f(ae[W[Ns]])&H&&(R[W[Ns]]=Nn);break}}if(Nn!==we){for(var Os=el+1;Os<W.length;Os++)if(!(R[W[Os]]&l)){f(ae[W[Os]])&H&&(R[W[Os]]=Nn);break}}}}for(var Fi=0;Fi<W.length;Fi++)if(R[W[Fi]]&o){for(var ih=Fi,il=Fi,rl=Z,Bs=Fi-1;Bs>=0;Bs--)if(R[W[Bs]]&l)ih=Bs;else{rl=R[W[Bs]]&Ls?b:T;break}for(var rh=Me,ks=Fi+1;ks<W.length;ks++)if(R[W[ks]]&(o|l))il=ks;else{rh=R[W[ks]]&Ls?b:T;break}for(var sl=ih;sl<=il;sl++)R[W[sl]]=rl===rh?rl:we;Fi=il}}}for(var _n=le.start;_n<=le.end;_n++){var xm=ee[_n],Ua=R[_n];if(xm&1?Ua&(T|S|P)&&ee[_n]++:Ua&b?ee[_n]++:Ua&(P|S)&&(ee[_n]+=2),Ua&l&&(ee[_n]=_n===0?le.level:ee[_n-1]),_n===le.end||f(ae[_n])&(G|L))for(var La=_n;La>=0&&f(ae[La])&c;La--)ee[La]=le.level}}return{levels:ee,paragraphs:fe};function sh(an,On){for(var on=an;on<ae.length;on++){var Ni=R[on];if(Ni&(b|j))return 1;if(Ni&(L|T)||On&&Ni===ie)return 0;if(Ni&r){var ah=ym(on);on=ah===-1?ae.length:ah}}return 0}function ym(an){for(var On=1,on=an+1;on<ae.length;on++){var Ni=R[on];if(Ni&L)break;if(Ni&ie){if(--On===0)return on}else Ni&r&&On++}return-1}}var _e="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function he(){if(!ve){var ae=g(_e,!0),be=ae.map,de=ae.reverseMap;de.forEach(function(R,A){be.set(A,R)}),ve=be}}function Pe(ae){return he(),ve.get(ae)||null}function I(ae,be,de,R){var A=ae.length;de=Math.max(0,de==null?0:+de),R=Math.min(A-1,R==null?A-1:+R);for(var B=new Map,$=de;$<=R;$++)if(be[$]&1){var ee=Pe(ae[$]);ee!==null&&B.set($,ee)}return B}function Oe(ae,be,de,R){var A=ae.length;de=Math.max(0,de==null?0:+de),R=Math.min(A-1,R==null?A-1:+R);var B=[];return be.paragraphs.forEach(function($){var ee=Math.max(de,$.start),se=Math.min(R,$.end);if(ee<se){for(var fe=be.levels.slice(ee,se+1),le=se;le>=ee&&f(ae[le])&c;le--)fe[le]=$.level;for(var me=$.level,Ue=1/0,ce=0;ce<fe.length;ce++){var Se=fe[ce];Se>me&&(me=Se),Se<Ue&&(Ue=Se|1)}for(var Te=me;Te>=Ue;Te--)for(var Ee=0;Ee<fe.length;Ee++)if(fe[Ee]>=Te){for(var oe=Ee;Ee+1<fe.length&&fe[Ee+1]>=Te;)Ee++;Ee>oe&&B.push([oe+ee,Ee+ee])}}}),B}function Ae(ae,be,de,R){var A=Re(ae,be,de,R),B=[].concat(ae);return A.forEach(function($,ee){B[ee]=(be.levels[$]&1?Pe(ae[$]):null)||ae[$]}),B.join("")}function Re(ae,be,de,R){for(var A=Oe(ae,be,de,R),B=[],$=0;$<ae.length;$++)B[$]=$;return A.forEach(function(ee){for(var se=ee[0],fe=ee[1],le=B.slice(se,fe+1),me=le.length;me--;)B[fe-me]=le[me]}),B}return e.closingToOpeningBracket=E,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=xe,e.getMirroredCharacter=Pe,e.getMirroredCharactersMap=I,e.getReorderSegments=Oe,e.getReorderedIndices=Re,e.getReorderedString=Ae,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const cm=/\bvoid\s+main\s*\(\s*\)\s*{/g;function su(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ke[n];return r?su(r):i}return a.replace(e,t)}const Gt=[];for(let a=0;a<256;a++)Gt[a]=(a<16?"0":"")+a.toString(16);function L1(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[a&255]+Gt[a>>8&255]+Gt[a>>16&255]+Gt[a>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toUpperCase()}const fr=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n])}return a},I1=Date.now(),Kf=new WeakMap,Zf=new Map;let F1=1e10;function au(a,e){const t=k1(e);let i=Kf.get(a);if(i||Kf.set(a,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){a.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=Zf[h];if(!f){const d=N1(this,c,e,t);f=Zf[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,fr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-I1}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:F1++}),u.uuid=L1(),u.uniforms=fr({},c.uniforms,e.uniforms),u.defines=fr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=fr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(fr(this.extensions,c.extensions),fr(this.defines,c.defines),fr(this.uniforms,Vd.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=au(a.isDerivedMaterial?a.getDepthMaterial():new Kd({depthPacking:Ud}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=au(a.isDerivedMaterial?a.getDistanceMaterial():new Zd,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return i[t]=s,new s}function N1(a,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:_}=i;if(r=r||"",s=s||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=su(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=su(t)),d){let g=d({vertexShader:e,fragmentShader:t});e=g.vertexShader,t=g.fragmentShader}if(f){let g=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(g.push(p),"")),h=`${f}
${g.join(`
`)}
${h}`}if(_){const g=`
uniform float ${_};
`;r=g+r,c=g+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(g,p,m,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,m))?p:`troika_${p}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=Jf(e,n,r,s,o),t=Jf(t,n,c,u,h),{vertexShader:e,fragmentShader:t}}function Jf(a,e,t,i,n){return(i||n||t)&&(a=a.replace(cm,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),a}function O1(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let B1=0;const Qf=new Map;function k1(a){const e=JSON.stringify(a,O1);let t=Qf.get(e);return t==null&&Qf.set(e,t=++B1),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function G1(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var r=e._bin,s=new Uint8Array(n);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(s,o);o+=4,c.push(e._readFont(s,h))}return c}return[e._readFont(s,0)]},_readFont:function(n,r){var s=e._bin,o=r;s.readFixed(n,r),r+=4;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},h={},f=0;f<l;f++){var d=s.readASCII(n,r,4);r+=4,s.readUint(n,r),r+=4;var _=s.readUint(n,r);r+=4;var g=s.readUint(n,r);r+=4,h[d]={offset:_,length:g}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(n,h[p].offset,h[p].length,u))}return u},_tabOffset:function(n,r,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var h=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,s){for(var o="",l=0;l<s;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,s){var o=e._bin._tdec;return o&&r==0&&s==n.length?o.decode(n):e._bin.readASCII(n,r,s)},readBytes:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,s,o,l){var c=e._bin,u={},h=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var _=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,h+f),u.featureList=e._lctf.readFeatureList(n,h+d),u.lookupList=e._lctf.readLookupList(n,h+_,l),u},e._lctf.readLookupList=function(n,r,s){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(n,r);r+=2;var _=s(n,h,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(n){for(var r=0,s=0;s<32;s++)(n>>>s&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var s=e._bin,o=[],l=s.readUshort(n,r);if(r+=2,l==1){var c=s.readUshort(n,r);r+=2;var u=s.readUshort(n,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(s.readUshort(n,r)),r+=2}if(l==2){var f=s.readUshort(n,r);for(r+=2,h=0;h<f;h++)o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(n,r){var s=e._bin,o={};o.fmt=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(n,r,l)),o.fmt==2&&(o.tab=s.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var s=n.tab;if(n.fmt==1)return s.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(n,r,4);r+=4;var f=s.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(s.readUshort(n,r+2*h));return l},e._lctf.readScriptList=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=s.readASCII(n,r,4);r+=4;var f=s.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,r);r+=2;for(var h=0;h<u;h++){var f=s.readASCII(n,r,4);r+=4;var d=s.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var s=e._bin,o={};s.readUshort(n,r),r+=2,o.reqFeature=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.features=s.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,s){var o=e._bin;(n=new Uint8Array(n.buffer,r,s))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(n,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(n,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],_=[];r=e.CFF.readIndex(n,r,_);var g=[];for(u=0;u<_.length-1;u++)g.push(o.readASCII(n,r+_[u],_[u+1]-_[u]));if(r+=_[_.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,_=[],r=e.CFF.readIndex(n,r,_);var p=[];for(u=0;u<_.length-1;u++)p.push(o.readBytes(n,r+_[u],_[u+1]-_[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(n,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var y=e.CFF.readDict(n,r+m[u],r+m[u+1]);e.CFF._readFDict(n,y,g),d.FDArray.push(y)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var v=o.readUshort(n,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,g),d},e.CFF._readFDict=function(n,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(n,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var h=0;h<l.length-1;h++)s.Subrs.push(o.readBytes(n,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,s){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,s){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<s;u++){var h=o.readUshort(n,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){h=o.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=o.readUshort(n,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(n,r,s){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,s){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(n,r+1)/65535,u=5),s.val=f??"o"+h,s.size=u},e.CFF.readCharString=function(n,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,_=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(_=l.readShort(n,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255&&(_=l.readInt(n,r+1)/65535,f=5),c.push(_??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,s){for(var o=e._bin,l={},c=[];r<s;){var u=n[r],h=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,_=null;if(u==28&&(_=o.readShort(n,r+1),f=3),u==29&&(_=o.readInt(n,r+1),f=5),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255)throw _=o.readInt(n,r+1)/65535,f=5,"unknown number";if(u==30){var g=[];for(f=1;;){var p=n[r+f];f++;var m=p>>4,y=15&p;if(m!=15&&g.push(m),y!=15&&g.push(y),y==15)break}for(var x="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<g.length;E++)x+=v[g[E]];_=parseFloat(x)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,s){n=new Uint8Array(n.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var _=o.readUint(n,r);r+=4;var g="p"+f+"e"+d,p=u.indexOf(_);if(p==-1){var m;p=l.tables.length,u.push(_);var y=o.readUshort(n,_);y==0?m=e.cmap.parse0(n,_):y==4?m=e.cmap.parse4(n,_):y==6?m=e.cmap.parse6(n,_):y==12?m=e.cmap.parse12(n,_):console.debug("unknown format: "+y,f,d,_),l.tables.push(m)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=p}return l},e.cmap.parse0=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var s=e._bin,o=r,l={};l.format=s.readUshort(n,r),r+=2;var c=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2;var u=s.readUshort(n,r);r+=2;var h=u/2;l.searchRange=s.readUshort(n,r),r+=2,l.entrySelector=s.readUshort(n,r),r+=2,l.rangeShift=s.readUshort(n,r),r+=2,l.endCount=s.readUshorts(n,r,h),r+=2*h,r+=2,l.startCount=s.readUshorts(n,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(s.readShort(n,r)),r+=2;for(l.idRangeOffset=s.readUshorts(n,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,o.firstCode=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,r+=2,s.readUint(n,r),r+=4,s.readUint(n,r),r+=4;var l=s.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=s.readUint(n,u+0),f=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(n,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var h=s.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=s.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var _=o[l];l++;for(var g=0;g<_;g++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,x=0;for(u=0;u<f;u++)y+=c.xs[u],x+=c.ys[u],c.xs[u]=y,c.ys[u]=x}else{var v;c.parts=[];do{v=s.readUshort(o,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=s.readUshort(o,l),l+=2,1&v){var w=s.readShort(o,l);l+=2;var T=s.readShort(o,l);l+=2}else w=s.readInt8(o,l),l++,T=s.readInt8(o,l),l++;2&v?(E.m.tx=w,E.m.ty=T):(E.p1=w,E.p2=T),8&v?(E.m.a=E.m.d=s.readF2dot14(o,l),l+=2):64&v?(E.m.a=s.readF2dot14(o,l),l+=2,E.m.d=s.readF2dot14(o,l),l+=2):128&v&&(E.m.a=s.readF2dot14(o,l),l+=2,E.m.b=s.readF2dot14(o,l),l+=2,E.m.c=s.readF2dot14(o,l),l+=2,E.m.d=s.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var b=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<b;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(n,s);s+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(n,s,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var _=e._lctf.numOfOnes(f),g=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,s);s+=2;for(var m=0;m<p;m++){var y=c+l.readUshort(n,s);s+=2;var x=l.readUshort(n,y);y+=2;for(var v=[],E=0;E<x;E++){var w=l.readUshort(n,y);y+=2,f!=0&&(P=e.GPOS.readValueRecord(n,y,f),y+=2*_),d!=0&&(U=e.GPOS.readValueRecord(n,y,d),y+=2*g),v.push({gid2:w,val1:P,val2:U})}u.pairsets.push(v)}}if(u.fmt==2){var T=l.readUshort(n,s);s+=2;var b=l.readUshort(n,s);s+=2;var S=l.readUshort(n,s);s+=2;var M=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+b),u.matrix=[],m=0;m<S;m++){var D=[];for(E=0;E<M;E++){var P=null,U=null;f!=0&&(P=e.GPOS.readValueRecord(n,s,f),s+=2*_),d!=0&&(U=e.GPOS.readValueRecord(n,s,d),s+=2*g),D.push({val1:P,val2:U})}u.matrix.push(D)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var L=l.readUshort(n,s);s+=2;var G=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=L;else if(o.ltype!=L)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(n,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(n,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(n,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,r,s){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<s;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var s=e._bin,o=[],l=r,c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(n,s.readUshort(n,r+2)+l);h.markClass=s.readUshort(n,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var s=e._bin,o={};return o.fmt=s.readUshort(n,r),o.x=s.readShort(n,r+2),o.y=s.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var f=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,f),s+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<f;d++){var _=l.readUshort(n,s)+c;s+=2;var g=l.readUshort(n,_);u.seqs.push(l.readUshorts(n,_+2,g))}}else if(r==4)for(u.vals=[],f=l.readUshort(n,s),s+=2,d=0;d<f;d++){var p=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+m),u.scset=[];var y=l.readUshort(n,s);for(s+=2,d=0;d<y;d++){var x=l.readUshort(n,s);s+=2,u.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,s),s+=2;for(var v=[],E=0;E<f;E++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*E)));s+=2*f,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}f=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,f)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(n,s);s+=2;var T=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var s=e._bin.readUshort,o=r,l=[],c=s(n,r);r+=2;for(var u=0;u<c;u++){var h=s(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+h))}return l},e.GSUB.readSubClassRule=function(n,r){var s=e._bin.readUshort,o={},l=s(n,r),c=s(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+h))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=s.readUshort(n,r),r+=2,o.subst=s.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var h=s.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+h))}return l},e.GSUB.readLigature=function(n,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,h=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(n,r,s,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,s,o);var u=l.readUshort(n,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,s=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(n,r,h)}return h},e.kern.parseV1=function(n,r,s,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,s){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,h!=l&&(s.glyph1.push(h),s.rval.push({glyph2:[],vals:[]}));var _=s.rval[s.rval.length-1];_.glyph2.push(f),_.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(n,r,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,s){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,s){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var _=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var y=o.readUshort(n,r);r+=2;var x=o.readUshort(n,r);r+=2;var v,E=h[m],w=f+12*c+x;if(_==0)v=o.readUnicode(n,w,y/2);else if(_==3&&g==0)v=o.readUnicode(n,w,y/2);else if(g==0)v=o.readASCII(n,w,y);else if(g==1)v=o.readUnicode(n,w,y/2);else if(g==3)v=o.readUnicode(n,w,y/2);else{if(_!=1)throw"unknown encoding "+g+", platformID: "+_;v=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var T="p"+_+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][E!==void 0?E:m]=v,l[T]._lang=p}for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==1033)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==0)return l[b];for(var b in l)if(l[b].postScriptName!=null&&l[b]._lang==3084)return l[b];for(var b in l)if(l[b].postScriptName!=null)return l[b];for(var b in l){u=b;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,s){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,r),r+=2,s.usWeightClass=o.readUshort(n,r),r+=2,s.usWidthClass=o.readUshort(n,r),r+=2,s.fsType=o.readUshort(n,r),r+=2,s.ySubscriptXSize=o.readShort(n,r),r+=2,s.ySubscriptYSize=o.readShort(n,r),r+=2,s.ySubscriptXOffset=o.readShort(n,r),r+=2,s.ySubscriptYOffset=o.readShort(n,r),r+=2,s.ySuperscriptXSize=o.readShort(n,r),r+=2,s.ySuperscriptYSize=o.readShort(n,r),r+=2,s.ySuperscriptXOffset=o.readShort(n,r),r+=2,s.ySuperscriptYOffset=o.readShort(n,r),r+=2,s.yStrikeoutSize=o.readShort(n,r),r+=2,s.yStrikeoutPosition=o.readShort(n,r),r+=2,s.sFamilyClass=o.readShort(n,r),r+=2,s.panose=o.readBytes(n,r,10),r+=10,s.ulUnicodeRange1=o.readUint(n,r),r+=4,s.ulUnicodeRange2=o.readUint(n,r),r+=4,s.ulUnicodeRange3=o.readUint(n,r),r+=4,s.ulUnicodeRange4=o.readUint(n,r),r+=4,s.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,s.fsSelection=o.readUshort(n,r),r+=2,s.usFirstCharIndex=o.readUshort(n,r),r+=2,s.usLastCharIndex=o.readUshort(n,r),r+=2,s.sTypoAscender=o.readShort(n,r),r+=2,s.sTypoDescender=o.readShort(n,r),r+=2,s.sTypoLineGap=o.readShort(n,r),r+=2,s.usWinAscent=o.readUshort(n,r),r+=2,s.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,s){var o=e._bin;return r=e["OS/2"].version0(n,r,s),s.ulCodePageRange1=o.readUint(n,r),r+=4,s.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,s){var o=e._bin;return r=e["OS/2"].version1(n,r,s),s.sxHeight=o.readShort(n,r),r+=2,s.sCapHeight=o.readShort(n,r),r+=2,s.usDefault=o.readUshort(n,r),r+=2,s.usBreak=o.readUshort(n,r),r+=2,s.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,s){var o=e._bin;return r=e["OS/2"].version2(n,r,s),s.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,s){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,s)}else n.glyf&&e.U._drawGlyf(r,n,s);return s},e.U._drawGlyf=function(n,r,s){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(n,r){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[u],_=1&n.flags[h],g=n.xs[c],p=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,g,p);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+g)/2,(n.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,g,p):_?e.U.P.qcurveTo(r,g,p,n.xs[h],n.ys[h]):e.U.P.qcurveTo(r,g,p,(g+n.xs[h])/2,(p+n.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];s.crds.push(f*u.a+d*u.b+u.tx),s.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)s.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(n,r){var s=e._lctf.getInterval(r,n);return s==-1?0:r[s+2]},e.U._applySubs=function(n,r,s,o){for(var l=n.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,h=s.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,n[r]))!=-1){if(s.ltype==1)n[r],h.fmt==1?n[r]=n[r]+h.delta:n[r]=h.newg[u];else if(s.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var _=f[d],g=_.chain.length;if(!(g>l)){for(var p=!0,m=0,y=0;y<g;y++){for(;n[r+m+(1+y)]==-1;)m++;_.chain[y]!=n[r+m+(1+y)]&&(p=!1)}if(p){for(n[r]=_.nglyph,y=0;y<g+m;y++)n[r+y+1]=-1;break}}}else if(s.ltype==5&&h.fmt==2)for(var x=e._lctf.getInterval(h.cDef,n[r]),v=h.cDef[x+2],E=h.scset[v],w=0;w<E.length;w++){var T=E[w],b=T.input;if(!(b.length>l)){for(p=!0,y=0;y<b.length;y++){var S=e._lctf.getInterval(h.cDef,n[r+1+y]);if(x==-1&&h.cDef[S+2]!=b[y]){p=!1;break}}if(p){var M=T.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(s.ltype==6&&h.fmt==3){if(!e.U._glsCovered(n,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(n,h.inptCvg,r)||!e.U._glsCovered(n,h.ahedCvg,r+h.inptCvg.length))continue;var D=h.lookupRec;for(w=0;w<D.length;w+=2){x=D[w];var P=o[D[w+1]];e.U._applySubs(n,r+x,P,o)}}}}},e.U._glsCovered=function(n,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,s){n.cmds.push("M"),n.crds.push(r,s)},e.U.P.lineTo=function(n,r,s){n.cmds.push("L"),n.crds.push(r,s)},e.U.P.curveTo=function(n,r,s,o,l,c,u){n.cmds.push("C"),n.crds.push(r,s,o,l,c,u)},e.U.P.qcurveTo=function(n,r,s,o,l){n.cmds.push("Q"),n.crds.push(r,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,s,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,_=0,g=r.x,p=r.y,m=0,y=0,x=0,v=0,E=0,w=0,T=0,b=0,S=0,M=0,D={val:0,size:0};_<n.length;){e.CFF.getCharString(n,_,D);var P=D.val;if(_+=D.size,P=="o1"||P=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o3"||P=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(P=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,g,p),d=!0;else if(P=="o5")for(;c.length>0;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);else if(P=="o6"||P=="o7")for(var U=c.length,L=P=="o6",G=0;G<U;G++){var O=c.shift();L?g+=O:p+=O,L=!L,e.U.P.lineTo(l,g,p)}else if(P=="o8"||P=="o24"){U=c.length;for(var Y=0;Y+6<=U;)m=g+c.shift(),y=p+c.shift(),x=m+c.shift(),v=y+c.shift(),g=x+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,y,x,v,g,p),Y+=6;P=="o24"&&(g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p))}else{if(P=="o11")break;if(P=="o1234"||P=="o1235"||P=="o1236"||P=="o1237")P=="o1234"&&(y=p,x=(m=g+c.shift())+c.shift(),M=v=y+c.shift(),w=v,b=p,g=(T=(E=(S=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,b,g,p)),P=="o1235"&&(m=g+c.shift(),y=p+c.shift(),x=m+c.shift(),v=y+c.shift(),S=x+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),T=E+c.shift(),b=w+c.shift(),g=T+c.shift(),p=b+c.shift(),c.shift(),e.U.P.curveTo(l,m,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,b,g,p)),P=="o1236"&&(m=g+c.shift(),y=p+c.shift(),x=m+c.shift(),M=v=y+c.shift(),w=v,T=(E=(S=x+c.shift())+c.shift())+c.shift(),b=w+c.shift(),g=T+c.shift(),e.U.P.curveTo(l,m,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,b,g,p)),P=="o1237"&&(m=g+c.shift(),y=p+c.shift(),x=m+c.shift(),v=y+c.shift(),S=x+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),T=E+c.shift(),b=w+c.shift(),Math.abs(T-g)>Math.abs(b-p)?g=T+c.shift():p=b+c.shift(),e.U.P.curveTo(l,m,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,b,g,p));else if(P=="o14"){if(c.length>0&&!h&&(f=c.shift()+s.nominalWidthX,h=!0),c.length==4){var H=c.shift(),j=c.shift(),X=c.shift(),F=c.shift(),V=e.CFF.glyphBySE(s,X),Q=e.CFF.glyphBySE(s,F);e.U._drawCFF(s.CharStrings[V],r,s,o,l),r.x=H,r.y=j,e.U._drawCFF(s.CharStrings[Q],r,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(P=="o19"||P=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,_+=u+7>>3;else if(P=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(P=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(P=="o25"){for(;c.length>6;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);m=g+c.shift(),y=p+c.shift(),x=m+c.shift(),v=y+c.shift(),g=x+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,y,x,v,g,p)}else if(P=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)m=g,y=p+c.shift(),g=x=m+c.shift(),p=(v=y+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,x,v,g,p);else if(P=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)y=p,x=(m=g+c.shift())+c.shift(),v=y+c.shift(),g=x+c.shift(),p=v,e.U.P.curveTo(l,m,y,x,v,g,p);else if(P=="o10"||P=="o29"){var N=P=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ne=N.Subrs[k+N.Bias];r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(ne,r,s,o,l),g=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(P=="o30"||P=="o31"){var q=c.length,ie=(Y=0,P=="o31");for(Y+=q-(U=-3&q);Y<U;)ie?(y=p,x=(m=g+c.shift())+c.shift(),p=(v=y+c.shift())+c.shift(),U-Y==5?(g=x+c.shift(),Y++):g=x,ie=!1):(m=g,y=p+c.shift(),x=m+c.shift(),v=y+c.shift(),g=x+c.shift(),U-Y==5?(p=v+c.shift(),Y++):p=v,ie=!0),e.U.P.curveTo(l,m,y,x,v,g,p),Y+=4}else{if((P+"").charAt(0)=="o")throw console.debug("Unknown operation: "+P,n),P;c.push(P)}}}r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,i={Typr:t};return a.Typr=t,a.default=i,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function z1(){return function(a){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(P,U){for(var L=new t(31),G=0;G<31;++G)L[G]=U+=1<<P[G-1];var O=new i(L[30]);for(G=1;G<30;++G)for(var Y=L[G];Y<L[G+1];++Y)O[Y]=Y-L[G]<<5|G;return[L,O]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,f[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var g=function(P,U,L){for(var G=P.length,O=0,Y=new t(U);O<G;++O)++Y[P[O]-1];var H,j=new t(U);for(O=0;O<U;++O)j[O]=j[O-1]+Y[O-1]<<1;{H=new t(1<<U);var X=15-U;for(O=0;O<G;++O)if(P[O])for(var F=O<<4|P[O],V=U-P[O],Q=j[P[O]-1]++<<V,N=Q|(1<<V)-1;Q<=N;++Q)H[f[Q]>>>X]=F}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var y=g(p,9),x=g(m,5),v=function(P){for(var U=P[0],L=1;L<P.length;++L)P[L]>U&&(U=P[L]);return U},E=function(P,U,L){var G=U/8|0;return(P[G]|P[G+1]<<8)>>(7&U)&L},w=function(P,U){var L=U/8|0;return(P[L]|P[L+1]<<8|P[L+2]<<16)>>(7&U)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],b=function(P,U,L){var G=new Error(U||T[P]);if(G.code=P,Error.captureStackTrace&&Error.captureStackTrace(G,b),!L)throw G;return G},S=function(P,U,L){var G=P.length;if(!G||L&&!L.l&&G<5)return U||new e(0);var O=!U||L,Y=!L||L.i;L||(L={}),U||(U=new e(3*G));var H,j=function(oe){var Le=U.length;if(oe>Le){var Fe=new e(Math.max(2*Le,oe));Fe.set(U),U=Fe}},X=L.f||0,F=L.p||0,V=L.b||0,Q=L.l,N=L.d,k=L.m,ne=L.n,q=8*G;do{if(!Q){L.f=X=E(P,F,1);var ie=E(P,F+1,3);if(F+=3,!ie){var xe=P[(de=((H=F)/8|0)+(7&H&&1)+4)-4]|P[de-3]<<8,_e=de+xe;if(_e>G){Y&&b(0);break}O&&j(V+xe),U.set(P.subarray(de,_e),V),L.b=V+=xe,L.p=F=8*_e;continue}if(ie==1)Q=y,N=x,k=9,ne=5;else if(ie==2){var ve=E(P,F,31)+257,he=E(P,F+10,15)+4,Pe=ve+E(P,F+5,31)+1;F+=14;for(var I=new e(Pe),Oe=new e(19),Ae=0;Ae<he;++Ae)Oe[s[Ae]]=E(P,F+3*Ae,7);F+=3*he;var Re=v(Oe),ae=(1<<Re)-1,be=g(Oe,Re);for(Ae=0;Ae<Pe;){var de,R=be[E(P,F,ae)];if(F+=15&R,(de=R>>>4)<16)I[Ae++]=de;else{var A=0,B=0;for(de==16?(B=3+E(P,F,3),F+=2,A=I[Ae-1]):de==17?(B=3+E(P,F,7),F+=3):de==18&&(B=11+E(P,F,127),F+=7);B--;)I[Ae++]=A}}var $=I.subarray(0,ve),ee=I.subarray(ve);k=v($),ne=v(ee),Q=g($,k),N=g(ee,ne)}else b(1);if(F>q){Y&&b(0);break}}O&&j(V+131072);for(var se=(1<<k)-1,fe=(1<<ne)-1,le=F;;le=F){var me=(A=Q[w(P,F)&se])>>>4;if((F+=15&A)>q){Y&&b(0);break}if(A||b(2),me<256)U[V++]=me;else{if(me==256){le=F,Q=null;break}var Ue=me-254;if(me>264){var ce=n[Ae=me-257];Ue=E(P,F,(1<<ce)-1)+c[Ae],F+=ce}var Se=N[w(P,F)&fe],Te=Se>>>4;if(Se||b(3),F+=15&Se,ee=h[Te],Te>3&&(ce=r[Te],ee+=w(P,F)&(1<<ce)-1,F+=ce),F>q){Y&&b(0);break}O&&j(V+131072);for(var Ee=V+Ue;V<Ee;V+=4)U[V]=U[V-ee],U[V+1]=U[V+1-ee],U[V+2]=U[V+2-ee],U[V+3]=U[V+3-ee];V=Ee}}L.l=Q,L.p=le,L.b=V,Q&&(X=1,L.m=k,L.d=N,L.n=ne)}while(!X);return V==U.length?U:function(oe,Le,Fe){(Fe==null||Fe>oe.length)&&(Fe=oe.length);var je=new(oe instanceof t?t:oe instanceof i?i:e)(Fe-Le);return je.set(oe.subarray(Le,Fe)),je}(U,0,V)},M=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(M,{stream:!0})}catch{}return a.convert_streams=function(P){var U=new DataView(P),L=0;function G(){var ve=U.getUint16(L);return L+=2,ve}function O(){var ve=U.getUint32(L);return L+=4,ve}function Y(ve){xe.setUint16(_e,ve),_e+=2}function H(ve){xe.setUint32(_e,ve),_e+=4}for(var j={signature:O(),flavor:O(),length:O(),numTables:G(),reserved:G(),totalSfntSize:O(),majorVersion:G(),minorVersion:G(),metaOffset:O(),metaLength:O(),metaOrigLength:O(),privOffset:O(),privLength:O()},X=0;Math.pow(2,X)<=j.numTables;)X++;X--;for(var F=16*Math.pow(2,X),V=16*j.numTables-F,Q=12,N=[],k=0;k<j.numTables;k++)N.push({tag:O(),offset:O(),compLength:O(),origLength:O(),origChecksum:O()}),Q+=16;var ne,q=new Uint8Array(12+16*N.length+N.reduce(function(ve,he){return ve+he.origLength+4},0)),ie=q.buffer,xe=new DataView(ie),_e=0;return H(j.flavor),Y(j.numTables),Y(F),Y(X),Y(V),N.forEach(function(ve){H(ve.tag),H(ve.origChecksum),H(Q),H(ve.origLength),ve.outOffset=Q,(Q+=ve.origLength)%4!=0&&(Q+=4-Q%4)}),N.forEach(function(ve){var he,Pe=P.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var I=new Uint8Array(ve.origLength);he=new Uint8Array(Pe,2),S(he,I)}else I=new Uint8Array(Pe);q.set(I,ve.outOffset);var Oe=0;(Q=ve.outOffset+ve.origLength)%4!=0&&(Oe=4-Q%4),q.set(new Uint8Array(Oe).buffer,ve.outOffset+ve.origLength),ne=Q+Oe}),ie.slice(0,ne)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function V1(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,s=4,o=8,l=16,c=32;let u;function h(T){if(!u){const b={R:r,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let S in i){let M=0;i[S].split(",").forEach(D=>{let[P,U]=D.split("+");P=parseInt(P,36),U=U?parseInt(U,36):0,u.set(M+=P,b[S]);for(let L=U;L--;)u.set(++M,b[S])})}}return u.get(T)||c}const f=1,d=2,_=3,g=4,p=[null,"isol","init","fina","medi"];function m(T){const b=new Uint8Array(T.length);let S=c,M=f,D=-1;for(let P=0;P<T.length;P++){const U=T.codePointAt(P);let L=h(U)|0,G=f;L&o||(S&(n|s|l)?L&(r|s|l)?(G=_,(M===f||M===_)&&b[D]++):L&(n|c)&&(M===d||M===g)&&b[D]--:S&(r|c)&&(M===d||M===g)&&b[D]--,M=b[P]=G,S=L,D=P,U>65535&&P++)}return b}function y(T,b){const S=[];for(let D=0;D<b.length;D++){const P=b.codePointAt(D);P>65535&&D++,S.push(a.U.codeToGlyph(T,P))}const M=T.GSUB;if(M){const{lookupList:D,featureList:P}=M;let U;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];P.forEach(O=>{if(L.test(O.tag))for(let Y=0;Y<O.tab.length;Y++){if(G[O.tab[Y]])continue;G[O.tab[Y]]=!0;const H=D[O.tab[Y]],j=/^(isol|init|fina|medi)$/.test(O.tag);j&&!U&&(U=m(b));for(let X=0;X<S.length;X++)(!U||!j||p[U[X]]===O.tag)&&a.U._applySubs(S,X,H,D)}})}return S}function x(T,b){const S=new Int16Array(b.length*3);let M=0;for(;M<b.length;M++){const L=b[M];if(L===-1)continue;S[M*3+2]=T.hmtx.aWidth[L];const G=T.GPOS;if(G){const O=G.lookupList;for(let Y=0;Y<O.length;Y++){const H=O[Y];for(let j=0;j<H.tabs.length;j++){const X=H.tabs[j];if(H.ltype===1){if(a._lctf.coverageIndex(X.coverage,L)!==-1&&X.pos){U(X.pos,M);break}}else if(H.ltype===2){let F=null,V=D();if(V!==-1){const Q=a._lctf.coverageIndex(X.coverage,b[V]);if(Q!==-1){if(X.fmt===1){const N=X.pairsets[Q];for(let k=0;k<N.length;k++)N[k].gid2===L&&(F=N[k])}else if(X.fmt===2){const N=a.U._getGlyphClass(b[V],X.classDef1),k=a.U._getGlyphClass(L,X.classDef2);F=X.matrix[N][k]}if(F){F.val1&&U(F.val1,V),F.val2&&U(F.val2,M);break}}}}else if(H.ltype===4){const F=a._lctf.coverageIndex(X.markCoverage,L);if(F!==-1){const V=D(P),Q=V===-1?-1:a._lctf.coverageIndex(X.baseCoverage,b[V]);if(Q!==-1){const N=X.markArray[F],k=X.baseArray[Q][N.markClass];S[M*3]=k.x-N.x+S[V*3]-S[V*3+2],S[M*3+1]=k.y-N.y+S[V*3+1];break}}}else if(H.ltype===6){const F=a._lctf.coverageIndex(X.mark1Coverage,L);if(F!==-1){const V=D();if(V!==-1){const Q=b[V];if(v(T,Q)===3){const N=a._lctf.coverageIndex(X.mark2Coverage,Q);if(N!==-1){const k=X.mark1Array[F],ne=X.mark2Array[N][k.markClass];S[M*3]=ne.x-k.x+S[V*3]-S[V*3+2],S[M*3+1]=ne.y-k.y+S[V*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const O=D();if(O!==-1){const Y=T.kern.glyph1.indexOf(b[O]);if(Y!==-1){const H=T.kern.rval[Y].glyph2.indexOf(L);H!==-1&&(S[O*3+2]+=T.kern.rval[Y].vals[H])}}}}return S;function D(L){for(let G=M-1;G>=0;G--)if(b[G]!==-1&&(!L||L(b[G])))return G;return-1}function P(L){return v(T,L)===1}function U(L,G){for(let O=0;O<3;O++)S[G*3+O]+=L[O]||0}}function v(T,b){const S=T.GDEF&&T.GDEF.glyphClassDef;return S?a.U._getGlyphClass(b,S):0}function E(...T){for(let b=0;b<T.length;b++)if(typeof T[b]=="number")return T[b]}function w(T){const b=Object.create(null),S=T["OS/2"],M=T.hhea,D=T.head.unitsPerEm,P=E(S&&S.sTypoAscender,M&&M.ascender,D),U={unitsPerEm:D,ascender:P,descender:E(S&&S.sTypoDescender,M&&M.descender,0),capHeight:E(S&&S.sCapHeight,P),xHeight:E(S&&S.sxHeight,P),lineGap:E(S&&S.sTypoLineGap,M&&M.lineGap),supportsCodePoint(L){return a.U.codeToGlyph(T,L)>0},forEachGlyph(L,G,O,Y){let H=0;const j=1/U.unitsPerEm*G,X=y(T,L);let F=0;const V=x(T,X);return X.forEach((Q,N)=>{if(Q!==-1){let k=b[Q];if(!k){const{cmds:ne,crds:q}=a.U.glyphToPath(T,Q);let ie="",xe=0;for(let I=0,Oe=ne.length;I<Oe;I++){const Ae=t[ne[I]];ie+=ne[I];for(let Re=1;Re<=Ae;Re++)ie+=(Re>1?",":"")+q[xe++]}let _e,ve,he,Pe;if(q.length){_e=ve=1/0,he=Pe=-1/0;for(let I=0,Oe=q.length;I<Oe;I+=2){let Ae=q[I],Re=q[I+1];Ae<_e&&(_e=Ae),Re<ve&&(ve=Re),Ae>he&&(he=Ae),Re>Pe&&(Pe=Re)}}else _e=he=ve=Pe=0;k=b[Q]={index:Q,advanceWidth:T.hmtx.aWidth[Q],xMin:_e,yMin:ve,xMax:he,yMax:Pe,path:ie}}Y.call(null,k,H+V[N*3]*j,V[N*3+1]*j,F),H+=V[N*3+2]*j,O&&(H+=O*G)}F+=L.codePointAt(F)>65535?2:1}),H}};return U}return function(b){const S=new Uint8Array(b,0,4),M=a._bin.readASCII(S,0,4);if(M==="wOFF")b=e(b);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(a.parse(b)[0])}}const H1=Ps({name:"Typr Font Parser",dependencies:[G1,z1,V1],init(a,e,t){const i=a(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function W1(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var v=x>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&x))},e.prototype.has=function(x){var v=this.buckets.get(x>>5);return v!==void 0&&(v&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach(function(v,E){x.push((+E).toString(36)+":"+v.toString(36))}),x.join(",")},e.prototype.deserialize=function(x){var v=this;this.buckets.clear(),x.split(",").forEach(function(E){var w=E.split(":");v.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(x){var v=function(w){return w&n}(x).toString(16),E=function(w){return(w&n)+t-1}(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+v+"-"+E+".json"}function s(x,v){var E=x&i,w=v.codePointAt(E/6|0);return((w=(w||48)-48)&1<<E%6)!=0}function o(x,v){var E;(E=x,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(w){var T=w[0],b=w[1];b===void 0&&(b=T),v(T,b)})}function l(x,v){o(x,function(E,w){for(var T=E;T<=w;T++)v(T)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var v=h.get(x);return v||(v=new e,l(x.ranges,function(E){return v.add(E)}),h.set(x,v)),v}var _,g=new Map;function p(x,v,E){return x[v]?v:x[E]?E:function(w){for(var T in w)return T}(x)}function m(x,v){var E=v;if(!x.includes(E)){E=1/0;for(var w=0;w<x.length;w++)Math.abs(x[w]-v)<Math.abs(E-v)&&(E=x[w])}return E}function y(x){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){_.add(v)})),_.has(x)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(x,v){v===void 0&&(v={});var E,w=v.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(E=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(E)?"ja":"en");var T=v.category;T===void 0&&(T="sans-serif");var b=v.style;b===void 0&&(b="normal");var S=v.weight;S===void 0&&(S=400);var M=(v.dataUrl||f).replace(/\/$/g,""),D=new Map,P=new Uint8Array(x.length),U={},L={},G=new Array(x.length),O=new Map,Y=!1;function H(F){var V=g.get(F);return V||(V=fetch(M+"/"+F).then(function(Q){if(!Q.ok)throw new Error(Q.statusText);return Q.json().then(function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]})}).catch(function(Q){if(M!==f)return Y||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+Q.message),Y=!0),M=f,g.delete(F),H(F);throw Q}),g.set(F,V)),V}for(var j=function(F){var V=x.codePointAt(F),Q=r(V);G[F]=Q,c[Q]||O.has(Q)||O.set(Q,H(Q).then(function(N){c[Q]=N})),V>65535&&(F++,X=F)},X=0;X<x.length;X++)j(X);return Promise.all(O.values()).then(function(){O.clear();for(var F=function(Q){var N=x.codePointAt(Q),k=null,ne=c[G[Q]],q=void 0;for(var ie in ne){var xe=L[ie];if(xe===void 0&&(xe=L[ie]=new RegExp(ie).test(w||"en")),xe){for(var _e in q=ie,ne[ie])if(s(N,ne[ie][_e])){k=_e;break}break}}if(!k){e:for(var ve in ne)if(ve!==q){for(var he in ne[ve])if(s(N,ne[ve][he])){k=he;break e}}}k||(console.debug("No font coverage for U+"+N.toString(16)),k="latin"),G[Q]=k,u[k]||O.has(k)||O.set(k,H("font-meta/"+k+".json").then(function(Pe){u[k]=Pe})),N>65535&&(Q++,V=Q)},V=0;V<x.length;V++)F(V);return Promise.all(O.values())}).then(function(){for(var F,V=null,Q=0;Q<x.length;Q++){var N=x.codePointAt(Q);if(V&&(y(N)||d(V).has(N)))P[Q]=P[Q-1];else{V=u[G[Q]];var k=U[V.id];if(!k){var ne=V.typeforms,q=p(ne,T,"sans-serif"),ie=p(ne[q],b,"normal"),xe=m((F=ne[q])===null||F===void 0?void 0:F[ie],S);k=U[V.id]=M+"/font-files/"+V.id+"/"+q+"."+ie+"."+xe+".woff"}var _e=D.get(k);_e==null&&(_e=D.size,D.set(k,_e)),P[Q]=_e}N>65535&&(Q++,P[Q]=P[Q-1])}return{fontUrls:Array.from(D.keys()),chars:P}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function X1(a,e){const t=Object.create(null),i=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):i[s]?i[s].push(o):(i[s]=[o],n(s,c=>{c.src=s,t[s]=c,i[s].forEach(u=>u(c)),delete i[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(s.length),_=[];s.length||y();const g=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let T=0;(function b(S=0){for(let M=S,D=s.length;M<D;M++){const P=s.codePointAt(M);if(T===1&&_[d[M-1]].supportsCodePoint(P)||M>0&&/\s/.test(s[M]))d[M]=d[M-1],T===2&&(p[p.length-1][1]=M);else for(let U=d[M],L=c.length;U<=L;U++)if(U===L){const G=T===2?p[p.length-1]:p[p.length]=[M,M];G[1]=M,T=2}else{d[M]=U;const{src:G,unicodeRange:O}=c[U];if(!O||x(P,O)){const Y=t[G];if(!Y){r(G,()=>{b(M)});return}if(Y.supportsCodePoint(P)){let H=g.get(Y);typeof H!="number"&&(H=_.length,_.push(Y),g.set(Y,H)),d[M]=H,T=1;break}}}P>65535&&M+1<D&&(d[M+1]=d[M],M++,T===2&&(p[p.length-1][1]=M))}m()})()}else p.push([0,s.length-1]),m();function m(){if(p.length){const v=p.map(E=>s.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:E,chars:w})=>{const T=_.length;let b=0;p.forEach(M=>{for(let D=0,P=M[1]-M[0];D<=P;D++)d[M[0]+D]=w[b++]+T;b++});let S=0;E.forEach((M,D)=>{r(M,P=>{_[D+T]=P,++S===E.length&&y()})})})}else y()}function y(){o({chars:d,fonts:_})}function x(v,E){for(let w=0;w<E.length;w++){const[T,b=T]=E[w];if(T<=v&&v<=b)return!0}return!1}}}const Y1=Ps({name:"FontResolver",dependencies:[X1,H1,W1],init(a,e,t){return a(e,t())}});function q1(a,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:_,lang:g,fonts:p,style:m,weight:y,preResolvedFonts:x,unicodeFontsURL:v},E){const w=({chars:T,fonts:b})=>{let S,M;const D=[];for(let P=0;P<T.length;P++)T[P]!==M?(M=T[P],D.push(S={start:P,end:P,fontObj:b[T[P]]})):S.end=P;E(D)};x?w(x):a(_,w,{lang:g,fonts:p,style:m,weight:y,unicodeFontsURL:v})}function o({text:_="",font:g,lang:p,sdfGlyphSize:m=64,fontSize:y=400,fontWeight:x=1,fontStyle:v="normal",letterSpacing:E=0,lineHeight:w="normal",maxWidth:T=1/0,direction:b,textAlign:S="left",textIndent:M=0,whiteSpace:D="normal",overflowWrap:P="normal",anchorX:U=0,anchorY:L=0,metricsOnly:G=!1,unicodeFontsURL:O,preResolvedFonts:Y=null,includeCaretPositions:H=!1,chunkedBoundsSize:j=8192,colorRanges:X=null},F){const V=h(),Q={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,E=+E,T=+T,w=w||"normal",M=+M,s({text:_,lang:p,style:v,weight:x,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:O,preResolvedFonts:Y},N=>{Q.fontLoad=h()-V;const k=isFinite(T);let ne=null,q=null,ie=null,xe=null,_e=null,ve=null,he=null,Pe=null,I=0,Oe=0,Ae=D!=="nowrap";const Re=new Map,ae=h();let be=M,de=0,R=new f;const A=[R];N.forEach(fe=>{const{fontObj:le}=fe,{ascender:me,descender:Ue,unitsPerEm:ce,lineGap:Se,capHeight:Te,xHeight:Ee}=le;let oe=Re.get(le);if(!oe){const ue=y/ce,te=w==="normal"?(me-Ue+Se)*ue:w*y,pe=(te-(me-Ue)*ue)/2,ye=Math.min(te,(me-Ue)*ue),ge=(me+Ue)/2*ue+ye/2;oe={index:Re.size,src:le.src,fontObj:le,fontSizeMult:ue,unitsPerEm:ce,ascender:me*ue,descender:Ue*ue,capHeight:Te*ue,xHeight:Ee*ue,lineHeight:te,baseline:-pe-me*ue,caretTop:ge,caretBottom:ge-ye},Re.set(le,oe)}const{fontSizeMult:Le}=oe,Fe=_.slice(fe.start,fe.end+1);let je,z;le.forEachGlyph(Fe,y,E,(ue,te,pe,ye)=>{te+=de,ye+=fe.start,je=te,z=ue;const ge=_.charAt(ye),Ne=ue.advanceWidth*Le,We=R.count;let Be;if("isEmpty"in ue||(ue.isWhitespace=!!ge&&new RegExp(n).test(ge),ue.canBreakAfter=!!ge&&r.test(ge),ue.isEmpty=ue.xMin===ue.xMax||ue.yMin===ue.yMax||i.test(ge)),!ue.isWhitespace&&!ue.isEmpty&&Oe++,Ae&&k&&!ue.isWhitespace&&te+Ne+be>T&&We){if(R.glyphAt(We-1).glyphObj.canBreakAfter)Be=new f,be=-te;else for(let ct=We;ct--;)if(ct===0&&P==="break-word"){Be=new f,be=-te;break}else if(R.glyphAt(ct).glyphObj.canBreakAfter){Be=R.splitAt(ct+1);const ht=Be.glyphAt(0).x;be-=ht;for(let xt=Be.count;xt--;)Be.glyphAt(xt).x-=ht;break}Be&&(R.isSoftWrapped=!0,R=Be,A.push(R),I=T)}let ze=R.glyphAt(R.count);ze.glyphObj=ue,ze.x=te+be,ze.y=pe,ze.width=Ne,ze.charIndex=ye,ze.fontData=oe,ge===`
`&&(R=new f,A.push(R),be=-(te+Ne+E*y)+M)}),de=je+z.advanceWidth*Le+E*y});let B=0;A.forEach(fe=>{let le=!0;for(let me=fe.count;me--;){const Ue=fe.glyphAt(me);le&&!Ue.glyphObj.isWhitespace&&(fe.width=Ue.x+Ue.width,fe.width>I&&(I=fe.width),le=!1);let{lineHeight:ce,capHeight:Se,xHeight:Te,baseline:Ee}=Ue.fontData;ce>fe.lineHeight&&(fe.lineHeight=ce);const oe=Ee-fe.baseline;oe<0&&(fe.baseline+=oe,fe.cap+=oe,fe.ex+=oe),fe.cap=Math.max(fe.cap,fe.baseline+Se),fe.ex=Math.max(fe.ex,fe.baseline+Te)}fe.baseline-=B,fe.cap-=B,fe.ex-=B,B+=fe.lineHeight});let $=0,ee=0;if(U&&(typeof U=="number"?$=-U:typeof U=="string"&&($=-I*(U==="left"?0:U==="center"?.5:U==="right"?1:c(U)))),L&&(typeof L=="number"?ee=-L:typeof L=="string"&&(ee=L==="top"?0:L==="top-baseline"?-A[0].baseline:L==="top-cap"?-A[0].cap:L==="top-ex"?-A[0].ex:L==="middle"?B/2:L==="bottom"?B:L==="bottom-baseline"?-A[A.length-1].baseline:c(L)*B)),!G){const fe=e.getEmbeddingLevels(_,b);ne=new Uint16Array(Oe),q=new Uint8Array(Oe),ie=new Float32Array(Oe*2),xe={},he=[1/0,1/0,-1/0,-1/0],Pe=[],H&&(ve=new Float32Array(_.length*4)),X&&(_e=new Uint8Array(Oe*3));let le=0,me=-1,Ue=-1,ce,Se;if(A.forEach((Te,Ee)=>{let{count:oe,width:Le}=Te;if(oe>0){let Fe=0;for(let ye=oe;ye--&&Te.glyphAt(ye).glyphObj.isWhitespace;)Fe++;let je=0,z=0;if(S==="center")je=(I-Le)/2;else if(S==="right")je=I-Le;else if(S==="justify"&&Te.isSoftWrapped){let ye=0;for(let ge=oe-Fe;ge--;)Te.glyphAt(ge).glyphObj.isWhitespace&&ye++;z=(I-Le)/ye}if(z||je){let ye=0;for(let ge=0;ge<oe;ge++){let Ne=Te.glyphAt(ge);const We=Ne.glyphObj;Ne.x+=je+ye,z!==0&&We.isWhitespace&&ge<oe-Fe&&(ye+=z,Ne.width+=z)}}const ue=e.getReorderSegments(_,fe,Te.glyphAt(0).charIndex,Te.glyphAt(Te.count-1).charIndex);for(let ye=0;ye<ue.length;ye++){const[ge,Ne]=ue[ye];let We=1/0,Be=-1/0;for(let ze=0;ze<oe;ze++)if(Te.glyphAt(ze).charIndex>=ge){let ct=ze,ht=ze;for(;ht<oe;ht++){let xt=Te.glyphAt(ht);if(xt.charIndex>Ne)break;ht<oe-Fe&&(We=Math.min(We,xt.x),Be=Math.max(Be,xt.x+xt.width))}for(let xt=ct;xt<ht;xt++){const rn=Te.glyphAt(xt);rn.x=Be-(rn.x+rn.width-We)}break}}let te;const pe=ye=>te=ye;for(let ye=0;ye<oe;ye++){const ge=Te.glyphAt(ye);te=ge.glyphObj;const Ne=te.index,We=fe.levels[ge.charIndex]&1;if(We){const Be=e.getMirroredCharacter(_[ge.charIndex]);Be&&ge.fontData.fontObj.forEachGlyph(Be,0,0,pe)}if(H){const{charIndex:Be,fontData:ze}=ge,ct=ge.x+$,ht=ge.x+ge.width+$;ve[Be*4]=We?ht:ct,ve[Be*4+1]=We?ct:ht,ve[Be*4+2]=Te.baseline+ze.caretBottom+ee,ve[Be*4+3]=Te.baseline+ze.caretTop+ee;const xt=Be-me;xt>1&&u(ve,me,xt),me=Be}if(X){const{charIndex:Be}=ge;for(;Be>Ue;)Ue++,X.hasOwnProperty(Ue)&&(Se=X[Ue])}if(!te.isWhitespace&&!te.isEmpty){const Be=le++,{fontSizeMult:ze,src:ct,index:ht}=ge.fontData,xt=xe[ct]||(xe[ct]={});xt[Ne]||(xt[Ne]={path:te.path,pathBounds:[te.xMin,te.yMin,te.xMax,te.yMax]});const rn=ge.x+$,Vt=ge.y+Te.baseline+ee;ie[Be*2]=rn,ie[Be*2+1]=Vt;const gn=rn+te.xMin*ze,In=Vt+te.yMin*ze,Jn=rn+te.xMax*ze,sn=Vt+te.yMax*ze;gn<he[0]&&(he[0]=gn),In<he[1]&&(he[1]=In),Jn>he[2]&&(he[2]=Jn),sn>he[3]&&(he[3]=sn),Be%j===0&&(ce={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},Pe.push(ce)),ce.end++;const Ut=ce.rect;if(gn<Ut[0]&&(Ut[0]=gn),In<Ut[1]&&(Ut[1]=In),Jn>Ut[2]&&(Ut[2]=Jn),sn>Ut[3]&&(Ut[3]=sn),ne[Be]=Ne,q[Be]=ht,X){const wn=Be*3;_e[wn]=Se>>16&255,_e[wn+1]=Se>>8&255,_e[wn+2]=Se&255}}}}}),ve){const Te=_.length-me;Te>1&&u(ve,me,Te)}}const se=[];Re.forEach(({index:fe,src:le,unitsPerEm:me,ascender:Ue,descender:ce,lineHeight:Se,capHeight:Te,xHeight:Ee})=>{se[fe]={src:le,unitsPerEm:me,ascender:Ue,descender:ce,lineHeight:Se,capHeight:Te,xHeight:Ee}}),Q.typesetting=h()-ae,F({glyphIds:ne,glyphFontIndices:q,glyphPositions:ie,glyphData:xe,fontData:se,caretPositions:ve,glyphColors:_e,chunkedBounds:Pe,fontSize:y,topBaseline:ee+A[0].baseline,blockBounds:[$,ee-B,$+I,ee],visibleBounds:he,timings:Q})})}function l(_,g){o({..._,metricsOnly:!0},p=>{const[m,y,x,v]=p.blockBounds;g({width:x-m,height:v-y})})}function c(_){let g=_.match(/^([\d.]+)%$/),p=g?parseFloat(g[1]):NaN;return isNaN(p)?0:p/100}function u(_,g,p){const m=_[g*4],y=_[g*4+1],x=_[g*4+2],v=_[g*4+3],E=(y-m)/p;for(let w=0;w<p;w++){const T=(g+w)*4;_[T]=m+E*w,_[T+1]=m+E*(w+1),_[T+2]=x,_[T+3]=v}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let g=f.flyweight;return g.data=this.data,g.index=_,g},splitAt(_){let g=new f;return g.data=this.data.splice(_*d.length),g}},f.flyweight=d.reduce((_,g,p,m)=>(Object.defineProperty(_,g,{get(){return this.data[this.index*d.length+p]},set(y){this.data[this.index*d.length+p]=y}}),_),{data:null,index:0}),{typeset:o,measure:l}}const br=()=>(self.performance||Date).now(),jo=lm();let $f;function j1(a,e,t,i,n,r,s,o,l,c,u=!0){return u?Z1(a,e,t,i,n,r,s,o,l,c).then(null,h=>($f||(console.warn("WebGL SDF generation failed, falling back to JS",h),$f=!0),td(a,e,t,i,n,r,s,o,l,c))):td(a,e,t,i,n,r,s,o,l,c)}const Ao=[],K1=5;let ou=0;function um(){const a=br();for(;Ao.length&&br()-a<K1;)Ao.shift()();ou=Ao.length?setTimeout(um,0):0}const Z1=(...a)=>new Promise((e,t)=>{Ao.push(()=>{const i=br();try{jo.webgl.generateIntoCanvas(...a),e({timing:br()-i})}catch(n){t(n)}}),ou||(ou=setTimeout(um,0))}),J1=4,Q1=2e3,ed={};let $1=0;function td(a,e,t,i,n,r,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+$1++%J1;let h=ed[u];return h||(h=ed[u]={workerModule:Ps({name:u,workerId:u,dependencies:[lm,br],init(f,d){const _=f().javascript.generate;return function(...g){const p=d();return{textureData:_(...g),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(a,e,t,i,n,r).then(({textureData:f,timing:d})=>{const _=br(),g=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)g[p*4+c]=f[p];return jo.webglUtils.renderImageData(s,g,o,l,a,e,1<<3-c),d+=br()-_,--h.requests===0&&(h.idleTimer=setTimeout(()=>{P1(u)},Q1)),{timing:d}})}function eT(a){a._warm||(jo.webgl.isSupported(a),a._warm=!0)}const tT=jo.webglUtils.resizeWebGLCanvasWithoutClearing,ta={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},nT=new Xe;function Qr(){return(self.performance||Date).now()}const nd=Object.create(null);function iT(a,e){a=sT({},a);const t=Qr(),i=[];if(a.font&&i.push({label:"user",src:aT(a.font)}),a.font=i,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||ta.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||ta.unicodeFontsURL,a.colorRanges!=null){let f={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let _=a.colorRanges[d];typeof _!="number"&&(_=nT.set(_).getHex()),f[d]=_}a.colorRanges=f}Object.freeze(a);const{textureWidth:n,sdfExponent:r}=ta,{sdfGlyphSize:s}=a,o=n/s*4;let l=nd[s];if(!l){const f=document.createElement("canvas");f.width=n,f.height=s*256/o,l=nd[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:f,sdfTexture:new Rt(f,void 0,void 0,void 0,yt,yt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,rT(l)}const{sdfTexture:c,sdfCanvas:u}=l;dm(a).then(f=>{const{glyphIds:d,glyphFontIndices:_,fontData:g,glyphPositions:p,fontSize:m,timings:y}=f,x=[],v=new Float32Array(d.length*4);let E=0,w=0;const T=Qr(),b=g.map(U=>{let L=l.glyphsByFont.get(U.src);return L||l.glyphsByFont.set(U.src,L=new Map),L});d.forEach((U,L)=>{const G=_[L],{src:O,unitsPerEm:Y}=g[G];let H=b[G].get(U);if(!H){const{path:Q,pathBounds:N}=f.glyphData[O][U],k=Math.max(N[2]-N[0],N[3]-N[1])/s*(ta.sdfMargin*s+.5),ne=l.glyphCount++,q=[N[0]-k,N[1]-k,N[2]+k,N[3]+k];b[G].set(U,H={path:Q,atlasIndex:ne,sdfViewBox:q}),x.push(H)}const{sdfViewBox:j}=H,X=p[w++],F=p[w++],V=m/Y;v[E++]=X+j[0]*V,v[E++]=F+j[1]*V,v[E++]=X+j[2]*V,v[E++]=F+j[3]*V,d[L]=H.atlasIndex}),y.quads=(y.quads||0)+(Qr()-T);const S=Qr();y.sdf={};const M=u.height,D=Math.ceil(l.glyphCount/o),P=Math.pow(2,Math.ceil(Math.log2(D*s)));P>M&&(console.info(`Increasing SDF texture size ${M}->${P}`),tT(u,n,P),c.dispose()),Promise.all(x.map(U=>hm(U,l,a.gpuAccelerateSDF).then(({timing:L})=>{y.sdf[U.atlasIndex]=L}))).then(()=>{x.length&&!l.contextLost&&(fm(l),c.needsUpdate=!0),y.sdfTotal=Qr()-S,y.total=Qr()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:r,glyphBounds:v,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||eT(u)})}function hm({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=ta,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/i)*i,f=Math.floor(u/(o/i))*i,d=e%4;return j1(i,i,a,t,c,l,n,h,f,d,s)}function rT(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const i=[];a.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(hm(r,a,!0))})}),Promise.all(i).then(()=>{fm(a),a.sdfTexture.needsUpdate=!0})})}function sT(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let co;function aT(a){return co||(co=typeof document>"u"?{}:document.createElement("a")),co.href=a,co.href}function fm(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:i,height:n}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==i*n*4)&&(s=new Uint8Array(i*n*4),t.image={width:i,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,s)}}const oT=Ps({name:"Typesetter",dependencies:[q1,Y1,U1],init(a,e,t){return a(e,t())}}),dm=Ps({name:"Typesetter",dependencies:[oT],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});dm.onMainThread;const id={};function lT(a){let e=id[a];return e||(e=id[a]=new Xn(1,1,a,a).translate(.5,.5,0)),e}const cT="aTroikaGlyphBounds",rd="aTroikaGlyphIndex",uT="aTroikaGlyphColor";class hT extends L_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new jn,this.boundingBox=new qn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=lT(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(cT,e,4),this.updateAttributeData(rd,t,1),this.updateAttributeData(uT,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:s,max:o,sin:l,cos:c}=Math,u=n/2,h=n*2,f=Math.abs(t),d=e[0]/f,_=e[2]/f,g=r((d+u)/h)!==r((_+u)/h)?-f:s(l(d)*f,l(_)*f),p=r((d-u)/h)!==r((_-u)/h)?f:o(l(d)*f,l(_)*f),m=r((d+n)/h)!==r((_+n)/h)?f*2:o(f-c(d)*f,f-c(_)*f);i.min.set(g,e[1],t<0?-m:0),i.max.set(p,e[3],t<0?0:m)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(rd).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Do(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const fT=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,dT=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,pT=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,mT=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function gT(a){const e=au(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Je},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Je},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Xe},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ye},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:fT,vertexTransform:dT,fragmentDefs:pT,fragmentColorTransform:mT,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(cm,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Yu=new ai({color:16777215,side:ln,transparent:!0}),sd=8421504,ad=new qe,uo=new J,Jl=new J,Zs=[],_T=new J,Ql="+x+y";function od(a){return Array.isArray(a)?a[0]:a}let pm=()=>{const a=new wt(new Xn(1,1),Yu);return pm=()=>a,a},mm=()=>{const a=new wt(new Xn(1,1,32,1),Yu);return mm=()=>a,a};const vT={type:"syncstart"},xT={type:"synccomplete"},gm=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],yT=gm.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class _m extends wt{constructor(){const e=new hT;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=sd,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Ql,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(vT),iT({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(xT),e&&e()})))}onBeforeRender(e,t,i,n,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return gT(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Yu.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return od(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return od(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,h=0,f,d,_,g=0,p=0;if(t){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:v,outlineBlur:E,outlineOpacity:w}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(E)||0),f=w,g=this._parsePercent(x)||0,p=this._parsePercent(v)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(_=this.strokeColor,i.uTroikaStrokeColor.value.set(_??sd),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(g,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=h,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)i.uTroikaClipRect.value.fromArray(m);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Xe;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||Ql;if(s!==e._orientation){let o=i.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==Ql&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;uo.set(0,0,0)[u]=c==="-"?1:-1,Jl.set(0,0,0)[f]=h==="-"?-1:1,ad.lookAt(_T,uo.cross(Jl),Jl),o.setFromMatrix4(ad)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Je){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Je){return uo.copy(e),this.localPositionToTextCoords(this.worldToLocal(uo),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,s=n?mm():pm(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(h/n)*n,h=Math.sin(h/n)*n),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Zs.length=0,s.raycast(e,Zs);for(let u=0;u<Zs.length;u++)Zs[u].object=this,t.push(Zs[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,yT.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}gm.forEach(a=>{const e="_private_"+a;Object.defineProperty(_m.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new qn;new Xe;const yn=b1((a,e)=>({currentIndex:0,isAnimating:!1,totalBlobs:0,isOrthographic:!0,setCurrentIndex:t=>a({currentIndex:t}),setIsAnimating:t=>a({isAnimating:t}),setTotalBlobs:t=>a({totalBlobs:t}),setIsOrthographic:t=>a({isOrthographic:t}),navigateToNext:()=>{const{currentIndex:t,totalBlobs:i}=e(),n=(t+1)%i;return a({currentIndex:n}),n},navigateToPrevious:()=>{const{currentIndex:t,totalBlobs:i}=e(),n=(t-1+i)%i;return a({currentIndex:n}),n},toggleCamera:()=>{const{isOrthographic:t}=e();return a({isOrthographic:!t}),!t}})),us=new $d,ld=new ep(us),ST=new CS(us);let ho=!1,cd=0,ud=50,hd=0,$l=0;const MT=100;let fd=0;const TT=100,Vn=[{name:"A brand image studio",background:"#001EFF",gradientEnd:"#000843",useGradient:!0,materialTexture:"./materials/TGG1.png",backgroundTexture:"./backgrounds/BG 1.png"},{name:"Crafting Artistic direction",background:"#06E6FF",gradientEnd:"#FDFDFD",useGradient:!0,materialTexture:"./materials/TGG2.png",backgroundTexture:"./backgrounds/BG 2.png"},{name:"& Web dev agency",background:"#FF0000",useGradient:!1,materialTexture:"./materials/TGG3.png",backgroundTexture:"./backgrounds/BG 3.png"},{name:"Product design",background:"#FFFFFF",useGradient:!1,materialTexture:"./materials/TGG4.png",backgroundTexture:"./backgrounds/BG 4.png"},{name:"And immersive websites",background:"#000000",useGradient:!1,materialTexture:"./materials/TGG5.png",backgroundTexture:"./backgrounds/BG 5.png"}],$r=new t_,es=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),dd=window.innerWidth/window.innerHeight,ei=new Ho(-2*dd,2*dd,2,-2,.1,1e3);let ec=ei;const Cr=new wS({canvas:document.querySelector("#canvas"),antialias:!0}),vm=yn.getState();vm.setTotalBlobs(Vn.length);Cr.setSize(window.innerWidth,window.innerHeight);Cr.setPixelRatio(Math.min(window.devicePixelRatio,2));Cr.toneMapping=xd;Cr.toneMappingExposure=1.2;Cr.outputColorSpace=Nt;let Cn=null,pd={},zn={},fo=0,md=[],gd=[],dr=null;const ET=new RS(us);ET.load("https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr",function(a){a.mapping=wo,$r.environment=a,ST.load("./GHOST-FINAL.glb",function(p){Cn=p.scene,console.log("=== WELCOME TO GHOST STUDIO! ==="),console.log("-- CHECK OUR SITE NOT THE CONSOLE LOGS! :)"),console.log("=== LOADING CLEAN TEXTURE MATERIALS ==="),console.log(`📦 Loading ${Vn.length} blob configurations with backgrounds and materials`);const m=Vn.map((x,v)=>new Promise(E=>{ld.load(x.materialTexture,w=>{const T=new _a({map:w,transparent:!0,opacity:v===0?1:0,side:ln});zn[`TGG${v+1}`]=T,E()},void 0,w=>{const T=new _a({color:"#ffffff",transparent:!0,opacity:v===0?1:0,side:ln});zn[`TGG${v+1}`]=T,E()})}));Promise.all(m).then(()=>{Cn.traverse(x=>{x.isMesh&&(Array.isArray(x.material)?x.material=x.material.map(v=>v.name.toLowerCase().includes("eye")||v.name==="1 eyes"?(pd[v.name]=v.clone(),v):zn.TGG1):x.material.name.toLowerCase().includes("eye")||x.material.name==="1 eyes"?pd[x.material.name]=x.material.clone():x.material=zn.TGG1)})}),Cn.traverse(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)});function y(x,v,E,w){v.transparent=!0,v.opacity=0,x.transparent=!0,$n.to(x,{opacity:0,duration:E,ease:"power2.inOut"}),$n.to(v,{opacity:1,duration:E,ease:"power2.inOut",onComplete:()=>{v.transparent=!1,w&&w()}})}window.switchToTextureMaterial=function(x,v=.5){if(!zn[x])return;const E=zn[x].clone();Cn.traverse(T=>{if(T.isMesh){if(Array.isArray(T.material))T.material.forEach((b,S)=>{if(!(b.name&&(b.name.toLowerCase().includes("eye")||b.name==="1 eyes"))){const M=new wt(T.geometry,E.clone());M.position.copy(T.position),M.rotation.copy(T.rotation),M.scale.copy(T.scale),M.matrix.copy(T.matrix),M.matrixWorld.copy(T.matrixWorld),M.material.transparent=!0,M.material.opacity=0,T.parent.add(M),y(b,M.material,v,()=>{T.material[S]=M.material.clone(),T.parent.remove(M)})}});else if(!(T.material.name&&(T.material.name.toLowerCase().includes("eye")||T.material.name==="1 eyes"))){const b=new wt(T.geometry,E.clone());b.position.copy(T.position),b.rotation.copy(T.rotation),b.scale.copy(T.scale),b.matrix.copy(T.matrix),b.matrixWorld.copy(T.matrixWorld),b.material.transparent=!0,b.material.opacity=0,T.parent.add(b),y(T.material,b.material,v,()=>{T.material=b.material.clone(),T.parent.remove(b)})}}}),fo=parseInt(x.replace("TGG",""))-1},window.cycleTextureMaterials=function(){const x=Object.keys(zn);if(x.length===0)return;const v=x[fo];switchToTextureMaterial(v,.5),fo=(fo+1)%x.length},window.addEventListener("keydown",x=>{(x.key==="m"||x.key==="M")&&cycleTextureMaterials(),(x.key==="b"||x.key==="B")&&cycleBackgrounds()}),window.changeTextureMaterialOpacity=function(x,v){if(!zn[x])return;const E=zn[x];E.transparent=v<1,E.opacity=v,Cn.traverse(w=>{w.isMesh&&(Array.isArray(w.material)?w.material.forEach(T=>{T.name&&(T.name.toLowerCase().includes("eye")||T.name==="1 eyes")||(T.transparent=v<1,$n.to(T,{opacity:v,duration:1,ease:"power2.inOut"}))}):w.material.name&&(w.material.name.toLowerCase().includes("eye")||w.material.name==="1 eyes")||(w.material.transparent=v<1,$n.to(w.material,{opacity:v,duration:1,ease:"power2.inOut"})))})},Cn.scale.setScalar(1.2),Cn.position.set(0,0,0),$r.add(Cn)});function e(){const p=window.innerWidth/window.innerHeight,m=Math.max(window.innerWidth,window.innerHeight)*.002;return{width:m*p*2,height:m*2}}const t=e(),i=new Xn(t.width,t.height),n=new Xn(t.width*1.2,t.height*1.2);Vn.forEach((p,m)=>{const y=ld.load(p.backgroundTexture),x=new ai({map:y,transparent:!0,opacity:m===0?1:0}),v=new wt(i,x);v.position.z=-15,v.renderOrder=-5,$r.add(v),md.push(v),gd.push(x)});const r=document.createElement("video");r.src="./gh0st_loop.mp4",r.loop=!0,r.muted=!0,r.autoplay=!0,r.playsInline=!0;const s=new d_(r),o=new ai({map:s,transparent:!0,opacity:.2});dr=new wt(n,o),dr.position.z=-12,dr.renderOrder=-3,$r.add(dr),r.play().catch(console.error);function l(p,m=.5){const{setCurrentIndex:y}=yn.getState();p<0||p>=Vn.length||gd.forEach((x,v)=>{$n.to(x,{opacity:v===p?1:0,duration:m,ease:"power2.inOut"})})}window.switchBackground=l,window.cycleBackgrounds=function(){const{currentIndex:p}=yn.getState(),m=(p+1)%Vn.length;l(m)},es.position.z=3,ei.position.z=3;function c(){requestAnimationFrame(c),Cr.render($r,ec)}c();const u=new Di({vertexShader:uM,fragmentShader:"void main(){ gl_FragColor = vec4(1.0); }",side:ln,uniforms:{progress:{value:0},direction:{value:1}}}),h=Vn.map((p,m)=>{const y=new _m;return y.text=p.name,y.font="./TT Norms Pro DemiBold.ttf",y.anchorX="center",y.anchorY="middle",y.material=u,y.position.set(0,0,2),m!==0&&y.scale.set(0,0,0),y.letterSpacing=-.08,y.fontSize=.4,y.glyphGeometryDetail=20,y.sync(),$r.add(y),y});us.onLoad=()=>{const p=Vn[vm.currentIndex];_(p,0)},us.onProgress=(p,m,y)=>{},us.onError=p=>{};function f(p){const{isAnimating:m,setIsAnimating:y,currentIndex:x}=yn.getState();if(m)return;y(!0);const v=x;let E;p>0?E=yn.getState().navigateToNext():E=yn.getState().navigateToPrevious(),g(v,E),setTimeout(()=>{y(!1)},1e3)}window.addEventListener("wheel",p=>{const{isAnimating:m}=yn.getState();if(m)return;p.preventDefault(),$l+=Math.abs(p.deltaY);const y=Date.now();if(!(y-fd<TT)&&$l>=MT){fd=y,$l=0;const x=p.deltaY>0?1:-1;f(x)}},{passive:!1});function d(){yn.getState().toggleCamera()?(ec=ei,ei.position.copy(es.position)):(ec=es,es.position.copy(ei.position))}window.addEventListener("keydown",p=>{const{isAnimating:m}=yn.getState();if(!m)switch(p.key){case"ArrowRight":case"ArrowDown":p.preventDefault(),f(1);break;case"ArrowLeft":case"ArrowUp":p.preventDefault(),f(-1);break;case"c":case"C":p.preventDefault(),d();break}}),window.addEventListener("mousedown",p=>{const{isAnimating:m}=yn.getState();m||(ho=!0,cd=p.clientX,document.body.style.cursor="grabbing")}),window.addEventListener("mousemove",p=>{const{isAnimating:m}=yn.getState();if(!ho||m)return;const y=p.clientX-cd;if(Math.abs(y)>ud){const x=y>0?-1:1;f(x),ho=!1,document.body.style.cursor="default"}}),window.addEventListener("mouseup",()=>{ho=!1,document.body.style.cursor="default"}),window.addEventListener("touchstart",p=>{const{isAnimating:m}=yn.getState();m||(hd=p.touches[0].clientX)},{passive:!0}),window.addEventListener("touchend",p=>{const{isAnimating:m}=yn.getState();if(m)return;const x=p.changedTouches[0].clientX-hd;if(Math.abs(x)>ud){const v=x>0?-1:1;f(v)}},{passive:!0});function _(p,m=.2){if(!Cn||Object.keys(zn).length===0)return;const x=`TGG${Vn.indexOf(p)+1}`;zn[x]&&switchToTextureMaterial(x,m)}function g(p,m){const y=Vn[m];let x;const v=Vn.length,E=m-p;if(Math.abs(E)===1?x=E>0?1:-1:E===-(v-1)?x=1:E===v-1?x=-1:x=m>p?1:-1,l(m,1),Cn){const w=Cn.rotation.y,T=x>0?1:-1,b=w+T*Math.PI*2;$n.to(Cn.rotation,{y:b,duration:1,ease:"power2.inOut"})}h[m].scale.set(1,1,1),h[m].position.x=x*6,$n.to(u.uniforms.progress,{value:.5,duration:1,ease:"linear",onComplete:()=>{u.uniforms.progress.value=0}}),$n.to(h[p].position,{x:-x*8,duration:1,ease:"power2.inOut"}),$n.to(h[m].position,{x:0,duration:1,ease:"power2.inOut"}),_(y,.8)}window.addEventListener("resize",()=>{const p=window.innerWidth/window.innerHeight;es.aspect=p,es.updateProjectionMatrix(),ei.left=-2*p,ei.right=2*p,ei.top=2,ei.bottom=-2,ei.updateProjectionMatrix(),Cr.setSize(window.innerWidth,window.innerHeight);const m=e();md.forEach(y=>{y.geometry.dispose(),y.geometry=new Xn(m.width,m.height)}),dr&&(dr.geometry.dispose(),dr.geometry=new Xn(m.width*1.2,m.height*1.2))})});
