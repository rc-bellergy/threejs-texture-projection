!function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={0:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([323,1]),r()}({229:function(e,t){},323:function(e,t,r){"use strict";r.r(t);r(38),r(68),r(112),r(179),r(41),r(44),r(45),r(182),r(76),r(34),r(123),r(46),r(184),r(125),r(185);var n=r(0),o=r(156),i=r(157),a=r.n(i),c=r(158),s=r.n(c),u=r(159),l=r(100),f=r(169),p=r(160),d=r.n(p),h=(r(81),r(200),r(82),r(201),r(202),r(204),r(205),r(206),r(207),r(99)),y=r.n(h),b=r(161),v=r.n(b);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function P(e,t){return Object.fromEntries(Object.entries(e).map((function(e,r){var n=O(e,2),o=n[0],i=n[1];return[o,t(i,o,r)]})))}function x(e){return y.a.Slider(e.value,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({min:e.min,max:e.max,step:e.step||.01},"exp"===e.scale&&{min:e.min||.001,step:e.step||.001,mapping:function(e){return Math.pow(10,e)},inverseMapping:Math.log10}))}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=P(e,(function(e){return"object"===g(e)&&(e.hasOwnProperty("value")||e.hasOwnProperty("max")||e.hasOwnProperty("min")||e.hasOwnProperty("step"))?x(e):"object"===g(e)?P(e,(function(e){return"object"===g(e)&&(e.hasOwnProperty("value")||e.hasOwnProperty("max")||e.hasOwnProperty("min")||e.hasOwnProperty("step"))?x(e):e})):e})),n=y()(r),o=t.hideControls?n:v()(n,{expanded:!t.closeControls});if(!t.hideControls){var i='\n      [class^="controlPanel-"] [class*="__field"]::before {\n        content: initial !important;\n      }\n      [class^="controlPanel-"] [class*="__labelText"] {\n        text-indent: 6px !important;\n      }\n      [class^="controlPanel-"] [class*="__field--button"] > button::before {\n        content: initial !important;\n      }\n    ',a=document.createElement("style");a.type="text/css",a.innerHTML=i,document.head.appendChild(a)}return o,o}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t,r){return t&&A(e.prototype,t),r&&A(e,r),e}function T(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var L=0;function M(e){return"__private_"+L+++"_"+e}var U=M("width"),z=M("height"),I=M("capturer"),B=M("lastTime"),Y=M("updateListeners"),q=M("pointerdownListeners"),X=M("pointermoveListeners"),G=M("pointerupListeners"),$=M("startX"),F=M("startY"),H=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r.background,a=void 0===i?"#111":i,c=r.backgroundAlpha,p=void 0===c?1:c,h=r.fov,y=void 0===h?45:h,b=r.frustumSize,v=void 0===b?3:b,g=r.near,m=void 0===g?.01:g,w=r.far,O=void 0===w?100:w,j=D(r,["background","backgroundAlpha","fov","frustumSize","near","far"]);R(this,e),Object.defineProperty(this,U,{writable:!0,value:void 0}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,I,{writable:!0,value:void 0}),this.isRunning=!1,this.time=0,this.dt=0,Object.defineProperty(this,B,{writable:!0,value:performance.now()}),Object.defineProperty(this,Y,{writable:!0,value:[]}),Object.defineProperty(this,q,{writable:!0,value:[]}),Object.defineProperty(this,X,{writable:!0,value:[]}),Object.defineProperty(this,G,{writable:!0,value:[]}),Object.defineProperty(this,$,{writable:!0,value:void 0}),Object.defineProperty(this,F,{writable:!0,value:void 0}),this.resize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.width,n=void 0===r?t.width:r,o=e.height,i=void 0===o?t.height:o,a=e.pixelRatio,c=void 0===a?t.pixelRatio:a;if(t.renderer.getPixelRatio()!==c&&t.renderer.setPixelRatio(c),t.renderer.setSize(n,i),t.camera.isPerspectiveCamera)t.camera.aspect=n/i;else{var s=n/i;t.camera.left=-t.camera.frustumSize*s/2,t.camera.right=t.camera.frustumSize*s/2,t.camera.top=t.camera.frustumSize/2,t.camera.bottom=-t.camera.frustumSize/2}return t.camera.updateProjectionMatrix(),t.composer&&t.composer.setSize(),t.scene.traverse((function(e){"function"==typeof e.resize&&e.resize({width:n,height:i,pixelRatio:c})})),t.draw(),t},this.saveScreenshot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.width,n=void 0===r?1920:r,o=e.height,i=void 0===o?1080:o,a=e.fileName,c=void 0===a?"Screenshot.png":a;t.resize({width:n,height:i,pixelRatio:1}),t.draw();var s=t.canvas.toDataURL("image/png");t.resize(),t.draw(),W(c,s)},this.startRecording=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.width,n=void 0===r?1920:r,o=e.height,i=void 0===o?1080:o,a=e.fileName,c=void 0===a?"Recording":a,s=e.format,u=void 0===s?"gif":s,l=D(e,["width","height","fileName","format"]);T(t,I)[I]||(t.resize({width:n,height:i,pixelRatio:1}),t.draw(),T(t,I)[I]=new d.a(S({format:u,name:c,workersPath:"",motionBlurFrames:2},l)),T(t,I)[I].start())},this.stopRecording=function(){T(t,I)[I]&&(T(t,I)[I].stop(),T(t,I)[I].save(),T(t,I)[I]=void 0,t.resize(),t.draw())},this.update=function(e,r,n){return t.orbitControls&&t.orbitControls.update(),t.scene.traverse((function(t){"function"!=typeof t.update||t.isTransformControls||t.update(e,r,n)})),t.world&&(t.world.step(1/60,e),t.cannonDebugger&&t.cannonDebugger.update(),t.world.bodies.forEach((function(t){"function"==typeof t.update&&t.update(e,r)}))),T(t,Y)[Y].forEach((function(t){return t(e,r,n)})),t},this.draw=function(){var e=t.renderer.xr.enabled&&t.renderer.xr.isPresenting;return t.composer&&!e?t.composer.render(t.dt):t.renderer.render(t.scene,t.camera),t},this.start=function(){if(!t.isRunning)return t.isRunning=!0,t.draw(),t.renderer.setAnimationLoop(t.animate),t},this.stop=function(){if(t.isRunning)return t.renderer.setAnimationLoop(null),t.isRunning=!1,t},this.animate=function(e,r){t.isRunning&&(t.stats&&t.stats.begin(),t.dt=Math.min(t.maxDeltaTime,(e-T(t,B)[B])/1e3),t.time+=t.dt,T(t,B)[B]=e,t.update(t.dt,t.time,r),t.draw(),T(t,I)[I]&&T(t,I)[I].capture(t.canvas),t.stats&&t.stats.end())},this.renderer=new n.fc(S({antialias:!j.postprocessing,alpha:1!==p,preserveDrawingBuffer:!0},j)),void 0!==j.sortObjects&&(this.renderer.sortObjects=j.sortObjects),j.gamma&&(this.renderer.outputEncoding=n.gc),j.xr&&(this.renderer.xr.enabled=!0),this.canvas=this.renderer.domElement,this.renderer.setClearColor(a,p),T(this,U)[U]=j.width,T(this,z)[z]=j.height,this.maxPixelRatio=j.maxPixelRatio||1.5,this.maxDeltaTime=j.maxDeltaTime||1/30;var P=T(this,U)[U]/T(this,z)[z];if(j.orthographic?(this.camera=new n.pb(-v*P/2,v*P/2,v/2,-v/2,m,O),this.camera.frustumSize=v):this.camera=new n.rb(y,P,m,O),this.camera.position.copy(j.cameraPosition||new n.ac(0,0,4)),this.camera.lookAt(0,0,0),this.scene=new n.Hb,this.gl=this.renderer.getContext(),window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.resize),this.resize(),this.isDragging=!1,this.canvas.addEventListener("pointerdown",(function(e){e.isPrimary&&(t.isDragging=!0,T(t,$)[$]=e.offsetX,T(t,F)[F]=e.offsetY,t.scene.traverse((function(t){"function"==typeof t.onPointerDown&&t.onPointerDown(e,{x:e.offsetX,y:e.offsetY})})),T(t,q)[q].forEach((function(t){return t(e,{x:e.offsetX,y:e.offsetY})})))})),this.canvas.addEventListener("pointermove",(function(e){if(e.isPrimary){var r=S(S({x:e.offsetX,y:e.offsetY},void 0!==T(t,$)[$]&&{dragX:e.offsetX-T(t,$)[$]}),void 0!==T(t,F)[F]&&{dragY:e.offsetY-T(t,F)[F]});t.scene.traverse((function(t){"function"==typeof t.onPointerMove&&t.onPointerMove(e,r)})),T(t,X)[X].forEach((function(t){return t(e,r)}))}})),this.canvas.addEventListener("pointerup",(function(e){if(e.isPrimary){t.isDragging=!1;var r=S(S({x:e.offsetX,y:e.offsetY},void 0!==T(t,$)[$]&&{dragX:e.offsetX-T(t,$)[$]}),void 0!==T(t,F)[F]&&{dragY:e.offsetY-T(t,F)[F]});t.scene.traverse((function(t){"function"==typeof t.onPointerUp&&t.onPointerUp(e,r)})),T(t,G)[G].forEach((function(t){return t(e,r)})),T(t,$)[$]=void 0,T(t,F)[F]=void 0}})),j.postprocessing){var x=this.gl.getParameter(this.gl.MAX_SAMPLES);this.composer=new l.a(this.renderer,S({multisampling:Math.min(8,x),frameBufferType:j.gamma?n.D:void 0},j)),this.composer.addPass(new l.b(this.scene,this.camera))}j.orbitControls&&(this.orbitControls=new o.a(this.camera,this.canvas),this.orbitControls.enableDamping=!0,this.orbitControls.dampingFactor=.15,this.orbitControls.enablePan=!1,j.orbitControls instanceof Object&&Object.keys(j.orbitControls).forEach((function(e){t.orbitControls[e]=j.orbitControls[e]}))),j.world&&(this.world=j.world,j.showWorldWireframes&&(this.cannonDebugger=Object(f.a)(this.scene,this.world.bodies,{autoUpdate:!1}))),j.showFps&&(this.stats=new s.a,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)),j.controls&&(this.controls=k(j.controls,j)),this.loadGPUTier=Object(u.a)({glContext:this.gl}).then((function(e){t.gpu={name:e.gpu,tier:e.tier,isMobile:e.isMobile,fps:e.fps}}))}return _(e,[{key:"background",get:function(){return this.renderer.getClearColor(new n.j)},set:function(e){this.renderer.setClearColor(e,this.backgroundAlpha)}},{key:"backgroundAlpha",get:function(){return this.renderer.getClearAlpha()},set:function(e){this.renderer.setClearColor(this.background,e)}},{key:"isRecording",get:function(){return Boolean(T(this,I)[I])}}]),_(e,[{key:"onUpdate",value:function(e){T(this,Y)[Y].push(e)}},{key:"onPointerDown",value:function(e){T(this,q)[q].push(e)}},{key:"onPointerMove",value:function(e){T(this,X)[X].push(e)}},{key:"onPointerUp",value:function(e){T(this,G)[G].push(e)}},{key:"offUpdate",value:function(e){var t=T(this,Y)[Y].indexOf(e);-1!==t&&T(this,Y)[Y].splice(t,1)}},{key:"offPointerDown",value:function(e){var t=T(this,q)[q].indexOf(e);-1!==t&&T(this,q)[q].splice(t,1)}},{key:"offPointerMove",value:function(e){var t=T(this,X)[X].indexOf(e);-1!==t&&T(this,X)[X].splice(t,1)}},{key:"offPointerUp",value:function(e){var t=T(this,G)[G].indexOf(e);-1!==t&&T(this,G)[G].splice(t,1)}},{key:"width",get:function(){return T(this,U)[U]||window.innerWidth}},{key:"height",get:function(){return T(this,z)[z]||window.innerHeight}},{key:"pixelRatio",get:function(){return Math.min(this.maxPixelRatio,window.devicePixelRatio)}},{key:"cursor",get:function(){return this.canvas.style.cursor},set:function(e){this.canvas.style.cursor=e||null}}]),e}();function W(e,t){var r=a()(t),n=document.createElement("a");n.download=e,n.href=window.URL.createObjectURL(r),n.onclick=setTimeout((function(){window.URL.revokeObjectURL(r),n.removeAttribute("href")}),0),n.click()}r(83),r(84),r(211),r(212),r(85),r(223),r(225);var N=r(162),J=r.n(N),Q=r(54),K=r.n(Q),V=r(163),Z=r(164),ee=r.n(Z);function te(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var re=r(53),ne=r(170),oe=r(165);function ie(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ae(e,t){var r,o=t.renderer,i=ie(t,["renderer"]);if(!o)throw new Error("Env map requires renderer to passed in the options for ".concat(e,"!"));if(!Array.isArray(e)){var a=e.slice(e.lastIndexOf(".")+1);switch(a){case"hdr":r=(new re.a).setDataType(n.Wb).loadAsync(e);break;case"exr":r=(new ne.a).setDataType(n.Wb).loadAsync(e);break;case"png":case"jpg":r=(new n.Sb).loadAsync(e).then((function(e){return o.outputEncoding!==n.gc||i.linear||(e.encoding=n.gc),e}));break;default:throw new Error("Extension ".concat(a," not supported"))}r=r.then((function(e){return i.pmrem?function(e,t){var r=new n.qb(t);r.compileEquirectangularShader();var o=r.fromEquirectangular(e);return r.dispose(),e.dispose(),e.image.data=null,o.texture}(e,o):function(e){return e.mapping=n.v,e}(e)}))}else{var c=e[0].slice(e.lastIndexOf(".")+1);switch(c){case"hdr":r=(new oe.a).setDataType(n.Wb).loadAsync(e);break;case"png":case"jpg":r=(new n.l).loadAsync(e).then((function(e){return o.outputEncoding!==n.gc||i.linear||(e.encoding=n.gc),e}));break;default:throw new Error("Extension ".concat(c," not supported"))}r=r.then((function(e){return i.pmrem?function(e,t){var r=new n.qb(t);r.compileCubemapShader();var o=r.fromCubemap(e);return r.dispose(),e.dispose(),e.image.data=null,o.texture}(e,o):e}))}return Object.keys(i).filter((function(e){return!["pmrem","linear"].includes(e)})).forEach((function(e){r=r.then((function(t){return t[e]=i[e],t}))})),r}var ce=r(166),se=r(167),ue=r(168);function le(e){return function(e){if(Array.isArray(e))return fe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return fe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return fe(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function pe(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function de(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){pe(i,n,o,a,c,"next",e)}function c(e){pe(i,n,o,a,c,"throw",e)}a(void 0)}))}}function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){be(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function ge(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function me(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var we=0;function Oe(e){return"__private_"+we+++"_"+e}var je=Oe("queue"),Pe=Oe("loaded"),xe=Oe("onProgressListeners"),ke=Oe("asyncConcurrency"),Ee=Oe("logs"),Se=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.defineProperty(this,je,{writable:!0,value:[]}),Object.defineProperty(this,Pe,{writable:!0,value:{}}),Object.defineProperty(this,xe,{writable:!0,value:[]}),Object.defineProperty(this,ke,{writable:!0,value:10}),Object.defineProperty(this,Ee,{writable:!0,value:[]}),this.get=function(e){if(!e)throw new TypeError("Must specify an URL for AssetManager.get()");return me(t,Pe)[Pe][e]}}var t,r,o,i,a;return t=e,(r=[{key:"addProgressListener",value:function(e){if("function"!=typeof e)throw new TypeError("onProgress must be a function");me(this,xe)[xe].push(e)}},{key:"queue",value:function(e){var t=e.url,r=e.type,n=ve(e,["url","type"]);if(!t)throw new TypeError("Must specify a URL or opt.url for AssetManager.queue()");var o=this._getQueued(t);if(o){var i=ee()(o,["url","type"]);if(JSON.stringify(n)!==JSON.stringify(i)){var a=performance.now().toFixed(3).replace(".",""),c="".concat(t,".").concat(a);return me(this,je)[je].push(ye({key:c,url:t,type:r||this._extractType(t)},n)),c}return o.url}return me(this,je)[je].push(ye({url:t,type:r||this._extractType(t)},n)),t}},{key:"_getQueued",value:function(e){return me(this,je)[je].find((function(t){return t.url===e}))}},{key:"_extractType",value:function(e){var t=e.slice(e.lastIndexOf("."));switch(!0){case/\.(gltf|glb)$/i.test(t):return"gltf";case/\.json$/i.test(t):return"json";case/\.svg$/i.test(t):return"svg";case/\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(t):return"image";case/\.(wav|mp3)$/i.test(t):return"audio";case/\.(mp4|webm|ogg|ogv)$/i.test(t):return"video";default:throw new Error("Could not load ".concat(e,", unknown file extension!"))}}},{key:"loadSingle",value:(a=de(regeneratorRuntime.mark((function e(t){var r,n,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.renderer,n=ve(t,["renderer"]),r){e.next=3;break}throw new Error("You must provide a renderer to the loadSingle function.");case 3:if(e.prev=3,o=performance.now(),(i=n.key||n.url)in me(this,Pe)[Pe]){e.next=10;break}return e.next=9,this._loadItem(ye({renderer:r},n));case 9:me(this,Pe)[Pe][i]=e.sent;case 10:return window.DEBUG&&console.log("\ud83d\udce6 Loaded single asset %c".concat(n.url,"%c in ").concat(K()(performance.now()-o)),"color:blue","color:black"),e.abrupt("return",i);case 14:e.prev=14,e.t0=e.catch(3),console.error("\ud83d\udce6 Asset ".concat(n.url," was not loaded:\n").concat(e.t0));case 17:case"end":return e.stop()}}),e,this,[[3,14]])}))),function(e){return a.apply(this,arguments)})},{key:"load",value:(i=de(regeneratorRuntime.mark((function e(t){var r,n,o,i,a,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.renderer){e.next=3;break}throw new Error("You must provide a renderer to the load function.");case 3:if(n=me(this,je)[je].slice(),me(this,je)[je].length=0,0!==(o=n.length)){e.next=9;break}return setTimeout((function(){return me(c,xe)[xe].forEach((function(e){return e(1)}))}),0),e.abrupt("return");case 9:return i=performance.now(),e.next=12,J()(n,function(){var e=de(regeneratorRuntime.mark((function e(t,n){var i,a,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=performance.now(),(a=t.key||t.url)in me(c,Pe)[Pe]){e.next=7;break}return e.next=6,c._loadItem(ye({renderer:r},t));case 6:me(c,Pe)[Pe][a]=e.sent;case 7:window.DEBUG&&c.log("Loaded %c".concat(t.url,"%c in ").concat(K()(performance.now()-i)),"color:blue","color:black"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),c.logError("Asset ".concat(t.url," was not loaded:\n").concat(e.t0));case 13:s=(n+1)/o,me(c,xe)[xe].forEach((function(e){return e(s)}));case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}(),{concurrency:me(this,ke)[ke]});case 12:window.DEBUG&&(0===(a=me(this,Ee)[Ee].filter((function(e){return"error"===e.type}))).length?this.groupLog("\ud83d\udce6 Assets loaded in ".concat(K()(performance.now()-i)," \u23f1")):this.groupLog("\ud83d\udce6 %c Could not load ".concat(a.length," asset").concat(a.length>1?"s":""," "),"color:white;background:red;"));case 13:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"_loadItem",value:function(e){var t=e.url,r=e.type,o=e.renderer,i=ve(e,["url","type","renderer"]);switch(r){case"gltf":return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(r,n){var o=new ce.a;if(t.meshOpt)o.setMeshoptDecoder(ue.a);else if(t.draco){var i=new se.a;i.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),o.setDRACOLoader(i)}o.load(e,r,null,(function(t){return n(new Error("Could not load GLTF asset ".concat(e,":\n").concat(t)))}))}))}(t,i);case"json":return fetch(t).then((function(e){return e.json()}));case"envmap":case"envMap":case"env-map":return ae(t,ye({renderer:o},i));case"svg":case"image":return Object(V.a)(t,{crossorigin:"anonymous"});case"texture":return function(e,t){var r=t.renderer,o=te(t,["renderer"]);if(!r)throw new Error("Texture requires renderer to passed in the options for ".concat(e,"!"));return new Promise((function(t,i){(new n.Sb).load(e,(function(e){r.outputEncoding!==n.gc||o.linear||(e.encoding=n.gc),Object.keys(o).filter((function(e){return!["linear"].includes(e)})).forEach((function(t){e[t]=o[t]})),r.initTexture(e),t(e)}),null,(function(t){return i(new Error("Could not load texture ".concat(e,":\n").concat(t)))}))}))}(t,ye({renderer:o},i));case"audio":return fetch(t).then((function(e){return e.arrayBuffer()}));case"video":return fetch(t).then((function(e){return e.blob()}));default:throw new Error("Could not load ".concat(t,", the type ").concat(r," is unknown!"))}}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];me(this,Ee)[Ee].push({type:"log",text:t})}},{key:"logError",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];me(this,Ee)[Ee].push({type:"error",text:t})}},{key:"groupLog",value:function(){var e;(e=console).groupCollapsed.apply(e,arguments),me(this,Ee)[Ee].forEach((function(e){var t;(t=console)[e.type].apply(t,le(e.text))})),console.groupEnd(),me(this,Ee)[Ee].length=0}}])&&ge(t.prototype,r),o&&ge(t,o),e}());r(321),r(322);function Ce(e){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function De(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Re(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ae(e,t){return(Ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _e(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Le(e);if(t){var o=Le(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Te(this,r)}}function Te(e,t){return!t||"object"!==Ce(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Le(e){return(Le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Me=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ae(e,t)}(a,e);var t,r,o,i=_e(a);function a(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};De(this,a),(t=i.call(this,r)).webgl=e,t.options=r;var o=t.options.color,c=void 0===o?65280:o,s=new n.d(1,1,1),u=new n.ib({color:c});return t.box=new n.db(s,u),t.add(t.box),t}return t=a,(r=[{key:"update",value:function(e,t){this.box.rotation.y+=.5*e}}])&&Re(t.prototype,r),o&&Re(t,o),a}(n.C);window.DEBUG=window.location.search.includes("debug");var Ue=new H({canvas:document.querySelector("#app"),gamma:!0,postprocessing:!1,showFps:window.DEBUG,orbitControls:window.DEBUG,controls:{roughness:.5,movement:{speed:{value:1.5,max:100,scale:"exp"},frequency:{value:.5,max:5},amplitude:{value:.7,max:2}}},hideControls:!window.DEBUG});window.DEBUG&&(window.webgl=Ue),Ue.canvas.style.visibility="hidden",Se.load({renderer:Ue.renderer}).then((function(){Ue.scene.box=new Me(Ue),Ue.scene.add(Ue.scene.box),function(e){var t=new n.E(16777215,16777215,.6);t.color.setHSL(.6,1,.6),t.groundColor.setHSL(.095,1,.75),t.position.set(0,50,0),e.scene.add(t);var r=new n.t(16777215,1);r.color.setHSL(.1,1,.95),r.position.set(3,5,1),r.position.multiplyScalar(50),e.scene.add(r)}(Ue),Ue.canvas.style.visibility="",Ue.start()}))}});
//# sourceMappingURL=app.94e03802.js.map