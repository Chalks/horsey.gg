import{_ as f}from"./LoadingSpinner.f1d92889.js";import{s as v}from"./seo.5d0a27dd.js";import{l as i,o as p,b as g,e,L as d,N as m,u as l,O as c,c as h,h as w,x as b,Q as x,a as y,R as k,S,T as B}from"./entry.d66386d0.js";const L=e("h1",null,"Login",-1),N=e("label",{for:"email",class:"cursor-pointer"},"Email",-1),T=e("label",{for:"password",class:"cursor-pointer"},"Password",-1),U={class:"relative"},V=["disabled"],E={class:"text-white absolute top-1/2 left-4 -translate-y-1/2"},C={__name:"login",setup(D){v({pageTitle:"login - horsey.gg"});const t=i(""),o=i(""),a=i(!1),_=async u=>{if(u.preventDefault(),a.value===!0)return;a.value=!0;const s=await x({email:t.value,password:o.value});if(s.token)y().setUser(k.user),S("/");else{const{$toast:n}=B();n.error(s.message)}a.value=!1};return(u,s)=>{const n=f;return p(),g(b,null,[L,e("form",{onSubmit:_},[N,d(e("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=r=>c(t)?t.value=r:null),type:"email",name:"email",placeholder:"Email"},null,512),[[m,l(t)]]),T,d(e("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=r=>c(o)?o.value=r:null),type:"password",name:"password",placeholder:"********"},null,512),[[m,l(o)]]),e("div",U,[e("input",{type:"submit",value:"Login",disabled:l(a)},null,8,V),e("div",E,[l(a)?(p(),h(n,{key:0})):w("",!0)])])],32)],64)}}};export{C as default};
