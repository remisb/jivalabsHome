(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aa538":"57382b0f","chunk-2d0b2cf8":"54c60696","chunk-2d0bdf5a":"e1177ede"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=o(t),i=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-fullheight",attrs:{id:"app"},on:{click:function(e){t.isActive=!1}}},[n("div",{staticClass:"hero-head"},[n("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[t._m(0),n("a",{class:[t.isActive?"is-active":"","navbar-burger"],attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navBarBurger"},on:{click:function(e){return e.stopPropagation(),t.changeIsActive(e)}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])]),n("div",{class:t.bindIsActive,attrs:{id:"navBarBurger"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("About us")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/technologicalStack"}},[t._v("Technological Stack")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/contactForm"}},[t._v("Contact form")])],1)])])]),n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[n("router-view")],1)]),n("div",{staticClass:"hero-footer"})])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"navbar-item"},[r("img",{attrs:{src:n("698f"),width:"90",height:"28"}})])}],o={data:function(){return{isActive:!1}},computed:{bindIsActive:function(){return!0===this.isActive?"is-active navbar-menu":"navbar-menu"}},methods:{changeIsActive:function(){this.isActive=!this.isActive}}},c=o,s=(n("034f"),n("2877")),u=Object(s["a"])(c,a,i,!1,null,null,null),l=u.exports,f=n("8c4f");r["a"].use(f["a"]);var d=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"aboutUs",component:function(){return n.e("chunk-2d0b2cf8").then(n.bind(null,"2664"))}},{path:"/technologicalStack",name:"technologicalStack",component:function(){return n.e("chunk-2d0aa538").then(n.bind(null,"1113"))}},{path:"/contactForm",name:"contactForm",component:function(){return n.e("chunk-2d0bdf5a").then(n.bind(null,"2de7"))}}]}),p=n("2f62");r["a"].use(p["a"]);var v=new p["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:d,store:v,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"698f":function(t,e,n){t.exports=n.p+"img/jiva-labs-1.114ee1c9.png"}});
//# sourceMappingURL=app.fda485fd.js.map