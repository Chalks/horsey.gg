import{r as k,Z as $,$ as b,a0 as v,a1 as d,a2 as I,a3 as g}from"./entry.4d1b1712.js";function T(o,a){const e=k({});return $(()=>{const t=b(o),{title:r,titleTemplate:s,...i}=t;e.value={title:r,titleTemplate:s,meta:v(i)}}),d(e,a)}const A=({pageTitle:o,telemetry:a=!0,title:e="Horse Around",description:t="You suck at moving the horsey. Get better at moving the horsey.",imagePath:r="/horsey-social.png",imageType:s="image/png",imageWidth:i=600,imageHeight:f=600,author:y="horsey.gg",published:n,type:l="website"}={})=>{const w=I(),{origin:u}=g().public,m=`${u}${w.path}`.replace(/\/$/,""),h=`${u}${r}`,p=[];a&&p.push({src:"https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js","data-app-id":g().public.telemetryAppId}),d({meta:[{hid:"description",name:"description",content:t}],link:[{rel:"canonical",href:m}],script:p});const c={title:o??e,colorScheme:"only light",themeColor:"#5D9945",ogUrl:m,ogImage:{url:h,type:s,width:i,height:f},ogTitle:e,ogDescription:t,ogType:l,twitterDescription:t,twitterTitle:e,twitterSite:"@chalksy",twitterImage:h};l==="article"&&(c.articleAuthor=y,n&&(c.articlePublishedTime=n)),T(c)};export{A as s};
