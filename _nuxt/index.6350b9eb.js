import{a as z,r as i,b as T,o as w,e as P,f as u,t as O,u as _,F as q,w as R,h as V,i as J,j as D,k as Q,l as X,c as Z}from"./entry.424341c0.js";import{P as I,M as x,C as ee,a as ne}from"./markers.b18db3db.js";const $=100,N=z("baseKnightStore",()=>{const s=i(0),a=i(0),n=i(0),e=i(0),l=i(0),o=i([]),v=i([]),d=i([]),f=i([]),k=T(()=>{const t=o.value.length,c=o.value.reduce((h,g)=>h+g,0),p=v.value.reduce((h,g)=>h+g,0),y=f.value.reduce((h,g)=>h+g,0),b=d.value.reduce((h,g)=>h+g,0);return{allGames:s.value,allMoves:a.value,allInvalidMoves:n.value,allOptimalMoves:e.value,allTime:l.value,allAverageTimePerTotalMoves:l.value/(a.value+n.value),allAverageTimePerValidMoves:l.value/a.value,allAverageTimePerGame:l.value/s.value,rollingGames:t,rollingMoves:c,rollingInvalidMoves:p,rollingOptimalMoves:y,rollingTime:b,rollingAverageTimePerTotalMoves:b/(c+p),rollingAverageTimePerValidMoves:b/c,rollingAverageTimePerGame:b/t}});function r(t){if(a.value+=t.moves??0,n.value+=t.invalidMoves??0,l.value+=t.ms??0,e.value+=t.optimalMoves??0,o.value.length<$)o.value.push(t.moves??0),v.value.push(t.invalidMoves??0),d.value.push(t.ms??0),f.value.push(t.optimalMoves??0);else{const c=s.value%$;o.value[c]=t.moves??0,v.value[c]=t.invalidMoves??0,d.value[c]=t.ms??0,f.value[c]=t.optimalMoves??0}s.value+=1}return{baseStats:k,applyStats:r}}),te={__name:"StatsDisplay",props:{stats:{type:Object,required:!0}},setup(s){const a=N();return(n,e)=>(w(),P(q,null,[u("pre",null,O(s.stats),1),u("pre",null,O(_(a).baseStats),1)],64))}},C=["a","b","c","d","e","f","g","h"],G=["1","2","3","4","5","6","7","8"],oe=(s,a)=>{if(!a)return[];if(!s)return[];if(s!==I.bn&&s!==I.wn)return[];const n=C.indexOf(a[0]),e=G.indexOf(a[1]);return[[n-2,e-1],[n-2,e+1],[n-1,e-2],[n-1,e+2],[n+1,e-2],[n+1,e+2],[n+2,e-1],[n+2,e+1]].filter(([l,o])=>{const v=l>=0&&l<=7,d=o>=0&&o<=7;return v&&d}).map(([l,o])=>`${C[l]}${G[o]}`)},ae=["a","b","c","d","e","f","g","h"],se=["1","2","3","4","5","6","7","8"],K=s=>{const a=ae.indexOf(s[0]);return se.indexOf(s[1])*8+a},le=[0,3,2,3,2,3,4,5,3,2,1,2,3,4,3,4,2,1,4,3,2,3,4,5,3,2,3,2,3,4,3,4,2,3,2,3,4,3,4,5,3,4,3,4,3,4,5,4,4,3,4,3,4,5,4,5,5,4,5,4,5,4,5,6],L=[1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],re=(s,a)=>{const n=(s|7)-(a|7),e=(s&7)-(a&7);return Math.abs(n)+Math.abs(e)},ie=(s,a)=>{const n=K(s),e=K(a),l=re(n,e);let o=le[l];return l===9&&(o+=2*(L[n]^L[e])),o},ce={class:"relative"},ue=u("span",null,"Click to play",-1),ve={__name:"ChessBoard",props:{piece:{type:String,default:null},start:{type:String,default:null},end:{type:String,default:null},showLegalMoves:{type:Boolean,default:!1}},emits:["start","win","move","invalidMove"],setup(s,{emit:a}){const n=s;let e=null;const l=i(null),o=i(null),v=i(null),d=i(null),f=i(!1),k=T(()=>oe(d.value,o.value)),r=T(()=>o.value!==null&&v.value!==null&&o.value===v.value),t={moves:0,invalidMoves:0,optimalMoves:0,startPerformance:0,endPerformance:0,ms:0},c=x.frame,p=x.dot,y=x.circlePrimary,b=M=>{if(!e||r.value)return;const m=M.target.getAttribute("data-square");if(!m)return;const S=e.getMarkers(c,m);(S==null?void 0:S.length)===0&&(e.removeMarkers(c),e.addMarker(c,m))},h=()=>{e&&e.removeMarkers(c)},g=M=>{if(!e||r.value)return;const m=M.target.getAttribute("data-square");k.value.includes(m)?(t.moves+=1,a("move",{from:o.value,to:m}),e.movePiece(o.value,m),o.value=m):(t.invalidMoves+=1,a("invalidMove",{from:o.value,to:m}))},j=()=>{e&&(e.destroy(),l.value.replaceChildren())},F=()=>{e=new ee(l.value,{assetsUrl:"/chess/",extensions:[{class:ne}]}),e.context.addEventListener("mousedown",g),e.context.addEventListener("mouseover",b),e.context.addEventListener("mouseleave",h)},W=()=>{e&&(!n.piece||!n.start||(d.value=n.piece,o.value=n.start,e.setPiece(o.value,d.value,!0)))},H=()=>{e&&n.end&&(v.value=n.end,e.removeMarkers(y),e.addMarker(y,v.value))},A=()=>{e&&(e.removeMarkers(p),n.showLegalMoves&&!r.value&&k.value.forEach(M=>{e.addMarker(p,M)}))},U=()=>{t.moves=0,t.invalidMoves=0,t.optimalMoves=0,t.startPerformance=performance.now(),t.endPerformance=-1,t.ms=0},B=()=>{j(),U(),F(),W(),H(),A()};R(o,()=>{A()}),R(r,M=>{M&&(e&&(e.removeMarkers(c),e.removeMarkers(p)),t.endPerformance=performance.now(),t.ms=t.endPerformance-t.startPerformance,t.optimalMoves=ie(n.start,n.end),f.value=!1,a("win",t))}),V(()=>{B()});const Y=()=>{f.value=!0,a("start"),B()};return(M,m)=>(w(),P("div",ce,[u("div",{ref_key:"boardEl",ref:l},null,512),_(f)?D("",!0):(w(),P("div",{key:0,class:"cursor-pointer bg-gray-300/80 absolute inset-0 flex flex-col items-center justify-center select-none gap-2",onClick:Y},[ue,J(M.$slots,"default")]))]))}},de=["a","b","c","d","e","f","g","h"],me=["1","2","3","4","5","6","7","8"],E=()=>`${de[Math.floor(Math.random()*8)]}${me[Math.floor(Math.random()*8)]}`,fe=u("h1",null,"Base Knight",-1),he=u("p",null,"The Base Knight game trains you on the basic knight moves.",-1),ge=u("h3",null,"fork knight",-1),Me=u("p",null,"coming soon - find the square that forks two pieces",-1),pe=u("h3",null,"defense knight",-1),_e=u("p",null,"coming soon - find a square that defends a piece",-1),ke=u("h3",null,"defended knight",-1),be=u("p",null,"coming soon - find a square that defends the knight",-1),we=u("h3",null,"dodge knight",-1),ye=u("p",null,"coming soon - get to a square while dodging all no-no squares",-1),xe={__name:"index",setup(s){const a=i(null),n=i(null),e=i(null),l=i(null),o=()=>{a.value=["bn","wn"][Math.floor(Math.random()*2)],n.value=E();let r=E();for(;r===n.value;)r=E();e.value=r},v=r=>{l.value=r,N().applyStats(r),o()},d=r=>{console.log("move: ",r)},f=r=>{console.log("invalid move: ",r)},k=()=>{console.log("started")};return V(()=>{o()}),(r,t)=>{const c=te,p=ve;return w(),P(q,null,[fe,Q(p,{"show-legal-moves":"",piece:_(a),start:_(n),end:_(e),onStart:k,onWin:v,onMove:d,onInvalidMove:f},{default:X(()=>[_(l)?(w(),Z(c,{key:0,stats:_(l)},null,8,["stats"])):D("",!0)]),_:1},8,["piece","start","end"]),he,ge,Me,pe,_e,ke,be,we,ye],64)}}};export{xe as default};
