import{S as K,i as M,s as Q,j as _,a as P,m as N,p as F,C as O,k as u,A as i,b as B,q as G,n as D,d as v,t as w,c as R,f as k,r as J,H as U,g as V}from"../../../../chunks/index-43d95a4d.js";import{p as W,L as X}from"../../../../chunks/DarkPaginationNav.svelte_svelte_type_style_lang-2ff62ee7.js";import{C as Y}from"../../../../chunks/ContentCard-79d102d5.js";import"../../../../chunks/paths-9b83c8fd.js";function E(n){let t,s;return t=new X({props:{totalItems:n[1].length,pageSize:S,currentPage:n[0],limit:1,showStepOptions:!0}}),t.$on("setPage",n[8]),{c(){F(t.$$.fragment)},m(e,p){G(t,e,p),s=!0},p(e,p){const o={};p&2&&(o.totalItems=e[1].length),p&1&&(o.currentPage=e[0]),t.$set(o)},i(e){s||(v(t.$$.fragment,e),s=!0)},o(e){w(t.$$.fragment,e),s=!1},d(e){J(t,e)}}}function Z(n){let t,s,e,p,o,g,r,h,c,d,j,m,q,H,C,I,T,L,b,z,y;b=new Y({props:{contents:n[2],style:"small",parent:"peace-corps"}});let a=n[1].length>S&&E(n);return{c(){t=_("script"),e=_("script"),o=_("link"),g=P(),r=_("section"),h=_("header"),c=_("h1"),d=N(n[5]),j=P(),m=_("p"),q=N(n[4]),H=P(),C=new U(!1),I=P(),T=_("hr"),L=P(),F(b.$$.fragment),z=P(),a&&a.c(),t.defer=!0,O(t.src,s="https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.js")||u(t,"src",s),e.defer=!0,O(e.src,p="/init-map.js")||u(e,"src",p),u(o,"rel","preload"),u(o,"as","style"),u(o,"href","https://api.mapbox.com/mapbox-gl-js/v2.10.0/mapbox-gl.css"),u(o,"onload","this.rel = 'stylesheet'"),u(c,"class","not-h1 svelte-yiv4x5"),u(m,"class","h2 svelte-yiv4x5"),C.a=I,u(T,"class","svelte-yiv4x5")},m(l,f){i(document.head,t),i(document.head,e),i(document.head,o),B(l,g,f),B(l,r,f),i(r,h),i(h,c),i(c,d),i(h,j),i(h,m),i(m,q),i(r,H),C.m(n[3],r),i(r,I),i(r,T),i(r,L),G(b,r,null),i(r,z),a&&a.m(r,null),y=!0},p(l,[f]){(!y||f&32)&&D(d,l[5]),(!y||f&16)&&D(q,l[4]),(!y||f&8)&&C.p(l[3]);const A={};f&4&&(A.contents=l[2]),b.$set(A),l[1].length>S?a?(a.p(l,f),f&2&&v(a,1)):(a=E(l),a.c(),v(a,1),a.m(r,null)):a&&(V(),w(a,1,1,()=>{a=null}),R())},i(l){y||(v(b.$$.fragment,l),v(a),y=!0)},o(l){w(b.$$.fragment,l),w(a),y=!1},d(l){k(t),k(e),k(o),l&&k(g),l&&k(r),J(b),a&&a.d()}}}const ae=!0;let S=20;function x(n,t,s){let e,p,o,g,r,h,{data:c}=t,d=1;const j=m=>s(0,d=m.detail.page);return n.$$set=m=>{"data"in m&&s(6,c=m.data)},n.$$.update=()=>{n.$$.dirty&64&&s(5,{seriesTitle:e,secondaryTitle:p,body:o,posts:g}=c,e,(s(4,p),s(6,c)),(s(3,o),s(6,c)),(s(7,g),s(6,c))),n.$$.dirty&128&&s(1,r=g.items),n.$$.dirty&3&&s(2,h=W({items:r,pageSize:S,currentPage:d}))},[d,r,h,o,p,e,c,g,j]}class ne extends K{constructor(t){super(),M(this,t,x,Z,Q,{data:6})}}export{ne as default,ae as hydrate};