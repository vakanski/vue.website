(function(t){function e(e){for(var r,u,s=e[0],i=e[1],c=e[2],l=0,p=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eaf01e9e"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(t);var c=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1:function(t,e){},"120b":function(t,e,n){"use strict";var r=n("c6d0"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),n("router-view")],1)},a=[],u=(n("034f"),n("2877")),s={},i=Object(u["a"])(s,o,a,!1,null,null,null),c=i.exports,l=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HomeContent",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t._m(0),t._l(t.posts,(function(e){return n("div",{key:e.id},[n("h1",[t._v(t._s(e.section_1_title))])])}))],2)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" With Bootstrap! "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],m={name:"HomeContent",data:function(){return{posts:[]}},created:function(){var t=this;this.$http.get("http://source.mk/sourcico.com/wp-json/acf/v3/pages/196").then((function(e){for(var n in e.data)t.posts.push(e.data[n])}),(function(t){alert(t)}))}},h=m,b=(n("120b"),Object(u["a"])(h,d,v,!1,null,"0ad44a9b",null)),_=b.exports,g={name:"home",components:{HomeContent:_}},y=g,w=Object(u["a"])(y,f,p,!1,null,null,null),j=w.exports;r["a"].use(l["a"]);var O=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/services",name:"services",component:function(){return n.e("about").then(n.bind(null,"f23e"))}}],k=new l["a"]({mode:"history",base:"/",routes:O}),x=k,C=n("2f62");r["a"].use(C["a"]);var P=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=n("28dd");n("4989"),n("ab8b");r["a"].use(E["a"]),r["a"].http.options.root="http://source.mk/sourcico.com/wp-json",r["a"].config.productionTip=!1,new r["a"]({router:x,store:P,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){},c6d0:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.977211d8.js.map