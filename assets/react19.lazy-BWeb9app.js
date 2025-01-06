import{g as B,a as F,k as A,c as j,s as b,b as x,m as U,d as O,r as l,u as E,j as w,e as z,f as L,h as s,i,T as o,l as N}from"./index-BgF3b_7j.js";import{E as m}from"./EquipmentTitle-Br2cyyx3.js";import{B as u}from"./Box-BXmT9CWc.js";import{B as h}from"./Button-BUPPARw0.js";import{H as V}from"./Helmet-BVhrmHm-.js";function H(e){return B("MuiCircularProgress",e)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const d=44,C=A`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,P=A`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,W=typeof C!="string"?j`
        animation: ${C} 1.4s linear infinite;
      `:null,K=typeof P!="string"?j`
        animation: ${P} 1.4s ease-in-out infinite;
      `:null,q=e=>{const{classes:t,variant:n,color:r,disableShrink:a}=e,c={root:["root",n,`color${x(r)}`],svg:["svg"],circle:["circle",`circle${x(n)}`,a&&"circleDisableShrink"]};return L(c,H,t)},G=b("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${x(n.color)}`]]}})(U(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:W||{animation:`${C} 1.4s linear infinite`}},...Object.entries(e.palette).filter(O()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),Z=b("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),J=b("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${x(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})(U(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink,style:K||{animation:`${P} 1.4s ease-in-out infinite`}}]}))),Q=l.forwardRef(function(t,n){const r=E({props:t,name:"MuiCircularProgress"}),{className:a,color:c="primary",disableShrink:p=!1,size:y=40,style:I,thickness:f=3.6,value:v=0,variant:T="indeterminate",...M}=r,g={...r,color:c,disableShrink:p,size:y,thickness:f,value:v,variant:T},S=q(g),k={},D={},R={};if(T==="determinate"){const $=2*Math.PI*((d-f)/2);k.strokeDasharray=$.toFixed(3),R["aria-valuenow"]=Math.round(v),k.strokeDashoffset=`${((100-v)/100*$).toFixed(3)}px`,D.transform="rotate(-90deg)"}return w.jsx(G,{className:z(S.root,a),style:{width:y,height:y,...D,...I},ownerState:g,ref:n,role:"progressbar",...R,...M,children:w.jsx(Z,{className:S.svg,ownerState:g,viewBox:`${d/2} ${d/2} ${d} ${d}`,children:w.jsx(J,{className:S.circle,style:k,ownerState:g,cx:d,cy:d,r:(d-f)/2,fill:"none",strokeWidth:f})})})});function X(){const[e,t,n]=l.useActionState(async r=>(await new Promise(a=>setTimeout(a,1e3)),r+1),0);return s(u,{sx:{display:"flex",flexDirection:"column",gap:2},children:[i(m,{title:"ActionState"}),s(u,{component:"form",action:t,children:[i(o,{variant:"h6",sx:{whiteSpace:"pre-wrap"},children:"useActionState は useTransition と useReducer を組み合わせたようなフック。 useTransition を使用する場合は、useActionState を使用することを検討する。useActionState は useTransition と異なり、dispatch 関数が連打された場合、前の dispatch 関数が完了してから次の dispatch 関数の実行が開始される。 form action 呼び出された際に使用することができる。"}),i(h,{variant:"contained",type:"submit",children:"Increment"}),n?i(o,{children:"loading..."}):s(o,{children:["count = ",e]})]})]})}function Y(){const[e,t,n]=l.useActionState(async r=>(await new Promise(a=>setTimeout(a,1e3)),r+1),0);return s(u,{sx:{display:"flex",flexDirection:"column",gap:2},children:[i(m,{title:"FormAction"}),s("form",{action:t,children:[i(o,{variant:"h6",sx:{whiteSpace:"pre-wrap"},children:"form component に action が指定できるようになった"}),i(h,{variant:"contained",type:"submit",children:"Increment"}),n?i(o,{children:"loading..."}):s(o,{children:["count = ",e]})]})]})}const _=({children:e})=>i(u,{sx:{display:"flex",justifyContent:"center"},children:i(u,{sx:{display:"flex",flexDirection:"column",gap:2,maxWidth:"1000px"},children:e})});function ee({children:e,isLoading:t,...n}){const[r,a]=l.useState({width:0,height:0}),c=l.useCallback(p=>{p&&!r.width&&!r.height&&a({width:p.offsetWidth,height:p.offsetHeight})},[r.width,r.height]);return t?i(h,{variant:"contained",disabled:!0,sx:{width:r.width,height:r.height},children:i(Q,{size:24})}):i(h,{variant:"contained",...n,ref:c,children:e})}function te(){const[e,t]=l.useState(0),[n,r]=l.useTransition(),a=l.useCallback(()=>{r(async()=>{await new Promise(c=>setTimeout(c,1e3)),t(c=>c+1)})},[]);return s(u,{sx:{display:"flex",flexDirection:"column",gap:2},children:[i(m,{title:"Transition"}),s(u,{children:[i(o,{variant:"h6",sx:{whiteSpace:"pre-wrap"},children:"useTransition に非同期関数（a.k.a Actions）を渡せるようになった"}),i(ee,{isLoading:n,variant:"contained",onClick:a,children:"Increment"}),i(o,{children:n?"loading...":`count = ${e}`})]})]})}function ie({count:e}){const t=l.use(e);return s(o,{children:["count = ",t]})}function re(){const[e,t]=l.useState(!1);return s(u,{sx:{display:"flex",flexDirection:"column",gap:2},children:[i(m,{title:"Use"}),s(u,{children:[i(o,{variant:"h6",sx:{whiteSpace:"pre-wrap"},children:"use は Suspense と一緒に使うフック。コンポーネント内から直接Promiseの中身を取り出せることができる。"}),i(h,{variant:"contained",onClick:()=>t(r=>!r),children:"Toggle Visible"}),i(l.Suspense,{fallback:i(u,{children:"loading..."}),children:e&&i(ie,{count:new Promise(r=>setTimeout(()=>{r(1234)},1e3))})})]})]})}function ne(){const[e,t]=l.useActionState(async a=>(r(1),await new Promise(c=>setTimeout(c,1e3)),a+1),0),[n,r]=l.useOptimistic(e,(a,c)=>a+c);return s(u,{component:"form",action:t,sx:{display:"flex",flexDirection:"column",gap:2},children:[i(m,{title:"UseOptimistic"}),s(u,{children:[i(o,{variant:"h6",sx:{whiteSpace:"pre-wrap"},children:"useOptimistic は 非同期な更新処理時に UI を楽観的更新するためのフック"}),i(h,{variant:"contained",type:"submit",children:"Increment"}),s(o,{children:["displayCount = ",n]}),s(o,{children:["count = ",e]})]})]})}function se(){return s(_,{children:[i(V,{title:"React 19"}),i(o,{variant:"h4",children:"React 19"}),i(te,{}),i(X,{}),i(Y,{}),i(re,{}),i(ne,{})]})}const de=N("/react19")({component:se});export{de as Route};