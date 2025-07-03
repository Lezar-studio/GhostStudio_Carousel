(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="175",Fm=0,df=1,Nm=2,Md=1,Td=2,yi=3,Ci=0,dn=1,fn=2,wi=0,is=1,pf=2,mf=3,gf=4,Om=5,vr=100,Bm=101,km=102,zm=103,Gm=104,Vm=200,Hm=201,Wm=202,Xm=203,sc=204,ac=205,Ym=206,jm=207,qm=208,Km=209,Zm=210,Jm=211,Qm=212,$m=213,eg=214,oc=0,lc=1,cc=2,us=3,uc=4,fc=5,hc=6,dc=7,Ed=0,tg=1,ng=2,Zi=0,du=1,bd=2,Ad=3,wd=4,ig=5,rg=6,Rd=7,_f="attached",sg="detached",Cd=300,fs=301,hs=302,Po=303,pc=304,Xo=306,$i=1e3,Wi=1001,Lo=1002,en=1003,Dd=1004,Qs=1005,$t=1006,_o=1007,bi=1008,Di=1009,Pd=1010,Ld=1011,fa=1012,pu=1013,wr=1014,qn=1015,bs=1016,mu=1017,gu=1018,ha=1020,Ud=35902,Id=1021,Fd=1022,In=1023,Nd=1024,Od=1025,da=1026,pa=1027,_u=1028,vu=1029,Bd=1030,xu=1031,yu=1033,vo=33776,xo=33777,yo=33778,So=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,yc=37492,Sc=37496,Mc=37808,Tc=37809,Ec=37810,bc=37811,Ac=37812,wc=37813,Rc=37814,Cc=37815,Dc=37816,Pc=37817,Lc=37818,Uc=37819,Ic=37820,Fc=37821,Mo=36492,Nc=36494,Oc=36495,kd=36283,Bc=36284,kc=36285,zc=36286,ma=2300,ga=2301,fl=2302,vf=2400,xf=2401,yf=2402,ag=2500,og=0,zd=1,Gc=2,lg=3200,Gd=3201,Vd=0,cg=1,Hi="",wt="srgb",nn="srgb-linear",Uo="linear",lt="srgb",Fr=7680,Sf=519,ug=512,fg=513,hg=514,Hd=515,dg=516,pg=517,mg=518,gg=519,Vc=35044,Mf="300 es",Ai=2e3,Io=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tf=1234567;const ia=Math.PI/180,ds=180/Math.PI;function Kn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[a&255]+Ht[a>>8&255]+Ht[a>>16&255]+Ht[a>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Qe(a,e,t){return Math.max(e,Math.min(t,a))}function Su(a,e){return(a%e+e)%e}function _g(a,e,t,i,n){return i+(a-e)*(n-i)/(t-e)}function vg(a,e,t){return a!==e?(t-a)/(e-a):0}function ra(a,e,t){return(1-t)*a+t*e}function xg(a,e,t,i){return ra(a,e,1-Math.exp(-t*i))}function yg(a,e=1){return e-Math.abs(Su(a,e*2)-e)}function Sg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Mg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Tg(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Eg(a,e){return a+Math.random()*(e-a)}function bg(a){return a*(.5-Math.random())}function Ag(a){a!==void 0&&(Tf=a);let e=Tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wg(a){return a*ia}function Rg(a){return a*ds}function Cg(a){return(a&a-1)===0&&a!==0}function Dg(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Pg(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Lg(a,e,t,i,n){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+i)/2),u=s((e+i)/2),f=r((e-i)/2),h=s((e-i)/2),d=r((i-e)/2),_=s((i-e)/2);switch(n){case"XYX":a.set(o*u,l*f,l*h,o*c);break;case"YZY":a.set(l*h,o*u,l*f,o*c);break;case"ZXZ":a.set(l*f,l*h,o*u,o*c);break;case"XZX":a.set(o*u,l*_,l*d,o*c);break;case"YXY":a.set(l*d,o*u,l*_,o*c);break;case"ZYZ":a.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Xn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function at(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Ug={DEG2RAD:ia,RAD2DEG:ds,generateUUID:Kn,clamp:Qe,euclideanModulo:Su,mapLinear:_g,inverseLerp:vg,lerp:ra,damp:xg,pingpong:yg,smoothstep:Sg,smootherstep:Mg,randInt:Tg,randFloat:Eg,randFloatSpread:bg,seededRandom:Ag,degToRad:wg,radToDeg:Rg,isPowerOfTwo:Cg,ceilPowerOfTwo:Dg,floorPowerOfTwo:Pg,setQuaternionFromProperEuler:Lg,normalize:at,denormalize:Xn};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*n+e.x,this.y=r*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,n,r,s,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c)}set(e,t,i,n,r,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],m=n[0],p=n[3],g=n[6],y=n[1],x=n[4],v=n[7],E=n[2],w=n[5],T=n[8];return r[0]=s*m+o*y+l*E,r[3]=s*p+o*x+l*w,r[6]=s*g+o*v+l*T,r[1]=c*m+u*y+f*E,r[4]=c*p+u*x+f*w,r[7]=c*g+u*v+f*T,r[2]=h*m+d*y+_*E,r[5]=h*p+d*x+_*w,r[8]=h*g+d*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*r*u+i*o*l+n*r*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*r,d=c*r-s*l,_=t*f+i*h+n*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(n*c-u*i)*m,e[2]=(o*i-n*s)*m,e[3]=h*m,e[4]=(u*t-n*l)*m,e[5]=(n*r-o*t)*m,e[6]=d*m,e[7]=(i*l-c*t)*m,e[8]=(s*t-i*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new Ye;function Wd(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function _a(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ig(){const a=_a("canvas");return a.style.display="block",a}const Ef={};function To(a){a in Ef||(Ef[a]=!0,console.warn(a))}function Fg(a,e,t){return new Promise(function(i,n){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:n();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Ng(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Og(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bf=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bg(){const a={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===lt&&(n.r=Ri(n.r),n.g=Ri(n.g),n.b=Ri(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===lt&&(n.r=rs(n.r),n.g=rs(n.g),n.b=rs(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?Uo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[nn]:{primaries:e,whitePoint:i,transfer:Uo,toXYZ:bf,fromXYZ:Af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:bf,fromXYZ:Af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),a}const rt=Bg();function Ri(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function rs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Nr;class kg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nr===void 0&&(Nr=_a("canvas")),Nr.width=e.width,Nr.height=e.height;const n=Nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Nr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Ri(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zg=0;class Mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?r.push(dl(n[s].image)):r.push(dl(n[s]))}else r=dl(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function dl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?kg.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gg=0;class Ct extends As{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,i=Wi,n=Wi,r=$t,s=bi,o=In,l=Di,c=Ct.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Kn(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Cd;Ct.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,n=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],m=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,E=(g+1)/2,w=(u+h)/4,T=(f+m)/4,R=(_+p)/4;return x>v&&x>E?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=w/i,r=T/i):v>E?v<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(v),i=w/n,r=R/n):E<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(E),i=T/r,n=R/r),this.set(i,n,r,t),this}let y=Math.sqrt((p-_)*(p-_)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-m)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vg extends As{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ct(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Mu(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends Vg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xd extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=en,this.minFilter=en,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hg extends Ct{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=en,this.minFilter=en,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,o){let l=i[n+0],c=i[n+1],u=i[n+2],f=i[n+3];const h=r[s+0],d=r[s+1],_=r[s+2],m=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==h||c!==d||u!==_){let p=1-o;const g=l*h+c*d+u*_+f*m,y=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,g*y);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E}const v=o*y;if(l=l*p+h*v,c=c*p+d*v,u=u*p+_*v,f=f*p+m*v,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,n,r,s){const o=i[n],l=i[n+1],c=i[n+2],u=i[n+3],f=r[s],h=r[s+1],d=r[s+2],_=r[s+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(n/2),f=o(r/2),h=l(i/2),d=l(n/2),_=l(r/2);switch(s){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(s-n)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(n+s)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(n+s)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(s-n)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+n*c-r*l,this._y=n*u+s*l+r*o-i*c,this._z=r*u+s*c+i*l-n*o,this._w=s*u-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),u=2*(o*t-r*n),f=2*(r*i-s*t);return this.x=t+l*c+s*f-o*u,this.y=i+l*u+o*c-r*f,this.z=n+l*f+r*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new J,wf=new ir;class Qn{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(r,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),ka.subVectors(this.max,Gs),Or.subVectors(e.a,Gs),Br.subVectors(e.b,Gs),kr.subVectors(e.c,Gs),Ni.subVectors(Br,Or),Oi.subVectors(kr,Br),sr.subVectors(Or,kr);let t=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-sr.z,sr.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,sr.z,0,-sr.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-sr.y,sr.x,0];return!ml(t,Or,Br,kr,ka)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,Or,Br,kr,ka))?!1:(za.crossVectors(Ni,Oi),t=[za.x,za.y,za.z],ml(t,Or,Br,kr,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new J,new J,new J,new J,new J,new J,new J,new J],Vn=new J,Ba=new Qn,Or=new J,Br=new J,kr=new J,Ni=new J,Oi=new J,sr=new J,Gs=new J,ka=new J,za=new J,ar=new J;function ml(a,e,t,i,n){for(let r=0,s=a.length-3;r<=s;r+=3){ar.fromArray(a,r);const o=n.x*Math.abs(ar.x)+n.y*Math.abs(ar.y)+n.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=i.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wg=new Qn,Vs=new J,gl=new J;class $n{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wg.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Vs,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(gl)),this.expandByPoint(Vs.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mi=new J,_l=new J,Ga=new J,Bi=new J,vl=new J,Va=new J,xl=new J;class Yo{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){_l.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(_l);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ga),o=Bi.dot(this.direction),l=-Bi.dot(Ga),c=Bi.lengthSq(),u=Math.abs(1-s*s);let f,h,d,_;if(u>0)if(f=s*l-o,h=s*o-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const m=1/u;f*=m,h*=m,d=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(_l).addScaledVector(Ga,h),d}intersectSphere(e,t){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),n=mi.dot(mi)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,n,r){vl.subVectors(t,e),Va.subVectors(i,e),xl.crossVectors(vl,Va);let s=this.direction.dot(xl),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Bi.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(Bi,Va));if(l<0)return null;const c=o*this.direction.dot(vl.cross(Bi));if(c<0||l+c>s)return null;const u=-o*Bi.dot(xl);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,n,r,s,o,l,c,u,f,h,d,_,m,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,s,o,l,c,u,f,h,d,_,m,p)}set(e,t,i,n,r,s,o,l,c,u,f,h,d,_,m,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=s,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=_,g[11]=m,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/zr.setFromMatrixColumn(e,0).length(),r=1/zr.setFromMatrixColumn(e,1).length(),s=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*u,d=s*f,_=o*u,m=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-m*c,t[9]=-o*l,t[2]=m-h*c,t[6]=_+d*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,m=c*f;t[0]=h+m*o,t[4]=_*o-d,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=d*o-_,t[6]=m+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,m=c*f;t[0]=h-m*o,t[4]=-s*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=s*u,t[9]=m-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,d=s*f,_=o*u,m=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+m,t[1]=l*f,t[5]=m*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,d=s*c,_=o*l,m=o*c;t[0]=l*u,t[4]=m-h*f,t[8]=_*f+d,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-m*f}else if(e.order==="XZY"){const h=s*l,d=s*c,_=o*l,m=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+m,t[5]=s*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xg,e,Yg)}lookAt(e,t,i){const n=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),ki.crossVectors(i,Sn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),ki.crossVectors(i,Sn)),ki.normalize(),Ha.crossVectors(Sn,ki),n[0]=ki.x,n[4]=Ha.x,n[8]=Sn.x,n[1]=ki.y,n[5]=Ha.y,n[9]=Sn.y,n[2]=ki.z,n[6]=Ha.z,n[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],m=i[6],p=i[10],g=i[14],y=i[3],x=i[7],v=i[11],E=i[15],w=n[0],T=n[4],R=n[8],S=n[12],M=n[1],P=n[5],D=n[9],L=n[13],F=n[2],G=n[6],B=n[10],q=n[14],H=n[3],Z=n[7],Y=n[11],I=n[15];return r[0]=s*w+o*M+l*F+c*H,r[4]=s*T+o*P+l*G+c*Z,r[8]=s*R+o*D+l*B+c*Y,r[12]=s*S+o*L+l*q+c*I,r[1]=u*w+f*M+h*F+d*H,r[5]=u*T+f*P+h*G+d*Z,r[9]=u*R+f*D+h*B+d*Y,r[13]=u*S+f*L+h*q+d*I,r[2]=_*w+m*M+p*F+g*H,r[6]=_*T+m*P+p*G+g*Z,r[10]=_*R+m*D+p*B+g*Y,r[14]=_*S+m*L+p*q+g*I,r[3]=y*w+x*M+v*F+E*H,r[7]=y*T+x*P+v*G+E*Z,r[11]=y*R+x*D+v*B+E*Y,r[15]=y*S+x*L+v*q+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],m=e[7],p=e[11],g=e[15];return _*(+r*l*f-n*c*f-r*o*h+i*c*h+n*o*d-i*l*d)+m*(+t*l*d-t*c*h+r*s*h-n*s*d+n*c*u-r*l*u)+p*(+t*c*f-t*o*d-r*s*f+i*s*d+r*o*u-i*c*u)+g*(-n*o*u-t*l*f+t*o*h+n*s*f-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],m=e[13],p=e[14],g=e[15],y=f*p*c-m*h*c+m*l*d-o*p*d-f*l*g+o*h*g,x=_*h*c-u*p*c-_*l*d+s*p*d+u*l*g-s*h*g,v=u*m*c-_*f*c+_*o*d-s*m*d-u*o*g+s*f*g,E=_*f*l-u*m*l-_*o*h+s*m*h+u*o*p-s*f*p,w=t*y+i*x+n*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(m*h*r-f*p*r-m*n*d+i*p*d+f*n*g-i*h*g)*T,e[2]=(o*p*r-m*l*r+m*n*c-i*p*c-o*n*g+i*l*g)*T,e[3]=(f*l*r-o*h*r-f*n*c+i*h*c+o*n*d-i*l*d)*T,e[4]=x*T,e[5]=(u*p*r-_*h*r+_*n*d-t*p*d-u*n*g+t*h*g)*T,e[6]=(_*l*r-s*p*r-_*n*c+t*p*c+s*n*g-t*l*g)*T,e[7]=(s*h*r-u*l*r+u*n*c-t*h*c-s*n*d+t*l*d)*T,e[8]=v*T,e[9]=(_*f*r-u*m*r-_*i*d+t*m*d+u*i*g-t*f*g)*T,e[10]=(s*m*r-_*o*r+_*i*c-t*m*c-s*i*g+t*o*g)*T,e[11]=(u*o*r-s*f*r-u*i*c+t*f*c+s*i*d-t*o*d)*T,e[12]=E*T,e[13]=(u*m*n-_*f*n+_*i*h-t*m*h-u*i*p+t*f*p)*T,e[14]=(_*o*n-s*m*n-_*i*l+t*m*l+s*i*p-t*o*p)*T,e[15]=(s*f*n-u*o*n+u*i*l-t*f*l-s*i*h+t*o*h)*T,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,u=r*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+i,u*l-n*s,0,c*l-n*o,u*l+n*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,s){return this.set(1,i,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,u=s+s,f=o+o,h=r*c,d=r*u,_=r*f,m=s*u,p=s*f,g=o*f,y=l*c,x=l*u,v=l*f,E=i.x,w=i.y,T=i.z;return n[0]=(1-(m+g))*E,n[1]=(d+v)*E,n[2]=(_-x)*E,n[3]=0,n[4]=(d-v)*w,n[5]=(1-(h+g))*w,n[6]=(p+y)*w,n[7]=0,n[8]=(_+x)*T,n[9]=(p-y)*T,n[10]=(1-(h+m))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=zr.set(n[0],n[1],n[2]).length();const s=zr.set(n[4],n[5],n[6]).length(),o=zr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Hn.copy(this);const c=1/r,u=1/s,f=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),i.x=r,i.y=s,i.z=o,this}makePerspective(e,t,i,n,r,s,o=Ai){const l=this.elements,c=2*r/(t-e),u=2*r/(i-n),f=(t+e)/(t-e),h=(i+n)/(i-n);let d,_;if(o===Ai)d=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(o===Io)d=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,s,o=Ai){const l=this.elements,c=1/(t-e),u=1/(i-n),f=1/(s-r),h=(t+e)*c,d=(i+n)*u;let _,m;if(o===Ai)_=(s+r)*f,m=-2*f;else if(o===Io)_=r*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new J,Hn=new je,Xg=new J(0,0,0),Yg=new J(1,1,1),ki=new J,Ha=new J,Sn=new J,Rf=new je,Cf=new ir;class fi{constructor(e=0,t=0,i=0,n=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],f=n[2],h=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cf.setFromEuler(this),this.setFromQuaternion(Cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jg=0;const Df=new J,Gr=new ir,gi=new je,Wa=new J,Hs=new J,qg=new J,Kg=new ir,Pf=new J(1,0,0),Lf=new J(0,1,0),Uf=new J(0,0,1),If={type:"added"},Zg={type:"removed"},Vr={type:"childadded",child:null},yl={type:"childremoved",child:null};class vt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new J,t=new fi,i=new ir,n=new J(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new je},normalMatrix:{value:new Ye}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(Lf,e)}rotateZ(e){return this.rotateOnAxis(Uf,e)}translateOnAxis(e,t){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(Lf,e)}translateZ(e){return this.translateOnAxis(Uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Hs,Wa,this.up):gi.lookAt(Wa,Hs,this.up),this.quaternion.setFromRotationMatrix(gi),n&&(gi.extractRotation(n.matrixWorld),Gr.setFromRotationMatrix(gi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(If),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(If),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),d=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=n,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vt.DEFAULT_UP=new J(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new J,_i=new J,Sl=new J,vi=new J,Hr=new J,Wr=new J,Ff=new J,Ml=new J,Tl=new J,El=new J,bl=new st,Al=new st,wl=new st;class Yn{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Wn.subVectors(e,t),n.cross(Wn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Wn.subVectors(n,t),_i.subVectors(i,t),Sl.subVectors(e,t);const s=Wn.dot(Wn),o=Wn.dot(_i),l=Wn.dot(Sl),c=_i.dot(_i),u=_i.dot(Sl),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(s*u-o*l)*h;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,i,n,r,s,o,l){return this.getBarycoord(e,t,i,n,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,s){return bl.setScalar(0),Al.setScalar(0),wl.setScalar(0),bl.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,i),wl.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(bl,r.x),s.addScaledVector(Al,r.y),s.addScaledVector(wl,r.z),s}static isFrontFacing(e,t,i,n){return Wn.subVectors(i,t),_i.subVectors(e,t),Wn.cross(_i).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let s,o;Hr.subVectors(n,i),Wr.subVectors(r,i),Ml.subVectors(e,i);const l=Hr.dot(Ml),c=Wr.dot(Ml);if(l<=0&&c<=0)return t.copy(i);Tl.subVectors(e,n);const u=Hr.dot(Tl),f=Wr.dot(Tl);if(u>=0&&f<=u)return t.copy(n);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(Hr,s);El.subVectors(e,r);const d=Hr.dot(El),_=Wr.dot(El);if(_>=0&&d<=_)return t.copy(r);const m=d*c-l*_;if(m<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Wr,o);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return Ff.subVectors(r,n),o=(f-u)/(f-u+(d-_)),t.copy(n).addScaledVector(Ff,o);const g=1/(p+m+h);return s=m*g,o=h*g,t.copy(i).addScaledVector(Hr,s).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function Rl(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=rt.workingColorSpace){if(e=Su(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Rl(s,r,e+1/3),this.g=Rl(s,r,e),this.b=Rl(s,r,e-1/3)}return rt.toWorkingColorSpace(this,n),this}setStyle(e,t=wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const i=jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return rt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Qe(Wt.r*255,0,255))*65536+Math.round(Qe(Wt.g*255,0,255))*256+Math.round(Qe(Wt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,n=Wt.g,r=Wt.b,s=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=wt){rt.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,n=Wt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Xa);const i=ra(zi.h,Xa.h,t),n=ra(zi.s,Xa.s,t),r=ra(zi.l,Xa.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new We;We.NAMES=jd;let Jg=0;class li extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=is,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=ac,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sc&&(i.blendSrc=this.blendSrc),this.blendDst!==ac&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xi extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new J,Ya=new Ze;let Qg=0;class tn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class qd extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kd extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zn extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $g=0;const Dn=new je,Cl=new vt,Xr=new J,Mn=new Qn,Ws=new Qn,Ft=new J;class Nn extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Kd:qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Zn(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(Mn.min,Ws.min),Mn.expandByPoint(Ft),Ft.addVectors(Mn.max,Ws.max),Mn.expandByPoint(Ft)):(Mn.expandByPoint(Ws.min),Mn.expandByPoint(Ws.max))}Mn.getCenter(i);let n=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Ft));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Xr.fromBufferAttribute(e,c),Ft.add(Xr)),n=Math.max(n,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new J,l[R]=new J;const c=new J,u=new J,f=new J,h=new Ze,d=new Ze,_=new Ze,m=new J,p=new J;function g(R,S,M){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),o[R].add(m),o[S].add(m),o[M].add(m),l[R].add(p),l[S].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,S=y.length;R<S;++R){const M=y[R],P=M.start,D=M.count;for(let L=P,F=P+D;L<F;L+=3)g(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new J,v=new J,E=new J,w=new J;function T(R){E.fromBufferAttribute(n,R),w.copy(E);const S=o[R];x.copy(S),x.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(l[R])<0?-1:1;s.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=y.length;R<S;++R){const M=y[R],P=M.start,D=M.count;for(let L=P,F=P+D;L<F;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const n=new J,r=new J,s=new J,o=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),u.subVectors(s,r),f.subVectors(n,r),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)n.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,r),f.subVectors(n,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*u;for(let g=0;g<u;g++)h[_++]=c[d++]}return new tn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(n[l]=u,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nf=new je,or=new Yo,ja=new $n,Of=new J,qa=new J,Ka=new J,Za=new J,Dl=new J,Ja=new J,Bf=new J,Qa=new J;class Rt extends vt{constructor(e=new Nn,t=new Xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){Ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(Dl.fromBufferAttribute(f,e),s?Ja.addScaledVector(Dl,u):Ja.addScaledVector(Dl.sub(t),u))}t.add(Ja)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(ja.containsPoint(or.origin)===!1&&(or.intersectSphere(ja,Of)===null||or.origin.distanceToSquared(Of)>(e.far-e.near)**2))&&(Nf.copy(r).invert(),or.copy(e.ray).applyMatrix4(Nf),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,m=h.length;_<m;_++){const p=h[_],g=s[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){const w=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);n=$a(this,g,e,i,c,u,f,w,T,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let p=_,g=m;p<g;p+=3){const y=o.getX(p),x=o.getX(p+1),v=o.getX(p+2);n=$a(this,s,e,i,c,u,f,y,x,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,m=h.length;_<m;_++){const p=h[_],g=s[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){const w=v,T=v+1,R=v+2;n=$a(this,g,e,i,c,u,f,w,T,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const _=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let p=_,g=m;p<g;p+=3){const y=p,x=p+1,v=p+2;n=$a(this,s,e,i,c,u,f,y,x,v),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function e_(a,e,t,i,n,r,s,o){let l;if(e.side===dn?l=i.intersectTriangle(s,r,n,!0,o):l=i.intersectTriangle(n,r,s,e.side===Ci,o),l===null)return null;Qa.copy(o),Qa.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:a}}function $a(a,e,t,i,n,r,s,o,l,c){a.getVertexPosition(o,qa),a.getVertexPosition(l,Ka),a.getVertexPosition(c,Za);const u=e_(a,e,t,i,qa,Ka,Za,Bf);if(u){const f=new J;Yn.getBarycoord(Bf,qa,Ka,Za,f),n&&(u.uv=Yn.getInterpolatedAttribute(n,o,l,c,f,new Ze)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,o,l,c,f,new Ze)),s&&(u.normal=Yn.getInterpolatedAttribute(s,o,l,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new J,materialIndex:0};Yn.getNormal(qa,Ka,Za,h.normal),u.face=h,u.barycoord=f}return u}class wa extends Nn{constructor(e=1,t=1,i=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:s};const o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,s,r,0),_("z","y","x",1,-1,i,t,-e,s,r,1),_("x","z","y",1,1,e,i,t,n,s,2),_("x","z","y",1,-1,e,i,-t,n,s,3),_("x","y","z",1,-1,e,t,i,n,r,4),_("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Zn(c,3)),this.setAttribute("normal",new Zn(u,3)),this.setAttribute("uv",new Zn(f,2));function _(m,p,g,y,x,v,E,w,T,R,S){const M=v/T,P=E/R,D=v/2,L=E/2,F=w/2,G=T+1,B=R+1;let q=0,H=0;const Z=new J;for(let Y=0;Y<B;Y++){const I=Y*P-L;for(let W=0;W<G;W++){const ee=W*M-D;Z[m]=ee*y,Z[p]=I*x,Z[g]=F,c.push(Z.x,Z.y,Z.z),Z[m]=0,Z[p]=0,Z[g]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(W/T),f.push(1-Y/R),q+=1}}for(let Y=0;Y<R;Y++)for(let I=0;I<T;I++){const W=h+I+G*Y,ee=h+I+G*(Y+1),N=h+(I+1)+G*(Y+1),k=h+(I+1)+G*Y;l.push(W,ee,k),l.push(ee,N,k),H+=6}o.addGroup(d,H,S),d+=H,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const n=a[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Zt(a){const e={};for(let t=0;t<a.length;t++){const i=ps(a[t]);for(const n in i)e[n]=i[n]}return e}function t_(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Zd(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Tu={clone:ps,merge:Zt};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jd extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new J,kf=new Ze,zf=new Ze;class Jt extends Jd{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,kf,zf),t.subVectors(zf,kf)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yr=-90,jr=1;class r_ extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Jt(Yr,jr,e,t);n.layers=this.layers,this.add(n);const r=new Jt(Yr,jr,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Yr,jr,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Yr,jr,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Yr,jr,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Yr,jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,n),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Qd extends Ct{constructor(e=[],t=fs,i,n,r,s,o,l,c,u){super(e,t,i,n,r,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s_ extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Qd(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new wa(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:wi});r.uniforms.tEquirect.value=t;const s=new Rt(n,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=$t),new r_(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}}class yr extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const a_={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,i),g=this._getHandJoint(c,m);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class o_ extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class l_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new J;class Eu{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gf=new J,Vf=new st,Hf=new st,c_=new J,Wf=new je,eo=new J,Ll=new $n,Xf=new je,Ul=new Yo;class u_ extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_f,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eo),this.boundingBox.expandByPoint(eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,eo),this.boundingSphere.expandByPoint(eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ll.copy(this.boundingSphere),Ll.applyMatrix4(n),e.ray.intersectsSphere(Ll)!==!1&&(Xf.copy(n).invert(),Ul.copy(e.ray).applyMatrix4(Xf),!(this.boundingBox!==null&&Ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ul)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_f?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Vf.fromBufferAttribute(n.attributes.skinIndex,e),Hf.fromBufferAttribute(n.attributes.skinWeight,e),Gf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Hf.getComponent(r);if(s!==0){const o=Vf.getComponent(r);Wf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(c_.copy(Gf).applyMatrix4(Wf),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $d extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ep extends Ct{constructor(e=null,t=1,i=1,n,r,s,o,l,c=en,u=en,f,h){super(null,s,o,l,c,u,n,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new je,f_=new je;class bu{constructor(e=[],t=[]){this.uuid=Kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:f_;Yf.multiplyMatrices(o,t[r]),Yf.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new bu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ep(t,e,e,In,qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new $d),this.bones.push(s),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const s=t[n];e.bones.push(s.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class Fo extends tn{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new je,jf=new je,to=[],qf=new Qn,h_=new je,Xs=new Rt,Ys=new $n;class d_ extends Rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,h_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),qf.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(qf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qr),Ys.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[s+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,qr),jf.multiplyMatrices(i,qr),Xs.matrixWorld=jf,Xs.raycast(e,to);for(let s=0,o=to.length;s<o;s++){const l=to[s];l.instanceId=r,l.object=this,t.push(l)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new ep(new Float32Array(n*this.count),n,this.count,_u,qn));const r=this.morphTexture.source.data.data;let s=0;for(let c=0;c<i.length;c++)s+=i[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Il=new J,p_=new J,m_=new Ye;class mr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Il.subVectors(i,t).cross(p_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Il),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||m_.getNormalMatrix(e),n=this.coplanarPoint(Il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new $n,no=new J;class Au{constructor(e=new mr,t=new mr,i=new mr,n=new mr,r=new mr,s=new mr){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ai){const i=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],f=n[6],h=n[7],d=n[8],_=n[9],m=n[10],p=n[11],g=n[12],y=n[13],x=n[14],v=n[15];if(i[0].setComponents(l-r,h-c,p-d,v-g).normalize(),i[1].setComponents(l+r,h+c,p+d,v+g).normalize(),i[2].setComponents(l+s,h+u,p+_,v+y).normalize(),i[3].setComponents(l-s,h-u,p-_,v-y).normalize(),i[4].setComponents(l-o,h-f,p-m,v-x).normalize(),t===Ai)i[5].setComponents(l+o,h+f,p+m,v+x).normalize();else if(t===Io)i[5].setComponents(o,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(no.x=n.normal.x>0?e.max.x:e.min.x,no.y=n.normal.y>0?e.max.y:e.min.y,no.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(no)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tp extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new J,Oo=new J,Kf=new je,js=new Yo,io=new $n,Fl=new J,Zf=new J;class wu extends vt{constructor(e=new Nn,t=new tp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)No.fromBufferAttribute(t,n-1),Oo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=No.distanceTo(Oo);e.setAttribute("lineDistance",new Zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(n),io.radius+=r,e.ray.intersectsSphere(io)===!1)return;Kf.copy(n).invert(),js.copy(e.ray).applyMatrix4(Kf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let m=d,p=_-1;m<p;m+=c){const g=u.getX(m),y=u.getX(m+1),x=ro(this,e,js,l,g,y,m);x&&t.push(x)}if(this.isLineLoop){const m=u.getX(_-1),p=u.getX(d),g=ro(this,e,js,l,m,p,_-1);g&&t.push(g)}}else{const d=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let m=d,p=_-1;m<p;m+=c){const g=ro(this,e,js,l,m,m+1,m);g&&t.push(g)}if(this.isLineLoop){const m=ro(this,e,js,l,_-1,d,_-1);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ro(a,e,t,i,n,r,s){const o=a.geometry.attributes.position;if(No.fromBufferAttribute(o,n),Oo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Oo,Fl,Zf)>i)return;Fl.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Fl);if(!(c<e.near||c>e.far))return{distance:c,point:Zf.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}const Jf=new J,Qf=new J;class g_ extends wu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Jf.fromBufferAttribute(t,n),Qf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Jf.distanceTo(Qf);e.setAttribute("lineDistance",new Zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class __ extends wu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class np extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $f=new je,Hc=new Yo,so=new $n,ao=new J;class v_ extends vt{constructor(e=new Nn,t=new np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(n),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;$f.copy(n).invert(),Hc.copy(e.ray).applyMatrix4($f);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let _=h,m=d;_<m;_++){const p=c.getX(_);ao.fromBufferAttribute(f,p),eh(ao,p,l,n,e,t,this)}}else{const h=Math.max(0,s.start),d=Math.min(f.count,s.start+s.count);for(let _=h,m=d;_<m;_++)ao.fromBufferAttribute(f,_),eh(ao,_,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eh(a,e,t,i,n,r,s){const o=Hc.distanceSqToPoint(a);if(o<t){const l=new J;Hc.closestPointToPoint(a,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class ip extends Ct{constructor(e,t,i=wr,n,r,s,o=en,l=en,c,u=da){if(u!==da&&u!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,n,r,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cr extends Nn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],m=[],p=[];for(let g=0;g<u;g++){const y=g*h-s;for(let x=0;x<c;x++){const v=x*f-r;_.push(v,-y,0),m.push(0,0,1),p.push(x/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const x=y+c*g,v=y+c*(g+1),E=y+1+c*(g+1),w=y+1+c*g;d.push(x,v,w),d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new Zn(_,3)),this.setAttribute("normal",new Zn(m,3)),this.setAttribute("uv",new Zn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class va extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vd,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class di extends va{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rp extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sp extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oo(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function x_(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function y_(a){function e(n,r){return a[n]-a[r]}const t=a.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function th(a,e,t){const i=a.length,n=new a.constructor(i);for(let r=0,s=0;s!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[s++]=a[o+l]}return n}function ap(a,e,t,i){let n=1,r=a[0];for(;r!==void 0&&r[i]===void 0;)r=a[n++];if(r===void 0)return;let s=r[i];if(s!==void 0)if(Array.isArray(s))do s=r[i],s!==void 0&&(e.push(r.time),t.push(...s)),r=a[n++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[i],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[n++];while(r!==void 0);else do s=r[i],s!==void 0&&(e.push(r.time),t.push(s)),r=a[n++];while(r!==void 0)}class Ra{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let s;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}s=i,i=0;break n}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class S_ extends Ra{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vf,endingEnd:vf}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,o=n[r],l=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case xf:r=e,o=2*t-i;break;case yf:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xf:s=e,l=2*i-t;break;case yf:s=1,l=i+n[1]-n[0];break;default:s=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,_=(i-t)/(n-t),m=_*_,p=m*_,g=-h*p+2*h*m-h*_,y=(1+h)*p+(-1.5-2*h)*m+(-.5+h)*_+1,x=(-1-d)*p+(1.5+d)*m+.5*_,v=d*p-d*m;for(let E=0;E!==o;++E)r[E]=g*s[u+E]+y*s[c+E]+x*s[l+E]+v*s[f+E];return r}}class M_ extends Ra{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(n-t),f=1-u;for(let h=0;h!==o;++h)r[h]=s[c+h]*f+s[l+h]*u;return r}}class T_ extends Ra{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new T_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new M_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new S_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(n!==void 0&&x_(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===fl,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{const f=o*i,h=f-i,d=f+i;for(let _=0;_!==i;++_){const m=t[f+_];if(m!==t[h+_]||m!==t[d+_]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const f=o*i,h=s*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++s}}if(r>0){e[s]=e[r];for(let o=r*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}ei.prototype.ValueTypeName="";ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=ga;class ws extends ei{constructor(e,t,i){super(e,t,i)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ma;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class op extends ei{constructor(e,t,i,n){super(e,t,i,n)}}op.prototype.ValueTypeName="color";class ms extends ei{constructor(e,t,i,n){super(e,t,i,n)}}ms.prototype.ValueTypeName="number";class E_ extends Ra{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ir.slerpFlat(r,0,s,c-o,s,c,l);return r}}class gs extends ei{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new E_(this.times,this.values,this.getValueSize(),e)}}gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends ei{constructor(e,t,i){super(e,t,i)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ma;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends ei{constructor(e,t,i,n){super(e,t,i,n)}}_s.prototype.ValueTypeName="vector";class b_{constructor(e="",t=-1,i=[],n=ag){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(w_(i[s]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=i.length;r!==s;++r)t.push(ei.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=y_(l);l=th(l,1,u),c=th(c,1,u),!n&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new ms(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=n[f];h||(n[f]=h=[]),h.push(c)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,_,m){if(d.length!==0){const p=[],g=[];ap(d,p,g,_),p.length!==0&&m.push(new f(h,p,g))}},n=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let m=0;m<h[_].morphTargets.length;m++)d[h[_].morphTargets[m]]=-1;for(const m in d){const p=[],g=[];for(let y=0;y!==h[_].morphTargets.length;++y){const x=h[_];p.push(x.time),g.push(x.morphTarget===m?1:0)}n.push(new ms(".morphTargetInfluence["+m+"]",p,g))}l=d.length*s}else{const d=".bones["+t[f].name+"]";i(_s,d+".position",h,"pos",n),i(gs,d+".quaternion",h,"rot",n),i(_s,d+".scale",h,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function A_(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return op;case"quaternion":return gs;case"bool":case"boolean":return ws;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function w_(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=A_(a.type);if(a.times===void 0){const t=[],i=[];ap(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Yi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class lp{constructor(e,t,i){const n=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&n.onStart!==void 0&&n.onStart(u,s,o),r=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const R_=new lp;class Cs{constructor(e){this.manager=e!==void 0?e:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class C_ extends Error{constructor(e,t){super(e),this.response=t}}class cp extends Cs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:i,onError:n});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=xi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,_=d!==0;let m=0;const p=new ReadableStream({start(g){y();function y(){f.read().then(({done:x,value:v})=>{if(x)g.close();else{m+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:d});for(let w=0,T=u.length;w<T;w++){const R=u[w];R.onProgress&&R.onProgress(E)}g.enqueue(v),y()}},x=>{g.error(x)})}}});return new Response(p)}else throw new C_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Yi.add(e,c);const u=xi[e];delete xi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=xi[e];if(u===void 0)throw this.manager.itemError(e),c;delete xi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class D_ extends Cs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Yi.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=_a("img");function l(){u(),Yi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),n&&n(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Ru extends Cs{constructor(e){super(e)}load(e,t,i,n){const r=new Ct,s=new D_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class jo extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Nl=new je,nh=new J,ih=new J;class Cu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Au,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class P_ extends Cu{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ds*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class L_ extends jo{constructor(e,t,i=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new P_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rh=new je,qs=new J,Ol=new J;class U_ extends Cu{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),i.position.copy(qs),Ol.copy(i.position),Ol.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ol),i.updateMatrixWorld(),n.makeTranslation(-qs.x,-qs.y,-qs.z),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh)}}class I_ extends jo{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new U_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ca extends Jd{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class F_ extends Cu{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Da extends jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new F_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class N_ extends jo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class O_ extends Nn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class B_ extends Cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Yi.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Yi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Yi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Yi.add(e,l),r.manager.itemStart(e)}}class k_ extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class z_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sh(){return performance.now()}const Du="\\[\\]\\.:\\/",G_=new RegExp("["+Du+"]","g"),Pu="[^"+Du+"]",V_="[^"+Du.replace("\\.","")+"]",H_=/((?:WC+[\/:])*)/.source.replace("WC",Pu),W_=/(WCOD+)?/.source.replace("WCOD",V_),X_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),j_=new RegExp("^"+H_+W_+X_+Y_+"$"),q_=["material","materials","bones","map"];class K_{constructor(e,t,i){const n=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G_,"")}static parseTrackName(e){const t=j_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);q_.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[n];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=K_;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ah(a,e,t,i){const n=Z_(i);switch(t){case Id:return a*e;case Nd:return a*e;case Od:return a*e*2;case _u:return a*e/n.components*n.byteLength;case vu:return a*e/n.components*n.byteLength;case Bd:return a*e*2/n.components*n.byteLength;case xu:return a*e*2/n.components*n.byteLength;case Fd:return a*e*3/n.components*n.byteLength;case In:return a*e*4/n.components*n.byteLength;case yu:return a*e*4/n.components*n.byteLength;case vo:case xo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case yo:case So:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case gc:case vc:return Math.max(a,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(a,8)*Math.max(e,8)/2;case xc:case yc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Mo:case Nc:case Oc:return Math.ceil(a/4)*Math.ceil(e/4)*16;case kd:case Bc:return Math.ceil(a/4)*Math.ceil(e/4)*8;case kc:case zc:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z_(a){switch(a){case Di:case Pd:return{byteLength:1,components:1};case fa:case Ld:case bs:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case wr:case pu:case qn:return{byteLength:4,components:1};case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function up(){let a=null,e=!1,t=null,i=null;function n(r,s){t(r,s),i=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function J_(a){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=a.createBuffer();a.bindBuffer(l,h),a.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=a.HALF_FLOAT:d=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=a.SHORT;else if(c instanceof Uint32Array)d=a.UNSIGNED_INT;else if(c instanceof Int32Array)d=a.INT;else if(c instanceof Int8Array)d=a.BYTE;else if(c instanceof Uint8Array)d=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(a.bindBuffer(c,o),f.length===0)a.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],m=f[d];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++h,f[h]=m)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const m=f[d];a.bufferSubData(c,m.start*u.BYTES_PER_ELEMENT,u,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:s}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
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
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,s0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
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
#endif`,o0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,c0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,M0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R0="gl_FragColor = linearToOutputTexel( gl_FragColor );",C0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H0=`uniform bool receiveShadow;
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
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,Z0=`struct PhysicalMaterial {
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
}`,J0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ov=`#if defined( USE_POINTS_UV )
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
#endif`,lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dv=`#ifdef USE_MORPHTARGETS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
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
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nv=`float getShadowMask() {
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
}`,Ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zv=`#ifdef USE_SKINNING
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
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,sx=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,hx=`uniform vec3 diffuse;
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
}`,dx=`#define LAMBERT
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
}`,px=`#define LAMBERT
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,vx=`#define NORMAL
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
}`,xx=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,Tx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,bx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Rx=`uniform vec3 color;
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
}`,Cx=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Q_,alphahash_pars_fragment:$_,alphamap_fragment:e0,alphamap_pars_fragment:t0,alphatest_fragment:n0,alphatest_pars_fragment:i0,aomap_fragment:r0,aomap_pars_fragment:s0,batching_pars_vertex:a0,batching_vertex:o0,begin_vertex:l0,beginnormal_vertex:c0,bsdfs:u0,iridescence_fragment:f0,bumpmap_pars_fragment:h0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:m0,clipping_planes_vertex:g0,color_fragment:_0,color_pars_fragment:v0,color_pars_vertex:x0,color_vertex:y0,common:S0,cube_uv_reflection_fragment:M0,defaultnormal_vertex:T0,displacementmap_pars_vertex:E0,displacementmap_vertex:b0,emissivemap_fragment:A0,emissivemap_pars_fragment:w0,colorspace_fragment:R0,colorspace_pars_fragment:C0,envmap_fragment:D0,envmap_common_pars_fragment:P0,envmap_pars_fragment:L0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:W0,envmap_vertex:I0,fog_vertex:F0,fog_pars_vertex:N0,fog_fragment:O0,fog_pars_fragment:B0,gradientmap_pars_fragment:k0,lightmap_pars_fragment:z0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:V0,lights_pars_begin:H0,lights_toon_fragment:X0,lights_toon_pars_fragment:Y0,lights_phong_fragment:j0,lights_phong_pars_fragment:q0,lights_physical_fragment:K0,lights_physical_pars_fragment:Z0,lights_fragment_begin:J0,lights_fragment_maps:Q0,lights_fragment_end:$0,logdepthbuf_fragment:ev,logdepthbuf_pars_fragment:tv,logdepthbuf_pars_vertex:nv,logdepthbuf_vertex:iv,map_fragment:rv,map_pars_fragment:sv,map_particle_fragment:av,map_particle_pars_fragment:ov,metalnessmap_fragment:lv,metalnessmap_pars_fragment:cv,morphinstance_vertex:uv,morphcolor_vertex:fv,morphnormal_vertex:hv,morphtarget_pars_vertex:dv,morphtarget_vertex:pv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:_v,normal_pars_vertex:vv,normal_vertex:xv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:Mv,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:Ev,opaque_fragment:bv,packing:Av,premultiplied_alpha_fragment:wv,project_vertex:Rv,dithering_fragment:Cv,dithering_pars_fragment:Dv,roughnessmap_fragment:Pv,roughnessmap_pars_fragment:Lv,shadowmap_pars_fragment:Uv,shadowmap_pars_vertex:Iv,shadowmap_vertex:Fv,shadowmask_pars_fragment:Nv,skinbase_vertex:Ov,skinning_pars_vertex:Bv,skinning_vertex:kv,skinnormal_vertex:zv,specularmap_fragment:Gv,specularmap_pars_fragment:Vv,tonemapping_fragment:Hv,tonemapping_pars_fragment:Wv,transmission_fragment:Xv,transmission_pars_fragment:Yv,uv_pars_fragment:jv,uv_pars_vertex:qv,uv_vertex:Kv,worldpos_vertex:Zv,background_vert:Jv,background_frag:Qv,backgroundCube_vert:$v,backgroundCube_frag:ex,cube_vert:tx,cube_frag:nx,depth_vert:ix,depth_frag:rx,distanceRGBA_vert:sx,distanceRGBA_frag:ax,equirect_vert:ox,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:ux,meshbasic_vert:fx,meshbasic_frag:hx,meshlambert_vert:dx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:_x,meshnormal_frag:vx,meshphong_vert:xx,meshphong_frag:yx,meshphysical_vert:Sx,meshphysical_frag:Mx,meshtoon_vert:Tx,meshtoon_frag:Ex,points_vert:bx,points_frag:Ax,shadow_vert:wx,shadow_frag:Rx,sprite_vert:Cx,sprite_frag:Dx},Ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},si={basic:{uniforms:Zt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Zt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Zt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Zt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Zt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Zt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Zt([Ce.points,Ce.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Zt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Zt([Ce.common,Ce.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Zt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Zt([Ce.sprite,Ce.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Zt([Ce.common,Ce.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Zt([Ce.lights,Ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};si.physical={uniforms:Zt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const lo={r:0,b:0,g:0},cr=new fi,Px=new je;function Lx(a,e,t,i,n,r,s){const o=new We(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function m(x){let v=!1;const E=_(x);E===null?g(o,l):E&&E.isColor&&(g(E,1),v=!0);const w=a.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(a.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function p(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Xo)?(u===void 0&&(u=new Rt(new wa(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ps(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),cr.copy(v.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Px.makeRotationFromEuler(cr)),u.material.toneMapped=rt.getTransfer(E.colorSpace)!==lt,(f!==E||h!==E.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=a.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Rt(new Cr(2,2),new Jn({name:"BackgroundMaterial",uniforms:ps(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=a.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(lo,Zd(a)),i.buffers.color.setClear(lo.r,lo.g,lo.b,v,s)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:m,addToRenderList:p,dispose:y}}function Ux(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},n=h(null);let r=n,s=!1;function o(M,P,D,L,F){let G=!1;const B=f(L,D,P);r!==B&&(r=B,c(r.object)),G=d(M,L,D,F),G&&_(M,L,D,F),F!==null&&e.update(F,a.ELEMENT_ARRAY_BUFFER),(G||s)&&(s=!1,v(M,P,D,L),F!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return a.createVertexArray()}function c(M){return a.bindVertexArray(M)}function u(M){return a.deleteVertexArray(M)}function f(M,P,D){const L=D.wireframe===!0;let F=i[M.id];F===void 0&&(F={},i[M.id]=F);let G=F[P.id];G===void 0&&(G={},F[P.id]=G);let B=G[L];return B===void 0&&(B=h(l()),G[L]=B),B}function h(M){const P=[],D=[],L=[];for(let F=0;F<t;F++)P[F]=0,D[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,P,D,L){const F=r.attributes,G=P.attributes;let B=0;const q=D.getAttributes();for(const H in q)if(q[H].location>=0){const Y=F[H];let I=G[H];if(I===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(I=M.instanceColor)),Y===void 0||Y.attribute!==I||I&&Y.data!==I.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function _(M,P,D,L){const F={},G=P.attributes;let B=0;const q=D.getAttributes();for(const H in q)if(q[H].location>=0){let Y=G[H];Y===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const I={};I.attribute=Y,Y&&Y.data&&(I.data=Y.data),F[H]=I,B++}r.attributes=F,r.attributesNum=B,r.index=L}function m(){const M=r.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function p(M){g(M,0)}function g(M,P){const D=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;D[M]=1,L[M]===0&&(a.enableVertexAttribArray(M),L[M]=1),F[M]!==P&&(a.vertexAttribDivisor(M,P),F[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let D=0,L=P.length;D<L;D++)P[D]!==M[D]&&(a.disableVertexAttribArray(D),P[D]=0)}function x(M,P,D,L,F,G,B){B===!0?a.vertexAttribIPointer(M,P,D,F,G):a.vertexAttribPointer(M,P,D,L,F,G)}function v(M,P,D,L){m();const F=L.attributes,G=D.getAttributes(),B=P.defaultAttributeValues;for(const q in G){const H=G[q];if(H.location>=0){let Z=F[q];if(Z===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const Y=Z.normalized,I=Z.itemSize,W=e.get(Z);if(W===void 0)continue;const ee=W.buffer,N=W.type,k=W.bytesPerElement,ne=N===a.INT||N===a.UNSIGNED_INT||Z.gpuType===pu;if(Z.isInterleavedBufferAttribute){const X=Z.data,ie=X.stride,xe=Z.offset;if(X.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)g(H.location+_e,X.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let _e=0;_e<H.locationSize;_e++)x(H.location+_e,I/H.locationSize,N,Y,ie*k,(xe+I/H.locationSize*_e)*k,ne)}else{if(Z.isInstancedBufferAttribute){for(let X=0;X<H.locationSize;X++)g(H.location+X,Z.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let X=0;X<H.locationSize;X++)p(H.location+X);a.bindBuffer(a.ARRAY_BUFFER,ee);for(let X=0;X<H.locationSize;X++)x(H.location+X,I/H.locationSize,N,Y,I*k,I/H.locationSize*X*k,ne)}}else if(B!==void 0){const Y=B[q];if(Y!==void 0)switch(Y.length){case 2:a.vertexAttrib2fv(H.location,Y);break;case 3:a.vertexAttrib3fv(H.location,Y);break;case 4:a.vertexAttrib4fv(H.location,Y);break;default:a.vertexAttrib1fv(H.location,Y)}}}}y()}function E(){R();for(const M in i){const P=i[M];for(const D in P){const L=P[D];for(const F in L)u(L[F].object),delete L[F];delete P[D]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const P=i[M.id];for(const D in P){const L=P[D];for(const F in L)u(L[F].object),delete L[F];delete P[D]}delete i[M.id]}function T(M){for(const P in i){const D=i[P];if(D[M.id]===void 0)continue;const L=D[M.id];for(const F in L)u(L[F].object),delete L[F];delete D[M.id]}}function R(){S(),s=!0,r!==n&&(r=n,c(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:p,disableUnusedAttributes:y}}function Ix(a,e,t){let i;function n(c){i=c}function r(c,u){a.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,f){f!==0&&(a.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)s(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m]*h[m];t.update(_,i,1)}}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fx(a,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==In&&i.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Di&&i.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qn&&!R)}function l(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),p=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),y=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),x=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function Nx(a){const e=this;let t=null,i=0,n=!1,r=!1;const s=new mr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||n;return n=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,g=a.get(f);if(!n||_===null||_.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,x=y*4;let v=g.clippingState||null;l.value=v,v=u(_,h,x,d);for(let E=0;E!==x;++E)v[E]=t[E];g.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=l.value,_!==!0||p===null){const g=d+m*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,v=d;x!==m;++x,v+=4)s.copy(f[x]).applyMatrix4(y,o),s.normal.toArray(p,v),p[v+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Ox(a){let e=new WeakMap;function t(s,o){return o===Po?s.mapping=fs:o===pc&&(s.mapping=hs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Po||o===pc)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new s_(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const es=4,oh=[.125,.215,.35,.446,.526,.582],xr=20,Bl=new Ca,lh=new We;let kl=null,zl=0,Gl=0,Vl=!1;const gr=(1+Math.sqrt(5))/2,Kr=1/gr,ch=[new J(-gr,Kr,0),new J(gr,Kr,0),new J(-Kr,0,gr),new J(Kr,0,gr),new J(0,gr,-Kr),new J(0,gr,Kr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],Bx=new J;class uh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:o=Bx}=r;kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,zl,Gl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:bs,format:In,colorSpace:nn,depthBuffer:!1},n=fh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kx(r)),this._blurMaterial=zx(r,e,t)}return n}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Bl)}_sceneToCubeUV(e,t,i,n,r){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(lh),f.toneMapping=Zi,f.autoClear=!1;const _=new Xi({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new Rt(new wa,_);let p=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,p=!0):(_.color.copy(lh),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const v=this._cubeSize;co(n,x*v,y>2?v:0,v,v),f.setRenderTarget(n),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===fs||e.mapping===hs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hh());const r=n?this._cubemapMaterial:this._equirectMaterial,s=new Rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Bl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ch[(n-r-1)%ch.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,n,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",r),this._halfBlur(s,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Rt(this._lodPlanes[n],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xr-1),m=r/_,p=isFinite(r)?1+Math.floor(u*m):xr;p>xr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const g=[];let y=0;for(let T=0;T<xr;++T){const R=T/m,S=Math.exp(-R*R/2);g.push(S),T===0?y+=S:T<p&&(y+=2*S)}for(let T=0;T<g.length;T++)g[T]=g[T]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const v=this._sizeLods[n],E=3*v*(n>x-es?n-x+es:0),w=4*(this._cubeSize-v);co(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(f,Bl)}}function kx(a){const e=[],t=[],i=[];let n=a;const r=a-es+1+oh.length;for(let s=0;s<r;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>a-es?l=oh[s-a+es-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,m=3,p=2,g=1,y=new Float32Array(m*_*d),x=new Float32Array(p*_*d),v=new Float32Array(g*_*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];y.set(S,m*_*w),x.set(h,p*_*w);const M=[w,w,w,w,w,w];v.set(M,g*_*w)}const E=new Nn;E.setAttribute("position",new tn(y,m)),E.setAttribute("uv",new tn(x,p)),E.setAttribute("faceIndex",new tn(v,g)),e.push(E),n>es&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function fh(a,e,t){const i=new er(a,e,t);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(a,e,t,i,n){a.viewport.set(e,t,i,n),a.scissor.set(e,t,i,n)}function zx(a,e,t){const i=new Float32Array(xr),n=new J(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function hh(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function dh(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function Gx(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Po||l===pc,u=l===fs||l===hs;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new uh(a)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&n(d)?(t===null&&(t=new uh(a)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Vx(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&To("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Hx(a,e,t,i){const n={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete n[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],a.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],w=y[x+1],T=y[x+2];h.push(E,w,w,T,T,E)}}else if(_!==void 0){const y=_.array;m=_.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,w=x+1,T=x+2;h.push(E,w,w,T,T,E)}}else return;const p=new(Wd(h)?Kd:qd)(h,1);p.version=m;const g=r.get(f);g&&e.remove(g),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Wx(a,e,t){let i;function n(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,d){a.drawElements(i,d,r,h*s),t.update(d,i,1)}function c(h,d,_){_!==0&&(a.drawElementsInstanced(i,d,r,h*s,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,_);let p=0;for(let g=0;g<_;g++)p+=d[g];t.update(p,i,1)}function f(h,d,_,m){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/s,d[g],m[g]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,m,0,_);let g=0;for(let y=0;y<_;y++)g+=d[y]*m[y];t.update(g,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Xx(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Yx(a,e,t){const i=new WeakMap,n=new st;function r(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var d=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),m===!0&&(v=2),p===!0&&(v=3);let E=o.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*w*4*f),R=new Xd(T,E,w,f);R.type=qn,R.needsUpdate=!0;const S=v*4;for(let P=0;P<f;P++){const D=g[P],L=y[P],F=x[P],G=E*w*4*P;for(let B=0;B<D.count;B++){const q=B*S;_===!0&&(n.fromBufferAttribute(D,B),T[G+q+0]=n.x,T[G+q+1]=n.y,T[G+q+2]=n.z,T[G+q+3]=0),m===!0&&(n.fromBufferAttribute(L,B),T[G+q+4]=n.x,T[G+q+5]=n.y,T[G+q+6]=n.z,T[G+q+7]=0),p===!0&&(n.fromBufferAttribute(F,B),T[G+q+8]=n.x,T[G+q+9]=n.y,T[G+q+10]=n.z,T[G+q+11]=F.itemSize===4?n.w:1)}}h={count:f,texture:R,size:new Ze(E,w)},i.set(o,h),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const m=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(a,"morphTargetBaseInfluence",m),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",h.size)}return{update:r}}function jx(a,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}const fp=new Ct,ph=new ip(1,1),hp=new Xd,dp=new Hg,pp=new Qd,mh=[],gh=[],_h=new Float32Array(16),vh=new Float32Array(9),xh=new Float32Array(4);function Ds(a,e,t){const i=a[0];if(i<=0||i>0)return a;const n=e*t;let r=mh[n];if(r===void 0&&(r=new Float32Array(n),mh[n]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Dt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Pt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function qo(a,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function qx(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Kx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;a.uniform2fv(this.addr,e),Pt(t,e)}}function Zx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;a.uniform3fv(this.addr,e),Pt(t,e)}}function Jx(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;a.uniform4fv(this.addr,e),Pt(t,e)}}function Qx(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,i))return;xh.set(i),a.uniformMatrix2fv(this.addr,!1,xh),Pt(t,i)}}function $x(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,i))return;vh.set(i),a.uniformMatrix3fv(this.addr,!1,vh),Pt(t,i)}}function ey(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,i))return;_h.set(i),a.uniformMatrix4fv(this.addr,!1,_h),Pt(t,i)}}function ty(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ny(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;a.uniform2iv(this.addr,e),Pt(t,e)}}function iy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;a.uniform3iv(this.addr,e),Pt(t,e)}}function ry(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;a.uniform4iv(this.addr,e),Pt(t,e)}}function sy(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function ay(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;a.uniform2uiv(this.addr,e),Pt(t,e)}}function oy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;a.uniform3uiv(this.addr,e),Pt(t,e)}}function ly(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;a.uniform4uiv(this.addr,e),Pt(t,e)}}function cy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n);let r;this.type===a.SAMPLER_2D_SHADOW?(ph.compareFunction=Hd,r=ph):r=fp,t.setTexture2D(e||r,n)}function uy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||dp,n)}function fy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||pp,n)}function hy(a,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(a.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||hp,n)}function dy(a){switch(a){case 5126:return qx;case 35664:return Kx;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return $x;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return ry;case 5125:return sy;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return hy}}function py(a,e){a.uniform1fv(this.addr,e)}function my(a,e){const t=Ds(e,this.size,2);a.uniform2fv(this.addr,t)}function gy(a,e){const t=Ds(e,this.size,3);a.uniform3fv(this.addr,t)}function _y(a,e){const t=Ds(e,this.size,4);a.uniform4fv(this.addr,t)}function vy(a,e){const t=Ds(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function xy(a,e){const t=Ds(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function yy(a,e){const t=Ds(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Sy(a,e){a.uniform1iv(this.addr,e)}function My(a,e){a.uniform2iv(this.addr,e)}function Ty(a,e){a.uniform3iv(this.addr,e)}function Ey(a,e){a.uniform4iv(this.addr,e)}function by(a,e){a.uniform1uiv(this.addr,e)}function Ay(a,e){a.uniform2uiv(this.addr,e)}function wy(a,e){a.uniform3uiv(this.addr,e)}function Ry(a,e){a.uniform4uiv(this.addr,e)}function Cy(a,e,t){const i=this.cache,n=e.length,r=qo(t,n);Dt(i,r)||(a.uniform1iv(this.addr,r),Pt(i,r));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||fp,r[s])}function Dy(a,e,t){const i=this.cache,n=e.length,r=qo(t,n);Dt(i,r)||(a.uniform1iv(this.addr,r),Pt(i,r));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||dp,r[s])}function Py(a,e,t){const i=this.cache,n=e.length,r=qo(t,n);Dt(i,r)||(a.uniform1iv(this.addr,r),Pt(i,r));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||pp,r[s])}function Ly(a,e,t){const i=this.cache,n=e.length,r=qo(t,n);Dt(i,r)||(a.uniform1iv(this.addr,r),Pt(i,r));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||hp,r[s])}function Uy(a){switch(a){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return Ty;case 35669:case 35673:return Ey;case 5125:return by;case 36294:return Ay;case 36295:return wy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}class Iy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dy(t.type)}}class Fy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uy(t.type)}}class Ny{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function yh(a,e){a.seq.push(e),a.map[e.id]=e}function Oy(a,e,t){const i=a.name,n=i.length;for(Hl.lastIndex=0;;){const r=Hl.exec(i),s=Hl.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){yh(t,c===void 0?new Iy(o,a,e):new Fy(o,a,e));break}else{let f=t.map[o];f===void 0&&(f=new Ny(o),yh(t,f)),t=f}}}class Eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),s=e.getUniformLocation(t,r.name);Oy(r,s,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Sh(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const By=37297;let ky=0;function zy(a,e){const t=a.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=n;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Mh=new Ye;function Gy(a){rt._getMatrix(Mh,rt.workingColorSpace,a);const e=`mat3( ${Mh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(a)){case Uo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Th(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),n=a.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+zy(a.getShaderSource(e),s)}else return n}function Vy(a,e){const t=Gy(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hy(a,e){let t;switch(e){case du:t="Linear";break;case bd:t="Reinhard";break;case Ad:t="Cineon";break;case wd:t="ACESFilmic";break;case rg:t="AgX";break;case Rd:t="Neutral";break;case ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new J;function Wy(){rt.getLuminanceCoefficients(uo);const a=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Yy(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jy(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=a.getActiveAttrib(e,n),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function $s(a){return a!==""}function Eh(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(a){return a.replace(qy,Zy)}const Ky=new Map;function Zy(a,e){let t=Ke[e];if(t===void 0){const i=Ky.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(a){return a.replace(Jy,Qy)}function Qy(a,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function wh(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function $y(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function eS(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case fs:case hs:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tS(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function nS(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ed:e="ENVMAP_BLENDING_MULTIPLY";break;case tg:e="ENVMAP_BLENDING_MIX";break;case ng:e="ENVMAP_BLENDING_ADD";break}return e}function iS(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rS(a,e,t,i){const n=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=$y(t),c=eS(t),u=tS(t),f=nS(t),h=iS(t),d=Xy(t),_=Yy(r),m=n.createProgram();let p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($s).join(`
`),g.length>0&&(g+=`
`)):(p=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),g=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Zi?Hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Vy("linearToOutputTexel",t.outputColorSpace),Wy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),s=Wc(s),s=Eh(s,t),s=bh(s,t),o=Wc(o),o=Eh(o,t),o=bh(o,t),s=Ah(s),o=Ah(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+p+s,v=y+g+o,E=Sh(n,n.VERTEX_SHADER,x),w=Sh(n,n.FRAGMENT_SHADER,v);n.attachShader(m,E),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function T(P){if(a.debug.checkShaderErrors){const D=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(E).trim(),F=n.getShaderInfoLog(w).trim();let G=!0,B=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(n,m,E,w);else{const q=Th(n,E,"vertex"),H=Th(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+q+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||F==="")&&(B=!1);B&&(P.diagnostics={runnable:G,programLog:D,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:g}})}n.deleteShader(E),n.deleteShader(w),R=new Eo(n,m),S=jy(n,m)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(m,By)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ky++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=w,this}let sS=0;class aS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oS(e),t.set(e,i)),i}}class oS{constructor(e){this.id=sS++,this.code=e,this.usedTimes=0}}function lS(a,e,t,i,n,r,s){const o=new Yd,l=new aS,c=new Set,u=[],f=n.logarithmicDepthBuffer,h=n.vertexTextures;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,P,D,L){const F=D.fog,G=L.geometry,B=S.isMeshStandardMaterial?D.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),H=q&&q.mapping===Xo?q.image.height:null,Z=_[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,I=Y!==void 0?Y.length:0;let W=0;G.morphAttributes.position!==void 0&&(W=1),G.morphAttributes.normal!==void 0&&(W=2),G.morphAttributes.color!==void 0&&(W=3);let ee,N,k,ne;if(Z){const Ge=si[Z];ee=Ge.vertexShader,N=Ge.fragmentShader}else ee=S.vertexShader,N=S.fragmentShader,l.update(S),k=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const X=a.getRenderTarget(),ie=a.state.buffers.depth.getReversed(),xe=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,ve=!!S.map,fe=!!S.matcap,De=!!q,U=!!S.aoMap,Oe=!!S.lightMap,Ae=!!S.bumpMap,Re=!!S.normalMap,ae=!!S.displacementMap,be=!!S.emissiveMap,de=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,O=S.clearcoat>0,Q=S.dispersion>0,$=S.iridescence>0,se=S.sheen>0,he=S.transmission>0,le=b&&!!S.anisotropyMap,me=O&&!!S.clearcoatMap,Le=O&&!!S.clearcoatNormalMap,ce=O&&!!S.clearcoatRoughnessMap,Se=$&&!!S.iridescenceMap,Te=$&&!!S.iridescenceThicknessMap,Ee=se&&!!S.sheenColorMap,oe=se&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,Fe=!!S.specularColorMap,qe=!!S.specularIntensityMap,z=he&&!!S.transmissionMap,ue=he&&!!S.thicknessMap,te=!!S.gradientMap,pe=!!S.alphaMap,ye=S.alphaTest>0,ge=!!S.alphaHash,Ne=!!S.extensions;let Xe=Zi;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=a.toneMapping);const Be={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:N,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:xe,instancingColor:xe&&L.instanceColor!==null,instancingMorph:xe&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:X===null?a.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:nn,alphaToCoverage:!!S.alphaToCoverage,map:ve,matcap:fe,envMap:De,envMapMode:De&&q.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Oe,bumpMap:Ae,normalMap:Re,displacementMap:h&&ae,emissiveMap:be,normalMapObjectSpace:Re&&S.normalMapType===cg,normalMapTangentSpace:Re&&S.normalMapType===Vd,metalnessMap:de,roughnessMap:A,anisotropy:b,anisotropyMap:le,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:Le,clearcoatRoughnessMap:ce,dispersion:Q,iridescence:$,iridescenceMap:Se,iridescenceThicknessMap:Te,sheen:se,sheenColorMap:Ee,sheenRoughnessMap:oe,specularMap:Ue,specularColorMap:Fe,specularIntensityMap:qe,transmission:he,transmissionMap:z,thicknessMap:ue,gradientMap:te,opaque:S.transparent===!1&&S.blending===is&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:ye,alphaHash:ge,combine:S.combine,mapUv:ve&&m(S.map.channel),aoMapUv:U&&m(S.aoMap.channel),lightMapUv:Oe&&m(S.lightMap.channel),bumpMapUv:Ae&&m(S.bumpMap.channel),normalMapUv:Re&&m(S.normalMap.channel),displacementMapUv:ae&&m(S.displacementMap.channel),emissiveMapUv:be&&m(S.emissiveMap.channel),metalnessMapUv:de&&m(S.metalnessMap.channel),roughnessMapUv:A&&m(S.roughnessMap.channel),anisotropyMapUv:le&&m(S.anisotropyMap.channel),clearcoatMapUv:me&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:oe&&m(S.sheenRoughnessMap.channel),specularMapUv:Ue&&m(S.specularMap.channel),specularColorMapUv:Fe&&m(S.specularColorMap.channel),specularIntensityMapUv:qe&&m(S.specularIntensityMap.channel),transmissionMapUv:z&&m(S.transmissionMap.channel),thicknessMapUv:ue&&m(S.thicknessMap.channel),alphaMapUv:pe&&m(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Re||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(ve||pe),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ie,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&rt.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function g(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(a.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=_[S.type];let P;if(M){const D=si[M];P=Tu.clone(D.uniforms)}else P=S.uniforms;return P}function E(S,M){let P;for(let D=0,L=u.length;D<L;D++){const F=u[D];if(F.cacheKey===M){P=F,++P.usedTimes;break}}return P===void 0&&(P=new rS(a,M,S,r),u.push(P)),P}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function cS(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function i(s){a.delete(s)}function n(s,o,l){a.get(s)[o]=l}function r(){a=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function uS(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Rh(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ch(){const a=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function s(f,h,d,_,m,p){let g=a[e];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},a[e]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=m,g.group=p),e++,g}function o(f,h,d,_,m,p){const g=s(f,h,d,_,m,p);d.transmission>0?i.push(g):d.transparent===!0?n.push(g):t.push(g)}function l(f,h,d,_,m,p){const g=s(f,h,d,_,m,p);d.transmission>0?i.unshift(g):d.transparent===!0?n.unshift(g):t.unshift(g)}function c(f,h){t.length>1&&t.sort(f||uS),i.length>1&&i.sort(h||Rh),n.length>1&&n.sort(h||Rh)}function u(){for(let f=e,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:u,sort:c}}function fS(){let a=new WeakMap;function e(i,n){const r=a.get(i);let s;return r===void 0?(s=new Ch,a.set(i,[s])):n>=r.length?(s=new Ch,r.push(s)):s=r[n],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function hS(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new We};break;case"SpotLight":t={position:new J,direction:new J,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=t,t}}}function dS(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let pS=0;function mS(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function gS(a){const e=new hS,t=dS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const n=new J,r=new je,s=new je;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,_=0,m=0,p=0,g=0,y=0,x=0,v=0,E=0,w=0,T=0;c.sort(mS);for(let S=0,M=c.length;S<M;S++){const P=c[S],D=P.color,L=P.intensity,F=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*L,f+=D.g*L,h+=D.b*L;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],L);T++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=P.shadow.matrix,y++}i.directional[d]=B,d++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(D).multiplyScalar(L),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[m]=B;const q=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,q.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[m]=q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[m]=H,i.spotShadowMap[m]=G,v++}m++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(D).multiplyScalar(L),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=B,p++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const q=P.shadow,H=t.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=G,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=B,_++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(L),B.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[g]=B,g++}}p>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==m||R.rectAreaLength!==p||R.hemiLength!==g||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=m,i.rectArea.length=p,i.point.length=_,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=m,R.rectAreaLength=p,R.hemiLength=g,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=T,i.version=pS++)}function l(c,u){let f=0,h=0,d=0,_=0,m=0;const p=u.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const x=c[g];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),f++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),s.identity(),r.copy(x.matrixWorld),r.premultiply(p),s.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),_++}else if(x.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const v=i.hemi[m];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Dh(a){const e=new gS(a),t=[],i=[];function n(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function _S(a){let e=new WeakMap;function t(n,r=0){const s=e.get(n);let o;return s===void 0?(o=new Dh(a),e.set(n,[o])):r>=s.length?(o=new Dh(a),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xS=`uniform sampler2D shadow_pass;
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
}`;function yS(a,e,t){let i=new Au;const n=new Ze,r=new Ze,s=new st,o=new rp({depthPacking:Gd}),l=new sp,c={},u=t.maxTextureSize,f={[Ci]:dn,[dn]:Ci,[fn]:fn},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:vS,fragmentShader:xS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Nn;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Rt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let g=this.type;this.render=function(w,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=a.getRenderTarget(),M=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),D=a.state;D.setBlending(wi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=g!==yi&&this.type===yi,F=g===yi&&this.type!==yi;for(let G=0,B=w.length;G<B;G++){const q=w[G],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const Z=H.getFrameExtents();if(n.multiply(Z),r.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(r.x=Math.floor(u/Z.x),n.x=r.x*Z.x,H.mapSize.x=r.x),n.y>u&&(r.y=Math.floor(u/Z.y),n.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||L===!0||F===!0){const I=this.type!==yi?{minFilter:en,magFilter:en}:{};H.map!==null&&H.map.dispose(),H.map=new er(n.x,n.y,I),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}a.setRenderTarget(H.map),a.clear();const Y=H.getViewportCount();for(let I=0;I<Y;I++){const W=H.getViewport(I);s.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),D.viewport(s),H.updateMatrices(q,I),i=H.getFrustum(),v(T,R,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===yi&&y(H,R),H.needsUpdate=!1}g=this.type,p.needsUpdate=!1,a.setRenderTarget(S,M,P)};function y(w,T){const R=e.update(m);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new er(n.x,n.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(T,null,R,h,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(T,null,R,d,m,null)}function x(w,T,R,S){let M=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=M.uuid,L=T.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let G=F[L];G===void 0&&(G=M.clone(),F[L]=G,T.addEventListener("dispose",E)),M=G}if(M.visible=T.visible,M.wireframe=T.wireframe,S===yi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=a.properties.get(M);D.light=R}return M}function v(w,T,R,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===yi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const L=e.update(w),F=w.material;if(Array.isArray(F)){const G=L.groups;for(let B=0,q=G.length;B<q;B++){const H=G[B],Z=F[H.materialIndex];if(Z&&Z.visible){const Y=x(w,Z,S,M);w.onBeforeShadow(a,w,T,R,L,Y,H),a.renderBufferDirect(R,null,L,Y,w,H),w.onAfterShadow(a,w,T,R,L,Y,H)}}}else if(F.visible){const G=x(w,F,S,M);w.onBeforeShadow(a,w,T,R,L,G,null),a.renderBufferDirect(R,null,L,G,w,null),w.onAfterShadow(a,w,T,R,L,G,null)}}const D=w.children;for(let L=0,F=D.length;L<F;L++)v(D[L],T,R,S,M)}function E(w){w.target.removeEventListener("dispose",E);for(const R in c){const S=c[R],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const SS={[oc]:lc,[cc]:hc,[uc]:dc,[us]:fc,[lc]:oc,[hc]:cc,[dc]:uc,[fc]:us};function MS(a,e){function t(){let z=!1;const ue=new st;let te=null;const pe=new st(0,0,0,0);return{setMask:function(ye){te!==ye&&!z&&(a.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ge,Ne,Xe,Be){Be===!0&&(ye*=Xe,ge*=Xe,Ne*=Xe),ue.set(ye,ge,Ne,Xe),pe.equals(ue)===!1&&(a.clearColor(ye,ge,Ne,Xe),pe.copy(ue))},reset:function(){z=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let z=!1,ue=!1,te=null,pe=null,ye=null;return{setReversed:function(ge){if(ue!==ge){const Ne=e.get("EXT_clip_control");ge?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=ge;const Xe=ye;ye=null,this.setClear(Xe)}},getReversed:function(){return ue},setTest:function(ge){ge?X(a.DEPTH_TEST):ie(a.DEPTH_TEST)},setMask:function(ge){te!==ge&&!z&&(a.depthMask(ge),te=ge)},setFunc:function(ge){if(ue&&(ge=SS[ge]),pe!==ge){switch(ge){case oc:a.depthFunc(a.NEVER);break;case lc:a.depthFunc(a.ALWAYS);break;case cc:a.depthFunc(a.LESS);break;case us:a.depthFunc(a.LEQUAL);break;case uc:a.depthFunc(a.EQUAL);break;case fc:a.depthFunc(a.GEQUAL);break;case hc:a.depthFunc(a.GREATER);break;case dc:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}pe=ge}},setLocked:function(ge){z=ge},setClear:function(ge){ye!==ge&&(ue&&(ge=1-ge),a.clearDepth(ge),ye=ge)},reset:function(){z=!1,te=null,pe=null,ye=null,ue=!1}}}function n(){let z=!1,ue=null,te=null,pe=null,ye=null,ge=null,Ne=null,Xe=null,Be=null;return{setTest:function(Ge){z||(Ge?X(a.STENCIL_TEST):ie(a.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!z&&(a.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,ct,ft){(te!==Ge||pe!==ct||ye!==ft)&&(a.stencilFunc(Ge,ct,ft),te=Ge,pe=ct,ye=ft)},setOp:function(Ge,ct,ft){(ge!==Ge||Ne!==ct||Xe!==ft)&&(a.stencilOp(Ge,ct,ft),ge=Ge,Ne=ct,Xe=ft)},setLocked:function(Ge){z=Ge},setClear:function(Ge){Be!==Ge&&(a.clearStencil(Ge),Be=Ge)},reset:function(){z=!1,ue=null,te=null,pe=null,ye=null,ge=null,Ne=null,Xe=null,Be=null}}}const r=new t,s=new i,o=new n,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,m=!1,p=null,g=null,y=null,x=null,v=null,E=null,w=null,T=new We(0,0,0),R=0,S=!1,M=null,P=null,D=null,L=null,F=null;const G=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const H=a.getParameter(a.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=q>=2);let Z=null,Y={};const I=a.getParameter(a.SCISSOR_BOX),W=a.getParameter(a.VIEWPORT),ee=new st().fromArray(I),N=new st().fromArray(W);function k(z,ue,te,pe){const ye=new Uint8Array(4),ge=a.createTexture();a.bindTexture(z,ge),a.texParameteri(z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ne=0;Ne<te;Ne++)z===a.TEXTURE_3D||z===a.TEXTURE_2D_ARRAY?a.texImage3D(ue,0,a.RGBA,1,1,pe,0,a.RGBA,a.UNSIGNED_BYTE,ye):a.texImage2D(ue+Ne,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ye);return ge}const ne={};ne[a.TEXTURE_2D]=k(a.TEXTURE_2D,a.TEXTURE_2D,1),ne[a.TEXTURE_CUBE_MAP]=k(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[a.TEXTURE_2D_ARRAY]=k(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ne[a.TEXTURE_3D]=k(a.TEXTURE_3D,a.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),X(a.DEPTH_TEST),s.setFunc(us),Ae(!1),Re(df),X(a.CULL_FACE),U(wi);function X(z){u[z]!==!0&&(a.enable(z),u[z]=!0)}function ie(z){u[z]!==!1&&(a.disable(z),u[z]=!1)}function xe(z,ue){return f[z]!==ue?(a.bindFramebuffer(z,ue),f[z]=ue,z===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=ue),z===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(z,ue){let te=d,pe=!1;if(z){te=h.get(ue),te===void 0&&(te=[],h.set(ue,te));const ye=z.textures;if(te.length!==ye.length||te[0]!==a.COLOR_ATTACHMENT0){for(let ge=0,Ne=ye.length;ge<Ne;ge++)te[ge]=a.COLOR_ATTACHMENT0+ge;te.length=ye.length,pe=!0}}else te[0]!==a.BACK&&(te[0]=a.BACK,pe=!0);pe&&a.drawBuffers(te)}function ve(z){return _!==z?(a.useProgram(z),_=z,!0):!1}const fe={[vr]:a.FUNC_ADD,[Bm]:a.FUNC_SUBTRACT,[km]:a.FUNC_REVERSE_SUBTRACT};fe[zm]=a.MIN,fe[Gm]=a.MAX;const De={[Vm]:a.ZERO,[Hm]:a.ONE,[Wm]:a.SRC_COLOR,[sc]:a.SRC_ALPHA,[Zm]:a.SRC_ALPHA_SATURATE,[qm]:a.DST_COLOR,[Ym]:a.DST_ALPHA,[Xm]:a.ONE_MINUS_SRC_COLOR,[ac]:a.ONE_MINUS_SRC_ALPHA,[Km]:a.ONE_MINUS_DST_COLOR,[jm]:a.ONE_MINUS_DST_ALPHA,[Jm]:a.CONSTANT_COLOR,[Qm]:a.ONE_MINUS_CONSTANT_COLOR,[$m]:a.CONSTANT_ALPHA,[eg]:a.ONE_MINUS_CONSTANT_ALPHA};function U(z,ue,te,pe,ye,ge,Ne,Xe,Be,Ge){if(z===wi){m===!0&&(ie(a.BLEND),m=!1);return}if(m===!1&&(X(a.BLEND),m=!0),z!==Om){if(z!==p||Ge!==S){if((g!==vr||v!==vr)&&(a.blendEquation(a.FUNC_ADD),g=vr,v=vr),Ge)switch(z){case is:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case pf:a.blendFunc(a.ONE,a.ONE);break;case mf:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case gf:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case is:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case pf:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case mf:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case gf:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,x=null,E=null,w=null,T.set(0,0,0),R=0,p=z,S=Ge}return}ye=ye||ue,ge=ge||te,Ne=Ne||pe,(ue!==g||ye!==v)&&(a.blendEquationSeparate(fe[ue],fe[ye]),g=ue,v=ye),(te!==y||pe!==x||ge!==E||Ne!==w)&&(a.blendFuncSeparate(De[te],De[pe],De[ge],De[Ne]),y=te,x=pe,E=ge,w=Ne),(Xe.equals(T)===!1||Be!==R)&&(a.blendColor(Xe.r,Xe.g,Xe.b,Be),T.copy(Xe),R=Be),p=z,S=!1}function Oe(z,ue){z.side===fn?ie(a.CULL_FACE):X(a.CULL_FACE);let te=z.side===dn;ue&&(te=!te),Ae(te),z.blending===is&&z.transparent===!1?U(wi):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const pe=z.stencilWrite;o.setTest(pe),pe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),be(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?X(a.SAMPLE_ALPHA_TO_COVERAGE):ie(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(z){M!==z&&(z?a.frontFace(a.CW):a.frontFace(a.CCW),M=z)}function Re(z){z!==Fm?(X(a.CULL_FACE),z!==P&&(z===df?a.cullFace(a.BACK):z===Nm?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ie(a.CULL_FACE),P=z}function ae(z){z!==D&&(B&&a.lineWidth(z),D=z)}function be(z,ue,te){z?(X(a.POLYGON_OFFSET_FILL),(L!==ue||F!==te)&&(a.polygonOffset(ue,te),L=ue,F=te)):ie(a.POLYGON_OFFSET_FILL)}function de(z){z?X(a.SCISSOR_TEST):ie(a.SCISSOR_TEST)}function A(z){z===void 0&&(z=a.TEXTURE0+G-1),Z!==z&&(a.activeTexture(z),Z=z)}function b(z,ue,te){te===void 0&&(Z===null?te=a.TEXTURE0+G-1:te=Z);let pe=Y[te];pe===void 0&&(pe={type:void 0,texture:void 0},Y[te]=pe),(pe.type!==z||pe.texture!==ue)&&(Z!==te&&(a.activeTexture(te),Z=te),a.bindTexture(z,ue||ne[z]),pe.type=z,pe.texture=ue)}function O(){const z=Y[Z];z!==void 0&&z.type!==void 0&&(a.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Q(){try{a.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{a.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{a.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{a.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{a.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{a.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{a.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{a.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{a.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){ee.equals(z)===!1&&(a.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function oe(z){N.equals(z)===!1&&(a.viewport(z.x,z.y,z.z,z.w),N.copy(z))}function Ue(z,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(z);pe===void 0&&(pe=a.getUniformBlockIndex(ue,z.name),te.set(z,pe))}function Fe(z,ue){const pe=c.get(ue).get(z);l.get(ue)!==pe&&(a.uniformBlockBinding(ue,pe,z.__bindingPointIndex),l.set(ue,pe))}function qe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),s.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},Z=null,Y={},f={},h=new WeakMap,d=[],_=null,m=!1,p=null,g=null,y=null,x=null,v=null,E=null,w=null,T=new We(0,0,0),R=0,S=!1,M=null,P=null,D=null,L=null,F=null,ee.set(0,0,a.canvas.width,a.canvas.height),N.set(0,0,a.canvas.width,a.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:X,disable:ie,bindFramebuffer:xe,drawBuffers:_e,useProgram:ve,setBlending:U,setMaterial:Oe,setFlipSided:Ae,setCullFace:Re,setLineWidth:ae,setPolygonOffset:be,setScissorTest:de,activeTexture:A,bindTexture:b,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:$,texImage2D:Se,texImage3D:Te,updateUBOMapping:Ue,uniformBlockBinding:Fe,texStorage2D:Le,texStorage3D:ce,texSubImage2D:se,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Ee,viewport:oe,reset:qe}}function TS(a,e,t,i,n,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return d?new OffscreenCanvas(A,b):_a("canvas")}function m(A,b,O){let Q=1;const $=de(A);if(($.width>O||$.height>O)&&(Q=O/Math.max($.width,$.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(Q*$.width),he=Math.floor(Q*$.height);f===void 0&&(f=_(se,he));const le=b?_(se,he):f;return le.width=se,le.height=he,le.getContext("2d").drawImage(A,0,0,se,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+he+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function g(A){a.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?a.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function x(A,b,O,Q,$=!1){if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=b;if(b===a.RED&&(O===a.FLOAT&&(se=a.R32F),O===a.HALF_FLOAT&&(se=a.R16F),O===a.UNSIGNED_BYTE&&(se=a.R8)),b===a.RED_INTEGER&&(O===a.UNSIGNED_BYTE&&(se=a.R8UI),O===a.UNSIGNED_SHORT&&(se=a.R16UI),O===a.UNSIGNED_INT&&(se=a.R32UI),O===a.BYTE&&(se=a.R8I),O===a.SHORT&&(se=a.R16I),O===a.INT&&(se=a.R32I)),b===a.RG&&(O===a.FLOAT&&(se=a.RG32F),O===a.HALF_FLOAT&&(se=a.RG16F),O===a.UNSIGNED_BYTE&&(se=a.RG8)),b===a.RG_INTEGER&&(O===a.UNSIGNED_BYTE&&(se=a.RG8UI),O===a.UNSIGNED_SHORT&&(se=a.RG16UI),O===a.UNSIGNED_INT&&(se=a.RG32UI),O===a.BYTE&&(se=a.RG8I),O===a.SHORT&&(se=a.RG16I),O===a.INT&&(se=a.RG32I)),b===a.RGB_INTEGER&&(O===a.UNSIGNED_BYTE&&(se=a.RGB8UI),O===a.UNSIGNED_SHORT&&(se=a.RGB16UI),O===a.UNSIGNED_INT&&(se=a.RGB32UI),O===a.BYTE&&(se=a.RGB8I),O===a.SHORT&&(se=a.RGB16I),O===a.INT&&(se=a.RGB32I)),b===a.RGBA_INTEGER&&(O===a.UNSIGNED_BYTE&&(se=a.RGBA8UI),O===a.UNSIGNED_SHORT&&(se=a.RGBA16UI),O===a.UNSIGNED_INT&&(se=a.RGBA32UI),O===a.BYTE&&(se=a.RGBA8I),O===a.SHORT&&(se=a.RGBA16I),O===a.INT&&(se=a.RGBA32I)),b===a.RGB&&O===a.UNSIGNED_INT_5_9_9_9_REV&&(se=a.RGB9_E5),b===a.RGBA){const he=$?Uo:rt.getTransfer(Q);O===a.FLOAT&&(se=a.RGBA32F),O===a.HALF_FLOAT&&(se=a.RGBA16F),O===a.UNSIGNED_BYTE&&(se=he===lt?a.SRGB8_ALPHA8:a.RGBA8),O===a.UNSIGNED_SHORT_4_4_4_4&&(se=a.RGBA4),O===a.UNSIGNED_SHORT_5_5_5_1&&(se=a.RGB5_A1)}return(se===a.R16F||se===a.R32F||se===a.RG16F||se===a.RG32F||se===a.RGBA16F||se===a.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(A,b){let O;return A?b===null||b===wr||b===ha?O=a.DEPTH24_STENCIL8:b===qn?O=a.DEPTH32F_STENCIL8:b===fa&&(O=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wr||b===ha?O=a.DEPTH_COMPONENT24:b===qn?O=a.DEPTH_COMPONENT32F:b===fa&&(O=a.DEPTH_COMPONENT16),O}function E(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==en&&A.minFilter!==$t?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){const b=A.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&u.delete(b)}function T(A){const b=A.target;b.removeEventListener("dispose",T),M(b)}function R(A){const b=i.get(A);if(b.__webglInit===void 0)return;const O=A.source,Q=h.get(O);if(Q){const $=Q[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(A),Object.keys(Q).length===0&&h.delete(O)}i.remove(A)}function S(A){const b=i.get(A);a.deleteTexture(b.__webglTexture);const O=A.source,Q=h.get(O);delete Q[b.__cacheKey],s.memory.textures--}function M(A){const b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let $=0;$<b.__webglFramebuffer[Q].length;$++)a.deleteFramebuffer(b.__webglFramebuffer[Q][$]);else a.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)a.deleteFramebuffer(b.__webglFramebuffer[Q]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=A.textures;for(let Q=0,$=O.length;Q<$;Q++){const se=i.get(O[Q]);se.__webglTexture&&(a.deleteTexture(se.__webglTexture),s.memory.textures--),i.remove(O[Q])}i.remove(A)}let P=0;function D(){P=0}function L(){const A=P;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),P+=1,A}function F(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function G(A,b){const O=i.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(O,A,b);return}}t.bindTexture(a.TEXTURE_2D,O.__webglTexture,a.TEXTURE0+b)}function B(A,b){const O=i.get(A);if(A.version>0&&O.__version!==A.version){N(O,A,b);return}t.bindTexture(a.TEXTURE_2D_ARRAY,O.__webglTexture,a.TEXTURE0+b)}function q(A,b){const O=i.get(A);if(A.version>0&&O.__version!==A.version){N(O,A,b);return}t.bindTexture(a.TEXTURE_3D,O.__webglTexture,a.TEXTURE0+b)}function H(A,b){const O=i.get(A);if(A.version>0&&O.__version!==A.version){k(O,A,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+b)}const Z={[$i]:a.REPEAT,[Wi]:a.CLAMP_TO_EDGE,[Lo]:a.MIRRORED_REPEAT},Y={[en]:a.NEAREST,[Dd]:a.NEAREST_MIPMAP_NEAREST,[Qs]:a.NEAREST_MIPMAP_LINEAR,[$t]:a.LINEAR,[_o]:a.LINEAR_MIPMAP_NEAREST,[bi]:a.LINEAR_MIPMAP_LINEAR},I={[ug]:a.NEVER,[gg]:a.ALWAYS,[fg]:a.LESS,[Hd]:a.LEQUAL,[hg]:a.EQUAL,[mg]:a.GEQUAL,[dg]:a.GREATER,[pg]:a.NOTEQUAL};function W(A,b){if(b.type===qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===$t||b.magFilter===_o||b.magFilter===Qs||b.magFilter===bi||b.minFilter===$t||b.minFilter===_o||b.minFilter===Qs||b.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(A,a.TEXTURE_WRAP_S,Z[b.wrapS]),a.texParameteri(A,a.TEXTURE_WRAP_T,Z[b.wrapT]),(A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY)&&a.texParameteri(A,a.TEXTURE_WRAP_R,Z[b.wrapR]),a.texParameteri(A,a.TEXTURE_MAG_FILTER,Y[b.magFilter]),a.texParameteri(A,a.TEXTURE_MIN_FILTER,Y[b.minFilter]),b.compareFunction&&(a.texParameteri(A,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(A,a.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===en||b.minFilter!==Qs&&b.minFilter!==bi||b.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");a.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function ee(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const Q=b.source;let $=h.get(Q);$===void 0&&($={},h.set(Q,$));const se=F(b);if(se!==A.__cacheKey){$[se]===void 0&&($[se]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,O=!0),$[se].usedTimes++;const he=$[A.__cacheKey];he!==void 0&&($[A.__cacheKey].usedTimes--,he.usedTimes===0&&S(b)),A.__cacheKey=se,A.__webglTexture=$[se].texture}return O}function N(A,b,O){let Q=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=a.TEXTURE_3D);const $=ee(A,b),se=b.source;t.bindTexture(Q,A.__webglTexture,a.TEXTURE0+O);const he=i.get(se);if(se.version!==he.__version||$===!0){t.activeTexture(a.TEXTURE0+O);const le=rt.getPrimaries(rt.workingColorSpace),me=b.colorSpace===Hi?null:rt.getPrimaries(b.colorSpace),Le=b.colorSpace===Hi||le===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=m(b.image,!1,n.maxTextureSize);ce=be(b,ce);const Se=r.convert(b.format,b.colorSpace),Te=r.convert(b.type);let Ee=x(b.internalFormat,Se,Te,b.colorSpace,b.isVideoTexture);W(Q,b);let oe;const Ue=b.mipmaps,Fe=b.isVideoTexture!==!0,qe=he.__version===void 0||$===!0,z=se.dataReady,ue=E(b,ce);if(b.isDepthTexture)Ee=v(b.format===pa,b.type),qe&&(Fe?t.texStorage2D(a.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(a.TEXTURE_2D,0,Ee,ce.width,ce.height,0,Se,Te,null));else if(b.isDataTexture)if(Ue.length>0){Fe&&qe&&t.texStorage2D(a.TEXTURE_2D,ue,Ee,Ue[0].width,Ue[0].height);for(let te=0,pe=Ue.length;te<pe;te++)oe=Ue[te],Fe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,Te,oe.data):t.texImage2D(a.TEXTURE_2D,te,Ee,oe.width,oe.height,0,Se,Te,oe.data);b.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(a.TEXTURE_2D,ue,Ee,ce.width,ce.height),z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ce.width,ce.height,Se,Te,ce.data)):t.texImage2D(a.TEXTURE_2D,0,Ee,ce.width,ce.height,0,Se,Te,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,Ee,Ue[0].width,Ue[0].height,ce.depth);for(let te=0,pe=Ue.length;te<pe;te++)if(oe=Ue[te],b.format!==In)if(Se!==null)if(Fe){if(z)if(b.layerUpdates.size>0){const ye=ah(oe.width,oe.height,b.format,b.type);for(const ge of b.layerUpdates){const Ne=oe.data.subarray(ge*ye/oe.data.BYTES_PER_ELEMENT,(ge+1)*ye/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,ge,oe.width,oe.height,1,Se,Ne)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,Se,oe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ce.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?z&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,Se,Te,oe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ce.depth,0,Se,Te,oe.data)}else{Fe&&qe&&t.texStorage2D(a.TEXTURE_2D,ue,Ee,Ue[0].width,Ue[0].height);for(let te=0,pe=Ue.length;te<pe;te++)oe=Ue[te],b.format!==In?Se!==null?Fe?z&&t.compressedTexSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,oe.data):t.compressedTexImage2D(a.TEXTURE_2D,te,Ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,Te,oe.data):t.texImage2D(a.TEXTURE_2D,te,Ee,oe.width,oe.height,0,Se,Te,oe.data)}else if(b.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ue,Ee,ce.width,ce.height,ce.depth),z)if(b.layerUpdates.size>0){const te=ah(ce.width,ce.height,b.format,b.type);for(const pe of b.layerUpdates){const ye=ce.data.subarray(pe*te/ce.data.BYTES_PER_ELEMENT,(pe+1)*te/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,pe,ce.width,ce.height,1,Se,Te,ye)}b.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,Te,ce.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,Se,Te,ce.data);else if(b.isData3DTexture)Fe?(qe&&t.texStorage3D(a.TEXTURE_3D,ue,Ee,ce.width,ce.height,ce.depth),z&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,Te,ce.data)):t.texImage3D(a.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,Se,Te,ce.data);else if(b.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(a.TEXTURE_2D,ue,Ee,ce.width,ce.height);else{let te=ce.width,pe=ce.height;for(let ye=0;ye<ue;ye++)t.texImage2D(a.TEXTURE_2D,ye,Ee,te,pe,0,Se,Te,null),te>>=1,pe>>=1}}else if(Ue.length>0){if(Fe&&qe){const te=de(Ue[0]);t.texStorage2D(a.TEXTURE_2D,ue,Ee,te.width,te.height)}for(let te=0,pe=Ue.length;te<pe;te++)oe=Ue[te],Fe?z&&t.texSubImage2D(a.TEXTURE_2D,te,0,0,Se,Te,oe):t.texImage2D(a.TEXTURE_2D,te,Ee,Se,Te,oe);b.generateMipmaps=!1}else if(Fe){if(qe){const te=de(ce);t.texStorage2D(a.TEXTURE_2D,ue,Ee,te.width,te.height)}z&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Se,Te,ce)}else t.texImage2D(a.TEXTURE_2D,0,Ee,Se,Te,ce);p(b)&&g(Q),he.__version=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function k(A,b,O){if(b.image.length!==6)return;const Q=ee(A,b),$=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,A.__webglTexture,a.TEXTURE0+O);const se=i.get($);if($.version!==se.__version||Q===!0){t.activeTexture(a.TEXTURE0+O);const he=rt.getPrimaries(rt.workingColorSpace),le=b.colorSpace===Hi?null:rt.getPrimaries(b.colorSpace),me=b.colorSpace===Hi||he===le?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let pe=0;pe<6;pe++)!Le&&!ce?Se[pe]=m(b.image[pe],!0,n.maxCubemapSize):Se[pe]=ce?b.image[pe].image:b.image[pe],Se[pe]=be(b,Se[pe]);const Te=Se[0],Ee=r.convert(b.format,b.colorSpace),oe=r.convert(b.type),Ue=x(b.internalFormat,Ee,oe,b.colorSpace),Fe=b.isVideoTexture!==!0,qe=se.__version===void 0||Q===!0,z=$.dataReady;let ue=E(b,Te);W(a.TEXTURE_CUBE_MAP,b);let te;if(Le){Fe&&qe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ue,Ue,Te.width,Te.height);for(let pe=0;pe<6;pe++){te=Se[pe].mipmaps;for(let ye=0;ye<te.length;ye++){const ge=te[ye];b.format!==In?Ee!==null?Fe?z&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Ee,ge.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Ee,oe,ge.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Ue,ge.width,ge.height,0,Ee,oe,ge.data)}}}else{if(te=b.mipmaps,Fe&&qe){te.length>0&&ue++;const pe=de(Se[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ue,Ue,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ce){Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Se[pe].width,Se[pe].height,Ee,oe,Se[pe].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ue,Se[pe].width,Se[pe].height,0,Ee,oe,Se[pe].data);for(let ye=0;ye<te.length;ye++){const Ne=te[ye].image[pe].image;Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Ne.width,Ne.height,Ee,oe,Ne.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Ue,Ne.width,Ne.height,0,Ee,oe,Ne.data)}}else{Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ee,oe,Se[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ue,Ee,oe,Se[pe]);for(let ye=0;ye<te.length;ye++){const ge=te[ye];Fe?z&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Ee,oe,ge.image[pe]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Ue,Ee,oe,ge.image[pe])}}}p(b)&&g(a.TEXTURE_CUBE_MAP),se.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ne(A,b,O,Q,$,se){const he=r.convert(O.format,O.colorSpace),le=r.convert(O.type),me=x(O.internalFormat,he,le,O.colorSpace),Le=i.get(b),ce=i.get(O);if(ce.__renderTarget=b,!Le.__hasExternalTextures){const Se=Math.max(1,b.width>>se),Te=Math.max(1,b.height>>se);$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?t.texImage3D($,se,me,Se,Te,b.depth,0,he,le,null):t.texImage2D($,se,me,Se,Te,0,he,le,null)}t.bindFramebuffer(a.FRAMEBUFFER,A),Re(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Q,$,ce.__webglTexture,0,Ae(b)):($===a.TEXTURE_2D||$>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Q,$,ce.__webglTexture,se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function X(A,b,O){if(a.bindRenderbuffer(a.RENDERBUFFER,A),b.depthBuffer){const Q=b.depthTexture,$=Q&&Q.isDepthTexture?Q.type:null,se=v(b.stencilBuffer,$),he=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,le=Ae(b);Re(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,le,se,b.width,b.height):O?a.renderbufferStorageMultisample(a.RENDERBUFFER,le,se,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,se,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,A)}else{const Q=b.textures;for(let $=0;$<Q.length;$++){const se=Q[$],he=r.convert(se.format,se.colorSpace),le=r.convert(se.type),me=x(se.internalFormat,he,le,se.colorSpace),Le=Ae(b);O&&Re(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,me,b.width,b.height):Re(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Le,me,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,me,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ie(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const $=Q.__webglTexture,se=Ae(b);if(b.depthTexture.format===da)Re(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0);else if(b.depthTexture.format===pa)Re(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0,se):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function xe(A){const b=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",$)};Q.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=Q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ie(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=a.createRenderbuffer(),X(b.__webglDepthbuffer[Q],A,!1);else{const $=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer[Q];a.bindRenderbuffer(a.RENDERBUFFER,se),a.framebufferRenderbuffer(a.FRAMEBUFFER,$,a.RENDERBUFFER,se)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),X(b.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,$),a.framebufferRenderbuffer(a.FRAMEBUFFER,Q,a.RENDERBUFFER,$)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function _e(A,b,O){const Q=i.get(A);b!==void 0&&ne(Q.__webglFramebuffer,A,A.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),O!==void 0&&xe(A)}function ve(A){const b=A.texture,O=i.get(A),Q=i.get(b);A.addEventListener("dispose",T);const $=A.textures,se=A.isWebGLCubeRenderTarget===!0,he=$.length>1;if(he||(Q.__webglTexture===void 0&&(Q.__webglTexture=a.createTexture()),Q.__version=b.version,s.memory.textures++),se){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let me=0;me<b.mipmaps.length;me++)O.__webglFramebuffer[le][me]=a.createFramebuffer()}else O.__webglFramebuffer[le]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)O.__webglFramebuffer[le]=a.createFramebuffer()}else O.__webglFramebuffer=a.createFramebuffer();if(he)for(let le=0,me=$.length;le<me;le++){const Le=i.get($[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),s.memory.textures++)}if(A.samples>0&&Re(A)===!1){O.__webglMultisampledFramebuffer=a.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const me=$[le];O.__webglColorRenderbuffer[le]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Le=r.convert(me.format,me.colorSpace),ce=r.convert(me.type),Se=x(me.internalFormat,Le,ce,me.colorSpace,A.isXRRenderTarget===!0),Te=Ae(A);a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,Se,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+le,a.RENDERBUFFER,O.__webglColorRenderbuffer[le])}a.bindRenderbuffer(a.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=a.createRenderbuffer(),X(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(se){t.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture),W(a.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(O.__webglFramebuffer[le][me],A,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ne(O.__webglFramebuffer[le],A,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(b)&&g(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let le=0,me=$.length;le<me;le++){const Le=$[le],ce=i.get(Le);t.bindTexture(a.TEXTURE_2D,ce.__webglTexture),W(a.TEXTURE_2D,Le),ne(O.__webglFramebuffer,A,Le,a.COLOR_ATTACHMENT0+le,a.TEXTURE_2D,0),p(Le)&&g(a.TEXTURE_2D)}t.unbindTexture()}else{let le=a.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),W(le,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(O.__webglFramebuffer[me],A,b,a.COLOR_ATTACHMENT0,le,me);else ne(O.__webglFramebuffer,A,b,a.COLOR_ATTACHMENT0,le,0);p(b)&&g(le),t.unbindTexture()}A.depthBuffer&&xe(A)}function fe(A){const b=A.textures;for(let O=0,Q=b.length;O<Q;O++){const $=b[O];if(p($)){const se=y(A),he=i.get($).__webglTexture;t.bindTexture(se,he),g(se),t.unbindTexture()}}}const De=[],U=[];function Oe(A){if(A.samples>0){if(Re(A)===!1){const b=A.textures,O=A.width,Q=A.height;let $=a.COLOR_BUFFER_BIT;const se=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=i.get(A),le=b.length>1;if(le)for(let me=0;me<b.length;me++)t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let me=0;me<b.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=a.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=a.STENCIL_BUFFER_BIT)),le){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const Le=i.get(b[me]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Le,0)}a.blitFramebuffer(0,0,O,Q,0,0,O,Q,$,a.NEAREST),l===!0&&(De.length=0,U.length=0,De.push(a.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(De.push(se),U.push(se),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,U)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<b.length;me++){t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,he.__webglColorRenderbuffer[me]);const Le=i.get(b[me]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.TEXTURE_2D,Le,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function Ae(A){return Math.min(n.maxSamples,A.samples)}function Re(A){const b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(A){const b=s.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function be(A,b){const O=A.colorSpace,Q=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==nn&&O!==Hi&&(rt.getTransfer(O)===lt?(Q!==In||$!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function de(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Re}function ES(a,e){function t(i,n=Hi){let r;const s=rt.getTransfer(n);if(i===Di)return a.UNSIGNED_BYTE;if(i===mu)return a.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Ud)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Pd)return a.BYTE;if(i===Ld)return a.SHORT;if(i===fa)return a.UNSIGNED_SHORT;if(i===pu)return a.INT;if(i===wr)return a.UNSIGNED_INT;if(i===qn)return a.FLOAT;if(i===bs)return a.HALF_FLOAT;if(i===Id)return a.ALPHA;if(i===Fd)return a.RGB;if(i===In)return a.RGBA;if(i===Nd)return a.LUMINANCE;if(i===Od)return a.LUMINANCE_ALPHA;if(i===da)return a.DEPTH_COMPONENT;if(i===pa)return a.DEPTH_STENCIL;if(i===_u)return a.RED;if(i===vu)return a.RED_INTEGER;if(i===Bd)return a.RG;if(i===xu)return a.RG_INTEGER;if(i===yu)return a.RGBA_INTEGER;if(i===vo||i===xo||i===yo||i===So)if(s===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===yc||i===Sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xc||i===yc)return s===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mc||i===Tc||i===Ec||i===bc||i===Ac||i===wc||i===Rc||i===Cc||i===Dc||i===Pc||i===Lc||i===Uc||i===Ic||i===Fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ac)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fc)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===Nc||i===Oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mo)return s===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kd||i===Bc||i===kc||i===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const bS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AS=`
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

}`;class wS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Ct,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:bS,fragmentShader:AS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RS extends As{constructor(e,t){super();const i=this;let n=null,r=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const m=new wS,p=t.getContextAttributes();let g=null,y=null;const x=[],v=[],E=new Ze;let w=null;const T=new Jt;T.viewport=new st;const R=new Jt;R.viewport=new st;const S=[T,R],M=new k_;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=x[N];return k===void 0&&(k=new Pl,x[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=x[N];return k===void 0&&(k=new Pl,x[N]=k),k.getGripSpace()},this.getHand=function(N){let k=x[N];return k===void 0&&(k=new Pl,x[N]=k),k.getHandSpace()};function L(N){const k=v.indexOf(N.inputSource);if(k===-1)return;const ne=x[k];ne!==void 0&&(ne.update(N.inputSource,N.frame,c||s),ne.dispatchEvent({type:N.type,data:N.inputSource}))}function F(){n.removeEventListener("select",L),n.removeEventListener("selectstart",L),n.removeEventListener("selectend",L),n.removeEventListener("squeeze",L),n.removeEventListener("squeezestart",L),n.removeEventListener("squeezeend",L),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",G);for(let N=0;N<x.length;N++){const k=v[N];k!==null&&(v[N]=null,x[N].disconnect(k))}P=null,D=null,m.reset(),e.setRenderTarget(g),d=null,h=null,f=null,n=null,y=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",L),n.addEventListener("selectstart",L),n.addEventListener("selectend",L),n.addEventListener("squeeze",L),n.addEventListener("squeezestart",L),n.addEventListener("squeezeend",L),n.addEventListener("end",F),n.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,X=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?pa:da,X=p.stencil?ha:wr);const xe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=new XRWebGLBinding(n,t),h=f.createProjectionLayer(xe),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new er(h.textureWidth,h.textureHeight,{format:In,type:Di,depthTexture:new ip(h.textureWidth,h.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new er(d.framebufferWidth,d.framebufferHeight,{format:In,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(N){for(let k=0;k<N.removed.length;k++){const ne=N.removed[k],X=v.indexOf(ne);X>=0&&(v[X]=null,x[X].disconnect(ne))}for(let k=0;k<N.added.length;k++){const ne=N.added[k];let X=v.indexOf(ne);if(X===-1){for(let xe=0;xe<x.length;xe++)if(xe>=v.length){v.push(ne),X=xe;break}else if(v[xe]===null){v[xe]=ne,X=xe;break}if(X===-1)break}const ie=x[X];ie&&ie.connect(ne)}}const B=new J,q=new J;function H(N,k,ne){B.setFromMatrixPosition(k.matrixWorld),q.setFromMatrixPosition(ne.matrixWorld);const X=B.distanceTo(q),ie=k.projectionMatrix.elements,xe=ne.projectionMatrix.elements,_e=ie[14]/(ie[10]-1),ve=ie[14]/(ie[10]+1),fe=(ie[9]+1)/ie[5],De=(ie[9]-1)/ie[5],U=(ie[8]-1)/ie[0],Oe=(xe[8]+1)/xe[0],Ae=_e*U,Re=_e*Oe,ae=X/(-U+Oe),be=ae*-U;if(k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(be),N.translateZ(ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ie[10]===-1)N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const de=_e+ae,A=ve+ae,b=Ae-be,O=Re+(X-be),Q=fe*ve/A*de,$=De*ve/A*de;N.projectionMatrix.makePerspective(b,O,Q,$,de,A),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Z(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;let k=N.near,ne=N.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),M.near=R.near=T.near=k,M.far=R.far=T.far=ne,(P!==M.near||D!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far),T.layers.mask=N.layers.mask|2,R.layers.mask=N.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const X=N.parent,ie=M.cameras;Z(M,X);for(let xe=0;xe<ie.length;xe++)Z(ie[xe],X);ie.length===2?H(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),Y(N,M,X)};function Y(N,k,ne){ne===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(ne.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ds*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(N){l=N,h!==null&&(h.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(M)};let I=null;function W(N,k){if(u=k.getViewerPose(c||s),_=k,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let X=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let _e=0;_e<ne.length;_e++){const ve=ne[_e];let fe=null;if(d!==null)fe=d.getViewport(ve);else{const U=f.getViewSubImage(h,ve);fe=U.viewport,_e===0&&(e.setRenderTargetTextures(y,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(y))}let De=S[_e];De===void 0&&(De=new Jt,De.layers.enable(_e),De.viewport=new st,S[_e]=De),De.matrix.fromArray(ve.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ve.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(fe.x,fe.y,fe.width,fe.height),_e===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(De)}const ie=n.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&f){const _e=f.getDepthInformation(ne[0]);_e&&_e.isValid&&_e.texture&&m.init(e,_e,n.renderState)}}for(let ne=0;ne<x.length;ne++){const X=v[ne],ie=x[ne];X!==null&&ie!==void 0&&ie.update(X,k,c||s)}I&&I(N,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const ee=new up;ee.setAnimationLoop(W),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}const ur=new fi,CS=new je;function DS(a,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Zd(a)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,y,x,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(r(p,g),_(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),m(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,y,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===dn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===dn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const y=e.get(g),x=y.envMap,v=y.envMapRotation;x&&(p.envMap.value=x,ur.copy(v),ur.x*=-1,ur.y*=-1,ur.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(CS.makeRotationFromEuler(ur)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=x*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,g){g.matcap&&(p.matcap.value=g.matcap)}function m(p,g){const y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function PS(a,e,t,i){let n={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;i.uniformBlockBinding(y,v)}function c(y,x){let v=n[y.id];v===void 0&&(_(y),v=u(y),n[y.id]=v,y.addEventListener("dispose",p));const E=x.program;i.updateUBOMapping(y,E);const w=e.render.frame;r[y.id]!==w&&(h(y),r[y.id]=w)}function u(y){const x=f();y.__bindingPointIndex=x;const v=a.createBuffer(),E=y.__size,w=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,v),a.bufferData(a.UNIFORM_BUFFER,E,w),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=n[y.id],v=y.uniforms,E=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,x);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=R.length;S<M;S++){const P=R[S];if(d(P,w,S,E)===!0){const D=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let G=0;G<L.length;G++){const B=L[G],q=m(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,D+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,F),F+=q.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,D,P.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function d(y,x,v,E){const w=y.value,T=x+"_"+v;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const R=E[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(y){const x=y.uniforms;let v=0;const E=16;for(let T=0,R=x.length;T<R;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,P=S.length;M<P;M++){const D=S[M],L=Array.isArray(D.value)?D.value:[D.value];for(let F=0,G=L.length;F<G;F++){const B=L[F],q=m(B),H=v%E,Z=H%q.boundary,Y=H+Z;v+=Z,Y!==0&&E-Y<q.storage&&(v+=E-Y),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=q.storage}}}const w=v%E;return w>0&&(v+=E-w),y.__size=v,y.__cache={},this}function m(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const v=s.indexOf(x.__bindingPointIndex);s.splice(v,1),a.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function g(){for(const y in n)a.deleteBuffer(n[y]);s=[],n={},r={}}return{bind:l,update:c,dispose:g}}class LS{constructor(e={}){const{canvas:t=Ig(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const _=new Uint32Array(4),m=new Int32Array(4);let p=null,g=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=wt;let w=0,T=0,R=null,S=-1,M=null;const P=new st,D=new st;let L=null;const F=new We(0);let G=0,B=t.width,q=t.height,H=1,Z=null,Y=null;const I=new st(0,0,B,q),W=new st(0,0,B,q);let ee=!1;const N=new Au;let k=!1,ne=!1;const X=new je,ie=new je,xe=new J,_e=new st,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function De(){return R===null?H:1}let U=i;function Oe(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hu}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const j="webgl2";if(U=Oe(j,C),U===null)throw Oe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Re,ae,be,de,A,b,O,Q,$,se,he,le,me,Le,ce,Se,Te,Ee,oe,Ue,Fe,qe,z;function ue(){Ae=new Vx(U),Ae.init(),Fe=new ES(U,Ae),Re=new Fx(U,Ae,e,Fe),ae=new MS(U,Ae),Re.reverseDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),be=new Xx(U),de=new cS,A=new TS(U,Ae,ae,de,Re,Fe,be),b=new Ox(v),O=new Gx(v),Q=new J_(U),qe=new Ux(U,Q),$=new Hx(U,Q,be,qe),se=new jx(U,$,Q,be),Ee=new Yx(U,Re,A),ce=new Nx(de),he=new lS(v,b,O,Ae,Re,qe,ce),le=new DS(v,de),me=new fS,Le=new _S(Ae),Te=new Lx(v,b,O,ae,se,d,l),Se=new yS(v,se,Re),z=new PS(U,be,Re,ae),oe=new Ix(U,Ae,be),Ue=new Wx(U,Ae,be),be.programs=he.programs,v.capabilities=Re,v.extensions=Ae,v.properties=de,v.renderLists=me,v.shadowMap=Se,v.state=ae,v.info=be}ue();const te=new RS(v,U);this.xr=te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(B,q,!1))},this.getSize=function(C){return C.set(B,q)},this.setSize=function(C,j,re=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,q=j,t.width=Math.floor(C*H),t.height=Math.floor(j*H),re===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(B*H,q*H).floor()},this.setDrawingBufferSize=function(C,j,re){B=C,q=j,H=re,t.width=Math.floor(C*re),t.height=Math.floor(j*re),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,j,re,V){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,j,re,V),ae.viewport(P.copy(I).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,j,re,V){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,j,re,V),ae.scissor(D.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){ae.setScissorTest(ee=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,re=!0){let V=0;if(C){let K=!1;if(R!==null){const Me=R.texture.format;K=Me===yu||Me===xu||Me===vu}if(K){const Me=R.texture.type,we=Me===Di||Me===wr||Me===fa||Me===ha||Me===mu||Me===gu,Pe=Te.getClearColor(),Ie=Te.getClearAlpha(),He=Pe.r,Ve=Pe.g,ke=Pe.b;we?(_[0]=He,_[1]=Ve,_[2]=ke,_[3]=Ie,U.clearBufferuiv(U.COLOR,0,_)):(m[0]=He,m[1]=Ve,m[2]=ke,m[3]=Ie,U.clearBufferiv(U.COLOR,0,m))}else V|=U.COLOR_BUFFER_BIT}j&&(V|=U.DEPTH_BUFFER_BIT),re&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Te.dispose(),me.dispose(),Le.dispose(),de.dispose(),b.dispose(),O.dispose(),se.dispose(),qe.dispose(),z.dispose(),he.dispose(),te.dispose(),te.removeEventListener("sessionstart",xt),te.removeEventListener("sessionend",rn),Gt.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=be.autoReset,j=Se.enabled,re=Se.autoUpdate,V=Se.needsUpdate,K=Se.type;ue(),be.autoReset=C,Se.enabled=j,Se.autoUpdate=re,Se.needsUpdate=V,Se.type=K}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ne(C){const j=C.target;j.removeEventListener("dispose",Ne),Xe(j)}function Xe(C){Be(C),de.remove(C)}function Be(C){const j=de.get(C).programs;j!==void 0&&(j.forEach(function(re){he.releaseProgram(re)}),C.isShaderMaterial&&he.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,re,V,K,Me){j===null&&(j=ve);const we=K.isMesh&&K.matrixWorld.determinant()<0,Pe=el(C,j,re,V,K);ae.setMaterial(V,we);let Ie=re.index,He=1;if(V.wireframe===!0){if(Ie=$.getWireframeAttribute(re),Ie===void 0)return;He=2}const Ve=re.drawRange,ke=re.attributes.position;let et=Ve.start*He,tt=(Ve.start+Ve.count)*He;Me!==null&&(et=Math.max(et,Me.start*He),tt=Math.min(tt,(Me.start+Me.count)*He)),Ie!==null?(et=Math.max(et,0),tt=Math.min(tt,Ie.count)):ke!=null&&(et=Math.max(et,0),tt=Math.min(tt,ke.count));const mt=tt-et;if(mt<0||mt===1/0)return;qe.setup(K,V,Pe,re,Ie);let ht,nt=oe;if(Ie!==null&&(ht=Q.get(Ie),nt=Ue,nt.setIndex(ht)),K.isMesh)V.wireframe===!0?(ae.setLineWidth(V.wireframeLinewidth*De()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(K.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),ae.setLineWidth(ze*De()),K.isLineSegments?nt.setMode(U.LINES):K.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else K.isPoints?nt.setMode(U.POINTS):K.isSprite&&nt.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)To("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ze=K._multiDrawStarts,St=K._multiDrawCounts,Je=K._multiDrawCount,qt=Ie?Q.get(Ie).bytesPerElement:1,ni=de.get(V).currentProgram.getUniforms();for(let Ot=0;Ot<Je;Ot++)ni.setValue(U,"_gl_DrawID",Ot),nt.render(ze[Ot]/qt,St[Ot])}else if(K.isInstancedMesh)nt.renderInstances(et,mt,K.count);else if(re.isInstancedBufferGeometry){const ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,St=Math.min(re.instanceCount,ze);nt.renderInstances(et,mt,St)}else nt.render(et,mt)};function Ge(C,j,re){C.transparent===!0&&C.side===fn&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,Cn(C,j,re),C.side=Ci,C.needsUpdate=!0,Cn(C,j,re),C.side=fn):Cn(C,j,re)}this.compile=function(C,j,re=null){re===null&&(re=C),g=Le.get(re),g.init(j),x.push(g),re.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),C!==re&&C.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights();const V=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Me=K.material;if(Me)if(Array.isArray(Me))for(let we=0;we<Me.length;we++){const Pe=Me[we];Ge(Pe,re,K),V.add(Pe)}else Ge(Me,re,K),V.add(Me)}),g=x.pop(),V},this.compileAsync=function(C,j,re=null){const V=this.compile(C,j,re);return new Promise(K=>{function Me(){if(V.forEach(function(we){de.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){K(C);return}setTimeout(Me,10)}Ae.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ct=null;function ft(C){ct&&ct(C)}function xt(){Gt.stop()}function rn(){Gt.start()}const Gt=new up;Gt.setAnimationLoop(ft),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(C){ct=C,te.setAnimationLoop(C),C===null?Gt.stop():Gt.start()},te.addEventListener("sessionstart",xt),te.addEventListener("sessionend",rn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(j),j=te.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,j,R),g=Le.get(C,x.length),g.init(j),x.push(g),ie.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),N.setFromProjectionMatrix(ie),ne=this.localClippingEnabled,k=ce.init(this.clippingPlanes,ne),p=me.get(C,y.length),p.init(),y.push(p),te.enabled===!0&&te.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&xn(Me,j,-1/0,v.sortObjects)}xn(C,j,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Z,Y),fe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,fe&&Te.addToRenderList(p,C),this.info.render.frame++,k===!0&&ce.beginShadows();const re=g.state.shadowsArray;Se.render(re,C,j),k===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,K=p.transmissive;if(g.setupLights(),j.isArrayCamera){const Me=j.cameras;if(K.length>0)for(let we=0,Pe=Me.length;we<Pe;we++){const Ie=Me[we];ti(V,K,C,Ie)}fe&&Te.render(C);for(let we=0,Pe=Me.length;we<Pe;we++){const Ie=Me[we];Bn(p,C,Ie,Ie.viewport)}}else K.length>0&&ti(V,K,C,j),fe&&Te.render(C),Bn(p,C,j);R!==null&&T===0&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,j),qe.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(g=x[x.length-1],k===!0&&ce.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function xn(C,j,re,V){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||N.intersectsSprite(C)){V&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ie);const we=se.update(C),Pe=C.material;Pe.visible&&p.push(C,we,Pe,re,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||N.intersectsObject(C))){const we=se.update(C),Pe=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),_e.copy(we.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(ie)),Array.isArray(Pe)){const Ie=we.groups;for(let He=0,Ve=Ie.length;He<Ve;He++){const ke=Ie[He],et=Pe[ke.materialIndex];et&&et.visible&&p.push(C,we,et,re,_e.z,ke)}}else Pe.visible&&p.push(C,we,Pe,re,_e.z,null)}}const Me=C.children;for(let we=0,Pe=Me.length;we<Pe;we++)xn(Me[we],j,re,V)}function Bn(C,j,re,V){const K=C.opaque,Me=C.transmissive,we=C.transparent;g.setupLightsView(re),k===!0&&ce.setGlobalState(v.clippingPlanes,re),V&&ae.viewport(P.copy(V)),K.length>0&&sn(K,j,re),Me.length>0&&sn(Me,j,re),we.length>0&&sn(we,j,re),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ti(C,j,re,V){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new er(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?bs:Di,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Me=g.state.transmissionRenderTarget[V.id],we=V.viewport||P;Me.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),fe&&Te.render(re);const Ie=v.toneMapping;v.toneMapping=Zi;const He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),k===!0&&ce.setGlobalState(v.clippingPlanes,V),sn(C,re,V),A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ke=0,et=j.length;ke<et;ke++){const tt=j[ke],mt=tt.object,ht=tt.geometry,nt=tt.material,ze=tt.group;if(nt.side===fn&&mt.layers.test(V.layers)){const St=nt.side;nt.side=dn,nt.needsUpdate=!0,Lt(mt,re,V,ht,nt,ze),nt.side=St,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me))}v.setRenderTarget(Pe),v.setClearColor(F,G),He!==void 0&&(V.viewport=He),v.toneMapping=Ie}function sn(C,j,re){const V=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Me=C.length;K<Me;K++){const we=C[K],Pe=we.object,Ie=we.geometry,He=we.group;let Ve=we.material;Ve.allowOverride===!0&&V!==null&&(Ve=V),Pe.layers.test(re.layers)&&Lt(Pe,j,re,Ie,Ve,He)}}function Lt(C,j,re,V,K,Me){C.onBeforeRender(v,j,re,V,K,Me),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(v,j,re,V,C,Me),K.transparent===!0&&K.side===fn&&K.forceSinglePass===!1?(K.side=dn,K.needsUpdate=!0,v.renderBufferDirect(re,j,V,K,C,Me),K.side=Ci,K.needsUpdate=!0,v.renderBufferDirect(re,j,V,K,C,Me),K.side=fn):v.renderBufferDirect(re,j,V,K,C,Me),C.onAfterRender(v,j,re,V,K,Me)}function Cn(C,j,re){j.isScene!==!0&&(j=ve);const V=de.get(C),K=g.state.lights,Me=g.state.shadowsArray,we=K.state.version,Pe=he.getParameters(C,K.state,Me,j,re),Ie=he.getProgramCacheKey(Pe);let He=V.programs;V.environment=C.isMeshStandardMaterial?j.environment:null,V.fog=j.fog,V.envMap=(C.isMeshStandardMaterial?O:b).get(C.envMap||V.environment),V.envMapRotation=V.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Ne),He=new Map,V.programs=He);let Ve=He.get(Ie);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===we)return Pr(C,Pe),Ve}else Pe.uniforms=he.getUniforms(C),C.onBeforeCompile(Pe,v),Ve=he.acquireProgram(Pe,Ie),He.set(Ie,Ve),V.uniforms=Pe.uniforms;const ke=V.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=ce.uniform),Pr(C,Pe),V.needsLights=Lr(C),V.lightsStateVersion=we,V.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function Ls(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Eo.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Pr(C,j){const re=de.get(C);re.outputColorSpace=j.outputColorSpace,re.batching=j.batching,re.batchingColor=j.batchingColor,re.instancing=j.instancing,re.instancingColor=j.instancingColor,re.instancingMorph=j.instancingMorph,re.skinning=j.skinning,re.morphTargets=j.morphTargets,re.morphNormals=j.morphNormals,re.morphColors=j.morphColors,re.morphTargetsCount=j.morphTargetsCount,re.numClippingPlanes=j.numClippingPlanes,re.numIntersection=j.numClipIntersection,re.vertexAlphas=j.vertexAlphas,re.vertexTangents=j.vertexTangents,re.toneMapping=j.toneMapping}function el(C,j,re,V,K){j.isScene!==!0&&(j=ve),A.resetTextureUnits();const Me=j.fog,we=V.isMeshStandardMaterial?j.environment:null,Pe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:nn,Ie=(V.isMeshStandardMaterial?O:b).get(V.envMap||we),He=V.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ve=!!re.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ke=!!re.morphAttributes.position,et=!!re.morphAttributes.normal,tt=!!re.morphAttributes.color;let mt=Zi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=v.toneMapping);const ht=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,nt=ht!==void 0?ht.length:0,ze=de.get(V),St=g.state.lights;if(k===!0&&(ne===!0||C!==M)){const It=C===M&&V.id===S;ce.setState(V,C,It)}let Je=!1;V.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==St.state.version||ze.outputColorSpace!==Pe||K.isBatchedMesh&&ze.batching===!1||!K.isBatchedMesh&&ze.batching===!0||K.isBatchedMesh&&ze.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ze.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ze.instancing===!1||!K.isInstancedMesh&&ze.instancing===!0||K.isSkinnedMesh&&ze.skinning===!1||!K.isSkinnedMesh&&ze.skinning===!0||K.isInstancedMesh&&ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ze.instancingMorph===!1&&K.morphTexture!==null||ze.envMap!==Ie||V.fog===!0&&ze.fog!==Me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ce.numPlanes||ze.numIntersection!==ce.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Ve||ze.morphTargets!==ke||ze.morphNormals!==et||ze.morphColors!==tt||ze.toneMapping!==mt||ze.morphTargetsCount!==nt)&&(Je=!0):(Je=!0,ze.__version=V.version);let qt=ze.currentProgram;Je===!0&&(qt=Cn(V,j,K));let ni=!1,Ot=!1,Vt=!1;const dt=qt.getUniforms(),Bt=ze.uniforms;if(ae.useProgram(qt.program)&&(ni=!0,Ot=!0,Vt=!0),V.id!==S&&(S=V.id,Ot=!0),ni||M!==C){ae.buffers.depth.getReversed()?(X.copy(C.projectionMatrix),Ng(X),Og(X),dt.setValue(U,"projectionMatrix",X)):dt.setValue(U,"projectionMatrix",C.projectionMatrix),dt.setValue(U,"viewMatrix",C.matrixWorldInverse);const At=dt.map.cameraPosition;At!==void 0&&At.setValue(U,xe.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Ot=!0,Vt=!0)}if(K.isSkinnedMesh){dt.setOptional(U,K,"bindMatrix"),dt.setOptional(U,K,"bindMatrixInverse");const It=K.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(U,"boneTexture",It.boneTexture,A))}K.isBatchedMesh&&(dt.setOptional(U,K,"batchingTexture"),dt.setValue(U,"batchingTexture",K._matricesTexture,A),dt.setOptional(U,K,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",K._indirectTexture,A),dt.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",K._colorsTexture,A));const Ut=re.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&Ee.update(K,re,qt),(Ot||ze.receiveShadow!==K.receiveShadow)&&(ze.receiveShadow=K.receiveShadow,dt.setValue(U,"receiveShadow",K.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bt.envMap.value=Ie,Bt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&j.environment!==null&&(Bt.envMapIntensity.value=j.environmentIntensity),Ot&&(dt.setValue(U,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&La(Bt,Vt),Me&&V.fog===!0&&le.refreshFogUniforms(Bt,Me),le.refreshMaterialUniforms(Bt,V,H,q,g.state.transmissionRenderTarget[C.id]),Eo.upload(U,Ls(ze),Bt,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Eo.upload(U,Ls(ze),Bt,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(U,"center",K.center),dt.setValue(U,"modelViewMatrix",K.modelViewMatrix),dt.setValue(U,"normalMatrix",K.normalMatrix),dt.setValue(U,"modelMatrix",K.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const It=V.uniformsGroups;for(let At=0,Ui=It.length;At<Ui;At++){const kn=It[At];z.update(kn,qt),z.bind(kn,qt)}}return qt}function La(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Lr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,j,re){const V=de.get(C);V.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),de.get(C.texture).__webglTexture=j,de.get(C.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:re,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const re=de.get(C);re.__webglFramebuffer=j,re.__useDefaultFramebuffer=j===void 0};const Us=U.createFramebuffer();this.setRenderTarget=function(C,j=0,re=0){R=C,w=j,T=re;let V=!0,K=null,Me=!1,we=!1;if(C){const Ie=de.get(C);if(Ie.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Ie.__hasExternalTextures)A.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(Ie.__boundDepthTexture!==ke){if(ke!==null&&de.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const Ve=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[j])?K=Ve[j][re]:K=Ve[j],Me=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?K=de.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[re]:K=Ve,P.copy(C.viewport),D.copy(C.scissor),L=C.scissorTest}else P.copy(I).multiplyScalar(H).floor(),D.copy(W).multiplyScalar(H).floor(),L=ee;if(re!==0&&(K=Us),ae.bindFramebuffer(U.FRAMEBUFFER,K)&&V&&ae.drawBuffers(C,K),ae.viewport(P),ae.scissor(D),ae.setScissorTest(L),Me){const Ie=de.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,re)}else if(we){const Ie=de.get(C.texture),He=j;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,re,He)}else if(C!==null&&re!==0){const Ie=de.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,re)}S=-1},this.readRenderTargetPixels=function(C,j,re,V,K,Me,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){ae.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ie=C.texture,He=Ie.format,Ve=Ie.type;if(!Re.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-V&&re>=0&&re<=C.height-K&&U.readPixels(j,re,V,K,Fe.convert(He),Fe.convert(Ve),Me)}finally{const Ie=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,j,re,V,K,Me,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(j>=0&&j<=C.width-V&&re>=0&&re<=C.height-K){ae.bindFramebuffer(U.FRAMEBUFFER,Pe);const Ie=C.texture,He=Ie.format,Ve=Ie.type;if(!Re.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.bufferData(U.PIXEL_PACK_BUFFER,Me.byteLength,U.STREAM_READ),U.readPixels(j,re,V,K,Fe.convert(He),Fe.convert(Ve),0);const et=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,et);const tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Fg(U,tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Me),U.deleteBuffer(ke),U.deleteSync(tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,re=0){const V=Math.pow(2,-re),K=Math.floor(C.image.width*V),Me=Math.floor(C.image.height*V),we=j!==null?j.x:0,Pe=j!==null?j.y:0;A.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,re,0,0,we,Pe,K,Me),ae.unbindTexture()};const tl=U.createFramebuffer(),Ua=U.createFramebuffer();this.copyTextureToTexture=function(C,j,re=null,V=null,K=0,Me=null){Me===null&&(K!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=K,K=0):Me=0);let we,Pe,Ie,He,Ve,ke,et,tt,mt;const ht=C.isCompressedTexture?C.mipmaps[Me]:C.image;if(re!==null)we=re.max.x-re.min.x,Pe=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,He=re.min.x,Ve=re.min.y,ke=re.isBox3?re.min.z:0;else{const Ut=Math.pow(2,-K);we=Math.floor(ht.width*Ut),Pe=Math.floor(ht.height*Ut),C.isDataArrayTexture?Ie=ht.depth:C.isData3DTexture?Ie=Math.floor(ht.depth*Ut):Ie=1,He=0,Ve=0,ke=0}V!==null?(et=V.x,tt=V.y,mt=V.z):(et=0,tt=0,mt=0);const nt=Fe.convert(j.format),ze=Fe.convert(j.type);let St;j.isData3DTexture?(A.setTexture3D(j,0),St=U.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(A.setTexture2DArray(j,0),St=U.TEXTURE_2D_ARRAY):(A.setTexture2D(j,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,j.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,j.unpackAlignment);const Je=U.getParameter(U.UNPACK_ROW_LENGTH),qt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ni=U.getParameter(U.UNPACK_SKIP_PIXELS),Ot=U.getParameter(U.UNPACK_SKIP_ROWS),Vt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ht.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,He),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke);const dt=C.isDataArrayTexture||C.isData3DTexture,Bt=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Ut=de.get(C),It=de.get(j),At=de.get(Ut.__renderTarget),Ui=de.get(It.__renderTarget);ae.bindFramebuffer(U.READ_FRAMEBUFFER,At.__webglFramebuffer),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let kn=0;kn<Ie;kn++)dt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(C).__webglTexture,K,ke+kn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(j).__webglTexture,Me,mt+kn)),U.blitFramebuffer(He,Ve,we,Pe,et,tt,we,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||de.has(C)){const Ut=de.get(C),It=de.get(j);ae.bindFramebuffer(U.READ_FRAMEBUFFER,tl),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ua);for(let At=0;At<Ie;At++)dt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,K,ke+At):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,K),Bt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.__webglTexture,Me,mt+At):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,Me),K!==0?U.blitFramebuffer(He,Ve,we,Pe,et,tt,we,Pe,U.COLOR_BUFFER_BIT,U.NEAREST):Bt?U.copyTexSubImage3D(St,Me,et,tt,mt+At,He,Ve,we,Pe):U.copyTexSubImage2D(St,Me,et,tt,He,Ve,we,Pe);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Bt?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(St,Me,et,tt,mt,we,Pe,Ie,nt,ze,ht.data):j.isCompressedArrayTexture?U.compressedTexSubImage3D(St,Me,et,tt,mt,we,Pe,Ie,nt,ht.data):U.texSubImage3D(St,Me,et,tt,mt,we,Pe,Ie,nt,ze,ht):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Me,et,tt,we,Pe,nt,ze,ht.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Me,et,tt,ht.width,ht.height,nt,ht.data):U.texSubImage2D(U.TEXTURE_2D,Me,et,tt,we,Pe,nt,ze,ht);U.pixelStorei(U.UNPACK_ROW_LENGTH,Je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ni),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt),Me===0&&j.generateMipmaps&&U.generateMipmap(St),ae.unbindTexture()},this.copyTextureToTexture3D=function(C,j,re=null,V=null,K=0){return To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,re,V,K)},this.initRenderTarget=function(C){de.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),ae.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,ae.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function Ph(a,e){if(e===og)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Gc||e===zd){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=t.count-2,n=[];if(e===Gc)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class US extends Cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new VS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new zS(t)}),this.register(function(t){return new jS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new QS(t)})}load(e,t,i,n){const r=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=sa.extractUrlBase(e);s=sa.resolveURL(c,this.path)}else s=sa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new cp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r;const s={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mp){try{s[$e.KHR_BINARY_GLTF]=new $S(e)}catch(f){n&&n(f);return}r=JSON.parse(s[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new hM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,s[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case $e.KHR_MATERIALS_UNLIT:s[f]=new NS;break;case $e.KHR_DRACO_MESH_COMPRESSION:s[f]=new eM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:s[f]=new tM;break;case $e.KHR_MESH_QUANTIZATION:s[f]=new nM;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}}function IS(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class FS{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],nn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Da(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new I_(u),c.distance=f;break;case"spot":c=new L_(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class NS{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Xi}extendParams(e,t,i){const n=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],nn),e.opacity=s[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,wt))}return Promise.all(n)}}class OS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class BS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(o,o)}return Promise.all(r)}}class kS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class zS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}}class GS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],nn)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,wt)),s.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class VS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class HS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(o[0],o[1],o[2],nn),Promise.all(r)}}class WS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class XS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(o[0],o[1],o[2],nn),s.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,wt)),Promise.all(r)}}class YS{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}}class jS{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:di}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}}class qS{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}}class KS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZS{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JS{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,u=n.count,f=n.byteStride,h=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(u,f,h,n.mode,n.filter).then(function(d){return d.buffer}):s.ready.then(function(){const d=new ArrayBuffer(u*f);return s.decodeGltfBuffer(new Uint8Array(d),u,f,h,n.mode,n.filter),d})})}else return null}}class QS{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==Un.TRIANGLES&&c.mode!==Un.TRIANGLE_STRIP&&c.mode!==Un.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=i.extensions[this.name].attributes,o=[],l={};for(const c in s)o.push(this.parser.getDependency("accessor",s[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const _ of f){const m=new je,p=new J,g=new ir,y=new J(1,1,1),x=new d_(_.geometry,_.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,m.compose(p,g,y));for(const v in l)if(v==="_COLOR_0"){const E=l[v];x.instanceColor=new Fo(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(x,_),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const mp="glTF",Ks=12,Lh={JSON:1313821514,BIN:5130562};class $S{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ks),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ks,r=new DataView(e,Ks);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const l=r.getUint32(s,!0);if(s+=4,l===Lh.JSON){const c=new Uint8Array(e,Ks+s,o);this.content=i.decode(c)}else if(l===Lh.BIN){const c=Ks+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const u in s){const f=Xc[u]||u.toLowerCase();o[f]=s[u]}for(const u in e.attributes){const f=Xc[u]||u.toLowerCase();if(s[u]!==void 0){const h=i.accessors[e.attributes[u]],d=ss[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){n.decodeDracoFile(u,function(d){for(const _ in d.attributes){const m=d.attributes[_],p=l[_];p!==void 0&&(m.normalized=p)}f(d)},o,c,nn,h)})})}}class tM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class gp extends Ra{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[r+s];return t}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=n-t,f=(i-t)/u,h=f*f,d=h*f,_=e*c,m=_-c,p=-2*d+3*h,g=d-h,y=1-p,x=g-h+f;for(let v=0;v!==o;v++){const E=s[m+v+o],w=s[m+v+l]*u,T=s[_+v+o],R=s[_+v]*u;r[v]=y*E+x*w+p*T+g*R}return r}}const iM=new ir;class rM extends gp{interpolate_(e,t,i,n){const r=super.interpolate_(e,t,i,n);return iM.fromArray(r).normalize().toArray(r),r}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uh={9728:en,9729:$t,9984:Dd,9985:_o,9986:Qs,9987:bi},Ih={33071:Wi,33648:Lo,10497:$i},Wl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sM={CUBICSPLINE:void 0,LINEAR:ga,STEP:ma},Xl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aM(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new va({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ci})),a.DefaultMaterial}function fr(a,e,t){for(const i in t.extensions)a[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Mi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oM(a,e,t){let i=!1,n=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(n=!0),f.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):a.attributes.position;s.push(h)}if(n){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):a.attributes.normal;o.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):a.attributes.color;l.push(h)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(a.morphAttributes.position=u),n&&(a.morphAttributes.normal=f),r&&(a.morphAttributes.color=h),a.morphTargetsRelative=!0,a})}function lM(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)a.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cM(a){let e;const t=a.extensions&&a.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yl(t.attributes):e=a.indices+":"+Yl(a.attributes)+":"+a.mode,a.targets!==void 0)for(let i=0,n=a.targets.length;i<n;i++)e+=":"+Yl(a.targets[i]);return e}function Yl(a){let e="";const t=Object.keys(a).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+a[t[i]]+";";return e}function Yc(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uM(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fM=new je;class hM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new IS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);n=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&s<98?this.textureLoader=new Ru(this.options.manager):this.textureLoader=new B_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return fr(r,o,n),Mi(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),r=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,u]of s.children.entries())r(u,o.children[c])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(r,s){i.load(sa.resolveURL(t.uri,n.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=Wl[n.type],o=ss[n.componentType],l=n.normalized===!0,c=new o(n.count*s);return Promise.resolve(new tn(c,s,l))}const r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(s){const o=s[0],l=Wl[n.type],c=ss[n.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=n.byteOffset||0,d=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,_=n.normalized===!0;let m,p;if(d&&d!==f){const g=Math.floor(h/d),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+g+":"+n.count;let x=t.cache.get(y);x||(m=new c(o,g*d,n.count*d/u),x=new l_(m,d/u),t.cache.add(y,x)),p=new Eu(x,l,h%d/u,_)}else o===null?m=new c(n.count*l):m=new c(o,h,n.count*l),p=new tn(m,l,_);if(n.sparse!==void 0){const g=Wl.SCALAR,y=ss[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,E=new y(s[1],x,n.sparse.count*g),w=new c(s[2],v,n.sparse.count*l);o!==null&&(p=new tn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,R=E.length;T<R;T++){const S=E[T];if(p.setX(S,w[T*l]),l>=2&&p.setY(S,w[T*l+1]),l>=3&&p.setZ(S,w[T*l+2]),l>=4&&p.setW(S,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,s=t.images[r];let o=this.textureLoader;if(s.uri){const l=i.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const n=this,r=this.json,s=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=s.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[s.sampler]||{};return u.magFilter=Uh[h.magFilter]||$t,u.minFilter=Uh[h.minFilter]||bi,u.wrapS=Ih[h.wrapS]||$i,u.wrapT=Ih[h.wrapT]||$i,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==en&&u.minFilter!==$t,n.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const s=n.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:s.mimeType});return l=o.createObjectURL(h),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let _=h;t.isImageBitmapLoader===!0&&(_=function(m){const p=new Ct(m);p.needsUpdate=!0,h(p)}),t.load(sa.resolveURL(f,r.path),_,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),Mi(f,s),f.userData.mimeType=s.mimeType||uM(s.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,n){const r=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(s);s=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,l)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new np,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new tp,li.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||r||s){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return va}loadMaterial(e){const t=this,i=this.json,n=this.extensions,r=i.materials[e];let s;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const f=n[$e.KHR_MATERIALS_UNLIT];s=f.getMaterialType(),c.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new We(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],nn),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,wt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),s=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=fn);const u=r.alphaMode||Xl.OPAQUE;if(u===Xl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Xl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Xi&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&s!==Xi&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Xi){const f=r.emissiveFactor;o.emissive=new We().setRGB(f[0],f[1],f[2],nn)}return r.emissiveTexture!==void 0&&s!==Xi&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,wt)),Promise.all(c).then(function(){const f=new s(o);return r.name&&(f.name=r.name),Mi(f,r),t.associations.set(f,{materials:e}),r.extensions&&fr(n,f,r),f})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Fh(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=cM(c),f=n[u];if(f)s.push(f.promise);else{let h;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Fh(new Nn,c,t),n[u]={primitive:c,promise:h},s.push(h)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,r=i.meshes[e],s=r.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const u=s[l].material===void 0?aM(this.cache):this.getDependency("material",s[l].material);o.push(u)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,_=u.length;d<_;d++){const m=u[d],p=s[d];let g;const y=c[d];if(p.mode===Un.TRIANGLES||p.mode===Un.TRIANGLE_STRIP||p.mode===Un.TRIANGLE_FAN||p.mode===void 0)g=r.isSkinnedMesh===!0?new u_(m,y):new Rt(m,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),p.mode===Un.TRIANGLE_STRIP?g.geometry=Ph(g.geometry,zd):p.mode===Un.TRIANGLE_FAN&&(g.geometry=Ph(g.geometry,Gc));else if(p.mode===Un.LINES)g=new g_(m,y);else if(p.mode===Un.LINE_STRIP)g=new wu(m,y);else if(p.mode===Un.LINE_LOOP)g=new __(m,y);else if(p.mode===Un.POINTS)g=new v_(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&lM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Mi(g,r),p.extensions&&fr(n,g,p),t.assignFinalMaterial(g),f.push(g)}for(let d=0,_=f.length;d<_;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&fr(n,f[0],r),f[0];const h=new yr;r.extensions&&fr(n,h,r),t.associations.set(h,{meshes:e});for(let d=0,_=f.length;d<_;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(Ug.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Ca(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Mi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const r=n.pop(),s=n,o=[],l=[];for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f){o.push(f);const h=new je;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bu(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],l=[],c=[],u=[];for(let f=0,h=n.channels.length;f<h;f++){const d=n.channels[f],_=n.samplers[d.sampler],m=d.target,p=m.node,g=n.parameters!==void 0?n.parameters[_.input]:_.input,y=n.parameters!==void 0?n.parameters[_.output]:_.output;m.node!==void 0&&(s.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(_),u.push(m))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],_=f[2],m=f[3],p=f[4],g=[];for(let y=0,x=h.length;y<x;y++){const v=h[y],E=d[y],w=_[y],T=m[y],R=p[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=i._createAnimationTracks(v,E,w,T,R);if(S)for(let M=0;M<S.length;M++)g.push(S[M])}return new b_(r,void 0,g)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){const s=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),s=[],o=n.children||[];for(let c=0,u=o.length;c<u;c++)s.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,fM)});for(let d=0,_=f.length;d<_;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(c){return n._getNodeRef(n.cameraCache,r.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new $d:c.length>1?u=new yr:c.length===1?u=c[0]:u=new vt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=s),Mi(u,r),r.extensions&&fr(i,u,r),r.matrix!==void 0){const f=new je;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,r=new yr;i.name&&(r.name=n.createUniqueName(i.name)),Mi(r,i),i.extensions&&fr(t,r,i);const s=i.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(n.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of n.associations)(h instanceof li||h instanceof Ct)&&f.set(h,d);return u.traverse(h=>{const d=n.associations.get(h);d!=null&&f.set(h,d)}),f};return n.associations=c(r),r})}_createAnimationTracks(e,t,i,n,r){const s=[],o=e.name?e.name:e.uuid,l=[];Vi[r.path]===Vi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(o);let c;switch(Vi[r.path]){case Vi.weights:c=ms;break;case Vi.rotation:c=gs;break;case Vi.translation:case Vi.scale:c=_s;break;default:switch(i.itemSize){case 1:c=ms;break;case 2:case 3:default:c=_s;break}break}const u=n.interpolation!==void 0?sM[n.interpolation]:ga,f=this._getArrayFromAccessor(i);for(let h=0,d=l.length;h<d;h++){const _=new c(l[h]+"."+Vi[r.path],t.array,f,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),s.push(_)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Yc(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof gs?rM:gp;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dM(a,e,t){const i=e.attributes,n=new Qn;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new J(l[0],l[1],l[2]),new J(c[0],c[1],c[2])),o.normalized){const u=Yc(ss[o.componentType]);n.min.multiplyScalar(u),n.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new J,l=new J;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,_=h.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),h.normalized){const m=Yc(ss[h.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}a.boundingBox=n;const s=new $n;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,a.boundingSphere=s}function Fh(a,e,t){const i=e.attributes,n=[];function r(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in i){const o=Xc[s]||s.toLowerCase();o in a.attributes||n.push(r(i[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});n.push(s)}return rt.workingColorSpace!==nn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Mi(a,e),dM(a,e,t),Promise.all(n).then(function(){return e.targets!==void 0?oM(a,e.targets,t):a})}const pM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ko{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mM=new Ca(-1,1,1,-1,0,1);class gM extends Nn{constructor(){super(),this.setAttribute("position",new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zn([0,2,0,0,2,0],2))}}const _M=new gM;class vM{constructor(e){this._mesh=new Rt(_M,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Uu extends Ko{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Jn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tu.clone(e.uniforms),this.material=new Jn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vM(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nh extends Ko{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class xM extends Ko{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ze);this._width=i.width,this._height=i.height,t=new er(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Uu(pM),this.copyPass.material.blending=wi,this.clock=new z_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const s=this.passes[n];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nh!==void 0&&(s instanceof Nh?i=!0:s instanceof xM&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class SM extends Ko{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=n}}const MM={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ze(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};var TM=`uniform float progress;
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
}`;function Ti(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _p(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var An={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vs={duration:.5,overwrite:!1,delay:0},Iu,zt,pt,ci=1e8,Yt=1/ci,jc=Math.PI*2,EM=jc/4,bM=0,vp=Math.sqrt,AM=Math.cos,wM=Math.sin,Nt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},Pi=function(e){return typeof e=="number"},Fu=function(e){return typeof e>"u"},hi=function(e){return typeof e=="object"},pn=function(e){return e!==!1},Nu=function(){return typeof window<"u"},fo=function(e){return yt(e)||Nt(e)},xp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},jt=Array.isArray,qc=/(?:-?\.?\d|\.)+/gi,yp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sp=/[+-]=-?[.\d]+/,Mp=/[^,'"\[\]\s]+/gi,RM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,ri,Kc,Ou,wn={},Bo={},Tp,Ep=function(e){return(Bo=xs(e,wn))&&vn},Bu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xa=function(e,t){return!t&&console.warn(e)},bp=function(e,t){return e&&(wn[e]=t)&&Bo&&(Bo[e]=t)||wn},ya=function(){return 0},CM={suppressEvents:!0,isStart:!0,kill:!1},bo={suppressEvents:!0,kill:!1},DM={suppressEvents:!0},ku={},Ji=[],Zc={},Ap,Tn={},ql={},Oh=30,Ao=[],zu="",Gu=function(e){var t=e[0],i,n;if(hi(t)||yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Ao.length;n--&&!Ao[n].targetTest(t););i=Ao[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Zp(e[n],i)))||e.splice(n,1);return e},Mr=function(e){return e._gsap||Gu(Fn(e))[0]._gsap},wp=function(e,t,i){return(i=e[t])&&yt(i)?e[t]():Fu(i)&&e.getAttribute&&e.getAttribute(t)||i},mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},as=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},PM=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},ko=function(){var e=Ji.length,t=Ji.slice(0),i,n;for(Zc={},Ji.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Rp=function(e,t,i,n){Ji.length&&!zt&&ko(),e.render(t,i,zt&&t<0&&(e._initted||e._startAt)),Ji.length&&!zt&&ko()},Cp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mp).length<2?t:Nt(e)?e.trim():e},Dp=function(e){return e},Rn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},LM=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},xs=function(e,t){for(var i in t)e[i]=t[i];return e},Bh=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=hi(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},zo=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},aa=function(e){var t=e.parent||gt,i=e.keyframes?LM(jt(e.keyframes)):Rn;if(pn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},UM=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Pp=function(e,t,i,n,r){var s=e[n],o;if(r)for(o=t[r];s&&s[r]>o;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=s,t.parent=t._dp=e,t},Zo=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var r=t._prev,s=t._next;r?r._next=s:e[i]===t&&(e[i]=s),s?s._prev=r:e[n]===t&&(e[n]=r),t._next=t._prev=t.parent=null},tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},IM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jc=function(e,t,i,n){return e._startAt&&(zt?e._startAt.revert(bo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},FM=function a(e){return!e||e._ts&&a(e.parent)},kh=function(e){return e._repeat?ys(e._tTime,e=e.duration()+e._rDelay)*e:0},ys=function(e,t){var i=Math.floor(e=bt(e/t));return e&&i===e?i-1:i},Go=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Jo=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Yt)||0))},Qo=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Jo(e),i._dirty||Tr(i,e)),e},Lp=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Go(e.rawTime(),t),(!t._dur||Pa(0,t.totalDuration(),i)-t._tTime>Yt)&&t.render(i,!0)),Tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},ai=function(e,t,i,n){return t.parent&&tr(t),t._start=bt((Pi(i)?i:i||e!==gt?Ln(e,i,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pp(e,t,"_first","_last",e._sort?"_start":0),Qc(t)||(e._recent=t),n||Lp(e,t),e._ts<0&&Qo(e,e._tTime),e},Up=function(e,t){return(wn.ScrollTrigger||Bu("scrollTrigger",t))&&wn.ScrollTrigger.create(t,e)},Ip=function(e,t,i,n,r){if(Hu(e,t,r),!e._initted)return 1;if(!i&&e._pt&&!zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ap!==En.frame)return Ji.push(e),e._lazy=[r,n],1},NM=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Qc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},OM=function(e,t,i,n){var r=e.ratio,s=t<0||!t&&(!e._start&&NM(e)&&!(!e._initted&&Qc(e))||(e._ts<0||e._dp._ts<0)&&!Qc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Pa(0,e._tDur,t),u=ys(l,o),e._yoyo&&u&1&&(s=1-s),u!==ys(e._tTime,o)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||zt||n||e._zTime===Yt||!t&&e._zTime){if(!e._initted&&Ip(e,t,n,i,l))return;for(f=e._zTime,e._zTime=t||(i?Yt:0),i||(i=t&&!f),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;t<0&&Jc(e,t,i,!0),e._onUpdate&&!i&&bn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&tr(e,1),!i&&!zt&&(bn(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},BM=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Ss=function(e,t,i,n){var r=e._repeat,s=bt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:bt(s*(r+1)+e._rDelay*r):s,o>0&&!n&&Qo(e,e._tTime=e._tDur*o),e.parent&&Jo(e),i||Tr(e.parent,e),e},zh=function(e){return e instanceof Qt?Tr(e):Ss(e,e._dur)},kM={_start:0,endTime:ya,totalDuration:ya},Ln=function a(e,t,i){var n=e.labels,r=e._recent||kM,s=e.duration()>=ci?r.endTime(!1):e._dur,o,l,c;return Nt(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=s),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(jt(i)?i[0]:i).totalDuration()),o>1?a(e,t.substr(0,o-1),i)+l:s+l)):t==null?s:+t},oa=function(e,t,i){var n=Pi(t[1]),r=(n?2:1)+(e<2?0:1),s=t[r],o,l;if(n&&(s.duration=t[1]),s.parent=i,e){for(o=s,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;s.immediateRender=pn(o.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new Et(t[0],s,t[r+1])},rr=function(e,t){return e||e===0?t(e):t},Pa=function(e,t,i){return i<e?e:i>t?t:i},Xt=function(e,t){return!Nt(e)||!(t=RM.exec(e))?"":t[1]},zM=function(e,t,i){return rr(i,function(n){return Pa(e,t,n)})},$c=[].slice,Fp=function(e,t){return e&&hi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&hi(e[0]))&&!e.nodeType&&e!==ri},GM=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var r;return Nt(n)&&!t||Fp(n,1)?(r=i).push.apply(r,Fn(n)):i.push(n)})||i},Fn=function(e,t,i){return pt&&!t&&pt.selector?pt.selector(e):Nt(e)&&!i&&(Kc||!Ms())?$c.call((t||Ou).querySelectorAll(e),0):jt(e)?GM(e,i):Fp(e)?$c.call(e,0):e?[e]:[]},eu=function(e){return e=Fn(e)[0]||xa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fn(t,i.querySelectorAll?i:i===e?xa("Invalid scope")||Ou.createElement("div"):e)}},Np=function(e){return e.sort(function(){return .5-Math.random()})},Op=function(e){if(yt(e))return e;var t=hi(e)?e:{each:e},i=Er(t.ease),n=t.from||0,r=parseFloat(t.base)||0,s={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,u=n,f=n;return Nt(n)?u=f={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(u=n[0],f=n[1]),function(h,d,_){var m=(_||t).length,p=s[m],g,y,x,v,E,w,T,R,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,ci])[1],!S){for(T=-1e8;T<(T=_[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(p=s[m]=[],g=l?Math.min(S,m)*u-.5:n%S,y=S===ci?0:l?m*f/S-.5:n/S|0,T=0,R=ci,w=0;w<m;w++)x=w%S-g,v=y-(w/S|0),p[w]=E=c?Math.abs(c==="y"?v:x):vp(x*x+v*v),E>T&&(T=E),E<R&&(R=E);n==="random"&&Np(p),p.max=T-R,p.min=R,p.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:c?c==="y"?m/S:S:Math.max(S,m/S))||0)*(n==="edges"?-1:1),p.b=m<0?r-m:r,p.u=Xt(t.amount||t.each)||0,i=i&&m<0?jp(i):i}return m=(p[h]-p.min)/p.max||0,bt(p.b+(i?i(m):m)*p.v)+p.u}},tu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=bt(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Pi(i)?0:Xt(i))}},Bp=function(e,t){var i=jt(e),n,r;return!i&&hi(e)&&(n=i=e.radius||ci,e.values?(e=Fn(e.values),(r=!Pi(e[0]))&&(n*=n)):e=tu(e.increment)),rr(t,i?yt(e)?function(s){return r=e(s),Math.abs(r-s)<=n?r:s}:function(s){for(var o=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=ci,u=0,f=e.length,h,d;f--;)r?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!n||c<=n?e[u]:s,r||u===s||Pi(s)?u:u+Xt(s)}:tu(e))},kp=function(e,t,i,n){return rr(jt(e)?!t:i===!0?!!(i=0):!n,function(){return jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},VM=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(r,s){return s(r)},n)}},HM=function(e,t){return function(i){return e(parseFloat(i))+(t||Xt(i))}},WM=function(e,t,i){return Gp(e,t,0,1,i)},zp=function(e,t,i){return rr(i,function(n){return e[~~t(n)]})},XM=function a(e,t,i){var n=t-e;return jt(e)?zp(e,a(0,e.length),t):rr(i,function(r){return(n+(r-e)%n)%n+e})},YM=function a(e,t,i){var n=t-e,r=n*2;return jt(e)?zp(e,a(0,e.length-1),t):rr(i,function(s){return s=(r+(s-e)%r)%r||0,e+(s>n?r-s:s)})},Sa=function(e){for(var t=0,i="",n,r,s,o;~(n=e.indexOf("random(",t));)s=e.indexOf(")",n),o=e.charAt(n+7)==="[",r=e.substr(n+7,s-n-7).match(o?Mp:qc),i+=e.substr(t,n-t)+kp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=s+1;return i+e.substr(t,e.length-t)},Gp=function(e,t,i,n,r){var s=t-e,o=n-i;return rr(r,function(l){return i+((l-e)/s*o||0)})},jM=function a(e,t,i,n){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var s=Nt(e),o={},l,c,u,f,h;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(jt(e)&&!jt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(a(e[c-1],e[c]));f--,r=function(_){_*=f;var m=Math.min(h,~~_);return u[m](_-m)},i=t}else n||(e=xs(jt(e)?[]:{},e));if(!u){for(l in t)Vu.call(o,e,l,"get",t[l]);r=function(_){return Yu(_,o)||(s?e.p:e)}}}return rr(i,r)},Gh=function(e,t,i){var n=e.labels,r=ci,s,o,l;for(s in n)o=n[s]-t,o<0==!!i&&o&&r>(o=Math.abs(o))&&(l=s,r=o);return l},bn=function(e,t,i){var n=e.vars,r=n[t],s=pt,o=e._ctx,l,c,u;if(r)return l=n[t+"Params"],c=n.callbackScope||e,i&&Ji.length&&ko(),o&&(pt=o),u=l?r.apply(c,l):r.call(c),pt=s,u},ea=function(e){return tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zt),e.progress()<1&&bn(e,"onInterrupt"),e},ns,Vp=[],Hp=function(e){if(e)if(e=!e.name&&e.default||e,Nu()||e.headless){var t=e.name,i=yt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,r={init:ya,render:Yu,add:Vu,kill:cT,modifier:lT,rawVars:0},s={targetTest:0,get:0,getSetter:Xu,aliases:{},register:0};if(Ms(),e!==n){if(Tn[t])return;Rn(n,Rn(zo(e,r),s)),xs(n.prototype,xs(r,zo(e,s))),Tn[n.prop=t]=n,e.targetTest&&(Ao.push(n),ku[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bp(t,n),e.register&&e.register(vn,n,gn)}else Vp.push(e)},ut=255,ta={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},Kl=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ut+.5|0},Wp=function(e,t,i){var n=e?Pi(e)?[e>>16,e>>8&ut,e&ut]:0:ta.black,r,s,o,l,c,u,f,h,d,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ta[e])n=ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),o=e.charAt(3),e="#"+r+r+s+s+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ut,n&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(qc),!t)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,n.length>3&&(n[3]*=1),n[0]=Kl(l+1/3,r,s),n[1]=Kl(l,r,s),n[2]=Kl(l-1/3,r,s);else if(~e.indexOf("="))return n=e.match(yp),i&&n.length<4&&(n[3]=1),n}else n=e.match(qc)||ta.transparent;n=n.map(Number)}return t&&!_&&(r=n[0]/ut,s=n[1]/ut,o=n[2]/ut,f=Math.max(r,s,o),h=Math.min(r,s,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===r?(s-o)/d+(s<o?6:0):f===s?(o-r)/d+2:(r-s)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},Xp=function(e){var t=[],i=[],n=-1;return e.split(Qi).forEach(function(r){var s=r.match(ts)||[];t.push.apply(t,s),i.push(n+=s.length+1)}),t.c=i,t},Vh=function(e,t,i){var n="",r=(e+n).match(Qi),s=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return e;if(r=r.map(function(h){return(h=Wp(h,t,1))&&s+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Xp(e),l=i.c,l.join(n)!==u.c.join(n)))for(c=e.replace(Qi,"1").split(ts),f=c.length-1;o<f;o++)n+=c[o]+(~l.indexOf(o)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:i).shift());if(!c)for(c=e.split(Qi),f=c.length-1;o<f;o++)n+=c[o]+r[o];return n+c[f]},Qi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ta)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),qM=/hsl[a]?\(/,Yp=function(e){var t=e.join(" "),i;if(Qi.lastIndex=0,Qi.test(t))return i=qM.test(t),e[1]=Vh(e[1],i),e[0]=Vh(e[0],i,Xp(e[1])),!0},Ma,En=function(){var a=Date.now,e=500,t=33,i=a(),n=i,r=1e3/240,s=r,o=[],l,c,u,f,h,d,_=function m(p){var g=a()-n,y=p===!0,x,v,E,w;if((g>e||g<0)&&(i+=g-t),n+=g,E=n-i,x=E-s,(x>0||y)&&(w=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,s+=x+(x>=r?4:r-x),v=1),y||(l=c(m)),v)for(d=0;d<o.length;d++)o[d](E,h,w,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Tp&&(!Kc&&Nu()&&(ri=Kc=window,Ou=ri.document||{},wn.gsap=vn,(ri.gsapVersions||(ri.gsapVersions=[])).push(vn.version),Ep(Bo||ri.GreenSockGlobals||!ri.gsap&&ri||{}),Vp.forEach(Hp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,s-f.time*1e3+1|0)},Ma=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ma=0,c=ya},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),s=f.time*1e3+r},add:function(p,g,y){var x=g?function(v,E,w,T){p(v,E,w,T),f.remove(x)}:p;return f.remove(p),o[y?"unshift":"push"](x),Ms(),x},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},f}(),Ms=function(){return!Ma&&En.wake()},it={},KM=/^[\d.\-M][\d.\-,\s]/,ZM=/["']/g,JM=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],r=1,s=i.length,o,l,c;r<s;r++)l=i[r],o=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(ZM,"").trim():+c,n=l.substr(o+1).trim();return t},QM=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},$M=function(e){var t=(e+"").split("("),i=it[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[JM(t[1])]:QM(e).split(",").map(Cp)):it._CE&&KM.test(e)?it._CE("",e):i},jp=function(e){return function(t){return 1-e(1-t)}},qp=function a(e,t){for(var i=e._first,n;i;)i instanceof Qt?a(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?a(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Er=function(e,t){return e&&(yt(e)?e:it[e]||$M(e))||t},Dr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:i,easeInOut:n},s;return mn(e,function(o){it[o]=wn[o]=r,it[s=o.toLowerCase()]=i;for(var l in r)it[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=r[l]}),r},Kp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zl=function a(e,t,i){var n=t>=1?t:1,r=(i||(e?.3:.45))/(t<1?t:1),s=r/jc*(Math.asin(1/n)||0),o=function(u){return u===1?1:n*Math.pow(2,-10*u)*wM((u-s)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Kp(o);return r=jc/r,l.config=function(c,u){return a(e,c,u)},l},Jl=function a(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},n=e==="out"?i:e==="in"?function(r){return 1-i(1-r)}:Kp(i);return n.config=function(r){return a(e,r)},n};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Dr(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Dr("Elastic",Zl("in"),Zl("out"),Zl());(function(a,e){var t=1/e,i=2*t,n=2.5*t,r=function(o){return o<t?a*o*o:o<i?a*Math.pow(o-1.5/e,2)+.75:o<n?a*(o-=2.25/e)*o+.9375:a*Math.pow(o-2.625/e,2)+.984375};Dr("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Dr("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Dr("Circ",function(a){return-(vp(1-a*a)-1)});Dr("Sine",function(a){return a===1?1:-AM(a*EM)+1});Dr("Back",Jl("in"),Jl("out"),Jl());it.SteppedEase=it.steps=wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),r=t?1:0,s=1-Yt;return function(o){return((n*Pa(0,s,o)|0)+r)*i}}};vs.ease=it["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return zu+=a+","+a+"Params,"});var Zp=function(e,t){this.id=bM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wp,this.set=t?t.getSetter:Xu},Ta=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ss(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),Ma||En.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ss(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Ms(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Qo(this,i),!r._dp||r.parent||Lp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ai(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Yt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Rp(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+kh(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+kh(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*r,n):this._repeat?ys(this._tTime,r)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Go(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Pa(-Math.abs(this._delay),this._tDur,r),n!==!1),Jo(this),IM(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Yt&&(this._tTime-=Yt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ai(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(pn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Go(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=DM);var n=zt;return zt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),zt=n,this},e.globalTime=function(i){for(var n=this,r=arguments.length?i:n.rawTime();n;)r=n._start+r/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):r},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,zh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,zh(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Ln(this,i),pn(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,pn(n)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,r;return!!(!i||this._ts&&this._initted&&i.isActive()&&(r=i.rawTime(!0))>=n&&r<this.endTime(!0)-Yt)},e.eventCallback=function(i,n,r){var s=this.vars;return arguments.length>1?(n?(s[i]=n,r&&(s[i+"Params"]=r),i==="onUpdate"&&(this._onUpdate=n)):delete s[i],this):s[i]},e.then=function(i){var n=this;return new Promise(function(r){var s=yt(i)?i:Dp,o=function(){var c=n.then;n.then=null,yt(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=c),r(s),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){ea(this)},a}();Rn(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Qt=function(a){_p(e,a);function e(i,n){var r;return i===void 0&&(i={}),r=a.call(this,i)||this,r.labels={},r.smoothChildTiming=!!i.smoothChildTiming,r.autoRemoveChildren=!!i.autoRemoveChildren,r._sort=pn(i.sortChildren),gt&&ai(i.parent||gt,Ti(r),n),i.reversed&&r.reverse(),i.paused&&r.paused(!0),i.scrollTrigger&&Up(Ti(r),i.scrollTrigger),r}var t=e.prototype;return t.to=function(n,r,s){return oa(0,arguments,this),this},t.from=function(n,r,s){return oa(1,arguments,this),this},t.fromTo=function(n,r,s,o){return oa(2,arguments,this),this},t.set=function(n,r,s){return r.duration=0,r.parent=this,aa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Et(n,r,Ln(this,s),1),this},t.call=function(n,r,s){return ai(this,Et.delayedCall(0,n,r),s)},t.staggerTo=function(n,r,s,o,l,c,u){return s.duration=r,s.stagger=s.stagger||o,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Et(n,s,Ln(this,l)),this},t.staggerFrom=function(n,r,s,o,l,c,u){return s.runBackwards=1,aa(s).immediateRender=pn(s.immediateRender),this.staggerTo(n,r,s,o,l,c,u)},t.staggerFromTo=function(n,r,s,o,l,c,u,f){return o.startAt=s,aa(o).immediateRender=pn(o.immediateRender),this.staggerTo(n,r,o,l,c,u,f)},t.render=function(n,r,s){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:bt(n),f=this._zTime<0!=n<0&&(this._initted||!c),h,d,_,m,p,g,y,x,v,E,w,T;if(this!==gt&&u>l&&n>=0&&(u=l),u!==this._tTime||s||f){if(o!==this._time&&c&&(u+=this._time-o,n+=this._time-o),h=u,v=this._start,x=this._ts,g=!x,f&&(c||(o=this._zTime),(n||!r)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,r,s);if(h=bt(u%p),u===l?(m=this._repeat,h=c):(E=bt(u/p),m=~~E,m&&m===E&&(h=c,m--),h>c&&(h=c)),E=ys(this._tTime,p),!o&&this._tTime&&E!==m&&this._tTime-E*p-this._dur<=0&&(E=m),w&&m&1&&(h=c-h,T=1),m!==E&&!this._lock){var R=w&&E&1,S=R===(w&&m&1);if(m<E&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(T?0:bt(m*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&bn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;qp(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=BM(this,bt(o),bt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&!r&&!m&&(bn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&n>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,s);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,r,s),h!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var M=n<0?n:h;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,r,s);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,s||zt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!g){y=0,_&&(u+=this._zTime=M?-1e-8:Yt);break}}d=_}}if(y&&!r&&(this.pause(),y.render(h>=o?0:-1e-8)._zTime=h>=o?1:-1,this._ts))return this._start=v,Jo(this),this.render(n,r,s);this._onUpdate&&!r&&bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&tr(this,1),!r&&!(n<0&&!o)&&(u||o||!l)&&(bn(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,r){var s=this;if(Pi(r)||(r=Ln(this,r,n)),!(n instanceof Ta)){if(jt(n))return n.forEach(function(o){return s.add(o,r)}),this;if(Nt(n))return this.addLabel(n,r);if(yt(n))n=Et.delayedCall(0,n);else return this}return this!==n?ai(this,n,r):this},t.getChildren=function(n,r,s,o){n===void 0&&(n=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?r&&l.push(c):(s&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(n){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===n)return r[s]},t.remove=function(n){return Nt(n)?this.removeLabel(n):yt(n)?this.killTweensOf(n):(n.parent===this&&Zo(this,n),n===this._recent&&(this._recent=this._last),Tr(this))},t.totalTime=function(n,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(En.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),a.prototype.totalTime.call(this,n,r),this._forcing=0,this):this._tTime},t.addLabel=function(n,r){return this.labels[n]=Ln(this,r),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,r,s){var o=Et.delayedCall(0,r||ya,s);return o.data="isPause",this._hasPause=1,ai(this,o,Ln(this,n))},t.removePause=function(n){var r=this._first;for(n=Ln(this,n);r;)r._start===n&&r.data==="isPause"&&tr(r),r=r._next},t.killTweensOf=function(n,r,s){for(var o=this.getTweensOf(n,s),l=o.length;l--;)ji!==o[l]&&o[l].kill(n,r);return this},t.getTweensOf=function(n,r){for(var s=[],o=Fn(n),l=this._first,c=Pi(r),u;l;)l instanceof Et?PM(l._targets,o)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(o,r)).length&&s.push.apply(s,u),l=l._next;return s},t.tweenTo=function(n,r){r=r||{};var s=this,o=Ln(s,n),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Et.to(s,Rn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale())||Yt,onStart:function(){if(s.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:s._time))/s.timeScale());_._dur!==p&&Ss(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},r));return h?_.render(0):_},t.tweenFromTo=function(n,r,s){return this.tweenTo(r,Rn({startAt:{time:Ln(this,n)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Gh(this,Ln(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Gh(this,Ln(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Yt)},t.shiftChildren=function(n,r,s){s===void 0&&(s=0);for(var o=this._first,l=this.labels,c;o;)o._start>=s&&(o._start+=n,o._end+=n),o=o._next;if(r)for(c in l)l[c]>=s&&(l[c]+=n);return Tr(this)},t.invalidate=function(n){var r=this._first;for(this._lock=0;r;)r.invalidate(n),r=r._next;return a.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Tr(this)},t.totalDuration=function(n){var r=0,s=this,o=s._last,l=ci,c,u,f;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(f=s.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&s._sort&&o._ts&&!s._lock?(s._lock=1,ai(s,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!s._dp||f&&f.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ss(s,s===gt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(n){if(gt._ts&&(Rp(gt,Go(n,gt)),Ap=En.frame),En.frame>=Oh){Oh+=An.autoSleep||120;var r=gt._first;if((!r||!r._ts)&&An.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},e}(Ta);Rn(Qt.prototype,{_lock:0,_hasPause:0,_forcing:0});var eT=function(e,t,i,n,r,s,o){var l=new gn(this._pt,e,t,0,1,nm,null,r),c=0,u=0,f,h,d,_,m,p,g,y;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Sa(n)),s&&(y=[i,n],s(y,e,t),i=y[0],n=y[1]),h=i.match(jl)||[];f=jl.exec(n);)_=f[0],m=n.substring(c,f.index),d?d=(d+1)%5:m.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:m||u===1?m:",",s:p,c:_.charAt(1)==="="?as(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=jl.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Sp.test(n)||g)&&(l.e=0),this._pt=l,l},Vu=function(e,t,i,n,r,s,o,l,c,u){yt(n)&&(n=n(r||0,e,s));var f=e[t],h=i!=="get"?i:yt(f)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=yt(f)?c?sT:em:Wu,_;if(Nt(n)&&(~n.indexOf("random(")&&(n=Sa(n)),n.charAt(1)==="="&&(_=as(h,n)+(Xt(h)||0),(_||_===0)&&(n=_))),!u||h!==n||nu)return!isNaN(h*n)&&n!==""?(_=new gn(this._pt,e,t,+h||0,n-(h||0),typeof f=="boolean"?oT:tm,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Bu(t,n),eT.call(this,e,t,h,n,d,l||An.stringFilter,c))},tT=function(e,t,i,n,r){if(yt(e)&&(e=la(e,r,t,i,n)),!hi(e)||e.style&&e.nodeType||jt(e)||xp(e))return Nt(e)?la(e,r,t,i,n):e;var s={},o;for(o in e)s[o]=la(e[o],r,t,i,n);return s},Jp=function(e,t,i,n,r,s){var o,l,c,u;if(Tn[e]&&(o=new Tn[e]).init(r,o.rawVars?t[e]:tT(t[e],n,r,s,i),i,n,s)!==!1&&(i._pt=l=new gn(i._pt,r,e,0,1,o.render,o,0,o.priority),i!==ns))for(c=i._ptLookup[i._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ji,nu,Hu=function a(e,t,i){var n=e.vars,r=n.ease,s=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,f=n.yoyoEase,h=n.keyframes,d=n.autoRevert,_=e._dur,m=e._startAt,p=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:p,x=e._overwrite==="auto"&&!Iu,v=e.timeline,E,w,T,R,S,M,P,D,L,F,G,B,q;if(v&&(!h||!r)&&(r="none"),e._ease=Er(r,vs.ease),e._yEase=f?jp(Er(f===!0?r:f,vs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!n.runBackwards,!v||h&&!n.stagger){if(D=p[0]?Mr(p[0]).harness:0,B=D&&n[D.prop],E=zo(n,ku),m&&(m._zTime<0&&m.progress(1),t<0&&u&&o&&!d?m.render(-1,!0):m.revert(u&&_?bo:CM),m._lazy=0),s){if(tr(e._startAt=Et.set(p,Rn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!m&&pn(l),startAt:null,delay:0,onUpdate:c&&function(){return bn(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt||!o&&!d)&&e._startAt.revert(bo),o&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!m){if(t&&(o=!1),T=Rn({overwrite:!1,data:"isFromStart",lazy:o&&!m&&pn(l),immediateRender:o,stagger:0,parent:g},E),B&&(T[D.prop]=B),tr(e._startAt=Et.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zt?e._startAt.revert(bo):e._startAt.render(-1,!0)),e._zTime=t,!o)a(e._startAt,Yt,Yt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&pn(l)||l&&!_,w=0;w<p.length;w++){if(S=p[w],P=S._gsap||Gu(p)[w]._gsap,e._ptLookup[w]=F={},Zc[P.id]&&Ji.length&&ko(),G=y===p?w:y.indexOf(S),D&&(L=new D).init(S,B||E,e,G,y)!==!1&&(e._pt=R=new gn(e._pt,S,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(H){F[H]=R}),L.priority&&(M=1)),!D||B)for(T in E)Tn[T]&&(L=Jp(T,E,e,G,S,y))?L.priority&&(M=1):F[T]=R=Vu.call(e,S,T,"get",E[T],G,y,0,n.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(ji=e,gt.killTweensOf(S,F,e.globalTime(t)),q=!e.parent,ji=0),e._pt&&l&&(Zc[P.id]=1)}M&&im(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&v.render(ci,!0,!0)},nT=function(e,t,i,n,r,s,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nu=1,e.vars[t]="+=0",Hu(e,o),nu=0,l?xa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(n||n===0)&&!r?n:u.s+(n||0)+s*u.c,u.c=i-u.s,f.e&&(f.e=Mt(i)+Xt(f.e)),f.b&&(f.b=u.s+Xt(f.b))},iT=function(e,t){var i=e[0]?Mr(e[0]).harness:0,n=i&&i.aliases,r,s,o,l;if(!n)return t;r=xs({},t);for(s in n)if(s in r)for(l=n[s].split(","),o=l.length;o--;)r[l[o]]=r[s];return r},rT=function(e,t,i,n){var r=t.ease||n||"power1.inOut",s,o;if(jt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(e),v:t[s],e:r})},la=function(e,t,i,n,r){return yt(e)?e.call(t,i,n,r):Nt(e)&&~e.indexOf("random(")?Sa(e):e},Qp=zu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$p={};mn(Qp+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return $p[a]=1});var Et=function(a){_p(e,a);function e(i,n,r,s){var o;typeof n=="number"&&(r.duration=n,n=r,r=null),o=a.call(this,s?n:aa(n))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,m=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,y=n.parent||gt,x=(jt(i)||xp(i)?Pi(i[0]):"length"in n)?[i]:Fn(i),v,E,w,T,R,S,M,P;if(o._targets=x.length?Gu(x):xa("GSAP target "+i+" not found. https://gsap.com",!An.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||fo(c)||fo(u)){if(n=o.vars,v=o.timeline=new Qt({data:"nested",defaults:m||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=Ti(o),v._start=0,h||fo(c)||fo(u)){if(T=x.length,M=h&&Op(h),hi(h))for(R in h)~Qp.indexOf(R)&&(P||(P={}),P[R]=h[R]);for(E=0;E<T;E++)w=zo(n,$p),w.stagger=0,g&&(w.yoyoEase=g),P&&xs(w,P),S=x[E],w.duration=+la(c,Ti(o),E,S,x),w.delay=(+la(u,Ti(o),E,S,x)||0)-o._delay,!h&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(S,w,M?M(E,S,x):0),v._ease=it.none;v.duration()?c=u=0:o.timeline=0}else if(_){aa(Rn(v.vars.defaults,{ease:"none"})),v._ease=Er(_.ease||n.ease||"none");var D=0,L,F,G;if(jt(_))_.forEach(function(B){return v.to(x,B,">")}),v.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||rT(R,_[R],w,_.easeEach);for(R in w)for(L=w[R].sort(function(B,q){return B.t-q.t}),D=0,E=0;E<L.length;E++)F=L[E],G={ease:F.e,duration:(F.t-(E?L[E-1].t:0))/100*c},G[R]=F.v,v.to(x,G,D),D+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Iu&&(ji=Ti(o),gt.killTweensOf(x),ji=0),ai(y,Ti(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(f||!c&&!_&&o._start===bt(y._time)&&pn(f)&&FM(Ti(o))&&y.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),p&&Up(Ti(o),p),o}var t=e.prototype;return t.render=function(n,r,s){var o=this._time,l=this._tDur,c=this._dur,u=n<0,f=n>l-Yt&&!u?l:n<Yt?0:n,h,d,_,m,p,g,y,x,v;if(!c)OM(this,n,r,s);else if(f!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,x=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(m*100+n,r,s);if(h=bt(f%m),f===l?(_=this._repeat,h=c):(p=bt(f/m),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),g=this._yoyo&&_&1,g&&(v=this._yEase,h=c-h),p=ys(this._tTime,m),h===o&&!s&&this._initted&&_===p)return this._tTime=f,this;_!==p&&(x&&this._yEase&&qp(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&h!==m&&this._initted&&(this._lock=s=1,this.render(bt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ip(this,u?n:h,s,r,f))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(n,r,s)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!o&&!r&&!_&&(bn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(n<0?n:x._dur*x._ease(h/this._dur),r,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!r&&(u&&Jc(this,n,r,s),bn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Jc(this,n,!0,!0),(n||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&tr(this,1),!r&&!(u&&!o)&&(f||o||g)&&(bn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),a.prototype.invalidate.call(this,n)},t.resetTo=function(n,r,s,o,l){Ma||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Hu(this,c),u=this._ease(c/this._dur),nT(this,n,r,s,o,u,c,l)?this.resetTo(n,r,s,o,1):(Qo(this,0),this.parent||Pp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,r){if(r===void 0&&(r="all"),!n&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,r,ji&&ji.vars.overwrite!==!0)._first||ea(this),this.parent&&s!==this.timeline.totalDuration()&&Ss(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,l=n?Fn(n):o,c=this._ptLookup,u=this._pt,f,h,d,_,m,p,g;if((!r||r==="all")&&UM(o,l))return r==="all"&&(this._pt=0),ea(this);for(f=this._op=this._op||[],r!=="all"&&(Nt(r)&&(m={},mn(r,function(y){return m[y]=1}),r=m),r=iT(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){h=c[g],r==="all"?(f[g]=r,_=h,d={}):(d=f[g]=f[g]||{},_=r);for(m in _)p=h&&h[m],p&&((!("kill"in p.d)||p.d.kill(m)===!0)&&Zo(this,p,"_pt"),delete h[m]),d!=="all"&&(d[m]=1)}return this._initted&&!this._pt&&u&&ea(this),this},e.to=function(n,r){return new e(n,r,arguments[2])},e.from=function(n,r){return oa(1,arguments)},e.delayedCall=function(n,r,s,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},e.fromTo=function(n,r,s){return oa(2,arguments)},e.set=function(n,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(n,r)},e.killTweensOf=function(n,r,s){return gt.killTweensOf(n,r,s)},e}(Ta);Rn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(a){Et[a]=function(){var e=new Qt,t=$c.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Wu=function(e,t,i){return e[t]=i},em=function(e,t,i){return e[t](i)},sT=function(e,t,i,n){return e[t](n.fp,i)},aT=function(e,t,i){return e.setAttribute(t,i)},Xu=function(e,t){return yt(e[t])?em:Fu(e[t])&&e.setAttribute?aT:Wu},tm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},oT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nm=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Yu=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},lT=function(e,t,i,n){for(var r=this._pt,s;r;)s=r._next,r.p===n&&r.modifier(e,t,i),r=s},cT=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Zo(this,t,"_pt"):t.dep||(i=1),t=n;return!i},uT=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},im=function(e){for(var t=e._pt,i,n,r,s;t;){for(i=t._next,n=r;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:s)?t._prev._next=t:r=t,(t._next=n)?n._prev=t:s=t,t=i}e._pt=r},gn=function(){function a(t,i,n,r,s,o,l,c,u){this.t=i,this.s=r,this.c=s,this.p=n,this.r=o||tm,this.d=l||this,this.set=c||Wu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,n,r){this.mSet=this.mSet||this.set,this.set=uT,this.m=i,this.mt=r,this.tween=n},a}();mn(zu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return ku[a]=1});wn.TweenMax=wn.TweenLite=Et;wn.TimelineLite=wn.TimelineMax=Qt;gt=new Qt({sortChildren:!1,defaults:vs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});An.stringFilter=Yp;var br=[],wo={},fT=[],Hh=0,hT=0,Ql=function(e){return(wo[e]||fT).map(function(t){return t()})},iu=function(){var e=Date.now(),t=[];e-Hh>2&&(Ql("matchMediaInit"),br.forEach(function(i){var n=i.queries,r=i.conditions,s,o,l,c;for(o in n)s=ri.matchMedia(n[o]).matches,s&&(l=1),s!==r[o]&&(r[o]=s,c=1);c&&(i.revert(),l&&t.push(i))}),Ql("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Hh=e,Ql("matchMedia"))},rm=function(){function a(t,i){this.selector=i&&eu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=hT++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,n,r){yt(i)&&(r=n,n=i,i=yt);var s=this,o=function(){var c=pt,u=s.selector,f;return c&&c!==s&&c.data.push(s),r&&(s.selector=eu(r)),pt=s,f=n.apply(s,arguments),yt(f)&&s._r.push(f),pt=c,s.selector=u,s.isReverted=!1,f};return s.last=o,i===yt?o(s,function(l){return s.add(null,l)}):i?s[i]=o:o},e.ignore=function(i){var n=pt;pt=null,i(this),pt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof a?i.push.apply(i,n.getTweens()):n instanceof Et&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var r=this;if(i?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=r.data.length;l--;)c=r.data[l],c instanceof Qt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(i);r._r.forEach(function(u){return u(i,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var s=br.length;s--;)br[s].id===this.id&&br.splice(s,1)},e.revert=function(i){this.kill(i||{})},a}(),dT=function(){function a(t){this.contexts=[],this.scope=t,pt&&pt.data.push(this)}var e=a.prototype;return e.add=function(i,n,r){hi(i)||(i={matches:i});var s=new rm(0,r||this.scope),o=s.conditions={},l,c,u;pt&&!s.selector&&(s.selector=pt.selector),this.contexts.push(s),n=s.add("onMatch",n),s.queries=i;for(c in i)c==="all"?u=1:(l=ri.matchMedia(i[c]),l&&(br.indexOf(s)<0&&br.push(s),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(iu):l.addEventListener("change",iu)));return u&&n(s,function(f){return s.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},a}(),Vo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Hp(n)})},timeline:function(e){return new Qt(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Nt(e)&&(e=Fn(e)[0]);var r=Mr(e||{}).get,s=i?Dp:Cp;return i==="native"&&(i=""),e&&(t?s((Tn[t]&&Tn[t].get||r)(e,t,i,n)):function(o,l,c){return s((Tn[o]&&Tn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=Fn(e),e.length>1){var n=e.map(function(u){return vn.quickSetter(u,t,i)}),r=n.length;return function(u){for(var f=r;f--;)n[f](u)}}e=e[0]||{};var s=Tn[t],o=Mr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=s?function(u){var f=new s;ns._pt=0,f.init(e,i?u+i:u,ns,0,[e]),f.render(1,f),ns._pt&&Yu(1,ns)}:o.set(e,l);return s?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var n,r=vn.to(e,Rn((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),s=function(l,c,u){return r.resetTo(t,l,c,u)};return s.tween=r,s},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Er(e.ease,vs.ease)),Bh(vs,e||{})},config:function(e){return Bh(An,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,r=e.defaults,s=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!Tn[o]&&!wn[o]&&xa(t+" effect requires "+o+" plugin.")}),ql[t]=function(o,l,c){return i(Fn(o),Rn(l||{},r),c)},s&&(Qt.prototype[t]=function(o,l,c){return this.add(ql[t](o,hi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Er(t)},parseEase:function(e,t){return arguments.length?Er(e,t):it},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qt(e),n,r;for(i.smoothChildTiming=pn(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,n=gt._first;n;)r=n._next,(t||!(!n._dur&&n instanceof Et&&n.vars.onComplete===n._targets[0]))&&ai(i,n,n._start-n._delay),n=r;return ai(gt,i,0),i},context:function(e,t){return e?new rm(e,t):pt},matchMedia:function(e){return new dT(e)},matchMediaRefresh:function(){return br.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||iu()},addEventListener:function(e,t){var i=wo[e]||(wo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=wo[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:XM,wrapYoyo:YM,distribute:Op,random:kp,snap:Bp,normalize:WM,getUnit:Xt,clamp:zM,splitColor:Wp,toArray:Fn,selector:eu,mapRange:Gp,pipe:VM,unitize:HM,interpolate:jM,shuffle:Np},install:Ep,effects:ql,ticker:En,updateRoot:Qt.updateRoot,plugins:Tn,globalTimeline:gt,core:{PropTween:gn,globals:bp,Tween:Et,Timeline:Qt,Animation:Ta,getCache:Mr,_removeLinkedListItem:Zo,reverting:function(){return zt},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return Iu=e}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Vo[a]=Et[a]});En.add(Qt.updateRoot);ns=Vo.to({},{duration:0});var pT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},mT=function(e,t){var i=e._targets,n,r,s;for(n in t)for(r=i.length;r--;)s=e._ptLookup[r][n],s&&(s=s.d)&&(s._pt&&(s=pT(s,n)),s&&s.modifier&&s.modifier(t[n],e,i[r],n))},$l=function(e,t){return{name:e,rawVars:1,init:function(n,r,s){s._onInit=function(o){var l,c;if(Nt(r)&&(l={},mn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}mT(o,r)}}}},vn=Vo.registerPlugin({name:"attr",init:function(e,t,i,n,r){var s,o,l;this.tween=i;for(s in t)l=e.getAttribute(s)||"",o=this.add(e,"setAttribute",(l||0)+"",t[s],n,r,0,0,s),o.op=s,o.b=l,this._props.push(s)},render:function(e,t){for(var i=t._pt;i;)zt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},$l("roundProps",tu),$l("modifiers"),$l("snap",Bp))||Vo;Et.version=Qt.version=vn.version="3.12.7";Tp=1;Nu()&&Ms();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wh,qi,os,ju,Sr,Xh,qu,gT=function(){return typeof window<"u"},Li={},_r=180/Math.PI,ls=Math.PI/180,Zr=Math.atan2,Yh=1e8,Ku=/([A-Z])/g,_T=/(left|right|width|margin|padding|x)/i,vT=/[\s,\(]\S/,oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ru=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ST=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},sm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},am=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},MT=function(e,t,i){return e.style[t]=i},TT=function(e,t,i){return e.style.setProperty(t,i)},ET=function(e,t,i){return e._gsap[t]=i},bT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},AT=function(e,t,i,n,r){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(r,s)},wT=function(e,t,i,n,r){var s=e._gsap;s[t]=i,s.renderTransform(r,s)},_t="transform",_n=_t+"Origin",RT=function a(e,t){var i=this,n=this.target,r=n.style,s=n._gsap;if(e in Li&&r){if(this.tfm=this.tfm||{},e!=="transform")e=oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Ei(n,o)}):this.tfm[e]=s.x?s[e]:Ei(n,e),e===_n&&(this.tfm.zOrigin=s.zOrigin);else return oi.transform.split(",").forEach(function(o){return a.call(i,o,t)});if(this.props.indexOf(_t)>=0)return;s.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(_n,t,"")),e=_t}(r||t)&&this.props.push(e,t,r[e])},om=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},CT=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,r,s;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?i[e[r]]=e[r+2]:i.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ku,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)n[s]=this.tfm[s];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=qu(),(!r||!r.isStart)&&!i[_t]&&(om(i),n.zOrigin&&i[_n]&&(i[_n]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},lm=function(e,t){var i={target:e,props:[],revert:CT,save:RT};return e._gsap||vn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},cm,su=function(e,t){var i=qi.createElementNS?qi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):qi.createElement(e);return i&&i.style?i:qi.createElement(e)},ui=function a(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Ku,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&a(e,Ts(t)||t,1)||""},jh="O,Moz,ms,Ms,Webkit".split(","),Ts=function(e,t,i){var n=t||Sr,r=n.style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(jh[s]+e in r););return s<0?null:(s===3?"ms":s>=0?jh[s]:"")+e},au=function(){gT()&&window.document&&(Wh=window,qi=Wh.document,os=qi.documentElement,Sr=su("div")||{style:{}},su("div"),_t=Ts(_t),_n=_t+"Origin",Sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cm=!!Ts("perspective"),qu=vn.core.reverting,ju=1)},qh=function(e){var t=e.ownerSVGElement,i=su("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),r;n.style.display="block",i.appendChild(n),os.appendChild(i);try{r=n.getBBox()}catch{}return i.removeChild(n),os.removeChild(i),r},Kh=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},um=function(e){var t,i;try{t=e.getBBox()}catch{t=qh(e),i=1}return t&&(t.width||t.height)||i||(t=qh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Kh(e,["x","cx","x1"])||0,y:+Kh(e,["y","cy","y1"])||0,width:0,height:0}:t},fm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&um(e))},Rr=function(e,t){if(t){var i=e.style,n;t in Li&&t!==_n&&(t=_t),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(Ku,"-$1").toLowerCase())):i.removeAttribute(t)}},Ki=function(e,t,i,n,r,s){var o=new gn(e._pt,t,i,0,1,s?am:sm);return e._pt=o,o.b=n,o.e=r,e._props.push(i),o},Zh={deg:1,rad:1,turn:1},DT={grid:1,flex:1},nr=function a(e,t,i,n){var r=parseFloat(i)||0,s=(i+"").trim().substr((r+"").length)||"px",o=Sr.style,l=_T.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=n==="px",d=n==="%",_,m,p,g;if(n===s||!r||Zh[n]||Zh[s])return r;if(s!=="px"&&!h&&(r=a(e,t,i,"px")),g=e.getCTM&&fm(e),(d||s==="%")&&(Li[t]||~t.indexOf("adius")))return _=g?e.getBBox()[l?"width":"height"]:e[u],Mt(d?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(h?s:n),m=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===qi||!m.appendChild)&&(m=qi.body),p=m._gsap,p&&d&&p.width&&l&&p.time===En.time&&!p.uncache)return Mt(r/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+n,_=e[u],y?e.style[t]=y:Rr(e,t)}else(d||s==="%")&&!DT[ui(m,"display")]&&(o.position=ui(e,"position")),m===e&&(o.position="static"),m.appendChild(Sr),_=Sr[u],m.removeChild(Sr),o.position="absolute";return l&&d&&(p=Mr(m),p.time=En.time,p.width=m[u]),Mt(h?_*r/f:_&&r?f/_*r:0)},Ei=function(e,t,i,n){var r;return ju||au(),t in oi&&t!=="transform"&&(t=oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Li[t]&&t!=="transform"?(r=ba(e,n),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Wo(ui(e,_n))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||n||~(r+"").indexOf("calc("))&&(r=Ho[t]&&Ho[t](e,t,i)||ui(e,t)||wp(e,t)||(t==="opacity"?1:0))),i&&!~(r+"").trim().indexOf(" ")?nr(e,t,r,i)+i:r},PT=function(e,t,i,n){if(!i||i==="none"){var r=Ts(t,e,1),s=r&&ui(e,r,1);s&&s!==i?(t=r,i=s):t==="borderColor"&&(i=ui(e,"borderTopColor"))}var o=new gn(this._pt,e.style,t,0,1,nm),l=0,c=0,u,f,h,d,_,m,p,g,y,x,v,E;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(m=e.style[t],e.style[t]=n,n=ui(e,t)||n,m?e.style[t]=m:Rr(e,t)),u=[i,n],Yp(u),i=u[0],n=u[1],h=i.match(ts)||[],E=n.match(ts)||[],E.length){for(;f=ts.exec(n);)p=f[0],y=n.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(m=h[c++]||"")&&(d=parseFloat(m)||0,v=m.substr((d+"").length),p.charAt(1)==="="&&(p=as(d,p)+v),g=parseFloat(p),x=p.substr((g+"").length),l=ts.lastIndex-x.length,x||(x=x||An.units[t]||v,l===n.length&&(n+=x,o.e+=x)),v!==x&&(d=nr(e,t,m,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:g-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?am:sm;return Sp.test(n)&&(o.e=0),this._pt=o,o},Jh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},LT=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Jh[i]||i,t[1]=Jh[n]||n,t.join(" ")},UT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,r=t.u,s=i._gsap,o,l,c;if(r==="all"||r===!0)n.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Li[o]&&(l=1,o=o==="transformOrigin"?_n:_t),Rr(i,o);l&&(Rr(i,_t),s&&(s.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",ba(i,1),s.uncache=1,om(n)))}},Ho={clearProps:function(e,t,i,n,r){if(r.data!=="isFromStart"){var s=e._pt=new gn(e._pt,t,i,0,0,UT);return s.u=n,s.pr=-10,s.tween=r,e._props.push(i),1}}},Ea=[1,0,0,1,0,0],hm={},dm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qh=function(e){var t=ui(e,_t);return dm(t)?Ea:t.substr(7).match(yp).map(Mt)},Zu=function(e,t){var i=e._gsap||Mr(e),n=e.style,r=Qh(e),s,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ea:r):(r===Ea&&!e.offsetParent&&e!==os&&!i.svg&&(l=n.display,n.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,os.appendChild(e)),r=Qh(e),l?n.display=l:Rr(e,"display"),c&&(o?s.insertBefore(e,o):s?s.appendChild(e):os.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ou=function(e,t,i,n,r,s){var o=e._gsap,l=r||Zu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],m=l[2],p=l[3],g=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,E=parseFloat(x[1])||0,w,T,R,S;i?l!==Ea&&(T=d*p-_*m)&&(R=v*(p/T)+E*(-m/T)+(m*y-p*g)/T,S=v*(-_/T)+E*(d/T)-(d*y-_*g)/T,v=R,E=S):(w=um(e),v=w.x+(~x[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(x[1]||x[0]).indexOf("%")?E/100*w.height:E)),n||n!==!1&&o.smooth?(g=v-c,y=E-u,o.xOffset=f+(g*d+y*m)-g,o.yOffset=h+(g*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[_n]="0px 0px",s&&(Ki(s,o,"xOrigin",c,v),Ki(s,o,"yOrigin",u,E),Ki(s,o,"xOffset",f,o.xOffset),Ki(s,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},ba=function(e,t){var i=e._gsap||new Zp(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,r=i.scaleX<0,s="px",o="deg",l=getComputedStyle(e),c=ui(e,_n)||"0",u,f,h,d,_,m,p,g,y,x,v,E,w,T,R,S,M,P,D,L,F,G,B,q,H,Z,Y,I,W,ee,N,k;return u=f=h=m=p=g=y=x=v=0,d=_=1,i.svg=!!(e.getCTM&&fm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),n.scale=n.rotate=n.translate="none"),T=Zu(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),ou(e,q||c,!!q||i.originIsAbsolute,i.smooth!==!1,T)),E=i.xOrigin||0,w=i.yOrigin||0,T!==Ea&&(P=T[0],D=T[1],L=T[2],F=T[3],u=G=T[4],f=B=T[5],T.length===6?(d=Math.sqrt(P*P+D*D),_=Math.sqrt(F*F+L*L),m=P||D?Zr(D,P)*_r:0,y=L||F?Zr(L,F)*_r+m:0,y&&(_*=Math.abs(Math.cos(y*ls))),i.svg&&(u-=E-(E*P+w*L),f-=w-(E*D+w*F))):(k=T[6],ee=T[7],Y=T[8],I=T[9],W=T[10],N=T[11],u=T[12],f=T[13],h=T[14],R=Zr(k,W),p=R*_r,R&&(S=Math.cos(-R),M=Math.sin(-R),q=G*S+Y*M,H=B*S+I*M,Z=k*S+W*M,Y=G*-M+Y*S,I=B*-M+I*S,W=k*-M+W*S,N=ee*-M+N*S,G=q,B=H,k=Z),R=Zr(-L,W),g=R*_r,R&&(S=Math.cos(-R),M=Math.sin(-R),q=P*S-Y*M,H=D*S-I*M,Z=L*S-W*M,N=F*M+N*S,P=q,D=H,L=Z),R=Zr(D,P),m=R*_r,R&&(S=Math.cos(R),M=Math.sin(R),q=P*S+D*M,H=G*S+B*M,D=D*S-P*M,B=B*S-G*M,P=q,G=H),p&&Math.abs(p)+Math.abs(m)>359.9&&(p=m=0,g=180-g),d=Mt(Math.sqrt(P*P+D*D+L*L)),_=Mt(Math.sqrt(B*B+k*k)),R=Zr(G,B),y=Math.abs(R)>2e-4?R*_r:0,v=N?1/(N<0?-N:N):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!dm(ui(e,_t)),q&&e.setAttribute("transform",q))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(d*=-1,y+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=h+s,i.scaleX=Mt(d),i.scaleY=Mt(_),i.rotation=Mt(m)+o,i.rotationX=Mt(p)+o,i.rotationY=Mt(g)+o,i.skewX=y+o,i.skewY=x+o,i.transformPerspective=v+s,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[_n]=Wo(c)),i.xOffset=i.yOffset=0,i.force3D=An.force3D,i.renderTransform=i.svg?FT:cm?pm:IT,i.uncache=0,i},Wo=function(e){return(e=e.split(" "))[0]+" "+e[1]},ec=function(e,t,i){var n=Xt(t);return Mt(parseFloat(t)+parseFloat(nr(e,"x",i+"px",n)))+n},IT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pm(e,t)},hr="0deg",Zs="0px",dr=") ",pm=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,_=i.scaleX,m=i.scaleY,p=i.transformPerspective,g=i.force3D,y=i.target,x=i.zOrigin,v="",E=g==="auto"&&e&&e!==1||g===!0;if(x&&(f!==hr||u!==hr)){var w=parseFloat(u)*ls,T=Math.sin(w),R=Math.cos(w),S;w=parseFloat(f)*ls,S=Math.cos(w),s=ec(y,s,T*S*-x),o=ec(y,o,-Math.sin(w)*-x),l=ec(y,l,R*S*-x+x)}p!==Zs&&(v+="perspective("+p+dr),(n||r)&&(v+="translate("+n+"%, "+r+"%) "),(E||s!==Zs||o!==Zs||l!==Zs)&&(v+=l!==Zs||E?"translate3d("+s+", "+o+", "+l+") ":"translate("+s+", "+o+dr),c!==hr&&(v+="rotate("+c+dr),u!==hr&&(v+="rotateY("+u+dr),f!==hr&&(v+="rotateX("+f+dr),(h!==hr||d!==hr)&&(v+="skew("+h+", "+d+dr),(_!==1||m!==1)&&(v+="scale("+_+", "+m+dr),y.style[_t]=v||"translate(0, 0)"},FT=function(e,t){var i=t||this,n=i.xPercent,r=i.yPercent,s=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,_=i.xOrigin,m=i.yOrigin,p=i.xOffset,g=i.yOffset,y=i.forceCSS,x=parseFloat(s),v=parseFloat(o),E,w,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ls,c*=ls,E=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=ls,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=Mt(E),w=Mt(w),T=Mt(T),R=Mt(R)):(E=f,R=h,w=T=0),(x&&!~(s+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=nr(d,"x",s,"px"),v=nr(d,"y",o,"px")),(_||m||p||g)&&(x=Mt(x+_-(_*E+m*T)+p),v=Mt(v+m-(_*w+m*R)+g)),(n||r)&&(S=d.getBBox(),x=Mt(x+n/100*S.width),v=Mt(v+r/100*S.height)),S="matrix("+E+","+w+","+T+","+R+","+x+","+v+")",d.setAttribute("transform",S),y&&(d.style[_t]=S)},NT=function(e,t,i,n,r){var s=360,o=Nt(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?_r:1),c=l-n,u=n+c+"deg",f,h;return o&&(f=r.split("_")[1],f==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-360)),f==="cw"&&c<0?c=(c+s*Yh)%s-~~(c/s)*s:f==="ccw"&&c>0&&(c=(c-s*Yh)%s-~~(c/s)*s)),e._pt=h=new gn(e._pt,t,i,n,c,xT),h.e=u,h.u="deg",e._props.push(i),h},$h=function(e,t){for(var i in t)e[i]=t[i];return e},OT=function(e,t,i){var n=$h({},i._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,l,c,u,f,h,d,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),s[_t]=t,o=ba(i,1),Rr(i,_t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[_t],s[_t]=t,o=ba(i,1),s[_t]=c);for(l in Li)c=n[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=Xt(c),_=Xt(u),f=d!==_?nr(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new gn(e._pt,o,l,f,h-f,ru),e._pt.u=_||0,e._props.push(l));$h(o,n)};mn("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",n="Bottom",r="Left",s=(e<3?[t,i,n,r]:[t+r,t+i,n+i,n+r]).map(function(o){return e<2?a+o:"border"+o+a});Ho[e>1?"border"+a:a]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=s.map(function(_){return Ei(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},s.forEach(function(_,m){return d[_]=h[m]=h[m]||h[(m-1)/2|0]}),o.init(l,d,f)}});var mm={name:"css",register:au,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,r){var s=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,d,_,m,p,g,y,x,v,E,w,T,R;ju||au(),this.styles=this.styles||lm(e),R=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(u=t[m],!(Tn[m]&&Jp(m,t,i,n,e,r)))){if(d=typeof u,_=Ho[m],d==="function"&&(u=u.call(i,n,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Sa(u)),_)_(this,e,m,u,i)&&(T=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),u+="",Qi.lastIndex=0,Qi.test(c)||(p=Xt(c),g=Xt(u)),g?p!==g&&(c=nr(e,m,c,g)+g):p&&(u+=p),this.add(o,"setProperty",c,u,n,r,0,0,m),s.push(m),R.push(m,0,o[m]);else if(d!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(i,n,e,r):l[m],Nt(c)&&~c.indexOf("random(")&&(c=Sa(c)),Xt(c+"")||c==="auto"||(c+=An.units[m]||Xt(Ei(e,m))||""),(c+"").charAt(1)==="="&&(c=Ei(e,m))):c=Ei(e,m),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),m in oi&&(m==="autoAlpha"&&(h===1&&Ei(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,o.visibility),Ki(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=oi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in Li,x){if(this.styles.save(m),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||ba(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new gn(this._pt,o,_t,0,1,E.renderTransform,E,0,-1),v.dep=1),m==="scale")this._pt=new gn(this._pt,E,"scaleY",E.scaleY,(y?as(E.scaleY,y+f):f)-E.scaleY||0,ru),this._pt.u=0,s.push("scaleY",m),m+="X";else if(m==="transformOrigin"){R.push(_n,0,o[_n]),u=LT(u),E.svg?ou(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==E.zOrigin&&Ki(this,E,"zOrigin",E.zOrigin,g),Ki(this,o,m,Wo(c),Wo(u)));continue}else if(m==="svgOrigin"){ou(e,u,1,w,0,this);continue}else if(m in hm){NT(this,E,m,h,y?as(h,y+u):u);continue}else if(m==="smoothOrigin"){Ki(this,E,"smooth",E.smooth,u);continue}else if(m==="force3D"){E[m]=u;continue}else if(m==="transform"){OT(this,u,e);continue}}else m in o||(m=Ts(m)||m);if(x||(f||f===0)&&(h||h===0)&&!vT.test(u)&&m in o)p=(c+"").substr((h+"").length),f||(f=0),g=Xt(u)||(m in An.units?An.units[m]:p),p!==g&&(h=nr(e,m,c,g)),this._pt=new gn(this._pt,x?E:o,m,h,(y?as(h,y+f):f)-h,!x&&(g==="px"||m==="zIndex")&&t.autoRound!==!1?ST:ru),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=yT);else if(m in o)PT.call(this,e,m,c,y?y+u:u);else if(m in e)this.add(e,m,c||e[m],y?y+u:u,n,r);else if(m!=="parseTransform"){Bu(m,u);continue}x||(m in o?R.push(m,0,o[m]):typeof e[m]=="function"?R.push(m,2,e[m]()):R.push(m,1,c||e[m])),s.push(m)}}T&&im(this)},render:function(e,t){if(t.tween._time||!qu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ei,aliases:oi,getSetter:function(e,t,i){var n=oi[t];return n&&n.indexOf(",")<0&&(t=n),t in Li&&t!==_n&&(e._gsap.x||Ei(e,"x"))?i&&Xh===i?t==="scale"?bT:ET:(Xh=i||{})&&(t==="scale"?AT:wT):e.style&&!Fu(e.style[t])?MT:~t.indexOf("-")?TT:Xu(e,t)},core:{_removeProperty:Rr,_getMatrix:Zu}};vn.utils.checkPrefix=Ts;vn.core.getStyleSaver=lm;(function(a,e,t,i){var n=mn(a+","+e+","+t,function(r){Li[r]=1});mn(e,function(r){An.units[r]="deg",hm[r]=1}),oi[n[13]]=a+","+e,mn(i,function(r){var s=r.split(":");oi[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){An.units[a]="px"});vn.registerPlugin(mm);var Si=vn.registerPlugin(mm)||vn;Si.core.Tween;const ed=a=>{let e;const t=new Set,i=(c,u)=>{const f=typeof c=="function"?c(e):c;if(!Object.is(f,e)){const h=e;e=u??(typeof f!="object"||f===null)?f:Object.assign({},e,f),t.forEach(d=>d(e,h))}},n=()=>e,o={setState:i,getState:n,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=a(i,n,o);return o},BT=a=>a?ed(a):ed;function kT(){var a=Object.create(null);function e(n,r){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(d){if(d instanceof Error)throw d}),h=a[h.id].value),h}),c=i("<"+o+">.init",c),u&&(u=i("<"+o+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(n,r){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=a[o].getTransferables&&a[o].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(d){console.error(d),r(d)}}}function i(n,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var r=n.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function zT(a){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,i=a.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var gm=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return gm=function(){return a},a},GT=0,VT=0,tc=!1,ca=Object.create(null),ua=Object.create(null),lu=Object.create(null);function Ps(a){if((!a||typeof a.init!="function")&&!tc)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,i=a.getTransferables,n=a.workerId,r=zT(a);n==null&&(n="#default");var s="workerModule"+ ++GT,o=a.name||s,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(tc=!0,u=Ps({workerId:n,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Ro(u)+`
)}`}),tc=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];if(!gm())return r.apply(void 0,u);if(!l){l=td(n,"registerModule",c.workerModuleData);var h=function(){l=null,ua[n].delete(h)};(ua[n]||(ua[n]=new Set)).add(h)}return l.then(function(d){var _=d.isCallable;if(_)return td(n,"callModule",{id:s,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:s,name:o,dependencies:e,init:Ro(t),getTransferables:i&&Ro(i)},c.onMainThread=r,c}function HT(a){ua[a]&&ua[a].forEach(function(e){e()}),ca[a]&&(ca[a].terminate(),delete ca[a])}function Ro(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function WT(a){var e=ca[a];if(!e){var t=Ro(kT);e=ca[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,s=lu[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete lu[r],s(n)}}return e}function td(a,e,t){return new Promise(function(i,n){var r=++VT;lu[r]=function(s){s.success?i(s.result):n(new Error("Error in worker "+e+" call: "+s.error))},WT(a).postMessage({messageId:r,action:e,data:t})})}function _m(){var a=function(e){function t(Z,Y,I,W,ee,N,k,ne){var X=1-k;ne.x=X*X*Z+2*X*k*I+k*k*ee,ne.y=X*X*Y+2*X*k*W+k*k*N}function i(Z,Y,I,W,ee,N,k,ne,X,ie){var xe=1-X;ie.x=xe*xe*xe*Z+3*xe*xe*X*I+3*xe*X*X*ee+X*X*X*k,ie.y=xe*xe*xe*Y+3*xe*xe*X*W+3*xe*X*X*N+X*X*X*ne}function n(Z,Y){for(var I=/([MLQCZ])([^MLQCZ]*)/g,W,ee,N,k,ne;W=I.exec(Z);){var X=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(W[1]){case"M":k=ee=X[0],ne=N=X[1];break;case"L":(X[0]!==k||X[1]!==ne)&&Y("L",k,ne,k=X[0],ne=X[1]);break;case"Q":{Y("Q",k,ne,k=X[2],ne=X[3],X[0],X[1]);break}case"C":{Y("C",k,ne,k=X[4],ne=X[5],X[0],X[1],X[2],X[3]);break}case"Z":(k!==ee||ne!==N)&&Y("L",k,ne,ee,N);break}}}function r(Z,Y,I){I===void 0&&(I=16);var W={x:0,y:0};n(Z,function(ee,N,k,ne,X,ie,xe,_e,ve){switch(ee){case"L":Y(N,k,ne,X);break;case"Q":{for(var fe=N,De=k,U=1;U<I;U++)t(N,k,ie,xe,ne,X,U/(I-1),W),Y(fe,De,W.x,W.y),fe=W.x,De=W.y;break}case"C":{for(var Oe=N,Ae=k,Re=1;Re<I;Re++)i(N,k,ie,xe,_e,ve,ne,X,Re/(I-1),W),Y(Oe,Ae,W.x,W.y),Oe=W.x,Ae=W.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Z,Y){var I=Z.getContext?Z.getContext("webgl",c):Z,W=l.get(I);if(!W){let Oe=function(A){var b=N[A];if(!b&&(b=N[A]=I.getExtension(A),!b))throw new Error(A+" not supported");return b},Ae=function(A,b){var O=I.createShader(b);return I.shaderSource(O,A),I.compileShader(O),O},Re=function(A,b,O,Q){if(!k[A]){var $={},se={},he=I.createProgram();I.attachShader(he,Ae(b,I.VERTEX_SHADER)),I.attachShader(he,Ae(O,I.FRAGMENT_SHADER)),I.linkProgram(he),k[A]={program:he,transaction:function(me){I.useProgram(he),me({setUniform:function(ce,Se){for(var Te=[],Ee=arguments.length-2;Ee-- >0;)Te[Ee]=arguments[Ee+2];var oe=se[Se]||(se[Se]=I.getUniformLocation(he,Se));I["uniform"+ce].apply(I,[oe].concat(Te))},setAttribute:function(ce,Se,Te,Ee,oe){var Ue=$[ce];Ue||(Ue=$[ce]={buf:I.createBuffer(),loc:I.getAttribLocation(he,ce),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Ue.buf),I.vertexAttribPointer(Ue.loc,Se,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Ue.loc),ee?I.vertexAttribDivisor(Ue.loc,Ee):Oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ue.loc,Ee),oe!==Ue.data&&(I.bufferData(I.ARRAY_BUFFER,oe,Te),Ue.data=oe)}})}}}k[A].transaction(Q)},ae=function(A,b){X++;try{I.activeTexture(I.TEXTURE0+X);var O=ne[A];O||(O=ne[A]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,O),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,O),b(O,X)}finally{X--}},be=function(A,b,O){var Q=I.createFramebuffer();ie.push(Q),I.bindFramebuffer(I.FRAMEBUFFER,Q),I.activeTexture(I.TEXTURE0+b),I.bindTexture(I.TEXTURE_2D,A),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,A,0);try{O(Q)}finally{I.deleteFramebuffer(Q),I.bindFramebuffer(I.FRAMEBUFFER,ie[--ie.length-1]||null)}},de=function(){N={},k={},ne={},X=-1,ie.length=0};var xe=Oe,_e=Ae,ve=Re,fe=ae,De=be,U=de,ee=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,N={},k={},ne={},X=-1,ie=[];I.canvas.addEventListener("webglcontextlost",function(A){de(),A.preventDefault()},!1),l.set(I,W={gl:I,isWebGL2:ee,getExtension:Oe,withProgram:Re,withTexture:ae,withTextureFramebuffer:be,handleContextLoss:de})}Y(W)}function f(Z,Y,I,W,ee,N,k,ne){k===void 0&&(k=15),ne===void 0&&(ne=null),u(Z,function(X){var ie=X.gl,xe=X.withProgram,_e=X.withTexture;_e("copy",function(ve,fe){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,ee,N,0,ie.RGBA,ie.UNSIGNED_BYTE,Y),xe("copy",s,o,function(De){var U=De.setUniform,Oe=De.setAttribute;Oe("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),U("1i","image",fe),ie.bindFramebuffer(ie.FRAMEBUFFER,ne||null),ie.disable(ie.BLEND),ie.colorMask(k&8,k&4,k&2,k&1),ie.viewport(I,W,ee,N),ie.scissor(I,W,ee,N),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function h(Z,Y,I){var W=Z.width,ee=Z.height;u(Z,function(N){var k=N.gl,ne=new Uint8Array(W*ee*4);k.readPixels(0,0,W,ee,k.RGBA,k.UNSIGNED_BYTE,ne),Z.width=Y,Z.height=I,f(k,ne,0,0,W,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function _(Z,Y,I,W,ee,N){N===void 0&&(N=1);var k=new Uint8Array(Z*Y),ne=W[2]-W[0],X=W[3]-W[1],ie=[];r(I,function(Oe,Ae,Re,ae){ie.push({x1:Oe,y1:Ae,x2:Re,y2:ae,minX:Math.min(Oe,Re),minY:Math.min(Ae,ae),maxX:Math.max(Oe,Re),maxY:Math.max(Ae,ae)})}),ie.sort(function(Oe,Ae){return Oe.maxX-Ae.maxX});for(var xe=0;xe<Z;xe++)for(var _e=0;_e<Y;_e++){var ve=De(W[0]+ne*(xe+.5)/Z,W[1]+X*(_e+.5)/Y),fe=Math.pow(1-Math.abs(ve)/ee,N)/2;ve<0&&(fe=1-fe),fe=Math.max(0,Math.min(255,Math.round(fe*255))),k[_e*Z+xe]=fe}return k;function De(Oe,Ae){for(var Re=1/0,ae=1/0,be=ie.length;be--;){var de=ie[be];if(de.maxX+ae<=Oe)break;if(Oe+ae>de.minX&&Ae-ae<de.maxY&&Ae+ae>de.minY){var A=g(Oe,Ae,de.x1,de.y1,de.x2,de.y2);A<Re&&(Re=A,ae=Math.sqrt(Re))}}return U(Oe,Ae)&&(ae=-ae),ae}function U(Oe,Ae){for(var Re=0,ae=ie.length;ae--;){var be=ie[ae];if(be.maxX<=Oe)break;var de=be.y1>Ae!=be.y2>Ae&&Oe<(be.x2-be.x1)*(Ae-be.y1)/(be.y2-be.y1)+be.x1;de&&(Re+=be.y1<be.y2?1:-1)}return Re!==0}}function m(Z,Y,I,W,ee,N,k,ne,X,ie){N===void 0&&(N=1),ne===void 0&&(ne=0),X===void 0&&(X=0),ie===void 0&&(ie=0),p(Z,Y,I,W,ee,N,k,null,ne,X,ie)}function p(Z,Y,I,W,ee,N,k,ne,X,ie,xe){N===void 0&&(N=1),X===void 0&&(X=0),ie===void 0&&(ie=0),xe===void 0&&(xe=0);for(var _e=_(Z,Y,I,W,ee,N),ve=new Uint8Array(_e.length*4),fe=0;fe<_e.length;fe++)ve[fe*4+xe]=_e[fe];f(k,ve,X,ie,Z,Y,1<<3-xe,ne)}function g(Z,Y,I,W,ee,N){var k=ee-I,ne=N-W,X=k*k+ne*ne,ie=X?Math.max(0,Math.min(1,((Z-I)*k+(Y-W)*ne)/X)):0,xe=Z-(I+ie*k),_e=Y-(W+ie*ne);return xe*xe+_e*_e}var y=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:m,generateIntoFramebuffer:p}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,R=!1,S={},M=new WeakMap;function P(Z){if(!R&&!G(Z))throw new Error("WebGL generation not supported")}function D(Z,Y,I,W,ee,N,k){if(N===void 0&&(N=1),k===void 0&&(k=null),!k&&(k=T,!k)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");k=T=ne.getContext("webgl",{depth:!1})}P(k);var X=new Uint8Array(Z*Y*4);u(k,function(ve){var fe=ve.gl,De=ve.withTexture,U=ve.withTextureFramebuffer;De("readable",function(Oe,Ae){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,Z,Y,0,fe.RGBA,fe.UNSIGNED_BYTE,null),U(Oe,Ae,function(Re){F(Z,Y,I,W,ee,N,fe,Re,0,0,0),fe.readPixels(0,0,Z,Y,fe.RGBA,fe.UNSIGNED_BYTE,X)})})});for(var ie=new Uint8Array(Z*Y),xe=0,_e=0;xe<X.length;xe+=4)ie[_e++]=X[xe];return ie}function L(Z,Y,I,W,ee,N,k,ne,X,ie){N===void 0&&(N=1),ne===void 0&&(ne=0),X===void 0&&(X=0),ie===void 0&&(ie=0),F(Z,Y,I,W,ee,N,k,null,ne,X,ie)}function F(Z,Y,I,W,ee,N,k,ne,X,ie,xe){N===void 0&&(N=1),X===void 0&&(X=0),ie===void 0&&(ie=0),xe===void 0&&(xe=0),P(k);var _e=[];r(I,function(ve,fe,De,U){_e.push(ve,fe,De,U)}),_e=new Float32Array(_e),u(k,function(ve){var fe=ve.gl,De=ve.isWebGL2,U=ve.getExtension,Oe=ve.withProgram,Ae=ve.withTexture,Re=ve.withTextureFramebuffer,ae=ve.handleContextLoss;if(Ae("rawDistances",function(be,de){(Z!==be._lastWidth||Y!==be._lastHeight)&&fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,be._lastWidth=Z,be._lastHeight=Y,0,fe.RGBA,fe.UNSIGNED_BYTE,null),Oe("main",x,v,function(A){var b=A.setAttribute,O=A.setUniform,Q=!De&&U("ANGLE_instanced_arrays"),$=!De&&U("EXT_blend_minmax");b("aUV",2,fe.STATIC_DRAW,0,w),b("aLineSegment",4,fe.DYNAMIC_DRAW,1,_e),O.apply(void 0,["4f","uGlyphBounds"].concat(W)),O("1f","uMaxDistance",ee),O("1f","uExponent",N),Re(be,de,function(se){fe.enable(fe.BLEND),fe.colorMask(!0,!0,!0,!0),fe.viewport(0,0,Z,Y),fe.scissor(0,0,Z,Y),fe.blendFunc(fe.ONE,fe.ONE),fe.blendEquationSeparate(fe.FUNC_ADD,De?fe.MAX:$.MAX_EXT),fe.clear(fe.COLOR_BUFFER_BIT),De?fe.drawArraysInstanced(fe.TRIANGLES,0,3,_e.length/4):Q.drawArraysInstancedANGLE(fe.TRIANGLES,0,3,_e.length/4)})}),Oe("post",s,E,function(A){A.setAttribute("aUV",2,fe.STATIC_DRAW,0,w),A.setUniform("1i","tex",de),fe.bindFramebuffer(fe.FRAMEBUFFER,ne),fe.disable(fe.BLEND),fe.colorMask(xe===0,xe===1,xe===2,xe===3),fe.viewport(X,ie,Z,Y),fe.scissor(X,ie,Z,Y),fe.drawArrays(fe.TRIANGLES,0,3)})}),fe.isContextLost())throw ae(),new Error("webgl context lost")})}function G(Z){var Y=!Z||Z===T?S:Z.canvas||Z,I=M.get(Y);if(I===void 0){R=!0;var W=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=D(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Z);I=N&&ee.length===N.length&&N.every(function(k,ne){return k===ee[ne]}),I||(W="bad trial run results",console.info(ee,N))}catch(k){I=!1,W=k.message}W&&console.warn("WebGL SDF generation not supported:",W),R=!1,M.set(Y,I)}return I}var B=Object.freeze({__proto__:null,generate:D,generateIntoCanvas:L,generateIntoFramebuffer:F,isSupported:G});function q(Z,Y,I,W,ee,N){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1);try{return D.apply(B,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),_.apply(y,arguments)}}function H(Z,Y,I,W,ee,N,k,ne,X,ie){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1),ne===void 0&&(ne=0),X===void 0&&(X=0),ie===void 0&&(ie=0);try{return L.apply(B,arguments)}catch(xe){return console.info("WebGL SDF generation failed, falling back to JS",xe),m.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=q,e.generateIntoCanvas=H,e.javascript=y,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function XT(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(ae,be){i[ae]=1<<be+1,n[i[ae]]=ae}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,s=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,u=null;function f(){if(!u){u=new Map;var ae=function(de){if(t.hasOwnProperty(de)){var A=0;t[de].split(",").forEach(function(b){var O=b.split("+"),Q=O[0],$=O[1];Q=parseInt(Q,36),$=$?parseInt($,36):0,u.set(A+=Q,i[de]);for(var se=0;se<$;se++)u.set(++A,i[de])})}};for(var be in t)ae(be)}}function h(ae){return f(),u.get(ae.codePointAt(0))||i.L}function d(ae){return n[h(ae)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function m(ae,be){var de=36,A=0,b=new Map,O=be&&new Map,Q;return ae.split(",").forEach(function $(se){if(se.indexOf("+")!==-1)for(var he=+se;he--;)$(Q);else{Q=se;var le=se.split(">"),me=le[0],Le=le[1];me=String.fromCodePoint(A+=parseInt(me,de)),Le=String.fromCodePoint(A+=parseInt(Le,de)),b.set(me,Le),be&&O.set(Le,me)}}),{map:b,reverseMap:O}}var p,g,y;function x(){if(!p){var ae=m(_.pairs,!0),be=ae.map,de=ae.reverseMap;p=be,g=de,y=m(_.canonical,!1).map}}function v(ae){return x(),p.get(ae)||null}function E(ae){return x(),g.get(ae)||null}function w(ae){return x(),y.get(ae)||null}var T=i.L,R=i.R,S=i.EN,M=i.ES,P=i.ET,D=i.AN,L=i.CS,F=i.B,G=i.S,B=i.ON,q=i.BN,H=i.NSM,Z=i.AL,Y=i.LRO,I=i.RLO,W=i.LRE,ee=i.RLE,N=i.PDF,k=i.LRI,ne=i.RLI,X=i.FSI,ie=i.PDI;function xe(ae,be){for(var de=125,A=new Uint32Array(ae.length),b=0;b<ae.length;b++)A[b]=h(ae[b]);var O=new Map;function Q(an,Gn){var on=A[an];A[an]=Gn,O.set(on,O.get(on)-1),on&o&&O.set(o,O.get(o)-1),O.set(Gn,(O.get(Gn)||0)+1),Gn&o&&O.set(o,(O.get(o)||0)+1)}for(var $=new Uint8Array(ae.length),se=new Map,he=[],le=null,me=0;me<ae.length;me++)le||he.push(le={start:me,end:ae.length-1,level:be==="rtl"?1:be==="ltr"?0:ff(me,!1)}),A[me]&F&&(le.end=me,le=null);for(var Le=ee|W|I|Y|r|ie|N|F,ce=function(an){return an+(an&1?1:2)},Se=function(an){return an+(an&1?2:1)},Te=0;Te<he.length;Te++){le=he[Te];var Ee=[{_level:le.level,_override:0,_isolate:0}],oe=void 0,Ue=0,Fe=0,qe=0;O.clear();for(var z=le.start;z<=le.end;z++){var ue=A[z];if(oe=Ee[Ee.length-1],O.set(ue,(O.get(ue)||0)+1),ue&o&&O.set(o,(O.get(o)||0)+1),ue&Le)if(ue&(ee|W)){$[z]=oe._level;var te=(ue===ee?Se:ce)(oe._level);te<=de&&!Ue&&!Fe?Ee.push({_level:te,_override:0,_isolate:0}):Ue||Fe++}else if(ue&(I|Y)){$[z]=oe._level;var pe=(ue===I?Se:ce)(oe._level);pe<=de&&!Ue&&!Fe?Ee.push({_level:pe,_override:ue&I?R:T,_isolate:0}):Ue||Fe++}else if(ue&r){ue&X&&(ue=ff(z+1,!0)===1?ne:k),$[z]=oe._level,oe._override&&Q(z,oe._override);var ye=(ue===ne?Se:ce)(oe._level);ye<=de&&Ue===0&&Fe===0?(qe++,Ee.push({_level:ye,_override:0,_isolate:1,_isolInitIndex:z})):Ue++}else if(ue&ie){if(Ue>0)Ue--;else if(qe>0){for(Fe=0;!Ee[Ee.length-1]._isolate;)Ee.pop();var ge=Ee[Ee.length-1]._isolInitIndex;ge!=null&&(se.set(ge,z),se.set(z,ge)),Ee.pop(),qe--}oe=Ee[Ee.length-1],$[z]=oe._level,oe._override&&Q(z,oe._override)}else ue&N?(Ue===0&&(Fe>0?Fe--:!oe._isolate&&Ee.length>1&&(Ee.pop(),oe=Ee[Ee.length-1])),$[z]=oe._level):ue&F&&($[z]=le.level);else $[z]=oe._level,oe._override&&ue!==q&&Q(z,oe._override)}for(var Ne=[],Xe=null,Be=le.start;Be<=le.end;Be++){var Ge=A[Be];if(!(Ge&l)){var ct=$[Be],ft=Ge&r,xt=Ge===ie;Xe&&ct===Xe._level?(Xe._end=Be,Xe._endsWithIsolInit=ft):Ne.push(Xe={_start:Be,_end:Be,_level:ct,_startsWithPDI:xt,_endsWithIsolInit:ft})}}for(var rn=[],Gt=0;Gt<Ne.length;Gt++){var xn=Ne[Gt];if(!xn._startsWithPDI||xn._startsWithPDI&&!se.has(xn._start)){for(var Bn=[Xe=xn],ti=void 0;Xe&&Xe._endsWithIsolInit&&(ti=se.get(Xe._end))!=null;)for(var sn=Gt+1;sn<Ne.length;sn++)if(Ne[sn]._start===ti){Bn.push(Xe=Ne[sn]);break}for(var Lt=[],Cn=0;Cn<Bn.length;Cn++)for(var Ls=Bn[Cn],Pr=Ls._start;Pr<=Ls._end;Pr++)Lt.push(Pr);for(var el=$[Lt[0]],La=le.level,Lr=Lt[0]-1;Lr>=0;Lr--)if(!(A[Lr]&l)){La=$[Lr];break}var Us=Lt[Lt.length-1],tl=$[Us],Ua=le.level;if(!(A[Us]&r)){for(var C=Us+1;C<=le.end;C++)if(!(A[C]&l)){Ua=$[C];break}}rn.push({_seqIndices:Lt,_sosType:Math.max(La,el)%2?R:T,_eosType:Math.max(Ua,tl)%2?R:T})}}for(var j=0;j<rn.length;j++){var re=rn[j],V=re._seqIndices,K=re._sosType,Me=re._eosType,we=$[V[0]]&1?R:T;if(O.get(H))for(var Pe=0;Pe<V.length;Pe++){var Ie=V[Pe];if(A[Ie]&H){for(var He=K,Ve=Pe-1;Ve>=0;Ve--)if(!(A[V[Ve]]&l)){He=A[V[Ve]];break}Q(Ie,He&(r|ie)?B:He)}}if(O.get(S))for(var ke=0;ke<V.length;ke++){var et=V[ke];if(A[et]&S)for(var tt=ke-1;tt>=-1;tt--){var mt=tt===-1?K:A[V[tt]];if(mt&s){mt===Z&&Q(et,D);break}}}if(O.get(Z))for(var ht=0;ht<V.length;ht++){var nt=V[ht];A[nt]&Z&&Q(nt,R)}if(O.get(M)||O.get(L))for(var ze=1;ze<V.length-1;ze++){var St=V[ze];if(A[St]&(M|L)){for(var Je=0,qt=0,ni=ze-1;ni>=0&&(Je=A[V[ni]],!!(Je&l));ni--);for(var Ot=ze+1;Ot<V.length&&(qt=A[V[Ot]],!!(qt&l));Ot++);Je===qt&&(A[St]===M?Je===S:Je&(S|D))&&Q(St,Je)}}if(O.get(S))for(var Vt=0;Vt<V.length;Vt++){var dt=V[Vt];if(A[dt]&S){for(var Bt=Vt-1;Bt>=0&&A[V[Bt]]&(P|l);Bt--)Q(V[Bt],S);for(Vt++;Vt<V.length&&A[V[Vt]]&(P|l|S);Vt++)A[V[Vt]]!==S&&Q(V[Vt],S)}}if(O.get(P)||O.get(M)||O.get(L))for(var Ut=0;Ut<V.length;Ut++){var It=V[Ut];if(A[It]&(P|M|L)){Q(It,B);for(var At=Ut-1;At>=0&&A[V[At]]&l;At--)Q(V[At],B);for(var Ui=Ut+1;Ui<V.length&&A[V[Ui]]&l;Ui++)Q(V[Ui],B)}}if(O.get(S))for(var kn=0,Qu=K;kn<V.length;kn++){var $u=V[kn],nl=A[$u];nl&S?Qu===T&&Q($u,T):nl&s&&(Qu=nl)}if(O.get(o)){var Is=R|S|D,ef=Is|T,Ia=[];{for(var Ur=[],Ir=0;Ir<V.length;Ir++)if(A[V[Ir]]&o){var Fs=ae[V[Ir]],tf=void 0;if(v(Fs)!==null)if(Ur.length<63)Ur.push({char:Fs,seqIndex:Ir});else break;else if((tf=E(Fs))!==null)for(var Ns=Ur.length-1;Ns>=0;Ns--){var il=Ur[Ns].char;if(il===tf||il===E(w(Fs))||v(w(il))===Fs){Ia.push([Ur[Ns].seqIndex,Ir]),Ur.length=Ns;break}}}Ia.sort(function(an,Gn){return an[0]-Gn[0]})}for(var rl=0;rl<Ia.length;rl++){for(var nf=Ia[rl],Fa=nf[0],sl=nf[1],rf=!1,zn=0,al=Fa+1;al<sl;al++){var sf=V[al];if(A[sf]&ef){rf=!0;var af=A[sf]&Is?R:T;if(af===we){zn=af;break}}}if(rf&&!zn){zn=K;for(var ol=Fa-1;ol>=0;ol--){var of=V[ol];if(A[of]&ef){var lf=A[of]&Is?R:T;lf!==we?zn=lf:zn=we;break}}}if(zn){if(A[V[Fa]]=A[V[sl]]=zn,zn!==we){for(var Os=Fa+1;Os<V.length;Os++)if(!(A[V[Os]]&l)){h(ae[V[Os]])&H&&(A[V[Os]]=zn);break}}if(zn!==we){for(var Bs=sl+1;Bs<V.length;Bs++)if(!(A[V[Bs]]&l)){h(ae[V[Bs]])&H&&(A[V[Bs]]=zn);break}}}}for(var Ii=0;Ii<V.length;Ii++)if(A[V[Ii]]&o){for(var cf=Ii,ll=Ii,cl=K,ks=Ii-1;ks>=0;ks--)if(A[V[ks]]&l)cf=ks;else{cl=A[V[ks]]&Is?R:T;break}for(var uf=Me,zs=Ii+1;zs<V.length;zs++)if(A[V[zs]]&(o|l))ll=zs;else{uf=A[V[zs]]&Is?R:T;break}for(var ul=cf;ul<=ll;ul++)A[V[ul]]=cl===uf?cl:we;Ii=ll}}}for(var yn=le.start;yn<=le.end;yn++){var Um=$[yn],Na=A[yn];if(Um&1?Na&(T|S|D)&&$[yn]++:Na&R?$[yn]++:Na&(D|S)&&($[yn]+=2),Na&l&&($[yn]=yn===0?le.level:$[yn-1]),yn===le.end||h(ae[yn])&(G|F))for(var Oa=yn;Oa>=0&&h(ae[Oa])&c;Oa--)$[Oa]=le.level}}return{levels:$,paragraphs:he};function ff(an,Gn){for(var on=an;on<ae.length;on++){var Fi=A[on];if(Fi&(R|Z))return 1;if(Fi&(F|T)||Gn&&Fi===ie)return 0;if(Fi&r){var hf=Im(on);on=hf===-1?ae.length:hf}}return 0}function Im(an){for(var Gn=1,on=an+1;on<ae.length;on++){var Fi=A[on];if(Fi&F)break;if(Fi&ie){if(--Gn===0)return on}else Fi&r&&Gn++}return-1}}var _e="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function fe(){if(!ve){var ae=m(_e,!0),be=ae.map,de=ae.reverseMap;de.forEach(function(A,b){be.set(b,A)}),ve=be}}function De(ae){return fe(),ve.get(ae)||null}function U(ae,be,de,A){var b=ae.length;de=Math.max(0,de==null?0:+de),A=Math.min(b-1,A==null?b-1:+A);for(var O=new Map,Q=de;Q<=A;Q++)if(be[Q]&1){var $=De(ae[Q]);$!==null&&O.set(Q,$)}return O}function Oe(ae,be,de,A){var b=ae.length;de=Math.max(0,de==null?0:+de),A=Math.min(b-1,A==null?b-1:+A);var O=[];return be.paragraphs.forEach(function(Q){var $=Math.max(de,Q.start),se=Math.min(A,Q.end);if($<se){for(var he=be.levels.slice($,se+1),le=se;le>=$&&h(ae[le])&c;le--)he[le]=Q.level;for(var me=Q.level,Le=1/0,ce=0;ce<he.length;ce++){var Se=he[ce];Se>me&&(me=Se),Se<Le&&(Le=Se|1)}for(var Te=me;Te>=Le;Te--)for(var Ee=0;Ee<he.length;Ee++)if(he[Ee]>=Te){for(var oe=Ee;Ee+1<he.length&&he[Ee+1]>=Te;)Ee++;Ee>oe&&O.push([oe+$,Ee+$])}}}),O}function Ae(ae,be,de,A){var b=Re(ae,be,de,A),O=[].concat(ae);return b.forEach(function(Q,$){O[$]=(be.levels[Q]&1?De(ae[Q]):null)||ae[Q]}),O.join("")}function Re(ae,be,de,A){for(var b=Oe(ae,be,de,A),O=[],Q=0;Q<ae.length;Q++)O[Q]=Q;return b.forEach(function($){for(var se=$[0],he=$[1],le=O.slice(se,he+1),me=le.length;me--;)O[he-me]=le[me]}),O}return e.closingToOpeningBracket=E,e.getBidiCharType=h,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=xe,e.getMirroredCharacter=De,e.getMirroredCharactersMap=U,e.getReorderSegments=Oe,e.getReorderedIndices=Re,e.getReorderedString=Ae,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const vm=/\bvoid\s+main\s*\(\s*\)\s*{/g;function cu(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=Ke[n];return r?cu(r):i}return a.replace(e,t)}const kt=[];for(let a=0;a<256;a++)kt[a]=(a<16?"0":"")+a.toString(16);function YT(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[a&255]+kt[a>>8&255]+kt[a>>16&255]+kt[a>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toUpperCase()}const pr=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(a[n]=i[n])}return a},jT=Date.now(),nd=new WeakMap,id=new Map;let qT=1e10;function uu(a,e){const t=QT(e);let i=nd.get(a);if(i||nd.set(a,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,u){a.onBeforeCompile.call(this,c,u);const f=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let h=id[f];if(!h){const d=KT(this,c,e,t);h=id[f]=d}c.vertexShader=h.vertexShader,c.fragmentShader=h.fragmentShader,pr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-jT}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:qT++}),u.uuid=YT(),u.uniforms=pr({},c.uniforms,e.uniforms),u.defines=pr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=pr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},type:{get:()=>a.type,set:c=>{a.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(pr(this.extensions,c.extensions),pr(this.defines,c.defines),pr(this.uniforms,Tu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=uu(a.isDerivedMaterial?a.getDepthMaterial():new rp({depthPacking:Gd}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=uu(a.isDerivedMaterial?a.getDistanceMaterial():new sp,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return i[t]=s,new s}function KT(a,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:f,fragmentColorTransform:h,customRewriter:d,timeUniform:_}=i;if(r=r||"",s=s||"",o=o||"",c=c||"",u=u||"",f=f||"",(l||d)&&(e=cu(e)),(h||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=cu(t)),d){let m=d({vertexShader:e,fragmentShader:t});e=m.vertexShader,t=m.fragmentShader}if(h){let m=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(m.push(p),"")),f=`${h}
${m.join(`
`)}
${f}`}if(_){const m=`
uniform float ${_};
`;r=m+r,c=m+c}return l&&(e=`vec3 troika_position_${n};
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
`,e=e.replace(/\b(position|normal|uv)\b/g,(m,p,g,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,g))?p:`troika_${p}_${n}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=rd(e,n,r,s,o),t=rd(t,n,c,u,f),{vertexShader:e,fragmentShader:t}}function rd(a,e,t,i,n){return(i||n||t)&&(a=a.replace(vm,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),a}function ZT(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let JT=0;const sd=new Map;function QT(a){const e=JSON.stringify(a,ZT);let t=sd.get(e);return t==null&&sd.set(e,t=++JT),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function $T(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(n){var r=e._bin,s=new Uint8Array(n);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(s,o);o+=4,c.push(e._readFont(s,f))}return c}return[e._readFont(s,0)]},_readFont:function(n,r){var s=e._bin,o=r;s.readFixed(n,r),r+=4;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:n,_offset:o},f={},h=0;h<l;h++){var d=s.readASCII(n,r,4);r+=4,s.readUint(n,r),r+=4;var _=s.readUint(n,r);r+=4;var m=s.readUint(n,r);r+=4,f[d]={offset:_,length:m}}for(h=0;h<c.length;h++){var p=c[h];f[p]&&(u[p.trim()]=e[p.trim()].parse(n,f[p].offset,f[p].length,u))}return u},_tabOffset:function(n,r,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var f=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,s){for(var o="",l=0;l<s;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,s){var o=e._bin._tdec;return o&&r==0&&s==n.length?o.decode(n):e._bin.readASCII(n,r,s)},readBytes:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,s,o,l){var c=e._bin,u={},f=r;c.readFixed(n,r),r+=4;var h=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var _=c.readUshort(n,r);return r+=2,u.scriptList=e._lctf.readScriptList(n,f+h),u.featureList=e._lctf.readFeatureList(n,f+d),u.lookupList=e._lctf.readLookupList(n,f+_,l),u},e._lctf.readLookupList=function(n,r,s){var o=e._bin,l=r,c=[],u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+h,s);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var u=o.readUshort(n,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var d=o.readUshort(n,r);r+=2;var _=s(n,f,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(n){for(var r=0,s=0;s<32;s++)(n>>>s&1)!=0&&r++;return r},e._lctf.readClassDef=function(n,r){var s=e._bin,o=[],l=s.readUshort(n,r);if(r+=2,l==1){var c=s.readUshort(n,r);r+=2;var u=s.readUshort(n,r);r+=2;for(var f=0;f<u;f++)o.push(c+f),o.push(c+f),o.push(s.readUshort(n,r)),r+=2}if(l==2){var h=s.readUshort(n,r);for(r+=2,f=0;f<h;f++)o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2,o.push(s.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(n,r){var s=e._bin,o={};o.fmt=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(n,r,l)),o.fmt==2&&(o.tab=s.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var s=n.tab;if(n.fmt==1)return s.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,r,4);r+=4;var h=s.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+h);d.tag=f.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(s.readUshort(n,r+2*f));return l},e._lctf.readScriptList=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readASCII(n,r,4);r+=4;var h=s.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,r){var s=e._bin,o=r,l={},c=s.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var u=s.readUshort(n,r);r+=2;for(var f=0;f<u;f++){var h=s.readASCII(n,r,4);r+=4;var d=s.readUshort(n,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var s=e._bin,o={};s.readUshort(n,r),r+=2,o.reqFeature=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);return r+=2,o.features=s.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,s){var o=e._bin;(n=new Uint8Array(n.buffer,r,s))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(n,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(n,r+f[u],r+f[u+1]));r+=f[f.length-1];var d=h[0],_=[];r=e.CFF.readIndex(n,r,_);var m=[];for(u=0;u<_.length-1;u++)m.push(o.readASCII(n,r+_[u],_[u+1]-_[u]));if(r+=_[_.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,_=[],r=e.CFF.readIndex(n,r,_);var p=[];for(u=0;u<_.length-1;u++)p.push(o.readBytes(n,r+_[u],_[u+1]-_[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var g=[];for(r=e.CFF.readIndex(n,r,g),d.FDArray=[],u=0;u<g.length-1;u++){var y=e.CFF.readDict(n,r+g[u],r+g[u+1]);e.CFF._readFDict(n,y,m),d.FDArray.push(y)}r+=g[g.length-1],r=d.FDSelect,d.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var v=o.readUshort(n,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,m),d},e.CFF._readFDict=function(n,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(n,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var f=0;f<l.length-1;f++)s.Subrs.push(o.readBytes(n,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,s){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var u=0;u<c;u++)o.push(n[r+u]);return o},e.CFF.readCharset=function(n,r,s){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var u=0;u<s;u++){var f=o.readUshort(n,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){f=o.readUshort(n,r),r+=2;var h=0;for(c==1?(h=n[r],r++):(h=o.readUshort(n,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(n,r,s){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var u=0;u<l;u++)s.push(n[r+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,r+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,s){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=o.readShort(n,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,r+1)/65535,u=5),s.val=h??"o"+f,s.size=u},e.CFF.readCharString=function(n,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,_=null;u<=20&&(d=u,h=1),u==12&&(d=100*u+f,h=2),u!=19&&u!=20||(d=u,h=2),21<=u&&u<=27&&(d=u,h=1),u==28&&(_=l.readShort(n,r+1),h=3),29<=u&&u<=31&&(d=u,h=1),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255&&(_=l.readInt(n,r+1)/65535,h=5),c.push(_??"o"+d),r+=h}return c},e.CFF.readDict=function(n,r,s){for(var o=e._bin,l={},c=[];r<s;){var u=n[r],f=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,d=null,_=null;if(u==28&&(_=o.readShort(n,r+1),h=3),u==29&&(_=o.readInt(n,r+1),h=5),32<=u&&u<=246&&(_=u-139,h=1),247<=u&&u<=250&&(_=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(_=256*-(u-251)-f-108,h=2),u==255)throw _=o.readInt(n,r+1)/65535,h=5,"unknown number";if(u==30){var m=[];for(h=1;;){var p=n[r+h];h++;var g=p>>4,y=15&p;if(g!=15&&m.push(g),y!=15&&m.push(y),y==15)break}for(var x="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<m.length;E++)x+=v[m[E]];_=parseFloat(x)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),r+=h}return l},e.cmap={},e.cmap.parse=function(n,r,s){n=new Uint8Array(n.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var _=o.readUint(n,r);r+=4;var m="p"+h+"e"+d,p=u.indexOf(_);if(p==-1){var g;p=l.tables.length,u.push(_);var y=o.readUshort(n,_);y==0?g=e.cmap.parse0(n,_):y==4?g=e.cmap.parse4(n,_):y==6?g=e.cmap.parse6(n,_):y==12?g=e.cmap.parse12(n,_):console.debug("unknown format: "+y,h,d,_),l.tables.push(g)}if(l[m]!=null)throw"multiple tables for one platform+encoding";l[m]=p}return l},e.cmap.parse0=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var s=e._bin,o=r,l={};l.format=s.readUshort(n,r),r+=2;var c=s.readUshort(n,r);r+=2,s.readUshort(n,r),r+=2;var u=s.readUshort(n,r);r+=2;var f=u/2;l.searchRange=s.readUshort(n,r),r+=2,l.entrySelector=s.readUshort(n,r),r+=2,l.rangeShift=s.readUshort(n,r),r+=2,l.endCount=s.readUshorts(n,r,f),r+=2*f,r+=2,l.startCount=s.readUshorts(n,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(s.readShort(n,r)),r+=2;for(l.idRangeOffset=s.readUshorts(n,r,f),r+=2*f,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,s.readUshort(n,r),r+=2,o.firstCode=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var s=e._bin,o={};o.format=s.readUshort(n,r),r+=2,r+=2,s.readUint(n,r),r+=4,s.readUint(n,r),r+=4;var l=s.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=s.readUint(n,u+0),h=s.readUint(n,u+4),d=s.readUint(n,u+8);o.groups.push([f,h,d])}return o},e.glyf={},e.glyf.parse=function(n,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var f=s.readUshort(o,l);if(l+=2,o.length-l<f)return null;c.instructions=s.readBytes(o,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var _=o[l];l++;for(var m=0;m<_;m++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<h;u++){var p=(2&c.flags[u])!=0,g=(16&c.flags[u])!=0;p?(c.xs.push(g?o[l]:-o[l]),l++):g?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)p=(4&c.flags[u])!=0,g=(32&c.flags[u])!=0,p?(c.ys.push(g?o[l]:-o[l]),l++):g?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,x=0;for(u=0;u<h;u++)y+=c.xs[u],x+=c.ys[u],c.xs[u]=y,c.ys[u]=x}else{var v;c.parts=[];do{v=s.readUshort(o,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=s.readUshort(o,l),l+=2,1&v){var w=s.readShort(o,l);l+=2;var T=s.readShort(o,l);l+=2}else w=s.readInt8(o,l),l++,T=s.readInt8(o,l),l++;2&v?(E.m.tx=w,E.m.ty=T):(E.p1=w,E.p2=T),8&v?(E.m.a=E.m.d=s.readF2dot14(o,l),l+=2):64&v?(E.m.a=s.readF2dot14(o,l),l+=2,E.m.d=s.readF2dot14(o,l),l+=2):128&v&&(E.m.a=s.readF2dot14(o,l),l+=2,E.m.b=s.readF2dot14(o,l),l+=2,E.m.c=s.readF2dot14(o,l),l+=2,E.m.d=s.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var R=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<R;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2,h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var d=l.readUshort(n,s);s+=2;var _=e._lctf.numOfOnes(h),m=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(n,s);s+=2;for(var g=0;g<p;g++){var y=c+l.readUshort(n,s);s+=2;var x=l.readUshort(n,y);y+=2;for(var v=[],E=0;E<x;E++){var w=l.readUshort(n,y);y+=2,h!=0&&(D=e.GPOS.readValueRecord(n,y,h),y+=2*_),d!=0&&(L=e.GPOS.readValueRecord(n,y,d),y+=2*m),v.push({gid2:w,val1:D,val2:L})}u.pairsets.push(v)}}if(u.fmt==2){var T=l.readUshort(n,s);s+=2;var R=l.readUshort(n,s);s+=2;var S=l.readUshort(n,s);s+=2;var M=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+T),u.classDef2=e._lctf.readClassDef(n,c+R),u.matrix=[],g=0;g<S;g++){var P=[];for(E=0;E<M;E++){var D=null,L=null;h!=0&&(D=e.GPOS.readValueRecord(n,s,h),s+=2*_),d!=0&&(L=e.GPOS.readValueRecord(n,s,d),s+=2*m),P.push({val1:D,val2:L})}u.matrix.push(P)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,s)+c),u.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,s+2)+c),u.markClassCount=l.readUshort(n,s+4),u.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,s+6)+c),u.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,s+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var F=l.readUshort(n,s);s+=2;var G=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(n,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(n,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(n,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(n,r,s){var o=e._bin,l=[],c=r,u=o.readUshort(n,r);r+=2;for(var f=0;f<u;f++){for(var h=[],d=0;d<s;d++)h.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(h)}return l},e.GPOS.readMarkArray=function(n,r){var s=e._bin,o=[],l=r,c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=e.GPOS.readAnchorRecord(n,s.readUshort(n,r+2)+l);f.markClass=s.readUshort(n,r),o.push(f),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var s=e._bin,o={};return o.fmt=s.readUshort(n,r),o.x=s.readShort(n,r+2),o.y=s.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,s,o){return e._lctf.parse(n,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(r==2&&u.fmt==1){h=l.readUshort(n,s),s+=2,u.seqs=[];for(var d=0;d<h;d++){var _=l.readUshort(n,s)+c;s+=2;var m=l.readUshort(n,_);u.seqs.push(l.readUshorts(n,_+2,m))}}else if(r==4)for(u.vals=[],h=l.readUshort(n,s),s+=2,d=0;d<h;d++){var p=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var g=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+g),u.scset=[];var y=l.readUshort(n,s);for(s+=2,d=0;d<y;d++){var x=l.readUshort(n,s);s+=2,u.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){h=l.readUshort(n,s),s+=2;for(var v=[],E=0;E<h;E++)v.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*E)));s+=2*h,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(n,s);s+=2;var T=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,r){var s=e._bin.readUshort,o=r,l=[],c=s(n,r);r+=2;for(var u=0;u<c;u++){var f=s(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+f))}return l},e.GSUB.readSubClassRule=function(n,r){var s=e._bin.readUshort,o={},l=s(n,r),c=s(n,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+f))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,r);r+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,r,u),r+=2*o[l[c]].length}return u=s.readUshort(n,r),r+=2,o.subst=s.readUshorts(n,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var s=e._bin,o=r,l=[],c=s.readUshort(n,r);r+=2;for(var u=0;u<c;u++){var f=s.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+f))}return l},e.GSUB.readLigature=function(n,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,r),r+=2;var l=s.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,s){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,r),r+=2,f=l.readShort(n,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(n,r,s,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,s,o);var u=l.readUshort(n,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,s=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(n,r,f)}return f},e.kern.parseV1=function(n,r,s,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(n,r),r+=4;var h=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=h>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,u)}return u},e.kern.readFormat0=function(n,r,s){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2;var h=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,f!=l&&(s.glyph1.push(f),s.rval.push({glyph2:[],vals:[]}));var _=s.rval[s.rval.length-1];_.glyph2.push(h),_.vals.push(d),l=f}return r},e.loca={},e.loca.parse=function(n,r,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,f=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(n,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(n,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,s){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,s){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,d=0;d<c;d++){var _=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var p=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var y=o.readUshort(n,r);r+=2;var x=o.readUshort(n,r);r+=2;var v,E=f[g],w=h+12*c+x;if(_==0)v=o.readUnicode(n,w,y/2);else if(_==3&&m==0)v=o.readUnicode(n,w,y/2);else if(m==0)v=o.readASCII(n,w,y);else if(m==1)v=o.readUnicode(n,w,y/2);else if(m==3)v=o.readUnicode(n,w,y/2);else{if(_!=1)throw"unknown encoding "+m+", platformID: "+_;v=o.readASCII(n,w,y),console.debug("reading unknown MAC encoding "+m+" as ASCII")}var T="p"+_+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][E!==void 0?E:g]=v,l[T]._lang=p}for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==1033)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==0)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==3084)return l[R];for(var R in l)if(l[R].postScriptName!=null)return l[R];for(var R in l){u=R;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,r,s){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,r),r+=2,s.usWeightClass=o.readUshort(n,r),r+=2,s.usWidthClass=o.readUshort(n,r),r+=2,s.fsType=o.readUshort(n,r),r+=2,s.ySubscriptXSize=o.readShort(n,r),r+=2,s.ySubscriptYSize=o.readShort(n,r),r+=2,s.ySubscriptXOffset=o.readShort(n,r),r+=2,s.ySubscriptYOffset=o.readShort(n,r),r+=2,s.ySuperscriptXSize=o.readShort(n,r),r+=2,s.ySuperscriptYSize=o.readShort(n,r),r+=2,s.ySuperscriptXOffset=o.readShort(n,r),r+=2,s.ySuperscriptYOffset=o.readShort(n,r),r+=2,s.yStrikeoutSize=o.readShort(n,r),r+=2,s.yStrikeoutPosition=o.readShort(n,r),r+=2,s.sFamilyClass=o.readShort(n,r),r+=2,s.panose=o.readBytes(n,r,10),r+=10,s.ulUnicodeRange1=o.readUint(n,r),r+=4,s.ulUnicodeRange2=o.readUint(n,r),r+=4,s.ulUnicodeRange3=o.readUint(n,r),r+=4,s.ulUnicodeRange4=o.readUint(n,r),r+=4,s.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,s.fsSelection=o.readUshort(n,r),r+=2,s.usFirstCharIndex=o.readUshort(n,r),r+=2,s.usLastCharIndex=o.readUshort(n,r),r+=2,s.sTypoAscender=o.readShort(n,r),r+=2,s.sTypoDescender=o.readShort(n,r),r+=2,s.sTypoLineGap=o.readShort(n,r),r+=2,s.usWinAscent=o.readUshort(n,r),r+=2,s.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,s){var o=e._bin;return r=e["OS/2"].version0(n,r,s),s.ulCodePageRange1=o.readUint(n,r),r+=4,s.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,s){var o=e._bin;return r=e["OS/2"].version1(n,r,s),s.sxHeight=o.readShort(n,r),r+=2,s.sCapHeight=o.readShort(n,r),r+=2,s.usDefault=o.readUshort(n,r),r+=2,s.usBreak=o.readUshort(n,r),r+=2,s.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,s){var o=e._bin;return r=e["OS/2"].version2(n,r,s),s.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,s){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,u,s)}else n.glyf&&e.U._drawGlyf(r,n,s);return s},e.U._drawGlyf=function(n,r,s){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(n,r){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,f=c==l?o:c+1,h=1&n.flags[c],d=1&n.flags[u],_=1&n.flags[f],m=n.xs[c],p=n.ys[c];if(c==o)if(h){if(!d){e.U.P.moveTo(r,m,p);continue}e.U.P.moveTo(r,n.xs[u],n.ys[u])}else d?e.U.P.moveTo(r,n.xs[u],n.ys[u]):e.U.P.moveTo(r,(n.xs[u]+m)/2,(n.ys[u]+p)/2);h?d&&e.U.P.lineTo(r,m,p):_?e.U.P.qcurveTo(r,m,p,n.xs[f],n.ys[f]):e.U.P.qcurveTo(r,m,p,(m+n.xs[f])/2,(p+n.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],d=l.crds[f+1];s.crds.push(h*u.a+d*u.b+u.tx),s.crds.push(h*u.c+d*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)s.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(n,r){var s=e._lctf.getInterval(r,n);return s==-1?0:r[s+2]},e.U._applySubs=function(n,r,s,o){for(var l=n.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,f=s.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,n[r]))!=-1){if(s.ltype==1)n[r],f.fmt==1?n[r]=n[r]+f.delta:n[r]=f.newg[u];else if(s.ltype==4)for(var h=f.vals[u],d=0;d<h.length;d++){var _=h[d],m=_.chain.length;if(!(m>l)){for(var p=!0,g=0,y=0;y<m;y++){for(;n[r+g+(1+y)]==-1;)g++;_.chain[y]!=n[r+g+(1+y)]&&(p=!1)}if(p){for(n[r]=_.nglyph,y=0;y<m+g;y++)n[r+y+1]=-1;break}}}else if(s.ltype==5&&f.fmt==2)for(var x=e._lctf.getInterval(f.cDef,n[r]),v=f.cDef[x+2],E=f.scset[v],w=0;w<E.length;w++){var T=E[w],R=T.input;if(!(R.length>l)){for(p=!0,y=0;y<R.length;y++){var S=e._lctf.getInterval(f.cDef,n[r+1+y]);if(x==-1&&f.cDef[S+2]!=R[y]){p=!1;break}}if(p){var M=T.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(s.ltype==6&&f.fmt==3){if(!e.U._glsCovered(n,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(n,f.inptCvg,r)||!e.U._glsCovered(n,f.ahedCvg,r+f.inptCvg.length))continue;var P=f.lookupRec;for(w=0;w<P.length;w+=2){x=P[w];var D=o[P[w+1]];e.U._applySubs(n,r+x,D,o)}}}}},e.U._glsCovered=function(n,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(n,u),d=0;d<h.crds.length;d+=2)o.crds.push(h.crds[d]+l),o.crds.push(h.crds[d+1]);for(s&&o.cmds.push(s),d=0;d<h.cmds.length;d++)o.cmds.push(h.cmds[d]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(n,u,f))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,s){n.cmds.push("M"),n.crds.push(r,s)},e.U.P.lineTo=function(n,r,s){n.cmds.push("L"),n.crds.push(r,s)},e.U.P.curveTo=function(n,r,s,o,l,c,u){n.cmds.push("C"),n.crds.push(r,s,o,l,c,u)},e.U.P.qcurveTo=function(n,r,s,o,l){n.cmds.push("Q"),n.crds.push(r,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,s,o,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open,_=0,m=r.x,p=r.y,g=0,y=0,x=0,v=0,E=0,w=0,T=0,R=0,S=0,M=0,P={val:0,size:0};_<n.length;){e.CFF.getCharString(n,_,P);var D=P.val;if(_+=P.size,D=="o1"||D=="o18")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(D=="o3"||D=="o23")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(D=="o4")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,m,p),d=!0;else if(D=="o5")for(;c.length>0;)m+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,m,p);else if(D=="o6"||D=="o7")for(var L=c.length,F=D=="o6",G=0;G<L;G++){var B=c.shift();F?m+=B:p+=B,F=!F,e.U.P.lineTo(l,m,p)}else if(D=="o8"||D=="o24"){L=c.length;for(var q=0;q+6<=L;)g=m+c.shift(),y=p+c.shift(),x=g+c.shift(),v=y+c.shift(),m=x+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,g,y,x,v,m,p),q+=6;D=="o24"&&(m+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,m,p))}else{if(D=="o11")break;if(D=="o1234"||D=="o1235"||D=="o1236"||D=="o1237")D=="o1234"&&(y=p,x=(g=m+c.shift())+c.shift(),M=v=y+c.shift(),w=v,R=p,m=(T=(E=(S=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,R,m,p)),D=="o1235"&&(g=m+c.shift(),y=p+c.shift(),x=g+c.shift(),v=y+c.shift(),S=x+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),T=E+c.shift(),R=w+c.shift(),m=T+c.shift(),p=R+c.shift(),c.shift(),e.U.P.curveTo(l,g,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,R,m,p)),D=="o1236"&&(g=m+c.shift(),y=p+c.shift(),x=g+c.shift(),M=v=y+c.shift(),w=v,T=(E=(S=x+c.shift())+c.shift())+c.shift(),R=w+c.shift(),m=T+c.shift(),e.U.P.curveTo(l,g,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,R,m,p)),D=="o1237"&&(g=m+c.shift(),y=p+c.shift(),x=g+c.shift(),v=y+c.shift(),S=x+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),T=E+c.shift(),R=w+c.shift(),Math.abs(T-m)>Math.abs(R-p)?m=T+c.shift():p=R+c.shift(),e.U.P.curveTo(l,g,y,x,v,S,M),e.U.P.curveTo(l,E,w,T,R,m,p));else if(D=="o14"){if(c.length>0&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),c.length==4){var H=c.shift(),Z=c.shift(),Y=c.shift(),I=c.shift(),W=e.CFF.glyphBySE(s,Y),ee=e.CFF.glyphBySE(s,I);e.U._drawCFF(s.CharStrings[W],r,s,o,l),r.x=H,r.y=Z,e.U._drawCFF(s.CharStrings[ee],r,s,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(D=="o19"||D=="o20")c.length%2!=0&&!f&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,_+=u+7>>3;else if(D=="o21")c.length>2&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),p+=c.pop(),m+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,m,p),d=!0;else if(D=="o22")c.length>1&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),m+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,m,p),d=!0;else if(D=="o25"){for(;c.length>6;)m+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,m,p);g=m+c.shift(),y=p+c.shift(),x=g+c.shift(),v=y+c.shift(),m=x+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,g,y,x,v,m,p)}else if(D=="o26")for(c.length%2&&(m+=c.shift());c.length>0;)g=m,y=p+c.shift(),m=x=g+c.shift(),p=(v=y+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,x,v,m,p);else if(D=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)y=p,x=(g=m+c.shift())+c.shift(),v=y+c.shift(),m=x+c.shift(),p=v,e.U.P.curveTo(l,g,y,x,v,m,p);else if(D=="o10"||D=="o29"){var N=D=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ne=N.Subrs[k+N.Bias];r.x=m,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d,e.U._drawCFF(ne,r,s,o,l),m=r.x,p=r.y,u=r.nStems,f=r.haveWidth,h=r.width,d=r.open}}else if(D=="o30"||D=="o31"){var X=c.length,ie=(q=0,D=="o31");for(q+=X-(L=-3&X);q<L;)ie?(y=p,x=(g=m+c.shift())+c.shift(),p=(v=y+c.shift())+c.shift(),L-q==5?(m=x+c.shift(),q++):m=x,ie=!1):(g=m,y=p+c.shift(),x=g+c.shift(),v=y+c.shift(),m=x+c.shift(),L-q==5?(p=v+c.shift(),q++):p=v,ie=!0),e.U.P.curveTo(l,g,y,x,v,m,p),q+=4}else{if((D+"").charAt(0)=="o")throw console.debug("Unknown operation: "+D,n),D;c.push(D)}}}r.x=m,r.y=p,r.nStems=u,r.haveWidth=f,r.width=h,r.open=d};var t=e,i={Typr:t};return a.Typr=t,a.default=i,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function e1(){return function(a){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(D,L){for(var F=new t(31),G=0;G<31;++G)F[G]=L+=1<<D[G-1];var B=new i(F[30]);for(G=1;G<30;++G)for(var q=F[G];q<F[G+1];++q)B[q]=q-F[G]<<5|G;return[F,B]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=o(r,0)[0],h=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,h[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var m=function(D,L,F){for(var G=D.length,B=0,q=new t(L);B<G;++B)++q[D[B]-1];var H,Z=new t(L);for(B=0;B<L;++B)Z[B]=Z[B-1]+q[B-1]<<1;{H=new t(1<<L);var Y=15-L;for(B=0;B<G;++B)if(D[B])for(var I=B<<4|D[B],W=L-D[B],ee=Z[D[B]-1]++<<W,N=ee|(1<<W)-1;ee<=N;++ee)H[h[ee]>>>Y]=I}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var g=new e(32);for(d=0;d<32;++d)g[d]=5;var y=m(p,9),x=m(g,5),v=function(D){for(var L=D[0],F=1;F<D.length;++F)D[F]>L&&(L=D[F]);return L},E=function(D,L,F){var G=L/8|0;return(D[G]|D[G+1]<<8)>>(7&L)&F},w=function(D,L){var F=L/8|0;return(D[F]|D[F+1]<<8|D[F+2]<<16)>>(7&L)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(D,L,F){var G=new Error(L||T[D]);if(G.code=D,Error.captureStackTrace&&Error.captureStackTrace(G,R),!F)throw G;return G},S=function(D,L,F){var G=D.length;if(!G||F&&!F.l&&G<5)return L||new e(0);var B=!L||F,q=!F||F.i;F||(F={}),L||(L=new e(3*G));var H,Z=function(oe){var Ue=L.length;if(oe>Ue){var Fe=new e(Math.max(2*Ue,oe));Fe.set(L),L=Fe}},Y=F.f||0,I=F.p||0,W=F.b||0,ee=F.l,N=F.d,k=F.m,ne=F.n,X=8*G;do{if(!ee){F.f=Y=E(D,I,1);var ie=E(D,I+1,3);if(I+=3,!ie){var xe=D[(de=((H=I)/8|0)+(7&H&&1)+4)-4]|D[de-3]<<8,_e=de+xe;if(_e>G){q&&R(0);break}B&&Z(W+xe),L.set(D.subarray(de,_e),W),F.b=W+=xe,F.p=I=8*_e;continue}if(ie==1)ee=y,N=x,k=9,ne=5;else if(ie==2){var ve=E(D,I,31)+257,fe=E(D,I+10,15)+4,De=ve+E(D,I+5,31)+1;I+=14;for(var U=new e(De),Oe=new e(19),Ae=0;Ae<fe;++Ae)Oe[s[Ae]]=E(D,I+3*Ae,7);I+=3*fe;var Re=v(Oe),ae=(1<<Re)-1,be=m(Oe,Re);for(Ae=0;Ae<De;){var de,A=be[E(D,I,ae)];if(I+=15&A,(de=A>>>4)<16)U[Ae++]=de;else{var b=0,O=0;for(de==16?(O=3+E(D,I,3),I+=2,b=U[Ae-1]):de==17?(O=3+E(D,I,7),I+=3):de==18&&(O=11+E(D,I,127),I+=7);O--;)U[Ae++]=b}}var Q=U.subarray(0,ve),$=U.subarray(ve);k=v(Q),ne=v($),ee=m(Q,k),N=m($,ne)}else R(1);if(I>X){q&&R(0);break}}B&&Z(W+131072);for(var se=(1<<k)-1,he=(1<<ne)-1,le=I;;le=I){var me=(b=ee[w(D,I)&se])>>>4;if((I+=15&b)>X){q&&R(0);break}if(b||R(2),me<256)L[W++]=me;else{if(me==256){le=I,ee=null;break}var Le=me-254;if(me>264){var ce=n[Ae=me-257];Le=E(D,I,(1<<ce)-1)+c[Ae],I+=ce}var Se=N[w(D,I)&he],Te=Se>>>4;if(Se||R(3),I+=15&Se,$=f[Te],Te>3&&(ce=r[Te],$+=w(D,I)&(1<<ce)-1,I+=ce),I>X){q&&R(0);break}B&&Z(W+131072);for(var Ee=W+Le;W<Ee;W+=4)L[W]=L[W-$],L[W+1]=L[W+1-$],L[W+2]=L[W+2-$],L[W+3]=L[W+3-$];W=Ee}}F.l=ee,F.p=le,F.b=W,ee&&(Y=1,F.m=k,F.d=N,F.n=ne)}while(!Y);return W==L.length?L:function(oe,Ue,Fe){(Fe==null||Fe>oe.length)&&(Fe=oe.length);var qe=new(oe instanceof t?t:oe instanceof i?i:e)(Fe-Ue);return qe.set(oe.subarray(Ue,Fe)),qe}(L,0,W)},M=new e(0),P=typeof TextDecoder<"u"&&new TextDecoder;try{P.decode(M,{stream:!0})}catch{}return a.convert_streams=function(D){var L=new DataView(D),F=0;function G(){var ve=L.getUint16(F);return F+=2,ve}function B(){var ve=L.getUint32(F);return F+=4,ve}function q(ve){xe.setUint16(_e,ve),_e+=2}function H(ve){xe.setUint32(_e,ve),_e+=4}for(var Z={signature:B(),flavor:B(),length:B(),numTables:G(),reserved:G(),totalSfntSize:B(),majorVersion:G(),minorVersion:G(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},Y=0;Math.pow(2,Y)<=Z.numTables;)Y++;Y--;for(var I=16*Math.pow(2,Y),W=16*Z.numTables-I,ee=12,N=[],k=0;k<Z.numTables;k++)N.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),ee+=16;var ne,X=new Uint8Array(12+16*N.length+N.reduce(function(ve,fe){return ve+fe.origLength+4},0)),ie=X.buffer,xe=new DataView(ie),_e=0;return H(Z.flavor),q(Z.numTables),q(I),q(Y),q(W),N.forEach(function(ve){H(ve.tag),H(ve.origChecksum),H(ee),H(ve.origLength),ve.outOffset=ee,(ee+=ve.origLength)%4!=0&&(ee+=4-ee%4)}),N.forEach(function(ve){var fe,De=D.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var U=new Uint8Array(ve.origLength);fe=new Uint8Array(De,2),S(fe,U)}else U=new Uint8Array(De);X.set(U,ve.outOffset);var Oe=0;(ee=ve.outOffset+ve.origLength)%4!=0&&(Oe=4-ee%4),X.set(new Uint8Array(Oe).buffer,ve.outOffset+ve.origLength),ne=ee+Oe}),ie.slice(0,ne)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function t1(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,s=4,o=8,l=16,c=32;let u;function f(T){if(!u){const R={R:r,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let S in i){let M=0;i[S].split(",").forEach(P=>{let[D,L]=P.split("+");D=parseInt(D,36),L=L?parseInt(L,36):0,u.set(M+=D,R[S]);for(let F=L;F--;)u.set(++M,R[S])})}}return u.get(T)||c}const h=1,d=2,_=3,m=4,p=[null,"isol","init","fina","medi"];function g(T){const R=new Uint8Array(T.length);let S=c,M=h,P=-1;for(let D=0;D<T.length;D++){const L=T.codePointAt(D);let F=f(L)|0,G=h;F&o||(S&(n|s|l)?F&(r|s|l)?(G=_,(M===h||M===_)&&R[P]++):F&(n|c)&&(M===d||M===m)&&R[P]--:S&(r|c)&&(M===d||M===m)&&R[P]--,M=R[D]=G,S=F,P=D,L>65535&&D++)}return R}function y(T,R){const S=[];for(let P=0;P<R.length;P++){const D=R.codePointAt(P);D>65535&&P++,S.push(a.U.codeToGlyph(T,D))}const M=T.GSUB;if(M){const{lookupList:P,featureList:D}=M;let L;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];D.forEach(B=>{if(F.test(B.tag))for(let q=0;q<B.tab.length;q++){if(G[B.tab[q]])continue;G[B.tab[q]]=!0;const H=P[B.tab[q]],Z=/^(isol|init|fina|medi)$/.test(B.tag);Z&&!L&&(L=g(R));for(let Y=0;Y<S.length;Y++)(!L||!Z||p[L[Y]]===B.tag)&&a.U._applySubs(S,Y,H,P)}})}return S}function x(T,R){const S=new Int16Array(R.length*3);let M=0;for(;M<R.length;M++){const F=R[M];if(F===-1)continue;S[M*3+2]=T.hmtx.aWidth[F];const G=T.GPOS;if(G){const B=G.lookupList;for(let q=0;q<B.length;q++){const H=B[q];for(let Z=0;Z<H.tabs.length;Z++){const Y=H.tabs[Z];if(H.ltype===1){if(a._lctf.coverageIndex(Y.coverage,F)!==-1&&Y.pos){L(Y.pos,M);break}}else if(H.ltype===2){let I=null,W=P();if(W!==-1){const ee=a._lctf.coverageIndex(Y.coverage,R[W]);if(ee!==-1){if(Y.fmt===1){const N=Y.pairsets[ee];for(let k=0;k<N.length;k++)N[k].gid2===F&&(I=N[k])}else if(Y.fmt===2){const N=a.U._getGlyphClass(R[W],Y.classDef1),k=a.U._getGlyphClass(F,Y.classDef2);I=Y.matrix[N][k]}if(I){I.val1&&L(I.val1,W),I.val2&&L(I.val2,M);break}}}}else if(H.ltype===4){const I=a._lctf.coverageIndex(Y.markCoverage,F);if(I!==-1){const W=P(D),ee=W===-1?-1:a._lctf.coverageIndex(Y.baseCoverage,R[W]);if(ee!==-1){const N=Y.markArray[I],k=Y.baseArray[ee][N.markClass];S[M*3]=k.x-N.x+S[W*3]-S[W*3+2],S[M*3+1]=k.y-N.y+S[W*3+1];break}}}else if(H.ltype===6){const I=a._lctf.coverageIndex(Y.mark1Coverage,F);if(I!==-1){const W=P();if(W!==-1){const ee=R[W];if(v(T,ee)===3){const N=a._lctf.coverageIndex(Y.mark2Coverage,ee);if(N!==-1){const k=Y.mark1Array[I],ne=Y.mark2Array[N][k.markClass];S[M*3]=ne.x-k.x+S[W*3]-S[W*3+2],S[M*3+1]=ne.y-k.y+S[W*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const B=P();if(B!==-1){const q=T.kern.glyph1.indexOf(R[B]);if(q!==-1){const H=T.kern.rval[q].glyph2.indexOf(F);H!==-1&&(S[B*3+2]+=T.kern.rval[q].vals[H])}}}}return S;function P(F){for(let G=M-1;G>=0;G--)if(R[G]!==-1&&(!F||F(R[G])))return G;return-1}function D(F){return v(T,F)===1}function L(F,G){for(let B=0;B<3;B++)S[G*3+B]+=F[B]||0}}function v(T,R){const S=T.GDEF&&T.GDEF.glyphClassDef;return S?a.U._getGlyphClass(R,S):0}function E(...T){for(let R=0;R<T.length;R++)if(typeof T[R]=="number")return T[R]}function w(T){const R=Object.create(null),S=T["OS/2"],M=T.hhea,P=T.head.unitsPerEm,D=E(S&&S.sTypoAscender,M&&M.ascender,P),L={unitsPerEm:P,ascender:D,descender:E(S&&S.sTypoDescender,M&&M.descender,0),capHeight:E(S&&S.sCapHeight,D),xHeight:E(S&&S.sxHeight,D),lineGap:E(S&&S.sTypoLineGap,M&&M.lineGap),supportsCodePoint(F){return a.U.codeToGlyph(T,F)>0},forEachGlyph(F,G,B,q){let H=0;const Z=1/L.unitsPerEm*G,Y=y(T,F);let I=0;const W=x(T,Y);return Y.forEach((ee,N)=>{if(ee!==-1){let k=R[ee];if(!k){const{cmds:ne,crds:X}=a.U.glyphToPath(T,ee);let ie="",xe=0;for(let U=0,Oe=ne.length;U<Oe;U++){const Ae=t[ne[U]];ie+=ne[U];for(let Re=1;Re<=Ae;Re++)ie+=(Re>1?",":"")+X[xe++]}let _e,ve,fe,De;if(X.length){_e=ve=1/0,fe=De=-1/0;for(let U=0,Oe=X.length;U<Oe;U+=2){let Ae=X[U],Re=X[U+1];Ae<_e&&(_e=Ae),Re<ve&&(ve=Re),Ae>fe&&(fe=Ae),Re>De&&(De=Re)}}else _e=fe=ve=De=0;k=R[ee]={index:ee,advanceWidth:T.hmtx.aWidth[ee],xMin:_e,yMin:ve,xMax:fe,yMax:De,path:ie}}q.call(null,k,H+W[N*3]*Z,W[N*3+1]*Z,I),H+=W[N*3+2]*Z,B&&(H+=B*G)}I+=F.codePointAt(I)>65535?2:1}),H}};return L}return function(R){const S=new Uint8Array(R,0,4),M=a._bin.readASCII(S,0,4);if(M==="wOFF")R=e(R);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(a.parse(R)[0])}}const n1=Ps({name:"Typr Font Parser",dependencies:[$T,e1,t1],init(a,e,t){const i=a(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function i1(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var v=x>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&x))},e.prototype.has=function(x){var v=this.buckets.get(x>>5);return v!==void 0&&(v&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach(function(v,E){x.push((+E).toString(36)+":"+v.toString(36))}),x.join(",")},e.prototype.deserialize=function(x){var v=this;this.buckets.clear(),x.split(",").forEach(function(E){var w=E.split(":");v.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(x){var v=function(w){return w&n}(x).toString(16),E=function(w){return(w&n)+t-1}(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+v+"-"+E+".json"}function s(x,v){var E=x&i,w=v.codePointAt(E/6|0);return((w=(w||48)-48)&1<<E%6)!=0}function o(x,v){var E;(E=x,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(w){var T=w[0],R=w[1];R===void 0&&(R=T),v(T,R)})}function l(x,v){o(x,function(E,w){for(var T=E;T<=w;T++)v(T)})}var c={},u={},f=new WeakMap,h="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var v=f.get(x);return v||(v=new e,l(x.ranges,function(E){return v.add(E)}),f.set(x,v)),v}var _,m=new Map;function p(x,v,E){return x[v]?v:x[E]?E:function(w){for(var T in w)return T}(x)}function g(x,v){var E=v;if(!x.includes(E)){E=1/0;for(var w=0;w<x.length;w++)Math.abs(x[w]-v)<Math.abs(E-v)&&(E=x[w])}return E}function y(x){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){_.add(v)})),_.has(x)}return a.CodePointSet=e,a.clearCache=function(){c={},u={}},a.getFontsForString=function(x,v){v===void 0&&(v={});var E,w=v.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(E=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(E)?"ja":"en");var T=v.category;T===void 0&&(T="sans-serif");var R=v.style;R===void 0&&(R="normal");var S=v.weight;S===void 0&&(S=400);var M=(v.dataUrl||h).replace(/\/$/g,""),P=new Map,D=new Uint8Array(x.length),L={},F={},G=new Array(x.length),B=new Map,q=!1;function H(I){var W=m.get(I);return W||(W=fetch(M+"/"+I).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]})}).catch(function(ee){if(M!==h)return q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+ee.message),q=!0),M=h,m.delete(I),H(I);throw ee}),m.set(I,W)),W}for(var Z=function(I){var W=x.codePointAt(I),ee=r(W);G[I]=ee,c[ee]||B.has(ee)||B.set(ee,H(ee).then(function(N){c[ee]=N})),W>65535&&(I++,Y=I)},Y=0;Y<x.length;Y++)Z(Y);return Promise.all(B.values()).then(function(){B.clear();for(var I=function(ee){var N=x.codePointAt(ee),k=null,ne=c[G[ee]],X=void 0;for(var ie in ne){var xe=F[ie];if(xe===void 0&&(xe=F[ie]=new RegExp(ie).test(w||"en")),xe){for(var _e in X=ie,ne[ie])if(s(N,ne[ie][_e])){k=_e;break}break}}if(!k){e:for(var ve in ne)if(ve!==X){for(var fe in ne[ve])if(s(N,ne[ve][fe])){k=fe;break e}}}k||(console.debug("No font coverage for U+"+N.toString(16)),k="latin"),G[ee]=k,u[k]||B.has(k)||B.set(k,H("font-meta/"+k+".json").then(function(De){u[k]=De})),N>65535&&(ee++,W=ee)},W=0;W<x.length;W++)I(W);return Promise.all(B.values())}).then(function(){for(var I,W=null,ee=0;ee<x.length;ee++){var N=x.codePointAt(ee);if(W&&(y(N)||d(W).has(N)))D[ee]=D[ee-1];else{W=u[G[ee]];var k=L[W.id];if(!k){var ne=W.typeforms,X=p(ne,T,"sans-serif"),ie=p(ne[X],R,"normal"),xe=g((I=ne[X])===null||I===void 0?void 0:I[ie],S);k=L[W.id]=M+"/font-files/"+W.id+"/"+X+"."+ie+"."+xe+".woff"}var _e=P.get(k);_e==null&&(_e=P.size,P.set(k,_e)),D[ee]=_e}N>65535&&(ee++,D[ee]=D[ee-1])}return{fontUrls:Array.from(P.keys()),chars:D}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function r1(a,e){const t=Object.create(null),i=Object.create(null);function n(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=a(c.response);u.src=s,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):i[s]?i[s].push(o):(i[s]=[o],n(s,c=>{c.src=s,t[s]=c,i[s].forEach(u=>u(c)),delete i[s]}))}return function(s,o,{lang:l,fonts:c=[],style:u="normal",weight:f="normal",unicodeFontsURL:h}={}){const d=new Uint8Array(s.length),_=[];s.length||y();const m=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof f!="number"&&(f=f==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let T=0;(function R(S=0){for(let M=S,P=s.length;M<P;M++){const D=s.codePointAt(M);if(T===1&&_[d[M-1]].supportsCodePoint(D)||M>0&&/\s/.test(s[M]))d[M]=d[M-1],T===2&&(p[p.length-1][1]=M);else for(let L=d[M],F=c.length;L<=F;L++)if(L===F){const G=T===2?p[p.length-1]:p[p.length]=[M,M];G[1]=M,T=2}else{d[M]=L;const{src:G,unicodeRange:B}=c[L];if(!B||x(D,B)){const q=t[G];if(!q){r(G,()=>{R(M)});return}if(q.supportsCodePoint(D)){let H=m.get(q);typeof H!="number"&&(H=_.length,_.push(q),m.set(q,H)),d[M]=H,T=1;break}}}D>65535&&M+1<P&&(d[M+1]=d[M],M++,T===2&&(p[p.length-1][1]=M))}g()})()}else p.push([0,s.length-1]),g();function g(){if(p.length){const v=p.map(E=>s.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:f,dataUrl:h}).then(({fontUrls:E,chars:w})=>{const T=_.length;let R=0;p.forEach(M=>{for(let P=0,D=M[1]-M[0];P<=D;P++)d[M[0]+P]=w[R++]+T;R++});let S=0;E.forEach((M,P)=>{r(M,D=>{_[P+T]=D,++S===E.length&&y()})})})}else y()}function y(){o({chars:d,fonts:_})}function x(v,E){for(let w=0;w<E.length;w++){const[T,R=T]=E[w];if(T<=v&&v<=R)return!0}return!1}}}const s1=Ps({name:"FontResolver",dependencies:[r1,n1,i1],init(a,e,t){return a(e,t())}});function a1(a,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:_,lang:m,fonts:p,style:g,weight:y,preResolvedFonts:x,unicodeFontsURL:v},E){const w=({chars:T,fonts:R})=>{let S,M;const P=[];for(let D=0;D<T.length;D++)T[D]!==M?(M=T[D],P.push(S={start:D,end:D,fontObj:R[T[D]]})):S.end=D;E(P)};x?w(x):a(_,w,{lang:m,fonts:p,style:g,weight:y,unicodeFontsURL:v})}function o({text:_="",font:m,lang:p,sdfGlyphSize:g=64,fontSize:y=400,fontWeight:x=1,fontStyle:v="normal",letterSpacing:E=0,lineHeight:w="normal",maxWidth:T=1/0,direction:R,textAlign:S="left",textIndent:M=0,whiteSpace:P="normal",overflowWrap:D="normal",anchorX:L=0,anchorY:F=0,metricsOnly:G=!1,unicodeFontsURL:B,preResolvedFonts:q=null,includeCaretPositions:H=!1,chunkedBoundsSize:Z=8192,colorRanges:Y=null},I){const W=f(),ee={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,E=+E,T=+T,w=w||"normal",M=+M,s({text:_,lang:p,style:v,weight:x,fonts:typeof m=="string"?[{src:m}]:m,unicodeFontsURL:B,preResolvedFonts:q},N=>{ee.fontLoad=f()-W;const k=isFinite(T);let ne=null,X=null,ie=null,xe=null,_e=null,ve=null,fe=null,De=null,U=0,Oe=0,Ae=P!=="nowrap";const Re=new Map,ae=f();let be=M,de=0,A=new h;const b=[A];N.forEach(he=>{const{fontObj:le}=he,{ascender:me,descender:Le,unitsPerEm:ce,lineGap:Se,capHeight:Te,xHeight:Ee}=le;let oe=Re.get(le);if(!oe){const ue=y/ce,te=w==="normal"?(me-Le+Se)*ue:w*y,pe=(te-(me-Le)*ue)/2,ye=Math.min(te,(me-Le)*ue),ge=(me+Le)/2*ue+ye/2;oe={index:Re.size,src:le.src,fontObj:le,fontSizeMult:ue,unitsPerEm:ce,ascender:me*ue,descender:Le*ue,capHeight:Te*ue,xHeight:Ee*ue,lineHeight:te,baseline:-pe-me*ue,caretTop:ge,caretBottom:ge-ye},Re.set(le,oe)}const{fontSizeMult:Ue}=oe,Fe=_.slice(he.start,he.end+1);let qe,z;le.forEachGlyph(Fe,y,E,(ue,te,pe,ye)=>{te+=de,ye+=he.start,qe=te,z=ue;const ge=_.charAt(ye),Ne=ue.advanceWidth*Ue,Xe=A.count;let Be;if("isEmpty"in ue||(ue.isWhitespace=!!ge&&new RegExp(n).test(ge),ue.canBreakAfter=!!ge&&r.test(ge),ue.isEmpty=ue.xMin===ue.xMax||ue.yMin===ue.yMax||i.test(ge)),!ue.isWhitespace&&!ue.isEmpty&&Oe++,Ae&&k&&!ue.isWhitespace&&te+Ne+be>T&&Xe){if(A.glyphAt(Xe-1).glyphObj.canBreakAfter)Be=new h,be=-te;else for(let ct=Xe;ct--;)if(ct===0&&D==="break-word"){Be=new h,be=-te;break}else if(A.glyphAt(ct).glyphObj.canBreakAfter){Be=A.splitAt(ct+1);const ft=Be.glyphAt(0).x;be-=ft;for(let xt=Be.count;xt--;)Be.glyphAt(xt).x-=ft;break}Be&&(A.isSoftWrapped=!0,A=Be,b.push(A),U=T)}let Ge=A.glyphAt(A.count);Ge.glyphObj=ue,Ge.x=te+be,Ge.y=pe,Ge.width=Ne,Ge.charIndex=ye,Ge.fontData=oe,ge===`
`&&(A=new h,b.push(A),be=-(te+Ne+E*y)+M)}),de=qe+z.advanceWidth*Ue+E*y});let O=0;b.forEach(he=>{let le=!0;for(let me=he.count;me--;){const Le=he.glyphAt(me);le&&!Le.glyphObj.isWhitespace&&(he.width=Le.x+Le.width,he.width>U&&(U=he.width),le=!1);let{lineHeight:ce,capHeight:Se,xHeight:Te,baseline:Ee}=Le.fontData;ce>he.lineHeight&&(he.lineHeight=ce);const oe=Ee-he.baseline;oe<0&&(he.baseline+=oe,he.cap+=oe,he.ex+=oe),he.cap=Math.max(he.cap,he.baseline+Se),he.ex=Math.max(he.ex,he.baseline+Te)}he.baseline-=O,he.cap-=O,he.ex-=O,O+=he.lineHeight});let Q=0,$=0;if(L&&(typeof L=="number"?Q=-L:typeof L=="string"&&(Q=-U*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),F&&(typeof F=="number"?$=-F:typeof F=="string"&&($=F==="top"?0:F==="top-baseline"?-b[0].baseline:F==="top-cap"?-b[0].cap:F==="top-ex"?-b[0].ex:F==="middle"?O/2:F==="bottom"?O:F==="bottom-baseline"?-b[b.length-1].baseline:c(F)*O)),!G){const he=e.getEmbeddingLevels(_,R);ne=new Uint16Array(Oe),X=new Uint8Array(Oe),ie=new Float32Array(Oe*2),xe={},fe=[1/0,1/0,-1/0,-1/0],De=[],H&&(ve=new Float32Array(_.length*4)),Y&&(_e=new Uint8Array(Oe*3));let le=0,me=-1,Le=-1,ce,Se;if(b.forEach((Te,Ee)=>{let{count:oe,width:Ue}=Te;if(oe>0){let Fe=0;for(let ye=oe;ye--&&Te.glyphAt(ye).glyphObj.isWhitespace;)Fe++;let qe=0,z=0;if(S==="center")qe=(U-Ue)/2;else if(S==="right")qe=U-Ue;else if(S==="justify"&&Te.isSoftWrapped){let ye=0;for(let ge=oe-Fe;ge--;)Te.glyphAt(ge).glyphObj.isWhitespace&&ye++;z=(U-Ue)/ye}if(z||qe){let ye=0;for(let ge=0;ge<oe;ge++){let Ne=Te.glyphAt(ge);const Xe=Ne.glyphObj;Ne.x+=qe+ye,z!==0&&Xe.isWhitespace&&ge<oe-Fe&&(ye+=z,Ne.width+=z)}}const ue=e.getReorderSegments(_,he,Te.glyphAt(0).charIndex,Te.glyphAt(Te.count-1).charIndex);for(let ye=0;ye<ue.length;ye++){const[ge,Ne]=ue[ye];let Xe=1/0,Be=-1/0;for(let Ge=0;Ge<oe;Ge++)if(Te.glyphAt(Ge).charIndex>=ge){let ct=Ge,ft=Ge;for(;ft<oe;ft++){let xt=Te.glyphAt(ft);if(xt.charIndex>Ne)break;ft<oe-Fe&&(Xe=Math.min(Xe,xt.x),Be=Math.max(Be,xt.x+xt.width))}for(let xt=ct;xt<ft;xt++){const rn=Te.glyphAt(xt);rn.x=Be-(rn.x+rn.width-Xe)}break}}let te;const pe=ye=>te=ye;for(let ye=0;ye<oe;ye++){const ge=Te.glyphAt(ye);te=ge.glyphObj;const Ne=te.index,Xe=he.levels[ge.charIndex]&1;if(Xe){const Be=e.getMirroredCharacter(_[ge.charIndex]);Be&&ge.fontData.fontObj.forEachGlyph(Be,0,0,pe)}if(H){const{charIndex:Be,fontData:Ge}=ge,ct=ge.x+Q,ft=ge.x+ge.width+Q;ve[Be*4]=Xe?ft:ct,ve[Be*4+1]=Xe?ct:ft,ve[Be*4+2]=Te.baseline+Ge.caretBottom+$,ve[Be*4+3]=Te.baseline+Ge.caretTop+$;const xt=Be-me;xt>1&&u(ve,me,xt),me=Be}if(Y){const{charIndex:Be}=ge;for(;Be>Le;)Le++,Y.hasOwnProperty(Le)&&(Se=Y[Le])}if(!te.isWhitespace&&!te.isEmpty){const Be=le++,{fontSizeMult:Ge,src:ct,index:ft}=ge.fontData,xt=xe[ct]||(xe[ct]={});xt[Ne]||(xt[Ne]={path:te.path,pathBounds:[te.xMin,te.yMin,te.xMax,te.yMax]});const rn=ge.x+Q,Gt=ge.y+Te.baseline+$;ie[Be*2]=rn,ie[Be*2+1]=Gt;const xn=rn+te.xMin*Ge,Bn=Gt+te.yMin*Ge,ti=rn+te.xMax*Ge,sn=Gt+te.yMax*Ge;xn<fe[0]&&(fe[0]=xn),Bn<fe[1]&&(fe[1]=Bn),ti>fe[2]&&(fe[2]=ti),sn>fe[3]&&(fe[3]=sn),Be%Z===0&&(ce={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},De.push(ce)),ce.end++;const Lt=ce.rect;if(xn<Lt[0]&&(Lt[0]=xn),Bn<Lt[1]&&(Lt[1]=Bn),ti>Lt[2]&&(Lt[2]=ti),sn>Lt[3]&&(Lt[3]=sn),ne[Be]=Ne,X[Be]=ft,Y){const Cn=Be*3;_e[Cn]=Se>>16&255,_e[Cn+1]=Se>>8&255,_e[Cn+2]=Se&255}}}}}),ve){const Te=_.length-me;Te>1&&u(ve,me,Te)}}const se=[];Re.forEach(({index:he,src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:Se,capHeight:Te,xHeight:Ee})=>{se[he]={src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:Se,capHeight:Te,xHeight:Ee}}),ee.typesetting=f()-ae,I({glyphIds:ne,glyphFontIndices:X,glyphPositions:ie,glyphData:xe,fontData:se,caretPositions:ve,glyphColors:_e,chunkedBounds:De,fontSize:y,topBaseline:$+b[0].baseline,blockBounds:[Q,$-O,Q+U,$],visibleBounds:fe,timings:ee})})}function l(_,m){o({..._,metricsOnly:!0},p=>{const[g,y,x,v]=p.blockBounds;m({width:x-g,height:v-y})})}function c(_){let m=_.match(/^([\d.]+)%$/),p=m?parseFloat(m[1]):NaN;return isNaN(p)?0:p/100}function u(_,m,p){const g=_[m*4],y=_[m*4+1],x=_[m*4+2],v=_[m*4+3],E=(y-g)/p;for(let w=0;w<p;w++){const T=(m+w)*4;_[T]=g+E*w,_[T+1]=g+E*(w+1),_[T+2]=x,_[T+3]=v}}function f(){return(self.performance||Date).now()}function h(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return h.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let m=h.flyweight;return m.data=this.data,m.index=_,m},splitAt(_){let m=new h;return m.data=this.data.splice(_*d.length),m}},h.flyweight=d.reduce((_,m,p,g)=>(Object.defineProperty(_,m,{get(){return this.data[this.index*d.length+p]},set(y){this.data[this.index*d.length+p]=y}}),_),{data:null,index:0}),{typeset:o,measure:l}}const Ar=()=>(self.performance||Date).now(),$o=_m();let ad;function o1(a,e,t,i,n,r,s,o,l,c,u=!0){return u?c1(a,e,t,i,n,r,s,o,l,c).then(null,f=>(ad||(console.warn("WebGL SDF generation failed, falling back to JS",f),ad=!0),ld(a,e,t,i,n,r,s,o,l,c))):ld(a,e,t,i,n,r,s,o,l,c)}const Co=[],l1=5;let fu=0;function xm(){const a=Ar();for(;Co.length&&Ar()-a<l1;)Co.shift()();fu=Co.length?setTimeout(xm,0):0}const c1=(...a)=>new Promise((e,t)=>{Co.push(()=>{const i=Ar();try{$o.webgl.generateIntoCanvas(...a),e({timing:Ar()-i})}catch(n){t(n)}}),fu||(fu=setTimeout(xm,0))}),u1=4,f1=2e3,od={};let h1=0;function ld(a,e,t,i,n,r,s,o,l,c){const u="TroikaTextSDFGenerator_JS_"+h1++%u1;let f=od[u];return f||(f=od[u]={workerModule:Ps({name:u,workerId:u,dependencies:[_m,Ar],init(h,d){const _=h().javascript.generate;return function(...m){const p=d();return{textureData:_(...m),timing:d()-p}}},getTransferables(h){return[h.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(a,e,t,i,n,r).then(({textureData:h,timing:d})=>{const _=Ar(),m=new Uint8Array(h.length*4);for(let p=0;p<h.length;p++)m[p*4+c]=h[p];return $o.webglUtils.renderImageData(s,m,o,l,a,e,1<<3-c),d+=Ar()-_,--f.requests===0&&(f.idleTimer=setTimeout(()=>{HT(u)},f1)),{timing:d}})}function d1(a){a._warm||($o.webgl.isSupported(a),a._warm=!0)}const p1=$o.webglUtils.resizeWebGLCanvasWithoutClearing,na={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},m1=new We;function Jr(){return(self.performance||Date).now()}const cd=Object.create(null);function g1(a,e){a=v1({},a);const t=Jr(),i=[];if(a.font&&i.push({label:"user",src:x1(a.font)}),a.font=i,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||na.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||na.unicodeFontsURL,a.colorRanges!=null){let h={};for(let d in a.colorRanges)if(a.colorRanges.hasOwnProperty(d)){let _=a.colorRanges[d];typeof _!="number"&&(_=m1.set(_).getHex()),h[d]=_}a.colorRanges=h}Object.freeze(a);const{textureWidth:n,sdfExponent:r}=na,{sdfGlyphSize:s}=a,o=n/s*4;let l=cd[s];if(!l){const h=document.createElement("canvas");h.width=n,h.height=s*256/o,l=cd[s]={glyphCount:0,sdfGlyphSize:s,sdfCanvas:h,sdfTexture:new Ct(h,void 0,void 0,void 0,$t,$t),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,_1(l)}const{sdfTexture:c,sdfCanvas:u}=l;Mm(a).then(h=>{const{glyphIds:d,glyphFontIndices:_,fontData:m,glyphPositions:p,fontSize:g,timings:y}=h,x=[],v=new Float32Array(d.length*4);let E=0,w=0;const T=Jr(),R=m.map(L=>{let F=l.glyphsByFont.get(L.src);return F||l.glyphsByFont.set(L.src,F=new Map),F});d.forEach((L,F)=>{const G=_[F],{src:B,unitsPerEm:q}=m[G];let H=R[G].get(L);if(!H){const{path:ee,pathBounds:N}=h.glyphData[B][L],k=Math.max(N[2]-N[0],N[3]-N[1])/s*(na.sdfMargin*s+.5),ne=l.glyphCount++,X=[N[0]-k,N[1]-k,N[2]+k,N[3]+k];R[G].set(L,H={path:ee,atlasIndex:ne,sdfViewBox:X}),x.push(H)}const{sdfViewBox:Z}=H,Y=p[w++],I=p[w++],W=g/q;v[E++]=Y+Z[0]*W,v[E++]=I+Z[1]*W,v[E++]=Y+Z[2]*W,v[E++]=I+Z[3]*W,d[F]=H.atlasIndex}),y.quads=(y.quads||0)+(Jr()-T);const S=Jr();y.sdf={};const M=u.height,P=Math.ceil(l.glyphCount/o),D=Math.pow(2,Math.ceil(Math.log2(P*s)));D>M&&(console.info(`Increasing SDF texture size ${M}->${D}`),p1(u,n,D),c.dispose()),Promise.all(x.map(L=>ym(L,l,a.gpuAccelerateSDF).then(({timing:F})=>{y.sdf[L.atlasIndex]=F}))).then(()=>{x.length&&!l.contextLost&&(Sm(l),c.needsUpdate=!0),y.sdfTotal=Jr()-S,y.total=Jr()-t,e(Object.freeze({parameters:a,sdfTexture:c,sdfGlyphSize:s,sdfExponent:r,glyphBounds:v,glyphAtlasIndices:d,glyphColors:h.glyphColors,caretPositions:h.caretPositions,chunkedBounds:h.chunkedBounds,ascender:h.ascender,descender:h.descender,lineHeight:h.lineHeight,capHeight:h.capHeight,xHeight:h.xHeight,topBaseline:h.topBaseline,blockBounds:h.blockBounds,visibleBounds:h.visibleBounds,timings:h.timings}))})}),Promise.resolve().then(()=>{l.contextLost||d1(u)})}function ym({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=na,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(o/i)*i,h=Math.floor(u/(o/i))*i,d=e%4;return o1(i,i,a,t,c,l,n,f,h,d,s)}function _1(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const i=[];a.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(ym(r,a,!0))})}),Promise.all(i).then(()=>{Sm(a),a.sdfTexture.needsUpdate=!0})})}function v1(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let ho;function x1(a){return ho||(ho=typeof document>"u"?{}:document.createElement("a")),ho.href=a,ho.href}function Sm(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:i,height:n}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==i*n*4)&&(s=new Uint8Array(i*n*4),t.image={width:i,height:n,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,s)}}const y1=Ps({name:"Typesetter",dependencies:[a1,s1,XT],init(a,e,t){return a(e,t())}}),Mm=Ps({name:"Typesetter",dependencies:[y1],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}});Mm.onMainThread;const ud={};function S1(a){let e=ud[a];return e||(e=ud[a]=new Cr(1,1,a,a).translate(.5,.5,0)),e}const M1="aTroikaGlyphBounds",fd="aTroikaGlyphIndex",T1="aTroikaGlyphColor";class E1 extends O_{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new $n,this.boundingBox=new Qn}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=S1(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(M1,e,4),this.updateAttributeData(fd,t,1),this.updateAttributeData(T1,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:s,max:o,sin:l,cos:c}=Math,u=n/2,f=n*2,h=Math.abs(t),d=e[0]/h,_=e[2]/h,m=r((d+u)/f)!==r((_+u)/f)?-h:s(l(d)*h,l(_)*h),p=r((d-u)/f)!==r((_-u)/f)?h:o(l(d)*h,l(_)*h),g=r((d+n)/f)!==r((_+n)/f)?h*2:o(h-c(d)*h,h-c(_)*h);i.min.set(m,e[1],t<0?-g:0),i.max.set(p,e[3],t<0?0:g)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(fd).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Fo(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const b1=`
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
`,A1=`
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
`,w1=`
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
`,R1=`
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
`;function C1(a){const e=uu(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ze},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ze},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new We},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ye},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:b1,vertexTransform:A1,fragmentDefs:w1,fragmentColorTransform:R1,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(vm,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Ju=new Xi({color:16777215,side:fn,transparent:!0}),hd=8421504,dd=new je,po=new J,nc=new J,Js=[],D1=new J,ic="+x+y";function pd(a){return Array.isArray(a)?a[0]:a}let Tm=()=>{const a=new Rt(new Cr(1,1),Ju);return Tm=()=>a,a},Em=()=>{const a=new Rt(new Cr(1,1,32,1),Ju);return Em=()=>a,a};const P1={type:"syncstart"},L1={type:"synccomplete"},bm=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],U1=bm.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Am extends Rt{constructor(){const e=new E1;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=hd,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=ic,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(P1),g1({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(L1),e&&e()})))}onBeforeRender(e,t,i,n,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return C1(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Ju.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.hasOutline()){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return pd(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return pd(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,u=0,f=0,h,d,_,m=0,p=0;if(t){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:v,outlineBlur:E,outlineOpacity:w}=this;c=this._parsePercent(y)||0,u=Math.max(0,this._parsePercent(E)||0),h=w,m=this._parsePercent(x)||0,p=this._parsePercent(v)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(_=this.strokeColor,i.uTroikaStrokeColor.value.set(_??hd),d=this.strokeOpacity,d==null&&(d=1)),h=this.fillOpacity;i.uTroikaEdgeOffset.value=c,i.uTroikaPositionOffset.value.set(m,p),i.uTroikaBlurRadius.value=u,i.uTroikaStrokeWidth.value=f,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=h??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)i.uTroikaClipRect.value.fromArray(g);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new We;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||ic;if(s!==e._orientation){let o=i.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==ic&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,f,h]=l;po.set(0,0,0)[u]=c==="-"?1:-1,nc.set(0,0,0)[h]=f==="-"?-1:1,dd.lookAt(D1,po.cross(nc),nc),o.setFromMatrix4(dd)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ze){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new Ze){return po.copy(e),this.localPositionToTextCoords(this.worldToLocal(po),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,s=n?Em():Tm(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let f=r[0]+c.getX(u)*(r[2]-r[0]);const h=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(f/n)*n,f=Math.sin(f/n)*n),l.setXYZ(u,f,h,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Js.length=0,s.raycast(e,Js);for(let u=0;u<Js.length;u++)Js[u].object=this,t.push(Js[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,U1.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}bm.forEach(a=>{const e="_private_"+a;Object.defineProperty(Am.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Qn;new We;const Pn=BT((a,e)=>({currentIndex:0,isAnimating:!1,totalBlobs:0,isOrthographic:!0,setCurrentIndex:t=>a({currentIndex:t}),setIsAnimating:t=>a({isAnimating:t}),setTotalBlobs:t=>a({totalBlobs:t}),setIsOrthographic:t=>a({isOrthographic:t}),navigateToNext:()=>{const{currentIndex:t,totalBlobs:i}=e(),n=(t+1)%i;return a({currentIndex:n}),n},navigateToPrevious:()=>{const{currentIndex:t,totalBlobs:i}=e(),n=(t-1+i)%i;return a({currentIndex:n}),n},toggleCamera:()=>{const{isOrthographic:t}=e();return a({isOrthographic:!t}),!t}})),cs=new lp,I1=new Ru(cs),F1=new US(cs);let mo=!1,md=0,gd=50,_d=0,rc=0;const N1=100;let vd=0;const O1=100,un=[{name:"A brand image studio",background:"#001EFF",gradientEnd:"#000843",useGradient:!0,materialTexture:"./materials/TGG1.png",backgroundTexture:"./backgrounds/BG 1.png"},{name:"& Web dev agency",background:"#06E6FF",gradientEnd:"#FDFDFD",useGradient:!0,materialTexture:"./materials/TGG2.png",backgroundTexture:"./backgrounds/BG 2.png"},{name:"Crafting Artistic direction",background:"#FF0000",useGradient:!1,materialTexture:"./materials/TGG3.png",backgroundTexture:"./backgrounds/BG 3.png"},{name:"Product design",background:"#FFFFFF",useGradient:!1,materialTexture:"./materials/TGG4.png",backgroundTexture:"./backgrounds/BG 4.png"},{name:"& immersive websites",background:"#000000",useGradient:!1,materialTexture:"./materials/TGG5.png",backgroundTexture:"./backgrounds/BG 5.png"}],jn=new o_,Qr=new Jt(75,window.innerWidth/window.innerHeight,.1,1e3),xd=window.innerWidth/window.innerHeight,ii=new Ca(-2*xd,2*xd,2,-2,.1,1e3);let Do=ii;const hn=new LS({canvas:document.querySelector("#canvas"),antialias:!0,alpha:!0}),wm=Pn.getState();wm.setTotalBlobs(un.length);hn.setSize(window.innerWidth,window.innerHeight);hn.setPixelRatio(Math.min(window.devicePixelRatio,3));hn.setClearColor(0,0);hn.shadowMap.enabled=!0;hn.shadowMap.type=Td;hn.toneMapping=du;hn.toneMappingExposure=1.2;hn.outputColorSpace=wt;const B1={uniforms:{tDiffuse:{value:null},contrast:{value:1.2},brightness:{value:1},saturation:{value:1.3},gamma:{value:1},exposure:{value:.1}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float contrast;
        uniform float brightness;
        uniform float saturation;
        uniform float gamma;
        uniform float exposure;
        varying vec2 vUv;
        
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            
            // Gentle exposure adjustment
            color.rgb *= pow(2.0, exposure);
            
            // Subtle brightness adjustment
            color.rgb *= brightness;
            
            // Gentle contrast enhancement
            color.rgb = mix(color.rgb, (color.rgb - 0.5) * contrast + 0.5, 0.8);
            
            // Subtle saturation boost
            float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
            color.rgb = mix(vec3(gray), color.rgb, saturation);
            
            // Gentle gamma correction
            color.rgb = pow(max(color.rgb, vec3(0.001)), vec3(1.0 / gamma));
            
            // Clamp values to prevent artifacts
            color.rgb = clamp(color.rgb, 0.0, 1.0);
            
            gl_FragColor = color;
        }
    `},Es=new yM(hn),Rm=new SM(jn,Do),$r=new Uu(B1),Aa=new Uu(MM),Cm=hn.getPixelRatio();Aa.material.uniforms.resolution.value.x=1/(window.innerWidth*Cm);Aa.material.uniforms.resolution.value.y=1/(window.innerHeight*Cm);Es.addPass(Rm);Es.addPass($r);Es.addPass(Aa);Es.setSize(window.innerWidth,window.innerHeight);let ln=null,yd={},cn={},go=0;const k1=new N_(16777215,.1);jn.add(k1);const On=new Da(16777215,2),Sd=57.6*Math.PI/180;On.position.set(Math.sin(Sd)*5,Math.cos(Sd)*5,3);On.castShadow=!0;On.shadow.mapSize.width=2048;On.shadow.mapSize.height=2048;On.shadow.camera.near=.1;On.shadow.camera.far=100;On.shadow.camera.left=-15;On.shadow.camera.right=15;On.shadow.camera.top=15;On.shadow.camera.bottom=-15;On.shadow.bias=-1e-4;jn.add(On);const Dm=new Da(16777215,.2);Dm.position.set(-4,2,-4);jn.add(Dm);const Pm=new Da(16777215,.2);Pm.position.set(3,-2,4);jn.add(Pm);const Lm=new Da(11193599,.2);Lm.position.set(-2,-1,2);jn.add(Lm);const z1=new Ru(cs);z1.load("./env/HDRI.png",function(a){a.mapping=Po,a.colorSpace=wt,jn.environment=a,jn.environmentIntensity=1.5,F1.load("./GHOST-FINAL.glb",function(c){ln=c.scene,console.log("=== WELCOME TO GHOST STUDIO! ==="),console.log("-- CHECK OUR SITE NOT THE CONSOLE LOGS! :)"),console.log("=== LOADING CLEAN TEXTURE MATERIALS ==="),console.log(`📦 Loading ${un.length} blob configurations with backgrounds and materials`);const u=un.map((h,d)=>new Promise(_=>{I1.load(h.materialTexture,m=>{m.flipY=!1,m.wrapS=$i,m.wrapT=$i;const p=new va({map:m,transparent:!0,opacity:d===0?1:0,side:fn,metalness:.5,roughness:.1,envMapIntensity:2,transmission:0,clearcoat:.5,clearcoatRoughness:.05});cn[`TGG${d+1}`]=p,_()},void 0,m=>{const p=new va({color:"#ffffff",transparent:!0,opacity:d===0?1:0,side:fn,metalness:.4,roughness:.4,envMapIntensity:1.5});cn[`TGG${d+1}`]=p,_()})}));Promise.all(u).then(()=>{ln.traverse(h=>{h.isMesh&&(Array.isArray(h.material)?h.material=h.material.map(d=>d.name.toLowerCase().includes("eye")||d.name==="1 eyes"?(yd[d.name]=d.clone(),d):cn.TGG1):h.material.name.toLowerCase().includes("eye")||h.material.name==="1 eyes"?yd[h.material.name]=h.material.clone():h.material=cn.TGG1)})}),ln.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)});function f(h,d,_,m){d.transparent=!0,d.opacity=0,h.transparent=!0,Si.to(h,{opacity:0,duration:_,ease:"power2.inOut"}),Si.to(d,{opacity:1,duration:_,ease:"power2.inOut",onComplete:()=>{d.transparent=!1,m&&m()}})}window.switchToTextureMaterial=function(h,d=.5){if(!cn[h])return;const _=cn[h].clone();ln.traverse(p=>{if(p.isMesh){if(Array.isArray(p.material))p.material.forEach((g,y)=>{if(!(g.name&&(g.name.toLowerCase().includes("eye")||g.name==="1 eyes"))){const x=new Rt(p.geometry,_.clone());x.position.copy(p.position),x.rotation.copy(p.rotation),x.scale.copy(p.scale),x.matrix.copy(p.matrix),x.matrixWorld.copy(p.matrixWorld),x.material.transparent=!0,x.material.opacity=0,p.parent.add(x),f(g,x.material,d,()=>{p.material[y]=x.material.clone(),p.parent.remove(x)})}});else if(!(p.material.name&&(p.material.name.toLowerCase().includes("eye")||p.material.name==="1 eyes"))){const g=new Rt(p.geometry,_.clone());g.position.copy(p.position),g.rotation.copy(p.rotation),g.scale.copy(p.scale),g.matrix.copy(p.matrix),g.matrixWorld.copy(p.matrixWorld),g.material.transparent=!0,g.material.opacity=0,p.parent.add(g),f(p.material,g.material,d,()=>{p.material=g.material.clone(),p.parent.remove(g)})}}}),go=parseInt(h.replace("TGG",""))-1},window.cycleTextureMaterials=function(){const h=Object.keys(cn);if(h.length===0)return;const d=h[go];switchToTextureMaterial(d,.5),go=(go+1)%h.length},window.addEventListener("keydown",h=>{(h.key==="m"||h.key==="M")&&cycleTextureMaterials(),(h.key==="b"||h.key==="B")&&cycleBackgrounds()}),window.adjustContrast=function(h){$r.uniforms.contrast.value=h,console.log(`Contrast set to ${h}`)},window.adjustBrightness=function(h){$r.uniforms.brightness.value=h,console.log(`Brightness set to ${h}`)},window.adjustSaturation=function(h){$r.uniforms.saturation.value=h,console.log(`Saturation set to ${h}`)},window.adjustExposure=function(h){$r.uniforms.exposure.value=h,console.log(`Exposure set to ${h}`)},window.adjustGamma=function(h){$r.uniforms.gamma.value=h,console.log(`Gamma set to ${h}`)},window.adjustMetalness=function(h){Object.values(cn).forEach(d=>{d.metalness=h}),console.log(`Metalness set to ${h}`)},window.adjustRoughness=function(h){Object.values(cn).forEach(d=>{d.roughness=h}),console.log(`Roughness set to ${h}`)},window.adjustTransmission=function(h){Object.values(cn).forEach(d=>{d.transmission=h}),console.log(`Transmission set to ${h}`)},window.adjustEnvironmentIntensity=function(h){jn.environmentIntensity=h,console.log(`Environment intensity set to ${h}`)},window.setToneMapping=function(h){const d={linear:du,reinhard:bd,aces:wd,cineon:Ad,neutral:Rd};d[h]?(hn.toneMapping=d[h],console.log(`Tone mapping set to ${h}`)):console.log("Available tone mappings: linear, reinhard, aces, cineon, neutral")},window.adjustToneMappingExposure=function(h){hn.toneMappingExposure=h,console.log(`Tone mapping exposure set to ${h}`)},window.applyBlenderLook=function(){adjustContrast(1.2),adjustSaturation(1.3),adjustExposure(.5),adjustGamma(1),adjustMetalness(.5),adjustRoughness(.3),adjustTransmission(0),adjustEnvironmentIntensity(1),console.log("Applied clean Blender-like look!")},window.resetToDefault=function(){adjustContrast(1),adjustSaturation(1),adjustExposure(.3),adjustGamma(1),adjustMetalness(.5),adjustRoughness(.5),adjustTransmission(.2),adjustEnvironmentIntensity(.1),console.log("Reset to default values")},window.setSlideVideoOpacity=function(h,d){if(h>=0&&h<un.length){const _=document.querySelector(`.slide-bg[data-slide="${h}"]`);if(_){const m=_.querySelector(".bg-video");m&&(m.style.opacity=d)}console.log(`Slide ${h} video opacity set to ${d}`)}},window.setSlideBackgroundOpacity=function(h,d){if(h>=0&&h<un.length){const _=document.querySelector(`.slide-bg[data-slide="${h}"]`);if(_){const m=_.querySelector(".bg-image");m&&(m.style.opacity=d)}console.log(`Slide ${h} background opacity set to ${d}`)}},window.showOpacitySettings=function(){var h,d;console.log("Current opacity settings per slide:");for(let _=0;_<un.length;_++){const m=document.querySelector(`.slide-bg[data-slide="${_}"]`);if(m){const p=((h=m.querySelector(".bg-video"))==null?void 0:h.style.opacity)||"CSS default",g=((d=m.querySelector(".bg-image"))==null?void 0:d.style.opacity)||"CSS default";console.log(`Slide ${_} (${un[_].name}): Video=${p}, Background=${g}`)}}},window.changeTextureMaterialOpacity=function(h,d){if(!cn[h])return;const _=cn[h];_.transparent=d<1,_.opacity=d,ln.traverse(m=>{m.isMesh&&(Array.isArray(m.material)?m.material.forEach(p=>{p.name&&(p.name.toLowerCase().includes("eye")||p.name==="1 eyes")||(p.transparent=d<1,Si.to(p,{opacity:d,duration:1,ease:"power2.inOut"}))}):m.material.name&&(m.material.name.toLowerCase().includes("eye")||m.material.name==="1 eyes")||(m.material.transparent=d<1,Si.to(m.material,{opacity:d,duration:1,ease:"power2.inOut"})))})},ln.scale.setScalar(.6),ln.position.set(0,0,0),jn.add(ln)});function e(c,u=.5){if(c<0||c>=un.length)return;document.querySelectorAll(".slide-bg").forEach((h,d)=>{d===c?h.classList.add("active"):h.classList.remove("active")})}window.switchBackground=e,window.cycleBackgrounds=function(){const{currentIndex:c}=Pn.getState(),u=(c+1)%un.length;e(u)},Qr.position.z=3,ii.position.z=3;function t(){requestAnimationFrame(t),Es.render()}t();const i=new Jn({vertexShader:TM,fragmentShader:"void main(){ gl_FragColor = vec4(1.0); }",side:fn,uniforms:{progress:{value:0},direction:{value:1}}}),n=un.map((c,u)=>{const f=new Am;return f.text=c.name,f.font="./TT Norms Pro DemiBold.ttf",f.anchorX="center",f.anchorY="middle",f.material=i,f.position.set(0,0,2),u!==0&&f.scale.set(0,0,0),f.letterSpacing=-.08,f.fontSize=.4,f.glyphGeometryDetail=20,f.sync(),jn.add(f),f});cs.onLoad=()=>{const c=un[wm.currentIndex];o(c,0)},cs.onProgress=(c,u,f)=>{},cs.onError=c=>{};function r(c){const{isAnimating:u,setIsAnimating:f,currentIndex:h}=Pn.getState();if(u)return;f(!0);const d=h;let _;c>0?_=Pn.getState().navigateToNext():_=Pn.getState().navigateToPrevious(),l(d,_),setTimeout(()=>{f(!1)},1e3)}window.addEventListener("wheel",c=>{const{isAnimating:u}=Pn.getState();if(u)return;c.preventDefault(),rc+=Math.abs(c.deltaY);const f=Date.now();if(!(f-vd<O1)&&rc>=N1){vd=f,rc=0;const h=c.deltaY>0?1:-1;r(h)}},{passive:!1});function s(){Pn.getState().toggleCamera()?(Do=ii,ii.position.copy(Qr.position)):(Do=Qr,Qr.position.copy(ii.position)),Rm.camera=Do}window.addEventListener("keydown",c=>{const{isAnimating:u}=Pn.getState();if(!u)switch(c.key){case"ArrowRight":case"ArrowDown":c.preventDefault(),r(1);break;case"ArrowLeft":case"ArrowUp":c.preventDefault(),r(-1);break;case"c":case"C":c.preventDefault(),s();break}}),window.addEventListener("mousedown",c=>{const{isAnimating:u}=Pn.getState();u||(mo=!0,md=c.clientX,document.body.style.cursor="grabbing")}),window.addEventListener("mousemove",c=>{const{isAnimating:u}=Pn.getState();if(!mo||u)return;const f=c.clientX-md;if(Math.abs(f)>gd){const h=f>0?-1:1;r(h),mo=!1,document.body.style.cursor="default"}}),window.addEventListener("mouseup",()=>{mo=!1,document.body.style.cursor="default"}),window.addEventListener("touchstart",c=>{const{isAnimating:u}=Pn.getState();u||(_d=c.touches[0].clientX)},{passive:!0}),window.addEventListener("touchend",c=>{const{isAnimating:u}=Pn.getState();if(u)return;const h=c.changedTouches[0].clientX-_d;if(Math.abs(h)>gd){const d=h>0?-1:1;r(d)}},{passive:!0});function o(c,u=.2){if(!ln||Object.keys(cn).length===0)return;const h=`TGG${un.indexOf(c)+1}`;cn[h]&&switchToTextureMaterial(h,u)}function l(c,u){const f=un[u];let h;const d=un.length,_=u-c;if(Math.abs(_)===1?h=_>0?1:-1:_===-(d-1)?h=1:_===d-1?h=-1:h=u>c?1:-1,e(u,1),ln){const m=ln.rotation.y,p=h>0?-1:1,g=m+p*Math.PI*2,x=p*.02;Si.timeline().to(ln.rotation,{y:g,duration:1,ease:"power2.inOut"}).to(ln.position,{x,duration:.5,ease:"power2.out"},0).to(ln.position,{x:0,duration:.5,ease:"power2.in"},.5)}n[u].scale.set(1,1,1),n[u].position.x=h*6,Si.to(i.uniforms.progress,{value:.5,duration:1,ease:"linear",onComplete:()=>{i.uniforms.progress.value=0}}),Si.to(n[c].position,{x:-h*8,duration:1,ease:"power2.inOut"}),Si.to(n[u].position,{x:0,duration:1,ease:"power2.inOut"}),o(f,.8)}window.addEventListener("resize",()=>{const c=window.innerWidth/window.innerHeight;Qr.aspect=c,Qr.updateProjectionMatrix(),ii.left=-2*c,ii.right=2*c,ii.top=2,ii.bottom=-2,ii.updateProjectionMatrix(),hn.setSize(window.innerWidth,window.innerHeight),Es.setSize(window.innerWidth,window.innerHeight);const u=hn.getPixelRatio();Aa.material.uniforms.resolution.value.x=1/(window.innerWidth*u),Aa.material.uniforms.resolution.value.y=1/(window.innerHeight*u)})});
