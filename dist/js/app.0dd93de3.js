(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eaf01e9e"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=s[t]=[e,r]}));e.push(a[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},1:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("div",{staticClass:"head_top"},[a("div",{staticClass:"header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-xl-9 col-lg-9 col-md-9 col-sm-9"},[a("nav",{staticClass:"navigation navbar navbar-expand-md navbar-dark"},[t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExample04"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[t._m(2),a("li",{staticClass:"nav-item"},[a("router-link",{attrs:{to:"/about"}},[t._v("About")]),a("a",{staticClass:"nav-link",attrs:{href:"about.html"}},[t._v("About")])],1),t._m(3),t._m(4),t._m(5)])])])])])])]),t._m(6)])]),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),a("router-link",{attrs:{to:"/services"}},[t._v("Services")])],1),a("router-view")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section"},[a("div",{staticClass:"full"},[a("div",{staticClass:"center-desk"},[a("div",{staticClass:"logo"},[a("a",{attrs:{href:"index.html"}},[a("picture",[a("source",{attrs:{type:"image/webp",srcset:"images/logo.webp",alt:""}}),a("img",{attrs:{src:"images/logo.png",alt:""}})])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExample04","aria-controls":"navbarsExample04","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"index.html"}},[t._v("Home")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"services.html"}},[t._v("Services")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"careers.html"}},[t._v("Careers")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"contact.html"}},[t._v("Contact")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"banner_main"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row d_flex"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"text-bg"},[a("h1",[t._v("We translate your vision into reality")]),a("p",[t._v(" Sourcico’s purpose is to enable you to speed-up your development pace while maintaining cost-efficiancy and flexability. ")]),a("a",{attrs:{href:"services.html"}},[t._v("Read More")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"text-img"},[a("picture",[a("source",{attrs:{type:"image/webp",srcset:"images/box_img.webp",alt:""}}),a("img",{attrs:{src:"images/box_img.png",alt:""}})])])])])])])}],o=(a("034f"),a("2877")),i={},c=Object(o["a"])(i,s,n,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("9d64")}}),r("HomeContent",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[t._m(0),t._l(t.posts,(function(e){return a("div",{key:e.id},[a("h1",[t._v(t._s(e.section_1_title))])])}))],2)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[t._v(" With Bootstrap! "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],p={name:"HomeContent",data:function(){return{posts:[]}},created:function(){var t=this;this.$http.get("https://source.mk/sourcico.com/wp-json/acf/v3/pages/196").then((function(e){for(var a in e.data)t.posts.push(e.data[a])}),(function(t){alert(t)}))}},h=p,g=(a("af6b"),Object(o["a"])(h,v,m,!1,null,"4c349c06",null)),C=g.exports,b={name:"home",components:{HomeContent:C}},x=b,y=Object(o["a"])(x,f,d,!1,null,null,null),E=y.exports;r["a"].use(u["a"]);var A=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/services",name:"services",component:function(){return a.e("about").then(a.bind(null,"f23e"))}}],P=new u["a"]({mode:"history",base:"/",routes:A}),w=P,S=a("2f62");r["a"].use(S["a"]);var F=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=a("28dd");a("4989"),a("ab8b");a("6672"),r["a"].use(Q["a"]),r["a"].http.options.root="https://source.mk/sourcico.com/wp-json",r["a"].config.productionTip=!1,new r["a"]({router:w,store:F,render:function(t){return t(l)}}).$mount("#app")},6672:function(t,e,a){},"85ec":function(t,e,a){},"872d":function(t,e,a){},"9d64":function(t,e){t.exports="data:image/png;base64,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"},af6b:function(t,e,a){"use strict";var r=a("872d"),s=a.n(r);s.a}});
//# sourceMappingURL=app.0dd93de3.js.map