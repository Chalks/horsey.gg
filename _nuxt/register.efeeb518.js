import{_ as f}from"./LoadingSpinner.757bcaab.js";import{s as w}from"./seo.2f37e6db.js";import{j as n,o as _,f as h,l as e,L as p,N as d,u as l,O as c,c as v,i as b,y as g,W as N,X as k,a as x,R as U,T as D,U as T}from"./entry.e5c49017.js";const V=e("h1",null,"Register",-1),B=e("p",null," Your horsey.gg account will enable you to track stats, and if you want we'll notify you when new game modes are available. ",-1),R=e("label",{for:"email",class:"cursor-pointer"},"Email",-1),S=e("label",{for:"displayName",class:"cursor-pointer"},"Display Name",-1),E=e("label",{for:"password",class:"cursor-pointer"},"Password",-1),j=e("div",{class:"flex items-center"},[e("input",{id:"subscribe",type:"checkbox",class:"w-auto mr-4",checked:""}),e("label",{for:"subscribe",class:"cursor-pointer"}," Tell me when there are new horseys to play with ")],-1),L={class:"relative"},A=["disabled"],C={class:"text-white absolute top-1/2 left-4 -translate-y-1/2"},W={__name:"register",setup(F){w({pageTitle:"register - horsey.gg"});const o=n(""),r=n(""),i=n(""),a=n(!1),y=async m=>{if(m.preventDefault(),a.value===!0)return;a.value=!0;const s=await N({email:r.value,password:i.value});if(s.token)await k({publicData:{displayName:o.value}}),x().setUser(U.user),D("/");else{const{$toast:u}=T();u.error(s.message)}a.value=!1};return(m,s)=>{const u=f;return _(),h(g,null,[V,e("form",{onSubmit:y},[B,R,p(e("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=t=>c(r)?r.value=t:null),type:"email",name:"email",placeholder:"Email"},null,512),[[d,l(r)]]),S,p(e("input",{id:"displayName","onUpdate:modelValue":s[1]||(s[1]=t=>c(o)?o.value=t:null),type:"displayName",name:"displayName",placeholder:"Display Name"},null,512),[[d,l(o)]]),E,p(e("input",{id:"password","onUpdate:modelValue":s[2]||(s[2]=t=>c(i)?i.value=t:null),type:"password",name:"password",placeholder:"********"},null,512),[[d,l(i)]]),j,e("div",L,[e("input",{type:"submit",value:"Register",disabled:l(a)},null,8,A),e("div",C,[l(a)?(_(),v(u,{key:0})):b("",!0)])])],32)],64)}}};export{W as default};
