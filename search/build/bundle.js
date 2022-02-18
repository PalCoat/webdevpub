var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function s(t,n,e){return t.set(e),n}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(){return d("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t){return function(n){return n.preventDefault(),t.call(this,n)}}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function v(t,n){t.value=null==n?"":n}function k(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let y;function x(t){y=t}function _(){if(!y)throw new Error("Function called outside component initialization");return y}const w=[],z=[],E=[],j=[],N=Promise.resolve();let C=!1;function M(t){E.push(t)}const T=new Set;let A=0;function S(){const t=y;do{for(;A<w.length;){const t=w[A];A++,x(t),B(t.$$)}for(x(null),w.length=0,A=0;z.length;)z.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];T.has(n)||(T.add(n),n())}E.length=0}while(w.length);for(;j.length;)j.pop()();C=!1,T.clear(),x(t)}function B(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(M)}}const L=new Set;let O;function P(){O={r:0,c:[],p:O}}function q(){O.r||o(O.c),O=O.p}function D(t,n){t&&t.i&&(L.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),O.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function H(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let l=n.ctx;void 0!==r&&(l=l.slice(),l[r]=c);const s=t&&(n.current=t)(l);let i=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(P(),F(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),q())})):n.block.d(1),s.c(),D(s,1),s.m(n.mount(),n.anchor),i=!0),n.block=s,n.blocks&&(n.blocks[o]=s),i&&S()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=_();if(t.then((t=>{x(e),o(n.then,1,n.value,t),x(null)}),(t=>{if(x(e),o(n.catch,2,n.error,t),x(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function G(t){t&&t.c()}function I(t,e,c,l){const{fragment:s,on_mount:i,on_destroy:u,after_update:a}=t.$$;s&&s.m(e,c),l||M((()=>{const e=i.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(M)}function J(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function K(t,n){-1===t.$$.dirty[0]&&(w.push(t),C||(C=!0,N.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,r,c,l,s,i,u,f=[-1]){const d=y;x(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};u&&u(p.root);let h=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&K(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();r.intro&&D(n.$$.fragment),I(n,r.target,r.anchor,r.customElement),S()}x(d)}class R{$destroy(){J(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(t){let n,e,o,r,c,l,s,h,g,v,y,x,_=t[0].name+"",w=t[0].description+"",z=t[0].published_at.split("T")[0]+"";return{c(){n=f("div"),e=f("a"),o=d(_),c=p(),l=f("p"),s=d(w),h=p(),g=f("p"),v=d(z),$(e,"href",r=t[0].url),$(e,"target","_blank;"),$(l,"class","svelte-sll86s"),k(g,"text-align","right"),$(g,"class","svelte-sll86s"),$(n,"class","result svelte-sll86s")},m(r,a){u(r,n,a),i(n,e),i(e,o),i(n,c),i(n,l),i(l,s),i(n,h),i(n,g),i(g,v),y||(x=m(n,"click",t[3]),y=!0)},p(t,n){1&n&&_!==(_=t[0].name+"")&&b(o,_),1&n&&r!==(r=t[0].url)&&$(e,"href",r),1&n&&w!==(w=t[0].description+"")&&b(s,w),1&n&&z!==(z=t[0].published_at.split("T")[0]+"")&&b(v,z)},d(t){t&&a(n),y=!1,x()}}}function V(t){let n,e,o,r,c,l,s,h,g,v,y,x,_=t[0].name+"",w=Y(t[0].description,60)+"",z=t[0].published_at.split("T")[0]+"";return{c(){n=f("div"),e=f("a"),o=d(_),c=p(),l=f("p"),s=d(w),h=p(),g=f("p"),v=d(z),$(e,"href",r=t[0].url),$(e,"target","_blank;"),$(l,"class","svelte-sll86s"),k(g,"text-align","right"),$(g,"class","svelte-sll86s"),$(n,"class","result svelte-sll86s")},m(r,a){u(r,n,a),i(n,e),i(e,o),i(n,c),i(n,l),i(l,s),i(n,h),i(n,g),i(g,v),y||(x=m(n,"click",t[2]),y=!0)},p(t,n){1&n&&_!==(_=t[0].name+"")&&b(o,_),1&n&&r!==(r=t[0].url)&&$(e,"href",r),1&n&&w!==(w=Y(t[0].description,60)+"")&&b(s,w),1&n&&z!==(z=t[0].published_at.split("T")[0]+"")&&b(v,z)},d(t){t&&a(n),y=!1,x()}}}function W(t){let n;function e(t,n){return t[1]?U:V}let o=e(t),r=o(t);return{c(){r.c(),n=h()},m(t,e){r.m(t,e),u(t,n,e)},p(t,c){o===(o=e(t))&&r?r.p(t,c):(r.d(1),r=o(t),r&&(r.c(),r.m(n.parentNode,n)))},d(t){r.d(t),t&&a(n)}}}function X(n){let e,o=n[1],r=W(n);return{c(){r.c(),e=h()},m(t,n){r.m(t,n),u(t,e,n)},p(t,[n]){2&n&&c(o,o=t[1])?(r.d(1),r=W(t),r.c(),r.m(e.parentNode,e)):r.p(t,n)},i:t,o:t,d(t){t&&a(e),r.d(t)}}}function Y(t,n){if(null==t)return"No description";let e=0,o="";for(let r=0;r<t.length;r++){if(" "==t[r]&&e++,e>=n)return o+"...";o+=t[r]}return console.log(e),t}function Z(t,n,e){let{item:o}=n,r=!1;return t.$$set=t=>{"item"in t&&e(0,o=t.item)},[o,r,()=>{e(1,r=!0)},()=>{e(1,r=!1)}]}class tt extends R{constructor(t){super(),Q(this,t,Z,X,c,{item:0})}}function nt(t,n,e){const o=t.slice();return o[1]=n[e],o}function et(n){let e;return{c(){e=f("h2"),e.textContent="No results",$(e,"style","text-align: center; important")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}function ot(t){let n,e,o=t[0].data.items,r=[];for(let n=0;n<o.length;n+=1)r[n]=rt(nt(t,o,n));const c=t=>F(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=h()},m(t,o){for(let n=0;n<r.length;n+=1)r[n].m(t,o);u(t,n,o),e=!0},p(t,e){if(1&e){let l;for(o=t[0].data.items,l=0;l<o.length;l+=1){const c=nt(t,o,l);r[l]?(r[l].p(c,e),D(r[l],1)):(r[l]=rt(c),r[l].c(),D(r[l],1),r[l].m(n.parentNode,n))}for(P(),l=o.length;l<r.length;l+=1)c(l);q()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)D(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)F(r[t]);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t),t&&a(n)}}}function rt(t){let n,e;return n=new tt({props:{item:t[1]}}),{c(){G(n.$$.fragment)},m(t,o){I(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.item=t[1]),n.$set(o)},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}function ct(t){let n,e,o,r;const c=[ot,et],l=[];function s(t,n){return null!=t[0]&&"data"in t[0]&&"items"in t[0].data&&t[0].data.items.length>0?0:t[0]&&0==t[0].data.items.length?1:-1}return~(e=s(t))&&(o=l[e]=c[e](t)),{c(){n=f("div"),o&&o.c()},m(t,o){u(t,n,o),~e&&l[e].m(n,null),r=!0},p(t,[r]){let i=e;e=s(t),e===i?~e&&l[e].p(t,r):(o&&(P(),F(l[i],1,1,(()=>{l[i]=null})),q()),~e?(o=l[e],o?o.p(t,r):(o=l[e]=c[e](t),o.c()),D(o,1),o.m(n,null)):o=null)},i(t){r||(D(o),r=!0)},o(t){F(o),r=!1},d(t){t&&a(n),~e&&l[e].d()}}}function lt(t,n,e){let{json:o}=n;return t.$$set=t=>{"json"in t&&e(0,o=t.json)},[o]}class st extends R{constructor(t){super(),Q(this,t,lt,ct,c,{json:0})}}const it=[];const ut=function(n,e=t){let o;const r=new Set;function l(t){if(c(n,t)&&(n=t,o)){const t=!it.length;for(const t of r)t[1](),it.push(t,n);if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(c,s=t){const i=[c,s];return r.add(i),1===r.size&&(o=e(l)||t),c(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}();function at(t){let n,e,r,c,l,s,d;return{c(){n=f("div"),e=f("h3"),e.textContent="Miskolczi",r=p(),c=f("form"),l=f("input"),k(e,"display","inline-block"),k(e,"margin-right","1em"),$(e,"class","svelte-o1z6h8"),$(l,"placeholder","Search"),$(l,"class","svelte-o1z6h8"),k(c,"display","inline-block"),$(c,"class","svelte-o1z6h8"),$(n,"class","svelte-o1z6h8")},m(o,a){u(o,n,a),i(n,e),i(n,r),i(n,c),i(c,l),v(l,t[1]),s||(d=[m(l,"input",t[6]),m(c,"submit",g(t[7]))],s=!0)},p(t,n){2&n&&l.value!==t[1]&&v(l,t[1])},d(t){t&&a(n),s=!1,o(d)}}}function ft(t){let n,e,r,c,l,s;return{c(){n=f("h1"),n.textContent="Miskolczi",e=p(),r=f("form"),c=f("input"),k(n,"font-size","5em"),$(n,"class","svelte-o1z6h8"),$(c,"placeholder","Search"),$(c,"class","svelte-o1z6h8"),$(r,"class","svelte-o1z6h8")},m(o,a){u(o,n,a),u(o,e,a),u(o,r,a),i(r,c),v(c,t[1]),l||(s=[m(c,"input",t[4]),m(r,"submit",g(t[5]))],l=!0)},p(t,n){2&n&&c.value!==t[1]&&v(c,t[1])},d(t){t&&a(n),t&&a(e),t&&a(r),l=!1,o(s)}}}function dt(n){let e;function o(t,n){return t[0]?at:ft}let r=o(n),c=r(n);return{c(){c.c(),e=h()},m(t,n){c.m(t,n),u(t,e,n)},p(t,[n]){r===(r=o(t))&&c?c.p(t,n):(c.d(1),c=r(t),c&&(c.c(),c.m(e.parentNode,e)))},i:t,o:t,d(t){c.d(t),t&&a(e)}}}function pt(t,n,e){let o;l(t,ut,(t=>e(2,o=t)));let r,c=!1;async function i(){const t=await fetch("https://demo.dataverse.org/api/search?q="+r+"&show_relevance=true&per_page=100&type=dataset&type=dataverse"),n=await t.json();if(console.log(n),t.ok)return n;throw new Error(n)}return[c,r,o,i,function(){r=this.value,e(1,r)},()=>{s(ut,o=i(),o),e(0,c=!0)},function(){r=this.value,e(1,r)},()=>{s(ut,o=i(),o)}]}class ht extends R{constructor(t){super(),Q(this,t,pt,dt,c,{})}}function mt(n){let e;return{c(){e=f("div"),e.innerHTML='<svg viewBox="0 0 300 300" style="width: 300px; height: 300px"><circle r="5px" fill="#706E65"><animateMotion dur="1" repeatCount="indefinite" path="M 150 250 A 50 50 0 1 1 150 50 A 50 50 0 1 1 150 250"></animateMotion></circle></svg>'},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class gt extends R{constructor(t){super(),Q(this,t,null,mt,c,{})}}function $t(n){let e,o,r=n[2].message+"";return{c(){e=f("h2"),o=d(r)},m(t,n){u(t,e,n),i(e,o)},p(t,n){1&n&&r!==(r=t[2].message+"")&&b(o,r)},i:t,o:t,d(t){t&&a(e)}}}function bt(t){let n,e;return n=new st({props:{json:t[1]}}),{c(){G(n.$$.fragment)},m(t,o){I(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.json=t[1]),n.$set(o)},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){J(n,t)}}}function vt(n){let e,o;return e=new gt({}),{c(){G(e.$$.fragment)},m(t,n){I(e,t,n),o=!0},p:t,i(t){o||(D(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){J(e,t)}}}function kt(t){let n,e,o,r,c;e=new ht({});let l={ctx:t,current:null,token:null,hasCatch:!0,pending:vt,then:bt,catch:$t,value:1,error:2,blocks:[,,,]};return H(r=t[0],l),{c(){n=f("main"),G(e.$$.fragment),o=p(),l.block.c()},m(t,r){u(t,n,r),I(e,n,null),i(n,o),l.block.m(n,l.anchor=null),l.mount=()=>n,l.anchor=null,c=!0},p(n,[e]){t=n,l.ctx=t,1&e&&r!==(r=t[0])&&H(r,l)||function(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}(l,t,e)},i(t){c||(D(e.$$.fragment,t),D(l.block),c=!0)},o(t){F(e.$$.fragment,t);for(let t=0;t<3;t+=1){F(l.blocks[t])}c=!1},d(t){t&&a(n),J(e),l.block.d(),l.token=null,l=null}}}function yt(t,n,e){let o;return l(t,ut,(t=>e(0,o=t))),[o]}return new class extends R{constructor(t){super(),Q(this,t,yt,kt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
