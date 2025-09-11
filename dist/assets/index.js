(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="175",Qm=0,xh=1,$m=2,wd=1,Rd=2,Ti=3,Pi=0,un=1,cn=2,Ci=0,is=1,yh=2,Sh=3,Mh=4,eg=5,vr=100,tg=101,ng=102,ig=103,rg=104,sg=200,ag=201,og=202,lg=203,cc=204,uc=205,cg=206,ug=207,hg=208,fg=209,dg=210,pg=211,mg=212,gg=213,_g=214,hc=0,fc=1,dc=2,us=3,pc=4,mc=5,gc=6,_c=7,Cd=0,vg=1,xg=2,Ji=0,yg=1,Sg=2,Mg=3,Dd=4,Tg=5,Eg=6,bg=7,Th="attached",Ag="detached",Pd=300,hs=301,fs=302,vc=303,xc=304,jo=306,ds=1e3,Yi=1001,Lo=1002,tn=1003,Ld=1004,$s=1005,Gt=1006,xo=1007,wi=1008,Li=1009,Ud=1010,Id=1011,da=1012,yu=1013,Rr=1014,qn=1015,bs=1016,Su=1017,Mu=1018,pa=1020,Fd=35902,Nd=1021,Od=1022,Pn=1023,Bd=1024,kd=1025,ma=1026,ga=1027,Tu=1028,Eu=1029,zd=1030,bu=1031,Au=1033,yo=33776,So=33777,Mo=33778,To=33779,yc=35840,Sc=35841,Mc=35842,Tc=35843,Ec=36196,bc=37492,Ac=37496,wc=37808,Rc=37809,Cc=37810,Dc=37811,Pc=37812,Lc=37813,Uc=37814,Ic=37815,Fc=37816,Nc=37817,Oc=37818,Bc=37819,kc=37820,zc=37821,Eo=36492,Gc=36494,Vc=36495,Gd=36283,Hc=36284,Wc=36285,Xc=36286,_a=2300,va=2301,ml=2302,Eh=2400,bh=2401,Ah=2402,wg=2500,Rg=0,Vd=1,Yc=2,Cg=3200,Hd=3201,Wd=0,Dg=1,Xi="",Nt="srgb",rn="srgb-linear",Uo="linear",lt="srgb",Or=7680,wh=519,Pg=512,Lg=513,Ug=514,Xd=515,Ig=516,Fg=517,Ng=518,Og=519,qc=35044,Rh="300 es",Ri=2e3,Io=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const sa=Math.PI/180,ps=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Qe(s,e,t){return Math.max(e,Math.min(t,s))}function wu(s,e){return(s%e+e)%e}function Bg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function kg(s,e,t){return s!==e?(t-s)/(e-s):0}function aa(s,e,t){return(1-t)*s+t*e}function zg(s,e,t,n){return aa(s,e,1-Math.exp(-t*n))}function Gg(s,e=1){return e-Math.abs(wu(s,e*2)-e)}function Vg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Xg(s,e){return s+Math.random()*(e-s)}function Yg(s){return s*(.5-Math.random())}function qg(s){s!==void 0&&(Ch=s);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jg(s){return s*sa}function Kg(s){return s*ps}function Zg(s){return(s&s-1)===0&&s!==0}function Jg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $g(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*f,o*c);break;case"YZY":s.set(l*f,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*f,o*u,o*c);break;case"XZX":s.set(o*u,l*_,l*d,o*c);break;case"YXY":s.set(l*d,o*u,l*_,o*c);break;case"ZYZ":s.set(l*_,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function at(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const e_={DEG2RAD:sa,RAD2DEG:ps,generateUUID:jn,clamp:Qe,euclideanModulo:wu,mapLinear:Bg,inverseLerp:kg,lerp:aa,damp:zg,pingpong:Gg,smoothstep:Vg,smootherstep:Hg,randInt:Wg,randFloat:Xg,randFloatSpread:Yg,seededRandom:qg,degToRad:jg,radToDeg:Kg,isPowerOfTwo:Zg,ceilPowerOfTwo:Jg,floorPowerOfTwo:Qg,setQuaternionFromProperEuler:$g,normalize:at,denormalize:Wn};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],p=i[3],m=i[6],x=i[1],y=i[4],v=i[7],E=i[2],w=i[5],T=i[8];return r[0]=a*g+o*x+l*E,r[3]=a*p+o*y+l*w,r[6]=a*m+o*v+l*T,r[1]=c*g+u*x+h*E,r[4]=c*p+u*y+h*w,r[7]=c*m+u*v+h*T,r[2]=f*g+d*x+_*E,r[5]=f*p+d*y+_*w,r[8]=f*m+d*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,d=c*r-a*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new Ye;function Yd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function t_(){const s=xa("canvas");return s.style.display="block",s}const Dh={};function bo(s){s in Dh||(Dh[s]=!0,console.warn(s))}function n_(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function i_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function r_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ph=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s_(){const s={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(i.r=rs(i.r),i.g=rs(i.g),i.b=rs(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xi?Uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[rn]:{primaries:e,whitePoint:n,transfer:Uo,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Ph,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),s}const rt=s_();function Di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Br;class a_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=xa("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let o_=0;class Ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_l(i[a].image)):r.push(_l(i[a]))}else r=_l(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _l(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?a_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let l_=0;class Rt extends As{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Yi,i=Yi,r=Gt,a=wi,o=Pn,l=Li,c=Rt.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=jn(),this.name="",this.source=new Ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Pd;Rt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,E=(m+1)/2,w=(u+f)/4,T=(h+g)/4,R=(_+p)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=T/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=R/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=R/r),this.set(n,i,r,t),this}let x=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c_ extends As{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Rt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ru(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends c_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qd extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let p=1-o;const m=l*f+c*d+u*_+h*g,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,m*x);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E}const v=o*x;if(l=l*p+f*v,c=c*p+d*v,u=u*p+_*v,h=h*p+g*v,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vl.copy(this).projectOnVector(e),this.sub(vl)}reflect(e){return this.sub(vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vl=new J,Uh=new ir;class $n{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Va.subVectors(this.max,Vs),kr.subVectors(e.a,Vs),zr.subVectors(e.b,Vs),Gr.subVectors(e.c,Vs),Bi.subVectors(zr,kr),ki.subVectors(Gr,zr),sr.subVectors(kr,Gr);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-sr.z,sr.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,sr.z,0,-sr.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-sr.y,sr.x,0];return!xl(t,kr,zr,Gr,Va)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,kr,zr,Gr,Va))?!1:(Ha.crossVectors(Bi,ki),t=[Ha.x,Ha.y,Ha.z],xl(t,kr,zr,Gr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new J,new J,new J,new J,new J,new J,new J,new J],zn=new J,Ga=new $n,kr=new J,zr=new J,Gr=new J,Bi=new J,ki=new J,sr=new J,Vs=new J,Va=new J,Ha=new J,ar=new J;function xl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ar.fromArray(s,r);const o=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const h_=new $n,Hs=new J,yl=new J;class ei{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):h_.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(yl)),this.expandByPoint(Hs.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new J,Sl=new J,Wa=new J,zi=new J,Ml=new J,Xa=new J,Tl=new J;class Ko{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sl.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Sl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Wa),o=zi.dot(this.direction),l=-zi.dot(Wa),c=zi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Sl).addScaledVector(Wa,f),d}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),i=vi.dot(vi)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,i,r){Ml.subVectors(t,e),Xa.subVectors(n,e),Tl.crossVectors(Ml,Xa);let a=this.direction.dot(Tl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);const l=o*this.direction.dot(Xa.crossVectors(zi,Xa));if(l<0)return null;const c=o*this.direction.dot(Ml.cross(zi));if(c<0||l+c>a)return null;const u=-o*zi.dot(Tl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,p)}set(e,t,n,i,r,a,o,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vr.setFromMatrixColumn(e,0).length(),r=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,d_)}lookAt(e,t,n){const i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Gi.crossVectors(n,vn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Gi.crossVectors(n,vn)),Gi.normalize(),Ya.crossVectors(vn,Gi),i[0]=Gi.x,i[4]=Ya.x,i[8]=vn.x,i[1]=Gi.y,i[5]=Ya.y,i[9]=vn.y,i[2]=Gi.z,i[6]=Ya.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],w=i[0],T=i[4],R=i[8],S=i[12],M=i[1],P=i[5],D=i[9],L=i[13],F=i[2],G=i[6],B=i[10],j=i[14],H=i[3],Z=i[7],Y=i[11],I=i[15];return r[0]=a*w+o*M+l*F+c*H,r[4]=a*T+o*P+l*G+c*Z,r[8]=a*R+o*D+l*B+c*Y,r[12]=a*S+o*L+l*j+c*I,r[1]=u*w+h*M+f*F+d*H,r[5]=u*T+h*P+f*G+d*Z,r[9]=u*R+h*D+f*B+d*Y,r[13]=u*S+h*L+f*j+d*I,r[2]=_*w+g*M+p*F+m*H,r[6]=_*T+g*P+p*G+m*Z,r[10]=_*R+g*D+p*B+m*Y,r[14]=_*S+g*L+p*j+m*I,r[3]=x*w+y*M+v*F+E*H,r[7]=x*T+y*P+v*G+E*Z,r[11]=x*R+y*D+v*B+E*Y,r[15]=x*S+y*L+v*j+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*d-n*l*d)+g*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*u-r*l*u)+p*(+t*c*h-t*o*d-r*a*h+n*a*d+r*o*u-n*c*u)+m*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],x=h*p*c-g*f*c+g*l*d-o*p*d-h*l*m+o*f*m,y=_*f*c-u*p*c-_*l*d+a*p*d+u*l*m-a*f*m,v=u*g*c-_*h*c+_*o*d-a*g*d-u*o*m+a*h*m,E=_*h*l-u*g*l-_*o*f+a*g*f+u*o*p-a*h*p,w=t*x+n*y+i*v+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(g*f*r-h*p*r-g*i*d+n*p*d+h*i*m-n*f*m)*T,e[2]=(o*p*r-g*l*r+g*i*c-n*p*c-o*i*m+n*l*m)*T,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*d-n*l*d)*T,e[4]=y*T,e[5]=(u*p*r-_*f*r+_*i*d-t*p*d-u*i*m+t*f*m)*T,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*m-t*l*m)*T,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*d+t*l*d)*T,e[8]=v*T,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*m-t*h*m)*T,e[10]=(a*g*r-_*o*r+_*n*c-t*g*c-a*n*m+t*o*m)*T,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*d-t*o*d)*T,e[12]=E*T,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*p+t*h*p)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*p-t*o*p)*T,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,d=r*u,_=r*h,g=a*u,p=a*h,m=o*h,x=l*c,y=l*u,v=l*h,E=n.x,w=n.y,T=n.z;return i[0]=(1-(g+m))*E,i[1]=(d+v)*E,i[2]=(_-y)*E,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+m))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(_+y)*T,i[9]=(p-x)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vr.set(i[0],i[1],i[2]).length();const a=Vr.set(i[4],i[5],i[6]).length(),o=Vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const c=1/r,u=1/a,h=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Ri){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===Ri)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Io)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ri){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*c,d=(n+i)*u;let _,g;if(o===Ri)_=(a+r)*h,g=-2*h;else if(o===Io)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new J,Gn=new qe,f_=new J(0,0,0),d_=new J(1,1,1),Gi=new J,Ya=new J,vn=new J,Ih=new qe,Fh=new ir;class pi{constructor(e=0,t=0,n=0,i=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p_=0;const Nh=new J,Hr=new ir,xi=new qe,qa=new J,Ws=new J,m_=new J,g_=new ir,Oh=new J(1,0,0),Bh=new J(0,1,0),kh=new J(0,0,1),zh={type:"added"},__={type:"removed"},Wr={type:"childadded",child:null},El={type:"childremoved",child:null};class xt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new J,t=new pi,n=new ir,i=new J(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ws,qa,this.up):xi.lookAt(qa,Ws,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(xi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zh),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(__),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zh),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new J(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new J,yi=new J,bl=new J,Si=new J,Xr=new J,Yr=new J,Gh=new J,Al=new J,wl=new J,Rl=new J,Cl=new st,Dl=new st,Pl=new st;class Xn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vn.subVectors(e,t),i.cross(Vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vn.subVectors(i,t),yi.subVectors(n,t),bl.subVectors(e,t);const a=Vn.dot(Vn),o=Vn.dot(yi),l=Vn.dot(bl),c=yi.dot(yi),u=yi.dot(bl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Cl.setScalar(0),Dl.setScalar(0),Pl.setScalar(0),Cl.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Pl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Cl,r.x),a.addScaledVector(Dl,r.y),a.addScaledVector(Pl,r.z),a}static isFrontFacing(e,t,n,i){return Vn.subVectors(n,t),yi.subVectors(e,t),Vn.cross(yi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Vn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Xr.subVectors(i,n),Yr.subVectors(r,n),Al.subVectors(e,n);const l=Xr.dot(Al),c=Yr.dot(Al);if(l<=0&&c<=0)return t.copy(n);wl.subVectors(e,i);const u=Xr.dot(wl),h=Yr.dot(wl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Xr,a);Rl.subVectors(e,r);const d=Xr.dot(Rl),_=Yr.dot(Rl);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Yr,o);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return Gh.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Gh,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(Xr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Ll(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=wu(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return rt.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Qe(Yt.r*255,0,255))*65536+Math.round(Qe(Yt.g*255,0,255))*256+Math.round(Qe(Yt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,r=Yt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Nt){rt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ja);const n=aa(Vi.h,ja.h,t),i=aa(Vi.s,ja.s,t),r=aa(Vi.l,ja.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new We;We.NAMES=Kd;let v_=0;class hi extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=is,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new J,Ka=new Ze;let x_=0;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class Zd extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jd extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Kn extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let y_=0;const Rn=new qe,Ul=new xt,qr=new J,xn=new $n,Xs=new $n,Ft=new J;class In extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?Jd:Zd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Kn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(xn.min,Xs.min),xn.expandByPoint(Ft),Ft.addVectors(xn.max,Xs.max),xn.expandByPoint(Ft)):(xn.expandByPoint(Xs.min),xn.expandByPoint(Xs.max))}xn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),Ft.add(qr)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new J,l[R]=new J;const c=new J,u=new J,h=new J,f=new Ze,d=new Ze,_=new Ze,g=new J,p=new J;function m(R,S,M){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),o[R].add(g),o[S].add(g),o[M].add(g),l[R].add(p),l[S].add(p),l[M].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,S=x.length;R<S;++R){const M=x[R],P=M.start,D=M.count;for(let L=P,F=P+D;L<F;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new J,v=new J,E=new J,w=new J;function T(R){E.fromBufferAttribute(i,R),w.copy(E);const S=o[R];y.copy(S),y.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,S=x.length;R<S;++R){const M=x[R],P=M.start,D=M.count;for(let L=P,F=P+D;L<F;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new J,r=new J,a=new J,o=new J,l=new J,c=new J,u=new J,h=new J;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new nn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new qe,or=new Ko,Za=new ei,Hh=new J,Ja=new J,Qa=new J,$a=new J,Il=new J,eo=new J,Wh=new J,to=new J;class Et extends xt{constructor(e=new In,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Il.fromBufferAttribute(h,e),a?eo.addScaledVector(Il,u):eo.addScaledVector(Il.sub(t),u))}t.add(eo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),or.copy(e.ray).recast(e.near),!(Za.containsPoint(or.origin)===!1&&(or.intersectSphere(Za,Hh)===null||or.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),or.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const w=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);i=no(this,m,e,n,c,u,h,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);i=no(this,a,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],x=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=x,E=y;v<E;v+=3){const w=v,T=v+1,R=v+2;i=no(this,m,e,n,c,u,h,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=p,y=p+1,v=p+2;i=no(this,a,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function S_(s,e,t,n,i,r,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Pi,o),l===null)return null;to.copy(o),to.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(to);return c<t.near||c>t.far?null:{distance:c,point:to.clone(),object:s}}function no(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ja),s.getVertexPosition(l,Qa),s.getVertexPosition(c,$a);const u=S_(s,e,t,n,Ja,Qa,$a,Wh);if(u){const h=new J;Xn.getBarycoord(Wh,Ja,Qa,$a,h),i&&(u.uv=Xn.getInterpolatedAttribute(i,o,l,c,h,new Ze)),r&&(u.uv1=Xn.getInterpolatedAttribute(r,o,l,c,h,new Ze)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,h,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new J,materialIndex:0};Xn.getNormal(Ja,Qa,$a,f.normal),u.face=f,u.barycoord=h}return u}class Da extends In{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(u,3)),this.setAttribute("uv",new Kn(h,2));function _(g,p,m,x,y,v,E,w,T,R,S){const M=v/T,P=E/R,D=v/2,L=E/2,F=w/2,G=T+1,B=R+1;let j=0,H=0;const Z=new J;for(let Y=0;Y<B;Y++){const I=Y*P-L;for(let W=0;W<G;W++){const ee=W*M-D;Z[g]=ee*x,Z[p]=I*y,Z[m]=F,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[p]=0,Z[m]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),h.push(W/T),h.push(1-Y/R),j+=1}}for(let Y=0;Y<R;Y++)for(let I=0;I<T;I++){const W=f+I+G*Y,ee=f+I+G*(Y+1),N=f+(I+1)+G*(Y+1),k=f+(I+1)+G*Y;l.push(W,ee,k),l.push(ee,N,k),H+=6}o.addGroup(d,H,S),d+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ms(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=ms(s[t]);for(const i in n)e[i]=n[i]}return e}function M_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Cu={clone:ms,merge:Qt};var T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=E_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $d extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new J,Xh=new Ze,Yh=new Ze;class $t extends $d{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,Yh),t.subVectors(Yh,Xh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,Kr=1;class b_ extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(jr,Kr,e,t);i.layers=this.layers,this.add(i);const r=new $t(jr,Kr,e,t);r.layers=this.layers,this.add(r);const a=new $t(jr,Kr,e,t);a.layers=this.layers,this.add(a);const o=new $t(jr,Kr,e,t);o.layers=this.layers,this.add(o);const l=new $t(jr,Kr,e,t);l.layers=this.layers,this.add(l);const c=new $t(jr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ep extends Rt{constructor(e=[],t=hs,n,i,r,a,o,l,c,u){super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A_ extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ep(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Da(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ci});r.uniforms.tEquirect.value=t;const a=new Et(i,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Gt),new b_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class yr extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tp extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new J;class Du{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Du(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qh=new J,jh=new st,Kh=new st,C_=new J,Zh=new qe,io=new J,Nl=new ei,Jh=new qe,Ol=new Ko;class D_ extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Th,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(i),e.ray.intersectsSphere(Nl)!==!1&&(Jh.copy(i).invert(),Ol.copy(e.ray).applyMatrix4(Jh),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ag?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;jh.fromBufferAttribute(i.attributes.skinIndex,e),Kh.fromBufferAttribute(i.attributes.skinWeight,e),qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Kh.getComponent(r);if(a!==0){const o=jh.getComponent(r);Zh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(C_.copy(qh).applyMatrix4(Zh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class np extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ip extends Rt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=tn,u=tn,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qh=new qe,P_=new qe;class Pu{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:P_;Qh.multiplyMatrices(o,t[r]),Qh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ip(t,e,e,Pn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new np),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Fo extends nn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zr=new qe,$h=new qe,ro=[],ef=new $n,L_=new qe,Ys=new Et,qs=new ei;class U_ extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),ef.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(ef)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),qs.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zr),$h.multiplyMatrices(n,Zr),Ys.matrixWorld=$h,Ys.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){const l=ro[a];l.instanceId=r,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ip(new Float32Array(i*this.count),i,this.count,Tu,qn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bl=new J,I_=new J,F_=new Ye;class mr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bl.subVectors(n,t).cross(I_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||F_.getNormalMatrix(e),i=this.coplanarPoint(Bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new ei,so=new J;class Lu{constructor(e=new mr,t=new mr,n=new mr,i=new mr,r=new mr,a=new mr){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],p=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,p-d,v-m).normalize(),n[1].setComponents(l+r,f+c,p+d,v+m).normalize(),n[2].setComponents(l+a,f+u,p+_,v+x).normalize(),n[3].setComponents(l-a,f-u,p-_,v-x).normalize(),n[4].setComponents(l-o,f-h,p-g,v-y).normalize(),t===Ri)n[5].setComponents(l+o,f+h,p+g,v+y).normalize();else if(t===Io)n[5].setComponents(o,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(so.x=i.normal.x>0?e.max.x:e.min.x,so.y=i.normal.y>0?e.max.y:e.min.y,so.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rp extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new J,Oo=new J,tf=new qe,js=new Ko,ao=new ei,kl=new J,nf=new J;class Uu extends xt{constructor(e=new In,t=new rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)No.fromBufferAttribute(t,i-1),Oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=No.distanceTo(Oo);e.setAttribute("lineDistance",new Kn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(i),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;tf.copy(i).invert(),js.copy(e.ray).applyMatrix4(tf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),x=u.getX(g+1),y=oo(this,e,js,l,m,x,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=oo(this,e,js,l,g,p,_-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=oo(this,e,js,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=oo(this,e,js,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function oo(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(No.fromBufferAttribute(o,i),Oo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Oo,kl,nf)>n)return;kl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(kl);if(!(c<e.near||c>e.far))return{distance:c,point:nf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const rf=new J,sf=new J;class N_ extends Uu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)rf.fromBufferAttribute(t,i),sf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rf.distanceTo(sf);e.setAttribute("lineDistance",new Kn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O_ extends Uu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sp extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const af=new qe,jc=new Ko,lo=new ei,co=new J;class B_ extends xt{constructor(e=new In,t=new sp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;af.copy(i).invert(),jc.copy(e.ray).applyMatrix4(af);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);co.fromBufferAttribute(h,p),of(co,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)co.fromBufferAttribute(h,_),of(co,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function of(s,e,t,n,i,r,a){const o=jc.distanceSqToPoint(s);if(o<t){const l=new J;jc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class k_ extends Rt{constructor(e,t,n,i,r=Gt,a=Gt,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ap extends Rt{constructor(e,t,n=Rr,i,r,a,o=tn,l=tn,c,u=ma){if(u!==ma&&u!==ga)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ru(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jn extends In{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const x=m*f-a;for(let y=0;y<c;y++){const v=y*h-r;_.push(v,-x,0),g.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),w=x+1+c*m;d.push(y,v,w),d.push(v,E,w)}this.setIndex(d),this.setAttribute("position",new Kn(_,3)),this.setAttribute("normal",new Kn(g,3)),this.setAttribute("uv",new Kn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ya extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends ya{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class op extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lp extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function uo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function z_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function G_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function lf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function cp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Pa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class V_ extends Pa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case bh:r=e,o=2*t-n;break;case Ah:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bh:a=e,l=2*n-t;break;case Ah:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-f*p+2*f*g-f*_,x=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,y=(-1-d)*p+(1.5+d)*g+.5*_,v=d*p-d*g;for(let E=0;E!==o;++E)r[E]=m*a[u+E]+x*a[c+E]+y*a[l+E]+v*a[h+E];return r}}class H_ extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}}class W_ extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=uo(t,this.TimeBufferType),this.values=uo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:uo(e.times,Array),values:uo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new W_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new H_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new V_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&z_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ml,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=va;class ws extends ti{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=_a;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class up extends ti{constructor(e,t,n,i){super(e,t,n,i)}}up.prototype.ValueTypeName="color";class gs extends ti{constructor(e,t,n,i){super(e,t,n,i)}}gs.prototype.ValueTypeName="number";class X_ extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ir.slerpFlat(r,0,a,c-o,a,c,l);return r}}class _s extends ti{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new X_(this.times,this.values,this.getValueSize(),e)}}_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends ti{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=_a;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends ti{constructor(e,t,n,i){super(e,t,n,i)}}vs.prototype.ValueTypeName="vector";class Y_{constructor(e="",t=-1,n=[],i=wg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(j_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ti.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=G_(l);l=lf(l,1,u),c=lf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const p=[],m=[];cp(d,p,m,_),p.length!==0&&g.push(new h(f,p,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const p=[],m=[];for(let x=0;x!==f[_].morphTargets.length;++x){const y=f[_];p.push(y.time),m.push(y.morphTarget===g?1:0)}i.push(new gs(".morphTargetInfluence["+g+"]",p,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(vs,d+".position",f,"pos",i),n(_s,d+".quaternion",f,"rot",i),n(vs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function q_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gs;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return up;case"quaternion":return _s;case"bool":case"boolean":return ws;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function j_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=q_(s.type);if(s.times===void 0){const t=[],n=[];cp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const qi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class hp{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const K_=new hp;class Cs{constructor(e){this.manager=e!==void 0?e:K_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Z_ extends Error{constructor(e,t){super(e),this.response=t}}class fp extends Cs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:i});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const p=new ReadableStream({start(m){x();function x(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{g+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let w=0,T=u.length;w<T;w++){const R=u[w];R.onProgress&&R.onProgress(E)}m.enqueue(v),x()}},y=>{m.error(y)})}}});return new Response(p)}else throw new Z_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{qi.add(e,c);const u=Mi[e];delete Mi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class J_ extends Cs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=xa("img");function l(){u(),qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class dp extends Cs{constructor(e){super(e)}load(e,t,n,i){const r=new Rt,a=new J_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Zo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zl=new qe,cf=new J,uf=new J;class Iu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lu,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uf),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q_ extends Iu{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class $_ extends Zo{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Q_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hf=new qe,Ks=new J,Gl=new J;class e0 extends Iu{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new J(1,0,0),new J(-1,0,0),new J(0,0,1),new J(0,0,-1),new J(0,1,0),new J(0,-1,0)],this._cubeUps=[new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,1,0),new J(0,0,1),new J(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),Gl.copy(n.position),Gl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Gl),n.updateMatrixWorld(),i.makeTranslation(-Ks.x,-Ks.y,-Ks.z),hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf)}}class t0 extends Zo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class La extends $d{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class n0 extends Iu{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dr extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class i0 extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class oa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class r0 extends In{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class s0 extends Cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=qi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return qi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});qi.add(e,l),r.manager.itemStart(e)}}class a0 extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class pp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ff(){return performance.now()}const Fu="\\[\\]\\.:\\/",o0=new RegExp("["+Fu+"]","g"),Nu="[^"+Fu+"]",l0="[^"+Fu.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",Nu),u0=/(WCOD+)?/.source.replace("WCOD",l0),h0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),f0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),d0=new RegExp("^"+c0+u0+h0+f0+"$"),p0=["material","materials","bones","map"];class m0{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(o0,"")}static parseTrackName(e){const t=d0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);p0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=m0;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function df(s,e,t,n){const i=g0(n);switch(t){case Nd:return s*e;case Bd:return s*e;case kd:return s*e*2;case Tu:return s*e/i.components*i.byteLength;case Eu:return s*e/i.components*i.byteLength;case zd:return s*e*2/i.components*i.byteLength;case bu:return s*e*2/i.components*i.byteLength;case Od:return s*e*3/i.components*i.byteLength;case Pn:return s*e*4/i.components*i.byteLength;case Au:return s*e*4/i.components*i.byteLength;case yo:case So:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mo:case To:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sc:case Tc:return Math.max(s,16)*Math.max(e,8)/4;case yc:case Mc:return Math.max(s,8)*Math.max(e,8)/2;case Ec:case bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Gc:case Vc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gd:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(s){switch(s){case Li:case Ud:return{byteLength:1,components:1};case da:case Id:case bs:return{byteLength:2,components:1};case Su:case Mu:return{byteLength:2,components:4};case Rr:case yu:case qn:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mp(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function _0(s){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,G0=`#define PI 3.141592653589793
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,H0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sv=`#ifdef USE_GRADIENTMAP
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
}`,av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cv=`uniform bool receiveShadow;
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
#endif`,uv=`#ifdef USE_ENVMAP
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
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
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
#endif`,gv=`struct PhysicalMaterial {
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
}`,_v=`
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wv=`#if defined( USE_POINTS_UV )
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
#endif`,Rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zv=`#ifdef USE_NORMALMAP
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
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nx=`float getShadowMask() {
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
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
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
#endif`,sx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,ox=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`#include <common>
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
}`,Ex=`#if DEPTH_PACKING == 3200
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
}`,bx=`#define DISTANCE
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
}`,Ax=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Ux=`#define LAMBERT
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
}`,Ix=`#define LAMBERT
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
}`,Fx=`#define MATCAP
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
}`,Nx=`#define MATCAP
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
}`,Ox=`#define NORMAL
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
}`,Bx=`#define NORMAL
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
}`,kx=`#define PHONG
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
}`,zx=`#define PHONG
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
}`,Gx=`#define STANDARD
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
}`,Vx=`#define STANDARD
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
}`,Hx=`#define TOON
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
}`,Wx=`#define TOON
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
}`,Xx=`uniform float size;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,Kx=`uniform float rotation;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:v0,alphahash_pars_fragment:x0,alphamap_fragment:y0,alphamap_pars_fragment:S0,alphatest_fragment:M0,alphatest_pars_fragment:T0,aomap_fragment:E0,aomap_pars_fragment:b0,batching_pars_vertex:A0,batching_vertex:w0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:D0,iridescence_fragment:P0,bumpmap_pars_fragment:L0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:F0,clipping_planes_vertex:N0,color_fragment:O0,color_pars_fragment:B0,color_pars_vertex:k0,color_vertex:z0,common:G0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:H0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:Y0,emissivemap_pars_fragment:q0,colorspace_fragment:j0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:Q0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:uv,envmap_vertex:ev,fog_vertex:tv,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:rv,gradientmap_pars_fragment:sv,lightmap_pars_fragment:av,lights_lambert_fragment:ov,lights_lambert_pars_fragment:lv,lights_pars_begin:cv,lights_toon_fragment:hv,lights_toon_pars_fragment:fv,lights_phong_fragment:dv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:gv,lights_fragment_begin:_v,lights_fragment_maps:vv,lights_fragment_end:xv,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Tv,map_fragment:Ev,map_pars_fragment:bv,map_particle_fragment:Av,map_particle_pars_fragment:wv,metalnessmap_fragment:Rv,metalnessmap_pars_fragment:Cv,morphinstance_vertex:Dv,morphcolor_vertex:Pv,morphnormal_vertex:Lv,morphtarget_pars_vertex:Uv,morphtarget_vertex:Iv,normal_fragment_begin:Fv,normal_fragment_maps:Nv,normal_pars_fragment:Ov,normal_pars_vertex:Bv,normal_vertex:kv,normalmap_pars_fragment:zv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Wv,opaque_fragment:Xv,packing:Yv,premultiplied_alpha_fragment:qv,project_vertex:jv,dithering_fragment:Kv,dithering_pars_fragment:Zv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Qv,shadowmap_pars_fragment:$v,shadowmap_pars_vertex:ex,shadowmap_vertex:tx,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:rx,skinning_vertex:sx,skinnormal_vertex:ax,specularmap_fragment:ox,specularmap_pars_fragment:lx,tonemapping_fragment:cx,tonemapping_pars_fragment:ux,transmission_fragment:hx,transmission_pars_fragment:fx,uv_pars_fragment:dx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:_x,background_frag:vx,backgroundCube_vert:xx,backgroundCube_frag:yx,cube_vert:Sx,cube_frag:Mx,depth_vert:Tx,depth_frag:Ex,distanceRGBA_vert:bx,distanceRGBA_frag:Ax,equirect_vert:wx,equirect_frag:Rx,linedashed_vert:Cx,linedashed_frag:Dx,meshbasic_vert:Px,meshbasic_frag:Lx,meshlambert_vert:Ux,meshlambert_frag:Ix,meshmatcap_vert:Fx,meshmatcap_frag:Nx,meshnormal_vert:Ox,meshnormal_frag:Bx,meshphong_vert:kx,meshphong_frag:zx,meshphysical_vert:Gx,meshphysical_frag:Vx,meshtoon_vert:Hx,meshtoon_frag:Wx,points_vert:Xx,points_frag:Yx,shadow_vert:qx,shadow_frag:jx,sprite_vert:Kx,sprite_frag:Zx},Ce={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ai={basic:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Qt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Qt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new We(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Qt([Ce.points,Ce.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Qt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Qt([Ce.common,Ce.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Qt([Ce.sprite,Ce.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Qt([Ce.common,Ce.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Qt([Ce.lights,Ce.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ai.physical={uniforms:Qt([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ho={r:0,b:0,g:0},cr=new pi,Jx=new qe;function Qx(s,e,t,n,i,r,a){const o=new We(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function g(y){let v=!1;const E=_(y);E===null?m(o,l):E&&E.isColor&&(m(E,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===jo)?(u===void 0&&(u=new Et(new Da(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:ms(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),cr.copy(v.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(cr)),u.material.toneMapped=rt.getTransfer(E.colorSpace)!==lt,(h!==E||f!==E.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Et(new Jn(2,2),new Zn({name:"BackgroundMaterial",uniforms:ms(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,d=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(ho,Qd(s)),n.buffers.color.setClear(ho.r,ho.g,ho.b,v,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:g,addToRenderList:p,dispose:x}}function $x(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,P,D,L,F){let G=!1;const B=h(L,D,P);r!==B&&(r=B,c(r.object)),G=d(M,L,D,F),G&&_(M,L,D,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(M,P,D,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,P,D){const L=D.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let G=F[P.id];G===void 0&&(G={},F[P.id]=G);let B=G[L];return B===void 0&&(B=f(l()),G[L]=B),B}function f(M){const P=[],D=[],L=[];for(let F=0;F<t;F++)P[F]=0,D[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:L,object:M,attributes:{},index:null}}function d(M,P,D,L){const F=r.attributes,G=P.attributes;let B=0;const j=D.getAttributes();for(const H in j)if(j[H].location>=0){const Y=F[H];let I=G[H];if(I===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(I=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(I=M.instanceColor)),Y===void 0||Y.attribute!==I||I&&Y.data!==I.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function _(M,P,D,L){const F={},G=P.attributes;let B=0;const j=D.getAttributes();for(const H in j)if(j[H].location>=0){let Y=G[H];Y===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const I={};I.attribute=Y,Y&&Y.data&&(I.data=Y.data),F[H]=I,B++}r.attributes=F,r.attributesNum=B,r.index=L}function g(){const M=r.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function p(M){m(M,0)}function m(M,P){const D=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;D[M]=1,L[M]===0&&(s.enableVertexAttribArray(M),L[M]=1),F[M]!==P&&(s.vertexAttribDivisor(M,P),F[M]=P)}function x(){const M=r.newAttributes,P=r.enabledAttributes;for(let D=0,L=P.length;D<L;D++)P[D]!==M[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function y(M,P,D,L,F,G,B){B===!0?s.vertexAttribIPointer(M,P,D,F,G):s.vertexAttribPointer(M,P,D,L,F,G)}function v(M,P,D,L){g();const F=L.attributes,G=D.getAttributes(),B=P.defaultAttributeValues;for(const j in G){const H=G[j];if(H.location>=0){let Z=F[j];if(Z===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const Y=Z.normalized,I=Z.itemSize,W=e.get(Z);if(W===void 0)continue;const ee=W.buffer,N=W.type,k=W.bytesPerElement,ne=N===s.INT||N===s.UNSIGNED_INT||Z.gpuType===yu;if(Z.isInterleavedBufferAttribute){const X=Z.data,ie=X.stride,xe=Z.offset;if(X.isInstancedInterleavedBuffer){for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e,X.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let _e=0;_e<H.locationSize;_e++)p(H.location+_e);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let _e=0;_e<H.locationSize;_e++)y(H.location+_e,I/H.locationSize,N,Y,ie*k,(xe+I/H.locationSize*_e)*k,ne)}else{if(Z.isInstancedBufferAttribute){for(let X=0;X<H.locationSize;X++)m(H.location+X,Z.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let X=0;X<H.locationSize;X++)p(H.location+X);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let X=0;X<H.locationSize;X++)y(H.location+X,I/H.locationSize,N,Y,I*k,I/H.locationSize*X*k,ne)}}else if(B!==void 0){const Y=B[j];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(H.location,Y);break;case 3:s.vertexAttrib3fv(H.location,Y);break;case 4:s.vertexAttrib4fv(H.location,Y);break;default:s.vertexAttrib1fv(H.location,Y)}}}}x()}function E(){R();for(const M in n){const P=n[M];for(const D in P){const L=P[D];for(const F in L)u(L[F].object),delete L[F];delete P[D]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const D in P){const L=P[D];for(const F in L)u(L[F].object),delete L[F];delete P[D]}delete n[M.id]}function T(M){for(const P in n){const D=n[P];if(D[M.id]===void 0)continue;const L=D[M.id];for(const F in L)u(L[F].object),delete L[F];delete D[M.id]}}function R(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:x}}function ey(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ty(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Pn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Li&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qn&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:w}}function ny(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new mr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=u(_,f,y,d);for(let E=0;E!==y;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==g;++y,v+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function iy(s){let e=new WeakMap;function t(a,o){return o===vc?a.mapping=hs:o===xc&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===vc||o===xc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new A_(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const es=4,pf=[.125,.215,.35,.446,.526,.582],xr=20,Vl=new La,mf=new We;let Hl=null,Wl=0,Xl=0,Yl=!1;const gr=(1+Math.sqrt(5))/2,Jr=1/gr,gf=[new J(-gr,Jr,0),new J(gr,Jr,0),new J(-Jr,0,gr),new J(Jr,0,gr),new J(0,gr,-Jr),new J(0,gr,Jr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],ry=new J;class Kc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=ry}=r;Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Wl,Xl),this._renderer.xr.enabled=Yl,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:bs,format:Pn,colorSpace:rn,depthBuffer:!1},i=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sy(r)),this._blurMaterial=ay(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,i,r){const l=new $t(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(mf),h.toneMapping=Ji,h.autoClear=!1;const _=new ci({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Et(new Da,_);let p=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,p=!0):(_.color.copy(mf),p=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const v=this._cubeSize;fo(i,y*v,x>2?v:0,v,v),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hs||e.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gf[(i-r-1)%gf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xr-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):xr;p>xr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xr}`);const m=[];let x=0;for(let T=0;T<xr;++T){const R=T/g,S=Math.exp(-R*R/2);m.push(S),T===0?x+=S:T<p&&(x+=2*S)}for(let T=0;T<m.length;T++)m[T]=m[T]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-es?i-y+es:0),w=4*(this._cubeSize-v);fo(t,E,w,3*v,2*v),l.setRenderTarget(t),l.render(h,Vl)}}function sy(s){const e=[],t=[],n=[];let i=s;const r=s-es+1+pf.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-es?l=pf[a-s+es-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*d),y=new Float32Array(p*_*d),v=new Float32Array(m*_*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(S,g*_*w),y.set(f,p*_*w);const M=[w,w,w,w,w,w];v.set(M,m*_*w)}const E=new In;E.setAttribute("position",new nn(x,g)),E.setAttribute("uv",new nn(y,p)),E.setAttribute("faceIndex",new nn(v,m)),e.push(E),i>es&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(s,e,t){const n=new er(s,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ay(s,e,t){const n=new Float32Array(xr),i=new J(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function vf(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xf(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function oy(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vc||l===xc,u=l===hs||l===fs;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Kc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Kc(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ly(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&bo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cy(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],w=x[y+1],T=x[y+2];f.push(E,w,w,T,T,E)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,w=y+1,T=y+2;f.push(E,w,w,T,T,E)}}else return;const p=new(Yd(f)?Jd:Zd)(f,1);p.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function uy(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*a,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let m=0;for(let x=0;x<_;x++)m+=d[x]*g[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hy(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fy(s,e,t){const n=new WeakMap,i=new st;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let E=o.attributes.position.count*v,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*w*4*h),R=new qd(T,E,w,h);R.type=qn,R.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const D=m[P],L=x[P],F=y[P],G=E*w*4*P;for(let B=0;B<D.count;B++){const j=B*S;_===!0&&(i.fromBufferAttribute(D,B),T[G+j+0]=i.x,T[G+j+1]=i.y,T[G+j+2]=i.z,T[G+j+3]=0),g===!0&&(i.fromBufferAttribute(L,B),T[G+j+4]=i.x,T[G+j+5]=i.y,T[G+j+6]=i.z,T[G+j+7]=0),p===!0&&(i.fromBufferAttribute(F,B),T[G+j+8]=i.x,T[G+j+9]=i.y,T[G+j+10]=i.z,T[G+j+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new Ze(E,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function dy(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const gp=new Rt,yf=new ap(1,1),_p=new qd,vp=new u_,xp=new ep,Sf=[],Mf=[],Tf=new Float32Array(16),Ef=new Float32Array(9),bf=new Float32Array(4);function Ds(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Sf[i];if(r===void 0&&(r=new Float32Array(i),Sf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Jo(s,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function py(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function my(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function gy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function _y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function vy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;bf.set(n),s.uniformMatrix2fv(this.addr,!1,bf),Pt(t,n)}}function xy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;Ef.set(n),s.uniformMatrix3fv(this.addr,!1,Ef),Pt(t,n)}}function yy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;Tf.set(n),s.uniformMatrix4fv(this.addr,!1,Tf),Pt(t,n)}}function Sy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function My(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function Ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function by(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Cy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yf.compareFunction=Xd,r=yf):r=gp,t.setTexture2D(e||r,i)}function Dy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vp,i)}function Py(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xp,i)}function Ly(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_p,i)}function Uy(s){switch(s){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return Sy;case 35667:case 35671:return My;case 35668:case 35672:return Ty;case 35669:case 35673:return Ey;case 5125:return by;case 36294:return Ay;case 36295:return wy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Iy(s,e){s.uniform1fv(this.addr,e)}function Fy(s,e){const t=Ds(e,this.size,2);s.uniform2fv(this.addr,t)}function Ny(s,e){const t=Ds(e,this.size,3);s.uniform3fv(this.addr,t)}function Oy(s,e){const t=Ds(e,this.size,4);s.uniform4fv(this.addr,t)}function By(s,e){const t=Ds(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ky(s,e){const t=Ds(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zy(s,e){const t=Ds(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gy(s,e){s.uniform1iv(this.addr,e)}function Vy(s,e){s.uniform2iv(this.addr,e)}function Hy(s,e){s.uniform3iv(this.addr,e)}function Wy(s,e){s.uniform4iv(this.addr,e)}function Xy(s,e){s.uniform1uiv(this.addr,e)}function Yy(s,e){s.uniform2uiv(this.addr,e)}function qy(s,e){s.uniform3uiv(this.addr,e)}function jy(s,e){s.uniform4uiv(this.addr,e)}function Ky(s,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||gp,r[a])}function Zy(s,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vp,r[a])}function Jy(s,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||xp,r[a])}function Qy(s,e,t){const n=this.cache,i=e.length,r=Jo(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_p,r[a])}function $y(s){switch(s){case 5126:return Iy;case 35664:return Fy;case 35665:return Ny;case 35666:return Oy;case 35674:return By;case 35675:return ky;case 35676:return zy;case 5124:case 35670:return Gy;case 35667:case 35671:return Vy;case 35668:case 35672:return Hy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return Yy;case 36295:return qy;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Qy}}class eS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Uy(t.type)}}class tS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$y(t.type)}}class nS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function Af(s,e){s.seq.push(e),s.map[e.id]=e}function iS(s,e,t){const n=s.name,i=n.length;for(ql.lastIndex=0;;){const r=ql.exec(n),a=ql.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Af(t,c===void 0?new eS(o,s,e):new tS(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new nS(o),Af(t,h)),t=h}}}class Ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);iS(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function wf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const rS=37297;let sS=0;function aS(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Rf=new Ye;function oS(s){rt._getMatrix(Rf,rt.workingColorSpace,s);const e=`mat3( ${Rf.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case Uo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+aS(s.getShaderSource(e),a)}else return i}function lS(s,e){const t=oS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cS(s,e){let t;switch(e){case yg:t="Linear";break;case Sg:t="Reinhard";break;case Mg:t="Cineon";break;case Dd:t="ACESFilmic";break;case Eg:t="AgX";break;case bg:t="Neutral";break;case Tg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new J;function uS(){rt.getLuminanceCoefficients(po);const s=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function fS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ea(s){return s!==""}function Df(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(s){return s.replace(pS,gS)}const mS=new Map;function gS(s,e){let t=Ke[e];if(t===void 0){const n=mS.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zc(t)}const _S=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(s){return s.replace(_S,vS)}function vS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Uf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function yS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hs:case fs:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function MS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cd:e="ENVMAP_BLENDING_MULTIPLY";break;case vg:e="ENVMAP_BLENDING_MIX";break;case xg:e="ENVMAP_BLENDING_ADD";break}return e}function TS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ES(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xS(t),c=yS(t),u=SS(t),h=MS(t),f=TS(t),d=hS(t),_=fS(r),g=i.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),m.length>0&&(m+=`
`)):(p=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ji?cS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,lS("linearToOutputTexel",t.outputColorSpace),uS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=Zc(a),a=Df(a,t),a=Pf(a,t),o=Zc(o),o=Df(o,t),o=Pf(o,t),a=Lf(a),o=Lf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+p+a,v=x+m+o,E=wf(i,i.VERTEX_SHADER,y),w=wf(i,i.FRAGMENT_SHADER,v);i.attachShader(g,E),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),L=i.getShaderInfoLog(E).trim(),F=i.getShaderInfoLog(w).trim();let G=!0,B=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,w);else{const j=Cf(i,E,"vertex"),H=Cf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+j+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||F==="")&&(B=!1);B&&(P.diagnostics={runnable:G,programLog:D,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:m}})}i.deleteShader(E),i.deleteShader(w),R=new Ao(i,g),S=dS(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,rS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let bS=0;class AS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wS(e),t.set(e,n)),n}}class wS{constructor(e){this.id=bS++,this.code=e,this.usedTimes=0}}function RS(s,e,t,n,i,r,a){const o=new jd,l=new AS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,P,D,L){const F=D.fog,G=L.geometry,B=S.isMeshStandardMaterial?D.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),H=j&&j.mapping===jo?j.image.height:null,Z=_[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,I=Y!==void 0?Y.length:0;let W=0;G.morphAttributes.position!==void 0&&(W=1),G.morphAttributes.normal!==void 0&&(W=2),G.morphAttributes.color!==void 0&&(W=3);let ee,N,k,ne;if(Z){const Ge=ai[Z];ee=Ge.vertexShader,N=Ge.fragmentShader}else ee=S.vertexShader,N=S.fragmentShader,l.update(S),k=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const X=s.getRenderTarget(),ie=s.state.buffers.depth.getReversed(),xe=L.isInstancedMesh===!0,_e=L.isBatchedMesh===!0,ve=!!S.map,he=!!S.matcap,De=!!j,U=!!S.aoMap,Oe=!!S.lightMap,Ae=!!S.bumpMap,Re=!!S.normalMap,ae=!!S.displacementMap,be=!!S.emissiveMap,de=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,O=S.clearcoat>0,Q=S.dispersion>0,$=S.iridescence>0,se=S.sheen>0,fe=S.transmission>0,le=b&&!!S.anisotropyMap,me=O&&!!S.clearcoatMap,Le=O&&!!S.clearcoatNormalMap,ce=O&&!!S.clearcoatRoughnessMap,Se=$&&!!S.iridescenceMap,Te=$&&!!S.iridescenceThicknessMap,Ee=se&&!!S.sheenColorMap,oe=se&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,Fe=!!S.specularColorMap,je=!!S.specularIntensityMap,z=fe&&!!S.transmissionMap,ue=fe&&!!S.thicknessMap,te=!!S.gradientMap,pe=!!S.alphaMap,ye=S.alphaTest>0,ge=!!S.alphaHash,Ne=!!S.extensions;let Xe=Ji;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Xe=s.toneMapping);const Be={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:N,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:_e,batchingColor:_e&&L._colorsTexture!==null,instancing:xe,instancingColor:xe&&L.instanceColor!==null,instancingMorph:xe&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?s.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:rn,alphaToCoverage:!!S.alphaToCoverage,map:ve,matcap:he,envMap:De,envMapMode:De&&j.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Oe,bumpMap:Ae,normalMap:Re,displacementMap:f&&ae,emissiveMap:be,normalMapObjectSpace:Re&&S.normalMapType===Dg,normalMapTangentSpace:Re&&S.normalMapType===Wd,metalnessMap:de,roughnessMap:A,anisotropy:b,anisotropyMap:le,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:Le,clearcoatRoughnessMap:ce,dispersion:Q,iridescence:$,iridescenceMap:Se,iridescenceThicknessMap:Te,sheen:se,sheenColorMap:Ee,sheenRoughnessMap:oe,specularMap:Ue,specularColorMap:Fe,specularIntensityMap:je,transmission:fe,transmissionMap:z,thicknessMap:ue,gradientMap:te,opaque:S.transparent===!1&&S.blending===is&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:ye,alphaHash:ge,combine:S.combine,mapUv:ve&&g(S.map.channel),aoMapUv:U&&g(S.aoMap.channel),lightMapUv:Oe&&g(S.lightMap.channel),bumpMapUv:Ae&&g(S.bumpMap.channel),normalMapUv:Re&&g(S.normalMap.channel),displacementMapUv:ae&&g(S.displacementMap.channel),emissiveMapUv:be&&g(S.emissiveMap.channel),metalnessMapUv:de&&g(S.metalnessMap.channel),roughnessMapUv:A&&g(S.roughnessMap.channel),anisotropyMapUv:le&&g(S.anisotropyMap.channel),clearcoatMapUv:me&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(S.sheenRoughnessMap.channel),specularMapUv:Ue&&g(S.specularMap.channel),specularColorMapUv:Fe&&g(S.specularColorMap.channel),specularIntensityMapUv:je&&g(S.specularIntensityMap.channel),transmissionMapUv:z&&g(S.transmissionMap.channel),thicknessMapUv:ue&&g(S.thicknessMap.channel),alphaMapUv:pe&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Re||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(ve||pe),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ie,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ve&&S.map.isVideoTexture===!0&&rt.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&rt.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===un,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=_[S.type];let P;if(M){const D=ai[M];P=Cu.clone(D.uniforms)}else P=S.uniforms;return P}function E(S,M){let P;for(let D=0,L=u.length;D<L;D++){const F=u[D];if(F.cacheKey===M){P=F,++P.usedTimes;break}}return P===void 0&&(P=new ES(s,M,S,r),u.push(P)),P}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:R}}function CS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function DS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function If(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ff(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function o(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(h,f,d,_,g,p){const m=a(h,f,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||DS),n.length>1&&n.sort(f||If),i.length>1&&i.sort(f||If)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function PS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ff,s.set(n,[a])):i>=r.length?(a=new Ff,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function LS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new We};break;case"SpotLight":t={position:new J,direction:new J,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function US(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let IS=0;function FS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function NS(s){const e=new LS,t=US(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const i=new J,r=new qe,a=new qe;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,x=0,y=0,v=0,E=0,w=0,T=0;c.sort(FS);for(let S=0,M=c.length;S<M;S++){const P=c[S],D=P.color,L=P.intensity,F=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*L,h+=D.g*L,f+=D.b*L;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],L);T++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=B,d++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(D).multiplyScalar(L),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[g]=B;const j=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,j.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=G,v++}g++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(D).multiplyScalar(L),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=B,p++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const j=P.shadow,H=t.get(P);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=B,_++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(L),B.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[m]=B,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=T,n.version=IS++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Nf(s){const e=new NS(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function OS(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Nf(s),e.set(i,[o])):r>=a.length?(o=new Nf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const BS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kS=`uniform sampler2D shadow_pass;
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
}`;function zS(s,e,t){let n=new Lu;const i=new Ze,r=new Ze,a=new st,o=new op({depthPacking:Hd}),l=new lp,c={},u=t.maxTextureSize,h={[Pi]:un,[un]:Pi,[cn]:cn},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:BS,fragmentShader:kS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new In;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Et(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wd;let m=this.type;this.render=function(w,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ci),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=m!==Ti&&this.type===Ti,F=m===Ti&&this.type!==Ti;for(let G=0,B=w.length;G<B;G++){const j=w[G],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Z=H.getFrameExtents();if(i.multiply(Z),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Z.x),i.x=r.x*Z.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Z.y),i.y=r.y*Z.y,H.mapSize.y=r.y)),H.map===null||L===!0||F===!0){const I=this.type!==Ti?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new er(i.x,i.y,I),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const Y=H.getViewportCount();for(let I=0;I<Y;I++){const W=H.getViewport(I);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),D.viewport(a),H.updateMatrices(j,I),n=H.getFrustum(),v(T,R,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Ti&&x(H,R),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(S,M,P)};function x(w,T){const R=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new er(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,R,f,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,R,d,g,null)}function y(w,T,R,S){let M=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=M.uuid,L=T.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let G=F[L];G===void 0&&(G=M.clone(),F[L]=G,T.addEventListener("dispose",E)),M=G}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Ti?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=R}return M}function v(w,T,R,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ti)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const L=e.update(w),F=w.material;if(Array.isArray(F)){const G=L.groups;for(let B=0,j=G.length;B<j;B++){const H=G[B],Z=F[H.materialIndex];if(Z&&Z.visible){const Y=y(w,Z,S,M);w.onBeforeShadow(s,w,T,R,L,Y,H),s.renderBufferDirect(R,null,L,Y,w,H),w.onAfterShadow(s,w,T,R,L,Y,H)}}}else if(F.visible){const G=y(w,F,S,M);w.onBeforeShadow(s,w,T,R,L,G,null),s.renderBufferDirect(R,null,L,G,w,null),w.onAfterShadow(s,w,T,R,L,G,null)}}const D=w.children;for(let L=0,F=D.length;L<F;L++)v(D[L],T,R,S,M)}function E(w){w.target.removeEventListener("dispose",E);for(const R in c){const S=c[R],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const GS={[hc]:fc,[dc]:gc,[pc]:_c,[us]:mc,[fc]:hc,[gc]:dc,[_c]:pc,[mc]:us};function VS(s,e){function t(){let z=!1;const ue=new st;let te=null;const pe=new st(0,0,0,0);return{setMask:function(ye){te!==ye&&!z&&(s.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){z=ye},setClear:function(ye,ge,Ne,Xe,Be){Be===!0&&(ye*=Xe,ge*=Xe,Ne*=Xe),ue.set(ye,ge,Ne,Xe),pe.equals(ue)===!1&&(s.clearColor(ye,ge,Ne,Xe),pe.copy(ue))},reset:function(){z=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let z=!1,ue=!1,te=null,pe=null,ye=null;return{setReversed:function(ge){if(ue!==ge){const Ne=e.get("EXT_clip_control");ge?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=ge;const Xe=ye;ye=null,this.setClear(Xe)}},getReversed:function(){return ue},setTest:function(ge){ge?X(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(ge){te!==ge&&!z&&(s.depthMask(ge),te=ge)},setFunc:function(ge){if(ue&&(ge=GS[ge]),pe!==ge){switch(ge){case hc:s.depthFunc(s.NEVER);break;case fc:s.depthFunc(s.ALWAYS);break;case dc:s.depthFunc(s.LESS);break;case us:s.depthFunc(s.LEQUAL);break;case pc:s.depthFunc(s.EQUAL);break;case mc:s.depthFunc(s.GEQUAL);break;case gc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=ge}},setLocked:function(ge){z=ge},setClear:function(ge){ye!==ge&&(ue&&(ge=1-ge),s.clearDepth(ge),ye=ge)},reset:function(){z=!1,te=null,pe=null,ye=null,ue=!1}}}function i(){let z=!1,ue=null,te=null,pe=null,ye=null,ge=null,Ne=null,Xe=null,Be=null;return{setTest:function(Ge){z||(Ge?X(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(Ge){ue!==Ge&&!z&&(s.stencilMask(Ge),ue=Ge)},setFunc:function(Ge,ct,ht){(te!==Ge||pe!==ct||ye!==ht)&&(s.stencilFunc(Ge,ct,ht),te=Ge,pe=ct,ye=ht)},setOp:function(Ge,ct,ht){(ge!==Ge||Ne!==ct||Xe!==ht)&&(s.stencilOp(Ge,ct,ht),ge=Ge,Ne=ct,Xe=ht)},setLocked:function(Ge){z=Ge},setClear:function(Ge){Be!==Ge&&(s.clearStencil(Ge),Be=Ge)},reset:function(){z=!1,ue=null,te=null,pe=null,ye=null,ge=null,Ne=null,Xe=null,Be=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,x=null,y=null,v=null,E=null,w=null,T=new We(0,0,0),R=0,S=!1,M=null,P=null,D=null,L=null,F=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=j>=2);let Z=null,Y={};const I=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),ee=new st().fromArray(I),N=new st().fromArray(W);function k(z,ue,te,pe){const ye=new Uint8Array(4),ge=s.createTexture();s.bindTexture(z,ge),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<te;Ne++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(ue+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return ge}const ne={};ne[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(s.DEPTH_TEST),a.setFunc(us),Ae(!1),Re(xh),X(s.CULL_FACE),U(Ci);function X(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function ie(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function xe(z,ue){return h[z]!==ue?(s.bindFramebuffer(z,ue),h[z]=ue,z===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),z===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function _e(z,ue){let te=d,pe=!1;if(z){te=f.get(ue),te===void 0&&(te=[],f.set(ue,te));const ye=z.textures;if(te.length!==ye.length||te[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ne=ye.length;ge<Ne;ge++)te[ge]=s.COLOR_ATTACHMENT0+ge;te.length=ye.length,pe=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,pe=!0);pe&&s.drawBuffers(te)}function ve(z){return _!==z?(s.useProgram(z),_=z,!0):!1}const he={[vr]:s.FUNC_ADD,[tg]:s.FUNC_SUBTRACT,[ng]:s.FUNC_REVERSE_SUBTRACT};he[ig]=s.MIN,he[rg]=s.MAX;const De={[sg]:s.ZERO,[ag]:s.ONE,[og]:s.SRC_COLOR,[cc]:s.SRC_ALPHA,[dg]:s.SRC_ALPHA_SATURATE,[hg]:s.DST_COLOR,[cg]:s.DST_ALPHA,[lg]:s.ONE_MINUS_SRC_COLOR,[uc]:s.ONE_MINUS_SRC_ALPHA,[fg]:s.ONE_MINUS_DST_COLOR,[ug]:s.ONE_MINUS_DST_ALPHA,[pg]:s.CONSTANT_COLOR,[mg]:s.ONE_MINUS_CONSTANT_COLOR,[gg]:s.CONSTANT_ALPHA,[_g]:s.ONE_MINUS_CONSTANT_ALPHA};function U(z,ue,te,pe,ye,ge,Ne,Xe,Be,Ge){if(z===Ci){g===!0&&(ie(s.BLEND),g=!1);return}if(g===!1&&(X(s.BLEND),g=!0),z!==eg){if(z!==p||Ge!==S){if((m!==vr||v!==vr)&&(s.blendEquation(s.FUNC_ADD),m=vr,v=vr),Ge)switch(z){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yh:s.blendFunc(s.ONE,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,y=null,E=null,w=null,T.set(0,0,0),R=0,p=z,S=Ge}return}ye=ye||ue,ge=ge||te,Ne=Ne||pe,(ue!==m||ye!==v)&&(s.blendEquationSeparate(he[ue],he[ye]),m=ue,v=ye),(te!==x||pe!==y||ge!==E||Ne!==w)&&(s.blendFuncSeparate(De[te],De[pe],De[ge],De[Ne]),x=te,y=pe,E=ge,w=Ne),(Xe.equals(T)===!1||Be!==R)&&(s.blendColor(Xe.r,Xe.g,Xe.b,Be),T.copy(Xe),R=Be),p=z,S=!1}function Oe(z,ue){z.side===cn?ie(s.CULL_FACE):X(s.CULL_FACE);let te=z.side===un;ue&&(te=!te),Ae(te),z.blending===is&&z.transparent===!1?U(Ci):U(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const pe=z.stencilWrite;o.setTest(pe),pe&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),be(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?X(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(z){M!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),M=z)}function Re(z){z!==Qm?(X(s.CULL_FACE),z!==P&&(z===xh?s.cullFace(s.BACK):z===$m?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),P=z}function ae(z){z!==D&&(B&&s.lineWidth(z),D=z)}function be(z,ue,te){z?(X(s.POLYGON_OFFSET_FILL),(L!==ue||F!==te)&&(s.polygonOffset(ue,te),L=ue,F=te)):ie(s.POLYGON_OFFSET_FILL)}function de(z){z?X(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function A(z){z===void 0&&(z=s.TEXTURE0+G-1),Z!==z&&(s.activeTexture(z),Z=z)}function b(z,ue,te){te===void 0&&(Z===null?te=s.TEXTURE0+G-1:te=Z);let pe=Y[te];pe===void 0&&(pe={type:void 0,texture:void 0},Y[te]=pe),(pe.type!==z||pe.texture!==ue)&&(Z!==te&&(s.activeTexture(te),Z=te),s.bindTexture(z,ue||ne[z]),pe.type=z,pe.texture=ue)}function O(){const z=Y[Z];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Q(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(z){ee.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function oe(z){N.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),N.copy(z))}function Ue(z,ue){let te=c.get(ue);te===void 0&&(te=new WeakMap,c.set(ue,te));let pe=te.get(z);pe===void 0&&(pe=s.getUniformBlockIndex(ue,z.name),te.set(z,pe))}function Fe(z,ue){const pe=c.get(ue).get(z);l.get(ue)!==pe&&(s.uniformBlockBinding(ue,pe,z.__bindingPointIndex),l.set(ue,pe))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Z=null,Y={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,x=null,y=null,v=null,E=null,w=null,T=new We(0,0,0),R=0,S=!1,M=null,P=null,D=null,L=null,F=null,ee.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:X,disable:ie,bindFramebuffer:xe,drawBuffers:_e,useProgram:ve,setBlending:U,setMaterial:Oe,setFlipSided:Ae,setCullFace:Re,setLineWidth:ae,setPolygonOffset:be,setScissorTest:de,activeTexture:A,bindTexture:b,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:$,texImage2D:Se,texImage3D:Te,updateUBOMapping:Ue,uniformBlockBinding:Fe,texStorage2D:Le,texStorage3D:ce,texSubImage2D:se,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Ee,viewport:oe,reset:je}}function HS(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return d?new OffscreenCanvas(A,b):xa("canvas")}function g(A,b,O){let Q=1;const $=de(A);if(($.width>O||$.height>O)&&(Q=O/Math.max($.width,$.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(Q*$.width),fe=Math.floor(Q*$.height);h===void 0&&(h=_(se,fe));const le=b?_(se,fe):h;return le.width=se,le.height=fe,le.getContext("2d").drawImage(A,0,0,se,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+fe+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){s.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,b,O,Q,$=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=b;if(b===s.RED&&(O===s.FLOAT&&(se=s.R32F),O===s.HALF_FLOAT&&(se=s.R16F),O===s.UNSIGNED_BYTE&&(se=s.R8)),b===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.R8UI),O===s.UNSIGNED_SHORT&&(se=s.R16UI),O===s.UNSIGNED_INT&&(se=s.R32UI),O===s.BYTE&&(se=s.R8I),O===s.SHORT&&(se=s.R16I),O===s.INT&&(se=s.R32I)),b===s.RG&&(O===s.FLOAT&&(se=s.RG32F),O===s.HALF_FLOAT&&(se=s.RG16F),O===s.UNSIGNED_BYTE&&(se=s.RG8)),b===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.RG8UI),O===s.UNSIGNED_SHORT&&(se=s.RG16UI),O===s.UNSIGNED_INT&&(se=s.RG32UI),O===s.BYTE&&(se=s.RG8I),O===s.SHORT&&(se=s.RG16I),O===s.INT&&(se=s.RG32I)),b===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.RGB8UI),O===s.UNSIGNED_SHORT&&(se=s.RGB16UI),O===s.UNSIGNED_INT&&(se=s.RGB32UI),O===s.BYTE&&(se=s.RGB8I),O===s.SHORT&&(se=s.RGB16I),O===s.INT&&(se=s.RGB32I)),b===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),O===s.UNSIGNED_INT&&(se=s.RGBA32UI),O===s.BYTE&&(se=s.RGBA8I),O===s.SHORT&&(se=s.RGBA16I),O===s.INT&&(se=s.RGBA32I)),b===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),b===s.RGBA){const fe=$?Uo:rt.getTransfer(Q);O===s.FLOAT&&(se=s.RGBA32F),O===s.HALF_FLOAT&&(se=s.RGBA16F),O===s.UNSIGNED_BYTE&&(se=fe===lt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function v(A,b){let O;return A?b===null||b===Rr||b===pa?O=s.DEPTH24_STENCIL8:b===qn?O=s.DEPTH32F_STENCIL8:b===da&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rr||b===pa?O=s.DEPTH_COMPONENT24:b===qn?O=s.DEPTH_COMPONENT32F:b===da&&(O=s.DEPTH_COMPONENT16),O}function E(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==Gt?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){const b=A.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&u.delete(b)}function T(A){const b=A.target;b.removeEventListener("dispose",T),M(b)}function R(A){const b=n.get(A);if(b.__webglInit===void 0)return;const O=A.source,Q=f.get(O);if(Q){const $=Q[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(A),Object.keys(Q).length===0&&f.delete(O)}n.remove(A)}function S(A){const b=n.get(A);s.deleteTexture(b.__webglTexture);const O=A.source,Q=f.get(O);delete Q[b.__cacheKey],a.memory.textures--}function M(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let $=0;$<b.__webglFramebuffer[Q].length;$++)s.deleteFramebuffer(b.__webglFramebuffer[Q][$]);else s.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=A.textures;for(let Q=0,$=O.length;Q<$;Q++){const se=n.get(O[Q]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(O[Q])}n.remove(A)}let P=0;function D(){P=0}function L(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function F(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function G(A,b){const O=n.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(O,A,b);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+b)}function B(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){N(O,A,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+b)}function j(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){N(O,A,b);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+b)}function H(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){k(O,A,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+b)}const Z={[ds]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},Y={[tn]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[xo]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},I={[Pg]:s.NEVER,[Og]:s.ALWAYS,[Lg]:s.LESS,[Xd]:s.LEQUAL,[Ug]:s.EQUAL,[Ng]:s.GEQUAL,[Ig]:s.GREATER,[Fg]:s.NOTEQUAL};function W(A,b){if(b.type===qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gt||b.magFilter===xo||b.magFilter===$s||b.magFilter===wi||b.minFilter===Gt||b.minFilter===xo||b.minFilter===$s||b.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Z[b.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Z[b.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Z[b.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Y[b.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Y[b.minFilter]),b.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,I[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==$s&&b.minFilter!==wi||b.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ee(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const Q=b.source;let $=f.get(Q);$===void 0&&($={},f.set(Q,$));const se=F(b);if(se!==A.__cacheKey){$[se]===void 0&&($[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[se].usedTimes++;const fe=$[A.__cacheKey];fe!==void 0&&($[A.__cacheKey].usedTimes--,fe.usedTimes===0&&S(b)),A.__cacheKey=se,A.__webglTexture=$[se].texture}return O}function N(A,b,O){let Q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=s.TEXTURE_3D);const $=ee(A,b),se=b.source;t.bindTexture(Q,A.__webglTexture,s.TEXTURE0+O);const fe=n.get(se);if(se.version!==fe.__version||$===!0){t.activeTexture(s.TEXTURE0+O);const le=rt.getPrimaries(rt.workingColorSpace),me=b.colorSpace===Xi?null:rt.getPrimaries(b.colorSpace),Le=b.colorSpace===Xi||le===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ce=g(b.image,!1,i.maxTextureSize);ce=be(b,ce);const Se=r.convert(b.format,b.colorSpace),Te=r.convert(b.type);let Ee=y(b.internalFormat,Se,Te,b.colorSpace,b.isVideoTexture);W(Q,b);let oe;const Ue=b.mipmaps,Fe=b.isVideoTexture!==!0,je=fe.__version===void 0||$===!0,z=se.dataReady,ue=E(b,ce);if(b.isDepthTexture)Ee=v(b.format===ga,b.type),je&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Ee,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,Ee,ce.width,ce.height,0,Se,Te,null));else if(b.isDataTexture)if(Ue.length>0){Fe&&je&&t.texStorage2D(s.TEXTURE_2D,ue,Ee,Ue[0].width,Ue[0].height);for(let te=0,pe=Ue.length;te<pe;te++)oe=Ue[te],Fe?z&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,Te,oe.data):t.texImage2D(s.TEXTURE_2D,te,Ee,oe.width,oe.height,0,Se,Te,oe.data);b.generateMipmaps=!1}else Fe?(je&&t.texStorage2D(s.TEXTURE_2D,ue,Ee,ce.width,ce.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce.width,ce.height,Se,Te,ce.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,ce.width,ce.height,0,Se,Te,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Fe&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ee,Ue[0].width,Ue[0].height,ce.depth);for(let te=0,pe=Ue.length;te<pe;te++)if(oe=Ue[te],b.format!==Pn)if(Se!==null)if(Fe){if(z)if(b.layerUpdates.size>0){const ye=df(oe.width,oe.height,b.format,b.type);for(const ge of b.layerUpdates){const Ne=oe.data.subarray(ge*ye/oe.data.BYTES_PER_ELEMENT,(ge+1)*ye/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,ge,oe.width,oe.height,1,Se,Ne)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,Se,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ce.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,ce.depth,Se,Te,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ee,oe.width,oe.height,ce.depth,0,Se,Te,oe.data)}else{Fe&&je&&t.texStorage2D(s.TEXTURE_2D,ue,Ee,Ue[0].width,Ue[0].height);for(let te=0,pe=Ue.length;te<pe;te++)oe=Ue[te],b.format!==Pn?Se!==null?Fe?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ee,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?z&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,oe.width,oe.height,Se,Te,oe.data):t.texImage2D(s.TEXTURE_2D,te,Ee,oe.width,oe.height,0,Se,Te,oe.data)}else if(b.isDataArrayTexture)if(Fe){if(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,Ee,ce.width,ce.height,ce.depth),z)if(b.layerUpdates.size>0){const te=df(ce.width,ce.height,b.format,b.type);for(const pe of b.layerUpdates){const ye=ce.data.subarray(pe*te/ce.data.BYTES_PER_ELEMENT,(pe+1)*te/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ce.width,ce.height,1,Se,Te,ye)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Se,Te,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,ce.width,ce.height,ce.depth,0,Se,Te,ce.data);else if(b.isData3DTexture)Fe?(je&&t.texStorage3D(s.TEXTURE_3D,ue,Ee,ce.width,ce.height,ce.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Se,Te,ce.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,ce.width,ce.height,ce.depth,0,Se,Te,ce.data);else if(b.isFramebufferTexture){if(je)if(Fe)t.texStorage2D(s.TEXTURE_2D,ue,Ee,ce.width,ce.height);else{let te=ce.width,pe=ce.height;for(let ye=0;ye<ue;ye++)t.texImage2D(s.TEXTURE_2D,ye,Ee,te,pe,0,Se,Te,null),te>>=1,pe>>=1}}else if(Ue.length>0){if(Fe&&je){const te=de(Ue[0]);t.texStorage2D(s.TEXTURE_2D,ue,Ee,te.width,te.height)}for(let te=0,pe=Ue.length;te<pe;te++)oe=Ue[te],Fe?z&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Se,Te,oe):t.texImage2D(s.TEXTURE_2D,te,Ee,Se,Te,oe);b.generateMipmaps=!1}else if(Fe){if(je){const te=de(ce);t.texStorage2D(s.TEXTURE_2D,ue,Ee,te.width,te.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Te,ce)}else t.texImage2D(s.TEXTURE_2D,0,Ee,Se,Te,ce);p(b)&&m(Q),fe.__version=se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function k(A,b,O){if(b.image.length!==6)return;const Q=ee(A,b),$=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const se=n.get($);if($.version!==se.__version||Q===!0){t.activeTexture(s.TEXTURE0+O);const fe=rt.getPrimaries(rt.workingColorSpace),le=b.colorSpace===Xi?null:rt.getPrimaries(b.colorSpace),me=b.colorSpace===Xi||fe===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,ce=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let pe=0;pe<6;pe++)!Le&&!ce?Se[pe]=g(b.image[pe],!0,i.maxCubemapSize):Se[pe]=ce?b.image[pe].image:b.image[pe],Se[pe]=be(b,Se[pe]);const Te=Se[0],Ee=r.convert(b.format,b.colorSpace),oe=r.convert(b.type),Ue=y(b.internalFormat,Ee,oe,b.colorSpace),Fe=b.isVideoTexture!==!0,je=se.__version===void 0||Q===!0,z=$.dataReady;let ue=E(b,Te);W(s.TEXTURE_CUBE_MAP,b);let te;if(Le){Fe&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ue,Te.width,Te.height);for(let pe=0;pe<6;pe++){te=Se[pe].mipmaps;for(let ye=0;ye<te.length;ye++){const ge=te[ye];b.format!==Pn?Ee!==null?Fe?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Ee,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Ue,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,0,0,ge.width,ge.height,Ee,oe,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye,Ue,ge.width,ge.height,0,Ee,oe,ge.data)}}}else{if(te=b.mipmaps,Fe&&je){te.length>0&&ue++;const pe=de(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,Ue,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ce){Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Se[pe].width,Se[pe].height,Ee,oe,Se[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ue,Se[pe].width,Se[pe].height,0,Ee,oe,Se[pe].data);for(let ye=0;ye<te.length;ye++){const Ne=te[ye].image[pe].image;Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Ne.width,Ne.height,Ee,oe,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Ue,Ne.width,Ne.height,0,Ee,oe,Ne.data)}}else{Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ee,oe,Se[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ue,Ee,oe,Se[pe]);for(let ye=0;ye<te.length;ye++){const ge=te[ye];Fe?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,0,0,Ee,oe,ge.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye+1,Ue,Ee,oe,ge.image[pe])}}}p(b)&&m(s.TEXTURE_CUBE_MAP),se.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ne(A,b,O,Q,$,se){const fe=r.convert(O.format,O.colorSpace),le=r.convert(O.type),me=y(O.internalFormat,fe,le,O.colorSpace),Le=n.get(b),ce=n.get(O);if(ce.__renderTarget=b,!Le.__hasExternalTextures){const Se=Math.max(1,b.width>>se),Te=Math.max(1,b.height>>se);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,se,me,Se,Te,b.depth,0,fe,le,null):t.texImage2D($,se,me,Se,Te,0,fe,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Re(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,$,ce.__webglTexture,0,Ae(b)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,$,ce.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function X(A,b,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),b.depthBuffer){const Q=b.depthTexture,$=Q&&Q.isDepthTexture?Q.type:null,se=v(b.stencilBuffer,$),fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Ae(b);Re(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,se,b.width,b.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,se,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,se,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,A)}else{const Q=b.textures;for(let $=0;$<Q.length;$++){const se=Q[$],fe=r.convert(se.format,se.colorSpace),le=r.convert(se.type),me=y(se.internalFormat,fe,le,se.colorSpace),Le=Ae(b);O&&Re(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,me,b.width,b.height):Re(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,me,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const $=Q.__webglTexture,se=Ae(b);if(b.depthTexture.format===ma)Re(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(b.depthTexture.format===ga)Re(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function xe(A){const b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",$)};Q.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=Q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ie(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=s.createRenderbuffer(),X(b.__webglDepthbuffer[Q],A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=b.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,se)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),X(b.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(A,b,O){const Q=n.get(A);b!==void 0&&ne(Q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&xe(A)}function ve(A){const b=A.texture,O=n.get(A),Q=n.get(b);A.addEventListener("dispose",T);const $=A.textures,se=A.isWebGLCubeRenderTarget===!0,fe=$.length>1;if(fe||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=b.version,a.memory.textures++),se){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let me=0;me<b.mipmaps.length;me++)O.__webglFramebuffer[le][me]=s.createFramebuffer()}else O.__webglFramebuffer[le]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)O.__webglFramebuffer[le]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(fe)for(let le=0,me=$.length;le<me;le++){const Le=n.get($[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Re(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const me=$[le];O.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Le=r.convert(me.format,me.colorSpace),ce=r.convert(me.type),Se=y(me.internalFormat,Le,ce,me.colorSpace,A.isXRRenderTarget===!0),Te=Ae(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,Se,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,O.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),X(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),W(s.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(O.__webglFramebuffer[le][me],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ne(O.__webglFramebuffer[le],A,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(b)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let le=0,me=$.length;le<me;le++){const Le=$[le],ce=n.get(Le);t.bindTexture(s.TEXTURE_2D,ce.__webglTexture),W(s.TEXTURE_2D,Le),ne(O.__webglFramebuffer,A,Le,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),p(Le)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),W(le,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)ne(O.__webglFramebuffer[me],A,b,s.COLOR_ATTACHMENT0,le,me);else ne(O.__webglFramebuffer,A,b,s.COLOR_ATTACHMENT0,le,0);p(b)&&m(le),t.unbindTexture()}A.depthBuffer&&xe(A)}function he(A){const b=A.textures;for(let O=0,Q=b.length;O<Q;O++){const $=b[O];if(p($)){const se=x(A),fe=n.get($).__webglTexture;t.bindTexture(se,fe),m(se),t.unbindTexture()}}}const De=[],U=[];function Oe(A){if(A.samples>0){if(Re(A)===!1){const b=A.textures,O=A.width,Q=A.height;let $=s.COLOR_BUFFER_BIT;const se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(A),le=b.length>1;if(le)for(let me=0;me<b.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<b.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Le=n.get(b[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Le,0)}s.blitFramebuffer(0,0,O,Q,0,0,O,Q,$,s.NEAREST),l===!0&&(De.length=0,U.length=0,De.push(s.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(De.push(se),U.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<b.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);const Le=n.get(b[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ae(A){return Math.min(i.maxSamples,A.samples)}function Re(A){const b=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(A){const b=a.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function be(A,b){const O=A.colorSpace,Q=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==rn&&O!==Xi&&(rt.getTransfer(O)===lt?(Q!==Pn||$!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function de(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=_e,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Re}function WS(s,e){function t(n,i=Xi){let r;const a=rt.getTransfer(i);if(n===Li)return s.UNSIGNED_BYTE;if(n===Su)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ud)return s.BYTE;if(n===Id)return s.SHORT;if(n===da)return s.UNSIGNED_SHORT;if(n===yu)return s.INT;if(n===Rr)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===bs)return s.HALF_FLOAT;if(n===Nd)return s.ALPHA;if(n===Od)return s.RGB;if(n===Pn)return s.RGBA;if(n===Bd)return s.LUMINANCE;if(n===kd)return s.LUMINANCE_ALPHA;if(n===ma)return s.DEPTH_COMPONENT;if(n===ga)return s.DEPTH_STENCIL;if(n===Tu)return s.RED;if(n===Eu)return s.RED_INTEGER;if(n===zd)return s.RG;if(n===bu)return s.RG_INTEGER;if(n===Au)return s.RGBA_INTEGER;if(n===yo||n===So||n===Mo||n===To)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Sc||n===Mc||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ec||n===bc||n===Ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ec||n===bc)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wc||n===Rc||n===Cc||n===Dc||n===Pc||n===Lc||n===Uc||n===Ic||n===Fc||n===Nc||n===Oc||n===Bc||n===kc||n===zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Gc||n===Vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Eo)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gd||n===Hc||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const XS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YS=`
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

}`;class qS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Rt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:XS,fragmentShader:YS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jS extends As{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new qS,p=t.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new Ze;let w=null;const T=new $t;T.viewport=new st;const R=new $t;R.viewport=new st;const S=[T,R],M=new a0;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=y[N];return k===void 0&&(k=new Fl,y[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=y[N];return k===void 0&&(k=new Fl,y[N]=k),k.getGripSpace()},this.getHand=function(N){let k=y[N];return k===void 0&&(k=new Fl,y[N]=k),k.getHandSpace()};function L(N){const k=v.indexOf(N.inputSource);if(k===-1)return;const ne=y[k];ne!==void 0&&(ne.update(N.inputSource,N.frame,c||a),ne.dispatchEvent({type:N.type,data:N.inputSource}))}function F(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",G);for(let N=0;N<y.length;N++){const k=v[N];k!==null&&(v[N]=null,y[N].disconnect(k))}P=null,D=null,g.reset(),e.setRenderTarget(m),d=null,f=null,h=null,i=null,x=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",F),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,X=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?ga:ma,X=p.stencil?pa:Rr);const xe={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new er(f.textureWidth,f.textureHeight,{format:Pn,type:Li,depthTexture:new ap(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ne),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new er(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(N){for(let k=0;k<N.removed.length;k++){const ne=N.removed[k],X=v.indexOf(ne);X>=0&&(v[X]=null,y[X].disconnect(ne))}for(let k=0;k<N.added.length;k++){const ne=N.added[k];let X=v.indexOf(ne);if(X===-1){for(let xe=0;xe<y.length;xe++)if(xe>=v.length){v.push(ne),X=xe;break}else if(v[xe]===null){v[xe]=ne,X=xe;break}if(X===-1)break}const ie=y[X];ie&&ie.connect(ne)}}const B=new J,j=new J;function H(N,k,ne){B.setFromMatrixPosition(k.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const X=B.distanceTo(j),ie=k.projectionMatrix.elements,xe=ne.projectionMatrix.elements,_e=ie[14]/(ie[10]-1),ve=ie[14]/(ie[10]+1),he=(ie[9]+1)/ie[5],De=(ie[9]-1)/ie[5],U=(ie[8]-1)/ie[0],Oe=(xe[8]+1)/xe[0],Ae=_e*U,Re=_e*Oe,ae=X/(-U+Oe),be=ae*-U;if(k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(be),N.translateZ(ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ie[10]===-1)N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const de=_e+ae,A=ve+ae,b=Ae-be,O=Re+(X-be),Q=he*ve/A*de,$=De*ve/A*de;N.projectionMatrix.makePerspective(b,O,Q,$,de,A),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Z(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let k=N.near,ne=N.far;g.texture!==null&&(g.depthNear>0&&(k=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),M.near=R.near=T.near=k,M.far=R.far=T.far=ne,(P!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far),T.layers.mask=N.layers.mask|2,R.layers.mask=N.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const X=N.parent,ie=M.cameras;Z(M,X);for(let xe=0;xe<ie.length;xe++)Z(ie[xe],X);ie.length===2?H(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),Y(N,M,X)};function Y(N,k,ne){ne===null?N.matrix.copy(k.matrixWorld):(N.matrix.copy(ne.matrixWorld),N.matrix.invert(),N.matrix.multiply(k.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(k.projectionMatrix),N.projectionMatrixInverse.copy(k.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ps*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let I=null;function W(N,k){if(u=k.getViewerPose(c||a),_=k,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let X=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,X=!0);for(let _e=0;_e<ne.length;_e++){const ve=ne[_e];let he=null;if(d!==null)he=d.getViewport(ve);else{const U=h.getViewSubImage(f,ve);he=U.viewport,_e===0&&(e.setRenderTargetTextures(x,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(x))}let De=S[_e];De===void 0&&(De=new $t,De.layers.enable(_e),De.viewport=new st,S[_e]=De),De.matrix.fromArray(ve.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ve.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(he.x,he.y,he.width,he.height),_e===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),X===!0&&M.cameras.push(De)}const ie=i.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const _e=h.getDepthInformation(ne[0]);_e&&_e.isValid&&_e.texture&&g.init(e,_e,i.renderState)}}for(let ne=0;ne<y.length;ne++){const X=v[ne],ie=y[ne];X!==null&&ie!==void 0&&ie.update(X,k,c||a)}I&&I(N,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}const ee=new mp;ee.setAnimationLoop(W),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}const ur=new pi,KS=new qe;function ZS(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Qd(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,ur.copy(v),ur.x*=-1,ur.y*=-1,ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),p.envMapRotation.value.setFromMatrix4(KS.makeRotationFromEuler(ur)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JS(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",p));const E=y.program;n.updateUBOMapping(x,E);const w=e.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const v=s.createBuffer(),E=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],v=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=R.length;S<M;S++){const P=R[S];if(d(P,w,S,E)===!0){const D=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let G=0;G<L.length;G++){const B=L[G],j=g(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,D+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,y,v,E){const w=x.value,T=y+"_"+v;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const R=E[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(x){const y=x.uniforms;let v=0;const E=16;for(let T=0,R=y.length;T<R;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,P=S.length;M<P;M++){const D=S[M],L=Array.isArray(D.value)?D.value:[D.value];for(let F=0,G=L.length;F<G;F++){const B=L[F],j=g(B),H=v%E,Z=H%j.boundary,Y=H+Z;v+=Z,Y!==0&&E-Y<j.storage&&(v+=E-Y),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=j.storage}}}const w=v%E;return w>0&&(v+=E-w),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class QS{constructor(e={}){const{canvas:t=t_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,m=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Nt;let w=0,T=0,R=null,S=-1,M=null;const P=new st,D=new st;let L=null;const F=new We(0);let G=0,B=t.width,j=t.height,H=1,Z=null,Y=null;const I=new st(0,0,B,j),W=new st(0,0,B,j);let ee=!1;const N=new Lu;let k=!1,ne=!1;const X=new qe,ie=new qe,xe=new J,_e=new st,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function De(){return R===null?H:1}let U=n;function Oe(C,q){return t.getContext(C,q)}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),U===null){const q="webgl2";if(U=Oe(q,C),U===null)throw Oe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ae,Re,ae,be,de,A,b,O,Q,$,se,fe,le,me,Le,ce,Se,Te,Ee,oe,Ue,Fe,je,z;function ue(){Ae=new ly(U),Ae.init(),Fe=new WS(U,Ae),Re=new ty(U,Ae,e,Fe),ae=new VS(U,Ae),Re.reverseDepthBuffer&&f&&ae.buffers.depth.setReversed(!0),be=new hy(U),de=new CS,A=new HS(U,Ae,ae,de,Re,Fe,be),b=new iy(v),O=new oy(v),Q=new _0(U),je=new $x(U,Q),$=new cy(U,Q,be,je),se=new dy(U,$,Q,be),Ee=new fy(U,Re,A),ce=new ny(de),fe=new RS(v,b,O,Ae,Re,je,ce),le=new ZS(v,de),me=new PS,Le=new OS(Ae),Te=new Qx(v,b,O,ae,se,d,l),Se=new zS(v,se,Re),z=new JS(U,be,Re,ae),oe=new ey(U,Ae,be),Ue=new uy(U,Ae,be),be.programs=fe.programs,v.capabilities=Re,v.extensions=Ae,v.properties=de,v.renderLists=me,v.shadowMap=Se,v.state=ae,v.info=be}ue();const te=new jS(v,U);this.xr=te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(B,j,!1))},this.getSize=function(C){return C.set(B,j)},this.setSize=function(C,q,re=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,j=q,t.width=Math.floor(C*H),t.height=Math.floor(q*H),re===!0&&(t.style.width=C+"px",t.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(B*H,j*H).floor()},this.setDrawingBufferSize=function(C,q,re){B=C,j=q,H=re,t.width=Math.floor(C*re),t.height=Math.floor(q*re),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(I)},this.setViewport=function(C,q,re,V){C.isVector4?I.set(C.x,C.y,C.z,C.w):I.set(C,q,re,V),ae.viewport(P.copy(I).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,q,re,V){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,q,re,V),ae.scissor(D.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){ae.setScissorTest(ee=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){Y=C},this.getClearColor=function(C){return C.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,re=!0){let V=0;if(C){let K=!1;if(R!==null){const Me=R.texture.format;K=Me===Au||Me===bu||Me===Eu}if(K){const Me=R.texture.type,we=Me===Li||Me===Rr||Me===da||Me===pa||Me===Su||Me===Mu,Pe=Te.getClearColor(),Ie=Te.getClearAlpha(),He=Pe.r,Ve=Pe.g,ke=Pe.b;we?(_[0]=He,_[1]=Ve,_[2]=ke,_[3]=Ie,U.clearBufferuiv(U.COLOR,0,_)):(g[0]=He,g[1]=Ve,g[2]=ke,g[3]=Ie,U.clearBufferiv(U.COLOR,0,g))}else V|=U.COLOR_BUFFER_BIT}q&&(V|=U.DEPTH_BUFFER_BIT),re&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Te.dispose(),me.dispose(),Le.dispose(),de.dispose(),b.dispose(),O.dispose(),se.dispose(),je.dispose(),z.dispose(),fe.dispose(),te.dispose(),te.removeEventListener("sessionstart",yt),te.removeEventListener("sessionend",sn),Ht.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=be.autoReset,q=Se.enabled,re=Se.autoUpdate,V=Se.needsUpdate,K=Se.type;ue(),be.autoReset=C,Se.enabled=q,Se.autoUpdate=re,Se.needsUpdate=V,Se.type=K}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ne(C){const q=C.target;q.removeEventListener("dispose",Ne),Xe(q)}function Xe(C){Be(C),de.remove(C)}function Be(C){const q=de.get(C).programs;q!==void 0&&(q.forEach(function(re){fe.releaseProgram(re)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,re,V,K,Me){q===null&&(q=ve);const we=K.isMesh&&K.matrixWorld.determinant()<0,Pe=rl(C,q,re,V,K);ae.setMaterial(V,we);let Ie=re.index,He=1;if(V.wireframe===!0){if(Ie=$.getWireframeAttribute(re),Ie===void 0)return;He=2}const Ve=re.drawRange,ke=re.attributes.position;let et=Ve.start*He,tt=(Ve.start+Ve.count)*He;Me!==null&&(et=Math.max(et,Me.start*He),tt=Math.min(tt,(Me.start+Me.count)*He)),Ie!==null?(et=Math.max(et,0),tt=Math.min(tt,Ie.count)):ke!=null&&(et=Math.max(et,0),tt=Math.min(tt,ke.count));const gt=tt-et;if(gt<0||gt===1/0)return;je.setup(K,V,Pe,re,Ie);let ft,nt=oe;if(Ie!==null&&(ft=Q.get(Ie),nt=Ue,nt.setIndex(ft)),K.isMesh)V.wireframe===!0?(ae.setLineWidth(V.wireframeLinewidth*De()),nt.setMode(U.LINES)):nt.setMode(U.TRIANGLES);else if(K.isLine){let ze=V.linewidth;ze===void 0&&(ze=1),ae.setLineWidth(ze*De()),K.isLineSegments?nt.setMode(U.LINES):K.isLineLoop?nt.setMode(U.LINE_LOOP):nt.setMode(U.LINE_STRIP)}else K.isPoints?nt.setMode(U.POINTS):K.isSprite&&nt.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)bo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))nt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ze=K._multiDrawStarts,Mt=K._multiDrawCounts,Je=K._multiDrawCount,Zt=Ie?Q.get(Ie).bytesPerElement:1,ri=de.get(V).currentProgram.getUniforms();for(let Bt=0;Bt<Je;Bt++)ri.setValue(U,"_gl_DrawID",Bt),nt.render(ze[Bt]/Zt,Mt[Bt])}else if(K.isInstancedMesh)nt.renderInstances(et,gt,K.count);else if(re.isInstancedBufferGeometry){const ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Mt=Math.min(re.instanceCount,ze);nt.renderInstances(et,gt,Mt)}else nt.render(et,gt)};function Ge(C,q,re){C.transparent===!0&&C.side===cn&&C.forceSinglePass===!1?(C.side=un,C.needsUpdate=!0,wn(C,q,re),C.side=Pi,C.needsUpdate=!0,wn(C,q,re),C.side=cn):wn(C,q,re)}this.compile=function(C,q,re=null){re===null&&(re=C),m=Le.get(re),m.init(q),y.push(m),re.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),C!==re&&C.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const V=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Me=K.material;if(Me)if(Array.isArray(Me))for(let we=0;we<Me.length;we++){const Pe=Me[we];Ge(Pe,re,K),V.add(Pe)}else Ge(Me,re,K),V.add(Me)}),m=y.pop(),V},this.compileAsync=function(C,q,re=null){const V=this.compile(C,q,re);return new Promise(K=>{function Me(){if(V.forEach(function(we){de.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){K(C);return}setTimeout(Me,10)}Ae.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ct=null;function ht(C){ct&&ct(C)}function yt(){Ht.stop()}function sn(){Ht.start()}const Ht=new mp;Ht.setAnimationLoop(ht),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(C){ct=C,te.setAnimationLoop(C),C===null?Ht.stop():Ht.start()},te.addEventListener("sessionstart",yt),te.addEventListener("sessionend",sn),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(q),q=te.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,q,R),m=Le.get(C,y.length),m.init(q),y.push(m),ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),N.setFromProjectionMatrix(ie),ne=this.localClippingEnabled,k=ce.init(this.clippingPlanes,ne),p=me.get(C,x.length),p.init(),x.push(p),te.enabled===!0&&te.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&gn(Me,q,-1/0,v.sortObjects)}gn(C,q,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(Z,Y),he=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,he&&Te.addToRenderList(p,C),this.info.render.frame++,k===!0&&ce.beginShadows();const re=m.state.shadowsArray;Se.render(re,C,q),k===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,K=p.transmissive;if(m.setupLights(),q.isArrayCamera){const Me=q.cameras;if(K.length>0)for(let we=0,Pe=Me.length;we<Pe;we++){const Ie=Me[we];ii(V,K,C,Ie)}he&&Te.render(C);for(let we=0,Pe=Me.length;we<Pe;we++){const Ie=Me[we];Nn(p,C,Ie,Ie.viewport)}}else K.length>0&&ii(V,K,C,q),he&&Te.render(C),Nn(p,C,q);R!==null&&T===0&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,q),je.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],k===!0&&ce.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function gn(C,q,re,V){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||N.intersectsSprite(C)){V&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ie);const we=se.update(C),Pe=C.material;Pe.visible&&p.push(C,we,Pe,re,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||N.intersectsObject(C))){const we=se.update(C),Pe=C.material;if(V&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),_e.copy(we.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(ie)),Array.isArray(Pe)){const Ie=we.groups;for(let He=0,Ve=Ie.length;He<Ve;He++){const ke=Ie[He],et=Pe[ke.materialIndex];et&&et.visible&&p.push(C,we,et,re,_e.z,ke)}}else Pe.visible&&p.push(C,we,Pe,re,_e.z,null)}}const Me=C.children;for(let we=0,Pe=Me.length;we<Pe;we++)gn(Me[we],q,re,V)}function Nn(C,q,re,V){const K=C.opaque,Me=C.transmissive,we=C.transparent;m.setupLightsView(re),k===!0&&ce.setGlobalState(v.clippingPlanes,re),V&&ae.viewport(P.copy(V)),K.length>0&&an(K,q,re),Me.length>0&&an(Me,q,re),we.length>0&&an(we,q,re),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ii(C,q,re,V){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new er(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?bs:Li,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Me=m.state.transmissionRenderTarget[V.id],we=V.viewport||P;Me.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const Pe=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(F),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),he&&Te.render(re);const Ie=v.toneMapping;v.toneMapping=Ji;const He=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),k===!0&&ce.setGlobalState(v.clippingPlanes,V),an(C,re,V),A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ke=0,et=q.length;ke<et;ke++){const tt=q[ke],gt=tt.object,ft=tt.geometry,nt=tt.material,ze=tt.group;if(nt.side===cn&&gt.layers.test(V.layers)){const Mt=nt.side;nt.side=un,nt.needsUpdate=!0,Lt(gt,re,V,ft,nt,ze),nt.side=Mt,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(A.updateMultisampleRenderTarget(Me),A.updateRenderTargetMipmap(Me))}v.setRenderTarget(Pe),v.setClearColor(F,G),He!==void 0&&(V.viewport=He),v.toneMapping=Ie}function an(C,q,re){const V=q.isScene===!0?q.overrideMaterial:null;for(let K=0,Me=C.length;K<Me;K++){const we=C[K],Pe=we.object,Ie=we.geometry,He=we.group;let Ve=we.material;Ve.allowOverride===!0&&V!==null&&(Ve=V),Pe.layers.test(re.layers)&&Lt(Pe,q,re,Ie,Ve,He)}}function Lt(C,q,re,V,K,Me){C.onBeforeRender(v,q,re,V,K,Me),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(v,q,re,V,C,Me),K.transparent===!0&&K.side===cn&&K.forceSinglePass===!1?(K.side=un,K.needsUpdate=!0,v.renderBufferDirect(re,q,V,K,C,Me),K.side=Pi,K.needsUpdate=!0,v.renderBufferDirect(re,q,V,K,C,Me),K.side=cn):v.renderBufferDirect(re,q,V,K,C,Me),C.onAfterRender(v,q,re,V,K,Me)}function wn(C,q,re){q.isScene!==!0&&(q=ve);const V=de.get(C),K=m.state.lights,Me=m.state.shadowsArray,we=K.state.version,Pe=fe.getParameters(C,K.state,Me,q,re),Ie=fe.getProgramCacheKey(Pe);let He=V.programs;V.environment=C.isMeshStandardMaterial?q.environment:null,V.fog=q.fog,V.envMap=(C.isMeshStandardMaterial?O:b).get(C.envMap||V.environment),V.envMapRotation=V.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Ne),He=new Map,V.programs=He);let Ve=He.get(Ie);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===we)return Ur(C,Pe),Ve}else Pe.uniforms=fe.getUniforms(C),C.onBeforeCompile(Pe,v),Ve=fe.acquireProgram(Pe,Ie),He.set(Ie,Ve),V.uniforms=Pe.uniforms;const ke=V.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=ce.uniform),Ur(C,Pe),V.needsLights=Ir(C),V.lightsStateVersion=we,V.needsLights&&(ke.ambientLightColor.value=K.state.ambient,ke.lightProbe.value=K.state.probe,ke.directionalLights.value=K.state.directional,ke.directionalLightShadows.value=K.state.directionalShadow,ke.spotLights.value=K.state.spot,ke.spotLightShadows.value=K.state.spotShadow,ke.rectAreaLights.value=K.state.rectArea,ke.ltc_1.value=K.state.rectAreaLTC1,ke.ltc_2.value=K.state.rectAreaLTC2,ke.pointLights.value=K.state.point,ke.pointLightShadows.value=K.state.pointShadow,ke.hemisphereLights.value=K.state.hemi,ke.directionalShadowMap.value=K.state.directionalShadowMap,ke.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ke.spotShadowMap.value=K.state.spotShadowMap,ke.spotLightMatrix.value=K.state.spotLightMatrix,ke.spotLightMap.value=K.state.spotLightMap,ke.pointShadowMap.value=K.state.pointShadowMap,ke.pointShadowMatrix.value=K.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function Us(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Ao.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Ur(C,q){const re=de.get(C);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function rl(C,q,re,V,K){q.isScene!==!0&&(q=ve),A.resetTextureUnits();const Me=q.fog,we=V.isMeshStandardMaterial?q.environment:null,Pe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:rn,Ie=(V.isMeshStandardMaterial?O:b).get(V.envMap||we),He=V.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ve=!!re.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ke=!!re.morphAttributes.position,et=!!re.morphAttributes.normal,tt=!!re.morphAttributes.color;let gt=Ji;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=v.toneMapping);const ft=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,nt=ft!==void 0?ft.length:0,ze=de.get(V),Mt=m.state.lights;if(k===!0&&(ne===!0||C!==M)){const It=C===M&&V.id===S;ce.setState(V,C,It)}let Je=!1;V.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Mt.state.version||ze.outputColorSpace!==Pe||K.isBatchedMesh&&ze.batching===!1||!K.isBatchedMesh&&ze.batching===!0||K.isBatchedMesh&&ze.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ze.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ze.instancing===!1||!K.isInstancedMesh&&ze.instancing===!0||K.isSkinnedMesh&&ze.skinning===!1||!K.isSkinnedMesh&&ze.skinning===!0||K.isInstancedMesh&&ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ze.instancingMorph===!1&&K.morphTexture!==null||ze.envMap!==Ie||V.fog===!0&&ze.fog!==Me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ce.numPlanes||ze.numIntersection!==ce.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Ve||ze.morphTargets!==ke||ze.morphNormals!==et||ze.morphColors!==tt||ze.toneMapping!==gt||ze.morphTargetsCount!==nt)&&(Je=!0):(Je=!0,ze.__version=V.version);let Zt=ze.currentProgram;Je===!0&&(Zt=wn(V,q,K));let ri=!1,Bt=!1,Wt=!1;const dt=Zt.getUniforms(),kt=ze.uniforms;if(ae.useProgram(Zt.program)&&(ri=!0,Bt=!0,Wt=!0),V.id!==S&&(S=V.id,Bt=!0),ri||M!==C){ae.buffers.depth.getReversed()?(X.copy(C.projectionMatrix),i_(X),r_(X),dt.setValue(U,"projectionMatrix",X)):dt.setValue(U,"projectionMatrix",C.projectionMatrix),dt.setValue(U,"viewMatrix",C.matrixWorldInverse);const Ct=dt.map.cameraPosition;Ct!==void 0&&Ct.setValue(U,xe.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Bt=!0,Wt=!0)}if(K.isSkinnedMesh){dt.setOptional(U,K,"bindMatrix"),dt.setOptional(U,K,"bindMatrixInverse");const It=K.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(U,"boneTexture",It.boneTexture,A))}K.isBatchedMesh&&(dt.setOptional(U,K,"batchingTexture"),dt.setValue(U,"batchingTexture",K._matricesTexture,A),dt.setOptional(U,K,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",K._indirectTexture,A),dt.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",K._colorsTexture,A));const Ut=re.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&Ee.update(K,re,Zt),(Bt||ze.receiveShadow!==K.receiveShadow)&&(ze.receiveShadow=K.receiveShadow,dt.setValue(U,"receiveShadow",K.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(kt.envMap.value=Ie,kt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&q.environment!==null&&(kt.envMapIntensity.value=q.environmentIntensity),Bt&&(dt.setValue(U,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&Fa(kt,Wt),Me&&V.fog===!0&&le.refreshFogUniforms(kt,Me),le.refreshMaterialUniforms(kt,V,H,j,m.state.transmissionRenderTarget[C.id]),Ao.upload(U,Us(ze),kt,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ao.upload(U,Us(ze),kt,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(U,"center",K.center),dt.setValue(U,"modelViewMatrix",K.modelViewMatrix),dt.setValue(U,"normalMatrix",K.normalMatrix),dt.setValue(U,"modelMatrix",K.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const It=V.uniformsGroups;for(let Ct=0,Fi=It.length;Ct<Fi;Ct++){const On=It[Ct];z.update(On,Zt),z.bind(On,Zt)}}return Zt}function Fa(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Ir(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,q,re){const V=de.get(C);V.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),de.get(C.texture).__webglTexture=q,de.get(C.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:re,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const re=de.get(C);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const Is=U.createFramebuffer();this.setRenderTarget=function(C,q=0,re=0){R=C,w=q,T=re;let V=!0,K=null,Me=!1,we=!1;if(C){const Ie=de.get(C);if(Ie.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(U.FRAMEBUFFER,null),V=!1;else if(Ie.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Ie.__hasExternalTextures)A.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ke=C.depthTexture;if(Ie.__boundDepthTexture!==ke){if(ke!==null&&de.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const Ve=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[q])?K=Ve[q][re]:K=Ve[q],Me=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?K=de.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[re]:K=Ve,P.copy(C.viewport),D.copy(C.scissor),L=C.scissorTest}else P.copy(I).multiplyScalar(H).floor(),D.copy(W).multiplyScalar(H).floor(),L=ee;if(re!==0&&(K=Is),ae.bindFramebuffer(U.FRAMEBUFFER,K)&&V&&ae.drawBuffers(C,K),ae.viewport(P),ae.scissor(D),ae.setScissorTest(L),Me){const Ie=de.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ie.__webglTexture,re)}else if(we){const Ie=de.get(C.texture),He=q;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,re,He)}else if(C!==null&&re!==0){const Ie=de.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,re)}S=-1},this.readRenderTargetPixels=function(C,q,re,V,K,Me,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){ae.bindFramebuffer(U.FRAMEBUFFER,Pe);try{const Ie=C.texture,He=Ie.format,Ve=Ie.type;if(!Re.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-V&&re>=0&&re<=C.height-K&&U.readPixels(q,re,V,K,Fe.convert(He),Fe.convert(Ve),Me)}finally{const Ie=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(C,q,re,V,K,Me,we){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(q>=0&&q<=C.width-V&&re>=0&&re<=C.height-K){ae.bindFramebuffer(U.FRAMEBUFFER,Pe);const Ie=C.texture,He=Ie.format,Ve=Ie.type;if(!Re.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.bufferData(U.PIXEL_PACK_BUFFER,Me.byteLength,U.STREAM_READ),U.readPixels(q,re,V,K,Fe.convert(He),Fe.convert(Ve),0);const et=R!==null?de.get(R).__webglFramebuffer:null;ae.bindFramebuffer(U.FRAMEBUFFER,et);const tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await n_(U,tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Me),U.deleteBuffer(ke),U.deleteSync(tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,re=0){const V=Math.pow(2,-re),K=Math.floor(C.image.width*V),Me=Math.floor(C.image.height*V),we=q!==null?q.x:0,Pe=q!==null?q.y:0;A.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,re,0,0,we,Pe,K,Me),ae.unbindTexture()};const sl=U.createFramebuffer(),Na=U.createFramebuffer();this.copyTextureToTexture=function(C,q,re=null,V=null,K=0,Me=null){Me===null&&(K!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=K,K=0):Me=0);let we,Pe,Ie,He,Ve,ke,et,tt,gt;const ft=C.isCompressedTexture?C.mipmaps[Me]:C.image;if(re!==null)we=re.max.x-re.min.x,Pe=re.max.y-re.min.y,Ie=re.isBox3?re.max.z-re.min.z:1,He=re.min.x,Ve=re.min.y,ke=re.isBox3?re.min.z:0;else{const Ut=Math.pow(2,-K);we=Math.floor(ft.width*Ut),Pe=Math.floor(ft.height*Ut),C.isDataArrayTexture?Ie=ft.depth:C.isData3DTexture?Ie=Math.floor(ft.depth*Ut):Ie=1,He=0,Ve=0,ke=0}V!==null?(et=V.x,tt=V.y,gt=V.z):(et=0,tt=0,gt=0);const nt=Fe.convert(q.format),ze=Fe.convert(q.type);let Mt;q.isData3DTexture?(A.setTexture3D(q,0),Mt=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(A.setTexture2DArray(q,0),Mt=U.TEXTURE_2D_ARRAY):(A.setTexture2D(q,0),Mt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);const Je=U.getParameter(U.UNPACK_ROW_LENGTH),Zt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ri=U.getParameter(U.UNPACK_SKIP_PIXELS),Bt=U.getParameter(U.UNPACK_SKIP_ROWS),Wt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,He),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke);const dt=C.isDataArrayTexture||C.isData3DTexture,kt=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const Ut=de.get(C),It=de.get(q),Ct=de.get(Ut.__renderTarget),Fi=de.get(It.__renderTarget);ae.bindFramebuffer(U.READ_FRAMEBUFFER,Ct.__webglFramebuffer),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let On=0;On<Ie;On++)dt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(C).__webglTexture,K,ke+On),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,de.get(q).__webglTexture,Me,gt+On)),U.blitFramebuffer(He,Ve,we,Pe,et,tt,we,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||de.has(C)){const Ut=de.get(C),It=de.get(q);ae.bindFramebuffer(U.READ_FRAMEBUFFER,sl),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Na);for(let Ct=0;Ct<Ie;Ct++)dt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,K,ke+Ct):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,K),kt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,It.__webglTexture,Me,gt+Ct):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,It.__webglTexture,Me),K!==0?U.blitFramebuffer(He,Ve,we,Pe,et,tt,we,Pe,U.COLOR_BUFFER_BIT,U.NEAREST):kt?U.copyTexSubImage3D(Mt,Me,et,tt,gt+Ct,He,Ve,we,Pe):U.copyTexSubImage2D(Mt,Me,et,tt,He,Ve,we,Pe);ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else kt?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Mt,Me,et,tt,gt,we,Pe,Ie,nt,ze,ft.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Mt,Me,et,tt,gt,we,Pe,Ie,nt,ft.data):U.texSubImage3D(Mt,Me,et,tt,gt,we,Pe,Ie,nt,ze,ft):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Me,et,tt,we,Pe,nt,ze,ft.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Me,et,tt,ft.width,ft.height,nt,ft.data):U.texSubImage2D(U.TEXTURE_2D,Me,et,tt,we,Pe,nt,ze,ft);U.pixelStorei(U.UNPACK_ROW_LENGTH,Je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ri),U.pixelStorei(U.UNPACK_SKIP_ROWS,Bt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wt),Me===0&&q.generateMipmaps&&U.generateMipmap(Mt),ae.unbindTexture()},this.copyTextureToTexture3D=function(C,q,re=null,V=null,K=0){return bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,re,V,K)},this.initRenderTarget=function(C){de.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),ae.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,ae.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function Of(s,e){if(e===Rg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Yc||e===Vd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Yc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class $S extends Cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new vM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=oa.extractUrlBase(e);a=oa.resolveURL(c,this.path)}else a=oa.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yp){try{a[$e.KHR_BINARY_GLTF]=new xM(e)}catch(h){i&&i(h);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new LM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case $e.KHR_MATERIALS_UNLIT:a[h]=new nM;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[h]=new yM(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[h]=new SM;break;case $e.KHR_MESH_QUANTIZATION:a[h]=new MM;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function eM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tM{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],rn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new t0(u),c.distance=h;break;case"spot":c=new $_(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class nM{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ci}extendParams(e,t,n){const i=[];e.color=new We(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],rn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(i)}}class iM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class rM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ze(o,o)}return Promise.all(r)}}class sM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class aM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class oM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new We(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],rn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class lM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class cM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new We().setRGB(o[0],o[1],o[2],rn),Promise.all(r)}}class uM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class hM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new We().setRGB(o[0],o[1],o[2],rn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Nt)),Promise.all(r)}}class fM{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class dM{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class pM{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class mM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gM{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _M{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class vM{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new qe,p=new J,m=new ir,x=new J(1,1,1),y=new U_(_.geometry,_.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,g.compose(p,m,x));for(const v in l)if(v==="_COLOR_0"){const E=l[v];y.instanceColor=new Fo(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);xt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const yp="glTF",Zs=12,Bf={JSON:1313821514,BIN:5130562};class xM{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Zs,r=new DataView(e,Zs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Bf.JSON){const c=new Uint8Array(e,Zs+a,o);this.content=n.decode(c)}else if(l===Bf.BIN){const c=Zs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Jc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Jc[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ss[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(d)},o,c,rn,f)})})}}class SM{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class MM{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Sp extends Pa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,p=-2*d+3*f,m=d-f,x=1-p,y=m-f+h;for(let v=0;v!==o;v++){const E=a[g+v+o],w=a[g+v+l]*u,T=a[_+v+o],R=a[_+v]*u;r[v]=x*E+y*w+p*T+m*R}return r}}const TM=new ir;class EM extends Sp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return TM.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kf={9728:tn,9729:Gt,9984:Ld,9985:xo,9986:$s,9987:wi},zf={33071:Yi,33648:Lo,10497:ds},jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bM={CUBICSPLINE:void 0,LINEAR:va,STEP:_a},Kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ya({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),s.DefaultMaterial}function hr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function RM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CM(s){let e;const t=s.extensions&&s.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Zl(t.attributes):e=s.indices+":"+Zl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Zl(s.targets[n]);return e}function Zl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const PM=new qe;class LM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new dp(this.options.manager):this.textureLoader=new s0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return hr(r,o,i),Ei(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(oa.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=jl[i.type],o=ss[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new nn(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=jl[i.type],c=ss[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(d&&d!==h){const m=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(x);y||(g=new c(o,m*d,i.count*d/u),y=new R_(g,d/u),t.cache.add(x,y)),p=new Du(y,l,f%d/u,_)}else o===null?g=new c(i.count*l):g=new c(o,f,i.count*l),p=new nn(g,l,_);if(i.sparse!==void 0){const m=jl.SCALAR,x=ss[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new x(a[1],y,i.sparse.count*m),w=new c(a[2],v,i.sparse.count*l);o!==null&&(p=new nn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,R=E.length;T<R;T++){const S=E[T];if(p.setX(S,w[T*l]),l>=2&&p.setY(S,w[T*l+1]),l>=3&&p.setZ(S,w[T*l+2]),l>=4&&p.setW(S,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=kf[f.magFilter]||Gt,u.minFilter=kf[f.minFilter]||wi,u.wrapS=zf[f.wrapS]||ds,u.wrapT=zf[f.wrapT]||ds,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==Gt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Rt(g);p.needsUpdate=!0,f(p)}),t.load(oa.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Ei(h,a),h.userData.mimeType=a.mimeType||DM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new sp,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new rp,hi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ya}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[$e.KHR_MATERIALS_UNLIT]){const h=i[$e.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new We(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],rn),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Nt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=cn);const u=r.alphaMode||Kl.OPAQUE;if(u===Kl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Kl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ci&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ze(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ci&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ci){const h=r.emissiveFactor;o.emissive=new We().setRGB(h[0],h[1],h[2],rn)}return r.emissiveTexture!==void 0&&a!==ci&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Ei(h,r),t.associations.set(h,{materials:e}),r.extensions&&hr(i,h,r),h})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=CM(c),h=i[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Gf(new In,c,t),i[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?AM(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],p=a[d];let m;const x=c[d];if(p.mode===Dn.TRIANGLES||p.mode===Dn.TRIANGLE_STRIP||p.mode===Dn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new D_(g,x):new Et(g,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Dn.TRIANGLE_STRIP?m.geometry=Of(m.geometry,Vd):p.mode===Dn.TRIANGLE_FAN&&(m.geometry=Of(m.geometry,Yc));else if(p.mode===Dn.LINES)m=new N_(g,x);else if(p.mode===Dn.LINE_STRIP)m=new Uu(g,x);else if(p.mode===Dn.LINE_LOOP)m=new O_(g,x);else if(p.mode===Dn.POINTS)m=new B_(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&RM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ei(m,r),p.extensions&&hr(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&hr(i,h[0],r),h[0];const f=new yr;r.extensions&&hr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(e_.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new La(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pu(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",x)),c.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let x=0,y=f.length;x<y;x++){const v=f[x],E=d[x],w=_[x],T=g[x],R=p[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,E,w,T,R);if(S)for(let M=0;M<S.length;M++)m.push(S[M])}return new Y_(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,PM)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new np:c.length>1?u=new yr:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Ei(u,r),r.extensions&&hr(n,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new yr;n.name&&(r.name=i.createUniqueName(n.name)),Ei(r,n),n.extensions&&hr(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof hi||f instanceof Rt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Wi[r.path]===Wi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Wi[r.path]){case Wi.weights:c=gs;break;case Wi.rotation:c=_s;break;case Wi.translation:case Wi.scale:c=vs;break;default:switch(n.itemSize){case 1:c=gs;break;case 2:case 3:default:c=vs;break}break}const u=i.interpolation!==void 0?bM[i.interpolation]:va,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+Wi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof _s?EM:Sp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function UM(s,e,t){const n=e.attributes,i=new $n;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new J(l[0],l[1],l[2]),new J(c[0],c[1],c[2])),o.normalized){const u=Qc(ss[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new J,l=new J;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=Qc(ss[f.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new ei;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Gf(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Jc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return rt.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Ei(s,e),UM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wM(s,e.targets,t):s})}const IM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FM=new La(-1,1,1,-1,0,1);class NM extends In{constructor(){super(),this.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kn([0,2,0,0,2,0],2))}}const OM=new NM;class BM{constructor(e){this._mesh=new Et(OM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,FM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Bu extends Qo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Zn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cu.clone(e.uniforms),this.material=new Zn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new BM(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vf extends Qo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class kM extends Qo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ze);this._width=n.width,this._height=n.height,t=new er(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bs}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bu(IM),this.copyPass.material.blending=Ci,this.clock=new pp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vf!==void 0&&(a instanceof Vf?n=!0:a instanceof kM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class GM extends Qo{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const VM={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new Ze(1/1024,1/512)}},vertexShader:`

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

		}`};var HM=`uniform float progress;
uniform float direction;

#define PI 3.1415926538

vec3 rotateAxis(vec3 p, vec3 axis, float angle) {
    return mix(dot(axis, p) * axis, p, cos(angle)) + cross(axis, p) * sin(angle);
}

void main() {
    vec3 pos = position;

    float twirlPeriod = sin(progress * PI * 2.);

    float rotateAngle = -direction * pow(sin(progress * PI), 1.5) * PI * 2.;

    
    
    float xFactor = sin(uv.x - .5);
    float yFactor = 1.0 - abs(uv.y - 0.5) * 0.5; 
    
    float twirlAngle = -xFactor * yFactor * pow(twirlPeriod, 2.0) * -4.;

    float twirlRotate = rotateAngle + twirlAngle;

    pos = rotateAxis(pos, vec3(1., 0., 0.), twirlRotate);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}`;function bi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Mp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xs={duration:.5,overwrite:!1,delay:0},ku,Vt,mt,fi=1e8,jt=1/fi,$c=Math.PI*2,WM=$c/4,XM=0,Tp=Math.sqrt,YM=Math.cos,qM=Math.sin,Ot=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Ui=function(e){return typeof e=="number"},zu=function(e){return typeof e>"u"},mi=function(e){return typeof e=="object"},hn=function(e){return e!==!1},Gu=function(){return typeof window<"u"},mo=function(e){return St(e)||Ot(e)},Ep=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kt=Array.isArray,eu=/(?:-?\.?\d|\.)+/gi,bp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ap=/[+-]=-?[.\d]+/,wp=/[^,'"\[\]\s]+/gi,jM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,_t,si,tu,Vu,bn={},Bo={},Rp,Cp=function(e){return(Bo=ys(e,bn))&&mn},Hu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Sa=function(e,t){return!t&&console.warn(e)},Dp=function(e,t){return e&&(bn[e]=t)&&Bo&&(Bo[e]=t)||bn},Ma=function(){return 0},KM={suppressEvents:!0,isStart:!0,kill:!1},wo={suppressEvents:!0,kill:!1},ZM={suppressEvents:!0},Wu={},Qi=[],nu={},Pp,yn={},Ql={},Hf=30,Ro=[],Xu="",Yu=function(e){var t=e[0],n,i;if(mi(t)||St(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ro.length;i--&&!Ro[i].targetTest(t););n=Ro[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new tm(e[i],n)))||e.splice(i,1);return e},Mr=function(e){return e._gsap||Yu(Ln(e))[0]._gsap},Lp=function(e,t,n){return(n=e[t])&&St(n)?e[t]():zu(n)&&e.getAttribute&&e.getAttribute(t)||n},fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},wt=function(e){return Math.round(e*1e7)/1e7||0},as=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},JM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ko=function(){var e=Qi.length,t=Qi.slice(0),n,i;for(nu={},Qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Up=function(e,t,n,i){Qi.length&&!Vt&&ko(),e.render(t,n,Vt&&t<0&&(e._initted||e._startAt)),Qi.length&&!Vt&&ko()},Ip=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wp).length<2?t:Ot(e)?e.trim():e},Fp=function(e){return e},An=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},QM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ys=function(e,t){for(var n in t)e[n]=t[n];return e},Wf=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=mi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},zo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},la=function(e){var t=e.parent||_t,n=e.keyframes?QM(Kt(e.keyframes)):An;if(hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$M=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Np=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},$o=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},tr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},e1=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},iu=function(e,t,n,i){return e._startAt&&(Vt?e._startAt.revert(wo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},t1=function s(e){return!e||e._ts&&s(e.parent)},Xf=function(e){return e._repeat?Ss(e._tTime,e=e.duration()+e._rDelay)*e:0},Ss=function(e,t){var n=Math.floor(e=wt(e/t));return e&&n===e?n-1:n},Go=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},el=function(e){return e._end=wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||jt)||0))},tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),el(e),n._dirty||Tr(n,e)),e},Op=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Go(e.rawTime(),t),(!t._dur||Ua(0,t.totalDuration(),n)-t._tTime>jt)&&t.render(n,!0)),Tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},oi=function(e,t,n,i){return t.parent&&tr(t),t._start=wt((Ui(n)?n:n||e!==_t?Cn(e,n,t):e._time)+t._delay),t._end=wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Np(e,t,"_first","_last",e._sort?"_start":0),ru(t)||(e._recent=t),i||Op(e,t),e._ts<0&&tl(e,e._tTime),e},Bp=function(e,t){return(bn.ScrollTrigger||Hu("scrollTrigger",t))&&bn.ScrollTrigger.create(t,e)},kp=function(e,t,n,i,r){if(ju(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Vt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pp!==Sn.frame)return Qi.push(e),e._lazy=[r,i],1},n1=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ru=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},i1=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&n1(e)&&!(!e._initted&&ru(e))||(e._ts<0||e._dp._ts<0)&&!ru(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ua(0,e._tDur,t),u=Ss(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ss(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Vt||i||e._zTime===jt||!t&&e._zTime){if(!e._initted&&kp(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?jt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&iu(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&tr(e,1),!n&&!Vt&&(Mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},r1=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ms=function(e,t,n,i){var r=e._repeat,a=wt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:wt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&tl(e,e._tTime=e._tDur*o),e.parent&&el(e),n||Tr(e.parent,e),e},Yf=function(e){return e instanceof en?Tr(e):Ms(e,e._dur)},s1={_start:0,endTime:Ma,totalDuration:Ma},Cn=function s(e,t,n){var i=e.labels,r=e._recent||s1,a=e.duration()>=fi?r.endTime(!1):e._dur,o,l,c;return Ot(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Kt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ca=function(e,t,n){var i=Ui(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=hn(l.vars.inherit)&&l.parent;a.immediateRender=hn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new At(t[0],a,t[r+1])},rr=function(e,t){return e||e===0?t(e):t},Ua=function(e,t,n){return n<e?e:n>t?t:n},qt=function(e,t){return!Ot(e)||!(t=jM.exec(e))?"":t[1]},a1=function(e,t,n){return rr(n,function(i){return Ua(e,t,i)})},su=[].slice,zp=function(e,t){return e&&mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mi(e[0]))&&!e.nodeType&&e!==si},o1=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Ot(i)&&!t||zp(i,1)?(r=n).push.apply(r,Ln(i)):n.push(i)})||n},Ln=function(e,t,n){return mt&&!t&&mt.selector?mt.selector(e):Ot(e)&&!n&&(tu||!Ts())?su.call((t||Vu).querySelectorAll(e),0):Kt(e)?o1(e,n):zp(e)?su.call(e,0):e?[e]:[]},au=function(e){return e=Ln(e)[0]||Sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ln(t,n.querySelectorAll?n:n===e?Sa("Invalid scope")||Vu.createElement("div"):e)}},Gp=function(e){return e.sort(function(){return .5-Math.random()})},Vp=function(e){if(St(e))return e;var t=mi(e)?e:{each:e},n=Er(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Ot(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,p=a[g],m,x,y,v,E,w,T,R,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,fi])[1],!S){for(T=-1e8;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(p=a[g]=[],m=l?Math.min(S,g)*u-.5:i%S,x=S===fi?0:l?g*h/S-.5:i/S|0,T=0,R=fi,w=0;w<g;w++)y=w%S-m,v=x-(w/S|0),p[w]=E=c?Math.abs(c==="y"?v:y):Tp(y*y+v*v),E>T&&(T=E),E<R&&(R=E);i==="random"&&Gp(p),p.max=T-R,p.min=R,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=qt(t.amount||t.each)||0,n=n&&g<0?Qp(n):n}return g=(p[f]-p.min)/p.max||0,wt(p.b+(n?n(g):g)*p.v)+p.u}},ou=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ui(n)?0:qt(n))}},Hp=function(e,t){var n=Kt(e),i,r;return!n&&mi(e)&&(i=n=e.radius||fi,e.values?(e=Ln(e.values),(r=!Ui(e[0]))&&(i*=i)):e=ou(e.increment)),rr(t,n?St(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=fi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||Ui(a)?u:u+qt(a)}:ou(e))},Wp=function(e,t,n,i){return rr(Kt(e)?!t:n===!0?!!(n=0):!i,function(){return Kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},l1=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},c1=function(e,t){return function(n){return e(parseFloat(n))+(t||qt(n))}},u1=function(e,t,n){return Yp(e,t,0,1,n)},Xp=function(e,t,n){return rr(n,function(i){return e[~~t(i)]})},h1=function s(e,t,n){var i=t-e;return Kt(e)?Xp(e,s(0,e.length),t):rr(n,function(r){return(i+(r-e)%i)%i+e})},f1=function s(e,t,n){var i=t-e,r=i*2;return Kt(e)?Xp(e,s(0,e.length-1),t):rr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ta=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?wp:eu),n+=e.substr(t,i-t)+Wp(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Yp=function(e,t,n,i,r){var a=t-e,o=i-n;return rr(r,function(l){return n+((l-e)/a*o||0)})},d1=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=Ot(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Kt(e)&&!Kt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=ys(Kt(e)?[]:{},e));if(!u){for(l in t)qu.call(o,e,l,"get",t[l]);r=function(_){return Ju(_,o)||(a?e.p:e)}}}return rr(n,r)},qf=function(e,t,n){var i=e.labels,r=fi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Mn=function(e,t,n){var i=e.vars,r=i[t],a=mt,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Qi.length&&ko(),o&&(mt=o),u=l?r.apply(c,l):r.call(c),mt=a,u},ta=function(e){return tr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Vt),e.progress()<1&&Mn(e,"onInterrupt"),e},ns,qp=[],jp=function(e){if(e)if(e=!e.name&&e.default||e,Gu()||e.headless){var t=e.name,n=St(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ma,render:Ju,add:qu,kill:C1,modifier:R1,rawVars:0},a={targetTest:0,get:0,getSetter:Zu,aliases:{},register:0};if(Ts(),e!==i){if(yn[t])return;An(i,An(zo(e,r),a)),ys(i.prototype,ys(r,zo(e,a))),yn[i.prop=t]=i,e.targetTest&&(Ro.push(i),Wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dp(t,i),e.register&&e.register(mn,i,dn)}else qp.push(e)},ut=255,na={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},$l=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Kp=function(e,t,n){var i=e?Ui(e)?[e>>16,e>>8&ut,e&ut]:0:na.black,r,a,o,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])i=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(eu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=$l(l+1/3,r,a),i[1]=$l(l,r,a),i[2]=$l(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(bp),n&&i.length<4&&(i[3]=1),i}else i=e.match(eu)||na.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/ut,a=i[1]/ut,o=i[2]/ut,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Zp=function(e){var t=[],n=[],i=-1;return e.split($i).forEach(function(r){var a=r.match(ts)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},jf=function(e,t,n){var i="",r=(e+i).match($i),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Kp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Zp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace($i,"1").split(ts),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split($i),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},$i=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),p1=/hsl[a]?\(/,Jp=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=p1.test(t),e[1]=jf(e[1],n),e[0]=jf(e[0],n,Zp(e[1])),!0},Ea,Sn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,d,_=function g(p){var m=s()-i,x=p===!0,y,v,E,w;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,y=E-a,(y>0||x)&&(w=++h.frame,f=E-h.time*1e3,h.time=E=E/1e3,a+=y+(y>=r?4:r-y),v=1),x||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](E,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Rp&&(!tu&&Gu()&&(si=tu=window,Vu=si.document||{},bn.gsap=mn,(si.gsapVersions||(si.gsapVersions=[])).push(mn.version),Cp(Bo||si.GreenSockGlobals||!si.gsap&&si||{}),qp.forEach(jp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ea=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ea=0,c=Ma},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,m,x){var y=m?function(v,E,w,T){p(v,E,w,T),h.remove(y)}:p;return h.remove(p),o[x?"unshift":"push"](y),Ts(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},h}(),Ts=function(){return!Ea&&Sn.wake()},it={},m1=/^[\d.\-M][\d.\-,\s]/,g1=/["']/g,_1=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(g1,"").trim():+c,i=l.substr(o+1).trim();return t},v1=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},x1=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_1(t[1])]:v1(e).split(",").map(Ip)):it._CE&&m1.test(e)?it._CE("",e):n},Qp=function(e){return function(t){return 1-e(1-t)}},$p=function s(e,t){for(var n=e._first,i;n;)n instanceof en?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Er=function(e,t){return e&&(St(e)?e:it[e]||x1(e))||t},Pr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return fn(e,function(o){it[o]=bn[o]=r,it[a=o.toLowerCase()]=n;for(var l in r)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=r[l]}),r},em=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ec=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/$c*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*qM((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:em(o);return r=$c/r,l.config=function(c,u){return s(e,c,u)},l},tc=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:em(n);return i.config=function(r){return s(e,r)},i};fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Pr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;Pr("Elastic",ec("in"),ec("out"),ec());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Pr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Pr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Pr("Circ",function(s){return-(Tp(1-s*s)-1)});Pr("Sine",function(s){return s===1?1:-YM(s*WM)+1});Pr("Back",tc("in"),tc("out"),tc());it.SteppedEase=it.steps=bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-jt;return function(o){return((i*Ua(0,a,o)|0)+r)*n}}};xs.ease=it["quad.out"];fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Xu+=s+","+s+"Params,"});var tm=function(e,t){this.id=XM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lp,this.set=t?t.getSetter:Zu},ba=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ms(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),Ea||Sn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ms(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ts(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(tl(this,n),!r._dp||r.parent||Op(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Up(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Xf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Xf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ss(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Ua(-Math.abs(this._delay),this._tDur,r),i!==!1),el(this),e1(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&oi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Go(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ZM);var i=Vt;return Vt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Cn(this,n),hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,hn(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-jt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=St(n)?n:Fp,o=function(){var c=i.then;i.then=null,St(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ta(this)},s}();An(ba.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var en=function(s){Mp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=hn(n.sortChildren),_t&&oi(n.parent||_t,bi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Bp(bi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return ca(0,arguments,this),this},t.from=function(i,r,a){return ca(1,arguments,this),this},t.fromTo=function(i,r,a,o){return ca(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,la(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new At(i,r,Cn(this,a),1),this},t.call=function(i,r,a){return oi(this,At.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new At(i,a,Cn(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,la(a).immediateRender=hn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,la(o).immediateRender=hn(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:wt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,p,m,x,y,v,E,w,T;if(this!==_t&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,v=this._start,y=this._ts,m=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=wt(u%p),u===l?(g=this._repeat,f=c):(E=wt(u/p),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=Ss(this._tTime,p),!o&&this._tTime&&E!==g&&this._tTime-E*p-this._dur<=0&&(E=g),w&&g&1&&(f=c-f,T=1),g!==E&&!this._lock){var R=w&&E&1,S=R===(w&&g&1);if(g<E&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(T?0:wt(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;$p(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=r1(this,wt(o),wt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!g&&(Mn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-1e-8);break}}d=_}else{d=this._last;for(var M=i<0?i:f;d;){if(_=d._prev,(d._act||M<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,r,a||Vt&&(d._initted||d._startAt)),f!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=M?-1e-8:jt);break}}d=_}}if(x&&!r&&(this.pause(),x.render(f>=o?0:-1e-8)._zTime=f>=o?1:-1,this._ts))return this._start=v,el(this),this.render(i,r,a);this._onUpdate&&!r&&Mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&tr(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Mn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Ui(r)||(r=Cn(this,r,i)),!(i instanceof ba)){if(Kt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ot(i))return this.addLabel(i,r);if(St(i))i=At.delayedCall(0,i);else return this}return this!==i?oi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-1e8);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof At?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return Ot(i)?this.removeLabel(i):St(i)?this.killTweensOf(i):(i.parent===this&&$o(this,i),i===this._recent&&(this._recent=this._last),Tr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wt(Sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Cn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=At.delayedCall(0,r||Ma,a);return o.data="isPause",this._hasPause=1,oi(this,o,Cn(this,i))},t.removePause=function(i){var r=this._first;for(i=Cn(this,i);r;)r._start===i&&r.data==="isPause"&&tr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ji!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Ln(i),l=this._first,c=Ui(r),u;l;)l instanceof At?JM(l._targets,o)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=Cn(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=At.to(a,An({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||jt,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Ms(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,An({startAt:{time:Cn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),qf(this,Cn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),qf(this,Cn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+jt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Tr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Tr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=fi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,oi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ms(a,a===_t&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(_t._ts&&(Up(_t,Go(i,_t)),Pp=Sn.frame),Sn.frame>=Hf){Hf+=Tn.autoSleep||120;var r=_t._first;if((!r||!r._ts)&&Tn.autoSleep&&Sn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Sn.sleep()}}},e}(ba);An(en.prototype,{_lock:0,_hasPause:0,_forcing:0});var y1=function(e,t,n,i,r,a,o){var l=new dn(this._pt,e,t,0,1,om,null,r),c=0,u=0,h,f,d,_,g,p,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ta(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),f=n.match(Jl)||[];h=Jl.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?as(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Jl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Ap.test(i)||m)&&(l.e=0),this._pt=l,l},qu=function(e,t,n,i,r,a,o,l,c,u){St(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:St(h)?c?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=St(h)?c?b1:sm:Ku,_;if(Ot(i)&&(~i.indexOf("random(")&&(i=Ta(i)),i.charAt(1)==="="&&(_=as(f,i)+(qt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||lu)return!isNaN(f*i)&&i!==""?(_=new dn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?w1:am,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Hu(t,i),y1.call(this,e,t,f,i,d,l||Tn.stringFilter,c))},S1=function(e,t,n,i,r){if(St(e)&&(e=ua(e,r,t,n,i)),!mi(e)||e.style&&e.nodeType||Kt(e)||Ep(e))return Ot(e)?ua(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ua(e[o],r,t,n,i);return a},nm=function(e,t,n,i,r,a){var o,l,c,u;if(yn[e]&&(o=new yn[e]).init(r,o.rawVars?t[e]:S1(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new dn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==ns))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ji,lu,ju=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!ku,v=e.timeline,E,w,T,R,S,M,P,D,L,F,G,B,j;if(v&&(!f||!r)&&(r="none"),e._ease=Er(r,xs.ease),e._yEase=h?Qp(Er(h===!0?r:h,xs.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(D=p[0]?Mr(p[0]).harness:0,B=D&&i[D.prop],E=zo(i,Wu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?wo:KM),g._lazy=0),a){if(tr(e._startAt=At.set(p,An({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&hn(l),startAt:null,delay:0,onUpdate:c&&function(){return Mn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt||!o&&!d)&&e._startAt.revert(wo),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),T=An({overwrite:!1,data:"isFromStart",lazy:o&&!g&&hn(l),immediateRender:o,stagger:0,parent:m},E),B&&(T[D.prop]=B),tr(e._startAt=At.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Vt?e._startAt.revert(wo):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,jt,jt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&hn(l)||l&&!_,w=0;w<p.length;w++){if(S=p[w],P=S._gsap||Yu(p)[w]._gsap,e._ptLookup[w]=F={},nu[P.id]&&Qi.length&&ko(),G=x===p?w:x.indexOf(S),D&&(L=new D).init(S,B||E,e,G,x)!==!1&&(e._pt=R=new dn(e._pt,S,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(H){F[H]=R}),L.priority&&(M=1)),!D||B)for(T in E)yn[T]&&(L=nm(T,E,e,G,S,x))?L.priority&&(M=1):F[T]=R=qu.call(e,S,T,"get",E[T],G,x,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),y&&e._pt&&(ji=e,_t.killTweensOf(S,F,e.globalTime(t)),j=!e.parent,ji=0),e._pt&&l&&(nu[P.id]=1)}M&&lm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&v.render(fi,!0,!0)},M1=function(e,t,n,i,r,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lu=1,e.vars[t]="+=0",ju(e,o),lu=0,l?Sa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Tt(n)+qt(h.e)),h.b&&(h.b=u.s+qt(h.b))},T1=function(e,t){var n=e[0]?Mr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=ys({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},E1=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Kt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ua=function(e,t,n,i,r){return St(e)?e.call(t,n,i,r):Ot(e)&&~e.indexOf("random(")?Ta(e):e},im=Xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",rm={};fn(im+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return rm[s]=1});var At=function(s){Mp(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:la(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=i.parent||_t,y=(Kt(n)||Ep(n)?Ui(n[0]):"length"in i)?[n]:Ln(n),v,E,w,T,R,S,M,P;if(o._targets=y.length?Yu(y):Sa("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||mo(c)||mo(u)){if(i=o.vars,v=o.timeline=new en({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=bi(o),v._start=0,f||mo(c)||mo(u)){if(T=y.length,M=f&&Vp(f),mi(f))for(R in f)~im.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(E=0;E<T;E++)w=zo(i,rm),w.stagger=0,m&&(w.yoyoEase=m),P&&ys(w,P),S=y[E],w.duration=+ua(c,bi(o),E,S,y),w.delay=(+ua(u,bi(o),E,S,y)||0)-o._delay,!f&&T===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(S,w,M?M(E,S,y):0),v._ease=it.none;v.duration()?c=u=0:o.timeline=0}else if(_){la(An(v.vars.defaults,{ease:"none"})),v._ease=Er(_.ease||i.ease||"none");var D=0,L,F,G;if(Kt(_))_.forEach(function(B){return v.to(y,B,">")}),v.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||E1(R,_[R],w,_.easeEach);for(R in w)for(L=w[R].sort(function(B,j){return B.t-j.t}),D=0,E=0;E<L.length;E++)F=L[E],G={ease:F.e,duration:(F.t-(E?L[E-1].t:0))/100*c},G[R]=F.v,v.to(y,G,D),D+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!ku&&(ji=bi(o),_t.killTweensOf(y),ji=0),oi(x,bi(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===wt(x._time)&&hn(h)&&t1(bi(o))&&x.data!=="nested")&&(o._tTime=-1e-8,o.render(Math.max(0,-u)||0)),p&&Bp(bi(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-jt&&!u?l:i<jt?0:i,f,d,_,g,p,m,x,y,v;if(!c)i1(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(f=wt(h%g),h===l?(_=this._repeat,f=c):(p=wt(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,f=c-f),p=Ss(this._tTime,g),f===o&&!a&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(y&&this._yEase&&$p(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(wt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(kp(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!o&&!r&&!_&&(Mn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&iu(this,i,r,a),Mn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&Mn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&iu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&tr(this,1),!r&&!(u&&!o)&&(h||o||m)&&(Mn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,l){Ea||Sn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ju(this,c),u=this._ease(c/this._dur),M1(this,i,r,a,o,u,c,l)?this.resetTo(i,r,a,o,1):(tl(this,0),this.parent||Np(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ji&&ji.vars.overwrite!==!0)._first||ta(this),this.parent&&a!==this.timeline.totalDuration()&&Ms(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ln(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!r||r==="all")&&$M(o,l))return r==="all"&&(this._pt=0),ta(this);for(h=this._op=this._op||[],r!=="all"&&(Ot(r)&&(g={},fn(r,function(x){return g[x]=1}),r=g),r=T1(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],r==="all"?(h[m]=r,_=f,d={}):(d=h[m]=h[m]||{},_=r);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&$o(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&ta(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ca(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return ca(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return _t.killTweensOf(i,r,a)},e}(ba);An(At.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fn("staggerTo,staggerFrom,staggerFromTo",function(s){At[s]=function(){var e=new en,t=su.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Ku=function(e,t,n){return e[t]=n},sm=function(e,t,n){return e[t](n)},b1=function(e,t,n,i){return e[t](i.fp,n)},A1=function(e,t,n){return e.setAttribute(t,n)},Zu=function(e,t){return St(e[t])?sm:zu(e[t])&&e.setAttribute?A1:Ku},am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},w1=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},om=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ju=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},R1=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},C1=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?$o(this,t,"_pt"):t.dep||(n=1),t=i;return!n},D1=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lm=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},dn=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||am,this.d=l||this,this.set=c||Ku,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=D1,this.m=n,this.mt=r,this.tween=i},s}();fn(Xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Wu[s]=1});bn.TweenMax=bn.TweenLite=At;bn.TimelineLite=bn.TimelineMax=en;_t=new en({sortChildren:!1,defaults:xs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=Jp;var br=[],Co={},P1=[],Kf=0,L1=0,nc=function(e){return(Co[e]||P1).map(function(t){return t()})},cu=function(){var e=Date.now(),t=[];e-Kf>2&&(nc("matchMediaInit"),br.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=si.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),nc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Kf=e,nc("matchMedia"))},cm=function(){function s(t,n){this.selector=n&&au(n),this.data=[],this._r=[],this.isReverted=!1,this.id=L1++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){St(n)&&(r=i,i=n,n=St);var a=this,o=function(){var c=mt,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=au(r)),mt=a,h=i.apply(a,arguments),St(h)&&a._r.push(h),mt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===St?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=mt;mt=null,n(this),mt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof At&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof en?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof At)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=br.length;a--;)br[a].id===this.id&&br.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),U1=function(){function s(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){mi(n)||(n={matches:n});var a=new cm(0,r||this.scope),o=a.conditions={},l,c,u;mt&&!a.selector&&(a.selector=mt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=si.matchMedia(n[c]),l&&(br.indexOf(a)<0&&br.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(cu):l.addEventListener("change",cu)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Vo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return jp(i)})},timeline:function(e){return new en(e)},getTweensOf:function(e,t){return _t.getTweensOf(e,t)},getProperty:function(e,t,n,i){Ot(e)&&(e=Ln(e)[0]);var r=Mr(e||{}).get,a=n?Fp:Ip;return n==="native"&&(n=""),e&&(t?a((yn[t]&&yn[t].get||r)(e,t,n,i)):function(o,l,c){return a((yn[o]&&yn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ln(e),e.length>1){var i=e.map(function(u){return mn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=yn[t],o=Mr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;ns._pt=0,h.init(e,n?u+n:u,ns,0,[e]),h.render(1,h),ns._pt&&Ju(1,ns)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=mn.to(e,An((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return _t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Er(e.ease,xs.ease)),Wf(xs,e||{})},config:function(e){return Wf(Tn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!yn[o]&&!bn[o]&&Sa(t+" effect requires "+o+" plugin.")}),Ql[t]=function(o,l,c){return n(Ln(o),An(l||{},r),c)},a&&(en.prototype[t]=function(o,l,c){return this.add(Ql[t](o,mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Er(t)},parseEase:function(e,t){return arguments.length?Er(e,t):it},getById:function(e){return _t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new en(e),i,r;for(n.smoothChildTiming=hn(e.smoothChildTiming),_t.remove(n),n._dp=0,n._time=n._tTime=_t._time,i=_t._first;i;)r=i._next,(t||!(!i._dur&&i instanceof At&&i.vars.onComplete===i._targets[0]))&&oi(n,i,i._start-i._delay),i=r;return oi(_t,n,0),n},context:function(e,t){return e?new cm(e,t):mt},matchMedia:function(e){return new U1(e)},matchMediaRefresh:function(){return br.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||cu()},addEventListener:function(e,t){var n=Co[e]||(Co[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Co[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:h1,wrapYoyo:f1,distribute:Vp,random:Wp,snap:Hp,normalize:u1,getUnit:qt,clamp:a1,splitColor:Kp,toArray:Ln,selector:au,mapRange:Yp,pipe:l1,unitize:c1,interpolate:d1,shuffle:Gp},install:Cp,effects:Ql,ticker:Sn,updateRoot:en.updateRoot,plugins:yn,globalTimeline:_t,core:{PropTween:dn,globals:Dp,Tween:At,Timeline:en,Animation:ba,getCache:Mr,_removeLinkedListItem:$o,reverting:function(){return Vt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return ku=e}}};fn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Vo[s]=At[s]});Sn.add(en.updateRoot);ns=Vo.to({},{duration:0});var I1=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},F1=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=I1(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},ic=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ot(r)&&(l={},fn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}F1(o,r)}}}},mn=Vo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Vt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ic("roundProps",ou),ic("modifiers"),ic("snap",Hp))||Vo;At.version=en.version=mn.version="3.12.7";Rp=1;Gu()&&Ts();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zf,Ki,os,Qu,Sr,Jf,$u,N1=function(){return typeof window<"u"},Ii={},_r=180/Math.PI,ls=Math.PI/180,Qr=Math.atan2,Qf=1e8,eh=/([A-Z])/g,O1=/(left|right|width|margin|padding|x)/i,B1=/[\s,\(]\S/,ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},k1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},z1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},G1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},um=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},V1=function(e,t,n){return e.style[t]=n},H1=function(e,t,n){return e.style.setProperty(t,n)},W1=function(e,t,n){return e._gsap[t]=n},X1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Y1=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},q1=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},vt="transform",pn=vt+"Origin",j1=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Ii&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ai(i,o)}):this.tfm[e]=a.x?a[e]:Ai(i,e),e===pn&&(this.tfm.zOrigin=a.zOrigin);else return ui.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(vt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pn,t,"")),e=vt}(r||t)&&this.props.push(e,t,r[e])},fm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},K1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(eh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=$u(),(!r||!r.isStart)&&!n[vt]&&(fm(n),i.zOrigin&&n[pn]&&(n[pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},dm=function(e,t){var n={target:e,props:[],revert:K1,save:j1};return e._gsap||mn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},pm,hu=function(e,t){var n=Ki.createElementNS?Ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ki.createElement(e);return n&&n.style?n:Ki.createElement(e)},di=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(eh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Es(t)||t,1)||""},$f="O,Moz,ms,Ms,Webkit".split(","),Es=function(e,t,n){var i=t||Sr,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!($f[a]+e in r););return a<0?null:(a===3?"ms":a>=0?$f[a]:"")+e},fu=function(){N1()&&window.document&&(Zf=window,Ki=Zf.document,os=Ki.documentElement,Sr=hu("div")||{style:{}},hu("div"),vt=Es(vt),pn=vt+"Origin",Sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pm=!!Es("perspective"),$u=mn.core.reverting,Qu=1)},ed=function(e){var t=e.ownerSVGElement,n=hu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),os.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),os.removeChild(n),r},td=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mm=function(e){var t,n;try{t=e.getBBox()}catch{t=ed(e),n=1}return t&&(t.width||t.height)||n||(t=ed(e)),t&&!t.width&&!t.x&&!t.y?{x:+td(e,["x","cx","x1"])||0,y:+td(e,["y","cy","y1"])||0,width:0,height:0}:t},gm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mm(e))},Cr=function(e,t){if(t){var n=e.style,i;t in Ii&&t!==pn&&(t=vt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(eh,"-$1").toLowerCase())):n.removeAttribute(t)}},Zi=function(e,t,n,i,r,a){var o=new dn(e._pt,t,n,0,1,a?hm:um);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},nd={deg:1,rad:1,turn:1},Z1={grid:1,flex:1},nr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Sr.style,l=O1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,p,m;if(i===a||!r||nd[i]||nd[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&gm(e),(d||a==="%")&&(Ii[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Tt(d?r/_*h:r/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ki||!g.appendChild)&&(g=Ki.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Sn.time&&!p.uncache)return Tt(r/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,_=e[u],x?e.style[t]=x:Cr(e,t)}else(d||a==="%")&&!Z1[di(g,"display")]&&(o.position=di(e,"position")),g===e&&(o.position="static"),g.appendChild(Sr),_=Sr[u],g.removeChild(Sr),o.position="absolute";return l&&d&&(p=Mr(g),p.time=Sn.time,p.width=g[u]),Tt(f?_*r/h:_&&r?h/_*r:0)},Ai=function(e,t,n,i){var r;return Qu||fu(),t in ui&&t!=="transform"&&(t=ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ii[t]&&t!=="transform"?(r=wa(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Wo(di(e,pn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ho[t]&&Ho[t](e,t,n)||di(e,t)||Lp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?nr(e,t,r,n)+n:r},J1=function(e,t,n,i){if(!n||n==="none"){var r=Es(t,e,1),a=r&&di(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=di(e,"borderTopColor"))}var o=new dn(this._pt,e.style,t,0,1,om),l=0,c=0,u,h,f,d,_,g,p,m,x,y,v,E;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=di(e,t)||i,g?e.style[t]=g:Cr(e,t)),u=[n,i],Jp(u),n=u[0],i=u[1],f=n.match(ts)||[],E=i.match(ts)||[],E.length){for(;h=ts.exec(i);)p=h[0],x=i.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),p.charAt(1)==="="&&(p=as(d,p)+v),m=parseFloat(p),y=p.substr((m+"").length),l=ts.lastIndex-y.length,y||(y=y||Tn.units[t]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(d=nr(e,t,g,y)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?hm:um;return Ap.test(i)&&(o.e=0),this._pt=o,o},id={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Q1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=id[n]||n,t[1]=id[i]||i,t.join(" ")},$1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Ii[o]&&(l=1,o=o==="transformOrigin"?pn:vt),Cr(n,o);l&&(Cr(n,vt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",wa(n,1),a.uncache=1,fm(i)))}},Ho={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new dn(e._pt,t,n,0,0,$1);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Aa=[1,0,0,1,0,0],_m={},vm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rd=function(e){var t=di(e,vt);return vm(t)?Aa:t.substr(7).match(bp).map(Tt)},th=function(e,t){var n=e._gsap||Mr(e),i=e.style,r=rd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Aa:r):(r===Aa&&!e.offsetParent&&e!==os&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,os.appendChild(e)),r=rd(e),l?i.display=l:Cr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):os.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},du=function(e,t,n,i,r,a){var o=e._gsap,l=r||th(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,w,T,R,S;n?l!==Aa&&(T=d*p-_*g)&&(R=v*(p/T)+E*(-g/T)+(g*x-p*m)/T,S=v*(-_/T)+E*(d/T)-(d*x-_*m)/T,v=R,E=S):(w=mm(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),E=w.y+(~(y[1]||y[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(m=v-c,x=E-u,o.xOffset=h+(m*d+x*g)-m,o.yOffset=f+(m*_+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[pn]="0px 0px",a&&(Zi(a,o,"xOrigin",c,v),Zi(a,o,"yOrigin",u,E),Zi(a,o,"xOffset",h,o.xOffset),Zi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},wa=function(e,t){var n=e._gsap||new tm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=di(e,pn)||"0",u,h,f,d,_,g,p,m,x,y,v,E,w,T,R,S,M,P,D,L,F,G,B,j,H,Z,Y,I,W,ee,N,k;return u=h=f=g=p=m=x=y=v=0,d=_=1,n.svg=!!(e.getCTM&&gm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),i.scale=i.rotate=i.translate="none"),T=th(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),du(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,T)),E=n.xOrigin||0,w=n.yOrigin||0,T!==Aa&&(P=T[0],D=T[1],L=T[2],F=T[3],u=G=T[4],h=B=T[5],T.length===6?(d=Math.sqrt(P*P+D*D),_=Math.sqrt(F*F+L*L),g=P||D?Qr(D,P)*_r:0,x=L||F?Qr(L,F)*_r+g:0,x&&(_*=Math.abs(Math.cos(x*ls))),n.svg&&(u-=E-(E*P+w*L),h-=w-(E*D+w*F))):(k=T[6],ee=T[7],Y=T[8],I=T[9],W=T[10],N=T[11],u=T[12],h=T[13],f=T[14],R=Qr(k,W),p=R*_r,R&&(S=Math.cos(-R),M=Math.sin(-R),j=G*S+Y*M,H=B*S+I*M,Z=k*S+W*M,Y=G*-M+Y*S,I=B*-M+I*S,W=k*-M+W*S,N=ee*-M+N*S,G=j,B=H,k=Z),R=Qr(-L,W),m=R*_r,R&&(S=Math.cos(-R),M=Math.sin(-R),j=P*S-Y*M,H=D*S-I*M,Z=L*S-W*M,N=F*M+N*S,P=j,D=H,L=Z),R=Qr(D,P),g=R*_r,R&&(S=Math.cos(R),M=Math.sin(R),j=P*S+D*M,H=G*S+B*M,D=D*S-P*M,B=B*S-G*M,P=j,G=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Tt(Math.sqrt(P*P+D*D+L*L)),_=Tt(Math.sqrt(B*B+k*k)),R=Qr(G,B),x=Math.abs(R)>2e-4?R*_r:0,v=N?1/(N<0?-N:N):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!vm(di(e,vt)),j&&e.setAttribute("transform",j))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Tt(d),n.scaleY=Tt(_),n.rotation=Tt(g)+o,n.rotationX=Tt(p)+o,n.rotationY=Tt(m)+o,n.skewX=x+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[pn]=Wo(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?tT:pm?xm:eT,n.uncache=0,n},Wo=function(e){return(e=e.split(" "))[0]+" "+e[1]},rc=function(e,t,n){var i=qt(t);return Tt(parseFloat(t)+parseFloat(nr(e,"x",n+"px",i)))+i},eT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xm(e,t)},fr="0deg",Js="0px",dr=") ",xm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",E=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==fr||u!==fr)){var w=parseFloat(u)*ls,T=Math.sin(w),R=Math.cos(w),S;w=parseFloat(h)*ls,S=Math.cos(w),a=rc(x,a,T*S*-y),o=rc(x,o,-Math.sin(w)*-y),l=rc(x,l,R*S*-y+y)}p!==Js&&(v+="perspective("+p+dr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(E||a!==Js||o!==Js||l!==Js)&&(v+=l!==Js||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+dr),c!==fr&&(v+="rotate("+c+dr),u!==fr&&(v+="rotateY("+u+dr),h!==fr&&(v+="rotateX("+h+dr),(f!==fr||d!==fr)&&(v+="skew("+f+", "+d+dr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+dr),x.style[vt]=v||"translate(0, 0)"},tT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(a),v=parseFloat(o),E,w,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ls,c*=ls,E=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=ls,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,w*=S)),E=Tt(E),w=Tt(w),T=Tt(T),R=Tt(R)):(E=h,R=f,w=T=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=nr(d,"x",a,"px"),v=nr(d,"y",o,"px")),(_||g||p||m)&&(y=Tt(y+_-(_*E+g*T)+p),v=Tt(v+g-(_*w+g*R)+m)),(i||r)&&(S=d.getBBox(),y=Tt(y+i/100*S.width),v=Tt(v+r/100*S.height)),S="matrix("+E+","+w+","+T+","+R+","+y+","+v+")",d.setAttribute("transform",S),x&&(d.style[vt]=S)},nT=function(e,t,n,i,r){var a=360,o=Ot(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?_r:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-360)),h==="cw"&&c<0?c=(c+a*Qf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Qf)%a-~~(c/a)*a)),e._pt=f=new dn(e._pt,t,n,i,c,k1),f.e=u,f.u="deg",e._props.push(n),f},sd=function(e,t){for(var n in t)e[n]=t[n];return e},iT=function(e,t,n){var i=sd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[vt]=t,o=wa(n,1),Cr(n,vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[vt],a[vt]=t,o=wa(n,1),a[vt]=c);for(l in Ii)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(d=qt(c),_=qt(u),h=d!==_?nr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new dn(e._pt,o,l,h,f-h,uu),e._pt.u=_||0,e._props.push(l));sd(o,i)};fn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Ho[e>1?"border"+s:s]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return Ai(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var ym={name:"css",register:fu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,p,m,x,y,v,E,w,T,R;Qu||fu(),this.styles=this.styles||dm(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(yn[g]&&nm(g,t,n,i,e,r)))){if(d=typeof u,_=Ho[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ta(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=qt(c),m=qt(u)),m?p!==m&&(c=nr(e,g,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],Ot(c)&&~c.indexOf("random(")&&(c=Ta(c)),qt(c+"")||c==="auto"||(c+=Tn.units[g]||qt(Ai(e,g))||""),(c+"").charAt(1)==="="&&(c=Ai(e,g))):c=Ai(e,g),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),g in ui&&(g==="autoAlpha"&&(f===1&&Ai(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,o.visibility),Zi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ui[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ii,y){if(this.styles.save(g),v||(E=e._gsap,E.renderTransform&&!t.parseTransform||wa(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new dn(this._pt,o,vt,0,1,E.renderTransform,E,0,-1),v.dep=1),g==="scale")this._pt=new dn(this._pt,E,"scaleY",E.scaleY,(x?as(E.scaleY,x+h):h)-E.scaleY||0,uu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(pn,0,o[pn]),u=Q1(u),E.svg?du(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&Zi(this,E,"zOrigin",E.zOrigin,m),Zi(this,o,g,Wo(c),Wo(u)));continue}else if(g==="svgOrigin"){du(e,u,1,w,0,this);continue}else if(g in _m){nT(this,E,g,f,x?as(f,x+u):u);continue}else if(g==="smoothOrigin"){Zi(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){iT(this,u,e);continue}}else g in o||(g=Es(g)||g);if(y||(h||h===0)&&(f||f===0)&&!B1.test(u)&&g in o)p=(c+"").substr((f+"").length),h||(h=0),m=qt(u)||(g in Tn.units?Tn.units[g]:p),p!==m&&(f=nr(e,g,c,m)),this._pt=new dn(this._pt,y?E:o,g,f,(x?as(f,x+h):h)-f,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?G1:uu),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=z1);else if(g in o)J1.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,i,r);else if(g!=="parseTransform"){Hu(g,u);continue}y||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),a.push(g)}}T&&lm(this)},render:function(e,t){if(t.tween._time||!$u())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ai,aliases:ui,getSetter:function(e,t,n){var i=ui[t];return i&&i.indexOf(",")<0&&(t=i),t in Ii&&t!==pn&&(e._gsap.x||Ai(e,"x"))?n&&Jf===n?t==="scale"?X1:W1:(Jf=n||{})&&(t==="scale"?Y1:q1):e.style&&!zu(e.style[t])?V1:~t.indexOf("-")?H1:Zu(e,t)},core:{_removeProperty:Cr,_getMatrix:th}};mn.utils.checkPrefix=Es;mn.core.getStyleSaver=dm;(function(s,e,t,n){var i=fn(s+","+e+","+t,function(r){Ii[r]=1});fn(e,function(r){Tn.units[r]="deg",_m[r]=1}),ui[i[13]]=s+","+e,fn(n,function(r){var a=r.split(":");ui[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Tn.units[s]="px"});mn.registerPlugin(ym);var Yn=mn.registerPlugin(ym)||mn;Yn.core.Tween;const ad=s=>{let e;const t=new Set,n=(c,u)=>{const h=typeof c=="function"?c(e):c;if(!Object.is(h,e)){const f=e;e=u??(typeof h!="object"||h===null)?h:Object.assign({},e,h),t.forEach(d=>d(e,f))}},i=()=>e,o={setState:n,getState:i,getInitialState:()=>l,subscribe:c=>(t.add(c),()=>t.delete(c))},l=e=s(n,i,o);return o},rT=s=>s?ad(s):ad;function sT(){var s=Object.create(null);function e(i,r){var a=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=n("<"+o+">.init",c),u&&(u=n("<"+o+">.getTransferables",u));var h=null;typeof c=="function"?h=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:h,getTransferables:u},r(h)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(i,r){var a,o=i.id,l=i.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(u,function(h){return r(h instanceof Error?h:new Error(""+h))}):u(c)}catch(h){r(h)}function u(h){try{var f=s[o].getTransferables&&s[o].getTransferables(h);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(h,f)}catch(d){console.error(d),r(d)}}}function n(i,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(i){var r=i.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function aT(s){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,n=s.init;t=Array.isArray(t)?t.map(function(r){return r&&(r=r.onMainThread||r,r._getInitResult&&(r=r._getInitResult())),r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Sm=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Sm=function(){return s},s},oT=0,lT=0,sc=!1,ha=Object.create(null),fa=Object.create(null),pu=Object.create(null);function Ps(s){if((!s||typeof s.init!="function")&&!sc)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,n=s.getTransferables,i=s.workerId,r=aT(s);i==null&&(i="#default");var a="workerModule"+ ++oT,o=s.name||a,l=null;e=e&&e.map(function(u){return typeof u=="function"&&!u.workerModuleData&&(sc=!0,u=Ps({workerId:i,name:"<"+o+"> function dependency: "+u.name,init:`function(){return (
`+Do(u)+`
)}`}),sc=!1),u&&u.workerModuleData&&(u=u.workerModuleData),u});function c(){for(var u=[],h=arguments.length;h--;)u[h]=arguments[h];if(!Sm())return r.apply(void 0,u);if(!l){l=od(i,"registerModule",c.workerModuleData);var f=function(){l=null,fa[i].delete(f)};(fa[i]||(fa[i]=new Set)).add(f)}return l.then(function(d){var _=d.isCallable;if(_)return od(i,"callModule",{id:a,args:u});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:Do(t),getTransferables:n&&Do(n)},c.onMainThread=r,c}function cT(s){fa[s]&&fa[s].forEach(function(e){e()}),ha[s]&&(ha[s].terminate(),delete ha[s])}function Do(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function uT(s){var e=ha[s];if(!e){var t=Do(sT);e=ha[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,a=pu[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete pu[r],a(i)}}return e}function od(s,e,t){return new Promise(function(n,i){var r=++lT;pu[r]=function(a){a.success?n(a.result):i(new Error("Error in worker "+e+" call: "+a.error))},uT(s).postMessage({messageId:r,action:e,data:t})})}function Mm(){var s=function(e){function t(Z,Y,I,W,ee,N,k,ne){var X=1-k;ne.x=X*X*Z+2*X*k*I+k*k*ee,ne.y=X*X*Y+2*X*k*W+k*k*N}function n(Z,Y,I,W,ee,N,k,ne,X,ie){var xe=1-X;ie.x=xe*xe*xe*Z+3*xe*xe*X*I+3*xe*X*X*ee+X*X*X*k,ie.y=xe*xe*xe*Y+3*xe*xe*X*W+3*xe*X*X*N+X*X*X*ne}function i(Z,Y){for(var I=/([MLQCZ])([^MLQCZ]*)/g,W,ee,N,k,ne;W=I.exec(Z);){var X=W[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ie){return parseFloat(ie)});switch(W[1]){case"M":k=ee=X[0],ne=N=X[1];break;case"L":(X[0]!==k||X[1]!==ne)&&Y("L",k,ne,k=X[0],ne=X[1]);break;case"Q":{Y("Q",k,ne,k=X[2],ne=X[3],X[0],X[1]);break}case"C":{Y("C",k,ne,k=X[4],ne=X[5],X[0],X[1],X[2],X[3]);break}case"Z":(k!==ee||ne!==N)&&Y("L",k,ne,ee,N);break}}}function r(Z,Y,I){I===void 0&&(I=16);var W={x:0,y:0};i(Z,function(ee,N,k,ne,X,ie,xe,_e,ve){switch(ee){case"L":Y(N,k,ne,X);break;case"Q":{for(var he=N,De=k,U=1;U<I;U++)t(N,k,ie,xe,ne,X,U/(I-1),W),Y(he,De,W.x,W.y),he=W.x,De=W.y;break}case"C":{for(var Oe=N,Ae=k,Re=1;Re<I;Re++)n(N,k,ie,xe,_e,ve,ne,X,Re/(I-1),W),Y(Oe,Ae,W.x,W.y),Oe=W.x,Ae=W.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(Z,Y){var I=Z.getContext?Z.getContext("webgl",c):Z,W=l.get(I);if(!W){let Oe=function(A){var b=N[A];if(!b&&(b=N[A]=I.getExtension(A),!b))throw new Error(A+" not supported");return b},Ae=function(A,b){var O=I.createShader(b);return I.shaderSource(O,A),I.compileShader(O),O},Re=function(A,b,O,Q){if(!k[A]){var $={},se={},fe=I.createProgram();I.attachShader(fe,Ae(b,I.VERTEX_SHADER)),I.attachShader(fe,Ae(O,I.FRAGMENT_SHADER)),I.linkProgram(fe),k[A]={program:fe,transaction:function(me){I.useProgram(fe),me({setUniform:function(ce,Se){for(var Te=[],Ee=arguments.length-2;Ee-- >0;)Te[Ee]=arguments[Ee+2];var oe=se[Se]||(se[Se]=I.getUniformLocation(fe,Se));I["uniform"+ce].apply(I,[oe].concat(Te))},setAttribute:function(ce,Se,Te,Ee,oe){var Ue=$[ce];Ue||(Ue=$[ce]={buf:I.createBuffer(),loc:I.getAttribLocation(fe,ce),data:null}),I.bindBuffer(I.ARRAY_BUFFER,Ue.buf),I.vertexAttribPointer(Ue.loc,Se,I.FLOAT,!1,0,0),I.enableVertexAttribArray(Ue.loc),ee?I.vertexAttribDivisor(Ue.loc,Ee):Oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ue.loc,Ee),oe!==Ue.data&&(I.bufferData(I.ARRAY_BUFFER,oe,Te),Ue.data=oe)}})}}}k[A].transaction(Q)},ae=function(A,b){X++;try{I.activeTexture(I.TEXTURE0+X);var O=ne[A];O||(O=ne[A]=I.createTexture(),I.bindTexture(I.TEXTURE_2D,O),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MIN_FILTER,I.NEAREST),I.texParameteri(I.TEXTURE_2D,I.TEXTURE_MAG_FILTER,I.NEAREST)),I.bindTexture(I.TEXTURE_2D,O),b(O,X)}finally{X--}},be=function(A,b,O){var Q=I.createFramebuffer();ie.push(Q),I.bindFramebuffer(I.FRAMEBUFFER,Q),I.activeTexture(I.TEXTURE0+b),I.bindTexture(I.TEXTURE_2D,A),I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,A,0);try{O(Q)}finally{I.deleteFramebuffer(Q),I.bindFramebuffer(I.FRAMEBUFFER,ie[--ie.length-1]||null)}},de=function(){N={},k={},ne={},X=-1,ie.length=0};var xe=Oe,_e=Ae,ve=Re,he=ae,De=be,U=de,ee=typeof WebGL2RenderingContext<"u"&&I instanceof WebGL2RenderingContext,N={},k={},ne={},X=-1,ie=[];I.canvas.addEventListener("webglcontextlost",function(A){de(),A.preventDefault()},!1),l.set(I,W={gl:I,isWebGL2:ee,getExtension:Oe,withProgram:Re,withTexture:ae,withTextureFramebuffer:be,handleContextLoss:de})}Y(W)}function h(Z,Y,I,W,ee,N,k,ne){k===void 0&&(k=15),ne===void 0&&(ne=null),u(Z,function(X){var ie=X.gl,xe=X.withProgram,_e=X.withTexture;_e("copy",function(ve,he){ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,ee,N,0,ie.RGBA,ie.UNSIGNED_BYTE,Y),xe("copy",a,o,function(De){var U=De.setUniform,Oe=De.setAttribute;Oe("aUV",2,ie.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),U("1i","image",he),ie.bindFramebuffer(ie.FRAMEBUFFER,ne||null),ie.disable(ie.BLEND),ie.colorMask(k&8,k&4,k&2,k&1),ie.viewport(I,W,ee,N),ie.scissor(I,W,ee,N),ie.drawArrays(ie.TRIANGLES,0,3)})})})}function f(Z,Y,I){var W=Z.width,ee=Z.height;u(Z,function(N){var k=N.gl,ne=new Uint8Array(W*ee*4);k.readPixels(0,0,W,ee,k.RGBA,k.UNSIGNED_BYTE,ne),Z.width=Y,Z.height=I,h(k,ne,0,0,W,ee)})}var d=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:h,resizeWebGLCanvasWithoutClearing:f});function _(Z,Y,I,W,ee,N){N===void 0&&(N=1);var k=new Uint8Array(Z*Y),ne=W[2]-W[0],X=W[3]-W[1],ie=[];r(I,function(Oe,Ae,Re,ae){ie.push({x1:Oe,y1:Ae,x2:Re,y2:ae,minX:Math.min(Oe,Re),minY:Math.min(Ae,ae),maxX:Math.max(Oe,Re),maxY:Math.max(Ae,ae)})}),ie.sort(function(Oe,Ae){return Oe.maxX-Ae.maxX});for(var xe=0;xe<Z;xe++)for(var _e=0;_e<Y;_e++){var ve=De(W[0]+ne*(xe+.5)/Z,W[1]+X*(_e+.5)/Y),he=Math.pow(1-Math.abs(ve)/ee,N)/2;ve<0&&(he=1-he),he=Math.max(0,Math.min(255,Math.round(he*255))),k[_e*Z+xe]=he}return k;function De(Oe,Ae){for(var Re=1/0,ae=1/0,be=ie.length;be--;){var de=ie[be];if(de.maxX+ae<=Oe)break;if(Oe+ae>de.minX&&Ae-ae<de.maxY&&Ae+ae>de.minY){var A=m(Oe,Ae,de.x1,de.y1,de.x2,de.y2);A<Re&&(Re=A,ae=Math.sqrt(Re))}}return U(Oe,Ae)&&(ae=-ae),ae}function U(Oe,Ae){for(var Re=0,ae=ie.length;ae--;){var be=ie[ae];if(be.maxX<=Oe)break;var de=be.y1>Ae!=be.y2>Ae&&Oe<(be.x2-be.x1)*(Ae-be.y1)/(be.y2-be.y1)+be.x1;de&&(Re+=be.y1<be.y2?1:-1)}return Re!==0}}function g(Z,Y,I,W,ee,N,k,ne,X,ie){N===void 0&&(N=1),ne===void 0&&(ne=0),X===void 0&&(X=0),ie===void 0&&(ie=0),p(Z,Y,I,W,ee,N,k,null,ne,X,ie)}function p(Z,Y,I,W,ee,N,k,ne,X,ie,xe){N===void 0&&(N=1),X===void 0&&(X=0),ie===void 0&&(ie=0),xe===void 0&&(xe=0);for(var _e=_(Z,Y,I,W,ee,N),ve=new Uint8Array(_e.length*4),he=0;he<_e.length;he++)ve[he*4+xe]=_e[he];h(k,ve,X,ie,Z,Y,1<<3-xe,ne)}function m(Z,Y,I,W,ee,N){var k=ee-I,ne=N-W,X=k*k+ne*ne,ie=X?Math.max(0,Math.min(1,((Z-I)*k+(Y-W)*ne)/X)):0,xe=Z-(I+ie*k),_e=Y-(W+ie*ne);return xe*xe+_e*_e}var x=Object.freeze({__proto__:null,generate:_,generateIntoCanvas:g,generateIntoFramebuffer:p}),y="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",v="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",E="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",w=new Float32Array([0,0,2,0,0,2]),T=null,R=!1,S={},M=new WeakMap;function P(Z){if(!R&&!G(Z))throw new Error("WebGL generation not supported")}function D(Z,Y,I,W,ee,N,k){if(N===void 0&&(N=1),k===void 0&&(k=null),!k&&(k=T,!k)){var ne=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ne)throw new Error("OffscreenCanvas or DOM canvas not supported");k=T=ne.getContext("webgl",{depth:!1})}P(k);var X=new Uint8Array(Z*Y*4);u(k,function(ve){var he=ve.gl,De=ve.withTexture,U=ve.withTextureFramebuffer;De("readable",function(Oe,Ae){he.texImage2D(he.TEXTURE_2D,0,he.RGBA,Z,Y,0,he.RGBA,he.UNSIGNED_BYTE,null),U(Oe,Ae,function(Re){F(Z,Y,I,W,ee,N,he,Re,0,0,0),he.readPixels(0,0,Z,Y,he.RGBA,he.UNSIGNED_BYTE,X)})})});for(var ie=new Uint8Array(Z*Y),xe=0,_e=0;xe<X.length;xe+=4)ie[_e++]=X[xe];return ie}function L(Z,Y,I,W,ee,N,k,ne,X,ie){N===void 0&&(N=1),ne===void 0&&(ne=0),X===void 0&&(X=0),ie===void 0&&(ie=0),F(Z,Y,I,W,ee,N,k,null,ne,X,ie)}function F(Z,Y,I,W,ee,N,k,ne,X,ie,xe){N===void 0&&(N=1),X===void 0&&(X=0),ie===void 0&&(ie=0),xe===void 0&&(xe=0),P(k);var _e=[];r(I,function(ve,he,De,U){_e.push(ve,he,De,U)}),_e=new Float32Array(_e),u(k,function(ve){var he=ve.gl,De=ve.isWebGL2,U=ve.getExtension,Oe=ve.withProgram,Ae=ve.withTexture,Re=ve.withTextureFramebuffer,ae=ve.handleContextLoss;if(Ae("rawDistances",function(be,de){(Z!==be._lastWidth||Y!==be._lastHeight)&&he.texImage2D(he.TEXTURE_2D,0,he.RGBA,be._lastWidth=Z,be._lastHeight=Y,0,he.RGBA,he.UNSIGNED_BYTE,null),Oe("main",y,v,function(A){var b=A.setAttribute,O=A.setUniform,Q=!De&&U("ANGLE_instanced_arrays"),$=!De&&U("EXT_blend_minmax");b("aUV",2,he.STATIC_DRAW,0,w),b("aLineSegment",4,he.DYNAMIC_DRAW,1,_e),O.apply(void 0,["4f","uGlyphBounds"].concat(W)),O("1f","uMaxDistance",ee),O("1f","uExponent",N),Re(be,de,function(se){he.enable(he.BLEND),he.colorMask(!0,!0,!0,!0),he.viewport(0,0,Z,Y),he.scissor(0,0,Z,Y),he.blendFunc(he.ONE,he.ONE),he.blendEquationSeparate(he.FUNC_ADD,De?he.MAX:$.MAX_EXT),he.clear(he.COLOR_BUFFER_BIT),De?he.drawArraysInstanced(he.TRIANGLES,0,3,_e.length/4):Q.drawArraysInstancedANGLE(he.TRIANGLES,0,3,_e.length/4)})}),Oe("post",a,E,function(A){A.setAttribute("aUV",2,he.STATIC_DRAW,0,w),A.setUniform("1i","tex",de),he.bindFramebuffer(he.FRAMEBUFFER,ne),he.disable(he.BLEND),he.colorMask(xe===0,xe===1,xe===2,xe===3),he.viewport(X,ie,Z,Y),he.scissor(X,ie,Z,Y),he.drawArrays(he.TRIANGLES,0,3)})}),he.isContextLost())throw ae(),new Error("webgl context lost")})}function G(Z){var Y=!Z||Z===T?S:Z.canvas||Z,I=M.get(Y);if(I===void 0){R=!0;var W=null;try{var ee=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],N=D(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Z);I=N&&ee.length===N.length&&N.every(function(k,ne){return k===ee[ne]}),I||(W="bad trial run results",console.info(ee,N))}catch(k){I=!1,W=k.message}W&&console.warn("WebGL SDF generation not supported:",W),R=!1,M.set(Y,I)}return I}var B=Object.freeze({__proto__:null,generate:D,generateIntoCanvas:L,generateIntoFramebuffer:F,isSupported:G});function j(Z,Y,I,W,ee,N){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1);try{return D.apply(B,arguments)}catch(k){return console.info("WebGL SDF generation failed, falling back to JS",k),_.apply(x,arguments)}}function H(Z,Y,I,W,ee,N,k,ne,X,ie){ee===void 0&&(ee=Math.max(W[2]-W[0],W[3]-W[1])/2),N===void 0&&(N=1),ne===void 0&&(ne=0),X===void 0&&(X=0),ie===void 0&&(ie=0);try{return L.apply(B,arguments)}catch(xe){return console.info("WebGL SDF generation failed, falling back to JS",xe),g.apply(x,arguments)}}return e.forEachPathCommand=i,e.generate=j,e.generateIntoCanvas=H,e.javascript=x,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function hT(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ae,be){n[ae]=1<<be+1,i[n[ae]]=ae}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,a=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function h(){if(!u){u=new Map;var ae=function(de){if(t.hasOwnProperty(de)){var A=0;t[de].split(",").forEach(function(b){var O=b.split("+"),Q=O[0],$=O[1];Q=parseInt(Q,36),$=$?parseInt($,36):0,u.set(A+=Q,n[de]);for(var se=0;se<$;se++)u.set(++A,n[de])})}};for(var be in t)ae(be)}}function f(ae){return h(),u.get(ae.codePointAt(0))||n.L}function d(ae){return i[f(ae)]}var _={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(ae,be){var de=36,A=0,b=new Map,O=be&&new Map,Q;return ae.split(",").forEach(function $(se){if(se.indexOf("+")!==-1)for(var fe=+se;fe--;)$(Q);else{Q=se;var le=se.split(">"),me=le[0],Le=le[1];me=String.fromCodePoint(A+=parseInt(me,de)),Le=String.fromCodePoint(A+=parseInt(Le,de)),b.set(me,Le),be&&O.set(Le,me)}}),{map:b,reverseMap:O}}var p,m,x;function y(){if(!p){var ae=g(_.pairs,!0),be=ae.map,de=ae.reverseMap;p=be,m=de,x=g(_.canonical,!1).map}}function v(ae){return y(),p.get(ae)||null}function E(ae){return y(),m.get(ae)||null}function w(ae){return y(),x.get(ae)||null}var T=n.L,R=n.R,S=n.EN,M=n.ES,P=n.ET,D=n.AN,L=n.CS,F=n.B,G=n.S,B=n.ON,j=n.BN,H=n.NSM,Z=n.AL,Y=n.LRO,I=n.RLO,W=n.LRE,ee=n.RLE,N=n.PDF,k=n.LRI,ne=n.RLI,X=n.FSI,ie=n.PDI;function xe(ae,be){for(var de=125,A=new Uint32Array(ae.length),b=0;b<ae.length;b++)A[b]=f(ae[b]);var O=new Map;function Q(on,kn){var ln=A[on];A[on]=kn,O.set(ln,O.get(ln)-1),ln&o&&O.set(o,O.get(o)-1),O.set(kn,(O.get(kn)||0)+1),kn&o&&O.set(o,(O.get(o)||0)+1)}for(var $=new Uint8Array(ae.length),se=new Map,fe=[],le=null,me=0;me<ae.length;me++)le||fe.push(le={start:me,end:ae.length-1,level:be==="rtl"?1:be==="ltr"?0:_h(me,!1)}),A[me]&F&&(le.end=me,le=null);for(var Le=ee|W|I|Y|r|ie|N|F,ce=function(on){return on+(on&1?1:2)},Se=function(on){return on+(on&1?2:1)},Te=0;Te<fe.length;Te++){le=fe[Te];var Ee=[{_level:le.level,_override:0,_isolate:0}],oe=void 0,Ue=0,Fe=0,je=0;O.clear();for(var z=le.start;z<=le.end;z++){var ue=A[z];if(oe=Ee[Ee.length-1],O.set(ue,(O.get(ue)||0)+1),ue&o&&O.set(o,(O.get(o)||0)+1),ue&Le)if(ue&(ee|W)){$[z]=oe._level;var te=(ue===ee?Se:ce)(oe._level);te<=de&&!Ue&&!Fe?Ee.push({_level:te,_override:0,_isolate:0}):Ue||Fe++}else if(ue&(I|Y)){$[z]=oe._level;var pe=(ue===I?Se:ce)(oe._level);pe<=de&&!Ue&&!Fe?Ee.push({_level:pe,_override:ue&I?R:T,_isolate:0}):Ue||Fe++}else if(ue&r){ue&X&&(ue=_h(z+1,!0)===1?ne:k),$[z]=oe._level,oe._override&&Q(z,oe._override);var ye=(ue===ne?Se:ce)(oe._level);ye<=de&&Ue===0&&Fe===0?(je++,Ee.push({_level:ye,_override:0,_isolate:1,_isolInitIndex:z})):Ue++}else if(ue&ie){if(Ue>0)Ue--;else if(je>0){for(Fe=0;!Ee[Ee.length-1]._isolate;)Ee.pop();var ge=Ee[Ee.length-1]._isolInitIndex;ge!=null&&(se.set(ge,z),se.set(z,ge)),Ee.pop(),je--}oe=Ee[Ee.length-1],$[z]=oe._level,oe._override&&Q(z,oe._override)}else ue&N?(Ue===0&&(Fe>0?Fe--:!oe._isolate&&Ee.length>1&&(Ee.pop(),oe=Ee[Ee.length-1])),$[z]=oe._level):ue&F&&($[z]=le.level);else $[z]=oe._level,oe._override&&ue!==j&&Q(z,oe._override)}for(var Ne=[],Xe=null,Be=le.start;Be<=le.end;Be++){var Ge=A[Be];if(!(Ge&l)){var ct=$[Be],ht=Ge&r,yt=Ge===ie;Xe&&ct===Xe._level?(Xe._end=Be,Xe._endsWithIsolInit=ht):Ne.push(Xe={_start:Be,_end:Be,_level:ct,_startsWithPDI:yt,_endsWithIsolInit:ht})}}for(var sn=[],Ht=0;Ht<Ne.length;Ht++){var gn=Ne[Ht];if(!gn._startsWithPDI||gn._startsWithPDI&&!se.has(gn._start)){for(var Nn=[Xe=gn],ii=void 0;Xe&&Xe._endsWithIsolInit&&(ii=se.get(Xe._end))!=null;)for(var an=Ht+1;an<Ne.length;an++)if(Ne[an]._start===ii){Nn.push(Xe=Ne[an]);break}for(var Lt=[],wn=0;wn<Nn.length;wn++)for(var Us=Nn[wn],Ur=Us._start;Ur<=Us._end;Ur++)Lt.push(Ur);for(var rl=$[Lt[0]],Fa=le.level,Ir=Lt[0]-1;Ir>=0;Ir--)if(!(A[Ir]&l)){Fa=$[Ir];break}var Is=Lt[Lt.length-1],sl=$[Is],Na=le.level;if(!(A[Is]&r)){for(var C=Is+1;C<=le.end;C++)if(!(A[C]&l)){Na=$[C];break}}sn.push({_seqIndices:Lt,_sosType:Math.max(Fa,rl)%2?R:T,_eosType:Math.max(Na,sl)%2?R:T})}}for(var q=0;q<sn.length;q++){var re=sn[q],V=re._seqIndices,K=re._sosType,Me=re._eosType,we=$[V[0]]&1?R:T;if(O.get(H))for(var Pe=0;Pe<V.length;Pe++){var Ie=V[Pe];if(A[Ie]&H){for(var He=K,Ve=Pe-1;Ve>=0;Ve--)if(!(A[V[Ve]]&l)){He=A[V[Ve]];break}Q(Ie,He&(r|ie)?B:He)}}if(O.get(S))for(var ke=0;ke<V.length;ke++){var et=V[ke];if(A[et]&S)for(var tt=ke-1;tt>=-1;tt--){var gt=tt===-1?K:A[V[tt]];if(gt&a){gt===Z&&Q(et,D);break}}}if(O.get(Z))for(var ft=0;ft<V.length;ft++){var nt=V[ft];A[nt]&Z&&Q(nt,R)}if(O.get(M)||O.get(L))for(var ze=1;ze<V.length-1;ze++){var Mt=V[ze];if(A[Mt]&(M|L)){for(var Je=0,Zt=0,ri=ze-1;ri>=0&&(Je=A[V[ri]],!!(Je&l));ri--);for(var Bt=ze+1;Bt<V.length&&(Zt=A[V[Bt]],!!(Zt&l));Bt++);Je===Zt&&(A[Mt]===M?Je===S:Je&(S|D))&&Q(Mt,Je)}}if(O.get(S))for(var Wt=0;Wt<V.length;Wt++){var dt=V[Wt];if(A[dt]&S){for(var kt=Wt-1;kt>=0&&A[V[kt]]&(P|l);kt--)Q(V[kt],S);for(Wt++;Wt<V.length&&A[V[Wt]]&(P|l|S);Wt++)A[V[Wt]]!==S&&Q(V[Wt],S)}}if(O.get(P)||O.get(M)||O.get(L))for(var Ut=0;Ut<V.length;Ut++){var It=V[Ut];if(A[It]&(P|M|L)){Q(It,B);for(var Ct=Ut-1;Ct>=0&&A[V[Ct]]&l;Ct--)Q(V[Ct],B);for(var Fi=Ut+1;Fi<V.length&&A[V[Fi]]&l;Fi++)Q(V[Fi],B)}}if(O.get(S))for(var On=0,sh=K;On<V.length;On++){var ah=V[On],al=A[ah];al&S?sh===T&&Q(ah,T):al&a&&(sh=al)}if(O.get(o)){var Fs=R|S|D,oh=Fs|T,Oa=[];{for(var Fr=[],Nr=0;Nr<V.length;Nr++)if(A[V[Nr]]&o){var Ns=ae[V[Nr]],lh=void 0;if(v(Ns)!==null)if(Fr.length<63)Fr.push({char:Ns,seqIndex:Nr});else break;else if((lh=E(Ns))!==null)for(var Os=Fr.length-1;Os>=0;Os--){var ol=Fr[Os].char;if(ol===lh||ol===E(w(Ns))||v(w(ol))===Ns){Oa.push([Fr[Os].seqIndex,Nr]),Fr.length=Os;break}}}Oa.sort(function(on,kn){return on[0]-kn[0]})}for(var ll=0;ll<Oa.length;ll++){for(var ch=Oa[ll],Ba=ch[0],cl=ch[1],uh=!1,Bn=0,ul=Ba+1;ul<cl;ul++){var hh=V[ul];if(A[hh]&oh){uh=!0;var fh=A[hh]&Fs?R:T;if(fh===we){Bn=fh;break}}}if(uh&&!Bn){Bn=K;for(var hl=Ba-1;hl>=0;hl--){var dh=V[hl];if(A[dh]&oh){var ph=A[dh]&Fs?R:T;ph!==we?Bn=ph:Bn=we;break}}}if(Bn){if(A[V[Ba]]=A[V[cl]]=Bn,Bn!==we){for(var Bs=Ba+1;Bs<V.length;Bs++)if(!(A[V[Bs]]&l)){f(ae[V[Bs]])&H&&(A[V[Bs]]=Bn);break}}if(Bn!==we){for(var ks=cl+1;ks<V.length;ks++)if(!(A[V[ks]]&l)){f(ae[V[ks]])&H&&(A[V[ks]]=Bn);break}}}}for(var Ni=0;Ni<V.length;Ni++)if(A[V[Ni]]&o){for(var mh=Ni,fl=Ni,dl=K,zs=Ni-1;zs>=0;zs--)if(A[V[zs]]&l)mh=zs;else{dl=A[V[zs]]&Fs?R:T;break}for(var gh=Me,Gs=Ni+1;Gs<V.length;Gs++)if(A[V[Gs]]&(o|l))fl=Gs;else{gh=A[V[Gs]]&Fs?R:T;break}for(var pl=mh;pl<=fl;pl++)A[V[pl]]=dl===gh?dl:we;Ni=fl}}}for(var _n=le.start;_n<=le.end;_n++){var Zm=$[_n],ka=A[_n];if(Zm&1?ka&(T|S|D)&&$[_n]++:ka&R?$[_n]++:ka&(D|S)&&($[_n]+=2),ka&l&&($[_n]=_n===0?le.level:$[_n-1]),_n===le.end||f(ae[_n])&(G|F))for(var za=_n;za>=0&&f(ae[za])&c;za--)$[za]=le.level}}return{levels:$,paragraphs:fe};function _h(on,kn){for(var ln=on;ln<ae.length;ln++){var Oi=A[ln];if(Oi&(R|Z))return 1;if(Oi&(F|T)||kn&&Oi===ie)return 0;if(Oi&r){var vh=Jm(ln);ln=vh===-1?ae.length:vh}}return 0}function Jm(on){for(var kn=1,ln=on+1;ln<ae.length;ln++){var Oi=A[ln];if(Oi&F)break;if(Oi&ie){if(--kn===0)return ln}else Oi&r&&kn++}return-1}}var _e="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ve;function he(){if(!ve){var ae=g(_e,!0),be=ae.map,de=ae.reverseMap;de.forEach(function(A,b){be.set(b,A)}),ve=be}}function De(ae){return he(),ve.get(ae)||null}function U(ae,be,de,A){var b=ae.length;de=Math.max(0,de==null?0:+de),A=Math.min(b-1,A==null?b-1:+A);for(var O=new Map,Q=de;Q<=A;Q++)if(be[Q]&1){var $=De(ae[Q]);$!==null&&O.set(Q,$)}return O}function Oe(ae,be,de,A){var b=ae.length;de=Math.max(0,de==null?0:+de),A=Math.min(b-1,A==null?b-1:+A);var O=[];return be.paragraphs.forEach(function(Q){var $=Math.max(de,Q.start),se=Math.min(A,Q.end);if($<se){for(var fe=be.levels.slice($,se+1),le=se;le>=$&&f(ae[le])&c;le--)fe[le]=Q.level;for(var me=Q.level,Le=1/0,ce=0;ce<fe.length;ce++){var Se=fe[ce];Se>me&&(me=Se),Se<Le&&(Le=Se|1)}for(var Te=me;Te>=Le;Te--)for(var Ee=0;Ee<fe.length;Ee++)if(fe[Ee]>=Te){for(var oe=Ee;Ee+1<fe.length&&fe[Ee+1]>=Te;)Ee++;Ee>oe&&O.push([oe+$,Ee+$])}}}),O}function Ae(ae,be,de,A){var b=Re(ae,be,de,A),O=[].concat(ae);return b.forEach(function(Q,$){O[$]=(be.levels[Q]&1?De(ae[Q]):null)||ae[Q]}),O.join("")}function Re(ae,be,de,A){for(var b=Oe(ae,be,de,A),O=[],Q=0;Q<ae.length;Q++)O[Q]=Q;return b.forEach(function($){for(var se=$[0],fe=$[1],le=O.slice(se,fe+1),me=le.length;me--;)O[fe-me]=le[me]}),O}return e.closingToOpeningBracket=E,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=w,e.getEmbeddingLevels=xe,e.getMirroredCharacter=De,e.getMirroredCharactersMap=U,e.getReorderSegments=Oe,e.getReorderedIndices=Re,e.getReorderedString=Ae,e.openingToClosingBracket=v,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}const Tm=/\bvoid\s+main\s*\(\s*\)\s*{/g;function mu(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Ke[i];return r?mu(r):n}return s.replace(e,t)}const zt=[];for(let s=0;s<256;s++)zt[s]=(s<16?"0":"")+s.toString(16);function fT(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[s&255]+zt[s>>8&255]+zt[s>>16&255]+zt[s>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toUpperCase()}const pr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},dT=Date.now(),ld=new WeakMap,cd=new Map;let pT=1e10;function gu(s,e){const t=vT(e);let n=ld.get(s);if(n||ld.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,u){s.onBeforeCompile.call(this,c,u);const h=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=cd[h];if(!f){const d=mT(this,c,e,t);f=cd[h]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,pr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-dT}}),this[i]&&this[i](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:s}),Object.defineProperty(u,"id",{value:pT++}),u.uuid=fT(),u.uniforms=pr({},c.uniforms,e.uniforms),u.defines=pr({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=pr({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const u=this.baseMaterial;return c===u||u.isDerivedMaterial&&u.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(pr(this.extensions,c.extensions),pr(this.defines,c.defines),pr(this.uniforms,Cu.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=gu(s.isDerivedMaterial?s.getDepthMaterial():new op({depthPacking:Hd}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=gu(s.isDerivedMaterial?s.getDistanceMaterial():new lp,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),s.dispose.call(this)}}};return n[t]=a,new a}function mT(s,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:u,fragmentMainOutro:h,fragmentColorTransform:f,customRewriter:d,timeUniform:_}=n;if(r=r||"",a=a||"",o=o||"",c=c||"",u=u||"",h=h||"",(l||d)&&(e=mu(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=mu(t)),d){let g=d({vertexShader:e,fragmentShader:t});e=g.vertexShader,t=g.fragmentShader}if(f){let g=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(g.push(p),"")),h=`${f}
${g.join(`
`)}
${h}`}if(_){const g=`
uniform float ${_};
`;r=g+r,c=g+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(g,p,m,x)=>/\battribute\s+vec[23]\s+$/.test(x.substr(0,m))?p:`troika_${p}_${i}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=ud(e,i,r,a,o),t=ud(t,i,c,u,h),{vertexShader:e,fragmentShader:t}}function ud(s,e,t,n,i){return(n||i||t)&&(s=s.replace(Tm,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function gT(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let _T=0;const hd=new Map;function vT(s){const e=JSON.stringify(s,gT);let t=hd.get(e);return t==null&&hd.set(e,t=++_T),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function xT(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(i){var r=e._bin,a=new Uint8Array(i);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],u=0;u<l;u++){var h=r.readUint(a,o);o+=4,c.push(e._readFont(a,h))}return c}return[e._readFont(a,0)]},_readFont:function(i,r){var a=e._bin,o=r;a.readFixed(i,r),r+=4;var l=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],u={_data:i,_offset:o},h={},f=0;f<l;f++){var d=a.readASCII(i,r,4);r+=4,a.readUint(i,r),r+=4;var _=a.readUint(i,r);r+=4;var g=a.readUint(i,r);r+=4,h[d]={offset:_,length:g}}for(f=0;f<c.length;f++){var p=c[f];h[p]&&(u[p.trim()]=e[p.trim()].parse(i,h[p].offset,h[p].length,u))}return u},_tabOffset:function(i,r,a){for(var o=e._bin,l=o.readUshort(i,a+4),c=a+12,u=0;u<l;u++){var h=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var f=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,h==r)return f}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(i,r+2*l));return o},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(i[r+l]);return o},readUnicode:function(i,r,a){for(var o="",l=0;l<a;l++){var c=i[r++]<<8|i[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,a){var o=e._bin._tdec;return o&&r==0&&a==i.length?o.decode(i):e._bin.readASCII(i,r,a)},readBytes:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(i[r+l]);return o},readASCIIArray:function(i,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(i[r+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,a,o,l){var c=e._bin,u={},h=r;c.readFixed(i,r),r+=4;var f=c.readUshort(i,r);r+=2;var d=c.readUshort(i,r);r+=2;var _=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,h+f),u.featureList=e._lctf.readFeatureList(i,h+d),u.lookupList=e._lctf.readLookupList(i,h+_,l),u},e._lctf.readLookupList=function(i,r,a){var o=e._bin,l=r,c=[],u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=o.readUshort(i,r);r+=2;var d=e._lctf.readLookupTable(i,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(i,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(i,r),r+=2,c.flag=o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;for(var h=c.ltype,f=0;f<u;f++){var d=o.readUshort(i,r);r+=2;var _=a(i,h,l+d,c);c.tabs.push(_)}return c},e._lctf.numOfOnes=function(i){for(var r=0,a=0;a<32;a++)(i>>>a&1)!=0&&r++;return r},e._lctf.readClassDef=function(i,r){var a=e._bin,o=[],l=a.readUshort(i,r);if(r+=2,l==1){var c=a.readUshort(i,r);r+=2;var u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++)o.push(c+h),o.push(c+h),o.push(a.readUshort(i,r)),r+=2}if(l==2){var f=a.readUshort(i,r);for(r+=2,h=0;h<f;h++)o.push(a.readUshort(i,r)),r+=2,o.push(a.readUshort(i,r)),r+=2,o.push(a.readUshort(i,r)),r+=2}return o},e._lctf.getInterval=function(i,r){for(var a=0;a<i.length;a+=3){var o=i[a],l=i[a+1];if(i[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(i,r){var a=e._bin,o={};o.fmt=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(i,r,l)),o.fmt==2&&(o.tab=a.readUshorts(i,r,3*l)),o},e._lctf.coverageIndex=function(i,r){var a=i.tab;if(i.fmt==1)return a.indexOf(r);if(i.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(i,r,4);r+=4;var f=a.readUshort(i,r);r+=2;var d=e._lctf.readFeatureTable(i,o+f);d.tag=h.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2,c>0&&(l.featureParams=o+c);var u=a.readUshort(i,r);r+=2,l.tab=[];for(var h=0;h<u;h++)l.tab.push(a.readUshort(i,r+2*h));return l},e._lctf.readScriptList=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readASCII(i,r,4);r+=4;var f=a.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readScriptTable(i,o+f)}return l},e._lctf.readScriptTable=function(i,r){var a=e._bin,o=r,l={},c=a.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var u=a.readUshort(i,r);r+=2;for(var h=0;h<u;h++){var f=a.readASCII(i,r,4);r+=4;var d=a.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(i,o+d)}return l},e._lctf.readLangSysTable=function(i,r){var a=e._bin,o={};a.readUshort(i,r),r+=2,o.reqFeature=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);return r+=2,o.features=a.readUshorts(i,r,l),o},e.CFF={},e.CFF.parse=function(i,r,a){var o=e._bin;(i=new Uint8Array(i.buffer,r,a))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var h=[];r=e.CFF.readIndex(i,r,h);var f=[];for(u=0;u<h.length-1;u++)f.push(e.CFF.readDict(i,r+h[u],r+h[u+1]));r+=h[h.length-1];var d=f[0],_=[];r=e.CFF.readIndex(i,r,_);var g=[];for(u=0;u<_.length-1;u++)g.push(o.readASCII(i,r+_[u],_[u+1]-_[u]));if(r+=_[_.length-1],e.CFF.readSubrs(i,r,d),d.CharStrings){r=d.CharStrings,_=[],r=e.CFF.readIndex(i,r,_);var p=[];for(u=0;u<_.length-1;u++)p.push(o.readBytes(i,r+_[u],_[u+1]-_[u]));d.CharStrings=p}if(d.ROS){r=d.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),d.FDArray=[],u=0;u<m.length-1;u++){var x=e.CFF.readDict(i,r+m[u],r+m[u+1]);e.CFF._readFDict(i,x,g),d.FDArray.push(x)}r+=m[m.length-1],r=d.FDSelect,d.FDSelect=[];var y=i[r];if(r++,y!=3)throw y;var v=o.readUshort(i,r);for(r+=2,u=0;u<v+1;u++)d.FDSelect.push(o.readUshort(i,r),i[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(i,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(i,d.charset,d.CharStrings.length)),e.CFF._readFDict(i,d,g),d},e.CFF._readFDict=function(i,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(i,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(i,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var h=0;h<l.length-1;h++)a.Subrs.push(o.readBytes(i,r+l[h],l[h+1]-l[h]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var a=0;a<i.charset.length;a++)if(i.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,a){e._bin;var o=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)o.push(i[r+u]);return o},e.CFF.readCharset=function(i,r,a){var o=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<a;u++){var h=o.readUshort(i,r);r+=2,l.push(h)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){h=o.readUshort(i,r),r+=2;var f=0;for(c==1?(f=i[r],r++):(f=o.readUshort(i,r),r+=2),u=0;u<=f;u++)l.push(h),h++}}return l},e.CFF.readIndex=function(i,r,a){var o=e._bin,l=o.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)a.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)a.push(o.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)a.push(16777215&o.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,a){var o=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,h=null,f=null;l<=20&&(h=l,u=1),l==12&&(h=100*l+c,u=2),21<=l&&l<=27&&(h=l,u=1),l==28&&(f=o.readShort(i,r+1),u=3),29<=l&&l<=31&&(h=l,u=1),32<=l&&l<=246&&(f=l-139,u=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,u=2),l==255&&(f=o.readInt(i,r+1)/65535,u=5),a.val=f??"o"+h,a.size=u},e.CFF.readCharString=function(i,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,_=null;u<=20&&(d=u,f=1),u==12&&(d=100*u+h,f=2),u!=19&&u!=20||(d=u,f=2),21<=u&&u<=27&&(d=u,f=1),u==28&&(_=l.readShort(i,r+1),f=3),29<=u&&u<=31&&(d=u,f=1),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255&&(_=l.readInt(i,r+1)/65535,f=5),c.push(_??"o"+d),r+=f}return c},e.CFF.readDict=function(i,r,a){for(var o=e._bin,l={},c=[];r<a;){var u=i[r],h=i[r+1];i[r+2],i[r+3],i[r+4];var f=1,d=null,_=null;if(u==28&&(_=o.readShort(i,r+1),f=3),u==29&&(_=o.readInt(i,r+1),f=5),32<=u&&u<=246&&(_=u-139,f=1),247<=u&&u<=250&&(_=256*(u-247)+h+108,f=2),251<=u&&u<=254&&(_=256*-(u-251)-h-108,f=2),u==255)throw _=o.readInt(i,r+1)/65535,f=5,"unknown number";if(u==30){var g=[];for(f=1;;){var p=i[r+f];f++;var m=p>>4,x=15&p;if(m!=15&&g.push(m),x!=15&&g.push(x),x==15)break}for(var y="",v=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],E=0;E<g.length;E++)y+=v[g[E]];_=parseFloat(y)}u<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],f=1,u==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][h],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(_),r+=f}return l},e.cmap={},e.cmap.parse=function(i,r,a){i=new Uint8Array(i.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var h=0;h<c;h++){var f=o.readUshort(i,r);r+=2;var d=o.readUshort(i,r);r+=2;var _=o.readUint(i,r);r+=4;var g="p"+f+"e"+d,p=u.indexOf(_);if(p==-1){var m;p=l.tables.length,u.push(_);var x=o.readUshort(i,_);x==0?m=e.cmap.parse0(i,_):x==4?m=e.cmap.parse4(i,_):x==6?m=e.cmap.parse6(i,_):x==12?m=e.cmap.parse12(i,_):console.debug("unknown format: "+x,f,d,_),l.tables.push(m)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=p}return l},e.cmap.parse0=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[r+c]);return o},e.cmap.parse4=function(i,r){var a=e._bin,o=r,l={};l.format=a.readUshort(i,r),r+=2;var c=a.readUshort(i,r);r+=2,a.readUshort(i,r),r+=2;var u=a.readUshort(i,r);r+=2;var h=u/2;l.searchRange=a.readUshort(i,r),r+=2,l.entrySelector=a.readUshort(i,r),r+=2,l.rangeShift=a.readUshort(i,r),r+=2,l.endCount=a.readUshorts(i,r,h),r+=2*h,r+=2,l.startCount=a.readUshorts(i,r,h),r+=2*h,l.idDelta=[];for(var f=0;f<h;f++)l.idDelta.push(a.readShort(i,r)),r+=2;for(l.idRangeOffset=a.readUshorts(i,r,h),r+=2*h,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,a.readUshort(i,r),r+=2,o.firstCode=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(i,r)),r+=2;return o},e.cmap.parse12=function(i,r){var a=e._bin,o={};o.format=a.readUshort(i,r),r+=2,r+=2,a.readUint(i,r),r+=4,a.readUint(i,r),r+=4;var l=a.readUint(i,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var u=r+12*c,h=a.readUint(i,u+0),f=a.readUint(i,u+4),d=a.readUint(i,u+8);o.groups.push([h,f,d])}return o},e.glyf={},e.glyf.parse=function(i,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var a=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(a.readUshort(o,l)),l+=2;var h=a.readUshort(o,l);if(l+=2,o.length-l<h)return null;c.instructions=a.readBytes(o,l,h),l+=h;var f=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<f;u++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var _=o[l];l++;for(var g=0;g<_;g++)c.flags.push(d),u++}}for(c.xs=[],u=0;u<f;u++){var p=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<f;u++)p=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var x=0,y=0;for(u=0;u<f;u++)x+=c.xs[u],y+=c.ys[u],c.xs[u]=x,c.ys[u]=y}else{var v;c.parts=[];do{v=a.readUshort(o,l),l+=2;var E={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(E),E.glyphIndex=a.readUshort(o,l),l+=2,1&v){var w=a.readShort(o,l);l+=2;var T=a.readShort(o,l);l+=2}else w=a.readInt8(o,l),l++,T=a.readInt8(o,l),l++;2&v?(E.m.tx=w,E.m.ty=T):(E.p1=w,E.p2=T),8&v?(E.m.a=E.m.d=a.readF2dot14(o,l),l+=2):64&v?(E.m.a=a.readF2dot14(o,l),l+=2,E.m.d=a.readF2dot14(o,l),l+=2):128&v&&(E.m.a=a.readF2dot14(o,l),l+=2,E.m.b=a.readF2dot14(o,l),l+=2,E.m.c=a.readF2dot14(o,l),l+=2,E.m.d=a.readF2dot14(o,l),l+=2)}while(32&v);if(256&v){var R=a.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<R;u++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,a,o){return e._lctf.parse(i,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(i,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var h=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,h+c)}if(r==1&&u.fmt==1){var f=l.readUshort(i,a);a+=2,f!=0&&(u.pos=e.GPOS.readValueRecord(i,a,f))}else if(r==2&&u.fmt>=1&&u.fmt<=2){f=l.readUshort(i,a),a+=2;var d=l.readUshort(i,a);a+=2;var _=e._lctf.numOfOnes(f),g=e._lctf.numOfOnes(d);if(u.fmt==1){u.pairsets=[];var p=l.readUshort(i,a);a+=2;for(var m=0;m<p;m++){var x=c+l.readUshort(i,a);a+=2;var y=l.readUshort(i,x);x+=2;for(var v=[],E=0;E<y;E++){var w=l.readUshort(i,x);x+=2,f!=0&&(D=e.GPOS.readValueRecord(i,x,f),x+=2*_),d!=0&&(L=e.GPOS.readValueRecord(i,x,d),x+=2*g),v.push({gid2:w,val1:D,val2:L})}u.pairsets.push(v)}}if(u.fmt==2){var T=l.readUshort(i,a);a+=2;var R=l.readUshort(i,a);a+=2;var S=l.readUshort(i,a);a+=2;var M=l.readUshort(i,a);for(a+=2,u.classDef1=e._lctf.readClassDef(i,c+T),u.classDef2=e._lctf.readClassDef(i,c+R),u.matrix=[],m=0;m<S;m++){var P=[];for(E=0;E<M;E++){var D=null,L=null;f!=0&&(D=e.GPOS.readValueRecord(i,a,f),a+=2*_),d!=0&&(L=e.GPOS.readValueRecord(i,a,d),a+=2*g),P.push({val1:D,val2:L})}u.matrix.push(P)}}}else if(r==4&&u.fmt==1)u.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else if(r==6&&u.fmt==1)u.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,a)+c),u.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,a+2)+c),u.markClassCount=l.readUshort(i,a+4),u.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,a+6)+c),u.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,a+8)+c,u.markClassCount);else{if(r==9&&u.fmt==1){var F=l.readUshort(i,a);a+=2;var G=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=F;else if(o.ltype!=F)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+G)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(i,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(i,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(i,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(i,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(i,r,a){var o=e._bin,l=[],c=r,u=o.readUshort(i,r);r+=2;for(var h=0;h<u;h++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(i,r){var a=e._bin,o=[],l=r,c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=e.GPOS.readAnchorRecord(i,a.readUshort(i,r+2)+l);h.markClass=a.readUshort(i,r),o.push(h),r+=4}return o},e.GPOS.readAnchorRecord=function(i,r){var a=e._bin,o={};return o.fmt=a.readUshort(i,r),o.x=a.readShort(i,r+2),o.y=a.readShort(i,r+4),o},e.GSUB={},e.GSUB.parse=function(i,r,a,o){return e._lctf.parse(i,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(i,r,a,o){var l=e._bin,c=a,u={};if(u.fmt=l.readUshort(i,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var h=l.readUshort(i,a);a+=2,u.coverage=e._lctf.readCoverage(i,c+h)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,a),a+=2;else if(u.fmt==2){var f=l.readUshort(i,a);a+=2,u.newg=l.readUshorts(i,a,f),a+=2*u.newg.length}}else if(r==2&&u.fmt==1){f=l.readUshort(i,a),a+=2,u.seqs=[];for(var d=0;d<f;d++){var _=l.readUshort(i,a)+c;a+=2;var g=l.readUshort(i,_);u.seqs.push(l.readUshorts(i,_+2,g))}}else if(r==4)for(u.vals=[],f=l.readUshort(i,a),a+=2,d=0;d<f;d++){var p=l.readUshort(i,a);a+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+p))}else if(r==5&&u.fmt==2){if(u.fmt==2){var m=l.readUshort(i,a);a+=2,u.cDef=e._lctf.readClassDef(i,c+m),u.scset=[];var x=l.readUshort(i,a);for(a+=2,d=0;d<x;d++){var y=l.readUshort(i,a);a+=2,u.scset.push(y==0?null:e.GSUB.readSubClassSet(i,c+y))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(d=0;d<3;d++){f=l.readUshort(i,a),a+=2;for(var v=[],E=0;E<f;E++)v.push(e._lctf.readCoverage(i,c+l.readUshort(i,a+2*E)));a+=2*f,d==0&&(u.backCvg=v),d==1&&(u.inptCvg=v),d==2&&(u.ahedCvg=v)}f=l.readUshort(i,a),a+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,a,f)}}else{if(r==7&&u.fmt==1){var w=l.readUshort(i,a);a+=2;var T=l.readUint(i,a);if(a+=4,o.ltype==9)o.ltype=w;else if(o.ltype!=w)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+T)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var a=e._bin.readUshort,o=r,l=[],c=a(i,r);r+=2;for(var u=0;u<c;u++){var h=a(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,o+h))}return l},e.GSUB.readSubClassRule=function(i,r){var a=e._bin.readUshort,o={},l=a(i,r),c=a(i,r+=2);r+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(a(i,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),o},e.GSUB.readSubstLookupRecords=function(i,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(i,r),o(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,o+h))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=a.readUshort(i,r);r+=2,c==1&&u--,o[l[c]]=a.readUshorts(i,r,u),r+=2*o[l[c]].length}return u=a.readUshort(i,r),r+=2,o.subst=a.readUshorts(i,r,2*u),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,r){var a=e._bin,o=r,l=[],c=a.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var h=a.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,o+h))}return l},e.GSUB.readLigature=function(i,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(i,r),r+=2;var l=a.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(i,r)),r+=2;return o},e.head={},e.head.parse=function(i,r,a){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.fontRevision=o.readFixed(i,r),r+=4,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4,l.flags=o.readUshort(i,r),r+=2,l.unitsPerEm=o.readUshort(i,r),r+=2,l.created=o.readUint64(i,r),r+=8,l.modified=o.readUint64(i,r),r+=8,l.xMin=o.readShort(i,r),r+=2,l.yMin=o.readShort(i,r),r+=2,l.xMax=o.readShort(i,r),r+=2,l.yMax=o.readShort(i,r),r+=2,l.macStyle=o.readUshort(i,r),r+=2,l.lowestRecPPEM=o.readUshort(i,r),r+=2,l.fontDirectionHint=o.readShort(i,r),r+=2,l.indexToLocFormat=o.readShort(i,r),r+=2,l.glyphDataFormat=o.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,a){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.ascender=o.readShort(i,r),r+=2,l.descender=o.readShort(i,r),r+=2,l.lineGap=o.readShort(i,r),r+=2,l.advanceWidthMax=o.readUshort(i,r),r+=2,l.minLeftSideBearing=o.readShort(i,r),r+=2,l.minRightSideBearing=o.readShort(i,r),r+=2,l.xMaxExtent=o.readShort(i,r),r+=2,l.caretSlopeRise=o.readShort(i,r),r+=2,l.caretSlopeRun=o.readShort(i,r),r+=2,l.caretOffset=o.readShort(i,r),r+=2,r+=8,l.metricDataFormat=o.readShort(i,r),r+=2,l.numberOfHMetrics=o.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,h=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,h=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(h);return c},e.kern={},e.kern.parse=function(i,r,a,o){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,a,o);var u=l.readUshort(i,r);r+=2;for(var h={glyph1:[],rval:[]},f=0;f<u;f++){r+=2,a=l.readUshort(i,r),r+=2;var d=l.readUshort(i,r);r+=2;var _=d>>>8;if((_&=15)!=0)throw"unknown kern table format: "+_;r=e.kern.readFormat0(i,r,h)}return h},e.kern.parseV1=function(i,r,a,o){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},h=0;h<c;h++){l.readUint(i,r),r+=4;var f=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,a){var o=e._bin,l=-1,c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var h=o.readUshort(i,r);r+=2;var f=o.readUshort(i,r);r+=2;var d=o.readShort(i,r);r+=2,h!=l&&(a.glyph1.push(h),a.rval.push({glyph2:[],vals:[]}));var _=a.rval[a.rval.length-1];_.glyph2.push(f),_.vals.push(d),l=h}return r},e.loca={},e.loca.parse=function(i,r,a,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,h=o.maxp.numGlyphs+1;if(u==0)for(var f=0;f<h;f++)c.push(l.readUshort(i,r+(f<<1))<<1);if(u==1)for(f=0;f<h;f++)c.push(l.readUint(i,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,a){var o=e._bin,l={},c=o.readUint(i,r);return r+=4,l.numGlyphs=o.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(i,r),r+=2,l.maxContours=o.readUshort(i,r),r+=2,l.maxCompositePoints=o.readUshort(i,r),r+=2,l.maxCompositeContours=o.readUshort(i,r),r+=2,l.maxZones=o.readUshort(i,r),r+=2,l.maxTwilightPoints=o.readUshort(i,r),r+=2,l.maxStorage=o.readUshort(i,r),r+=2,l.maxFunctionDefs=o.readUshort(i,r),r+=2,l.maxInstructionDefs=o.readUshort(i,r),r+=2,l.maxStackElements=o.readUshort(i,r),r+=2,l.maxSizeOfInstructions=o.readUshort(i,r),r+=2,l.maxComponentElements=o.readUshort(i,r),r+=2,l.maxComponentDepth=o.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,a){var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r);for(var u,h=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var _=o.readUshort(i,r);r+=2;var g=o.readUshort(i,r);r+=2;var p=o.readUshort(i,r);r+=2;var m=o.readUshort(i,r);r+=2;var x=o.readUshort(i,r);r+=2;var y=o.readUshort(i,r);r+=2;var v,E=h[m],w=f+12*c+y;if(_==0)v=o.readUnicode(i,w,x/2);else if(_==3&&g==0)v=o.readUnicode(i,w,x/2);else if(g==0)v=o.readASCII(i,w,x);else if(g==1)v=o.readUnicode(i,w,x/2);else if(g==3)v=o.readUnicode(i,w,x/2);else{if(_!=1)throw"unknown encoding "+g+", platformID: "+_;v=o.readASCII(i,w,x),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var T="p"+_+","+p.toString(16);l[T]==null&&(l[T]={}),l[T][E!==void 0?E:m]=v,l[T]._lang=p}for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==1033)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==0)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==3084)return l[R];for(var R in l)if(l[R].postScriptName!=null)return l[R];for(var R in l){u=R;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,a){var o=e._bin.readUshort(i,r);r+=2;var l={};if(o==0)e["OS/2"].version0(i,r,l);else if(o==1)e["OS/2"].version1(i,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(i,r),r+=2,a.usWeightClass=o.readUshort(i,r),r+=2,a.usWidthClass=o.readUshort(i,r),r+=2,a.fsType=o.readUshort(i,r),r+=2,a.ySubscriptXSize=o.readShort(i,r),r+=2,a.ySubscriptYSize=o.readShort(i,r),r+=2,a.ySubscriptXOffset=o.readShort(i,r),r+=2,a.ySubscriptYOffset=o.readShort(i,r),r+=2,a.ySuperscriptXSize=o.readShort(i,r),r+=2,a.ySuperscriptYSize=o.readShort(i,r),r+=2,a.ySuperscriptXOffset=o.readShort(i,r),r+=2,a.ySuperscriptYOffset=o.readShort(i,r),r+=2,a.yStrikeoutSize=o.readShort(i,r),r+=2,a.yStrikeoutPosition=o.readShort(i,r),r+=2,a.sFamilyClass=o.readShort(i,r),r+=2,a.panose=o.readBytes(i,r,10),r+=10,a.ulUnicodeRange1=o.readUint(i,r),r+=4,a.ulUnicodeRange2=o.readUint(i,r),r+=4,a.ulUnicodeRange3=o.readUint(i,r),r+=4,a.ulUnicodeRange4=o.readUint(i,r),r+=4,a.achVendID=[o.readInt8(i,r),o.readInt8(i,r+1),o.readInt8(i,r+2),o.readInt8(i,r+3)],r+=4,a.fsSelection=o.readUshort(i,r),r+=2,a.usFirstCharIndex=o.readUshort(i,r),r+=2,a.usLastCharIndex=o.readUshort(i,r),r+=2,a.sTypoAscender=o.readShort(i,r),r+=2,a.sTypoDescender=o.readShort(i,r),r+=2,a.sTypoLineGap=o.readShort(i,r),r+=2,a.usWinAscent=o.readUshort(i,r),r+=2,a.usWinDescent=o.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,a){var o=e._bin;return r=e["OS/2"].version0(i,r,a),a.ulCodePageRange1=o.readUint(i,r),r+=4,a.ulCodePageRange2=o.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,a){var o=e._bin;return r=e["OS/2"].version1(i,r,a),a.sxHeight=o.readShort(i,r),r+=2,a.sCapHeight=o.readShort(i,r),r+=2,a.usDefault=o.readUshort(i,r),r+=2,a.usBreak=o.readUshort(i,r),r+=2,a.usMaxContext=o.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,a){var o=e._bin;return r=e["OS/2"].version2(i,r,a),a.usLowerOpticalPointSize=o.readUshort(i,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,a){var o=e._bin,l={};return l.version=o.readFixed(i,r),r+=4,l.italicAngle=o.readFixed(i,r),r+=4,l.underlinePosition=o.readShort(i,r),r+=2,l.underlineThickness=o.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var a=i.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var h=l.groups[u];if(h[0]<=r&&r<=h[1])return h[2]+(r-h[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var a={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var o=i.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[r]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var h=0;c.FDSelect[h+2]<=r;)h+=2;u=c.FDArray[c.FDSelect[h+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,a)}else i.glyf&&e.U._drawGlyf(r,i,a);return a},e.U._drawGlyf=function(i,r,a){var o=r.glyf[i];o==null&&(o=r.glyf[i]=e.glyf._parseGlyf(r,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(i,r){for(var a=0;a<i.noc;a++){for(var o=a==0?0:i.endPts[a-1]+1,l=i.endPts[a],c=o;c<=l;c++){var u=c==o?l:c-1,h=c==l?o:c+1,f=1&i.flags[c],d=1&i.flags[u],_=1&i.flags[h],g=i.xs[c],p=i.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,g,p);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else d?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+g)/2,(i.ys[u]+p)/2);f?d&&e.U.P.lineTo(r,g,p):_?e.U.P.qcurveTo(r,g,p,i.xs[h],i.ys[h]):e.U.P.qcurveTo(r,g,p,(g+i.xs[h])/2,(p+i.ys[h])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,a){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,h=0;h<l.crds.length;h+=2){var f=l.crds[h],d=l.crds[h+1];a.crds.push(f*u.a+d*u.b+u.tx),a.crds.push(f*u.c+d*u.d+u.ty)}for(h=0;h<l.cmds.length;h++)a.cmds.push(l.cmds[h])}},e.U._getGlyphClass=function(i,r){var a=e._lctf.getInterval(r,i);return a==-1?0:r[a+2]},e.U._applySubs=function(i,r,a,o){for(var l=i.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var u,h=a.tabs[c];if(!h.coverage||(u=e._lctf.coverageIndex(h.coverage,i[r]))!=-1){if(a.ltype==1)i[r],h.fmt==1?i[r]=i[r]+h.delta:i[r]=h.newg[u];else if(a.ltype==4)for(var f=h.vals[u],d=0;d<f.length;d++){var _=f[d],g=_.chain.length;if(!(g>l)){for(var p=!0,m=0,x=0;x<g;x++){for(;i[r+m+(1+x)]==-1;)m++;_.chain[x]!=i[r+m+(1+x)]&&(p=!1)}if(p){for(i[r]=_.nglyph,x=0;x<g+m;x++)i[r+x+1]=-1;break}}}else if(a.ltype==5&&h.fmt==2)for(var y=e._lctf.getInterval(h.cDef,i[r]),v=h.cDef[y+2],E=h.scset[v],w=0;w<E.length;w++){var T=E[w],R=T.input;if(!(R.length>l)){for(p=!0,x=0;x<R.length;x++){var S=e._lctf.getInterval(h.cDef,i[r+1+x]);if(y==-1&&h.cDef[S+2]!=R[x]){p=!1;break}}if(p){var M=T.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(a.ltype==6&&h.fmt==3){if(!e.U._glsCovered(i,h.backCvg,r-h.backCvg.length)||!e.U._glsCovered(i,h.inptCvg,r)||!e.U._glsCovered(i,h.ahedCvg,r+h.inptCvg.length))continue;var P=h.lookupRec;for(w=0;w<P.length;w+=2){y=P[w];var D=o[P[w+1]];e.U._applySubs(i,r+y,D,o)}}}}},e.U._glsCovered=function(i,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],i[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var h=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(i,u),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,h))}}return o},e.U.P={},e.U.P.moveTo=function(i,r,a){i.cmds.push("M"),i.crds.push(r,a)},e.U.P.lineTo=function(i,r,a){i.cmds.push("L"),i.crds.push(r,a)},e.U.P.curveTo=function(i,r,a,o,l,c,u){i.cmds.push("C"),i.crds.push(r,a,o,l,c,u)},e.U.P.qcurveTo=function(i,r,a,o,l){i.cmds.push("Q"),i.crds.push(r,a,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,a,o,l){for(var c=r.stack,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open,_=0,g=r.x,p=r.y,m=0,x=0,y=0,v=0,E=0,w=0,T=0,R=0,S=0,M=0,P={val:0,size:0};_<i.length;){e.CFF.getCharString(i,_,P);var D=P.val;if(_+=P.size,D=="o1"||D=="o18")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(D=="o3"||D=="o23")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0;else if(D=="o4")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),d&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,g,p),d=!0;else if(D=="o5")for(;c.length>0;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);else if(D=="o6"||D=="o7")for(var L=c.length,F=D=="o6",G=0;G<L;G++){var B=c.shift();F?g+=B:p+=B,F=!F,e.U.P.lineTo(l,g,p)}else if(D=="o8"||D=="o24"){L=c.length;for(var j=0;j+6<=L;)m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p),j+=6;D=="o24"&&(g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p))}else{if(D=="o11")break;if(D=="o1234"||D=="o1235"||D=="o1236"||D=="o1237")D=="o1234"&&(x=p,y=(m=g+c.shift())+c.shift(),M=v=x+c.shift(),w=v,R=p,g=(T=(E=(S=y+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,T,R,g,p)),D=="o1235"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),S=y+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),T=E+c.shift(),R=w+c.shift(),g=T+c.shift(),p=R+c.shift(),c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,T,R,g,p)),D=="o1236"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),M=v=x+c.shift(),w=v,T=(E=(S=y+c.shift())+c.shift())+c.shift(),R=w+c.shift(),g=T+c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,T,R,g,p)),D=="o1237"&&(m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),S=y+c.shift(),M=v+c.shift(),E=S+c.shift(),w=M+c.shift(),T=E+c.shift(),R=w+c.shift(),Math.abs(T-g)>Math.abs(R-p)?g=T+c.shift():p=R+c.shift(),e.U.P.curveTo(l,m,x,y,v,S,M),e.U.P.curveTo(l,E,w,T,R,g,p));else if(D=="o14"){if(c.length>0&&!h&&(f=c.shift()+a.nominalWidthX,h=!0),c.length==4){var H=c.shift(),Z=c.shift(),Y=c.shift(),I=c.shift(),W=e.CFF.glyphBySE(a,Y),ee=e.CFF.glyphBySE(a,I);e.U._drawCFF(a.CharStrings[W],r,a,o,l),r.x=H,r.y=Z,e.U._drawCFF(a.CharStrings[ee],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(D=="o19"||D=="o20")c.length%2!=0&&!h&&(f=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,h=!0,_+=u+7>>3;else if(D=="o21")c.length>2&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),p+=c.pop(),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(D=="o22")c.length>1&&!h&&(f=c.shift()+o.nominalWidthX,h=!0),g+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,g,p),d=!0;else if(D=="o25"){for(;c.length>6;)g+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,g,p);m=g+c.shift(),x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p)}else if(D=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)m=g,x=p+c.shift(),g=y=m+c.shift(),p=(v=x+c.shift())+c.shift(),e.U.P.curveTo(l,m,x,y,v,g,p);else if(D=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)x=p,y=(m=g+c.shift())+c.shift(),v=x+c.shift(),g=y+c.shift(),p=v,e.U.P.curveTo(l,m,x,y,v,g,p);else if(D=="o10"||D=="o29"){var N=D=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var k=c.pop(),ne=N.Subrs[k+N.Bias];r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d,e.U._drawCFF(ne,r,a,o,l),g=r.x,p=r.y,u=r.nStems,h=r.haveWidth,f=r.width,d=r.open}}else if(D=="o30"||D=="o31"){var X=c.length,ie=(j=0,D=="o31");for(j+=X-(L=-3&X);j<L;)ie?(x=p,y=(m=g+c.shift())+c.shift(),p=(v=x+c.shift())+c.shift(),L-j==5?(g=y+c.shift(),j++):g=y,ie=!1):(m=g,x=p+c.shift(),y=m+c.shift(),v=x+c.shift(),g=y+c.shift(),L-j==5?(p=v+c.shift(),j++):p=v,ie=!0),e.U.P.curveTo(l,m,x,y,v,g,p),j+=4}else{if((D+"").charAt(0)=="o")throw console.debug("Unknown operation: "+D,i),D;c.push(D)}}}r.x=g,r.y=p,r.nStems=u,r.haveWidth=h,r.width=f,r.open=d};var t=e,n={Typr:t};return s.Typr=t,s.default=n,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function yT(){return function(s){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(D,L){for(var F=new t(31),G=0;G<31;++G)F[G]=L+=1<<D[G-1];var B=new n(F[30]);for(G=1;G<30;++G)for(var j=F[G];j<F[G+1];++j)B[j]=j-F[G]<<5|G;return[F,B]},l=o(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var h=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var _=(43690&d)>>>1|(21845&d)<<1;_=(61680&(_=(52428&_)>>>2|(13107&_)<<2))>>>4|(3855&_)<<4,f[d]=((65280&_)>>>8|(255&_)<<8)>>>1}var g=function(D,L,F){for(var G=D.length,B=0,j=new t(L);B<G;++B)++j[D[B]-1];var H,Z=new t(L);for(B=0;B<L;++B)Z[B]=Z[B-1]+j[B-1]<<1;{H=new t(1<<L);var Y=15-L;for(B=0;B<G;++B)if(D[B])for(var I=B<<4|D[B],W=L-D[B],ee=Z[D[B]-1]++<<W,N=ee|(1<<W)-1;ee<=N;++ee)H[f[ee]>>>Y]=I}return H},p=new e(288);for(d=0;d<144;++d)p[d]=8;for(d=144;d<256;++d)p[d]=9;for(d=256;d<280;++d)p[d]=7;for(d=280;d<288;++d)p[d]=8;var m=new e(32);for(d=0;d<32;++d)m[d]=5;var x=g(p,9),y=g(m,5),v=function(D){for(var L=D[0],F=1;F<D.length;++F)D[F]>L&&(L=D[F]);return L},E=function(D,L,F){var G=L/8|0;return(D[G]|D[G+1]<<8)>>(7&L)&F},w=function(D,L){var F=L/8|0;return(D[F]|D[F+1]<<8|D[F+2]<<16)>>(7&L)},T=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(D,L,F){var G=new Error(L||T[D]);if(G.code=D,Error.captureStackTrace&&Error.captureStackTrace(G,R),!F)throw G;return G},S=function(D,L,F){var G=D.length;if(!G||F&&!F.l&&G<5)return L||new e(0);var B=!L||F,j=!F||F.i;F||(F={}),L||(L=new e(3*G));var H,Z=function(oe){var Ue=L.length;if(oe>Ue){var Fe=new e(Math.max(2*Ue,oe));Fe.set(L),L=Fe}},Y=F.f||0,I=F.p||0,W=F.b||0,ee=F.l,N=F.d,k=F.m,ne=F.n,X=8*G;do{if(!ee){F.f=Y=E(D,I,1);var ie=E(D,I+1,3);if(I+=3,!ie){var xe=D[(de=((H=I)/8|0)+(7&H&&1)+4)-4]|D[de-3]<<8,_e=de+xe;if(_e>G){j&&R(0);break}B&&Z(W+xe),L.set(D.subarray(de,_e),W),F.b=W+=xe,F.p=I=8*_e;continue}if(ie==1)ee=x,N=y,k=9,ne=5;else if(ie==2){var ve=E(D,I,31)+257,he=E(D,I+10,15)+4,De=ve+E(D,I+5,31)+1;I+=14;for(var U=new e(De),Oe=new e(19),Ae=0;Ae<he;++Ae)Oe[a[Ae]]=E(D,I+3*Ae,7);I+=3*he;var Re=v(Oe),ae=(1<<Re)-1,be=g(Oe,Re);for(Ae=0;Ae<De;){var de,A=be[E(D,I,ae)];if(I+=15&A,(de=A>>>4)<16)U[Ae++]=de;else{var b=0,O=0;for(de==16?(O=3+E(D,I,3),I+=2,b=U[Ae-1]):de==17?(O=3+E(D,I,7),I+=3):de==18&&(O=11+E(D,I,127),I+=7);O--;)U[Ae++]=b}}var Q=U.subarray(0,ve),$=U.subarray(ve);k=v(Q),ne=v($),ee=g(Q,k),N=g($,ne)}else R(1);if(I>X){j&&R(0);break}}B&&Z(W+131072);for(var se=(1<<k)-1,fe=(1<<ne)-1,le=I;;le=I){var me=(b=ee[w(D,I)&se])>>>4;if((I+=15&b)>X){j&&R(0);break}if(b||R(2),me<256)L[W++]=me;else{if(me==256){le=I,ee=null;break}var Le=me-254;if(me>264){var ce=i[Ae=me-257];Le=E(D,I,(1<<ce)-1)+c[Ae],I+=ce}var Se=N[w(D,I)&fe],Te=Se>>>4;if(Se||R(3),I+=15&Se,$=h[Te],Te>3&&(ce=r[Te],$+=w(D,I)&(1<<ce)-1,I+=ce),I>X){j&&R(0);break}B&&Z(W+131072);for(var Ee=W+Le;W<Ee;W+=4)L[W]=L[W-$],L[W+1]=L[W+1-$],L[W+2]=L[W+2-$],L[W+3]=L[W+3-$];W=Ee}}F.l=ee,F.p=le,F.b=W,ee&&(Y=1,F.m=k,F.d=N,F.n=ne)}while(!Y);return W==L.length?L:function(oe,Ue,Fe){(Fe==null||Fe>oe.length)&&(Fe=oe.length);var je=new(oe instanceof t?t:oe instanceof n?n:e)(Fe-Ue);return je.set(oe.subarray(Ue,Fe)),je}(L,0,W)},M=new e(0),P=typeof TextDecoder<"u"&&new TextDecoder;try{P.decode(M,{stream:!0})}catch{}return s.convert_streams=function(D){var L=new DataView(D),F=0;function G(){var ve=L.getUint16(F);return F+=2,ve}function B(){var ve=L.getUint32(F);return F+=4,ve}function j(ve){xe.setUint16(_e,ve),_e+=2}function H(ve){xe.setUint32(_e,ve),_e+=4}for(var Z={signature:B(),flavor:B(),length:B(),numTables:G(),reserved:G(),totalSfntSize:B(),majorVersion:G(),minorVersion:G(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},Y=0;Math.pow(2,Y)<=Z.numTables;)Y++;Y--;for(var I=16*Math.pow(2,Y),W=16*Z.numTables-I,ee=12,N=[],k=0;k<Z.numTables;k++)N.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),ee+=16;var ne,X=new Uint8Array(12+16*N.length+N.reduce(function(ve,he){return ve+he.origLength+4},0)),ie=X.buffer,xe=new DataView(ie),_e=0;return H(Z.flavor),j(Z.numTables),j(I),j(Y),j(W),N.forEach(function(ve){H(ve.tag),H(ve.origChecksum),H(ee),H(ve.origLength),ve.outOffset=ee,(ee+=ve.origLength)%4!=0&&(ee+=4-ee%4)}),N.forEach(function(ve){var he,De=D.slice(ve.offset,ve.offset+ve.compLength);if(ve.compLength!=ve.origLength){var U=new Uint8Array(ve.origLength);he=new Uint8Array(De,2),S(he,U)}else U=new Uint8Array(De);X.set(U,ve.outOffset);var Oe=0;(ee=ve.outOffset+ve.origLength)%4!=0&&(Oe=4-ee%4),X.set(new Uint8Array(Oe).buffer,ve.outOffset+ve.origLength),ne=ee+Oe}),ie.slice(0,ne)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function ST(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,a=4,o=8,l=16,c=32;let u;function h(T){if(!u){const R={R:r,L:i,D:a,C:l,U:c,T:o};u=new Map;for(let S in n){let M=0;n[S].split(",").forEach(P=>{let[D,L]=P.split("+");D=parseInt(D,36),L=L?parseInt(L,36):0,u.set(M+=D,R[S]);for(let F=L;F--;)u.set(++M,R[S])})}}return u.get(T)||c}const f=1,d=2,_=3,g=4,p=[null,"isol","init","fina","medi"];function m(T){const R=new Uint8Array(T.length);let S=c,M=f,P=-1;for(let D=0;D<T.length;D++){const L=T.codePointAt(D);let F=h(L)|0,G=f;F&o||(S&(i|a|l)?F&(r|a|l)?(G=_,(M===f||M===_)&&R[P]++):F&(i|c)&&(M===d||M===g)&&R[P]--:S&(r|c)&&(M===d||M===g)&&R[P]--,M=R[D]=G,S=F,P=D,L>65535&&D++)}return R}function x(T,R){const S=[];for(let P=0;P<R.length;P++){const D=R.codePointAt(P);D>65535&&P++,S.push(s.U.codeToGlyph(T,D))}const M=T.GSUB;if(M){const{lookupList:P,featureList:D}=M;let L;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,G=[];D.forEach(B=>{if(F.test(B.tag))for(let j=0;j<B.tab.length;j++){if(G[B.tab[j]])continue;G[B.tab[j]]=!0;const H=P[B.tab[j]],Z=/^(isol|init|fina|medi)$/.test(B.tag);Z&&!L&&(L=m(R));for(let Y=0;Y<S.length;Y++)(!L||!Z||p[L[Y]]===B.tag)&&s.U._applySubs(S,Y,H,P)}})}return S}function y(T,R){const S=new Int16Array(R.length*3);let M=0;for(;M<R.length;M++){const F=R[M];if(F===-1)continue;S[M*3+2]=T.hmtx.aWidth[F];const G=T.GPOS;if(G){const B=G.lookupList;for(let j=0;j<B.length;j++){const H=B[j];for(let Z=0;Z<H.tabs.length;Z++){const Y=H.tabs[Z];if(H.ltype===1){if(s._lctf.coverageIndex(Y.coverage,F)!==-1&&Y.pos){L(Y.pos,M);break}}else if(H.ltype===2){let I=null,W=P();if(W!==-1){const ee=s._lctf.coverageIndex(Y.coverage,R[W]);if(ee!==-1){if(Y.fmt===1){const N=Y.pairsets[ee];for(let k=0;k<N.length;k++)N[k].gid2===F&&(I=N[k])}else if(Y.fmt===2){const N=s.U._getGlyphClass(R[W],Y.classDef1),k=s.U._getGlyphClass(F,Y.classDef2);I=Y.matrix[N][k]}if(I){I.val1&&L(I.val1,W),I.val2&&L(I.val2,M);break}}}}else if(H.ltype===4){const I=s._lctf.coverageIndex(Y.markCoverage,F);if(I!==-1){const W=P(D),ee=W===-1?-1:s._lctf.coverageIndex(Y.baseCoverage,R[W]);if(ee!==-1){const N=Y.markArray[I],k=Y.baseArray[ee][N.markClass];S[M*3]=k.x-N.x+S[W*3]-S[W*3+2],S[M*3+1]=k.y-N.y+S[W*3+1];break}}}else if(H.ltype===6){const I=s._lctf.coverageIndex(Y.mark1Coverage,F);if(I!==-1){const W=P();if(W!==-1){const ee=R[W];if(v(T,ee)===3){const N=s._lctf.coverageIndex(Y.mark2Coverage,ee);if(N!==-1){const k=Y.mark1Array[I],ne=Y.mark2Array[N][k.markClass];S[M*3]=ne.x-k.x+S[W*3]-S[W*3+2],S[M*3+1]=ne.y-k.y+S[W*3+1];break}}}}}}}}else if(T.kern&&!T.cff){const B=P();if(B!==-1){const j=T.kern.glyph1.indexOf(R[B]);if(j!==-1){const H=T.kern.rval[j].glyph2.indexOf(F);H!==-1&&(S[B*3+2]+=T.kern.rval[j].vals[H])}}}}return S;function P(F){for(let G=M-1;G>=0;G--)if(R[G]!==-1&&(!F||F(R[G])))return G;return-1}function D(F){return v(T,F)===1}function L(F,G){for(let B=0;B<3;B++)S[G*3+B]+=F[B]||0}}function v(T,R){const S=T.GDEF&&T.GDEF.glyphClassDef;return S?s.U._getGlyphClass(R,S):0}function E(...T){for(let R=0;R<T.length;R++)if(typeof T[R]=="number")return T[R]}function w(T){const R=Object.create(null),S=T["OS/2"],M=T.hhea,P=T.head.unitsPerEm,D=E(S&&S.sTypoAscender,M&&M.ascender,P),L={unitsPerEm:P,ascender:D,descender:E(S&&S.sTypoDescender,M&&M.descender,0),capHeight:E(S&&S.sCapHeight,D),xHeight:E(S&&S.sxHeight,D),lineGap:E(S&&S.sTypoLineGap,M&&M.lineGap),supportsCodePoint(F){return s.U.codeToGlyph(T,F)>0},forEachGlyph(F,G,B,j){let H=0;const Z=1/L.unitsPerEm*G,Y=x(T,F);let I=0;const W=y(T,Y);return Y.forEach((ee,N)=>{if(ee!==-1){let k=R[ee];if(!k){const{cmds:ne,crds:X}=s.U.glyphToPath(T,ee);let ie="",xe=0;for(let U=0,Oe=ne.length;U<Oe;U++){const Ae=t[ne[U]];ie+=ne[U];for(let Re=1;Re<=Ae;Re++)ie+=(Re>1?",":"")+X[xe++]}let _e,ve,he,De;if(X.length){_e=ve=1/0,he=De=-1/0;for(let U=0,Oe=X.length;U<Oe;U+=2){let Ae=X[U],Re=X[U+1];Ae<_e&&(_e=Ae),Re<ve&&(ve=Re),Ae>he&&(he=Ae),Re>De&&(De=Re)}}else _e=he=ve=De=0;k=R[ee]={index:ee,advanceWidth:T.hmtx.aWidth[ee],xMin:_e,yMin:ve,xMax:he,yMax:De,path:ie}}j.call(null,k,H+W[N*3]*Z,W[N*3+1]*Z,I),H+=W[N*3+2]*Z,B&&(H+=B*G)}I+=F.codePointAt(I)>65535?2:1}),H}};return L}return function(R){const S=new Uint8Array(R,0,4),M=s._bin.readASCII(S,0,4);if(M==="wOFF")R=e(R);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return w(s.parse(R)[0])}}const MT=Ps({name:"Typr Font Parser",dependencies:[xT,yT,ST],init(s,e,t){const n=s(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function TT(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(y){var v=y>>5;this.buckets.set(v,(this.buckets.get(v)||0)|1<<(31&y))},e.prototype.has=function(y){var v=this.buckets.get(y>>5);return v!==void 0&&(v&1<<(31&y))!=0},e.prototype.serialize=function(){var y=[];return this.buckets.forEach(function(v,E){y.push((+E).toString(36)+":"+v.toString(36))}),y.join(",")},e.prototype.deserialize=function(y){var v=this;this.buckets.clear(),y.split(",").forEach(function(E){var w=E.split(":");v.buckets.set(parseInt(w[0],36),parseInt(w[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(y){var v=function(w){return w&i}(y).toString(16),E=function(w){return(w&i)+t-1}(y).toString(16);return"codepoint-index/plane"+(y>>16)+"/"+v+"-"+E+".json"}function a(y,v){var E=y&n,w=v.codePointAt(E/6|0);return((w=(w||48)-48)&1<<E%6)!=0}function o(y,v){var E;(E=y,E.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(w){return w.split("-").map(function(T){return parseInt(T.trim(),16)})})).forEach(function(w){var T=w[0],R=w[1];R===void 0&&(R=T),v(T,R)})}function l(y,v){o(y,function(E,w){for(var T=E;T<=w;T++)v(T)})}var c={},u={},h=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(y){var v=h.get(y);return v||(v=new e,l(y.ranges,function(E){return v.add(E)}),h.set(y,v)),v}var _,g=new Map;function p(y,v,E){return y[v]?v:y[E]?E:function(w){for(var T in w)return T}(y)}function m(y,v){var E=v;if(!y.includes(E)){E=1/0;for(var w=0;w<y.length;w++)Math.abs(y[w]-v)<Math.abs(E-v)&&(E=y[w])}return E}function x(y){return _||(_=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(v){_.add(v)})),_.has(y)}return s.CodePointSet=e,s.clearCache=function(){c={},u={}},s.getFontsForString=function(y,v){v===void 0&&(v={});var E,w=v.lang;w===void 0&&(w=new RegExp("\\p{Script=Hangul}","u").test(E=y)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(E)?"ja":"en");var T=v.category;T===void 0&&(T="sans-serif");var R=v.style;R===void 0&&(R="normal");var S=v.weight;S===void 0&&(S=400);var M=(v.dataUrl||f).replace(/\/$/g,""),P=new Map,D=new Uint8Array(y.length),L={},F={},G=new Array(y.length),B=new Map,j=!1;function H(I){var W=g.get(I);return W||(W=fetch(M+"/"+I).then(function(ee){if(!ee.ok)throw new Error(ee.statusText);return ee.json().then(function(N){if(!Array.isArray(N)||N[0]!==1)throw new Error("Incorrect schema version; need 1, got "+N[0]);return N[1]})}).catch(function(ee){if(M!==f)return j||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+ee.message),j=!0),M=f,g.delete(I),H(I);throw ee}),g.set(I,W)),W}for(var Z=function(I){var W=y.codePointAt(I),ee=r(W);G[I]=ee,c[ee]||B.has(ee)||B.set(ee,H(ee).then(function(N){c[ee]=N})),W>65535&&(I++,Y=I)},Y=0;Y<y.length;Y++)Z(Y);return Promise.all(B.values()).then(function(){B.clear();for(var I=function(ee){var N=y.codePointAt(ee),k=null,ne=c[G[ee]],X=void 0;for(var ie in ne){var xe=F[ie];if(xe===void 0&&(xe=F[ie]=new RegExp(ie).test(w||"en")),xe){for(var _e in X=ie,ne[ie])if(a(N,ne[ie][_e])){k=_e;break}break}}if(!k){e:for(var ve in ne)if(ve!==X){for(var he in ne[ve])if(a(N,ne[ve][he])){k=he;break e}}}k||(console.debug("No font coverage for U+"+N.toString(16)),k="latin"),G[ee]=k,u[k]||B.has(k)||B.set(k,H("font-meta/"+k+".json").then(function(De){u[k]=De})),N>65535&&(ee++,W=ee)},W=0;W<y.length;W++)I(W);return Promise.all(B.values())}).then(function(){for(var I,W=null,ee=0;ee<y.length;ee++){var N=y.codePointAt(ee);if(W&&(x(N)||d(W).has(N)))D[ee]=D[ee-1];else{W=u[G[ee]];var k=L[W.id];if(!k){var ne=W.typeforms,X=p(ne,T,"sans-serif"),ie=p(ne[X],R,"normal"),xe=m((I=ne[X])===null||I===void 0?void 0:I[ie],S);k=L[W.id]=M+"/font-files/"+W.id+"/"+X+"."+ie+"."+xe+".woff"}var _e=P.get(k);_e==null&&(_e=P.size,P.set(k,_e)),D[ee]=_e}N>65535&&(ee++,D[ee]=D[ee-1])}return{fontUrls:Array.from(P.keys()),chars:D}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function ET(s,e){const t=Object.create(null),n=Object.create(null);function i(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const u=s(c.response);u.src=a,o(u)}catch(u){l(u)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):n[a]?n[a].push(o):(n[a]=[o],i(a,c=>{c.src=a,t[a]=c,n[a].forEach(u=>u(c)),delete n[a]}))}return function(a,o,{lang:l,fonts:c=[],style:u="normal",weight:h="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),_=[];a.length||x();const g=new Map,p=[];if(u!=="italic"&&(u="normal"),typeof h!="number"&&(h=h==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(v=>!v.lang||v.lang.test(l)).reverse(),c.length){let T=0;(function R(S=0){for(let M=S,P=a.length;M<P;M++){const D=a.codePointAt(M);if(T===1&&_[d[M-1]].supportsCodePoint(D)||M>0&&/\s/.test(a[M]))d[M]=d[M-1],T===2&&(p[p.length-1][1]=M);else for(let L=d[M],F=c.length;L<=F;L++)if(L===F){const G=T===2?p[p.length-1]:p[p.length]=[M,M];G[1]=M,T=2}else{d[M]=L;const{src:G,unicodeRange:B}=c[L];if(!B||y(D,B)){const j=t[G];if(!j){r(G,()=>{R(M)});return}if(j.supportsCodePoint(D)){let H=g.get(j);typeof H!="number"&&(H=_.length,_.push(j),g.set(j,H)),d[M]=H,T=1;break}}}D>65535&&M+1<P&&(d[M+1]=d[M],M++,T===2&&(p[p.length-1][1]=M))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){const v=p.map(E=>a.substring(E[0],E[1]+1)).join(`
`);e.getFontsForString(v,{lang:l||void 0,style:u,weight:h,dataUrl:f}).then(({fontUrls:E,chars:w})=>{const T=_.length;let R=0;p.forEach(M=>{for(let P=0,D=M[1]-M[0];P<=D;P++)d[M[0]+P]=w[R++]+T;R++});let S=0;E.forEach((M,P)=>{r(M,D=>{_[P+T]=D,++S===E.length&&x()})})})}else x()}function x(){o({chars:d,fonts:_})}function y(v,E){for(let w=0;w<E.length;w++){const[T,R=T]=E[w];if(T<=v&&v<=R)return!0}return!1}}}const bT=Ps({name:"FontResolver",dependencies:[ET,MT,TT],init(s,e,t){return s(e,t())}});function AT(s,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:_,lang:g,fonts:p,style:m,weight:x,preResolvedFonts:y,unicodeFontsURL:v},E){const w=({chars:T,fonts:R})=>{let S,M;const P=[];for(let D=0;D<T.length;D++)T[D]!==M?(M=T[D],P.push(S={start:D,end:D,fontObj:R[T[D]]})):S.end=D;E(P)};y?w(y):s(_,w,{lang:g,fonts:p,style:m,weight:x,unicodeFontsURL:v})}function o({text:_="",font:g,lang:p,sdfGlyphSize:m=64,fontSize:x=400,fontWeight:y=1,fontStyle:v="normal",letterSpacing:E=0,lineHeight:w="normal",maxWidth:T=1/0,direction:R,textAlign:S="left",textIndent:M=0,whiteSpace:P="normal",overflowWrap:D="normal",anchorX:L=0,anchorY:F=0,metricsOnly:G=!1,unicodeFontsURL:B,preResolvedFonts:j=null,includeCaretPositions:H=!1,chunkedBoundsSize:Z=8192,colorRanges:Y=null},I){const W=h(),ee={fontLoad:0,typesetting:0};_.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),_=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),x=+x,E=+E,T=+T,w=w||"normal",M=+M,a({text:_,lang:p,style:v,weight:y,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:B,preResolvedFonts:j},N=>{ee.fontLoad=h()-W;const k=isFinite(T);let ne=null,X=null,ie=null,xe=null,_e=null,ve=null,he=null,De=null,U=0,Oe=0,Ae=P!=="nowrap";const Re=new Map,ae=h();let be=M,de=0,A=new f;const b=[A];N.forEach(fe=>{const{fontObj:le}=fe,{ascender:me,descender:Le,unitsPerEm:ce,lineGap:Se,capHeight:Te,xHeight:Ee}=le;let oe=Re.get(le);if(!oe){const ue=x/ce,te=w==="normal"?(me-Le+Se)*ue:w*x,pe=(te-(me-Le)*ue)/2,ye=Math.min(te,(me-Le)*ue),ge=(me+Le)/2*ue+ye/2;oe={index:Re.size,src:le.src,fontObj:le,fontSizeMult:ue,unitsPerEm:ce,ascender:me*ue,descender:Le*ue,capHeight:Te*ue,xHeight:Ee*ue,lineHeight:te,baseline:-pe-me*ue,caretTop:ge,caretBottom:ge-ye},Re.set(le,oe)}const{fontSizeMult:Ue}=oe,Fe=_.slice(fe.start,fe.end+1);let je,z;le.forEachGlyph(Fe,x,E,(ue,te,pe,ye)=>{te+=de,ye+=fe.start,je=te,z=ue;const ge=_.charAt(ye),Ne=ue.advanceWidth*Ue,Xe=A.count;let Be;if("isEmpty"in ue||(ue.isWhitespace=!!ge&&new RegExp(i).test(ge),ue.canBreakAfter=!!ge&&r.test(ge),ue.isEmpty=ue.xMin===ue.xMax||ue.yMin===ue.yMax||n.test(ge)),!ue.isWhitespace&&!ue.isEmpty&&Oe++,Ae&&k&&!ue.isWhitespace&&te+Ne+be>T&&Xe){if(A.glyphAt(Xe-1).glyphObj.canBreakAfter)Be=new f,be=-te;else for(let ct=Xe;ct--;)if(ct===0&&D==="break-word"){Be=new f,be=-te;break}else if(A.glyphAt(ct).glyphObj.canBreakAfter){Be=A.splitAt(ct+1);const ht=Be.glyphAt(0).x;be-=ht;for(let yt=Be.count;yt--;)Be.glyphAt(yt).x-=ht;break}Be&&(A.isSoftWrapped=!0,A=Be,b.push(A),U=T)}let Ge=A.glyphAt(A.count);Ge.glyphObj=ue,Ge.x=te+be,Ge.y=pe,Ge.width=Ne,Ge.charIndex=ye,Ge.fontData=oe,ge===`
`&&(A=new f,b.push(A),be=-(te+Ne+E*x)+M)}),de=je+z.advanceWidth*Ue+E*x});let O=0;b.forEach(fe=>{let le=!0;for(let me=fe.count;me--;){const Le=fe.glyphAt(me);le&&!Le.glyphObj.isWhitespace&&(fe.width=Le.x+Le.width,fe.width>U&&(U=fe.width),le=!1);let{lineHeight:ce,capHeight:Se,xHeight:Te,baseline:Ee}=Le.fontData;ce>fe.lineHeight&&(fe.lineHeight=ce);const oe=Ee-fe.baseline;oe<0&&(fe.baseline+=oe,fe.cap+=oe,fe.ex+=oe),fe.cap=Math.max(fe.cap,fe.baseline+Se),fe.ex=Math.max(fe.ex,fe.baseline+Te)}fe.baseline-=O,fe.cap-=O,fe.ex-=O,O+=fe.lineHeight});let Q=0,$=0;if(L&&(typeof L=="number"?Q=-L:typeof L=="string"&&(Q=-U*(L==="left"?0:L==="center"?.5:L==="right"?1:c(L)))),F&&(typeof F=="number"?$=-F:typeof F=="string"&&($=F==="top"?0:F==="top-baseline"?-b[0].baseline:F==="top-cap"?-b[0].cap:F==="top-ex"?-b[0].ex:F==="middle"?O/2:F==="bottom"?O:F==="bottom-baseline"?-b[b.length-1].baseline:c(F)*O)),!G){const fe=e.getEmbeddingLevels(_,R);ne=new Uint16Array(Oe),X=new Uint8Array(Oe),ie=new Float32Array(Oe*2),xe={},he=[1/0,1/0,-1/0,-1/0],De=[],H&&(ve=new Float32Array(_.length*4)),Y&&(_e=new Uint8Array(Oe*3));let le=0,me=-1,Le=-1,ce,Se;if(b.forEach((Te,Ee)=>{let{count:oe,width:Ue}=Te;if(oe>0){let Fe=0;for(let ye=oe;ye--&&Te.glyphAt(ye).glyphObj.isWhitespace;)Fe++;let je=0,z=0;if(S==="center")je=(U-Ue)/2;else if(S==="right")je=U-Ue;else if(S==="justify"&&Te.isSoftWrapped){let ye=0;for(let ge=oe-Fe;ge--;)Te.glyphAt(ge).glyphObj.isWhitespace&&ye++;z=(U-Ue)/ye}if(z||je){let ye=0;for(let ge=0;ge<oe;ge++){let Ne=Te.glyphAt(ge);const Xe=Ne.glyphObj;Ne.x+=je+ye,z!==0&&Xe.isWhitespace&&ge<oe-Fe&&(ye+=z,Ne.width+=z)}}const ue=e.getReorderSegments(_,fe,Te.glyphAt(0).charIndex,Te.glyphAt(Te.count-1).charIndex);for(let ye=0;ye<ue.length;ye++){const[ge,Ne]=ue[ye];let Xe=1/0,Be=-1/0;for(let Ge=0;Ge<oe;Ge++)if(Te.glyphAt(Ge).charIndex>=ge){let ct=Ge,ht=Ge;for(;ht<oe;ht++){let yt=Te.glyphAt(ht);if(yt.charIndex>Ne)break;ht<oe-Fe&&(Xe=Math.min(Xe,yt.x),Be=Math.max(Be,yt.x+yt.width))}for(let yt=ct;yt<ht;yt++){const sn=Te.glyphAt(yt);sn.x=Be-(sn.x+sn.width-Xe)}break}}let te;const pe=ye=>te=ye;for(let ye=0;ye<oe;ye++){const ge=Te.glyphAt(ye);te=ge.glyphObj;const Ne=te.index,Xe=fe.levels[ge.charIndex]&1;if(Xe){const Be=e.getMirroredCharacter(_[ge.charIndex]);Be&&ge.fontData.fontObj.forEachGlyph(Be,0,0,pe)}if(H){const{charIndex:Be,fontData:Ge}=ge,ct=ge.x+Q,ht=ge.x+ge.width+Q;ve[Be*4]=Xe?ht:ct,ve[Be*4+1]=Xe?ct:ht,ve[Be*4+2]=Te.baseline+Ge.caretBottom+$,ve[Be*4+3]=Te.baseline+Ge.caretTop+$;const yt=Be-me;yt>1&&u(ve,me,yt),me=Be}if(Y){const{charIndex:Be}=ge;for(;Be>Le;)Le++,Y.hasOwnProperty(Le)&&(Se=Y[Le])}if(!te.isWhitespace&&!te.isEmpty){const Be=le++,{fontSizeMult:Ge,src:ct,index:ht}=ge.fontData,yt=xe[ct]||(xe[ct]={});yt[Ne]||(yt[Ne]={path:te.path,pathBounds:[te.xMin,te.yMin,te.xMax,te.yMax]});const sn=ge.x+Q,Ht=ge.y+Te.baseline+$;ie[Be*2]=sn,ie[Be*2+1]=Ht;const gn=sn+te.xMin*Ge,Nn=Ht+te.yMin*Ge,ii=sn+te.xMax*Ge,an=Ht+te.yMax*Ge;gn<he[0]&&(he[0]=gn),Nn<he[1]&&(he[1]=Nn),ii>he[2]&&(he[2]=ii),an>he[3]&&(he[3]=an),Be%Z===0&&(ce={start:Be,end:Be,rect:[1/0,1/0,-1/0,-1/0]},De.push(ce)),ce.end++;const Lt=ce.rect;if(gn<Lt[0]&&(Lt[0]=gn),Nn<Lt[1]&&(Lt[1]=Nn),ii>Lt[2]&&(Lt[2]=ii),an>Lt[3]&&(Lt[3]=an),ne[Be]=Ne,X[Be]=ht,Y){const wn=Be*3;_e[wn]=Se>>16&255,_e[wn+1]=Se>>8&255,_e[wn+2]=Se&255}}}}}),ve){const Te=_.length-me;Te>1&&u(ve,me,Te)}}const se=[];Re.forEach(({index:fe,src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:Se,capHeight:Te,xHeight:Ee})=>{se[fe]={src:le,unitsPerEm:me,ascender:Le,descender:ce,lineHeight:Se,capHeight:Te,xHeight:Ee}}),ee.typesetting=h()-ae,I({glyphIds:ne,glyphFontIndices:X,glyphPositions:ie,glyphData:xe,fontData:se,caretPositions:ve,glyphColors:_e,chunkedBounds:De,fontSize:x,topBaseline:$+b[0].baseline,blockBounds:[Q,$-O,Q+U,$],visibleBounds:he,timings:ee})})}function l(_,g){o({..._,metricsOnly:!0},p=>{const[m,x,y,v]=p.blockBounds;g({width:y-m,height:v-x})})}function c(_){let g=_.match(/^([\d.]+)%$/),p=g?parseFloat(g[1]):NaN;return isNaN(p)?0:p/100}function u(_,g,p){const m=_[g*4],x=_[g*4+1],y=_[g*4+2],v=_[g*4+3],E=(x-m)/p;for(let w=0;w<p;w++){const T=(g+w)*4;_[T]=m+E*w,_[T+1]=m+E*(w+1),_[T+2]=y,_[T+3]=v}}function h(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(_){let g=f.flyweight;return g.data=this.data,g.index=_,g},splitAt(_){let g=new f;return g.data=this.data.splice(_*d.length),g}},f.flyweight=d.reduce((_,g,p,m)=>(Object.defineProperty(_,g,{get(){return this.data[this.index*d.length+p]},set(x){this.data[this.index*d.length+p]=x}}),_),{data:null,index:0}),{typeset:o,measure:l}}const Ar=()=>(self.performance||Date).now(),nl=Mm();let fd;function wT(s,e,t,n,i,r,a,o,l,c,u=!0){return u?CT(s,e,t,n,i,r,a,o,l,c).then(null,h=>(fd||(console.warn("WebGL SDF generation failed, falling back to JS",h),fd=!0),pd(s,e,t,n,i,r,a,o,l,c))):pd(s,e,t,n,i,r,a,o,l,c)}const Po=[],RT=5;let _u=0;function Em(){const s=Ar();for(;Po.length&&Ar()-s<RT;)Po.shift()();_u=Po.length?setTimeout(Em,0):0}const CT=(...s)=>new Promise((e,t)=>{Po.push(()=>{const n=Ar();try{nl.webgl.generateIntoCanvas(...s),e({timing:Ar()-n})}catch(i){t(i)}}),_u||(_u=setTimeout(Em,0))}),DT=4,PT=2e3,dd={};let LT=0;function pd(s,e,t,n,i,r,a,o,l,c){const u="TroikaTextSDFGenerator_JS_"+LT++%DT;let h=dd[u];return h||(h=dd[u]={workerModule:Ps({name:u,workerId:u,dependencies:[Mm,Ar],init(f,d){const _=f().javascript.generate;return function(...g){const p=d();return{textureData:_(...g),timing:d()-p}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),h.requests++,clearTimeout(h.idleTimer),h.workerModule(s,e,t,n,i,r).then(({textureData:f,timing:d})=>{const _=Ar(),g=new Uint8Array(f.length*4);for(let p=0;p<f.length;p++)g[p*4+c]=f[p];return nl.webglUtils.renderImageData(a,g,o,l,s,e,1<<3-c),d+=Ar()-_,--h.requests===0&&(h.idleTimer=setTimeout(()=>{cT(u)},PT)),{timing:d}})}function UT(s){s._warm||(nl.webgl.isSupported(s),s._warm=!0)}const IT=nl.webglUtils.resizeWebGLCanvasWithoutClearing,ia={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},FT=new We;function $r(){return(self.performance||Date).now()}const md=Object.create(null);function NT(s,e){s=BT({},s);const t=$r(),n=[];if(s.font&&n.push({label:"user",src:kT(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||ia.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||ia.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let _=s.colorRanges[d];typeof _!="number"&&(_=FT.set(_).getHex()),f[d]=_}s.colorRanges=f}Object.freeze(s);const{textureWidth:i,sdfExponent:r}=ia,{sdfGlyphSize:a}=s,o=i/a*4;let l=md[a];if(!l){const f=document.createElement("canvas");f.width=i,f.height=a*256/o,l=md[a]={glyphCount:0,sdfGlyphSize:a,sdfCanvas:f,sdfTexture:new Rt(f,void 0,void 0,void 0,Gt,Gt),contextLost:!1,glyphsByFont:new Map},l.sdfTexture.generateMipmaps=!1,OT(l)}const{sdfTexture:c,sdfCanvas:u}=l;wm(s).then(f=>{const{glyphIds:d,glyphFontIndices:_,fontData:g,glyphPositions:p,fontSize:m,timings:x}=f,y=[],v=new Float32Array(d.length*4);let E=0,w=0;const T=$r(),R=g.map(L=>{let F=l.glyphsByFont.get(L.src);return F||l.glyphsByFont.set(L.src,F=new Map),F});d.forEach((L,F)=>{const G=_[F],{src:B,unitsPerEm:j}=g[G];let H=R[G].get(L);if(!H){const{path:ee,pathBounds:N}=f.glyphData[B][L],k=Math.max(N[2]-N[0],N[3]-N[1])/a*(ia.sdfMargin*a+.5),ne=l.glyphCount++,X=[N[0]-k,N[1]-k,N[2]+k,N[3]+k];R[G].set(L,H={path:ee,atlasIndex:ne,sdfViewBox:X}),y.push(H)}const{sdfViewBox:Z}=H,Y=p[w++],I=p[w++],W=m/j;v[E++]=Y+Z[0]*W,v[E++]=I+Z[1]*W,v[E++]=Y+Z[2]*W,v[E++]=I+Z[3]*W,d[F]=H.atlasIndex}),x.quads=(x.quads||0)+($r()-T);const S=$r();x.sdf={};const M=u.height,P=Math.ceil(l.glyphCount/o),D=Math.pow(2,Math.ceil(Math.log2(P*a)));D>M&&(console.info(`Increasing SDF texture size ${M}->${D}`),IT(u,i,D),c.dispose()),Promise.all(y.map(L=>bm(L,l,s.gpuAccelerateSDF).then(({timing:F})=>{x.sdf[L.atlasIndex]=F}))).then(()=>{y.length&&!l.contextLost&&(Am(l),c.needsUpdate=!0),x.sdfTotal=$r()-S,x.total=$r()-t,e(Object.freeze({parameters:s,sdfTexture:c,sdfGlyphSize:a,sdfExponent:r,glyphBounds:v,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{l.contextLost||UT(u)})}function bm({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=ia,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),h=u%(o/n)*n,f=Math.floor(u/(o/n))*n,d=e%4;return wT(n,n,s,t,c,l,i,h,f,d,a)}function OT(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const n=[];s.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(bm(r,s,!0))})}),Promise.all(n).then(()=>{Am(s),s.sdfTexture.needsUpdate=!0})})}function BT(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let go;function kT(s){return go||(go=typeof document>"u"?{}:document.createElement("a")),go.href=s,go.href}function Am(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:n,height:i}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==n*i*4)&&(a=new Uint8Array(n*i*4),t.image={width:n,height:i,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,a)}}const zT=Ps({name:"Typesetter",dependencies:[AT,bT,hT],init(s,e,t){return s(e,t())}}),wm=Ps({name:"Typesetter",dependencies:[zT],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}});wm.onMainThread;const gd={};function GT(s){let e=gd[s];return e||(e=gd[s]=new Jn(1,1,s,s).translate(.5,.5,0)),e}const VT="aTroikaGlyphBounds",_d="aTroikaGlyphIndex",HT="aTroikaGlyphColor";class WT extends r0{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ei,this.boundingBox=new $n}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=GT(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){this.updateAttributeData(VT,e,4),this.updateAttributeData(_d,t,1),this.updateAttributeData(HT,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:a,max:o,sin:l,cos:c}=Math,u=i/2,h=i*2,f=Math.abs(t),d=e[0]/f,_=e[2]/f,g=r((d+u)/h)!==r((_+u)/h)?-f:a(l(d)*f,l(_)*f),p=r((d-u)/h)!==r((_-u)/h)?f:o(l(d)*f,l(_)*f),m=r((d+i)/h)!==r((_+i)/h)?f*2:o(f-c(d)*f,f-c(_)*f);n.min.set(g,e[1],t<0?-m:0),n.max.set(p,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(_d).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,n){const i=this.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(this.setAttribute(e,new Fo(t,n)),delete this._maxInstanceCount,this.dispose()):i&&this.deleteAttribute(e)}}const XT=`
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
`,YT=`
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
`,qT=`
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
`,jT=`
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
`;function KT(s){const e=gu(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Ze},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new st(0,0,0,0)},uTroikaClipRect:{value:new st(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Ze},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new We},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Ye},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:XT,vertexTransform:YT,fragmentDefs:qT,fragmentColorTransform:jT,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Tm,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const nh=new ci({color:16777215,side:cn,transparent:!0}),vd=8421504,xd=new qe,_o=new J,ac=new J,Qs=[],ZT=new J,oc="+x+y";function yd(s){return Array.isArray(s)?s[0]:s}let Rm=()=>{const s=new Et(new Jn(1,1),nh);return Rm=()=>s,s},Cm=()=>{const s=new Et(new Jn(1,1,32,1),nh);return Cm=()=>s,s};const JT={type:"syncstart"},QT={type:"synccomplete"},Dm=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],$T=Dm.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Pm extends Et{constructor(){const e=new WT;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=vd,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=oc,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(JT),NT({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent(QT),e&&e()})))}onBeforeRender(e,t,n,i,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return KT(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=nh.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.hasOutline()){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return yd(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return yd(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,u=0,h=0,f,d,_,g=0,p=0;if(t){let{outlineWidth:x,outlineOffsetX:y,outlineOffsetY:v,outlineBlur:E,outlineOpacity:w}=this;c=this._parsePercent(x)||0,u=Math.max(0,this._parsePercent(E)||0),f=w,g=this._parsePercent(y)||0,p=this._parsePercent(v)||0}else h=Math.max(0,this._parsePercent(this.strokeWidth)||0),h&&(_=this.strokeColor,n.uTroikaStrokeColor.value.set(_??vd),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;n.uTroikaEdgeOffset.value=c,n.uTroikaPositionOffset.value.set(g,p),n.uTroikaBlurRadius.value=u,n.uTroikaStrokeWidth.value=h,n.uTroikaStrokeOpacity.value=d,n.uTroikaFillOpacity.value=f??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const x=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-x,l[1]-x,l[2]+x,l[3]+x)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new We;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||oc;if(a!==e._orientation){let o=n.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==oc&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,u,h,f]=l;_o.set(0,0,0)[u]=c==="-"?1:-1,ac.set(0,0,0)[f]=h==="-"?-1:1,xd.lookAt(ZT,_o.cross(ac),ac),o.setFromMatrix4(xd)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Ze){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Ze){return _o.copy(e),this.localPositionToTextCoords(this.worldToLocal(_o),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,a=i?Cm():Rm(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let u=0;u<c.count;u++){let h=r[0]+c.getX(u)*(r[2]-r[0]);const f=r[1]+c.getY(u)*(r[3]-r[1]);let d=0;i&&(d=i-Math.cos(h/i)*i,h=Math.sin(h/i)*i),l.setXYZ(u,h,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Qs.length=0,a.raycast(e,Qs);for(let u=0;u<Qs.length;u++)Qs[u].object=this,t.push(Qs[u])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,$T.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Dm.forEach(s=>{const e="_private_"+s;Object.defineProperty(Pm.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new $n;new We;const En=rT((s,e)=>({currentIndex:0,isAnimating:!1,totalBlobs:0,isOrthographic:!0,setCurrentIndex:t=>s({currentIndex:t}),setIsAnimating:t=>s({isAnimating:t}),setTotalBlobs:t=>s({totalBlobs:t}),setIsOrthographic:t=>s({isOrthographic:t}),navigateToNext:()=>{const{currentIndex:t,totalBlobs:n}=e(),i=(t+1)%n;return s({currentIndex:i}),i},navigateToPrevious:()=>{const{currentIndex:t,totalBlobs:n}=e(),i=(t-1+n)%n;return s({currentIndex:i}),i},toggleCamera:()=>{const{isOrthographic:t}=e();return s({isOrthographic:!t}),!t}})),Ia=new hp,Lm=new dp(Ia),eE=new $S(Ia);let Xo=!1,Um=0,Im=50,Fm=0,lc=0;const tE=100;let Sd=0;const nE=100,Qn=[{name:"A brand image studio",background:"#001EFF",gradientEnd:"#000843",useGradient:!0,materialTexture:"./materials/TGG1.png",backgroundTexture:"./backgrounds/BG 1.png"},{name:"Crafting Artistic direction",background:"#06E6FF",gradientEnd:"#FDFDFD",useGradient:!0,materialTexture:"./materials/TGG2.png",backgroundTexture:"./backgrounds/BG 2.png"},{name:"& Web dev agency",background:"#FF0000",useGradient:!1,materialTexture:"./materials/TGG3.png",backgroundTexture:"./backgrounds/BG 3.png"},{name:"Product design",background:"#FFFFFF",useGradient:!1,materialTexture:"./materials/TGG4.png",backgroundTexture:"./backgrounds/BG 4.png"},{name:"And immersive websites",background:"#000000",useGradient:!1,materialTexture:"./materials/TGG5.png",backgroundTexture:"./backgrounds/BG 5.png"}],ni=new tp,cs=new $t(75,window.innerWidth/window.innerHeight,.1,1e3),Md=window.innerWidth/window.innerHeight,li=new La(-2*Md,2*Md,2,-2,.1,1e3);let Yo=li;const Un=new QS({canvas:document.querySelector("#canvas"),antialias:!0,alpha:!1}),Nm=En.getState();Nm.setTotalBlobs(Qn.length);Un.setSize(window.innerWidth,window.innerHeight);Un.setPixelRatio(Math.min(window.devicePixelRatio,2));Un.toneMapping=Dd;Un.toneMappingExposure=1.2;Un.outputColorSpace=Nt;Un.shadowMap.enabled=!0;Un.shadowMap.type=Rd;const iE={uniforms:{tDiffuse:{value:null},contrast:{value:1.1},brightness:{value:1.1},saturation:{value:1.3},gamma:{value:1},exposure:{value:.2}},vertexShader:`
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
    `},Ls=new zM(Un),Om=new GM(ni,Yo),rE=new Bu(iE),Ra=new Bu(VM),Bm=Un.getPixelRatio();Ra.material.uniforms.resolution.value.x=1/(window.innerWidth*Bm);Ra.material.uniforms.resolution.value.y=1/(window.innerHeight*Bm);Ls.addPass(Om);Ls.addPass(rE);Ls.addPass(Ra);Ls.setSize(window.innerWidth,window.innerHeight);let pt=null,Td={},Hn={},vo=0,km=[],zm=[],wr=null;const sE=new i0(16777215,.5);ni.add(sE);const Fn=new Dr(16777215,.2),Ed=57.6*Math.PI/180;Fn.position.set(Math.sin(Ed)*5,Math.cos(Ed)*5,3);Fn.castShadow=!0;Fn.shadow.mapSize.width=1024;Fn.shadow.mapSize.height=1024;Fn.shadow.camera.near=.1;Fn.shadow.camera.far=100;Fn.shadow.camera.left=-15;Fn.shadow.camera.right=15;Fn.shadow.camera.top=15;Fn.shadow.camera.bottom=-15;Fn.shadow.bias=-1e-4;ni.add(Fn);const Gm=new Dr(16777215,.2);Gm.position.set(-4,2,-4);ni.add(Gm);const Vm=new Dr(16777215,.2);Vm.position.set(3,-2,4);ni.add(Vm);const Hm=new Dr(11193599,.2);Hm.position.set(-2,-1,2);ni.add(Hm);const Wm=new Kc(Un);Wm.compileEquirectangularShader();const il=new tp;il.background=new We(15790320);const Xm=new Dr(16777215,1);Xm.position.set(1,1,1);il.add(Xm);const Ym=new Dr(16777215,.5);Ym.position.set(-1,-1,-1);il.add(Ym);const aE=Wm.fromScene(il);ni.environment=aE.texture;eE.load("./GHOST-FINAL.glb",function(s){pt=s.scene,console.log("=== WELCOME TO GHOST STUDIO! ==="),console.log("-- CHECK OUR SITE NOT THE CONSOLE LOGS! :)"),console.log("=== LOADING CLEAN TEXTURE MATERIALS ==="),console.log(`📦 Loading ${Qn.length} blob configurations with backgrounds and materials`);const e=Qn.map((n,i)=>new Promise(r=>{Lm.load(n.materialTexture,a=>{const o=new ya({map:a,transparent:!0,opacity:i===0?1:0,side:cn,metalness:.5,roughness:.1,envMapIntensity:.5,transmission:.1,clearcoat:.5,clearcoatRoughness:.05});Hn[`TGG${i+1}`]=o,r()},void 0,a=>{const o=new ya({color:"#ffffff",transparent:!0,opacity:i===0?1:0,side:cn,metalness:.5,roughness:.1,envMapIntensity:.5,clearcoat:.5,clearcoatRoughness:.05});Hn[`TGG${i+1}`]=o,r()})}));Promise.all(e).then(()=>{pt.traverse(n=>{n.isMesh&&(Array.isArray(n.material)?n.material=n.material.map(i=>i.name.toLowerCase().includes("eye")||i.name==="1 eyes"?(Td[i.name]=i.clone(),i):Hn.TGG1):n.material.name.toLowerCase().includes("eye")||n.material.name==="1 eyes"?Td[n.material.name]=n.material.clone():n.material=Hn.TGG1)})}),pt.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)});function t(n,i,r,a){i.transparent=!0,i.opacity=0,n.transparent=!0,Yn.to(n,{opacity:0,duration:r,ease:"power2.inOut"}),Yn.to(i,{opacity:1,duration:r,ease:"power2.inOut",onComplete:()=>{i.transparent=!1,a&&a()}})}window.switchToTextureMaterial=function(n,i=.5){if(!Hn[n])return;const r=Hn[n].clone();pt.traverse(o=>{if(o.isMesh){if(Array.isArray(o.material))o.material.forEach((l,c)=>{if(!(l.name&&(l.name.toLowerCase().includes("eye")||l.name==="1 eyes"))){const u=new Et(o.geometry,r.clone());u.position.copy(o.position),u.rotation.copy(o.rotation),u.scale.copy(o.scale),u.matrix.copy(o.matrix),u.matrixWorld.copy(o.matrixWorld),u.material.transparent=!0,u.material.opacity=0,o.parent.add(u),t(l,u.material,i,()=>{o.material[c]=u.material.clone(),o.parent.remove(u)})}});else if(!(o.material.name&&(o.material.name.toLowerCase().includes("eye")||o.material.name==="1 eyes"))){const l=new Et(o.geometry,r.clone());l.position.copy(o.position),l.rotation.copy(o.rotation),l.scale.copy(o.scale),l.matrix.copy(o.matrix),l.matrixWorld.copy(o.matrixWorld),l.material.transparent=!0,l.material.opacity=0,o.parent.add(l),t(o.material,l.material,i,()=>{o.material=l.material.clone(),o.parent.remove(l)})}}}),vo=parseInt(n.replace("TGG",""))-1},window.cycleTextureMaterials=function(){const n=Object.keys(Hn);if(n.length===0)return;const i=n[vo];switchToTextureMaterial(i,.5),vo=(vo+1)%n.length},window.addEventListener("keydown",n=>{(n.key==="m"||n.key==="M")&&cycleTextureMaterials(),(n.key==="b"||n.key==="B")&&cycleBackgrounds()}),window.changeTextureMaterialOpacity=function(n,i){if(!Hn[n])return;const r=Hn[n];r.transparent=i<1,r.opacity=i,pt.traverse(a=>{a.isMesh&&(Array.isArray(a.material)?a.material.forEach(o=>{o.name&&(o.name.toLowerCase().includes("eye")||o.name==="1 eyes")||(o.transparent=i<1,Yn.to(o,{opacity:i,duration:1,ease:"power2.inOut"}))}):a.material.name&&(a.material.name.toLowerCase().includes("eye")||a.material.name==="1 eyes")||(a.material.transparent=i<1,Yn.to(a.material,{opacity:i,duration:1,ease:"power2.inOut"})))})},pt.scale.setScalar(.6),pt.position.set(0,0,0),pt.userData.baseY=0,pt.userData.idleRotation=0,ni.add(pt)});function qm(){const s=window.innerWidth/window.innerHeight,e=1.5;return{width:4*s*e,height:4*e}}const qo=qm(),oE=new Jn(qo.width,qo.height),lE=new Jn(qo.width*1.2,qo.height*1.2);Qn.forEach((s,e)=>{const t=Lm.load(s.backgroundTexture),n=new ci({map:t,transparent:!0,opacity:e===0?1:0}),i=new Et(oE,n);i.position.z=-15,i.renderOrder=-5,ni.add(i),km.push(i),zm.push(n)});const Lr=document.createElement("video");Lr.src="./gh0st_loop.mp4";Lr.loop=!0;Lr.muted=!0;Lr.autoplay=!0;Lr.playsInline=!0;const cE=new k_(Lr),uE=new ci({map:cE,transparent:!0,opacity:.2});wr=new Et(lE,uE);wr.position.z=-12;wr.renderOrder=-3;ni.add(wr);Lr.play().catch(console.error);function ih(s,e=.5){const{setCurrentIndex:t}=En.getState();s<0||s>=Qn.length||zm.forEach((n,i)=>{Yn.to(n,{opacity:i===s?1:0,duration:e,ease:"power2.inOut"})})}window.switchBackground=ih;window.cycleBackgrounds=function(){const{currentIndex:s}=En.getState(),e=(s+1)%Qn.length;ih(e)};cs.position.z=3;li.position.z=3;const hE=new pp;let bd=0;const fE=.15,Ad=.4;function jm(){requestAnimationFrame(jm);const s=hE.getElapsedTime();pt&&(bd=Math.sin(s*Ad)*fE,pt.userData.baseY===void 0&&(pt.userData.baseY=pt.position.y),pt.position.y=pt.userData.baseY+bd,pt.rotation.z=Math.sin(s*Ad*.5)*.08),Om.camera=Yo,Ls.render()}jm();const vu=new Zn({vertexShader:HM,fragmentShader:"void main(){ gl_FragColor = vec4(1.0); }",side:cn,uniforms:{progress:{value:0},direction:{value:1}}});function rh(){const s=window.innerWidth,e=s<=768,t=s>768&&s<=1024;let n,i,r,a;return e?(n=.3,i=2.1,r=1.2,a=-.2):t?(n=.35,i=4,r=1.2,a=0):(n=.4,i=6,r=1.2,a=0),{fontSize:n,maxWidth:i,lineHeight:r,yPosition:a}}const ra=Qn.map((s,e)=>{const t=rh(),n=new Pm;return n.text=s.name,n.font="./TT Norms Pro DemiBold.ttf",n.anchorX="center",n.anchorY="middle",n.material=vu,n.position.set(0,t.yPosition,2),e!==0&&n.scale.set(0,0,0),n.letterSpacing=-.08,n.fontSize=t.fontSize,n.maxWidth=t.maxWidth,n.lineHeight=t.lineHeight,n.textAlign="center",n.whiteSpace="normal",n.overflowWrap="normal",n.glyphGeometryDetail=20,n.sync(),ni.add(n),n});Ia.onLoad=()=>{const s=Qn[Nm.currentIndex];Km(s,0)};Ia.onProgress=(s,e,t)=>{};Ia.onError=s=>{};function Ca(s){const{isAnimating:e,setIsAnimating:t,currentIndex:n}=En.getState();if(e)return;t(!0);const i=n;let r;s>0?r=En.getState().navigateToNext():r=En.getState().navigateToPrevious(),pE(i,r),setTimeout(()=>{t(!1)},1200)}window.addEventListener("wheel",s=>{const{isAnimating:e}=En.getState();if(e)return;s.preventDefault(),lc+=Math.abs(s.deltaY);const t=Date.now();if(!(t-Sd<nE)&&lc>=tE){Sd=t,lc=0;const n=s.deltaY>0?1:-1;Ca(n)}},{passive:!1});function dE(){En.getState().toggleCamera()?(Yo=li,li.position.copy(cs.position)):(Yo=cs,cs.position.copy(li.position))}window.addEventListener("keydown",s=>{const{isAnimating:e}=En.getState();if(!e)switch(s.key){case"ArrowRight":case"ArrowDown":s.preventDefault(),Ca(1);break;case"ArrowLeft":case"ArrowUp":s.preventDefault(),Ca(-1);break;case"c":case"C":s.preventDefault(),dE();break}});window.addEventListener("mousedown",s=>{const{isAnimating:e}=En.getState();e||(Xo=!0,Um=s.clientX,document.body.style.cursor="grabbing")});window.addEventListener("mousemove",s=>{const{isAnimating:e}=En.getState();if(!Xo||e)return;const t=s.clientX-Um;if(Math.abs(t)>Im){const n=t>0?-1:1;Ca(n),Xo=!1,document.body.style.cursor="default"}});window.addEventListener("mouseup",()=>{Xo=!1,document.body.style.cursor="default"});window.addEventListener("touchstart",s=>{const{isAnimating:e}=En.getState();e||(Fm=s.touches[0].clientX)},{passive:!0});window.addEventListener("touchend",s=>{const{isAnimating:e}=En.getState();if(e)return;const n=s.changedTouches[0].clientX-Fm;if(Math.abs(n)>Im){const i=n>0?-1:1;Ca(i)}},{passive:!0});function Km(s,e=.2){if(!pt||Object.keys(Hn).length===0)return;const n=`TGG${Qn.indexOf(s)+1}`;Hn[n]&&switchToTextureMaterial(n,e)}function pE(s,e){const t=Qn[e];let n;const i=Qn.length,r=e-s;if(Math.abs(r)===1?n=r>0?1:-1:r===-(i-1)?n=1:r===i-1?n=-1:n=e>s?1:-1,ih(e,1),pt){const u=pt.rotation.y%(Math.PI*2);pt.rotation.y=u;const h=n>0?-1:1,f=u+h*Math.PI*2,d=pt.userData.baseY||0;Yn.to(pt.rotation,{y:f,duration:1.2,ease:"power3.inOut",onUpdate:function(){const _=this.progress(),g=Math.sin(_*Math.PI)*.015;pt.position.x=g*h}}),Yn.timeline().to(pt.userData,{baseY:d+.05,duration:.4,ease:"power2.out"}).to(pt.userData,{baseY:d,duration:.8,ease:"power2.inOut"})}const a=window.innerWidth<=768,o=a?4:6,l=a?5:8;ra[e].scale.set(1,1,1),ra[e].position.x=n*o,Yn.to(vu.uniforms.progress,{value:.5,duration:1,ease:"linear",onComplete:()=>{vu.uniforms.progress.value=0}}),Yn.to(ra[s].position,{x:-n*l,duration:1,ease:"power2.inOut"});const c=rh();Yn.to(ra[e].position,{x:0,y:c.yPosition,duration:1,ease:"power2.inOut"}),Km(t,.8)}window.addEventListener("resize",()=>{const s=window.innerWidth/window.innerHeight;cs.aspect=s,cs.updateProjectionMatrix(),li.left=-2*s,li.right=2*s,li.top=2,li.bottom=-2,li.updateProjectionMatrix(),Un.setSize(window.innerWidth,window.innerHeight),Ls.setSize(window.innerWidth,window.innerHeight);const e=Un.getPixelRatio();Ra.material.uniforms.resolution.value.x=1/(window.innerWidth*e),Ra.material.uniforms.resolution.value.y=1/(window.innerHeight*e);const t=qm();km.forEach(i=>{i.geometry.dispose(),i.geometry=new Jn(t.width,t.height)}),wr&&(wr.geometry.dispose(),wr.geometry=new Jn(t.width*1.2,t.height*1.2));const n=rh();ra.forEach((i,r)=>{i.fontSize=n.fontSize,i.maxWidth=n.maxWidth,i.lineHeight=n.lineHeight,i.scale.x>0&&(i.position.y=n.yPosition),i.sync()})});
