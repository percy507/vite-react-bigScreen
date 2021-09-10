var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,l=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&i(e,r,t[r]);return e},s=(e,a)=>t(e,r(a)),c=("undefined"!=typeof require&&require,(e,t,r)=>(i(e,"symbol"!=typeof t?t+"":t,r),r)),d=(e,t,r)=>(((e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)})(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)};export function __vite_legacy_guard(){import("data:text/javascript,")}/* empty css                      */import{r as m,R as p,L as u,H as g,S as f,g as y,h as x,b}from"./vendor.611ea5e5.js";import{_ as v,a as w,u as E,I as C,c as S,b as _,d as k,s as A,C as L,T as N}from"./antd.9feb3357.js";import{R as T}from"./recoil.25a84bb4.js";import{l as I}from"./lodash.f0888b3e.js";import{u as M}from"./react-countup.7bac741e.js";import{a as $}from"./animejs.0aff177b.js";import{u as B}from"./ahooks.d0a40cf4.js";import{u as W,r as j,i as z,a as O,b as F,c as P,d as R,e as H,f as G,g as D,h as K,j as J,k as U,l as q,m as V,n as Y,o as Q,p as X}from"./echarts.cef271c7.js";import{S as Z}from"./@jiaminghi/data-view-react.25f2dc97.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var ee=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],te=m.exports.forwardRef((function(e,t){var r=e.className,a=e.component,n=e.viewBox,o=e.spin,i=e.rotate,l=e.tabIndex,s=e.onClick,c=e.children,d=v(e,ee);w(Boolean(a||c),"Should have `component` prop or `children`."),E();var h=m.exports.useContext(C).prefixCls,p=void 0===h?"anticon":h,u=S(p,r),g=S(_({},"".concat(p,"-spin"),!!o)),f=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,y=k(k({},A),{},{className:g,style:f,viewBox:n});n||delete y.viewBox;var x=l;return void 0===x&&s&&(x=-1),m.exports.createElement("span",k(k({role:"img"},d),{},{ref:t,tabIndex:x,onClick:s,className:u}),a?m.exports.createElement(a,k({},y),c):c?(w(Boolean(n)||1===m.exports.Children.count(c)&&m.exports.isValidElement(c)&&"use"===m.exports.Children.only(c).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),m.exports.createElement("svg",k(k({},y),{},{viewBox:n}),c)):null)}));te.displayName="AntdIcon";var re=te,ae=["type","children"],ne=new Set;function oe(e){return Boolean("string"==typeof e&&e.length&&!ne.has(e))}function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e[t];if(oe(r)){var a=document.createElement("script");a.setAttribute("src",r),a.setAttribute("data-namespace",r),e.length>t+1&&(a.onload=function(){ie(e,t+1)},a.onerror=function(){ie(e,t+1)}),ne.add(r),document.body.appendChild(a)}}const le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,r=e.extraCommonProps,a=void 0===r?{}:r;t&&"undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&(Array.isArray(t)?ie(t.reverse()):ie([t]));var n=m.exports.forwardRef((function(e,t){var r=e.type,n=e.children,o=v(e,ae),i=null;return e.type&&(i=m.exports.createElement("use",{xlinkHref:"#".concat(r)})),n&&(i=n),m.exports.createElement(re,k(k(k({},a),o),{},{ref:t}),i)}));return n.displayName="Iconfont",n}({scriptUrl:"//at.alicdn.com/t/font_2727509_zzihoxkgp5.js"});function se(e){const{type:t,style:r}=e;return p.createElement(le,{type:t,style:r})}var ce="errorBoundary_3AFZg6";class de extends p.PureComponent{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.log(e,t)}render(){return this.state.hasError?p.createElement("div",{className:ce},p.createElement(se,{type:"icon-caogaoxiang"}),p.createElement("div",null,"加载出错,请刷新页面")):this.props.children}}var he="screenAdaptor_3uUGCF";function me(e){const{uiConfig:t,children:r}=e,a=m.exports.useRef(null),n=m.exports.useState()[1].bind(null,{}),o=I.exports.debounce((()=>{const e=document.documentElement,r=a.current,o=e.clientWidth/e.clientHeight,i=t.width/t.height,l=o>i,s=l?i/o:1,c=s*e.clientWidth/t.base_num,d=l?s*e.clientWidth:e.clientWidth,h=l?e.clientHeight:d/i;null!==r&&(e.style.fontSize=`${c.toFixed(3)}px`,r.style.width=`${d.toFixed(3)}px`,r.style.height=`${h.toFixed(3)}px`,window.__adaptorWidth=d,window.__adaptorHeight=h,n())}),300);return m.exports.useEffect((()=>(o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o))),[]),p.createElement("div",{className:he},p.createElement("div",{ref:a},null!==a.current?r:null))}var pe="HomePage_9JMUTH";function ue(){return p.createElement("div",{className:pe},p.createElement("div",null,p.createElement(u,{to:"/p1"},"页面1")),p.createElement("div",null,p.createElement(u,{to:"/p2"},"页面2")))}var ge="CanvasBg_13Ly8z";function fe(e){return Math.floor(1e3*Math.random())+1<10*e}function ye(e,t){return Math.random()*(t-e)+e}function xe(e){const{type:t="universe"}=e,r=m.exports.useRef(null);return m.exports.useEffect((()=>{if(null!==r.current)switch(t){case"universe":!function(e){var t,r,a,n;const{width:o,height:i}=e.getBoundingClientRect(),l=e.getContext("2d");let s=!0;e.width=o,e.height=i,e.style.backgroundImage="radial-gradient(\n    1600px at 70% 120%,\n    rgba(33, 39, 80, 1) 10%,\n    #020409 100%\n  )";class m{constructor(){h(this,t,.05),h(this,r,"180,184,240"),h(this,a,"226,225,142"),h(this,n,"226,225,224"),c(this,"isGiantStar",!1),c(this,"isComet",!1),c(this,"x",0),c(this,"y",0),c(this,"r",0),c(this,"dx",0),c(this,"dy",0),c(this,"fadingIn",!1),c(this,"fadingOut",!1),c(this,"opacity",0),c(this,"opacityTresh",0),c(this,"do",0)}reset(){this.isGiantStar=fe(3),this.isComet=!this.isGiantStar&&!s&&fe(10),this.x=ye(0,o),this.y=ye(0,i),this.r=ye(1.1,2.6),this.dx=ye(d(this,t),6*d(this,t))+ +this.isComet*d(this,t)*ye(50,120)+2*d(this,t),this.dy=-ye(d(this,t),6*d(this,t))-+this.isComet*d(this,t)*ye(50,120),this.fadingOut=!1,this.fadingIn=!0,this.opacity=0,this.opacityTresh=ye(.2,1-.4*+this.isComet),this.do=ye(5e-4,.002)+.001*+this.isComet}fadeIn(){this.fadingIn&&(this.fadingIn=!(this.opacity>this.opacityTresh),this.opacity+=this.do)}fadeOut(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do/2,(this.x>o||this.y<0)&&(this.fadingOut=!1,this.reset()))}draw(){if(l.beginPath(),this.isGiantStar)l.fillStyle=`rgba(${d(this,r)},${this.opacity})`,l.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.isComet){l.fillStyle=`rgba(${d(this,n)},${this.opacity})`,l.arc(this.x,this.y,1.5,0,2*Math.PI,!1);for(let e=0;e<30;e++)l.fillStyle=`rgba(${d(this,n)},${this.opacity-this.opacity/20*e})`,l.rect(this.x-this.dx/4*e,this.y-this.dy/4*e-2,2,2),l.fill()}else l.fillStyle=`rgba(${d(this,a)},${this.opacity})`,l.rect(this.x,this.y,this.r,this.r);l.closePath(),l.fill()}move(){this.x+=this.dx,this.y+=this.dy,(this.x>o||this.y<0)&&(this.fadingOut=!0)}}t=new WeakMap,r=new WeakMap,a=new WeakMap,n=new WeakMap;const p=[],u=()=>{l.clearRect(0,0,o,i);for(let e=0;e<p.length;e++){let t=p[e];t.move(),t.fadeIn(),t.fadeOut(),t.draw()}window.requestAnimationFrame(u)};(()=>{const e=.116*o;for(let t=0;t<e;t++)p[t]=new m,p[t].reset()})(),u(),setTimeout((()=>{s=!1}),100)}(r.current)}}),[r]),p.createElement("canvas",{className:ge,ref:r})}var be="LayerSelectBox_1J192v",ve="customCheckbox_3-YDTV";const we=L.Group;function Ee(e){const{singleMode:t=!1,options:r,value:a=[],onChange:n=(()=>{}),style:o={}}=e;if(!Array.isArray(r))throw new Error("LayerSelectBox: options must be an array");const[i,l]=m.exports.useState(a),s=r.map((e=>({label:p.createElement("div",{className:ve},e.iconType?p.createElement(se,{type:e.iconType,style:e.iconStyle||{}}):null,p.createElement("span",null,e.label)),value:e.value})));return m.exports.useEffect((()=>{a.toString()!==i.toString()&&l(a)}),[a]),p.createElement("div",{className:be,style:o},p.createElement(we,{options:s,value:i,onChange:e=>(e=>{l((r=>{let a=e;return t&&e.length>1&&(a=e.filter((e=>!r.includes(e)))),n(a),a}))})(e)}))}var Ce={width:2200,height:1080,base_num:100};function Se(e){return e/(Ce.width/window.__adaptorWidth)}var _e={LayerSelectBoxGroup:"LayerSelectBoxGroup_3SNMMW",CheckboxTree:"CheckboxTree_3tOnDe",tree__header:"tree__header_2qdurF",expand_icon:"expand_icon_V7sAKR",tree__content:"tree__content_1hA2MJ",customCheckbox:"customCheckbox_1FgfQO",iconfont:"iconfont_Vlu1-2"};const ke=L.Group;function Ae(e){const{treeKey:t,singleMode:r=!1,item:a,value:n,onChange:o}=e,[i,l]=m.exports.useState(n.checkedList),[s,c]=m.exports.useState(!1),d=a.children||[],h=m.exports.useMemo((()=>!!d.length&&(!!i.length&&i.length<d.length)),[d,i]),u=m.exports.useMemo((()=>d.length?i.length===d.length:!!i.length),[d,i]),g=e=>{l((a=>{let n=e;return r&&e.length>1&&(n=e.filter((e=>!a.includes(e)))),o({treeKey:t,checkedList:n}),n}))},f=e=>{const t=e.target.checked?d.length?d.map((e=>e.value)):[a.value]:[];g(t)},y=e=>p.createElement("div",{className:_e.customCheckbox},e.iconType?p.createElement(se,{type:e.iconType,style:e.iconStyle||{}}):null,p.createElement("span",null,e.label));return m.exports.useEffect((()=>{n.treeKey===t?n.checkedList.toString()!==i.toString()&&l(n.checkedList):l([])}),[n,t]),p.createElement("div",{className:_e.CheckboxTree},p.createElement("div",{className:_e.tree__header},p.createElement(L,{indeterminate:h,onChange:f,checked:u},y(a)),d.length?p.createElement("div",{className:_e.expand_icon,onClick:()=>c(!s)},s?p.createElement(se,{type:"icon-arrow-up-filling"}):p.createElement(se,{type:"icon-arrow-down-filling"})):null),(()=>{if(0===d.length)return null;const e=`${_e.tree__content} ${s?_e.tree__content__expand:""}`,t={height:s?Se(40*d.length+12):0,paddingTop:s?Se(6):0,paddingBottom:s?Se(6):0},r=d.map((e=>({label:y(e),value:e.value})));return p.createElement("div",{className:e,style:t},p.createElement(ke,{options:r,value:i,onChange:e=>g(e)}))})())}function Le(e){const{singleMode:t=!1,options:r,value:a={treeKey:0,checkedList:[]},onChange:n=(()=>{}),style:o={}}=e;if(!Array.isArray(r))throw new Error("LayerSelectBoxGroup: options must be an array");return p.createElement("div",{className:_e.LayerSelectBoxGroup,style:o},r.map(((e,r)=>p.createElement(Ae,{key:r,treeKey:r,singleMode:t,value:a,onChange:e=>{"function"==typeof n&&n(e)},item:e}))))}var Ne={};function Te(){const[e,t]=m.exports.useState([]),[r,a]=m.exports.useState(),n=[{label:"图层1",value:1},{label:"图层222",value:2},{label:"图层3",value:3,iconType:"icon-dianying"},{label:"图层4",value:4,iconType:"icon-dianying",iconStyle:{fontSize:Se(24)}}],o=[{label:"图层组1",children:[{label:"图层11",value:1.1,iconType:"icon-dianying"},{label:"图层12",value:1.2,iconType:"icon-dianying"},{label:"图层13",value:1.3,iconType:"icon-dianying"}]},{label:"图层组2",iconType:"icon-dianying",children:[{label:"图层21",value:2.1,iconType:"icon-dianying"},{label:"图层22",value:2.2,iconType:"icon-dianying"},{label:"图层23",value:2.3,iconType:"icon-dianying"}]},{label:"图层3",value:3,iconType:"icon-dianying",iconStyle:{fontSize:Se(24)}}];return p.createElement("div",{className:Ne.Center},p.createElement(Ee,{options:n,value:e,onChange:e=>{console.log(e),t(e)}}),p.createElement(Le,{options:o,value:r,onChange:e=>{console.log(e),a(e)},style:{top:Se(110),bottom:"unset"}}))}var Ie="AutoScrollView_3K3Ibo",Me="asv__container_2VkWJn";function $e(e){const{mode:t="full",height:r,stepHeight:a=40,children:n}=e,o=Se(r),i=Se(a),c=m.exports.useRef(null);return m.exports.useEffect((()=>{if(null!==c.current){const{height:e}=c.current.getBoundingClientRect();if(e<=o)return;const r={targets:c.current,loop:!0,duration:Math.round(30*(e-o)),delay:1e3,endDelay:1200};if("full"===t)$(s(l({},r),{translateY:o-e,easing:"linear"}));else if("step"===t){const t=Math.floor((e-o)/i)+1,a=new Array(t).fill(0).map(((e,t)=>({translateY:-i*(t+1),delay:1e3})));$(s(l({},r),{easing:"easeOutCirc",keyframes:a}))}}}),[c]),p.createElement("div",{className:Ie,style:{height:o}},p.createElement("div",{className:Me,ref:c},n))}const Be=()=>{const e={nameTextStyle:{color:"rgba(255,255,255,0.6)",fontSize:Se(16)},axisLine:{lineStyle:{color:"rgba(79, 133, 149, 0.4)",width:Se(2)}},axisLabel:{color:"rgba(240, 245, 247, 0.8)",margin:Se(8),fontSize:Se(18),lineHeight:Se(18)},splitLine:{show:!1,lineStyle:{color:["rgba(132, 201, 255, 0.2)"]}}};return{xAxisStyle:I.exports.merge(I.exports.cloneDeep(e),{axisLabel:{interval:"auto"}}),yAxisStyle:I.exports.cloneDeep(e)}},We=()=>{const{xAxisStyle:e,yAxisStyle:t}=Be(),r={selectedMode:!1,padding:Se(5),itemGap:Se(10),itemWidth:Se(17),itemHeight:Se(17),textStyle:{color:"rgba(255, 255, 255, 1)",fontSize:Se(20),overflow:"truncate"}};return{line:{legend:r,xAxis:I.exports.cloneDeep(e),yAxis:I.exports.cloneDeep(t)},bar:{legend:I.exports.merge(r,{itemWidth:Se(10),itemHeight:Se(10),textStyle:{color:"rgba(255, 255, 255, 0.6)",fontSize:Se(14),overflow:"truncate"}}),xAxis:I.exports.cloneDeep(e),yAxis:I.exports.cloneDeep(t)},pie:{legend:r,tooltip:{show:!1,className:"echarts-tooltip",padding:Se(6),textStyle:{fontSize:Se(14)}}}}},je=(e,t)=>{const{xAxisStyle:r,yAxisStyle:a}=Be();return Array.isArray(t.xAxis)&&(t.xAxis=t.xAxis.map((e=>I.exports.merge(I.exports.cloneDeep(r),e)))),Array.isArray(t.yAxis)&&(t.yAxis=t.yAxis.map((e=>I.exports.merge(I.exports.cloneDeep(a),e)))),I.exports.merge(e,t)};var ze={merge:e=>{const{series:t}=e;if(Array.isArray(t)&&0!==t.length){const r=t[0].type;if("line"===r)return je(We().line,e);if("bar"===r)return je(We().bar,e);if("pie"===r)return je(We().pie,e)}return e}};var Oe="EChart_lmknjj";var Fe={version:1,themeName:"myTheme",theme:{seriesCnt:"3",backgroundColor:"rgba(252,252,252,0)",titleColor:"#666666",subtitleColor:"#999999",textColorShow:!1,textColor:"#333",markTextColor:"#ffffff",color:["#3fb1e3","#6be6c1","#626c91","#a0a7e6","#c4ebad","#96dee8"],borderColor:"#ccc",borderWidth:0,visualMapColor:["#2a99c9","#afe8ff"],legendTextColor:"#999999",kColor:"#e6a0d2",kColor0:"transparent",kBorderColor:"#e6a0d2",kBorderColor0:"#3fb1e3",kBorderWidth:"2",lineWidth:"3",symbolSize:"8",symbol:"emptyCircle",symbolBorderWidth:"2",lineSmooth:!1,graphLineWidth:"1",graphLineColor:"#cccccc",mapLabelColor:"#ffffff",mapLabelColorE:"#3fb1e3",mapBorderColor:"#aaaaaa",mapBorderColorE:"#3fb1e3",mapBorderWidth:.5,mapBorderWidthE:1,mapAreaColor:"#eeeeee",mapAreaColorE:"rgba(63,177,227,0.25)",axes:[{type:"all",name:"通用坐标轴",axisLineShow:!0,axisLineColor:"#cccccc",axisTickShow:!1,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#999999",splitLineShow:!0,splitLineColor:["#eeeeee"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]},{type:"category",name:"类目坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!1,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"value",name:"数值坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"log",name:"对数坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"time",name:"时间坐标轴",axisLineShow:!0,axisLineColor:"#333",axisTickShow:!0,axisTickColor:"#333",axisLabelShow:!0,axisLabelColor:"#333",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}],axisSeperateSetting:!1,toolboxColor:"#999999",toolboxEmphasisColor:"#666666",tooltipAxisColor:"#cccccc",tooltipAxisWidth:1,timelineLineColor:"#626c91",timelineLineWidth:1,timelineItemColor:"#626c91",timelineItemColorE:"#626c91",timelineCheckColor:"#3fb1e3",timelineCheckBorderColor:"#3fb1e3",timelineItemBorderWidth:1,timelineControlColor:"#626c91",timelineControlBorderColor:"#626c91",timelineControlBorderWidth:.5,timelineLabelColor:"#626c91",datazoomBackgroundColor:"rgba(255,255,255,0)",datazoomDataColor:"rgba(222,222,222,1)",datazoomFillColor:"rgba(114,230,212,0.25)",datazoomHandleColor:"#cccccc",datazoomHandleWidth:"100",datazoomLabelColor:"#999999"}};W([z,O,F,P,R,H,G,D,K,J,U,q,V,Y]);const Pe=Q,Re={};function He(e){const{width:t,height:r,options:a,autoAction:n}=e,o=m.exports.useRef(null),[i,l]=m.exports.useState(null),s=B(document.body),c=m.exports.useMemo((()=>{let e=a;return n&&Array.isArray(e.series)&&0!==e.series.length&&(e.series[0].silent=!0),ze.merge(e)}),[ze,n,a]);if(!Array.isArray(c.series))throw new Error("EChart series must be an array");if(0===c.series.length)throw new Error("EChart series can not be an empty array");const d=c.series[0].type;return m.exports.useEffect((()=>(()=>{if(!o.current)return;let e=i;e||(e=X(o.current,"myTheme"),l(e)),e.setOption(c),window.setTimeout((()=>{null==e||e.resize()}),1e3)})()),[o,c,s]),m.exports.useEffect((()=>(()=>{if(!(null==n?void 0:n.type))return;if(!i)return;if("pie"!==d)return;const e={select:"unselect",highlight:"downplay"},t=Array.isArray(c.series)&&0!==c.series.length&&c.series[0].data.length||0;let r=0;i.dispatchAction({type:n.type,seriesIndex:0,dataIndex:r}),window.clearInterval(Re[n.timerFlag]),Re[n.timerFlag]=window.setInterval((()=>{i.dispatchAction({type:e[n.type],seriesIndex:0}),setTimeout((()=>{r<t-1?r+=1:r=0,i.dispatchAction({type:n.type,seriesIndex:0,dataIndex:r})}),200)}),n.interval)})()),[i,c]),m.exports.useEffect((()=>()=>{n&&window.clearInterval(Re[n.timerFlag]),null==i||i.dispose()}),[i]),p.createElement("div",{ref:o,style:{width:"number"==typeof t?Se(t):t,height:"number"==typeof r?Se(r):r},className:Oe})}j("myTheme",Fe);var Ge="PrimaryCard_1TX-ga",De="pcard__header_hgd5_Q",Ke="pcard__headerLeft_3rbgpg",Je="pcard__headerRight_6q-oJT",Ue="pcard__arrow_2gr5Ss",qe="pcard__arrow__rect_21hC1J",Ve="active_2RLNy-",Ye="pcard__content_32nYfz";const{TabPane:Qe}=N;function Xe(e){const{title:t,tabs:r=[],children:a=null}=e,n=r.length>0,[o,i]=m.exports.useState(0);return p.createElement("div",{className:Ge},p.createElement("div",{className:De},p.createElement("div",{className:Ke},t),p.createElement("div",{className:Je},p.createElement("div",{className:Ue},n?r.map(((e,t)=>p.createElement("div",{key:t,className:`${qe} ${o===t?Ve:""}`}))):p.createElement("div",{className:`${qe} ${Ve}`})))),p.createElement("div",{className:Ye},n?p.createElement(N,{destroyInactiveTabPane:!0,onChange:e=>{i(+e)}},r.map(((e,t)=>p.createElement(Qe,{key:t,tab:e.tab,tabKey:`${t}`},e.children)))):a))}function Ze(e,t=!0){let r=e.replace(/\s/g,"").replace("#","").toLowerCase();if(!function(e){return/^([a-f\d]{3,4}|[a-f\d]{6}|[a-f\d]{8})$/i.test(e)}(r))throw new Error("Invalid hex color code");3!==r.length&&4!==r.length||(r=r.replace(/(.)/g,"$1$1"));const a=Number.parseInt(r.substring(0,2),16),n=Number.parseInt(r.substring(2,4),16),o=Number.parseInt(r.substring(4,6),16),i=Number.parseInt(r.substring(6,8)||"ff",16);return t?`rgba(${a},${n},${o},${function(e,t=2){const r=Number(`1e${t}`);return Math.round(e*r)/r}(i/255,4)})`:`rgb(${a},${n},${o})`}function et(e){return e.replace(/\s/g,"").replace(/rgb\((.+?)\)/,"rgba($1,1)")}function tt(e,t,r){let a=e.replace(/\s/g,""),n=t.replace(/\s/g,"");a.startsWith("#")&&(a=Ze(a)),a.startsWith("rgb(")&&(a=et(a)),n.startsWith("#")&&(n=Ze(n)),n.startsWith("rgb(")&&(n=et(n));const o=a.replace(/rgba\((.+?)\)/,"$1").split(",").map((e=>+e)),i=n.replace(/rgba\((.+?)\)/,"$1").split(",").map((e=>+e)),l=new Array(3).fill(0).map(((e,t)=>Math.round(o[t]+(i[t]-o[t])*r)));return r<=.5?`rgba(${l.join(",")},${o[3]})`:`rgba(${l.join(",")},${i[3]})`}var rt="ProgressBar1_38OnQc",at="bgContainer_35TjRM",nt="rectContainer_1F1vSX";function ot(e){const{ratio:t=.5,mainBg:r={startColor:"rgba(225,231,235,0)",endColor:"rgba(225,231,235,0.1)"},rectBg:a={startColor:"#FFFFFF",endColor:"rgba(255,103,104,1)"}}=e,n=m.exports.useRef(null),o=100*t+"%";return m.exports.useEffect((()=>{null!==n.current&&(()=>{const e=n.current;if(e){const t=e.getBoundingClientRect().width,r=Se(4),n=Se(3),o=t-r;let i="";for(let e=1;e*(r+n)<o;e++)i+=`\n          <rect\n            x="${(e-1)*(r+n)}"\n            width="${r}"\n            height="100%"\n            fill="${tt(a.startColor,a.endColor,e*(r+n)/t)}" />\n          <rect\n            x="${(e-1)*(r+n)+r}"\n            width="${n}"\n            height="100%"\n            fill="transparent" />\n        `;e.innerHTML=`<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">${i}</svg>`}})()}),[n]),p.createElement("div",{className:rt},p.createElement("div",{className:at,style:{width:o,background:`linear-gradient(90deg, ${r.startColor} 0%, ${r.endColor} 100%)`}}),p.createElement("div",{className:nt,style:{width:o},ref:n}))}var it="scrollTable_bMTPjv";function lt(e){const{config:t}=e,r={header:[],columnWidth:[],data:[],align:new Array(100).fill("center"),headerHeight:Se(40),headerBGC:"transparent",oddRowBGC:"#121c2a",evenRowBGC:"#1f313c",rowNum:4},a=I.exports.merge(r,t);return p.createElement("div",{className:it},p.createElement(Z,{config:a,style:{height:(()=>{const e=Se(40);return(a.rowNum||r.rowNum)*e+(a.headerHeight||r.headerHeight)})()}}))}const st=[{title:"类目111"},{title:"类目22"},{title:"类目333"},{title:"类目444"},{title:"类目5"},{title:"类目6666"}].map((e=>s(l({},e),{ratio:.8*Math.random()+.2}))),ct=["俗话说:兔子不吃窝边草;","可俗话又说:近水楼台先得月!","俗话说:宰相肚里能撑船;","可俗话又说:有仇不报非君子!","俗话说:人不犯我，我不犯人;","可俗话又说:先下手为强，后下手遭殃!","俗话说:男子汉大丈夫，宁死不屈:","可俗话又说:男子汉大丈夫，能屈能伸!","俗话说:量小非君子;","可俗话又说:无毒不丈夫!","俗话说:嫁鸡随鸡，嫁狗随狗;","可俗话又说:男怕选错行，女怕嫁错郎!"],dt=e=>({grid:{top:Se(50),bottom:Se(5),right:Se(60),left:Se(20),containLabel:!0},xAxis:{name:"年份",type:"category",data:["2016","2017","2018","2019","2020","2021"]},yAxis:{name:"常驻人口/人",type:"value",splitNumber:3,axisLine:{show:!0},splitLine:{show:!0}},series:[{data:e,type:"bar",barWidth:Se(12),label:{show:!0,position:"top",color:"#FFF"},itemStyle:{color:new Pe.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(81,91,212,0.2)"},{offset:1,color:"rgba(81,91,212,1)"}])}}]}),ht=e=>{const t={center:["50%","90%"],startAngle:180,endAngle:0,min:0,max:100,pointer:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},anchor:{show:!1},title:{show:!1},axisLabel:{show:!1},data:e};return{title:{text:"2个guage+1个custom",left:"center",textStyle:{color:"#ade",fontSize:Se(18)}},polar:{center:["50%","90%"],radius:Se(93)},angleAxis:{type:"value",startAngle:180,min:0,max:200,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},radiusAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},series:[s(l({},t),{type:"gauge",radius:Se(80),progress:{show:!0,width:Se(10),roundCap:!0,itemStyle:{color:"#4AEAAE"}},axisLine:{roundCap:!0,lineStyle:{width:Se(10)}},detail:{valueAnimation:!0,fontSize:Se(28),color:"#4AEAAE",offsetCenter:[0,-Se(10)],formatter:"{value}人"}}),s(l({},t),{type:"gauge",radius:Se(93),progress:{show:!0,width:Se(0),roundCap:!0,itemStyle:{borderColor:"#4AEAAE",borderType:[Se(2)],borderWidth:Se(2)}},axisTick:{show:!0,distance:Se(-16),lineStyle:{color:"rgba(255, 255, 255, 0.1)",width:Se(2)},length:Se(2)}}),{type:"custom",coordinateSystem:"polar",renderItem(e,t){const r=t.value(0)/100*180,a=e=>{const r=(({x:e,y:t,r:r,angle:a})=>({x:e-r*Math.cos(a*Math.PI/180),y:t-r*Math.sin(a*Math.PI/180)}))({x:t.getWidth()/2,y:.9*t.getHeight(),r:Se(93),angle:e});return{cx:r.x,cy:r.y,r:Se(3)}};return{type:"circle",shape:a(r),style:{stroke:"",fill:"rgba(180, 255, 229, 1)",shadowBlur:Se(8),shadowColor:"rgba(180, 255, 229, 1)"},extra:{degree:r},transition:"extra",during(e){const t=e.getExtra("degree");e.setShape("cx",a(t).cx),e.setShape("cy",a(t).cy)},silent:!0}},data:e}]}},mt=()=>{const e=new Array(4).fill(0).map((()=>({name:"公司-"+~~(80*Math.random()+10),value:~~(80*Math.random()+10),key1:"标签"+~~(80*Math.random()+10),key2:(new Date).toISOString().replace(/\..+/g,"")})));return{legend:{top:"bottom",right:Se(0)},graphic:[{type:"image",top:Se(4),left:Se(4),z:-10,bounding:"raw",style:{image:"./assets/pieBg.01097232.svg",width:Se(150),height:Se(150)}}],series:[{type:"pie",right:Se(0),center:[Se(80),Se(80)],radius:["20%","60%"],avoidLabelOverlap:!1,label:{show:!1},labelLayout:()=>({x:Se(200),y:Se(50),align:"left"}),itemStyle:{shadowColor:"#00345F",shadowOffsetX:0,shadowOffsetY:Se(2),shadowBlur:Se(6)},emphasis:{scaleSize:Se(14),labelLine:{showAbove:!0,lineStyle:{color:"#fff"}},label:{show:!0,backgroundColor:{image:"./assets/labelBg.935cce6e.svg"},padding:[Se(10),Se(14)],formatter:e=>{const t=e.data;return[`{title|${t.name} (${t.value}%)}`,`{key1|key1: ${t.key1}}`,`{key2|key2: ${t.key2}}`].join("\n")},rich:{title:{align:"left",color:"#fff",fontSize:Se(18),padding:[0,0,Se(6),0]},key1:{align:"left",color:"#adf",fontSize:Se(16),height:Se(20)},key2:{align:"left",color:"#adf",fontSize:Se(16),height:Se(20)}}}},data:e}]}};var pt={Left:"Left_1xnisF",list1Item:"list1Item_PSCMU4",list2Item:"list2Item_2_QZ4E",block13__title:"block13__title_2xJP5G",block13__list:"block13__list_35vRab",block13__listItem:"block13__listItem_2f8uaT"};const ut=()=>p.createElement($e,{height:144,mode:"step",stepHeight:36},p.createElement("div",null,st.map((e=>p.createElement("div",{className:pt.list1Item,key:e.title},p.createElement("div",null,e.title),p.createElement(ot,{ratio:e.ratio})))))),gt=()=>p.createElement($e,{height:144},p.createElement("div",null,ct.map((e=>p.createElement("div",{className:pt.list2Item,key:e},e))))),ft=()=>{const{countUp:e,update:t}=M({end:0,separator:","}),{countUp:r,update:a}=M({end:0,separator:","}),{countUp:n,update:o}=M({end:0,separator:","}),i=()=>{t(~~(8e4*Math.random()+1e3)),a(~~(8e4*Math.random()+1e3)),o(~~(8e4*Math.random()+1e3))};return m.exports.useEffect((()=>{i();const e=setInterval(i,5e3);return()=>clearInterval(e)}),[]),p.createElement("div",{className:pt.block13},p.createElement("div",{className:pt.block13__title},"react-countup"),p.createElement("div",{className:pt.block13__list},p.createElement("div",{className:pt.block13__listItem},e),p.createElement("div",{className:pt.block13__listItem},r),p.createElement("div",{className:pt.block13__listItem},n)))},yt=()=>{const e={headerBGC:"rgba(111,233,111,0.1)",header:["公司名称","地址","资本"],columnWidth:[Se(180),Se(140)],data:new Array(12).fill(0).map((()=>[`杭州${~~(8e4*Math.random())}公司`,"地址"+~~(8e4*Math.random()),~~(8e4*Math.random())+"万元"]))};return p.createElement(lt,{config:e})},xt=()=>{const[e,t]=m.exports.useState([]),r=()=>{t(new Array(6).fill(0).map((()=>~~(450*Math.random()+50))))};return m.exports.useEffect((()=>{r();const e=setInterval(r,3e3);return()=>clearInterval(e)}),[]),p.createElement(He,{height:200,options:dt(e)})},bt=()=>{const[e,t]=m.exports.useState([]),r=()=>{t([{value:~~(80*Math.random()+10)}])};return m.exports.useEffect((()=>{r();const e=setInterval(r,3e3);return()=>clearInterval(e)}),[]),p.createElement(He,{height:200,options:ht(e)})},vt=()=>p.createElement(He,{height:200,options:mt(),autoAction:{type:"highlight",interval:2e3,timerFlag:"test1"}});function wt(){const e=[{title:"卡片1",tabs:[{tab:"自滚动[step]",children:p.createElement(ut,null)},{tab:"自滚动[full]",children:p.createElement(gt,null)},{tab:"数字切换",children:p.createElement(ft,null)},{tab:"轮播表格",children:p.createElement(yt,null)}]},{title:"卡片2",tabs:[{tab:"基础图表",children:p.createElement(xt,null)},{tab:"复合图表",children:p.createElement(bt,null)},{tab:"轮播图表",children:p.createElement(vt,null)}]}];return p.createElement("div",{className:pt.Left},e.map(((e,t)=>p.createElement(Xe,l({key:t},e)))))}var Et="Page1_2fDXkd",Ct="header_Jpjlnd",St="headerTitle_3cj6wj";function _t(){return p.createElement("div",{className:Et},p.createElement(xe,{type:"universe"}),p.createElement("div",{className:Ct},p.createElement("div",{className:St},"宇宙xx大屏")),p.createElement(wt,null),p.createElement(Te,null))}var kt="Page2_2KOs2p";function At(){return p.createElement("div",{className:kt},p.createElement(xe,{type:"universe"}))}function Lt(){return p.createElement(me,{uiConfig:Ce},p.createElement(T,null,p.createElement(g,null,p.createElement(f,null,p.createElement(y,{path:"/",exact:!0,component:ue}),p.createElement(y,{path:"/p1",exact:!0,component:_t}),p.createElement(y,{path:"/p2",exact:!0,component:At}),p.createElement(x,{to:"/"})))))}b.render(p.createElement(p.StrictMode,null,p.createElement(de,null,p.createElement(Lt,null))),document.getElementById("root"));
