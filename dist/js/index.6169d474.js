(function(e){function n(n){for(var i,o,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);d&&d(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],i=!0,c=1;c<t.length;c++){var s=t[c];0!==a[s]&&(i=!1)}i&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var i={},a={index:0},r=[];function o(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var d=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var i=t("85ec"),a=t.n(i);a.a},1502:function(e,n,t){},"4b5c":function(e,n,t){"use strict";var i=t("538e"),a=t("f3d9"),r=(t("90a8"),t("2877")),o=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=o.exports},"538e":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return a}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"loading"}})},a=[]},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Canvas3D")],1)},r=[],o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("Loading",{style:{opacity:e.loading?1:0}}),t("canvas",{ref:"canvas"})],1)},c=[],s=t("5530"),u=t("d4ec"),d=t("bee2"),l=t("99de"),f=t("7e84"),h=t("262e"),v=t("5a89"),p={SKY_BLUE:"#87CEED"},b=function(e){function n(e){var t;return Object(u["a"])(this,n),t=Object(l["a"])(this,Object(f["a"])(n).call(this,{canvas:e,antialias:!0})),t.setClearColor(p.SKY_BLUE),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=v["R"],t.activeScene=null,t.isRenderLoopActive=!1,window.addEventListener("resize",(function(){t.setSize(window.innerWidth,window.innerHeight)}),!1),t}return Object(h["a"])(n,e),Object(d["a"])(n,[{key:"setScene",value:function(e){this.activeScene=e}},{key:"renderLoop",value:function(){this.isRenderLoopActive&&(requestAnimationFrame(this.renderLoop.bind(this)),this.activeScene.tick(),this.render(this.activeScene,this.activeScene.getCamera()))}},{key:"startRenderLoop",value:function(){this.isRenderLoopActive=!0,this.renderLoop()}},{key:"stopRenderLoop",value:function(){this.isRenderLoopActive=!1}}]),n}(v["ob"]),w=t("2f62"),m=t("4b5c"),g={name:"Canvas3D",data:function(){return{renderer:null,loading:!0}},computed:Object(s["a"])({},Object(w["b"])(["activeScene","sceneLoading"])),mounted:function(){var e=this,n=this.$refs.canvas;this.renderer=new b(n),this.renderer.setScene(this.activeScene),this.activeScene.on("loaded",(function(){e.loading=!1,e.renderer.startRenderLoop()})),this.activeScene.isLoading()||(this.loading=!1,this.renderer.startRenderLoop())},components:{Loading:m["default"]}},O=g,j=(t("5d0b"),t("2877")),y=Object(j["a"])(O,o,c,!1,null,null,null),S=y.exports,L={name:"App",components:{Canvas3D:S}},k=L,x=(t("034f"),Object(j["a"])(k,a,r,!1,null,null,null)),E=x.exports,_=(t("4160"),t("159b"),t("d3b7"),t("3ca3"),t("ddb0"),t("34ad")),A=(t("b0c0"),function(){function e(n){var t=this,i=n.scene,a=n.animations;if(Object(u["a"])(this,e),i.traverse((function(e){e.isMesh&&(e.castShadow=!0)})),this.scene=i,a){this.animations={},a.forEach((function(e){t.animations[e.name]=e})),this.mixer=new v["c"](i);var r=this.mixer.clipAction(this.animations.idle),o=this.mixer.clipAction(this.animations.wave);o.setLoop(v["C"]),o.play(),this.mixer.addEventListener("finished",(function(){r.play()}))}}return Object(d["a"])(e,[{key:"getModel",value:function(){return this.scene}},{key:"hasAnimation",value:function(){return"undefined"!==typeof this.animations}},{key:"tick",value:function(){this.hasAnimation()&&this.mixer.update(1/60)}}]),e}()),C=t("faa1"),M=t.n(C),P=function(e){function n(){var e;return Object(u["a"])(this,n),e=Object(l["a"])(this,Object(f["a"])(n).call(this)),e.camera=e.initCamera(),e.eventEmitter=new M.a,e.loading=!1,e}return Object(h["a"])(n,e),Object(d["a"])(n,[{key:"initCamera",value:function(){var e=window.innerWidth/window.innerHeight,n=60,t=1,i=1e3,a=new v["S"](n,e,t,i);return window.addEventListener("resize",(function(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix()}),!1),a}},{key:"getCamera",value:function(){return this.camera}},{key:"isLoading",value:function(){return this.loading}},{key:"loadObjects",value:function(e){var n=this;this.loading=!0;var t=new _["a"],i=[];return e.forEach((function(e){var n=new Promise((function(n,i){t.load(e,(function(e){n(new A(e))}),(function(){}),(function(e){i(e)}))}));i.push(n)})),Promise.all(i).then((function(e){return n.loading=!1,n.loadedObjects=e,n.eventEmitter.emit("loaded"),e}))}},{key:"tick",value:function(){this.loadedObjects&&this.loadedObjects.forEach((function(e){e.tick()}))}},{key:"on",value:function(e,n){this.eventEmitter.on(e,n)}}]),n}(v["cb"]),R=function(e){function n(){var e;Object(u["a"])(this,n),e=Object(l["a"])(this,Object(f["a"])(n).call(this));var t=new v["a"](16777215,.5),i=new v["U"](16777215,.5);i.position.set(1,10,2),i.castShadow=!0,i.shadow.camera.near=.1,i.shadow.camera.far=100,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024;var a=new v["G"](new v["T"](200,50),new v["I"]({color:15658734,side:v["k"]}));return a.rotation.x=Math.PI/2,a.receiveShadow=!0,e.add(i),e.add(t),e.add(a),e.camera.position.set(0,5,10),e.camera.lookAt(0,0,0),e.loadObjects(["models/stickman.glb"]).then((function(n){n.forEach((function(n){e.add(n.getModel())}))})),e}return Object(h["a"])(n,e),n}(P);i["a"].use(w["a"]);var z={demo:new R},$={activeScene:z.demo,sceneLoading:!0},D=new w["a"].Store({state:$,mutations:{setSceneLoading:function(e,n){e.sceneLoading=n}}}),H=D;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(E)},store:H}).$mount("#app")},"5d0b":function(e,n,t){"use strict";var i=t("1502"),a=t.n(i);a.a},"85ec":function(e,n,t){},"90a8":function(e,n,t){"use strict";var i=t("f062"),a=t.n(i);a.a},a2fe:function(e,n){},f062:function(e,n,t){},f3d9:function(e,n,t){"use strict";var i=t("a2fe"),a=t.n(i);n["default"]=a.a}});
//# sourceMappingURL=index.6169d474.js.map