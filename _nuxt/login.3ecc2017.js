import{_ as f}from"./LoadingSpinner.1df95ec5.js";import{s as v}from"./seo.5f5eda7a.js";import{k as i,o as p,b as g,e,A as d,C as m,u as l,G as c,c as h,h as w,F as b,H as y,a as k,I as x,J as B,K as S}from"./entry.e199343f.js";const U=e("h1",null,"Login",-1),V=e("label",{for:"email",class:"cursor-pointer"},"Email",-1),E=e("label",{for:"password",class:"cursor-pointer"},"Password",-1),L={class:"relative"},N=["disabled"],T={class:"text-white absolute top-1/2 left-4 -translate-y-1/2"},j={__name:"login",setup(A){v({pageTitle:"login - horsey.gg"});const t=i(""),o=i(""),a=i(!1),_=async u=>{if(u.preventDefault(),a.value===!0)return;a.value=!0;const s=await y({email:t.value,password:o.value});if(s.token)k().setUser(x.user),B("/");else{const{$toast:n}=S();n.error(s.message)}a.value=!1};return(u,s)=>{const n=f;return p(),g(b,null,[U,e("form",{onSubmit:_},[V,d(e("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=r=>c(t)?t.value=r:null),type:"email",name:"email",placeholder:"Email"},null,512),[[m,l(t)]]),E,d(e("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=r=>c(o)?o.value=r:null),type:"password",name:"password",placeholder:"********"},null,512),[[m,l(o)]]),e("div",L,[e("input",{type:"submit",value:"Login",disabled:l(a)},null,8,N),e("div",T,[l(a)?(p(),h(n,{key:0})):w("",!0)])])],32)],64)}}};export{j as default};
