(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{323:function(e,t,s){s(324),s(697),e.exports=s(606)},570:function(e,t){},571:function(e,t){},572:function(e,t){},573:function(e,t){},697:function(e,t,s){"use strict";s.r(t);var o=s(86),c=s.n(o),n=s(1);const a="STORYBOOK_ADDON_DESIGNS",l={UpdateConfig:a+"/update_config"};var r=s(0),i=s(67),b=s(7);const u=({config:e})=>Object(n.jsx)("div",{css:j},Object(n.jsx)(b.Placeholder,{css:O},"Loading..."),Object(n.jsx)("iframe",{css:d,src:e.url,allowFullScreen:e.allowFullscreen}));const j=n.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,O=n.css`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`,d=n.css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;

  z-index: 1;
`,m=({config:e})=>{const t=Object(r.useMemo)(()=>{return(e=>/https:\/\/([w.-]+.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/.test(e))(e.url)?{url:`https://www.figma.com/embed?embed_host=${e.embedHost||location.hostname}&url=${e.url}`,allowFullscreen:e.allowFullscreen}:(console.warn("[storybook-addon-designs] The URL you specified is not valid Figma URL.\nThe addon fallbacks to normal iframe mode.For more detail, please check <https://www.figma.com/developers/embed>."),e)},[e.url,e.allowFullscreen,e.embedHost]);return Object(n.jsx)(u,{config:t})},p=({children:e,className:t,style:s,defaultValue:o,value:c,onChange:a})=>{const[l,i]=Object(r.useState)([0,0]);Object(r.useEffect)(()=>{i(o||(c||[0,0]))},[o]);const b=((e,t)=>{const[s,o]=Object(r.useState)([0,0]),[c,n]=Object(r.useState)(!1),a=Object(r.useCallback)(e=>{0===e.button&&(o([e.screenX,e.screenY]),n(!0))},[n,o]),l=Object(r.useCallback)(e=>{const t=e.touches[0];o([t.screenX,t.screenY]),n(!0)},[n,o]),i=Object(r.useCallback)(t=>{c&&o(s=>(e([t[0]-s[0],t[1]-s[1]]),t))},[o,c,...t]),b=Object(r.useCallback)(e=>{const{screenX:t,screenY:s}=e;i([t,s])},[i]),u=Object(r.useCallback)(e=>{const{screenX:t,screenY:s}=e.touches[0];i([t,s])},[o,c,...t]),j=Object(r.useCallback)(()=>{o([0,0]),n(!1)},[n,o]);return{onMouseDown:a,onMouseMove:b,onMouseUp:j,onMouseLeave:j,onTouchStart:l,onTouchMove:u,onTouchCancel:j,onTouchEnd:j}})(e=>{a&&a(e),i(t=>[t[0]+e[0],t[1]+e[1]])},[i,a]),u=Object(r.useMemo)(()=>{const e=c||l;return{transform:`translate(${e[0]}px, ${e[1]}px)`}},[c,l]);return Object(n.jsx)("div",Object.assign({css:x,className:t,style:s},b),Object(n.jsx)("div",{css:f,style:u},e))};const x=n.css`
  position: relative;
  overflow: hidden;

  &:active {
    cursor: move;
  }
`,f=n.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`,g=({onZoomIn:e,onZoomOut:t,onReset:s})=>Object(n.jsx)(r.Fragment,null,Object(n.jsx)(b.IconButton,{onClick:e},Object(n.jsx)(b.Icons,{icon:"zoom"})),Object(n.jsx)(b.IconButton,{onClick:t},Object(n.jsx)(b.Icons,{icon:"zoomout"})),Object(n.jsx)(b.IconButton,{onClick:s},Object(n.jsx)(b.Icons,{icon:"zoomreset"})));const h=(e,t)=>{const[s,o]=Object(r.useState)(1);return Object(r.useEffect)(()=>{o(e)},t),{scale:s,zoomIn:Object(r.useCallback)(()=>{o(e=>e+.1)},[o]),zoomOut:Object(r.useCallback)(()=>{o(e=>Math.max(e-.1,.1))},[o]),resetZoom:Object(r.useCallback)(()=>{o(1)},[o])}},k=({config:e})=>{const t=h(e.scale||1,[e.scale]),s=Object(r.useMemo)(()=>({transform:`scale(${t.scale})`}),[t.scale]);return Object(n.jsx)("div",{css:w},Object(n.jsx)(b.FlexBar,{border:!0},Object(n.jsx)(r.Fragment,{key:"left"},Object(n.jsx)("p",null,Object(n.jsx)("b",null,"Image")),Object(n.jsx)(b.Separator,null),Object(n.jsx)(g,{onReset:t.resetZoom,onZoomIn:t.zoomIn,onZoomOut:t.zoomOut}))),Object(n.jsx)(p,{css:v,defaultValue:e.offset},Object(n.jsx)("img",{css:y,src:e.url,style:s})))};const w=n.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,v=n.css`
  flex-grow: 1;
`,y=n.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  pointer-events: none;
  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
`;var C=s(212);const S=Object(n.jsx)(b.Placeholder,null,"Loading PDF..."),F=({config:e})=>{const t=((e=1)=>{const[t,s]=Object(r.useState)(1),[o,c]=Object(r.useState)(1),n=Object(r.useCallback)(t=>{c(t),s(t>0?e:0)},[e,c,s]),a=Object(r.useCallback)(e=>{s(e>o?o:e<=0?1:e)},[o,s]);Object(r.useEffect)(()=>{a(e)},[e]);const l=t<=1,i=t>=o,b=Object(r.useCallback)(()=>{i||s(e=>e+1)},[i,s]),u=Object(r.useCallback)(()=>{l||s(e=>e-1)},[l,s]);return{current:t,total:o,isFirst:l,isLast:i,next:b,prev:u,jump:a,init:n}})(e.page),s=Object(r.useCallback)(e=>{t.init(e.numPages)},[t.init]),{scale:o,zoomIn:c,zoomOut:a,resetZoom:l}=h(e.scale||1,[e.scale]);return Object(n.jsx)("div",{css:I},Object(n.jsx)(b.FlexBar,{border:!0},Object(n.jsx)(r.Fragment,{key:"left"},Object(n.jsx)("p",null,Object(n.jsx)("b",null,"PDF")),Object(n.jsx)(b.Separator,null),Object(n.jsx)(g,{onReset:l,onZoomIn:c,onZoomOut:a}),Object(n.jsx)(b.Separator,null),Object(n.jsx)(b.IconButton,{css:D,onClick:t.prev,disabled:t.isFirst},Object(n.jsx)(b.Icons,{icon:"arrowleft"})),Object(n.jsx)("div",{css:P},t.current," / ",t.total),Object(n.jsx)(b.IconButton,{css:D,onClick:t.next,disabled:t.isLast},Object(n.jsx)(b.Icons,{icon:"arrowright"})))),Object(n.jsx)(p,{css:L,defaultValue:e.offset},Object(n.jsx)(C.Document,{file:e.url,loading:S,onLoadSuccess:s},Object(n.jsx)(C.Page,{css:z,loading:S,pageNumber:t.current,scale:o}))))};const I=n.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,D=e=>n.css`
  &[disabled] {
    color: ${e.color.medium};
    cursor: not-allowed;
  }
`,L=n.css`
  flex-grow: 1;
`,z=n.css`
  position: absolute !important;
  top: 50%;
  left: 50%;
  display: inline-block;

  border-radius: 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);

  transform: translate(-50%, -50%);
`,P=n.css`
  display: flex;
  align-items: center;
`,T=({active:e,api:t,channel:s})=>{const[o,c]=Object(r.useState)(),[a,j]=Object(r.useState)();if(Object(r.useEffect)(()=>{const e=e=>{j(e);const s=t.getParameters(e,"design");c(e=>s!==e?s:e)};return s.on(l.UpdateConfig,c),s.on(i.STORY_CHANGED,e),()=>{s.removeListener(l.UpdateConfig,c),s.removeListener(i.STORY_CHANGED,e)}},[]),!e)return null;if(!o||"length"in o&&0===o.length)return Object(n.jsx)(b.Placeholder,null,Object(n.jsx)(r.Fragment,null,"No designs found"),Object(n.jsx)(r.Fragment,null,"Learn how to"," ",Object(n.jsx)(b.Link,{href:"https://github.com/pocka/storybook-addon-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));const O=[...o instanceof Array?o:[o]].map((e,t)=>{const s={id:`addon-designs-tab--${t}`,title:e.name||e.type.toUpperCase()};switch(e.type){case"iframe":return[Object(n.jsx)(u,{config:e}),s];case"figma":return[Object(n.jsx)(m,{config:e}),s];case"pdf":return[Object(n.jsx)(F,{config:e}),s];case"image":return[Object(n.jsx)(k,{key:a,config:e}),s]}return[Object(n.jsx)(b.Placeholder,null,Object(n.jsx)(r.Fragment,null,"Invalid config type"),Object(n.jsx)(r.Fragment,null,"Config type you set is not supported. Please choose one from"," ",Object(n.jsx)(b.Link,{href:"https://github.com/pocka/storybook-addon-designs#available-types",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"available config types"))),s]});return 1===O.length?Object(n.jsx)("div",{key:a},O[0][0]):Object(n.jsx)(b.TabsState,{key:a,absolute:!0,initial:O[0][1].id},O.map(([e,t])=>Object(n.jsx)("div",{key:t.id,id:t.id,title:t.title},e)))};c.a.register(a,e=>{c.a.addPanel("STORYBOOK_ADDON_DESIGNS/panel",{title:"Design",render:({active:t,key:s})=>Object(n.jsx)(T,{key:s,channel:c.a.getChannel(),api:e,active:t})})})}},[[323,1,2]]]);