import{_ as f}from"./LoadingSpinner.1df95ec5.js";import{s as h}from"./seo.5f5eda7a.js";import{k as i,o as _,b as w,e,A as p,C as d,u as l,G as c,c as v,h as b,F as g,M as N,N as k,a as x,I as D,J as U,K as V}from"./entry.e199343f.js";const B=e("h1",null,"Register",-1),S=e("p",null," Your horsey.gg account will enable you to track stats, and if you want we'll notify you when new game modes are available. ",-1),T=e("label",{for:"email",class:"cursor-pointer"},"Email",-1),E=e("label",{for:"displayName",class:"cursor-pointer"},"Display Name",-1),R=e("label",{for:"password",class:"cursor-pointer"},"Password",-1),A=e("div",{class:"flex items-center"},[e("input",{id:"subscribe",type:"checkbox",class:"w-auto mr-4",checked:""}),e("label",{for:"subscribe",class:"cursor-pointer"}," Tell me when there are new horseys to play with ")],-1),C={class:"relative"},F=["disabled"],M={class:"text-white absolute top-1/2 left-4 -translate-y-1/2"},K={__name:"register",setup(j){h({pageTitle:"register - horsey.gg"});const o=i(""),r=i(""),n=i(""),a=i(!1),y=async m=>{if(m.preventDefault(),a.value===!0)return;a.value=!0;const s=await N({email:r.value,password:n.value});if(s.token)await k({publicData:{displayName:o.value}}),x().setUser(D.user),U("/");else{const{$toast:u}=V();u.error(s.message)}a.value=!1};return(m,s)=>{const u=f;return _(),w(g,null,[B,e("form",{onSubmit:y},[S,T,p(e("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=t=>c(r)?r.value=t:null),type:"email",name:"email",placeholder:"Email"},null,512),[[d,l(r)]]),E,p(e("input",{id:"displayName","onUpdate:modelValue":s[1]||(s[1]=t=>c(o)?o.value=t:null),type:"displayName",name:"displayName",placeholder:"Display Name"},null,512),[[d,l(o)]]),R,p(e("input",{id:"password","onUpdate:modelValue":s[2]||(s[2]=t=>c(n)?n.value=t:null),type:"password",name:"password",placeholder:"********"},null,512),[[d,l(n)]]),A,e("div",C,[e("input",{type:"submit",value:"Register",disabled:l(a)},null,8,F),e("div",M,[l(a)?(_(),v(u,{key:0})):b("",!0)])])],32)],64)}}};export{K as default};