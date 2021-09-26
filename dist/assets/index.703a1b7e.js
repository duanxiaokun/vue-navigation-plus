var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,i=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&r(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&r(e,n,t[n]);return e},l=(e,o)=>t(e,n(o));import{r as c,c as u,a as p,w as d,o as m,b as g,d as h,e as f,f as v,t as y,g as b,h as x,F as N,i as _,j as O,k as F,l as A,m as E,n as k,p as S,q as T,s as w,u as C,v as I,x as R,y as V,z as P}from"./vendor.a9ecb6e4.js";const $={name:"app",created(){}},j={id:"app"};$.render=function(e,t,n,o,a,s){const r=c("navigation"),i=c("router-view");return m(),u("div",j,[p(i,null,{default:d((({Component:e})=>[p(r,null,{default:d((()=>[(m(),g(h(e)))])),_:2},1024)])),_:1})])};const D={name:"page",data:()=>({scrollTop:0}),methods:{back(){window.history.back()},scroll(){this.scrollTop=this.$refs.content.scrollTop}},activated(){this.$refs.content.scrollTop=this.scrollTop}},q={class:"page"},U={class:"header"},M=f("div",{class:"center"},"title",-1),G=f("div",{class:"right"},null,-1);D.render=function(e,t,n,o,a,s){return m(),u("div",q,[f("div",U,[f("div",{class:"left",onClick:t[0]||(t[0]=(...e)=>s.back&&s.back(...e))},"back"),M,G]),f("div",{class:"content",onScroll:t[1]||(t[1]=(...e)=>s.scroll&&s.scroll(...e)),ref:"content"},[v(e.$slots,"default")],544)])};const J={name:"index",components:{Page:D},data:()=>({random:Math.random().toFixed(4)}),activated(){},deactivated(){}},K={class:"index"},L=f("p",null,[b("This is the "),f("b",null,"index"),b(" page")],-1),B=b("go to list page");J.render=function(e,t,n,o,a,s){const r=c("router-link"),i=c("page");return m(),g(i,null,{default:d((()=>[f("div",K,[L,f("p",null,"random number: "+y(a.random),1),p(r,{to:"list"},{default:d((()=>[B])),_:1})])])),_:1})};const z={name:"list",components:{Page:D},data:()=>({random:Math.random().toFixed(4)}),activated(){console.log("list activated")},deactivated(){console.log("list deactivated")},methods:{goDetail(e){this.$router.push({path:`/list/${e}`})}}},H={class:"list"},W=f("p",null,[b("This is the "),f("b",null,"list"),b(" page")],-1),Q=["onClick"];z.render=function(e,t,n,o,a,s){const r=c("page");return m(),g(r,null,{default:d((()=>[f("div",H,[W,f("p",null,"random number: "+y(a.random),1),(m(),u(N,null,x(30,(e=>f("p",{key:e},[f("span",{style:{"text-decoration":"underline",color:"red"},onClick:t=>s.goDetail(e)},"go to detail page(id: "+y(e)+")",9,Q)]))),64))])])),_:1})};const X={name:"detail",components:{Page:D},data(){return{id:Number(this.$route.params.id),random:Math.random().toFixed(4)}},activated(){},deactivated(){},beforeRouteUpdate(e,t,n){this.id=Number(e.params.id),n()},methods:{goToNextDetail(){this.$router.push(`/list/${this.id>=30?30:this.id+1}`)},resetToIndex(){this.$navigation.cleanRoutes(),this.$router.push("/")}}},Y={class:"detail"},Z=b("This is the "),ee=f("b",null,"detail",-1),te=f("br",null,null,-1);X.render=function(e,t,n,o,a,s){const r=c("page");return m(),g(r,null,{default:d((()=>[f("div",Y,[f("p",null,[Z,ee,b(" page, detail id is "+y(a.id),1)]),f("p",null,"random number: "+y(a.random),1),f("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=(...e)=>s.goToNextDetail&&s.goToNextDetail(...e))},"go to next detail"),te,f("a",{href:"javascript:void(0)",onClick:t[1]||(t[1]=(...e)=>s.resetToIndex&&s.resetToIndex(...e))},"reset to index")])])),_:1})};const ne=_({history:O(),routes:[{path:"/",name:"home",component:J},{path:"/list",name:"List",component:z},{path:"/list/:id",name:"Detail",component:X}]}),oe=F({state:{},getters:{},mutations:{},actions:{},modules:{}});let ae=[];window.sessionStorage.VUE_NAVIGATION&&(ae=JSON.parse(window.sessionStorage.VUE_NAVIGATION));var se=ae;const re=({key:e})=>null!=e?e:null,ie=Array.isArray;function le(e){return 128&e.shapeFlag?e.ssContent:e}function ce(e){return"function"==typeof e&&e.displayName||e.name}function ue(e){const{props:t,ref:n,patchFlag:o,children:a}=e,s=t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&re(s),ref:n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:-1===o&&ie(a)?a.map(pe):a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ue(e.ssContent),ssFallback:e.ssFallback&&ue(e.ssFallback),el:e.el,anchor:e.anchor}}function pe(e){const t=ue(e);return ie(e.children)&&(t.children=e.children.map(pe)),t}const de=ue;function me(e,t){return`${e.name||e.path}?${e.query[t]}`}function ge(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function he(e,t){return ie(e)?e.some((e=>he(e,t))):"string"==typeof e?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function fe(e,t){6&e.shapeFlag&&e.component?fe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}var ve=(e,t,n,o)=>{t&&t.registerModule(n,{state:{routes:se},mutations:{"navigation/FORWARD":(e,{to:t,from:n,name:o})=>{e.routes.push(o)},"navigation/BACK":(e,{to:t,from:n,count:o})=>{e.routes.splice(e.routes.length-o,o)},"navigation/REPLACE":(e,{to:t,from:n,name:o})=>{e.routes.splice(se.length-1,1,o)},"navigation/REFRESH":(e,{to:t,from:n})=>{},"navigation/RESET":e=>{e.routes.splice(0,e.routes.length)}}});return{record:(e,a,s)=>{const r=me(e,o);if(s)((e,o,a)=>{const s={route:o},r={route:a},i=t?t.state[n].routes:se;r.name=i[i.length-1]||null,s.name=e,t?t.commit("navigation/REPLACE",{to:s,from:r,name:e}):i.splice(se.length-1,1,e),window.sessionStorage.VUE_NAVIGATION=JSON.stringify(i)})(r,e,a);else{const o=se.lastIndexOf(r);-1===o?((e,o,a)=>{const s={route:o},r={route:a},i=t?t.state[n].routes:se;r.name=i[i.length-1]||null,s.name=e,t?t.commit("navigation/FORWARD",{to:s,from:r,name:e}):i.push(e),window.sessionStorage.VUE_NAVIGATION=JSON.stringify(i)})(r,e,a):o===se.length-1?((e,o)=>{const a={route:e},s={route:o},r=t?t.state[n].routes:se;a.name=s.name=r[r.length-1],t&&t.commit("navigation/REFRESH",{to:a,from:s})})(e,a):((e,o,a)=>{const s={route:o},r={route:a},i=t?t.state[n].routes:se;r.name=i[i.length-1],s.name=i[i.length-1-e],t?t.commit("navigation/BACK",{to:s,from:r,count:e}):i.splice(se.length-e,e),window.sessionStorage.VUE_NAVIGATION=JSON.stringify(i)})(se.length-1-o,e,a)}},reset:()=>{t?t.commit("navigation/RESET"):se.splice(0,se.length),window.sessionStorage.VUE_NAVIGATION=JSON.stringify([])}}};const ye=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)};function be(e,t){t&&t.pendingBranch?isArray(e)?t.effects.push(...e):t.effects.push(e):I(e)}function xe(e,t,n,o=null){V(e,t,7,[n,o])}function Ne(e){return t=>{R&&R.emit(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}const _e=Ne("component:added"),Oe={name:"navigation",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=A(se),o=E(),a=o.ctx;if(!a.renderer)return t.default;const s=new Map,r=new Set;let i=null;o.__v_cache=s;const l=o.suspense,{renderer:{p:c,m:u,um:p,o:{createElement:d}}}=a,m=d("div");function g(e){ge(e),p(e,o,l)}function h(e){s.forEach(((t,n)=>{const o=ce(t.type);!o||e&&e(o)||f(n)}))}function f(e){const t=s.get(e);i&&t.type===i.type?i&&ge(i):g(t),s.delete(e),r.delete(e)}a.activate=(e,t,n,o,a)=>{const s=e.component;u(e,t,n,0,l),c(s.vnode,e,t,n,s,l,o,e.slotScopeIds,a),be((()=>{s.isDeactivated=!1,s.a&&ye(s.a);const t=e.props&&e.props.onVnodeMounted;t&&xe(t,s.parent,e)}),l),_e(s)},a.deactivate=e=>{const t=e.component;u(e,m,null,1,l),be((()=>{t.da&&ye(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&xe(n,t.parent,e),t.isDeactivated=!0}),l),_e(t)},k((()=>[e.include,e.exclude,n]),(([e,t,n])=>{e&&h((t=>he(e,t))),t&&h((e=>!he(t,e)));for(const o of s.keys())!he(n,o)&&f(o)}),{flush:"post",deep:!0});let v=null;const y=()=>{null!=v&&s.set(v,le(o.subTree))};return S(y),T(y),w((()=>{s.forEach((e=>{const{subTree:t,suspense:n}=o,a=le(t);if(e.type!==a.type)g(e);else{ge(a);const e=a.component.da;e&&be(e,n)}}))})),()=>{if(v=null,!t.default)return null;const n=t.default(),o=n[0];if(n.length>1)return console.error("vue-navigation-plus should contain exactly one component child."),i=null,n;if(!(a=o,a&&!0===a.__v_isVNode&&(4&o.shapeFlag||128&o.shapeFlag)))return i=null,o;var a;let l=le(o);const c=l.type,u=ce(l.type.__asyncLoader?l.type.__asyncResolved||{}:c);const{include:p,exclude:d,max:m}=e;if(p&&(!u||!he(p,u))||d&&u&&he(d,u))return i=l,o;const g=me(C(),"VNK"),h=null==l.key?g:l.key,y=s.get(h);return l.el&&(l=de(l),128&o.shapeFlag&&(o.ssContent=l)),v=h,y?(l.el=y.el,l.component=y.component,l.transition&&fe(l,l.transition),l.shapeFlag|=512,r.delete(h),r.add(h)):(r.add(h),m&&r.size>parseInt(m,10)&&f(r.values().next().value)),l.shapeFlag|=256,i=l,o}}};var Fe={install:(e,{router:t,store:n,moduleName:o="navigation",keyName:a="VNK"}={})=>{if(!t)return void console.error("vue-navigation need options: router");const s=ve(0,n,o,a),r=t.replace.bind(t);let c=!1;t.replace=(e,t,n)=>{c=!0,r(e,t,n)},t.beforeEach(((e,t,n)=>{if(e.query[a])n();else{const o=i({},e.query);e.path===t.path&&function(e,t){if(e===t)return!0;{const n=Object.getOwnPropertyNames(e),o=Object.getOwnPropertyNames(t);if(n.length!==o.length)return!1;for(const a of n)if(e[a]!==t[a])return!1;return!0}}(l(i({},e.query),{[a]:null}),l(i({},t.query),{[a]:null}))&&t.query[a]?o[a]=t.query[a]:o[a]="xxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),n({name:e.name,params:e.params,query:o,replace:c||!t.query[a]})}})),t.afterEach(((e,t)=>{s.record(e,t,c),c=!1})),e.component("navigation",Oe),e.config.globalProperties.$navigation={getRoutes:()=>se.slice(),cleanRoutes:()=>s.reset()}}};P($).use(ne).use(oe).use(Fe,{router:ne,store:oe}).mount("#app");
