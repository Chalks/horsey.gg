import{a as c,o as r,b as o,e as b,i as n,u as t}from"./entry.8b90d9a6.js";const s={__name:"DifficultyRibbon",props:{disabled:{type:Boolean,default:!1},on:{type:Boolean,default:!1},small:{type:Boolean,default:!1},defaultCursor:{type:Boolean,default:!1},direction:{type:String,default:"r"},gosh:{type:Boolean,default:!1},shucks:{type:Boolean,default:!1},dang:{type:Boolean,default:!1},darn:{type:Boolean,default:!1},heck:{type:Boolean,default:!1},frick:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:i}){const l=e,d=()=>{l.disabled||i("click")},a=c(()=>l.direction==="t"||l.direction==="b");return(f,u)=>(r(),o("div",{class:n(["select-none transition-all bg-gray-700",{"-translate-x-[0rem]":e.on&&e.direction==="r","-translate-x-[1rem]":!e.on&&e.direction==="r","hover:-translate-x-[0.5rem]":!e.on&&!e.disabled&&e.direction==="r","translate-x-[0rem]":e.on&&e.direction==="l","translate-x-[1rem]":!e.on&&e.direction==="l","hover:translate-x-[0.5rem]":!e.on&&!e.disabled&&e.direction==="l","-translate-y-[0rem]":e.on&&e.direction==="b","-translate-y-[1rem]":!e.on&&e.direction==="b","hover:-translate-y-[0.5rem]":!e.on&&!e.disabled&&e.direction==="b","translate-y-[0rem]":e.on&&e.direction==="t","translate-y-[1rem]":!e.on&&e.direction==="t","hover:translate-y-[0.5rem]":!e.on&&!e.disabled&&e.direction==="t","cursor-pointer":!e.disabled&&!e.defaultCursor,"cursor-not-allowed":e.disabled&&!e.defaultCursor,"opacity-30":e.disabled,"w-8":!e.small&&!t(a),"h-4":!e.small&&!t(a),"w-6":e.small&&!t(a),"h-3":e.small&&!t(a),"h-8":!e.small&&t(a),"w-4":!e.small&&t(a),"h-6":e.small&&t(a),"w-3":e.small&&t(a),"ribbon-r":e.direction==="r","ribbon-t":e.direction==="t","ribbon-b":e.direction==="b","ribbon-l":e.direction==="l"}]),onClick:d},[b("div",{class:n(["border-gray-700",{"bg-gosh":e.gosh,"bg-shucks":e.shucks,"bg-dang":e.dang,"bg-darn":e.darn,"bg-heck":e.heck,"bg-frick":e.frick,"ribbon-r-as-border":e.direction==="r","ribbon-t-as-border":e.direction==="t","ribbon-b-as-border":e.direction==="b","ribbon-l-as-border":e.direction==="l"}])},null,2)],2))}};export{s as _};