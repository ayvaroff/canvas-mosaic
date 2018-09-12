!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!I[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===y&&_()}(e,n),t&&t(e,n)};var n,r=!0,o="45284566d157b7f03811",a=1e4,i={},s=[],c=[];function d(e){var t=P[e];if(!t)return S;var r=function(r){return t.hot.active?(P[r]?-1===P[r].parents.indexOf(e)&&P[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),S(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return S[e]},set:function(t){S[e]=t}}};for(var a in S)Object.prototype.hasOwnProperty.call(S,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,o(a));return r.e=function(e){return"ready"===u&&f("prepare"),y++,S.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===u&&(v[e]||E(e),0===y&&0===g&&_())}},r.t=function(e,t){return 1&t&&(e=r(e)),S.t(e,-2&t)},r}var l=[],u="idle";function f(e){u=e;for(var t=0;t<l.length;t++)l[t].call(null,e)}var p,h,m,g=0,y=0,v={},w={},I={};function O(e){return+e+""===e?+e:e}function b(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=S.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(a).then(function(e){if(!e)return f("idle"),null;w={},v={},I=e.c,m=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return E(0),"prepare"===u&&0===y&&0===g&&_(),t})}function E(e){I[e]?(w[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=S.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):v[e]=!0}function _(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return x(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(O(n));e.resolve(t)}}function x(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,a,c,d;function l(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,i=o.chain;if((c=P[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var s=0;s<c.parents.length;s++){var d=c.parents[s],l=P[d];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([d]),moduleId:a,parentId:d};-1===t.indexOf(d)&&(l.hot._acceptedDependencies[a]?(n[d]||(n[d]=[]),p(n[d],[a])):(delete n[d],t.push(d),r.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var g={},y=[],v={},w=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var b in h)if(Object.prototype.hasOwnProperty.call(h,b)){var E;d=O(b);var _=!1,x=!1,j=!1,D="";switch((E=h[b]?l(d):{type:"disposed",moduleId:b}).chain&&(D="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+E.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(_=new Error("Aborted because "+d+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(E),x=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),j=!0;break;default:throw new Error("Unexception type "+E.type)}if(_)return f("abort"),Promise.reject(_);if(x)for(d in v[d]=h[d],p(y,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,d)&&(g[d]||(g[d]=[]),p(g[d],E.outdatedDependencies[d]));j&&(p(y,[E.moduleId]),v[d]=w)}var M,T=[];for(r=0;r<y.length;r++)d=y[r],P[d]&&P[d].hot._selfAccepted&&T.push({module:d,errorHandler:P[d].hot._selfAccepted});f("dispose"),Object.keys(I).forEach(function(e){!1===I[e]&&function(e){delete installedChunks[e]}(e)});for(var L,A,C=y.slice();C.length>0;)if(d=C.pop(),c=P[d]){var H={},R=c.hot._disposeHandlers;for(a=0;a<R.length;a++)(n=R[a])(H);for(i[d]=H,c.hot.active=!1,delete P[d],delete g[d],a=0;a<c.children.length;a++){var k=P[c.children[a]];k&&((M=k.parents.indexOf(d))>=0&&k.parents.splice(M,1))}}for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(c=P[d]))for(A=g[d],a=0;a<A.length;a++)L=A[a],(M=c.children.indexOf(L))>=0&&c.children.splice(M,1);for(d in f("apply"),o=m,v)Object.prototype.hasOwnProperty.call(v,d)&&(e[d]=v[d]);var U=null;for(d in g)if(Object.prototype.hasOwnProperty.call(g,d)&&(c=P[d])){A=g[d];var X=[];for(r=0;r<A.length;r++)if(L=A[r],n=c.hot._acceptedDependencies[L]){if(-1!==X.indexOf(n))continue;X.push(n)}for(r=0;r<X.length;r++){n=X[r];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:A[r],error:e}),t.ignoreErrored||U||(U=e)}}}for(r=0;r<T.length;r++){var N=T[r];d=N.module,s=[d];try{S(d)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||U||(U=e)}}return U?(f("fail"),Promise.reject(U)):(f("idle"),new Promise(function(e){e(y)}))}var P={};function S(t){if(P[t])return P[t].exports;var r=P[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:b,apply:x,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var t=l.indexOf(e);t>=0&&l.splice(t,1)},data:i[e]};return n=void 0,t}(t),parents:(c=s,s=[],c),children:[]};return e[t].call(r.exports,r,r.exports,d(t)),r.l=!0,r.exports}S.m=e,S.c=P,S.d=function(e,t,n){S.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},S.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.t=function(e,t){if(1&t&&(e=S(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(S.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)S.d(n,r,function(t){return e[t]}.bind(null,r));return n},S.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return S.d(t,"a",t),t},S.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},S.p="",S.h=function(){return o},d(0)(S.s=0)}([function(e,t,n){"use strict";n.r(t);var r={TILE_COLUMNS:50,TILE_ALPHA:1,COMPOSITE_OPERATION:"soft-light",IS_PIXELATED:!0};function o(e){this.onChange=e}o.prototype.init=function(){const e=new dat.GUI,t=this.onChange;e.add(r,"TILE_COLUMNS",2,200,1).onFinishChange(t),e.add(r,"TILE_ALPHA",0,1,.01).onFinishChange(t),e.add(r,"IS_PIXELATED").onFinishChange(t),e.add(r,"COMPOSITE_OPERATION",["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"]).onFinishChange(t)};var a=o;function i(e){this.canvas=document.querySelector(e),this.ctx=this.canvas.getContext("2d")}const s=i.prototype;s.getCanvas=function(){return this.canvas},s.getContext=function(){return this.ctx},s.redraw=function(){const e=this.ctx,t=this.canvas,n=e.transformedPoint(0,0),r=e.transformedPoint(t.width,t.height);e.clearRect(n.x,n.y,r.x-n.x,r.y-n.y),e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height),e.restore()};var c=i;function d(e,t,n){this.loader=document.querySelector(n),this.canvas=e,this.ctx=t,this.mosaicImages,this.mainImage,this.maxWidth=Math.min(1e3,window.innerWidth),this.titleWidth=Math.ceil(this.maxWidth/r.TILE_COLUMNS),this.mainImageAspectRatio,this.colors,this.randomSamples=[]}const l=d.prototype;function u(e){return new Promise(function(t,n){const r=new Image;r.onload=(()=>t(r)),r.onerror=(()=>n(r)),r.src=e})}l.calculate=function(e){const t=this.canvas,n=e?r.TILE_COLUMNS*e:r.TILE_COLUMNS;t.width=t.style.width=this.maxWidth,t.height=t.style.height=Math.floor(n*this.mainImageAspectRatio)*this.titleWidth,this.colors=this.getTileColors(this.mainImage,n)},l.render=function(e){const t=this.canvas,n=this.loader,o=this.ctx,a=this.mainImage,i=this.mosaicImages;let s=this.titleWidth;const c=this.colors;let d=this.randomSamples;n.style.display="block",t.style.display="none";const l=e?r.TILE_COLUMNS*e:r.TILE_COLUMNS,u=Math.floor(l*this.mainImageAspectRatio);s=Math.ceil(this.maxWidth/l),d.length&&d.length!==l*u&&((d=[]).length=0),o.clearRect(0,0,t.width,t.height),r.IS_PIXELATED||o.drawImage(a,0,0,t.width,t.height);for(var f=0;f<l;f++)for(var p=0;p<u;p++){const e=f*s,a=p*s;let h;if(r.IS_PIXELATED){const t=c[f+p*l];o.fillStyle=t,o.fillRect(e,a,s,s)}o.globalAlpha=r.TILE_ALPHA,o.globalCompositeOperation=r.COMPOSITE_OPERATION,d.length===l*u?h=d[u*f+p]:(h=i[Math.floor(i.length*Math.random())],d.push(h)),h&&o.drawImage(h,e,a,s,s),o.globalCompositeOperation="source-over",o.globalAlpha=1,f===l-1&&p===u-1&&(n.style.display="none",t.style.display="block")}},l.getTileColors=function(e,t){const n=document.createElement("canvas"),r=n.getContext("2d");n.width=t,n.height=t*e.height/e.width,r.drawImage(e,0,0,e.width,e.height,0,0,n.width,n.height);const o=Array.from(r.getImageData(0,0,n.width,n.height).data),a=[];for(let e=0;e<o.length;e+=4)a[e/4]=`rgba(${o[e]}, ${o[e+1]}, ${o[e+2]}, 1)`;return a},l.loadImages=function(e,t){let n=this;u(e).then(function(e){n.mainImage=e,n.mainImageAspectRatio=e.height/e.width,Promise.all(t.map(u)).then(function(e){n.mosaicImages=e,n.calculate(),n.render()}).catch(function(e){alert("Image loading failed")})}).catch(function(e){alert("Image loading failed")})};var f=d;function p(e,t,n){this.canvas=e,this.ctx=t,this.onRedraw=n,this.lastX=this.canvas.width/2,this.lastY=this.canvas.height/2,this.dragStart,this.dragged}const h=p.prototype;h.run=function(){this.trackTransforms(),this.addDOMEvents()},h.trackTransforms=function(){const e=this.ctx,t=document.createElementNS("http://www.w3.org/2000/svg","svg");let n=t.createSVGMatrix();e.getTransform=function(){return n};const r=[],o=e.save;e.save=function(){return r.push(n.translate(0,0)),o.call(e)};const a=e.restore;e.restore=function(){return n=r.pop(),a.call(e)};const i=e.scale;e.scale=function(t,r){return n=n.scaleNonUniform(t,r),i.call(e,t,r)};const s=e.rotate;e.rotate=function(t){return n=n.rotate(180*t/Math.PI),s.call(e,t)};const c=e.translate;e.translate=function(t,r){return n=n.translate(t,r),c.call(e,t,r)};const d=e.transform;e.transform=function(r,o,a,i,s,c){var l=t.createSVGMatrix();return l.a=r,l.b=o,l.c=a,l.d=i,l.e=s,l.f=c,n=n.multiply(l),d.call(e,r,o,a,i,s,c)};const l=e.setTransform;e.setTransform=function(t,r,o,a,i,s){return n.a=t,n.b=r,n.c=o,n.d=a,n.e=i,n.f=s,l.call(e,t,r,o,a,i,s)};const u=t.createSVGPoint();e.transformedPoint=function(e,t){return u.x=e,u.y=t,u.matrixTransform(n.inverse())}},h.addDOMEvents=function(){const e=this.canvas,t=this.ctx,n=this;e.addEventListener("mousedown",function(r){document.body.style.mozUserSelect=document.body.style.webkitUserSelect=document.body.style.userSelect="none",n.lastX=r.offsetX||r.pageX-e.offsetLeft,n.lastY=r.offsetY||r.pageY-e.offsetTop,n.dragStart=t.transformedPoint(n.lastX,n.lastY),n.dragged=!1},!1),e.addEventListener("mousemove",function(r){if(n.lastX=r.offsetX||r.pageX-e.offsetLeft,n.lastY=r.offsetY||r.pageY-e.offsetTop,n.dragged=!0,n.dragStart){const e=t.transformedPoint(n.lastX,n.lastY);t.translate(e.x-n.dragStart.x,e.y-n.dragStart.y),n.onRedraw&&n.onRedraw()}},!1),e.addEventListener("mouseup",function(e){n.dragStart=null,n.dragged||r(e.shiftKey?-1:1)},!1);const r=function(e){const r=t.transformedPoint(n.lastX,n.lastY);t.translate(r.x,r.y);const o=Math.pow(1.1,e);t.scale(o,o),t.translate(-r.x,-r.y),n.onRedraw&&n.onRedraw(o)},o=function(e){const t=e.wheelDelta?e.wheelDelta/40:e.detail?-e.detail:0;return t&&r(t),e.preventDefault()&&!1};e.addEventListener("DOMMouseScroll",o,!1),e.addEventListener("mousewheel",o,!1)};var m=p;function g(){}const y=["src/images/samples/1.jpg","src/images/samples/2.jpg","src/images/samples/3.jpg","src/images/samples/4.jpg","src/images/samples/5.jpg","src/images/samples/6.jpg","src/images/samples/7.jpg","src/images/samples/8.jpg","src/images/samples/9.jpg","src/images/samples/10.jpg","src/images/samples/11.jpg","src/images/samples/12.jpg","src/images/samples/13.jpg"];g.prototype.run=function(){const e=new c("#mosaic_image"),t=e.getCanvas(),n=e.getContext(),r=new f(t,n,"#loader");r.loadImages("src/images/original.png",y);new m(t,n,function(){e.redraw(),r.render()}).run();new a(function(e){r.calculate(e),r.render(e)}).init()},window.onload=function(){(new g).run()}}]);