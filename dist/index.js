!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){},,,function(t,e,n){"use strict";function r(){}n.r(e);function o(t){return t()}function c(){return Object.create(null)}function u(t){t.forEach(o)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function s(t,e){t.appendChild(e)}function f(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let p;function $(t){p=t}const m=[],h=Promise.resolve();let y=!1;const b=[],g=[],x=[];function _(){y||(y=!0,h.then(w))}function v(t){g.push(t)}function w(){const t=new Set;do{for(;m.length;){const t=m.shift();$(t),O(t.$$)}for(;b.length;)b.shift()();for(;g.length;){const e=g.pop();t.has(e)||(e(),t.add(e))}}while(m.length);for(;x.length;)x.pop()();y=!1}function O(t){t.fragment&&(t.update(t.dirty),u(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(v))}const j=new Set;function S(t,e){t&&t.i&&(j.delete(t),t.i(e))}let k;function M(t,e){t.$$.fragment&&(u(t.$$.on_destroy),e&&t.$$.fragment.d(1),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function C(t,e,n,i,s,f){const l=p;$(t);const d=e.props||{},h=t.$$={fragment:null,ctx:null,props:f,update:r,not_equal:s,bound:c(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(l?l.$$.context:[]),callbacks:c(),dirty:null};let y=!1;var b;h.ctx=n?n(t,d,(e,n)=>{h.ctx&&s(h.ctx[e],h.ctx[e]=n)&&(h.bound[e]&&h.bound[e](n),y&&function(t,e){t.$$.dirty||(m.push(t),_(),t.$$.dirty=c()),t.$$.dirty[e]=!0}(t,e))}):d,h.update(),y=!0,u(h.before_render),h.fragment=i(h.ctx),e.target&&(e.hydrate?h.fragment.l((b=e.target,Array.from(b.childNodes))):h.fragment.c(),e.intro&&S(t.$$.fragment),function(t,e,n){const{fragment:r,on_mount:c,on_destroy:i,after_render:s}=t.$$;r.m(e,n),v(()=>{const e=c.map(o).filter(a);i?i.push(...e):u(e),t.$$.on_mount=[]}),s.forEach(v)}(t,e.target,e.anchor),w()),$(l)}"undefined"!=typeof HTMLElement&&(k=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){M(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class E{$destroy(){M(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}n(0);function P(t){var e,n,o,c;return{c(){e=f("h1"),n=l("Hello "),o=l(t.name),c=l("!"),d(e,"class","svelte-i7qo5m")},m(t,r){!function(t,e,n){t.insertBefore(e,n||null)}(t,e,r),s(e,n),s(e,o),s(e,c)},p(t,e){var n,r;t.name&&(n=o,r=""+(r=e.name),n.data!==r&&(n.data=r))},i:r,o:r,d(t){var n;t&&(n=e).parentNode.removeChild(n)}}}function T(t,e,n){let{name:r}=e;return t.$set=t=>{"name"in t&&n("name",r=t.name)},{name:r}}const A=new class extends E{constructor(t){super(),C(this,t,T,P,i,["name"])}}({target:document.body,props:{name:"world"}});window.app=A;e.default=A}]);