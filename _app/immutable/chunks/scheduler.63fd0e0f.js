function y(){}const M=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function S(){return Object.create(null)}function E(t){t.forEach(w)}function j(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function v(t,...n){if(t==null){for(const o of n)o(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function D(t,n,e){t.$$.on_destroy.push(v(n,e))}function F(t,n,e,o){if(t){const c=m(t,n,e,o);return t[0](c)}}function m(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function P(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const i=[],d=Math.max(n.dirty.length,c.length);for(let u=0;u<d;u+=1)i[u]=n.dirty[u]|c[u];return i}return n.dirty|c}return n.dirty}function U(t,n,e,o,c,i){if(c){const d=m(n,e,o,i);t.p(d,c)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function I(t,n){const e={};n=new Set(n);for(const o in t)!n.has(o)&&o[0]!=="$"&&(e[o]=t[o]);return e}function J(t){return t&&j(t.destroy)?t.destroy:y}let l;function _(t){l=t}function f(){if(!l)throw new Error("Function called outside component initialization");return l}function K(t){f().$$.on_mount.push(t)}function L(t){f().$$.after_update.push(t)}function N(t,n){return f().$$.context.set(t,n),n}function Q(t){return f().$$.context.get(t)}function R(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],b=[];let s=[];const g=[],x=Promise.resolve();let p=!1;function C(){p||(p=!0,x.then(q))}function T(){return C(),x}function O(t){s.push(t)}const h=new Set;let r=0;function q(){if(r!==0)return;const t=l;do{try{for(;r<a.length;){const n=a[r];r++,_(n),z(n.$$)}}catch(n){throw a.length=0,r=0,n}for(_(null),a.length=0,r=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,h.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function V(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{l as A,_ as B,w as C,a as D,C as E,L as a,b,I as c,N as d,k as e,H as f,F as g,J as h,G as i,P as j,j as k,O as l,R as m,Q as n,K as o,y as p,D as q,E as r,A as s,T as t,U as u,M as v,S as w,q as x,B as y,V as z};
