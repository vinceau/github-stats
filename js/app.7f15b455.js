(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e8021d41"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/github-stats/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1c26":function(e,t,n){"use strict";var r=n("5f0b"),a=n.n(r);a.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f0b":function(e,t,n){},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("5c0b"),n("2877")),i={},c=Object(s["a"])(i,a,o,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("form",{on:{submit:e.checkForm}},[e.errors.length?n("div",[n("b",[e._v("Please correct the following error(s):")]),n("ul",e._l(e.errors,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"name",type:"text",name:"name",placeholder:"owner/repo"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])])},d=[],f=(n("ac1f"),n("1276"),function(e){var t=/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;return t.test(e)}),h=function(e){var t=/\s/;return!t.test(e)},m=r["a"].extend({name:"Home",data:function(){return{errors:[],message:""}},methods:{checkForm:function(e){if(e.preventDefault(),this.errors=[],this.message){var t=this.message.split("/");2!==t.length?this.errors.push("Invalid repo format name"):f(t[0])?h(t[1])||this.errors.push("Invalid Github repo name"):this.errors.push("Invalid Github username"),this.errors.length||ne.push({name:"Repo",params:{owner:t[0],repo:t[1]}})}else this.errors.push("Repo required.")}}}),v=m,b=Object(s["a"])(v,p,d,!1,null,null,null),g=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Repo",{attrs:{owner:e.$route.params.owner,repo:e.$route.params.repo}})},w=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"repo-component"},[n("h1",[e._v(e._s(e.owner)+"/"+e._s(e.repo))]),e.loading?n("div",[e._v(" Fetching data from Github. This could take a while... ")]):e._e(),!e.loading&&e.data.length>0&&e.data[e.selected]?n("div",[e._v(" File type: "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.options,(function(t){return n("option",{key:t.value,domProps:{value:t.value}},[e._v(" "+e._s(t.text)+" ")])})),0),n("chart",{attrs:{id:e.data[e.selected].extension,series:e.data[e.selected].stats}})],1):e._e()])},j=[],_=(n("d81d"),n("96cf"),n("1da1")),x=n("d4ec"),k=n("bee2"),P=n("262e"),E=n("2caf"),R=n("9ab4"),$=n("60a3"),C=(n("99af"),n("4160"),n("a630"),n("b0c0"),n("4ec9"),n("3ca3"),n("159b"),n("ddb0"),n("df7c")),S=n.n(C),T=n("bc3a"),A=n.n(T);function M(e,t){return z.apply(this,arguments)}function z(){return z=Object(_["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,o,s,i,c,u=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=u.length>2&&void 0!==u[2]?u[2]:5,a="https://gh-stats-api.herokuapp.com/releases/".concat(t,"/").concat(n),o={limit:r},e.next=5,A.a.post(a,void 0,{params:o});case 5:return s=e.sent.data,i=new Map,s.forEach((function(e){e.releaseAssets.nodes.forEach((function(e){var t=S.a.extname(e.name),n=i.get(t)||[];n.push({name:e.name,data:e.downloadCountHistory.map((function(e){return[e.tstz,e.downloads]}))}),i.set(t,n)}))})),c=Array.from(i.keys()),c.sort(),e.abrupt("return",c.map((function(e){return{extension:e,stats:i.get(e)||[]}})));case 11:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chart"},[n("apexchart",{attrs:{type:"line",height:"350",options:e.chartOptions,series:e.series}})],1)},G=[],H=n("1321"),I=n.n(H),q=function(e){Object(P["a"])(n,e);var t=Object(E["a"])(n);function n(){var e;return Object(x["a"])(this,n),e=t.apply(this,arguments),e.chartOptions={chart:{id:e.id},xaxis:{type:"datetime"}},e}return n}($["c"]);Object(R["a"])([Object($["b"])()],q.prototype,"id",void 0),Object(R["a"])([Object($["b"])()],q.prototype,"series",void 0),q=Object(R["a"])([Object($["a"])({components:{apexchart:I.a}})],q);var J=q,L=J,N=(n("1c26"),Object(s["a"])(L,F,G,!1,null,null,null)),D=N.exports,V=function(e){Object(P["a"])(n,e);var t=Object(E["a"])(n);function n(){var e;return Object(x["a"])(this,n),e=t.apply(this,arguments),e.selected=0,e.options=[],e.ext="",e.data=[],e.loading=!1,e}return Object(k["a"])(n,[{key:"mounted",value:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,M(this.owner,this.repo);case 3:this.data=e.sent,this.data.length>0&&(this.ext=this.data[0].extension,this.options=this.data.map((function(e,t){return{text:e.extension,value:t}}))),this.loading=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}($["c"]);Object(R["a"])([Object($["b"])()],V.prototype,"owner",void 0),Object(R["a"])([Object($["b"])()],V.prototype,"repo",void 0),V=Object(R["a"])([Object($["a"])({components:{chart:D}})],V);var B=V,K=B,Q=Object(s["a"])(K,O,j,!1,null,"702ba99f",null),U=Q.exports,W={name:"RepoView",components:{Repo:U}},X=W,Y=Object(s["a"])(X,y,w,!1,null,null,null),Z=Y.exports;r["a"].use(l["a"]);var ee=[{path:"/",name:"Home",component:g},{path:"/:owner/:repo",name:"Repo",component:Z},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],te=new l["a"]({routes:ee}),ne=te,re=n("2f62");r["a"].use(re["a"]);var ae=new re["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:ne,store:ae,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.7f15b455.js.map