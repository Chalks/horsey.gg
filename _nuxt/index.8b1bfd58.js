import{c as N}from"./client-only.5cace2ce.js";import{a as P,o as v,b as m,e as h,f as w,u as a,G as T,h as p,S as K,D as I,i as L,H as F,F as H,j as l,r as Q,P as z,k as C,w as le,l as ne,C as re,M as ce,m as q,p as j,q as W,s as Y,t as y,v as $,x as D,y as Z,z as ie,B as ue,A as B,E as de,I as fe,J as ve,K as me}from"./entry.fda30707.js";import{s as he}from"./seo.e08ed8e0.js";const ge=h("label",{class:"text-xs uppercase tracking-widest"},"Difficulty",-1),pe={class:"flex"},_e={__name:"DifficultyToggle.client",props:{gosh:{type:Boolean,default:!1},shucks:{type:Boolean,default:!1},dang:{type:Boolean,default:!1},darn:{type:Boolean,default:!1},heck:{type:Boolean,default:!1},frick:{type:Boolean,default:!1}},setup(i){const s=P(),t=()=>{s.setDifficulty(T)},o=()=>{s.setDifficulty(K)},e=()=>{s.setDifficulty(I)},n=()=>{s.setDifficulty(L)},d=()=>{s.setDifficulty(F)},u=()=>{s.setDifficulty(H)};return(g,x)=>(v(),m("div",null,[ge,h("div",pe,[i.gosh?(v(),m("div",{key:0,class:w(["cursor-pointer text-sm font-bold p-1 grow text-center select-none",{"bg-gosh":a(s).selectedDifficulty===a(T)}]),onClick:t}," GOSH ",2)):p("",!0),i.shucks?(v(),m("div",{key:1,class:w(["cursor-pointer text-sm font-bold p-1 grow text-center select-none",{"bg-shucks":a(s).selectedDifficulty===a(K)}]),onClick:o}," SHUCKS ",2)):p("",!0),i.dang?(v(),m("div",{key:2,class:w(["cursor-pointer text-sm font-bold p-1 grow text-center select-none",{"bg-dang":a(s).selectedDifficulty===a(I)}]),onClick:e}," DANG ",2)):p("",!0),i.darn?(v(),m("div",{key:3,class:w(["cursor-pointer text-sm font-bold p-1 grow text-center select-none",{"bg-darn":a(s).selectedDifficulty===a(L)}]),onClick:n}," DARN ",2)):p("",!0),i.heck?(v(),m("div",{key:4,class:w(["cursor-pointer text-sm font-bold p-1 grow text-center select-none",{"bg-heck":a(s).selectedDifficulty===a(F)}]),onClick:d}," HECK ",2)):p("",!0),i.frick?(v(),m("div",{key:5,class:w(["cursor-pointer text-sm font-bold p-1 grow text-center select-none",{"bg-frick":a(s).selectedDifficulty===a(H)}]),onClick:u}," FRICK ",2)):p("",!0)])]))}},ye={__name:"DifficultyDescription.client",props:{gosh:{type:Boolean,default:!1},shucks:{type:Boolean,default:!1},dang:{type:Boolean,default:!1},darn:{type:Boolean,default:!1},heck:{type:Boolean,default:!1},frick:{type:Boolean,default:!1}},setup(i){const s=i,t=P(),o=l(()=>s.gosh&&t.selectedDifficulty===T),e=l(()=>s.shucks&&t.selectedDifficulty===K),n=l(()=>s.dang&&t.selectedDifficulty===I),d=l(()=>s.darn&&t.selectedDifficulty===L),u=l(()=>s.heck&&t.selectedDifficulty===F),g=l(()=>s.frick&&t.selectedDifficulty===H),x=l(()=>o.value||e.value||n.value||d.value||u.value||g.value);return(c,r)=>a(x)?(v(),m("div",{key:0,class:w(["text-xs font-bold text-gray-700 px-1 pt-1 last:pb-1",{"bg-gosh":a(o),"bg-shucks":a(e),"bg-dang":a(n),"bg-darn":a(d),"bg-heck":a(u),"bg-frick":a(g)}])},[Q(c.$slots,"default")],2)):p("",!0)}},ke=["a","b","c","d","e","f","g","h"],be=["1","2","3","4","5","6","7","8"],O=()=>`${ke[Math.floor(Math.random()*8)]}${be[Math.floor(Math.random()*8)]}`,J=["a","b","c","d","e","f","g","h"],X=["1","2","3","4","5","6","7","8"],xe=(i,s)=>{if(!i)return[];if(!s)return[];if(i!==z.bn&&i!==z.wn)return[];const t=J.indexOf(s[0]),o=X.indexOf(s[1]);return[[t-2,o-1],[t-2,o+1],[t-1,o-2],[t-1,o+2],[t+1,o-2],[t+1,o+2],[t+2,o-1],[t+2,o+1]].filter(([e,n])=>{const d=e>=0&&e<=7,u=n>=0&&n<=7;return d&&u}).map(([e,n])=>`${J[e]}${X[n]}`)};const Me={class:"relative"},we=h("span",null,"Click to play",-1),Se={__name:"ChessBoard",props:{start:{type:String,default:null},goalSquares:{type:Array,default:()=>[]},disableLegalMoves:{type:Number,default:0},showLegalMoves:{type:Boolean,default:!1}},emits:["start","move","invalidMove"],setup(i,{expose:s,emit:t}){const o=i;let e=null;const n=C(null),d=C(null),u=C(null),g=l(()=>xe(d.value,u.value)),x=l(()=>{const f=g.value.filter(oe=>!o.goalSquares.includes(oe)),b=Math.min(g.value.length-1,f.length),R=f.sort(()=>.5-Math.random()),ae=Math.min(o.disableLegalMoves,b);return R.slice(0,ae)}),c=l(()=>g.value.filter(f=>!x.value.includes(f))),r=C(!1),M=f=>{if(!e)return;const b=f.target.getAttribute("data-square");if(!b)return;const R=e.getMarkers(q,b);(R==null?void 0:R.length)===0&&(e.removeMarkers(q),e.addMarker(q,b))},k=()=>{e&&e.removeMarkers(q)},S=f=>{if(!e)return;const b=f.target.getAttribute("data-square");c.value.includes(b)?(e.movePiece(u.value,b),t("move",{from:u.value,to:b}),u.value=b):t("invalidMove",{from:u.value,to:b})},_=()=>{e&&(e.destroy(),n.value.replaceChildren())},E=()=>{e=new re(n.value,{assetsUrl:"/chess/",extensions:[{class:ce}]}),e.context.addEventListener("mousedown",S),e.context.addEventListener("mouseover",M),e.context.addEventListener("mouseleave",k)},ee=()=>{if(!e)return;d.value=["bn","wn"][Math.floor(Math.random()*2)];let f=o.start||O();for(;o.goalSquares.includes(f);)f=O();u.value=f,e.setPiece(u.value,d.value,!0)},te=()=>{e&&(e.removeMarkers(j),o.goalSquares.forEach(f=>{e.addMarker(j,f)}))},V=()=>{e&&(e.removeMarkers(W),o.showLegalMoves&&c.value.forEach(f=>{e.addMarker(W,f)}))},U=()=>{e&&(e.removeMarkers(Y),x.value.forEach(f=>{e.addMarker(Y,f)}))};le(u,()=>{V(),U()}),ne(()=>{E()});const se=()=>{r.value=!0,t("start")};return s({ready:()=>{_(),E(),ee(),te(),V(),U()},stop:()=>{e==null||e.removeMarkers(),_(),E(),r.value=!1}}),(f,b)=>(v(),m("div",Me,[h("div",{ref_key:"boardEl",ref:n},null,512),a(r)?p("",!0):(v(),m("div",{key:0,class:"cursor-pointer bg-gray-300/80 absolute inset-0 flex flex-col items-center justify-center select-none gap-2",onClick:se},[we,Q(f.$slots,"default")]))]))}},De=N(_e),Be=N(ye),$e={__name:"BaseHorsey",setup(i){const s=C(null),t=C([]),o=P();let e;const n=l(()=>o.selectedDifficulty===T),d=l(()=>o.selectedDifficulty===I?1:o.selectedDifficulty===L?2:o.selectedDifficulty===F?3:o.selectedDifficulty===H?4:0),u=()=>{e={start:null,end:null,moves:0,invalidMoves:0,startPerformance:0,endPerformance:0,ms:0}},g=()=>{o.saveFile.addBaseStat(new ue({...e,difficulty:o.selectedDifficulty,date:Date.now()})),u(),s.value.stop()},x=async()=>{u(),t.value=[O()],e.end=t.value[0],e.startPerformance=performance.now(),await ie(),s.value.ready()},c=({from:M,to:k})=>{e.moves===0&&(e.start=M),e.moves+=1,t.value[0]===k&&(e.endPerformance=performance.now(),e.ms=e.endPerformance-e.startPerformance,g())},r=()=>{e.invalidMoves+=1};return(M,k)=>{const S=De,_=Be,E=Se;return v(),m(Z,null,[h("div",null,[y(S,{gosh:"",shucks:"",dang:"",darn:"",heck:"",frick:""}),y(_,{gosh:""},{default:$(()=>[D(" Show legal moves ")]),_:1}),y(_,{shucks:"",dang:"",darn:"",heck:"",frick:""},{default:$(()=>[D(" Hide legal moves ")]),_:1}),y(_,{dang:"",darn:"",heck:"",frick:""},{default:$(()=>[D(" Disable one legal move ")]),_:1}),y(_,{darn:"",heck:"",frick:""},{default:$(()=>[D(" Disable one more legal move ")]),_:1}),y(_,{heck:"",frick:""},{default:$(()=>[D(" Disable one more legal move ")]),_:1}),y(_,{frick:""},{default:$(()=>[D(" Disable one more legal move ")]),_:1})]),y(E,{ref_key:"board",ref:s,"show-legal-moves":a(n),"disable-legal-moves":a(d),"goal-squares":a(t),class:"mt-2",onStart:x,onMove:c,onInvalidMove:r},null,8,["show-legal-moves","disable-legal-moves","goal-squares"])],64)}}},Ge={class:"rounded-b-lg overflow-hidden w-full origin-bottom-left not-prose"},Ce={class:"relative px-4 bg-white"},Ee=h("div",{class:"absolute top-1/2 left-0 right-0 bottom-0 bg-black"},null,-1),Re={class:"stat text-3xl text-white mix-blend-difference translate-y-[10%] z-10"},Ae={class:"bg-green-900 h-4 w-full relative"},Te={class:"text-white font-bold text-xs whitespace-nowrap"},Pe={__name:"StatItem.client",props:{label:{type:String,required:!0},value:{type:Array,required:!0},ratio:{type:Boolean,default:!1},speed:{type:Boolean,default:!1},count:{type:Boolean,default:!1},higherIsBetter:{type:Boolean,default:!1},lowerIsBetter:{type:Boolean,default:!1}},setup(i){const s=i,t=l(()=>{if(s.ratio)return(1-s.value)*100;if(s.speed){const[e,n,d]=s.value;return(n-e)/(d-e)*100}return s.count?0:50}),o=l(()=>{if(s.ratio)return`${(100*s.value[0]).toPrecision(4)}% optimal moves`;if(s.speed){const[e,n,d]=s.value;return`${n.toFixed(2)} ms / game (${d.toFixed(2)} avg slowest, ${e.toFixed(2)} avg fastest)`}return s.count?s.value.join(" "):s.value});return(e,n)=>(v(),m("div",Ge,[h("div",Ce,[Ee,h("div",Re,B(i.label),1)]),h("div",Ae,[h("div",{class:w(["absolute top-0 bottom-0 left-0 bg-green-700 flex items-center px-4 transition-all",{"rounded-r-full":a(t)>0}]),style:de({right:`${a(t)}%`})},[h("p",Te,B(a(o)),1)],6)])]))}},qe=fe("baseStatsStore",()=>{const i=P(),s=l(()=>{var c;return((c=i.saveFile)==null?void 0:c.selectedDifficulty)??T}),t=l(()=>{var r;return Object.values(((r=i.saveFile)==null?void 0:r.baseStats)??{}).filter(({difficulty:M})=>M===s.value)}),o=l(()=>t.value.length),e=l(()=>t.value.sort(({ms:c},{ms:r})=>c-r)),n=l(()=>t.value.reduce((c,{moves:r})=>c+r,0)),d=l(()=>t.value.reduce((c,{invalidMoves:r})=>c+r,0)),u=l(()=>t.value.reduce((c,{optimalMoves:r})=>c+r,0)),g=l(()=>t.value.reduce((c,{ms:r})=>c+r,0));return{baseStats:l(()=>{const c=Math.floor(e.value.length*.1),r=e.value.slice(-1*c).reduce((k,{ms:S,moves:_})=>(k.time+=S,k.moves+=_,k),{time:0,moves:0}),M=e.value.slice(0,c).reduce((k,{ms:S,moves:_})=>(k.time+=S,k.moves+=_,k),{time:0,moves:0});return{allGames:o.value,allMoves:n.value,allInvalidMoves:d.value,allOptimalMoves:u.value,allTime:g.value,allBestMoveRatio:u.value/n.value,allAverageTimePerMove:g.value/n.value,allAverageSlowestTimePerMove:r.time/r.moves,allAverageFastestTimePerMove:M.time/M.moves}}),difficulty:s}}),Ie=N(Pe),Le={class:"not-prose"},Fe={key:0,class:"mb-2"},He={key:1,class:"mb-4"},Ne={key:2},Ke={key:3,class:"mb-2"},Oe={key:4},Ve={key:5,class:"flex flex-col gap-4"},A=10,G=100,Ue={__name:"StatsDisplay.client",setup(i){const s=qe(),{baseStats:t}=ve(s),o=l(()=>t.value.allGames>=A+10),e=l(()=>t.value.allGames>=A+10&&t.value.allGames<G),n=l(()=>t.value.allGames>=G),d=l(()=>t.value.allGames>=0),u=l(()=>t.value.allGames>=0&&t.value.allGames<A),g=l(()=>t.value.allGames>=A);return(x,c)=>{const r=Ie;return v(),m("div",Le,[a(o)?(v(),m("h3",Fe,"Rolling "+B(G)+" Statistics")):p("",!0),a(e)?(v(),m("div",He," Play at least "+B(G-a(t).allGames)+" more games to see your rolling "+B(G)+" statistics! These statistics are based on your "+B(G)+" most recent games only. ",1)):p("",!0),a(n)?(v(),m("div",Ne," rolling stats coming soon ")):p("",!0),a(d)?(v(),m("h3",Ke,"Lifetime Statistics")):p("",!0),a(u)?(v(),m("div",Oe," Play at least "+B(A-a(t).allGames)+" more games to see statistics! ",1)):p("",!0),a(g)?(v(),m("div",Ve,[y(r,{label:"GAMES",value:["You have played",a(t).allGames,"games. Wow."],count:"","lower-is-better":""},null,8,["value"]),y(r,{label:"SPEED",value:[a(t).allAverageFastestTimePerMove,a(t).allAverageTimePerMove,a(t).allAverageSlowestTimePerMove],speed:"","lower-is-better":""},null,8,["value"]),y(r,{label:"ACCURACY",value:[a(t).allBestMoveRatio],ratio:"","higher-is-better":""},null,8,["value"])])):p("",!0)])}}},ze=N(Ue),je=h("h1",null,"Base Horsey",-1),We={class:"xl:fixed xl:right-0 xl:top-0 xl:bottom-0 xl:w-full xl:max-w-side xl:overflow-auto z-50"},Ye={class:"xl:mx-4 xl:mt-[10.5rem]"},Je=me("<p>The Base Knight game trains you on the basic knight moves.</p><h3>fork knight</h3><p>coming soon - find the square that forks two pieces</p><h3>defense knight</h3><p>coming soon - find a square that defends a piece</p><h3>defended knight</h3><p>coming soon - find a square that defends the knight</p><h3>dodge knight</h3><p>coming soon - get to a square while dodging all no-no squares</p><h3>predict knight</h3><p>coming soon - find a square X moves away from the knight</p>",11),st={__name:"index",setup(i){he({pageTitle:"horsey.gg"});const s=P(),t=()=>{s.saveFile.resetBaseStats()};return(o,e)=>{const n=$e,d=ze;return v(),m(Z,null,[je,y(n),h("div",We,[h("div",Ye,[y(d)])]),h("p",null,[D(" Reset stats, test mode only: "),h("button",{type:"button",onClick:t},"Reset stats")]),Je],64)}}};export{st as default};
