(function(e){function n(n){for(var r,i,c=n[0],u=n[1],s=n[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={index:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},1502:function(e,n,t){},"3eb9":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Nav"),t("Canvas3D")],1)},o=[],i=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",[t("h2",[e._v("Home")]),t("ul",[t("li",[t("span",[e._v("Projects")])]),t("li",[t("span",[e._v("Contact")])]),t("li",[t("span",[e._v("About")])])])])}],u={name:"Nav"},s=u,l=(t("ee1b"),t("2877")),d=Object(l["a"])(s,i,c,!1,null,"852306b8",null),f=d.exports,p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("canvas",{ref:"canvas"})},v=[],w=t("5a89"),h=t("34ad"),b=null,m=null;function _(){var e=window.innerWidth/window.innerHeight,n=60,t=1,r=1e3,a=new w["R"](n,e,t,r);return a.position.set(0,5,10),a.lookAt(0,0,0),a}function g(e){var n=new w["bb"];b=_();var t=new w["nb"]({canvas:e,antialias:!0});t.setClearColor("#87CEED"),t.setPixelRatio(window.devicePicelRatio),t.setSize(window.innerWidth,window.innerHeight),t.shadowMapEnabled=!0,t.shadowMap.type=w["Q"];var r=new w["a"](16777215,.2);n.add(r);var a=new w["T"](16777215,1);a.position.set(1,10,2),a.castShadow=!0,a.shadow.camera.near=.1,a.shadow.camera.far=100,a.shadow.mapSize.width=1024,a.shadow.mapSize.height=1024,n.add(a);var o=new w["S"](200,50),i=new w["H"]({color:13421772,side:w["k"]}),c=new w["F"](o,i);c.rotation.x=Math.PI/2,c.receiveShadow=!0,n.add(c);var u=function e(){requestAnimationFrame(e),m&&m.update(1/60),t.render(n,b)};function s(){b.aspect=window.innerWidth/window.innerHeight,b.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",s,!1);var l=new h["a"];l.load("models/stickman_idle_animation.glb",(function(e){e.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0)})),n.add(e.scene),m=new w["c"](e.scene);var t=m.clipAction(e.animations[0]);t.play()}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e)})),u()}var y={name:"Canvas3D",mounted:function(){var e=this.$refs.canvas;g(e)}},j=y,O=(t("5d0b"),Object(l["a"])(j,p,v,!1,null,null,null)),x=O.exports,S={name:"App",components:{Nav:f,Canvas3D:x}},P=S,M=(t("034f"),Object(l["a"])(P,a,o,!1,null,null,null)),E=M.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(E)}}).$mount("#app")},"5d0b":function(e,n,t){"use strict";var r=t("1502"),a=t.n(r);a.a},"85ec":function(e,n,t){},ee1b:function(e,n,t){"use strict";var r=t("3eb9"),a=t.n(r);a.a}});
//# sourceMappingURL=index.3d7d0be7.js.map