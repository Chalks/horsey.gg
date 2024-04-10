import{e as P,a2 as f,a3 as O,r as A,l as $,a4 as C,x as w,a as s,G as b,S as N,D as B,j as I,H as K,k as R}from"./entry.d1aab5f4.js";const y=new WeakMap;function E(a){if(y.has(a))return y.get(a);const o={...a};return o.render?o.render=(c,...n)=>{if(c.mounted$){const l=a.render(c,...n);return l.children===null||typeof l.children=="string"?P(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):f(l)}else return f("div",O(c.$attrs??c._.attrs,{key:"placeholder-key"}))}:o.template&&(o.template=`
      <template v-if="mounted$">${a.template}</template>
      <template v-else><div></div></template>
    `),o.setup=(c,n)=>{var h;const l=A(!1);return $(()=>{l.value=!0}),Promise.resolve(((h=a.setup)==null?void 0:h.call(a,c,n))||{}).then(i=>typeof i!="function"?{...i,mounted$:l}:(...g)=>{if(l.value){const r=i(...g);return r.children===null||typeof r.children=="string"?P(r.type,r.props,r.children,r.patchFlag,r.dynamicProps,r.shapeFlag):f(r)}else return f("div",O(n.attrs,{key:"placeholder-key"}))})},y.set(a,o),o}const U=C("moveMachineStore",()=>{const a=w();function o(e){var t;(t=a==null?void 0:a.saveFile)==null||t.setMoveMachineDifficulty(e)}const c=s(()=>{var e,t;return((t=(e=a.saveFile)==null?void 0:e.selectedDifficulties)==null?void 0:t.moveMachine)??b}),n=s(()=>{var e;return Object.values(((e=a.saveFile)==null?void 0:e.moveMachineStats)??[])}),l=s(()=>n.value.filter(({difficulty:e})=>e===b)),h=s(()=>n.value.filter(({difficulty:e})=>e===N)),i=s(()=>n.value.filter(({difficulty:e})=>e===B)),g=s(()=>n.value.filter(({difficulty:e})=>e===I)),r=s(()=>n.value.filter(({difficulty:e})=>e===K)),D=s(()=>n.value.filter(({difficulty:e})=>e===R)),u=s(()=>{var t;return Object.values(((t=a.saveFile)==null?void 0:t.moveMachineStats)??[]).filter(({difficulty:d})=>d===c.value)}),T=s(()=>u.value.length),G=s(()=>u.value.sort(({ms:e},{ms:t})=>e-t)),k=s(()=>u.value.reduce((e,{moves:t})=>e+t,0)),j=s(()=>u.value.reduce((e,{invalidMoves:t})=>e+t,0)),S=s(()=>u.value.reduce((e,{optimalMoves:t})=>e+t,0)),F=s(()=>u.value.reduce((e,{ms:t})=>e+t,0)),H=s(()=>{const e=Math.floor(G.value.length*.1),t=G.value.slice(-1*e).reduce((v,{ms:M,moves:p})=>(v.time+=M,v.moves+=p,v),{time:0,moves:0}),d=G.value.slice(0,e).reduce((v,{ms:M,moves:p})=>(v.time+=M,v.moves+=p,v),{time:0,moves:0});return{allGames:T.value,allMoves:k.value,allInvalidMoves:j.value,allOptimalMoves:S.value,allTime:F.value,allBestMoveRatio:S.value/k.value,allAverageTimePerMove:F.value/k.value,allAverageSlowestTimePerMove:t.time/t.moves,allAverageFastestTimePerMove:d.time/d.moves}});return{currentDifficulty:c,dangGames:i,darnGames:g,frickGames:D,games:u,goshGames:l,heckGames:r,rawGames:n,setDifficulty:o,shucksGames:h,stats:H}}),m=100,V=C("achievementStore",()=>{const a=U(),o=A(!1),c=s(()=>({game1:a.games.length>0})),n=s(()=>({gosh10:a.goshGames.length>=10,gosh100:a.goshGames.length>=m,shucks10:a.shucksGames.length>=10,shucks100:a.shucksGames.length>=m,dang10:a.dangGames.length>=10,dang100:a.dangGames.length>=m,darn10:a.darnGames.length>=10,darn100:a.darnGames.length>=m,heck10:a.heckGames.length>=10,heck100:a.heckGames.length>=m,frick10:a.frickGames.length>=10,frick100:a.frickGames.length>=m}));return{achievementCount:s(()=>{const i=Object.values(c.value).filter(r=>r).length,g=Object.values(n.value).filter(r=>r).length;return i+g}),globalAchievements:c,mmAchievements:n,unlocked:o,toggleGlobalLock:()=>{o.value=!o.value}}});export{U as a,E as c,V as u};
