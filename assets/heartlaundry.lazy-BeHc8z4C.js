import{r as m,M as S,j as V,c as E,N as b,O as f,P as L,Q as z,R as A,e as H,g as I,U as G,V as v,s as N,u as O,F as j,E as l,G as U}from"./index-CxSK0bHK.js";import{H as w}from"./Helmet-D8YeGexN.js";import{M as Q}from"./MainLayout-D_qGsPOg.js";import{s as D,u as W,T as q}from"./TextareaAutosize-DuK_Y9li.js";import{B as C}from"./Box-BKODj7s9.js";import{B as J}from"./Button-cY4IZN1i.js";const K=G(),X=D("div",{name:"MuiStack",slot:"Root"});function Y(e){return W({props:e,name:"MuiStack",defaultTheme:K})}function Z(e,r){const n=m.Children.toArray(e).filter(Boolean);return n.reduce((a,c,s)=>(a.push(c),s<n.length-1&&a.push(m.cloneElement(r,{key:`separator-${s}`})),a),[])}const _=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ee=({ownerState:e,theme:r})=>{let n={display:"flex",flexDirection:"column",...b({theme:r},f({values:e.direction,breakpoints:r.breakpoints.values}),a=>({flexDirection:a}))};if(e.spacing){const a=L(r),c=Object.keys(r.breakpoints.values).reduce((t,o)=>((typeof e.spacing=="object"&&e.spacing[o]!=null||typeof e.direction=="object"&&e.direction[o]!=null)&&(t[o]=!0),t),{}),s=f({values:e.direction,base:c}),y=f({values:e.spacing,base:c});typeof s=="object"&&Object.keys(s).forEach((t,o,d)=>{if(!s[t]){const p=o>0?s[d[o-1]]:"column";s[t]=p}}),n=z(n,b({theme:r},y,(t,o)=>e.useFlexGap?{gap:v(a,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${_(o?s[o]:e.direction)}`]:v(a,t)}}))}return n=A(r.breakpoints,n),n};function te(e={}){const{createStyledComponent:r=X,useThemeProps:n=Y,componentName:a="MuiStack"}=e,c=()=>H({root:["root"]},t=>I(a,t),{}),s=r(ee);return m.forwardRef(function(t,o){const d=n(t),h=S(d),{component:p="div",direction:F="column",spacing:B=0,divider:g,children:k,className:P,useFlexGap:$=!1,...T}=h,M={direction:F,spacing:B,useFlexGap:$},R=c();return V.jsx(s,{as:p,ownerState:M,ref:o,className:E(R.root,P),...T,children:g?Z(k,g):k})})}const se=te({createStyledComponent:N("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>O({props:e,name:"MuiStack"})}),u={200:"#b6daff",400:"#3399FF",600:"#0072E5"},i={50:"#F3F6F9",200:"#DAE2ED",300:"#C7D0DD",700:"#434D5B",900:"#1C2025"},oe=D(q)(({theme:e})=>`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${e.palette.mode==="dark"?i[300]:i[900]};
  background: ${e.palette.mode==="dark"?i[900]:"#fff"};
  border: 1px solid ${e.palette.mode==="dark"?i[700]:i[200]};
  box-shadow: 0px 2px 2px ${e.palette.mode==="dark"?i[900]:i[50]};
  resize: none;

  &:hover {
    border-color: ${u[400]};
  }

  &:focus {
    border-color: ${u[400]};
    box-shadow: 0 0 0 3px ${e.palette.mode==="dark"?u[600]:u[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`);function re(){return j(Q,{children:[l(w,{title:"Heart Laundry"}),l(C,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:j(se,{spacing:2,sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"480px"},children:[l("h1",{children:"Heart Laundry❤️🧺"}),l(oe,{"aria-label":"moyaira",placeholder:"モヤモヤ・イライラ",sx:{width:"455px"}}),l(C,{sx:{display:"flex",justifyContent:"end",alignItems:"center",width:"480px"},children:l(J,{variant:"contained",children:"Wash it!!"})})]})})]})}const de=U("/heartlaundry")({component:re});export{de as Route};
