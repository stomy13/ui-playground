import{Q as f,R as h,r as c,v as p,D as B,j as y,e as E}from"./index-BgF3b_7j.js";function R(o={}){const{themeId:t,defaultTheme:a,defaultClassName:e="MuiBox-root",generateClassName:m}=o,r=f("div",{shouldForwardProp:n=>n!=="theme"&&n!=="sx"&&n!=="as"})(h);return c.forwardRef(function(d,u){const s=p(a),{className:l,component:i="div",...x}=B(d);return y.jsx(r,{as:i,ref:u,className:E(l,m?m(e):e),theme:t&&s[t]||s,...x})})}const S=({title:o,description:t,keywords:a})=>(c.useEffect(()=>{if(o&&(document.title=o),t){let e=document.querySelector('meta[name="description"]');e||(e=document.createElement("meta"),e.name="description",document.head.appendChild(e)),e.content=t}if(a){let e=document.querySelector('meta[name="keywords"]');e||(e=document.createElement("meta"),e.name="keywords",document.head.appendChild(e)),e.content=a}},[o,t,a]),null);export{S as H,R as c};