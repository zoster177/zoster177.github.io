import{S as v,i as o,s as m,E as r,F as g,k as f,l as d,b as w,A as k,v as _,f as S}from"./index-43d95a4d.js";/* empty css                                             */function c(n){let e,t,s,h,u=`${n[3]}px`;return{c(){e=r("svg"),t=r("use"),g(t,"xlink:href",s="#svg-"+n[0]),f(t,"fill",h=n[4]=="gradient"?"url(#linearGradient)":null),f(e,"aria-hidden","true"),f(e,"width",n[1]),f(e,"height",n[2]),f(e,"class","svelte-1evaqiy"),d(e,"top",u,!1)},m(i,l){w(i,e,l),k(e,t)},p(i,[l]){l&1&&s!==(s="#svg-"+i[0])&&g(t,"xlink:href",s),l&16&&h!==(h=i[4]=="gradient"?"url(#linearGradient)":null)&&f(t,"fill",h),l&2&&f(e,"width",i[1]),l&4&&f(e,"height",i[2]),l&8&&u!==(u=`${i[3]}px`)&&d(e,"top",u,!1)},i:_,o:_,d(i){i&&S(e)}}}function q(n,e,t){let{id:s=""}=e,{width:h=24}=e,{height:u=24}=e,{offset:i=0}=e,{variant:l="default"}=e;return n.$$set=a=>{"id"in a&&t(0,s=a.id),"width"in a&&t(1,h=a.width),"height"in a&&t(2,u=a.height),"offset"in a&&t(3,i=a.offset),"variant"in a&&t(4,l=a.variant)},[s,h,u,i,l]}class A extends v{constructor(e){super(),o(this,e,q,c,m,{id:0,width:1,height:2,offset:3,variant:4})}}export{A as S};
