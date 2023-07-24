var Z=Object.defineProperty;var tt=(t,e,n)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var p=(t,e,n)=>(tt(t,typeof e!="symbol"?e+"":e,n),n);import{p as v,r as N,k as O,l as D,v as et,w as z,x as nt,y as it,z as st,A as rt,B as G,C as lt,D as ot,E as at}from"./scheduler.63fd0e0f.js";const V=typeof window<"u";let ct=V?()=>window.performance.now():()=>Date.now(),j=V?t=>requestAnimationFrame(t):v;const x=new Set;function W(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&j(W)}function ft(t){let e;return x.size===0&&j(W),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let S=!1;function ut(){S=!0}function _t(){S=!1}function dt(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,_=(o>0&&e[n[o]].claim_order<=a?o+1:dt(1,o,h=>e[n[h]].claim_order,a))-1;i[s]=n[_]+1;const f=_+1;n[f]=s,o=Math.max(f,o)}const c=[],r=[];let l=e.length-1;for(let s=n[o]+1;s!=0;s=i[s-1]){for(c.push(e[s-1]);l>=s;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);c.reverse(),r.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<r.length;s++){for(;a<c.length&&r[s].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(r[s],_)}}function mt(t,e){t.appendChild(e)}function J(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=B("style");return e.textContent="/* empty */",yt(J(t),e),e.sheet}function yt(t,e){return mt(t.head||t,e),e.sheet}function $t(t,e){if(S){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){t.insertBefore(e,n||null)}function xt(t,e,n){S&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function B(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function It(){return R(" ")}function qt(){return R("")}function Ft(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const wt=["width","height"];function vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&wt.indexOf(i)===-1?t[i]=e[i]:k(t,i,e[i])}function Vt(t,e){for(const n in e)k(t,n,e[n])}function Et(t,e){Object.keys(e).forEach(n=>{Nt(t,n,e[n])})}function Nt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:k(t,e,n)}function Wt(t){return/-/.test(t)?Et:vt}function Jt(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,o=!1){Q(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const s=n(l);return s===void 0?t.splice(r,1):t[r]=s,o?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function X(t,e,n,i){return U(t,o=>o.nodeName===e,o=>{const c=[];for(let r=0;r<o.attributes.length;r++){const l=o.attributes[r];n[l.name]||c.push(l.name)}c.forEach(r=>o.removeAttribute(r))},()=>i(e))}function Kt(t,e,n){return X(t,e,n,B)}function Qt(t,e,n){return X(t,e,n,K)}function At(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Ut(t){return At(t," ")}function I(t,e,n){for(let i=n;i<t.length;i+=1){const o=t[i];if(o.nodeType===8&&o.textContent.trim()===e)return i}return-1}function Xt(t,e){const n=I(t,"HTML_TAG_START",0),i=I(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new q(e);Q(t);const o=t.splice(n,i-n+1);E(o[0]),E(o[o.length-1]);const c=o.slice(1,o.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new q(e,c)}function Yt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Zt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function bt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class Ct{constructor(e=!1){p(this,"is_svg",!1);p(this,"e");p(this,"n");p(this,"t");p(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=K(n.nodeName):this.e=B(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)gt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class q extends Ct{constructor(n=!1,i){super(n);p(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)xt(this.t,this.n[i],n)}}function te(t,e){return new t(e)}const b=new Map;let C=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:pt(e),rules:{}};return b.set(t,n),n}function F(t,e,n,i,o,c,r,l=0){const s=16.666/i;let a=`{
`;for(let d=0;d<=1;d+=s){const g=e+(n-e)*c(d);a+=d*100+`%{${r(g,1-g)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${St(_)}_${l}`,h=J(t),{stylesheet:$,rules:u}=b.get(h)||Mt(h,t);u[f]||(u[f]=!0,$.insertRule(`@keyframes ${f} ${_}`,$.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${o}ms 1 both`,C+=1,f}function Lt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),C-=o,C||Ht())}function Ht(){j(()=>{C||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&E(e)}),b.clear())})}let w;function Pt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function P(t,e,n){t.dispatchEvent(bt(`${e?"intro":"outro"}${n}`))}const A=new Set;let y;function ee(){y={r:0,c:[],p:y}}function ne(){y.r||N(y.c),y=y.p}function Dt(t,e){t&&t.i&&(A.delete(t),t.i(e))}function ie(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),y.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function se(t,e,n,i){let c=e(t,n,{direction:"both"}),r=i?0:1,l=null,s=null,a=null,_;function f(){a&&Lt(t,a)}function h(u,m){const d=u.b-r;return m*=Math.abs(d),{a:r,b:u.b,d,duration:m,start:u.start,end:u.start+m,group:u.group}}function $(u){const{delay:m=0,duration:d=300,easing:g=et,tick:M=v,css:L}=c||Ot,H={start:ct()+m,b:u};u||(H.group=y,y.r+=1),"inert"in t&&(u?_!==void 0&&(t.inert=_):(_=t.inert,t.inert=!0)),l||s?s=H:(L&&(f(),a=F(t,r,u,d,m,g,L)),u&&M(0,1),l=h(H,d),D(()=>P(t,u,"start")),ft(T=>{if(s&&T>s.start&&(l=h(s,d),s=null,P(t,l.b,"start"),L&&(f(),a=F(t,r,l.b,l.duration,0,g,c.css))),l){if(T>=l.end)M(r=l.b,1-r),P(t,l.b,"end"),s||(l.b?f():--l.group.r||N(l.group.c)),l=null;else if(T>=l.start){const Y=T-l.start;r=l.a+l.d*g(Y/l.duration),M(r,1-r)}}return!!(l||s)}))}return{run(u){O(c)?Pt().then(()=>{c=c({direction:u?"in":"out"}),$(u)}):$(u)},end(){f(),l=s=null}}}function re(t){t&&t.c()}function le(t,e){t&&t.l(e)}function jt(t,e,n){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),D(()=>{const c=t.$$.on_mount.map(lt).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):N(c),t.$$.on_mount=[]}),o.forEach(D)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(ot.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,o,c,r,l=[-1]){const s=rt;G(t);const a=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:o,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,h,...$)=>{const u=$.length?$[0]:h;return a.ctx&&o(a.ctx[f],a.ctx[f]=u)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](u),_&&Rt(t,f)),h}):[],a.update(),_=!0,N(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ut();const f=Tt(e.target);a.fragment&&a.fragment.l(f),f.forEach(E)}else a.fragment&&a.fragment.c();e.intro&&Dt(t.$$.fragment),jt(t,e.target,e.anchor),_t(),nt()}G(s)}class ae{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Bt(this,1),this.$destroy=v}$on(e,n){if(!O(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kt);export{vt as A,$t as B,K as C,Qt as D,Xt as E,Vt as F,Jt as G,q as H,ae as S,xt as a,ne as b,Ut as c,Dt as d,qt as e,E as f,B as g,Kt as h,oe as i,Tt as j,k,Zt as l,R as m,At as n,Yt as o,ee as p,te as q,re as r,It as s,ie as t,le as u,jt as v,Bt as w,Wt as x,Ft as y,se as z};
