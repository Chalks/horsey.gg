import{j as C,f as l,G as q,S as F,D as A,k as I,H as L,l as T,o as m,a as v,h as f,t as k,u as o,P as W,r as $,m as le,p as ee,q as M,C as ne,M as re,s as Y,v as J,w as X,x as N,b as H,i as d,F as z,y as D,z as S,A as ce,B as ie,E as ue,I as de,J as fe}from"./entry.4d1b1712.js";import{c as K}from"./client-only.66c43b94.js";import{u as he}from"./baseStats.791aa0d3.js";import{s as me}from"./seo.9250eec3.js";const ve={class:"flex items-center justify-between not-prose gap-4"},_e={class:"font-bold uppercase text-lg"},ge={class:"tracking-widest text-lg font-thin"},pe={__name:"TitleBlock",props:{title:{type:String,required:!0}},setup(r){const s=C(),t=l(()=>{switch(s.selectedDifficulty){case T:return"FRICK";case L:return"HECK";case I:return"DARN";case A:return"DANG";case F:return"SHUCKS";case q:default:return"GOSH"}});return(a,e)=>(m(),v("div",ve,[f("h1",_e,k(r.title),1),f("div",ge,k(o(t))+" EDITION ",1)]))}},ye=["a","b","c","d","e","f","g","h"],ke=["1","2","3","4","5","6","7","8"],U=()=>`${ye[Math.floor(Math.random()*8)]}${ke[Math.floor(Math.random()*8)]}`,Q=["a","b","c","d","e","f","g","h"],Z=["1","2","3","4","5","6","7","8"],be=(r,s)=>{if(!r)return[];if(!s)return[];if(r!==W.bn&&r!==W.wn)return[];const t=Q.indexOf(s[0]),a=Z.indexOf(s[1]);return[[t-2,a-1],[t-2,a+1],[t-1,a-2],[t-1,a+2],[t+1,a-2],[t+1,a+2],[t+2,a-1],[t+2,a+1]].filter(([e,n])=>{const c=e>=0&&e<=7,i=n>=0&&n<=7;return c&&i}).map(([e,n])=>`${Q[e]}${Z[n]}`)};const we={class:"relative"},Me=f("span",null,"Click to play",-1),xe={__name:"ChessBoard",props:{start:{type:String,default:null},goalSquares:{type:Array,default:()=>[]},disableLegalMoves:{type:Number,default:0},showLegalMoves:{type:Boolean,default:!1}},emits:["start","move","invalidMove"],setup(r,{expose:s,emit:t}){const a=r;let e=null;const n=$(null),c=$(null),i=$(null),_=l(()=>be(c.value,i.value)),y=l(()=>{const u=_.value.filter(oe=>!a.goalSquares.includes(oe)),p=Math.min(_.value.length-1,u.length),w=u.sort(()=>.5-Math.random()),ae=Math.min(a.disableLegalMoves,p);return w.slice(0,ae)}),h=l(()=>_.value.filter(u=>!y.value.includes(u))),g=$(!1),G=()=>{if(!e)return;c.value=["bn","wn"][Math.floor(Math.random()*2)];let u=a.start||U();for(;a.goalSquares.includes(u);)u=U();i.value=u,e.setPiece(i.value,c.value,!0)},x=()=>{e&&(e.removeMarkers(Y),a.goalSquares.forEach(u=>{e.addMarker(Y,u)}))},E=()=>{e&&(e.removeMarkers(J),a.showLegalMoves&&h.value.forEach(u=>{e.addMarker(J,u)}))},P=()=>{e&&(e.removeMarkers(X),y.value.forEach(u=>{e.addMarker(X,u)}))},O=u=>{if(!e)return;const p=u.target.getAttribute("data-square");if(!p)return;const w=e.getMarkers(N,p);(w==null?void 0:w.length)===0&&(e.removeMarkers(N),e.addMarker(N,p))},b=()=>{e&&e.removeMarkers(N)},te=u=>{if(!e)return;const p=u.target.getAttribute("data-square");if(h.value.includes(p)){const w=i.value;e.movePiece(w,p),i.value=p,E(),P(),t("move",{from:w,to:p})}else t("invalidMove",{from:i.value,to:p})},j=()=>{e&&(i.value=null,e.removeMarkers(),e.destroy(),n.value.replaceChildren())},V=()=>{e=new ne(n.value,{assetsUrl:"/chess/",extensions:[{class:re}]}),e.context.addEventListener("mousedown",te),e.context.addEventListener("mouseover",O),e.context.addEventListener("mouseleave",b)};le(()=>{V()});const se=()=>{g.value=!0,t("start")};return s({ready:()=>{j(),V(),G(),x(),E(),P()},stop:()=>{g.value=!1,i.value=null,j(),V()}}),(u,p)=>(m(),v("div",we,[f("div",{ref_key:"boardEl",ref:n},null,512),o(g)?M("",!0):(m(),v("div",{key:0,class:"cursor-pointer bg-gray-300/80 absolute inset-0 flex flex-col items-center justify-center select-none gap-2",onClick:se},[Me,ee(u.$slots,"default")]))]))}},Se=f("div",{class:"absolute border border-gray-700 bg-white w-[0.707106rem] h-[0.707106rem] top-1/2 right-0 rotate-45 translate-x-1/2 -translate-y-1/2"},null,-1),De=[Se],Be={__name:"DifficultyRibbon",props:{gosh:{type:Boolean,default:!1},shucks:{type:Boolean,default:!1},dang:{type:Boolean,default:!1},darn:{type:Boolean,default:!1},heck:{type:Boolean,default:!1},frick:{type:Boolean,default:!1}},emits:["click"],setup(r,{emit:s}){const t=r,a=C(),e=l(()=>t.gosh&&a.selectedDifficulty===q),n=l(()=>t.shucks&&a.selectedDifficulty===F),c=l(()=>t.dang&&a.selectedDifficulty===A),i=l(()=>t.darn&&a.selectedDifficulty===I),_=l(()=>t.heck&&a.selectedDifficulty===L),y=l(()=>t.frick&&a.selectedDifficulty===T),h=l(()=>e.value||n.value||c.value||i.value||_.value||y.value),g=l(()=>h.value?"translate-x-[2rem]":"translate-x-[1rem] hover:translate-x-[1.5rem]");return(G,x)=>(m(),v("div",{class:H(["select-none cursor-pointer transition-all",o(g)]),onClick:x[0]||(x[0]=E=>s("click"))},[f("div",{class:H(["border-y border-gray-700 inline-block relative w-auto text-center overflow-hidden w-12 h-4",{"bg-gosh":r.gosh,"bg-shucks":r.shucks,"bg-dang":r.dang,"bg-darn":r.darn,"bg-heck":r.heck,"bg-frick":r.frick}])},De,2)],2))}},$e={class:"relative max-w-prose mx-auto w-full flex flex-col gap-1"},Ce=f("div",{class:"relative max-w-prose mx-auto w-full mt-20"},null,-1),Ge={__name:"DifficultyToggle.client",props:{gosh:{type:Boolean,default:!1},shucks:{type:Boolean,default:!1},dang:{type:Boolean,default:!1},darn:{type:Boolean,default:!1},heck:{type:Boolean,default:!1},frick:{type:Boolean,default:!1}},setup(r){const s=C(),t=()=>{s.setDifficulty(q)},a=()=>{s.setDifficulty(F)},e=()=>{s.setDifficulty(A)},n=()=>{s.setDifficulty(I)},c=()=>{s.setDifficulty(L)},i=()=>{s.setDifficulty(T)};return(_,y)=>{const h=Be;return m(),v(z,null,[f("div",$e,[d(h,{gosh:"",onClick:t}),d(h,{shucks:"",onClick:a}),d(h,{dang:"",onClick:e}),d(h,{darn:"",onClick:n}),d(h,{heck:"",onClick:c}),d(h,{frick:"",onClick:i})]),Ce],64)}}},Ee={__name:"DifficultyDescription.client",props:{gosh:{type:Boolean,default:!1},shucks:{type:Boolean,default:!1},dang:{type:Boolean,default:!1},darn:{type:Boolean,default:!1},heck:{type:Boolean,default:!1},frick:{type:Boolean,default:!1}},setup(r){const s=r,t=C(),a=l(()=>s.gosh&&t.selectedDifficulty===q),e=l(()=>s.shucks&&t.selectedDifficulty===F),n=l(()=>s.dang&&t.selectedDifficulty===A),c=l(()=>s.darn&&t.selectedDifficulty===I),i=l(()=>s.heck&&t.selectedDifficulty===L),_=l(()=>s.frick&&t.selectedDifficulty===T),y=l(()=>a.value||e.value||n.value||c.value||i.value||_.value);return(h,g)=>o(y)?(m(),v("div",{key:0,class:H(["text-xs font-bold text-gray-700 p-1 mb-1 last:mb-0",{"bg-gosh":o(a),"bg-shucks":o(e),"bg-dang":o(n),"bg-darn":o(c),"bg-heck":o(i),"bg-frick":o(_)}])},[ee(h.$slots,"default")],2)):M("",!0)}},Re=K(Ge),qe=K(Ee),Ae={class:"relative mr-8"},Ie={class:"absolute top-0 right-0 z-10"},Le={class:"mt-1"},Te={__name:"BaseHorsey",setup(r){const s=$(null),t=$([]),a=C();let e;const n=l(()=>a.selectedDifficulty===q),c=l(()=>a.selectedDifficulty===A?1:a.selectedDifficulty===I?2:a.selectedDifficulty===L?3:a.selectedDifficulty===T?4:0),i=()=>{e={start:null,end:null,moves:0,invalidMoves:0,startPerformance:0,endPerformance:0,ms:0}},_=()=>{a.saveFile.addBaseStat(new ie({...e,difficulty:a.selectedDifficulty,date:Date.now()})),i(),s.value.stop()},y=async()=>{i(),t.value=[U()],e.end=t.value[0],e.startPerformance=performance.now(),await ce(),s.value.ready()},h=({from:G,to:x})=>{e.moves===0&&(e.start=G),e.moves+=1,t.value[0]===x&&(e.endPerformance=performance.now(),e.ms=e.endPerformance-e.startPerformance,_())},g=()=>{e.invalidMoves+=1};return(G,x)=>{const E=pe,P=xe,O=Re,b=qe;return m(),v(z,null,[d(E,{title:"Move Machine",class:"mb-1"}),f("div",Ae,[d(P,{ref_key:"board",ref:s,"show-legal-moves":o(n),"disable-legal-moves":o(c),"goal-squares":o(t),class:"z-20 border border-gray-700",onStart:y,onMove:h,onInvalidMove:g},null,8,["show-legal-moves","disable-legal-moves","goal-squares"]),f("div",Ie,[d(O)])]),f("div",Le,[d(b,{gosh:""},{default:D(()=>[S(" Show legal moves ")]),_:1}),d(b,{shucks:"",dang:"",darn:"",heck:"",frick:""},{default:D(()=>[S(" Hide legal moves ")]),_:1}),d(b,{dang:"",darn:"",heck:"",frick:""},{default:D(()=>[S(" Disable one legal move ")]),_:1}),d(b,{darn:"",heck:"",frick:""},{default:D(()=>[S(" Disable one more legal move ")]),_:1}),d(b,{heck:"",frick:""},{default:D(()=>[S(" Disable one more legal move ")]),_:1}),d(b,{frick:""},{default:D(()=>[S(" Disable one more legal move ")]),_:1})])],64)}}},Pe={class:"rounded-b-lg overflow-hidden w-full origin-bottom-left not-prose"},Ne={class:"relative px-4 bg-white"},He=f("div",{class:"absolute top-1/2 left-0 right-0 bottom-0 bg-black"},null,-1),Fe={class:"stat text-3xl text-white mix-blend-difference translate-y-[10%] z-10"},Ke={class:"bg-green-900 h-4 w-full relative"},Oe={class:"text-white font-bold text-xs whitespace-nowrap"},Ve={__name:"StatItem.client",props:{label:{type:String,required:!0},value:{type:Array,required:!0},ratio:{type:Boolean,default:!1},speed:{type:Boolean,default:!1},count:{type:Boolean,default:!1},higherIsBetter:{type:Boolean,default:!1},lowerIsBetter:{type:Boolean,default:!1}},setup(r){const s=r,t=l(()=>{if(s.ratio)return(1-s.value)*100;if(s.speed){const[e,n,c]=s.value;return(n-e)/(c-e)*100}return s.count?0:50}),a=l(()=>{if(s.ratio)return`${(100*s.value[0]).toPrecision(4)}% optimal moves`;if(s.speed){const[e,n,c]=s.value;return`${n.toFixed(2)} ms / game (${c.toFixed(2)} avg slowest, ${e.toFixed(2)} avg fastest)`}return s.count?s.value.join(" "):s.value});return(e,n)=>(m(),v("div",Pe,[f("div",Ne,[He,f("div",Fe,k(r.label),1)]),f("div",Ke,[f("div",{class:H(["absolute top-0 bottom-0 left-0 bg-green-700 flex items-center px-4 transition-all",{"rounded-r-full":o(t)>0}]),style:ue({right:`${o(t)}%`})},[f("p",Oe,k(o(a)),1)],6)])]))}},Ue=K(Ve),ze={class:"not-prose"},je={key:0,class:"mb-2"},We={key:1,class:"mb-4"},Ye={key:2},Je={key:3,class:"mb-2"},Xe={key:4},Qe={key:5,class:"flex flex-col gap-4"},R=10,B=100,Ze={__name:"StatsDisplay.client",setup(r){const s=he(),{baseStats:t}=de(s),a=l(()=>t.value.allGames>=R+10),e=l(()=>t.value.allGames>=R+10&&t.value.allGames<B),n=l(()=>t.value.allGames>=B),c=l(()=>t.value.allGames>=0),i=l(()=>t.value.allGames>=0&&t.value.allGames<R),_=l(()=>t.value.allGames>=R);return(y,h)=>{const g=Ue;return m(),v("div",ze,[o(a)?(m(),v("h3",je,"Rolling "+k(B)+" Statistics")):M("",!0),o(e)?(m(),v("div",We," Play at least "+k(B-o(t).allGames)+" more games to see your rolling "+k(B)+" statistics! These statistics are based on your "+k(B)+" most recent games only. ",1)):M("",!0),o(n)?(m(),v("div",Ye," rolling stats coming soon ")):M("",!0),o(c)?(m(),v("h3",Je,"Lifetime Statistics")):M("",!0),o(i)?(m(),v("div",Xe," Play at least "+k(R-o(t).allGames)+" more games to see statistics! ",1)):M("",!0),o(_)?(m(),v("div",Qe,[d(g,{label:"GAMES",value:["You have played",o(t).allGames,"games. Wow."],count:"","lower-is-better":""},null,8,["value"]),d(g,{label:"SPEED",value:[o(t).allAverageFastestTimePerMove,o(t).allAverageTimePerMove,o(t).allAverageSlowestTimePerMove],speed:"","lower-is-better":""},null,8,["value"]),d(g,{label:"ACCURACY",value:[o(t).allBestMoveRatio],ratio:"","higher-is-better":""},null,8,["value"])])):M("",!0)])}}},et=K(Ze),tt={class:"mt-4"},st=fe("<p>The Base Knight game trains you on the basic knight moves.</p><h3>fork knight</h3><p>coming soon - find the square that forks two pieces</p><h3>defense knight</h3><p>coming soon - find a square that defends a piece</p><h3>defended knight</h3><p>coming soon - find a square that defends the knight</p><h3>dodge knight</h3><p>coming soon - get to a square while dodging all no-no squares</p><h3>predict knight</h3><p>coming soon - find a square X moves away from the knight</p>",11),it={__name:"index",setup(r){me({pageTitle:"horsey.gg"});const s=C(),t=()=>{s.saveFile.resetBaseStats()};return(a,e)=>{const n=Te,c=et;return m(),v(z,null,[d(n),f("div",tt,[d(c)]),f("p",null,[S(" Reset stats, test mode only: "),f("button",{type:"button",onClick:t},"Reset stats")]),st],64)}}};export{it as default};
