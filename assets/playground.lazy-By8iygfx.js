import{n as C,j as k,o as E,r as f,h as l,i as e,T as b,F as H,l as U}from"./index-C4BJJsrl.js";import{H as L}from"./Helmet-BR7eG2IL.js";import{M}from"./MainLayout-D_qGsPOg.js";import{B as m}from"./Box-BFKoRzAh.js";import{B as g}from"./Button-Clbzw--0.js";import{E as I}from"./EquipmentTitle-3vkYNQRr.js";import{g as N}from"./url-spMu76Rr.js";const z=C(k.jsx("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage"),j=()=>{const t=E(o=>o.showMessage),n=f.useCallback((o,i)=>{t(o,i)},[t]),a=f.useCallback((o,i)=>{n(o,{anchorOrigin:{vertical:"top",horizontal:"center"},severity:"error",variant:"standard",...i})},[n]);return{showSnackbar:n,showErrorSnackbar:a}},q=()=>({upgrade:(n,a)=>{const o=T[a];o&&o(n)}}),T={1:t=>{const n=t.createObjectStore("swing",{keyPath:"id"});n.createIndex("name","name",{unique:!1}),n.createIndex("uuid","uuid",{unique:!0}),n.transaction.oncomplete=()=>{console.log("Database created")}},2:t=>{console.log("Upgrade to version 2",t)},3:t=>{console.log("Upgrade to version 3",t)}},V="playground",P=1,F=()=>{const{upgrade:t}=q(),n=r=>new Promise((p,h)=>{const d=indexedDB.open(V,P);d.onerror=()=>{h(d.error)},d.onsuccess=()=>{const u=d.result;u.onerror=s=>{s.target instanceof IDBTransaction?console.error("Database error IDBTransaction",s.target.error):console.error("Database error",s.target)};const x=u.transaction(r.storeNames,r.mode);p(x)},d.onupgradeneeded=u=>{if(u.newVersion===null)return;const x=d.result;for(let s=u.oldVersion;s<u.newVersion;s++){const y=s+1;console.log("Upgrade database from version",s,"to",y),t(x,y)}}}),a=(r,p,h)=>new Promise((d,u)=>{const s=r.objectStore(p).put(h);s.onerror=()=>{u(s.error)},s.onsuccess=()=>{d()}});return{open:n,putItem:a,getItem:(r,p,h)=>new Promise((d,u)=>{const s=r.objectStore(p).get(h);s.onerror=()=>{u(s.error)},s.onsuccess=()=>{d(JSON.stringify(s.result))}}),deleteItem:(r,p,h)=>new Promise((d,u)=>{const s=r.objectStore(p).delete(h);s.onerror=()=>{u(s.error)},s.onsuccess=()=>{d()}}),putSwing:async r=>{const p=await n({storeNames:["swing"],mode:"readwrite"});await a(p,"swing",r)}}};function $(){const{open:t,getItem:n,deleteItem:a,putSwing:o}=F(),{showSnackbar:i}=j();return l(m,{children:[e(b,{variant:"h6",sx:{whiteSpace:"pre-wrap"},children:"IndexedDB"}),l(m,{sx:{display:"flex",gap:2},children:[e(g,{variant:"contained",onClick:async()=>{await o({id:1,name:"Swing Mk2"})},children:"Add Item"}),e(g,{variant:"contained",onClick:async()=>{const c=await t({storeNames:["swing"]}),r=await n(c,"swing",1);i(r)},children:"Get Item"}),e(g,{variant:"contained",onClick:async()=>{const c=await t({storeNames:["swing"],mode:"readwrite"});await a(c,"swing",1)},children:"Delete Item"})]})]})}const D=t=>({setItem:(c,r)=>{t.setItem(c,r)},getItem:c=>t.getItem(c),removeItem:c=>{t.removeItem(c)},clear:()=>{t.clear()}}),W=()=>D(localStorage);function R({description:t,useStorage:n}){const{setItem:a,getItem:o,removeItem:i,clear:c}=n(),r=o("name"),p=r?Number(r.split(" ")[1])+1:0,[h,d]=f.useState(p),{showSnackbar:u}=j();return l(m,{children:[e(b,{variant:"h6",sx:{whiteSpace:"pre-wrap"},children:t}),l(m,{sx:{display:"flex",gap:2},children:[e(g,{variant:"contained",onClick:()=>{a("name",`John ${h}`),d(x=>x+1)},children:"Set Item"}),e(g,{variant:"contained",onClick:()=>u(o("name")),children:"Get Item"}),e(g,{variant:"contained",onClick:()=>i("name"),children:"Remove Item"}),e(g,{variant:"contained",onClick:c,children:"Clear"})]})]})}function O(){return e(R,{description:"Local Storage はタブを閉じてもデータが維持される",useStorage:W})}const G=()=>D(sessionStorage);function J(){return e(R,{description:`Session Storage はタブを閉じるとデータが失われる
ページセッションが存在する間データは維持される
ページセッションはタブやブラウザーが開いている限り続き、ページの再読み込みや復元にも耐えられる`,useStorage:G})}function Q(){return l(m,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(I,{title:"Client Side Storage",icon:e(z,{})}),e(O,{}),e(J,{}),e($,{})]})}function B({title:t,children:n}){return l(m,{sx:{display:"flex",flexDirection:"column",gap:2},children:[t,e(m,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"300px",width:"300px",border:"1px solid gray",borderRadius:"8px"},children:n})]})}function A(){return e(B,{title:e(I,{title:"Context Example"}),children:l(w,{children:[e(S,{children:"Title"}),l(w,{children:[e(S,{children:"Heading"}),l(w,{children:[e(S,{children:"Sub-heading"}),l(w,{children:[e(S,{children:"Sub-sub-heading"}),e(S,{children:"Sub-sub-heading"})]})]})]})]})})}function w({children:t}){const n=f.useContext(v);return e("section",{className:"section",children:e(v,{value:n+1,children:t})})}function S({children:t}){const n=f.useContext(v);switch(n){case 0:throw Error("Heading must be inside a Section!");case 1:return e("h1",{children:t});case 2:return e("h2",{children:t});case 3:return e("h3",{children:t});case 4:return e("h4",{children:t});case 5:return e("h5",{children:t});case 6:return e("h6",{children:t});default:throw Error(`Unknown level: ${n}`)}}const v=f.createContext(0),_=C(k.jsx("path",{d:"m21 11-6-6v5H8c-2.76 0-5 2.24-5 5v4h2v-4c0-1.65 1.35-3 3-3h7v5z"}),"Shortcut");function K(){const t=[];for(let n=0;n<11;n++)t.push({id:n,imageUrl:`${N()}/cats/cat_${String(n+1).padStart(2,"0")}.jpg`});return t}function X(){const t=K(),n=f.useRef(null);function a(i){const r=o().get(i);r&&r.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}function o(){return n.current||(n.current=new Map),n.current}return l(H,{children:[e(I,{title:"Scroll Ref",icon:e(_,{})}),l("nav",{children:[e(g,{onClick:()=>a(0),children:"1番目"}),e(g,{onClick:()=>a(5),children:"6番目"}),e(g,{onClick:()=>a(9),children:"10番目"})]}),e(m,{sx:{display:"flex",flexDirection:"row",maxWidth:"1080px",overflow:"scroll",gap:2,border:"3px solid gray",borderRadius:"8px"},children:t.map(i=>e(m,{ref:c=>{const r=o();c?r.set(i.id,c):r.delete(i.id)},sx:{display:"flex",alignItems:"center"},children:e("img",{src:i.imageUrl,alt:`Cat #${i.id}`,style:{width:"auto",height:"200px",borderRadius:"8px"}})},i.id))})]})}function Y(){const[t,n]=f.useState(0);function a(){n(5),n(t),n(o=>o+1),n(o=>o+1)}return e(B,{title:e(I,{title:"Update State Queue"}),children:l(g,{onClick:a,children:["Next ",t+1]})})}function Z(){return l(M,{children:[e(L,{title:"Playground"}),e(m,{sx:{display:"flex",justifyContent:"center"},children:l(m,{sx:{display:"flex",flexDirection:"column",gap:2,maxWidth:"1000px"},children:[e(b,{variant:"h4",children:"Let's play with React and MUI components!"}),e(Q,{}),e(X,{}),l(m,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",justifyContent:"center",alignItems:"center",gap:2},children:[e(Y,{}),e(A,{})]})]})})]})}const ie=U("/playground")({component:Z});export{ie as Route};
