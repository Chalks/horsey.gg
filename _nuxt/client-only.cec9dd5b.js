import{e as p,P as i,X as h,k as y,l as c}from"./entry.e199343f.js";const n=new WeakMap;function v(r){if(n.has(r))return n.get(r);const l={...r};return l.render?l.render=(a,...s)=>{if(a.mounted$){const e=r.render(a,...s);return e.children===null||typeof e.children=="string"?p(e.type,e.props,e.children,e.patchFlag,e.dynamicProps,e.shapeFlag):i(e)}else return i("div",h(a.$attrs??a._.attrs,{key:"placeholder-key"}))}:l.template&&(l.template=`
      <template v-if="mounted$">${r.template}</template>
      <template v-else><div></div></template>
    `),l.setup=(a,s)=>{var u;const e=y(!1);return c(()=>{e.value=!0}),Promise.resolve(((u=r.setup)==null?void 0:u.call(r,a,s))||{}).then(d=>typeof d!="function"?{...d,mounted$:e}:(...f)=>{if(e.value){const t=d(...f);return t.children===null||typeof t.children=="string"?p(t.type,t.props,t.children,t.patchFlag,t.dynamicProps,t.shapeFlag):i(t)}else return i("div",h(s.attrs,{key:"placeholder-key"}))})},n.set(r,l),l}export{v as c};