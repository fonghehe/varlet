var V=Object.defineProperty;var h=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var k=(e,n,l)=>n in e?V(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,S=(e,n)=>{for(var l in n||(n={}))_.call(n,l)&&k(e,l,n[l]);if(h)for(var l of h(n))$.call(n,l)&&k(e,l,n[l]);return e};import{p as P,P as U}from"./index.d9cbfe8a.js";import{B as A}from"./index.99c30020.js";import{p as R,m as F}from"./components.57ac5c69.js";import{e as N,f as z,c as I,i as q}from"./shared.1184922b.js";import{p as G}from"./en-US.f8762106.js";import{_ as H}from"./elevation.6f443b25.js";import{d as E,r as w,y as O,e as b,o as v,l as g,j as p,a as f,G as T,n as J,m,t as C,h as j,H as K,q as L,z as M}from"./vendor.efca09d3.js";function Q(e){return["left","center","right"].includes(e)}const W=S({show:{type:Boolean,default:!1},title:{type:String},message:{type:String},messageAlign:{type:String,default:"left",validator:Q},confirmButton:{type:Boolean,default:!0},cancelButton:{type:Boolean,default:!0},confirmButtonText:{type:String},cancelButtonText:{type:String},confirmButtonTextColor:{type:String},cancelButtonTextColor:{type:String},confirmButtonColor:{type:String},cancelButtonColor:{type:String},onBeforeClose:{type:Function},onConfirm:{type:Function},onCancel:{type:Function},"onUpdate:show":{type:Function},dialogClass:{type:String},dialogStyle:{type:Object}},R(P,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"]));const X=E({name:"VarDialog",components:{VarPopup:U,VarButton:A},inheritAttrs:!1,props:W,setup(e){const n=w(!1),l=w(!1),o=()=>{var a;return(a=e["onUpdate:show"])==null?void 0:a.call(e,!1)},u=()=>{var B;const{closeOnClickOverlay:a,onClickOverlay:s,onBeforeClose:r}=e;if(s==null||s(),!!a){if(r!=null){r("close",o);return}(B=e["onUpdate:show"])==null||B.call(e,!1)}},t=()=>{var r;const{onBeforeClose:a,onConfirm:s}=e;if(s==null||s(),a!=null){a("confirm",o);return}(r=e["onUpdate:show"])==null||r.call(e,!1)},d=()=>{var r;const{onBeforeClose:a,onCancel:s}=e;if(s==null||s(),a!=null){a("cancel",o);return}(r=e["onUpdate:show"])==null||r.call(e,!1)};return O(()=>e.show,a=>{n.value=a},{immediate:!0}),O(()=>e.closeOnClickOverlay,a=>{if(e.onBeforeClose!=null){l.value=!1;return}l.value=a},{immediate:!0}),{pack:G,dt:N,popupShow:n,popupCloseOnClickOverlay:l,handleClickOverlay:u,confirm:t,cancel:d}}}),Y={class:"var-dialog__title"},Z={class:"var-dialog__actions"};function D(e,n,l,o,u,t){const d=b("var-button"),a=b("var-popup");return v(),g(a,{class:"var-dialog__popup","var-dialog-cover":"",show:e.popupShow,overlay:e.overlay,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,"lock-scroll":e.lockScroll,"close-on-click-overlay":e.popupCloseOnClickOverlay,teleport:e.teleport,onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange,onClickOverlay:e.handleClickOverlay},{default:p(()=>[f("div",K({class:["var--box var-dialog",e.dialogClass],style:e.dialogStyle},e.$attrs),[f("div",Y,[T(e.$slots,"title",{},()=>[m(C(e.dt(e.title,e.pack.dialogTitle)),1)])]),f("div",{class:"var-dialog__message",style:J({textAlign:e.messageAlign})},[T(e.$slots,"default",{},()=>[m(C(e.message),1)])],4),f("div",Z,[e.cancelButton?(v(),g(d,{key:0,class:"var-dialog__button var-dialog__cancel-button","var-dialog-cover":"",text:"","text-color":e.cancelButtonTextColor,color:e.cancelButtonColor,onClick:e.cancel},{default:p(()=>[m(C(e.dt(e.cancelButtonText,e.pack.dialogCancelButtonText)),1)]),_:1},8,["text-color","color","onClick"])):j("v-if",!0),e.confirmButton?(v(),g(d,{key:1,class:"var-dialog__button var-dialog__confirm-button","var-dialog-cover":"",text:"","text-color":e.confirmButtonTextColor,color:e.confirmButtonColor,onClick:e.confirm},{default:p(()=>[m(C(e.dt(e.confirmButtonText,e.pack.dialogConfirmButtonText)),1)]),_:1},8,["text-color","color","onClick"])):j("v-if",!0)])],16)]),_:3},8,["show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange","onClickOverlay"])}var c=H(X,[["render",D]]);let i;function y(e){return z()?new Promise(n=>{y.close();const l=I(e)||q(e)?{message:String(e)}:e,o=L(l);o.teleport="body",i=o;const{unmountInstance:u}=F(c,o,{onConfirm:()=>{var t;(t=o.onConfirm)==null||t.call(o),n("confirm")},onCancel:()=>{var t;(t=o.onCancel)==null||t.call(o),n("cancel")},onClose:()=>{var t;(t=o.onClose)==null||t.call(o),n("close")},onClosed:()=>{var t;(t=o.onClosed)==null||t.call(o),u(),i===o&&(i=null)},onRouteChange:()=>{u(),i===o&&(i=null)},"onUpdate:show":t=>{o.show=t}});o.show=!0}):Promise.resolve()}c.install=function(e){e.component(c.name,c)};y.install=function(e){e.component(c.name,c)};y.close=()=>{if(i!=null){const e=i;i=null,M().then(()=>{e.show=!1})}};y.Component=c;export{y as D};
