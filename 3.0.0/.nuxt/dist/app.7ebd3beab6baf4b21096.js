webpackJsonp([9],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"2IfL":function(t,e,n){var r=n("H+Bg");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("FIqI")("75d941a0",r,!1,{sourceMap:!1})},"3P8A":function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"fb-error"},[this._m(0),404==this.error.statusCode?e("div",{staticClass:"fb-error-title"},[this._v("啊呀...这个页面不见了")]):e("div",{staticClass:"fb-error-title"},[this._v("啊呀...服务器出错了")]),this._m(1),this._m(2)])])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fb-error-img"},[e("img",{attrs:{src:n("gqoQ"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fb-error-con"},[e("p",[this._v("可能原因：网络信号差；网址输入错误；该页面已被移动或删除。")]),e("p",[this._v("如有任何建议，请及时反馈给"),e("a",{attrs:{href:"/",alt:"广州飞步信息科技有限公司"}},[this._v("广州飞步信息科技有限公司")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fb-error-button"},[e("a",{attrs:{id:"href",href:"javascript:history.back(-1);"}},[this._v("返回上一页")])])}];r._withStripped=!0;var a={render:r,staticRenderFns:o};e.a=a},"47h2":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},"4Atj":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="4Atj"},F88d:function(t,e,n){"use strict";var r=n("YXn6"),o=n("47h2"),a=!1;var i=function(t){a||n("2IfL")},s=n("X4nt")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt\\components\\nuxt-loading.vue",e.a=s.exports},"H+Bg":function(t,e,n){(t.exports=n("UTlt")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,l=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&l++,n=n.$parent;a.nuxtChildDepth=l;var p=u[l]||c,f={};r.forEach(function(t){void 0!==p[t]&&(f[t]=p[t])});var d={};o.forEach(function(t){"function"==typeof p[t]&&(d[t]=p[t].bind(s))});var h=d.beforeEnter;d.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var x=[t("router-view",a)];return void 0!==i.keepAlive&&(x=[t("keep-alive",x)]),t("transition",{props:f,on:d},x)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("i8gr"),o=n("HBB+"),a=n("To1F"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},JSIg:function(t,e,n){(t.exports=n("UTlt")(!1)).push([t.i,'::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track{background-color:#fff;border-radius:3px}::-webkit-scrollbar-thumb{border-radius:0;background-color:#bbb}::-webkit-scrollbar-button{background-color:#bbb}::-webkit-scrollbar-corner{background:#bbb}input{outline:none;-webkit-appearance:none;border-radius:0}blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul{padding:0;margin:0;-webkit-tap-highlight-color:rgba(255,255,255,0)}article,aside,dialog,figure,footer,header,nav,section{display:block}ol,ul{list-style:none}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}img{border:0}img,input{vertical-align:middle}table{border-collapse:collapse;border-spacing:0}address,caption,cite,code,dfn,em,i,th,var{font-weight:400;font-style:normal}button,input[type=button],input[type=radio],input[type=rest],input[type=submit]{cursor:pointer;-webkit-appearance:none;outline:none}select{cursor:pointer;outline:none}button,input[type=button],input[type=number],input[type=password],input[type=rest],input[type=submit],input[type=tel],input[type=text],textarea{-webkit-appearance:none;-moz-appearance:none;outline:none}a,img{border:0}body,html{font-size:12px;color:#222;font-family:Microsoft YaHei,KaiTi,Helvetica Neue,Helvetica,Roboto,Heiti SC,STHeiTi,Arial,sans-serif}.clearfix:after{display:block;clear:both;height:0;visibility:hidden;font-size:0;line-height:0;content:""}.clearfix{zoom:1}input::-moz-placeholder,textarea::-moz-placeholder{color:#ccc}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#ccc}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#ccc}a{color:#333;text-decoration:none}#header,body{min-width:1200px}.container{padding-top:100px}.animate{-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.w1200{width:1200px;margin:0 auto}.detail article{min-height:300px}.bgf2{background:#f2f2f2;padding-bottom:50px}.overflow-1{-webkit-line-clamp:1}.overflow-1,.overflow-2{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.overflow-2{-webkit-line-clamp:2}.overflow-3{-webkit-line-clamp:3}.overflow-3,.overflow-4{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.overflow-4{-webkit-line-clamp:4}.overflow-5{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5;overflow:hidden}@-webkit-keyframes gdownIn{0%{opacity:0;-webkit-transform:translate3d(0,30px,0)}}@keyframes gdownIn{0%{opacity:0;-webkit-transform:translate3d(0,30px,0);transform:translate3d(0,30px,0)}}@-webkit-keyframes gfadeIn{0%{opacity:0}to{opacity:1}}@keyframes gfadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes gfadeOut{0%{opacity:1}to{opacity:0}}@keyframes gfadeOut{0%{opacity:1}to{opacity:0}}',""])},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("hRKE"),s=n.n(i),u=n("rVsN"),c=n.n(u),l=n("lC5x"),p=n.n(l),f=n("3cXf"),d=n.n(f),h=n("J0Oq"),x=n.n(h),m=n("ZLEe"),v=n.n(m),b=n("aA9S"),y=n.n(b),g=n("i8gr"),w=n("unZF"),_=n("qcny"),k=n("YLfZ"),C=(r=x()(p.a.mark(function t(e,n,r){var o,a,i=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!j.nuxt.err||n.path!==e.path,this._queryChanged=d()(e.query)!==d()(n.query),this._diffQuery=this._queryChanged?Object(k.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(k.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),$=(o=x()(p.a.mark(function t(e,n,r){var o,a,i,s,u,l,f,d,h=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];R=Object(k.e)(n,e).map(function(t,r){return Object(k.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(k.m)(j,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=j.nuxt.dateErr,this._hadError=!!j.nuxt.err,i=[],(s=Object(k.e)(e,i)).length){t.next=24;break}return t.next=13,L.call(this,s,j.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(j.context):_.a.layout);case 17:return u=t.sent,t.next=20,L.call(this,s,j.context,u);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return j.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(O(s,e,n)),t.prev=26,t.next=29,L.call(this,s,j.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!j.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(l=s[0].options.layout)&&(l=l(j.context)),t.next=37,this.loadLayout(l);case 37:return l=t.sent,t.next=40,L.call(this,s,j.context,l);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!j.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(f=!0,s.forEach(function(t){f&&"function"==typeof t.options.validate&&(f=t.options.validate({params:e.params||{},query:e.query||{}}))}),f){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(k.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==R[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=a&&s?30:45;if(a){var l=Object(k.j)(t.options.asyncData,j.context).then(function(e){Object(k.a)(t,e),h.$loading.increase&&h.$loading.increase(u)});o.push(l)}if(s){var p=t.options.fetch(j.context);p&&(p instanceof c.a||"function"==typeof p.then)||(p=c.a.resolve(p)),p.then(function(t){h.$loading.increase&&h.$loading.increase(u)}),o.push(p)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),R=s.map(function(t,n){return Object(k.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),R=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(d=_.a.layout)&&(d=d(j.context)),t.next=63,this.loadLayout(d);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),E=(a=x()(p.a.mark(function t(e){var n,r,o,a;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=e.app,A=e.router,t.next=4,c.a.all(q(A));case 4:return n=t.sent,r=new g.default(j),o=T.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),g.default.nextTick(function(){M(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(O(n,A.currentRoute)),R=A.currentRoute.matched.map(function(t){return Object(k.b)(t.path)(A.currentRoute.params)})),r.$loading={},T.error&&r.error(T.error),A.beforeEach(C.bind(r)),A.beforeEach($.bind(r)),A.afterEach(I),A.afterEach(H.bind(r)),!T.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:$.call(r,A.currentRoute,A.currentRoute,function(t){if(!t)return I(A.currentRoute,A.currentRoute),N.call(r,A.currentRoute),void a();A.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),R=[],j=void 0,A=void 0,T=window.__NUXT__||{};function O(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=y()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);v()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function S(t,e){return T.serverRendered&&e&&Object(k.a)(t,e),t._Ctor=t,t}function q(t){var e,n=this,r=Object(k.d)(t.options.base,t.options.mode);return Object(k.c)(t.match(r),(e=x()(p.a.mark(function t(e,r,o,a,i){var s;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=S(Object(k.l)(e),T.data?T.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function L(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!a)return Object(k.i)(o,e)}function I(t,e){Object(k.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=g.default.extend(t))._Ctor=t,n.components[r]=t),t})}function N(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(j.context)),this.setLayout(e)}function H(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||g.default.nextTick(function(){Object(k.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&R[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)g.default.set(t.$data,r,n[r])}}),N.call(n,t)})}function M(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),A.afterEach(function(e,n){g.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(E).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},To1F:function(t,e,n){"use strict";var r=n("jJCg"),o=n("3P8A"),a=!1;var i=function(t){a||n("Z4ug")},s=n("X4nt")(r.a,o.a,!1,i,null,null);s.options.__file="layouts\\error.vue",e.a=s.exports},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},XSDV:function(t,e,n){var r=n("JSIg");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("FIqI")("d11310c8",r,!1,{sourceMap:!1})},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||b;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),m()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=y,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return $}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return f.a.resolve();return R(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=R,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?A:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var p,f=i[l.name];if(null==f){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+o()(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(p=u(f[d]),!e[c].test(p))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+o()(p)+"`");a+=(0===d?l.prefix:l.delimiter)+p}}else{if(p=l.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(f),!e[c].test(p))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+p+'"');a+=l.prefix+p}}else a+=l}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var p=t[a],f=n[2],d=n[3],h=n[4],x=n[5],m=n[6],v=n[7];i&&(r.push(i),i="");var b=null!=f&&null!=p&&p!==f,y="+"===m||"*"===m,g="?"===m||"*"===m,w=n[2]||s,_=h||x;r.push({name:d||o++,prefix:f||"",delimiter:w,optional:g,repeat:y,partial:b,asterisk:!!v,pattern:_?O(_):v?".*":"[^"+T(w)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=m()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("3cXf"),o=n.n(r),a=n("hRKE"),i=n.n(a),s=n("lC5x"),u=n.n(s),c=n("J0Oq"),l=n.n(c),p=n("rVsN"),f=n.n(p),d=n("ZLEe"),h=n.n(d),x=n("4YfN"),m=n.n(x),v=n("i8gr"),b=function(){return{}};function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=v.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return f.a.all(w(t,(e=l()(u.a.mark(function t(e,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=y(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var k,C,$=(k=l()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",m()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return k.apply(this,arguments)}),E=(C=l()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=13;break}t.t0=!1,t.t1=e,t.t2=n.payload,t.t3=n.error,t.t4={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,payload:t.t2,error:t.t3,base:"/",env:t.t4},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=S(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 13:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=21;break}return t.next=20,$(n.route);case 20:e.context.route=t.sent;case 21:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=27;break}return t.next=26,$(n.from);case 26:e.context.from=t.sent;case 27:case"end":return t.stop()}},t,this)})),function(t,e){return C.apply(this,arguments)});function R(t,e){var n=void 0;return(n=2===t.length?new f.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof f.a||"function"==typeof n.then)||(n=f.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function A(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function S(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},YXn6:function(t,e,n){"use strict";var r=n("i8gr");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#349fff",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},Z4ug:function(t,e,n){var r=n("xh21");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("FIqI")("345ec110",r,!1,{sourceMap:!1})},gqoQ:function(t,e,n){t.exports=n.p+"img/error.aeea1c9.png"},jJCg:function(t,e,n){"use strict";e.a={props:["error"]}},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:h,routes:[{path:"/new",component:s,name:"new"},{path:"/case",component:u,name:"case"},{path:"/about",component:c,name:"about"},{path:"/contact",component:l,name:"contact"},{path:"/case/:id",component:p,name:"case-id"},{path:"/new/:id",component:f,name:"new-id"},{path:"/",component:d,name:"index"}],fallback:!1})};var r=n("rVsN"),o=n.n(r),a=n("i8gr"),i=n("zO6J");a.default.use(i.default);var s=function(){return n.e(2).then(n.bind(null,"42KE")).then(function(t){return t.default||t})},u=function(){return n.e(3).then(n.bind(null,"G8gn")).then(function(t){return t.default||t})},c=function(){return n.e(4).then(n.bind(null,"yPeL")).then(function(t){return t.default||t})},l=function(){return n.e(5).then(n.bind(null,"AZfq")).then(function(t){return t.default||t})},p=function(){return n.e(7).then(n.bind(null,"8lYb")).then(function(t){return t.default||t})},f=function(){return n.e(6).then(n.bind(null,"56HD")).then(function(t){return t.default||t})},d=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var h=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return R});var r=n("lC5x"),o=n.n(r),a=n("rVsN"),i=(n.n(a),n("liLe")),s=n.n(i),u=n("aA9S"),c=n.n(u),l=n("4YfN"),p=n.n(l),f=n("J0Oq"),d=n.n(f),h=n("ABOc"),x=(n.n(h),n("i8gr")),m=n("CjrA"),v=n.n(m),b=n("mtxM"),y=n("0F0d"),g=n("HBB+"),w=n("WRRc"),_=n("To1F"),k=n("Hot+"),C=n("yTq1"),$=n("YLfZ");n.d(e,"a",function(){return _.a});var E,R=(E=d()(o.a.mark(function t(e){var n,r,a,i,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(e),r=p()({router:n,nuxt:{defaultTransition:j,transitions:[j],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},j,{name:t}):c()({},j,t):j}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},C.a),a=e?e.next:function(t){return r.router.push(t)},i=void 0,e?i=n.resolve(e.url).route:(u=Object($.d)(n.options.base),i=n.resolve(u).route),t.next=7,Object($.m)(r,{route:i,next:a,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 7:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";x.default[n]||(x.default[n]=!0,x.default.use(function(){x.default.prototype.hasOwnProperty(t)||s()(x.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),t.next=11;break;case 11:return t.abrupt("return",{app:r,router:n});case 12:case"end":return t.stop()}},t,this)})),function(t){return E.apply(this,arguments)});x.default.component(y.a.name,y.a),x.default.component(g.a.name,g.a),x.default.component(w.a.name,w.a),x.default.component(k.a.name,k.a),x.default.use(v.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var j={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},unZF:function(t,e,n){"use strict";var r=n("HzJ8"),o=n.n(r),a=n("4Atj"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,l=!1,p=void 0;try{for(var f,d=o()(i);!(c=(f=d.next()).done);c=!0){var h=f.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){l=!0,p=t}finally{try{!c&&d.return&&d.return()}finally{if(l)throw p}}e.a=u},xh21:function(t,e,n){(t.exports=n("UTlt")(!1)).push([t.i,".fb-error{width:500px;margin:10% auto 0;padding:50px 0 100px}.fb-error-title{font-size:40px;color:#333;margin:50px 0 30px}.fb-error-con,.fb-error-title{text-align:center;line-height:40px}.fb-error-con{font-size:16px;color:#999}.fb-error-button{width:150px;height:50px;border-radius:5px;margin:38px auto 0;background:#349fff;text-align:center;line-height:50px}.fb-error-button a{color:#fff;font-size:16px;display:block}",""])},yTq1:function(t,e,n){"use strict";var r=n("rVsN"),o=n.n(r),a=n("i8gr"),i=n("F88d"),s=n("XSDV"),u=(n.n(s),{_default:function(){return n.e(0).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"广州网站开发 | 广州APP开发 | 广州小程序开发 - 飞步科技一站式服务",meta:[{charset:"utf-8"},{name:"keywords",content:"广州网站开发,广州APP开发，广州小程序开发，广州微信运营，广州影视摄影，广州网站设计,广州网页设计,广州高端网站建设，广州网站建设公司,小程序开发"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"广州网站开发 - 广州飞步信息科技有限公司拥有国内顶级的网站建设, 网页设计，H5网站设计,微信运营,APP设计,小程序开发与开发团队,设计服务囊括品牌网站建设,营销型网站设计, 营销型H5网站设计和创意执行 , 深度追踪最新设计趋势,为客户量身定制品牌运营服务。"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=5jCnjnCesElvVDufg6yjGMrlYimVXk5f"},{scr:"https://hm.baidu.com/hm.js?3837a289b13b13bb07686e1926221852"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(u["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?o.a.resolve(c[n]):u[n]().then(function(t){return c[n]=t,delete u[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);