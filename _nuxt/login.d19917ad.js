import{_ as f}from"./LoadingSpinner.de3a2b3a.js";import{r,e as v,f as e,p as u,v as d,u as l,q as p,c as w,j as h,F as b,s as g,x as y,y as x,o as c}from"./entry.5ada603b.js";const k=e("h1",null,"Login",-1),B=e("label",{for:"email",class:"cursor-pointer"},"Email",-1),S=e("label",{for:"password",class:"cursor-pointer"},"Password",-1),U={class:"relative"},V=["disabled"],E={class:"text-white absolute top-1/2 left-4 -translate-y-1/2"},F={__name:"login",setup(L){const o=r(""),t=r(""),a=r(!1),m=async i=>{if(i.preventDefault(),a.value===!0)return;a.value=!0;const s=await g({email:o.value,password:t.value});s.token?y().setUser(x.user):console.error(s),a.value=!1};return(i,s)=>{const _=f;return c(),v(b,null,[k,e("form",{onSubmit:m},[B,u(e("input",{id:"email","onUpdate:modelValue":s[0]||(s[0]=n=>p(o)?o.value=n:null),type:"email",name:"email",placeholder:"Email"},null,512),[[d,l(o)]]),S,u(e("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=n=>p(t)?t.value=n:null),type:"password",name:"password",placeholder:"********"},null,512),[[d,l(t)]]),e("div",U,[e("input",{type:"submit",value:"Login",disabled:l(a)},null,8,V),e("div",E,[l(a)?(c(),w(_,{key:0})):h("",!0)])])],32)],64)}}};export{F as default};
