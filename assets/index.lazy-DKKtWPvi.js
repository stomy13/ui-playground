import{a as f,g as y,s as C,P,r as v,u as M,j as m,e as g,f as R,L as E,m as U,i as e,O as b,h as d,T as p,p as j,l as O}from"./index-BgF3b_7j.js";import{H as L}from"./Helmet-BVhrmHm-.js";import{M as T}from"./MainLayout-D_qGsPOg.js";import{B as V}from"./Box-BXmT9CWc.js";function F(t){return y("MuiCard",t)}f("MuiCard",["root"]);const _=t=>{const{classes:o}=t;return R({root:["root"]},F,o)},z=C(P,{name:"MuiCard",slot:"Root",overridesResolver:(t,o)=>o.root})({overflow:"hidden"}),k=v.forwardRef(function(o,r){const s=M({props:o,name:"MuiCard"}),{className:a,raised:c=!1,...i}=s,n={...s,raised:c},l=_(n);return m.jsx(z,{className:g(l.root,a),elevation:c?8:void 0,ref:r,ownerState:n,...i})});function D(t){return y("MuiCardActionArea",t)}const A=f("MuiCardActionArea",["root","focusVisible","focusHighlight"]),W=t=>{const{classes:o}=t;return R({root:["root"],focusHighlight:["focusHighlight"]},D,o)},G=C(E,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(t,o)=>o.root})(U(({theme:t})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${A.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${A.focusVisible} .${A.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}}))),q=C("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(t,o)=>o.focusHighlight})(U(({theme:t})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}))),x=v.forwardRef(function(o,r){const s=M({props:o,name:"MuiCardActionArea"}),{children:a,className:c,focusVisibleClassName:i,...n}=s,l=s,u=W(l);return m.jsxs(G,{className:g(u.root,c),focusVisibleClassName:g(i,u.focusVisible),ref:r,ownerState:l,...n,children:[a,m.jsx(q,{className:u.focusHighlight,ownerState:l})]})});function J(t){return y("MuiCardContent",t)}f("MuiCardContent",["root"]);const K=t=>{const{classes:o}=t;return R({root:["root"]},J,o)},Q=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:16,"&:last-child":{paddingBottom:24}}),w=v.forwardRef(function(o,r){const s=M({props:o,name:"MuiCardContent"}),{className:a,component:c="div",...i}=s,n={...s,component:c},l=K(n);return m.jsx(Q,{as:c,className:g(l.root,a),ownerState:n,ref:r,...i})});function X(t){return y("MuiCardMedia",t)}f("MuiCardMedia",["root","media","img"]);const Y=t=>{const{classes:o,isMediaComponent:r,isImageComponent:s}=t;return R({root:["root",r&&"media",s&&"img"]},X,o)},Z=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:r}=t,{isMediaComponent:s,isImageComponent:a}=r;return[o.root,s&&o.media,a&&o.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),tt=["video","audio","picture","iframe","img"],ot=["picture","img"],N=v.forwardRef(function(o,r){const s=M({props:o,name:"MuiCardMedia"}),{children:a,className:c,component:i="div",image:n,src:l,style:u,...B}=s,h=tt.includes(i),S=!h&&n?{backgroundImage:`url("${n}")`,...u}:u,H={...s,component:i,isMediaComponent:h,isImageComponent:ot.includes(i)},I=Y(H);return m.jsx(Z,{className:g(I.root,c),as:i,role:!h&&n?"img":void 0,ref:r,style:S,ownerState:H,src:h?n||l:void 0,...B,children:a})});function $({children:t}){return e(k,{sx:{minWidth:345,maxWidth:345},children:t})}function et(){const t=b();return e($,{children:d(x,{onClick:()=>t({to:"/heartlaundry"}),children:[e(N,{component:"img",height:"140",image:"https://img.freepik.com/free-photo/cute-kitten-staring-out-the-window-playful-curiosity-generative-ai_188544-12520.jpg",alt:"cat"}),d(w,{children:[e(p,{gutterBottom:!0,variant:"h5",component:"div",children:"Heart Laundry❤️🧺"}),e(p,{variant:"body2",color:"text.secondary",children:"心の洗濯をしよう"})]})]})})}const st=`${j()}/playground.webp`;function rt(){const t=b();return e(k,{children:d(x,{onClick:()=>t({to:"/playground"}),children:[e(N,{component:"img",height:"140",image:st,alt:"playground"}),d(w,{children:[e(p,{gutterBottom:!0,variant:"h5",component:"div",children:"Playground🛝"}),e(p,{variant:"body2",color:"text.secondary",children:"遊び心を大切にしましょう！"})]})]})})}const nt=`${j()}/react19.webp`;function at(){const t=b();return e($,{children:d(x,{onClick:()=>t({to:"/react19"}),children:[e(N,{component:"img",height:"140",image:nt,alt:"react19"}),d(w,{children:[e(p,{gutterBottom:!0,variant:"h5",component:"div",children:"React19🛠"}),e(p,{variant:"body2",color:"text.secondary",children:"React19を使ってみましょう！"})]})]})})}function it({children:t}){return e(V,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",gap:2},children:t})}function ct(){return d(T,{children:[e(L,{title:"Home"}),d(it,{children:[e(rt,{}),e(et,{}),e(at,{})]})]})}const mt=O("/")({component:ct});export{mt as Route};