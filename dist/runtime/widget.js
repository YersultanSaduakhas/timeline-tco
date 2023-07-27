System.register(["jimu-core","jimu-arcgis","jimu-ui","jimu-core/dnd","jimu-theme"],(function(e,t){var n={},a={},i={},l={},o={};return{setters:[function(e){n.AllDataSourceTypes=e.AllDataSourceTypes,n.AppMode=e.AppMode,n.BaseVersionManager=e.BaseVersionManager,n.DataSourceManager=e.DataSourceManager,n.DataSourceStatus=e.DataSourceStatus,n.DataSourceTypes=e.DataSourceTypes,n.Immutable=e.Immutable,n.MultipleDataSourceComponent=e.MultipleDataSourceComponent,n.React=e.React,n.ReactRedux=e.ReactRedux,n.ReactResizeDetector=e.ReactResizeDetector,n.classNames=e.classNames,n.css=e.css,n.dataSourceUtils=e.dataSourceUtils,n.dateUtils=e.dateUtils,n.defaultMessages=e.defaultMessages,n.getAppStore=e.getAppStore,n.hooks=e.hooks,n.jsx=e.jsx,n.lodash=e.lodash,n.polished=e.polished,n.useIntl=e.useIntl},function(e){a.ArcGISDataSourceTypes=e.ArcGISDataSourceTypes,a.MapViewManager=e.MapViewManager,a.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules},function(e){i.Alert=e.Alert,i.Button=e.Button,i.Dropdown=e.Dropdown,i.DropdownButton=e.DropdownButton,i.DropdownItem=e.DropdownItem,i.DropdownMenu=e.DropdownMenu,i.Icon=e.Icon,i.Label=e.Label,i.Popper=e.Popper,i.Switch=e.Switch,i.Tooltip=e.Tooltip,i.WidgetPlaceholder=e.WidgetPlaceholder,i.defaultMessages=e.defaultMessages},function(e){l.interact=e.interact},function(e){o.getThemeColorValue=e.getThemeColorValue}],execute:function(){e((()=>{var e={7586:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="m9 6.809 3.276 1.638.448-.894L10 6.19V3H9v3.809Z"></path><path fill="#000" fill-rule="evenodd" d="M10.293 11.943A5.501 5.501 0 0 0 9.5 1a5.5 5.5 0 0 0-.792 10.943L9.5 13l.793-1.057ZM14 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"></path><path fill="#000" d="M6 16H0v1h6v-1ZM13 16h6v1h-6v-1Z"></path></svg>'},43980:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 4 16"><path fill="#282828" fill-rule="evenodd" d="M.322.03A.504.504 0 0 1 .96.305L4 8 .96 15.694a.504.504 0 0 1-.638.276.464.464 0 0 1-.29-.606L2.94 8 .031.636A.464.464 0 0 1 .322.03Z" clip-rule="evenodd"></path></svg>'},74695:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M8 3c1.175 0 2.27.337 3.195.92l.9-.598A7 7 0 0 0 2.5 13.33h10.999A6.97 6.97 0 0 0 15 9a6.968 6.968 0 0 0-1.256-4.002l-.603.906C13.686 6.808 14 7.867 14 9a5.968 5.968 0 0 1-1.008 3.33H3.008A6 6 0 0 1 8 3Zm-.183 6.9a1.322 1.322 0 0 1-.43-2.159L13 4 9.258 9.612a1.322 1.322 0 0 1-1.441.287Z" clip-rule="evenodd"></path></svg>'},59455:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8Z" clip-rule="evenodd"></path></svg>'},83909:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2 2.22V1l1 .7 8.128 5.69L12 8l-.872.61L3 14.3 2 15V2.22ZM10.256 8 3 13.08V2.92L10.256 8ZM14 1h-1v14h1V1Z" clip-rule="evenodd"></path></svg>'},57986:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M5 1H4v14h1V1Zm7 0h-1v14h1V1Z" clip-rule="evenodd"></path></svg>'},56097:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="m2 1 12 7-12 7V1Zm9.983 6.999L3 2.723v10.553l8.983-5.277Z" clip-rule="evenodd"></path></svg>'},80272:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Zm1 0A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM7.5 4.5a.5.5 0 0 1 1 0v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3Z" clip-rule="evenodd"></path></svg>'},10148:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M14 2.22V1l-1 .7-8.128 5.69L4 8l.872.61L13 14.3l1 .7V2.22ZM5.744 8 13 13.08V2.92L5.744 8ZM2 1h1v14H2V1Z" clip-rule="evenodd"></path></svg>'},88866:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 7.5A.5.5 0 0 1 7 7h1.5v4.5h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1V8H7a.5.5 0 0 1-.5-.5Z"></path><path fill="#000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z" clip-rule="evenodd"></path></svg>'},26826:e=>{"use strict";e.exports=a},48891:e=>{"use strict";e.exports=n},54020:e=>{"use strict";e.exports=l},34796:e=>{"use strict";e.exports=o},30726:e=>{"use strict";e.exports=i}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var r={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(r),s.d(r,{__set_webpack_public_path__:()=>ye,default:()=>ve});var e,t,n,a=s(48891),i=s(26826),l=s(30726);!function(e){e.Classic="CLASSIC",e.Modern="MODERN"}(e||(e={})),function(e){e.Slowest="SLOWEST",e.Slow="SLOW",e.Medium="MEDIUM",e.Fast="FAST",e.Fastest="FASTEST"}(t||(t={})),function(e){e.current="CURRENT",e.cumulatively="CUMULATIVE"}(n||(n={}));const o=["year","month","day"],c=["hour","minute"],u=4,d="d/M/y",m="h:mm:ss a";var p;!function(e){e[e.year=31536e3]="year",e[e.month=2592e3]="month",e[e.day=86400]="day",e[e.hour=3600]="hour",e[e.minute=60]="minute",e[e.second=1]="second"}(p||(p={}));const h={slowest:5e3,slow:4e3,medium:3e3,fast:2e3,fastest:1e3};function g(e){let n;const a=1e3*Math.ceil(e/1e3);return Object.keys(h).some((e=>h[e]===a&&(n=e.toUpperCase(),!0))),n||(a>h.slowest?n=t.Slowest:a<h.fastest&&(n=t.Fastest)),n}function f(e,t=!0){let n=null;if(e)if("number"==typeof e.value)n=e.value;else{const i=new Date;i.setMinutes(0),i.setSeconds(0),i.setMilliseconds(0),e.value===a.dateUtils.VirtualDateType.Today?(i.setHours(0),n=i.getTime()+v(e),n=t?n:n+1e3*p.day):e.value===a.dateUtils.VirtualDateType.Now&&(n=i.getTime()+v(e),n=t?n:n+1e3*p.hour)}return n}function v(e){return e.offset?e.offset.val*p[e.offset.unit]*1e3:0}function y(e,t){let n=null;const l=Object.keys(e).map((t=>e[t]))[0];if(l.type===i.ArcGISDataSourceTypes.WebMap){const e=[];l.getAllChildDataSources().forEach((t=>{(t.type===a.DataSourceTypes.MapService&&t.supportTime()||t.type===a.DataSourceTypes.FeatureLayer&&null===a.dataSourceUtils.findMapServiceDataSource(t)&&t.supportTime())&&e.push(t)}));const i=(null==t?void 0:t.map((e=>e.dataSourceId)))||[];n={},e.forEach((e=>{(0===i.length||i.includes(e.id))&&(n[e.id]=e)}))}return n}function w(e,t){const n=[...o,...c],a=[],i=t-e;return n.forEach((e=>{i>=1e3*p[e]&&a.push(e)})),a}var b;function x(e,t,n){let a=!1;const i=n.day.value;if(1!==i){const n=e.getMonth()+1;2===i?(2===n&&28===t||30===t)&&(a=!0):7===i?(2===n&&21===t||28===t)&&(a=!0):10===i?20===t&&(a=!0):15===i&&15===t&&(a=!0)}return a}function S(e,t,n,a,i){if(e){const l=a[a.length-1];if(!l)return!0;const o=O(l.label),s=O(t);o/(1===a.length?1:2)+s/2>(n-parseFloat(l.position)/100)*i&&(e=!1)}return e}function M(e,t,n=!1){let a="";return e.day?a=t.getFullYear():e.month?(a=t.getFullYear(),n&&(a+="/"+(t.getMonth()+1))):a=t.getFullYear(),a}function j(e,t){const n=t.getMonth()+1;let a="";return!e.day||e.hour&&1===e.hour.value?1!==n&&(a=n):a=n+"/"+t.getDate(),a}function k(e,t){let n=e.getDate();const a=e.getMonth()+1;return t.hour&&(n=a+"/"+n),n}function T(e,t){return e.getHours()+":00"}function D(e,t){let n=e.getMinutes();return t.second&&(n=e.getHours()+":"+n),n}!function(e){e[e.year=1]="year",e[e.month=2]="month",e[e.day=3]="day",e[e.hour=4]="hour",e[e.minute=5]="minute",e[e.second=6]="second"}(b||(b={}));const R={};function O(e,t,n){const a=window;if(void 0===a.measureCanvasCTX){const e=document.createElement("canvas");a.measureCanvasCTX=e.getContext("2d")}if(R[e])return R[e];const i=a.measureCanvasCTX.measureText(e).width+10;return R[e]=i,i}function E(e,t,n){switch(e){case"year":t.setFullYear(t.getFullYear()+n);break;case"month":t.setMonth(t.getMonth()+n);break;case"day":t.setDate(t.getDate()+n);break;case"hour":t.setHours(t.getHours()+n);break;case"minute":t.setMinutes(t.getMinutes()+n)}return t.getTime()}function C(e,t,n,a,i,l=!0){let o;const s=l?1:-1;if(i)o=n+1/i*(t-e)*s,o=Math.round(o),Math.abs(o-e)<1e4?o=e:Math.abs(o-t)<1e4&&(o=t);else{const e=new Date(n),t=a.val*s;switch(null==a?void 0:a.unit){case"year":e.setFullYear(e.getFullYear()+t);break;case"month":e.setMonth(e.getMonth()+t);break;case"day":e.setDate(e.getDate()+t);break;case"hour":e.setHours(e.getHours()+t);break;case"minute":e.setMinutes(e.getMinutes()+t)}o=e.getTime()}return o}function N(e,t,n,a){let i=!1;const l=1/a/2*100;return n>=e-l&&n<=t+l&&(i=!0),i}function L(e,t,n){return(null==n?void 0:n.zoomLevel)===t&&0!==t?n.maxWidth/e:Math.pow(2,t)}function I(e,t,n){return e*L(e,t,n)}var P=s(54020);const V={_widgetLabel:"Timeline",overallTimeExtent:"Overall time extent",filteringApplied:"Timeline filtering applied",noTlFromHonoredMapWarning:"Oops! Seems like something went wrong with this map and we cannot get any valid time settings.",invalidTimeSpanWarning:"Please check the widget configurations to make sure the time span is valid."};var A=s(80272),W=s.n(A);const z=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:W()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var $=s(59455),F=s.n($);const U=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:F()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var B=s(88866),Z=s.n(B);const H=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:Z()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var Y=s(56097),_=s.n(Y);const G=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:_()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var X=s(57986),J=s.n(X);const q=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:J()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var Q=s(10148),K=s.n(Q);const ee=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:K()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var te=s(83909),ne=s.n(te);const ae=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:ne()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var ie=s(74695),le=s.n(ie);const oe=e=>{const t=window.SVG,{className:n}=e,i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}(e,["className"]),l=(0,a.classNames)("jimu-icon jimu-icon-component",n);return t?a.React.createElement(t,Object.assign({className:l,src:le()},i)):a.React.createElement("svg",Object.assign({className:l},i))};var se=s(34796);const re=s(43980),ce=Object.assign({},V,a.defaultMessages,l.defaultMessages),ue=function(n){const{width:i,height:o,applied:s,timeStyle:r=e.Classic,foregroundColor:c,backgroundColor:g,sliderColor:f,theme:v,startTime:y,endTime:w,accuracy:R="year",stepLength:O,dividedCount:V,cumulatively:A=!1,enablePlayControl:W=!1,speed:$=t.Medium,autoPlay:F,updating:B=!1,onTimeChanged:Z,onApplyStateChanged:Y}=n,[_,X]=a.React.useState(i),[J,Q]=a.React.useState(o);a.React.useEffect((()=>{X(i-(r===e.Classic?64:80)),Q(r===e.Classic?52:80)}),[i,o,r]);const[K,te]=a.React.useState(0),[ne,ie]=a.React.useState(null),le=(0,a.useIntl)(),ue=(()=>{const e=(0,a.useIntl)();return a.React.useCallback(((t,n)=>e.formatMessage({id:t,defaultMessage:ce[t]},n)),[e])})(),de=a.React.useMemo((()=>[{value:t.Slowest,label:ue("slowest")},{value:t.Slow,label:ue("slow")},{value:t.Medium,label:ue("medium")},{value:t.Fast,label:ue("fast")},{value:t.Fastest,label:ue("fastest")}]),[]),[me,pe]=a.React.useState($);a.React.useEffect((()=>{pe($)}),[$]);const[he,ge]=a.React.useState(F||!1),fe=a.React.useRef(null),ve=a.React.useRef(null),[ye,we]=a.React.useState(null),[be,xe]=a.React.useState(0),[Se,Me]=a.React.useState(y),[je,ke]=a.React.useState(null),[Te,De]=a.React.useState(null),[Re,Oe]=a.React.useState(null),[Ee,Ce]=a.React.useState(null),[Ne,Le]=a.React.useState(null),[Ie,Pe]=a.React.useState(null),Ve=a.React.useRef(null),Ae=a.React.useRef(null),We=a.React.useRef(null),ze=a.React.useRef(null),$e=a.React.useRef(null),[Fe,Ue]=a.React.useState(!1),Be=a.React.useRef(!1),Ze=e=>{window.jimuConfig.isInBuilder&&Be.current&&e.key.includes("Arrow")&&e.preventDefault()};a.React.useEffect((()=>{function e(e){Be.current=!0}function t(e){Be.current=!1}function n(e){e.edges={left:!0},He(e)}function a(e){e.edges={right:!0},He(e)}return fe.current.addEventListener("mousedown",Qe),Ae.current.addEventListener("keyup",n,!0),We.current.addEventListener("keyup",a,!0),document.body.addEventListener("keydown",Ze,{passive:!1}),Ae.current.addEventListener("focus",e,!0),Ae.current.addEventListener("blur",t,!0),We.current.addEventListener("focus",e,!0),We.current.addEventListener("blur",t,!0),()=>{var i;null===(i=fe.current)||void 0===i||i.removeEventListener("mousedown",Qe),null==Ne||Ne.unset(),null==Ie||Ie.unset(),Ae.current&&We.current&&(Ae.current.removeEventListener("keyup",n,!0),We.current.removeEventListener("keyup",a,!0),document.body.removeEventListener("keydown",Ze),Ae.current.removeEventListener("focus",e,!0),Ae.current.removeEventListener("blur",t,!0),We.current.removeEventListener("focus",e,!0),We.current.removeEventListener("blur",t,!0))}}),[]);const He=a.hooks.useEventCallback((e=>{if(e.key.includes("Arrow")){e.preventDefault();const t="ArrowLeft"===e.key||"ArrowTop"===e.key?-1:1,n=Ge();let a=n.startValue,i=n.endValue;if(O)e.edges.left?a=E(O.unit,new Date(n.startValue),t*O.val):i=E(O.unit,new Date(n.endValue),t*O.val);else{const l=(n.extent[1]-n.extent[0])/V;e.edges.left?a+=t*l:i+=t*l}e.edges.left?(a=Math.max(n.extent[0],a),a=Math.min(a,i)):(i=Math.min(n.extent[1],i),i=Math.max(a,i)),it(a,i)}}));a.React.useEffect((()=>{Ve.current&&(Le(function(e,t,n,a,i){let l,o,s,r,c,u,d,m;return e(t).resizable({edges:{left:".resize-left",right:".resize-right"}}).on("resizestart",(e=>{e.stopPropagation(),s=n(),c=s.startValue,u=s.endValue,d=s.startValue,m=s.endValue,r=u-c,l=0;const a=t.getBoundingClientRect();o=a.width,t.style.minWidth="0px"})).on("resizemove",(e=>{const{extent:t}=s;e.stopPropagation();const n=e.deltaRect;l+=n.width;const i=r&&o+l,h=function(e,t,n,a,i,l){let o=e,s=t;const r=(n[1]-n[0])/a*i;return l.edges.left?o=e-r:s=t+r,{newStart:o,newEnd:s}}(d,m,t,i,l,e),g=function(e,t,n,a,i,l,o){const{width:s,extent:r,stepLength:c,accuracy:u,dividedCount:d}=n;let m=a,h=i;if(c){const n=Math.round((r[1]-r[0])*t/s/p[u]/1e3);e.edges.left?m=E(u,new Date(o),-n):h=E(u,new Date(l),n)}else{const n=(r[1]-r[0])/d,a=Math.round((r[1]-r[0])*t/s/n);e.edges.left?m=o-a*n:h=l+a*n}return e.edges.left?(m=Math.min(m,h),m=Math.max(r[0],m),m=Math.min(r[1],m)):(h=Math.max(m,h),h=Math.min(r[1],h),h=Math.max(r[0],h)),{newStart:m,newEnd:h}}(e,i||l,s,c,u,h.newStart,h.newEnd);a(g.newStart,g.newEnd),d=g.newStart,m=g.newEnd})).on("resizeend",(e=>{e.stopPropagation(),i(d,m)}))}(P.interact,Ve.current,Ge,it,lt)),Pe(function(e,t,n,a,i){let l,o,s,r,c,u,d=null;return e(t).draggable({inertia:!1,modifiers:[],autoScroll:!0,onstart:e=>{e.stopPropagation(),e.preventDefault(),o=n(),s=o.startValue,r=o.endValue,c=o.startValue,u=o.endValue,l=0},onmove:e=>{e.stopPropagation(),e.preventDefault();const{extent:t,width:n}=o;l=e.clientX-e.clientX0;const i=function(e,t,n){return(e[1]-e[0])/t*n}(t,n,l),m=function(e,t,n,a,i,l,o){const{extent:s,stepLength:r,dividedCount:c}=t;let u=n,d=a;if(r){const t=Math.round(e/p[r.unit]/r.val/1e3);0!==t&&(u=E(r.unit,new Date(u),t*r.val),d=E(r.unit,new Date(d),t*r.val))}else{const t=(s[1]-s[0])/c,n=Math.round(e/t);0!==n&&(u+=n*t,d+=n*t)}return e>0?d>s[1]?r?u>=s[1]?(u=i,d=l):o=s[1]:(u=s[1]-(a-n),d=s[1]):o=null:(o=null,u<s[0]&&(u=s[0],d=u+(a-n))),{newStart:u,newEnd:d,newTempEnd:o}}(i,o,s,r,c,u,d);a(m.newStart,m.newEnd),c=m.newStart,u=m.newEnd,d=m.newTempEnd},onend:e=>{e.stopPropagation(),i(c,u,d)}})}(P.interact,Ve.current,Xe,it,lt)))}),[r]),a.React.useEffect((()=>{ve.current={left:0,x:0},Ue(!1),xe(0),te(0),ge(F),De(null),Me(y);const e=A?y:C(y,w,y,O,V);ke(e),B?setTimeout((()=>{Z(y,e)}),2e3):Z(y,e)}),[F,y,A,w,R,O,V]),a.React.useEffect((()=>{const e=function(e){const{width:t,startTime:n,endTime:a,accuracy:i="hour"}=e,l=b[i],o={year:null,month:null,day:null,hour:null,minute:null,second:null},s=function(e,t,n){const a=n/u;let i,l;const o=(t.getTime()-e.getTime())/31536e6,s=a/o;return s>=1?(i=1,l=s*u):(s>=.2?i=5:s>=.1&&s<.2?i=10:s>=.02&&s<.1?i=50:s<.02&&(i=100),l=n/(o/i)),{value:i,tickWidth:l/n}}(new Date(n),new Date(a),t);if(o.year={value:s.value,tickWidth:s.tickWidth},b.month<=l&&1===s.value){const e=function(e,t){const n=e*t/u;let a=null;return n>=12?a=1:n>=4?a=3:n>=2&&(a=6),{value:a,tickWidth:e/(12/a)}}(s.tickWidth,t);if(null!==e.value&&(o.month={value:e.value,tickWidth:e.tickWidth},b.day<=l&&1===e.value)){const e=function(e,t,n){let a;const i=(t-e)/864e5,l=n/u/i;return a=l>=1?1:l>=.5&&l<1?2:l>=1/7&&l<.5?7:l>=.1&&l<1/7?10:l>=1/15&&l<.1?15:null,{value:a,tickWidth:1/(i/a)}}(n,a,t);if(null!==e.value&&(o.day={value:e.value,tickWidth:e.tickWidth},b.hour<=l&&1===e.value)){const n=function(e,t){const n=e*t/u;let a;return n>=24?a=1:n>=12&&n<24?a=2:n>=4&&n<12?a=6:n>=3&&n<4?a=8:n>=2&&n<3?a=12:n<2&&(a=null),{value:a,tickWidth:e/(24/a)}}(e.tickWidth,t);if(null!==n.value&&(o.hour={value:n.value,tickWidth:n.tickWidth},b.minute<=l&&1===n.value)){const e=function(e,t){const n=e*t/u;let a;return n>=60?a=1:n>=12&&n<60?a=5:n>=6&&n<12?a=10:n>=4&&n<6?a=15:n>=2&&n<4?a=30:n<2&&(a=null),{value:a,tickWidth:e/(60/a)}}(n.tickWidth,t);null!==e.value&&(o.minute={value:e.value,tickWidth:e.tickWidth})}}}}return o}({width:I(_,K,ne),startTime:y,endTime:w,accuracy:R});we(e)}),[_,y,w,R,K,ne]),a.React.useEffect((()=>{const e=function(e,t,n,a){if(e<0)return;const i=(n-t)/p[a]/1e3,l=Math.max(e,8*u*i);let o=0;for(;I(e,o)<l||30===o;)o++;return{maxWidth:l,zoomLevel:o}}(_,y,w,R);ie(e)}),[_,y,w,R]);const Ye=a.ReactRedux.useSelector((e=>{var t,n;return he?(null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.appMode)===a.AppMode.Design||(null===(n=e.appRuntimeInfo)||void 0===n?void 0:n.isPrintPreview):null})),_e=a.React.useRef(Ye),Ge=a.hooks.useEventCallback((()=>({startValue:Re||Se,endValue:Ee||Te||je,extent:[y,w],width:I(_,K,ne),accuracy:R,stepLength:O,dividedCount:V}))),Xe=a.hooks.useEventCallback((()=>({startValue:Re||Se,endValue:Ee||je,extent:[y,w],width:I(_,K,ne),accuracy:R,stepLength:O,dividedCount:V}))),Je=a.hooks.useEventCallback((e=>{a.lodash.debounce((()=>{if(Re)return;const t=L(_,K,ne),n=e.clientX-ve.current.x;let a=ve.current.left-n/(t*_)*100;a=Math.min(a/100,(t-1)/t),a=a<0?0:a,xe(100*a)}),50)()})),qe=a.hooks.useEventCallback((()=>{fe.current.style.cursor="grab",fe.current.style.removeProperty("user-select"),document.removeEventListener("mousemove",Je),document.removeEventListener("mouseup",qe)})),Qe=a.hooks.useEventCallback((e=>{0!==K&&"BUTTON"!==e.target.tagName&&(fe.current.style.cursor="grabbing",fe.current.style.userSelect="none",ve.current={left:be,x:e.clientX},document.addEventListener("mousemove",Je),document.addEventListener("mouseup",qe))})),Ke=a.React.useCallback(((e=Se,t=je,n)=>{if(e<=y)return void xe(0);const a=w-y,i=a/L(_,K,ne),l=y+be/100*a,o=l+i;let s;if(n&&(t<=l||e>=o))s=Math.min(e,w-i);else{if(n||!(e>=o||t<=l))return;s=Math.max(y,t-i)}xe((s-y)/(w-y)*100)}),[K,y,w,be,Se,je,_,ne]),et=a.React.useCallback((e=>{const t=K+(e?1:-1);if(0===t)return void xe(0);const n=w-y,a=L(_,K,ne),i=L(_,t,ne),l=n/a,o=y+be/100*n,s=o+l;let r=be;const c=Te||je;if(c===w&&c===s)r=(i-1)/i*100;else if(Se<o&&c>o&&c<s)r=(c-(c-o)/(i/a)-y)/(w-y)*100;else if(Se>=s||je<=o&&Se!==je||Se<o&&je>s)r=(Se+(je-Se)/2-l*a/i/2-y)/(w-y)*100;else{const t=(Se-y)/(w-y)*100-be;r=e?be+t/2:be-t}r=Math.max(0,r),r=Math.min(r,(i-1)/i*100),xe(r)}),[K,y,w,be,_,Se,je,Te,ne]),tt=a.React.useCallback((e=>{const t=C(y,w,je,O,V,e);let n=y,a=w;if(A){const n=e&&je>=w,i=!e&&y===je;if(e&&t>w)(Te||V)&&e?(a=y,De(null)):(a=t,De(w));else{if(i)return;a=n?y:t,De(null)}}else{const i=C(y,w,Se,O,V,e),l=!e&&y===Se,o=!e&&i<y,s=e&&i>=w;if(i<w&&t>w)(Te||V)&&e?(n=y,a=y+je-Se,De(null)):(n=i,a=t,De(w));else{if(l)return;o||s?(n=y,a=y+je-Se):(n=i,a=t),De(null)}Me(n)}ke(a),0!==K&&Ke(n,a,e),Z(n,a)}),[V,w,je,y,Se,O,A,Z,Ke]),nt=a.React.useCallback((()=>{ze.current&&(clearInterval(ze.current),ze.current=null)}),[]),at=a.React.useCallback((()=>{nt(),ze.current=setInterval((()=>{B||tt(!0)}),h[me.toLowerCase()])}),[me,nt,B,tt]);a.React.useEffect((()=>{if(!ze.current){if(Ye||!he||B)return void nt();at()}return()=>{nt()}}),[he,B,Ye,nt,at]),a.React.useEffect((()=>{if(_e.current!==Ye&&null!==Ye){if(_e.current=Ye,Ye)return void nt();he&&!B&&at()}}),[Ye,at,nt,he,B]);const it=(e,t)=>{Oe(e),Ce(t)},lt=(e,t,n)=>{it(null,null),Me(e),ke(t),De(n),Z(e,n||t)},ot=a.React.useMemo((()=>{if(!ye)return null;const e=I(_,K,ne),t=_/e*100+be,n=e/_,i=function(e,t,n,a,i,l,o,s){const r=new Date(n),c=new Date(a),u=r.getFullYear(),d=c.getFullYear(),m=[],p=[],h={value:u,label:M(e,r,!0),position:0};N(i,l,0,o)&&(m.push(h),p.push(h));let g=function(e,t){let n=new Date(e).getFullYear(),a=null;for(;!a;)n%100%t==0&&(a=n),n++;return a}(n,e.year.value);g===u&&(g=u+e.year.value);for(let s=g;s<=d;s+=e.year.value){const r=new Date(s,0,1,0,0,0),c=(r.getTime()-n)/(a-n);if(!N(i,l,100*c,o))continue;let d=!1;const h=e.year.tickWidth*t/52;h>=1?d=!0:h<.03?d=s%50==0&&s-u>=49:h<.15?d=s%(10*e.year.value)==0&&s-u>=9:h<.3?d=s%(5*e.year.value)==0&&s-u>=4:h<1&&(d=s%2==0);const g=M(e,r);d=S(d,g,c,p,t);const f={value:s,label:d?g:null,position:100*c+"%"};d&&p.push(f),m.push(f)}return m}(ye,e,y,w,be,t,n),l=function(e,t,n,a,i,l,o){if(!e.month||e.month.tickWidth>1&&new Date(a).getMonth()===new Date(n).getMonth())return[];const s=new Date(n),r=new Date(a),c=s.getMonth()+1,u=r.getMonth()+1,d=s.getFullYear(),m=12-c+12*(r.getFullYear()-d-1)+u+1,p=[],h=[];let g=function(e,t){const n=new Date(e);n.setDate(1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0),e>n.getTime()&&n.setMonth(n.getMonth()+1);let a=n.getMonth(),i=null;for(;!i;)a%t!=0&&11!==a||(i=a),a++;return i+1}(n,e.month.value);g===c&&(g=c+e.month.value);let f=!1;for(let s=g-c;s<=m-1;s+=e.month.value){const r=new Date(d,c+s-1,1,0,0,0),u=(r.getTime()-n)/(a-n);if(!N(i,l,100*u,o))continue;if(!f||0===r.getMonth()){const t=new Date(r.getFullYear(),r.getMonth()-1,1,0,0,0),i=t.getTime()-n,l=Math.max(i,0)/(a-n);if(h.unshift({value:t.getFullYear(),label:M(e,t,!f),position:100*l+"%"}),f=!0,0===r.getMonth())continue}let m=!1;const g=e.month.tickWidth*t;e.year.tickWidth*t>58&&(m=g>=28||(g>=15?r.getMonth()%3==0:(r.getMonth()+1)%12==7));const v=j(e,r);m=S(m,v,u,h,t);const y={value:r.getMonth()+1,label:m?v:null,position:100*u+"%"};m&&h.push(y),p.push(y)}return p}(ye,e,y,w,be,t,n),o=function(e,t,n,a,i,l,o){if(!e.day)return[];const s=new Date(n),r=s.getDate(),c=s.getFullYear(),u=s.getMonth(),d=Math.ceil((a-n)/864e5)+1,m=[],p=[],h={value:r,label:j(e,s),position:0};p.push(h);let g=function(e,t){let n=new Date(e).getDate(),a=null;for(;!a;)(n-1)%t==0&&1!==n&&(a=n),n++;return a}(n,e.day.value);g===r&&(g=r+e.day.value);for(let s=g-r;s<=d-1;s+=e.day.value){const d=new Date(c,u,r+s,0,0,0),h=d.getDate();if(1===h)continue;const g=(d.getTime()-n)/(a-n);if(!N(i,l,100*g,o))continue;let f=!1;const v=e.day.tickWidth*t;e.month.tickWidth*t>100&&(v>=30?f=!0:v>=15?f=h%2==0:v>=8?f=(h-1)%7==0:v>=3&&(f=11===h||21===h));const y=k(d,e);f=S(f,y,g,p,t);const w={value:h,label:f?y:"",position:100*g+"%"};if(f&&p.push(w),m.push(w),x(d,h,e)){const e=new Date(d.getTime());e.setDate(1),e.setMonth(e.getMonth()+1),s+=(e.getTime()-d.getTime())/864e5-1}}return m}(ye,e,y,w,be,t,n),s=function(e,t,n,a,i,l,o){if(!e.hour)return[];const s=new Date(n),r=s.getHours(),c=s.getFullYear(),u=s.getMonth(),d=s.getDate(),m=Math.ceil((a-n)/36e5)+1,p=[],h=[],g={value:r,label:k(s,e),position:0};h.push(g);let f=function(e,t){let n=new Date(e).getHours(),a=null;for(;!a;)n%t==0&&(a=n),n++;return a}(n,e.hour.value);f===r&&(f=r+e.hour.value);for(let s=f-r;s<=m-1;s+=e.hour.value){const m=new Date(c,u,d,r+s,0,0),g=m.getHours();if(0===g)continue;if(m.getTime()>a)break;const f=(m.getTime()-n)/(a-n);if(!N(i,l,100*f,o))continue;let v=!1;const y=e.day.tickWidth*t,w=e.hour.tickWidth*t;y<60?v=!1:y<100?v=g%12==0:w>=40?v=!0:w>=20?v=g%2==0:w>=6.67?v=g%6==0:w>=5?v=g%8==0:w>=3.3&&(v=g%12==0);const b=T(m);v=S(v,b,f,h,t);const x={value:g,label:v?b:"",position:100*f+"%"};v&&h.push(x),p.push(x)}return p}(ye,e,y,w,be,t,n),r=function(e,t,n,a,i,l,o){if(!e.minute)return[];const s=new Date(n),r=s.getMinutes(),c=s.getFullYear(),u=s.getMonth(),d=s.getDate(),m=s.getHours(),p=(a-n)/6e4+1,h=[],g=[],f={value:r,label:T(s),position:0};g.push(f);let v=function(e,t){let n=new Date(e).getMinutes(),a=null;for(;!a;)n%t==0&&(a=n),n++;return a}(n,e.minute.value);v===r&&(v=r+e.minute.value);for(let s=v-r;s<=p-1;s+=e.minute.value){const p=new Date(c,u,d,m,r+s,0),f=p.getMinutes();if(0===p.getMinutes())continue;const v=(p.getTime()-n)/(a-n);if(!N(i,l,100*v,o))continue;let y=!1;const w=e.hour.tickWidth*t,b=e.minute.tickWidth*t;w<60?y=!1:w<=160?y=f%30==0:w<300?y=f%15==0:b>28?y=!0:b>20?y=f%2==0:w>15?y=f%5==0:w>10&&(y=f%10==0);const x=D(p,e);y=S(y,x,v,g,t);const M={value:p.getMinutes(),label:y?x:"",position:100*v+"%"};y&&g.push(M),h.push(M)}return h}(ye,e,y,w,be,t,n),c=function(e,t,n,a,i,l){const o={labels:{},ticks:{}},s=[];t.length>1&&s.push("year"),n.length>1&&s.push("month"),a.length>1&&s.push("day"),i.length>1&&s.push("hour"),l.length>1&&s.push("minute");const r=s[s.length-1],c=Object.keys(e).filter((t=>e[t]));if(1===s.length)c.forEach((e=>{o.ticks[e]="medium",o.labels[e]="short"}));else{if(2===s.length)o.ticks[r]="medium",c.forEach((e=>{e!==r&&(o.ticks[e]="long")}));else{const e=s[s.length-2];o.ticks[r]="short",o.ticks[e]="medium",c.forEach((t=>{t!==r&&t!==e&&(o.ticks[t]="long")}))}o.labels=o.ticks}return o}(ye,i,l,o,s,r),u=["year","month","day","hour","minute"];return(0,a.jsx)("div",{className:"timeline-ticks"},[i,l,o,s,r].map(((e,t)=>e.map(((e,n)=>{const i=e.position,l=u[t];return(0,a.jsx)("div",{key:`item-${t}-${n}`,className:"timeline-tick-container","data-unit":l,style:{left:i}},e.label&&(0,a.jsx)("div",{className:`timeline-tick_label ${c.labels[l]}-label ${"year"===l&&0===n&&0===be?"timeline-first_label":""}`},e.label),(0,a.jsx)("div",{key:n,className:(0,a.classNames)(`timeline-tick ${c.ticks[l]}-tick`,e.label?"has-label":"no-label")}))})))))}),[ye,K,be]),st=a.React.useMemo((()=>function(e,t,n,i,l){const o=(0,a.getAppStore)().getState().appContext.isRTL;return n=(0,se.getThemeColorValue)(n||e.colors.black,e),i=i||e.colors.white,l=(0,se.getThemeColorValue)(l||e.colors.palette.primary[600]),a.css`
    color: red;
    height: fit-content;
    color: ${n};

    // Common style
    .timeline-header, .timeline-footer {
      height: 16px;
      display: flex;
      flex-direction: ${o?"row-reverse":"row"};
      align-items: center;
      justify-content: space-between;
      .zoom-container {
        min-width: 36px;
        display: flex;
        flex-direction: ${o?"row-reverse":"row"};
      }
      .range-label {
        display: flex;
        align-items: center;
        font-size: ${a.polished.rem(12)};
        font-weight: 500;
        line-height: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .range-label-badge {
          width: 8px;
          height: 8px;
          min-width: 8px;
          border-radius: 4px;
          margin-right: 0.25rem;
        }
      }
    }
    .timeline-content {
      overflow-x: hidden;

      .timeline-whole {
        .timeline-ticks {
          position: relative;
          .timeline-tick-container {
            position: absolute;
            user-select: none;
            .timeline-tick {
              width: 1px;
              background: ${a.polished.rgba(n,.5)};
            }
            .timeline-tick_label {
              font-size: ${a.polished.rem(11)};
              font-weight: 400;
              line-height: 15px;
              width: max-content;
              transform: translate(${o?"50%":"-50%"});
              color: foregroundColor;
              &.long-label {
                font-weight: 600;
              }
              &.medium-label {
                font-weight: 500;
              }
              &.short-label {
                font-weight: 400;
              }
              &.timeline-first_label {
                /* transform: ${"translate(-7px)"}; */
                transform: translate(0);
              }
            }
          }
        }
      }

      .timeline-range-container {
        height: 8px;
        /* width: ${"calc(100% - 14px)"}; */
        width: 100%;
        border-radius: 4px;
        background-color: ${a.polished.rgba(n,.2)};
        .resize-handlers {
          height: 100%;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          background-color: ${l};

          .resize-handler {
            width: 8px;
            height: 8px;
            padding: 0;
            overflow: visible;
            border-radius: 8px;
            background: ${l};
            border: 2px solid ${l};
          }

          &:hover {
            .resize-handler {
              background: ${i};
            }
          }
        }
      }
      .timeline-arrow {
        position: absolute;
        &.left-arrow{
          transform: scaleX(-1);
        }
      }
    }
    .jimu-btn {
        color: ${n};
        border-radius: 16px;
        &:hover:not(:disabled) {
          color: ${n};
          background-color: ${a.polished.rgba(n,.2)};
        }
        &.disabled {
          color: ${a.polished.rgba(n,.2)};
          &:hover {
            color: ${a.polished.rgba(n,.2)};
          }
        }
        .jimu-icon {
          margin: 0
        }

        .icon-btn-sizer {
          min-width: 0;
          min-height: 0;
        }
    }

    .jimu-dropdown-button {
      &:not(:disabled):not(.disabled):active,
      &[aria-expanded="true"]{
        border-color: transparent !important;
        color: unset !important;
      }
    }

    // Clasic style
    &.timeline-classic {
      padding: 1rem 1.5rem;
      .timeline-header .range-label {
        .range-label-badge {
          background-color: ${l};
        }
        .range-label-context {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .timeline-content {
        margin: 1rem 0.5rem;
        .timeline-whole {
          .timeline-ticks {
            padding-top: 0.75rem;
            .timeline-tick-container {
              .timeline-tick {
                &.long-tick {
                  height: 12px;
                  &.no-label {
                    margin-top: 19px;
                  }
                  &.has-label {
                    margin-top: 0;
                  }
                }
                &.medium-tick {
                  height: 8px;
                  &.no-label {
                    margin-top: 23px;
                  }
                  &.has-label {
                    margin-top: 8px;
                  }
                }
                &.short-tick {
                  height: 4px;
                  &.no-label {
                    margin-top: 27px;
                  }
                  &.has-label {
                    margin-top: 12px;
                  }
                }
              }
              .timeline-tick_label {
                margin-bottom: 4px;
              }
            }
          }
          .timeline-arrow {
            top: 78px;
            &.left-arrow{
              left: ${o?"unset":"20px"};
              right: ${o?"20px":"unset"};
            }
            &.right-arrow{
              left: ${o?"20px":"unset"};
              right: ${o?"unset":"20px"};
            }
          }
        }
        .timeline-range-container .resize-handlers .resize-handler {
          min-width: 8px;
          &:focus {
            background: ${i};
            outline-offset: 0;
          }
        }
      }
      .timeline-footer {
        flex-direction: ${o?"row-reverse":"row"};
        .play-container {
          min-width: 65px;
        }
      }
    }

    // Modern style
    &.timeline-modern {
      padding: 1rem 0.5rem;
      height: 156px;

      .timeline-header{
        padding: 0 2rem;
        .range-label {
          margin: 0 0.25rem;
          .range-label-badge {
            background-color: ${a.polished.rgba(l,.7)};
          }
        }
      }

      .timeline-content {
        display: flex;
        margin-top: 0.5rem;
          .timeline-left, .timeline-right {
            display: flex;
            height: 80px;
            .play-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              .jimu-btn {
                margin: 0 0.5rem;
                &.next-btn {
                  margin-bottom: 0.5rem;
                }
                &.play-btn {
                  margin-top: 0.5rem;
                }
              }
            }
          }
        .timeline-middle {
          height: 115px;
          overflow-x: hidden;
          flex-grow: 1;
          .timeline-content-inside {
            border: 1px solid ${a.polished.rgba(n,.5)};
            border-radius: 8px;
            .timeline-whole {
              display: flex;
              flex-direction: column;
              .timeline-ticks {
                .timeline-tick-container {
                  display: flex;
                  flex-direction: column-reverse;
                  .timeline-tick {
                    &.long-tick {
                      height: 32px;
                    }
                    &.medium-tick {
                      height: 16px;
                      margin-top: 16px;
                    }
                    &.short-tick {
                      height: 8px;
                      margin-top: 24px;
                    }
                  }
                  .timeline-tick_label {
                    margin-top: 0.5rem;
                  }
                }
              }
              .timeline-range-container {
                z-index: 1;
                width: 100%;
                background: transparent;
                .resize-handlers {
                  background-color: ${a.polished.rgba(l,.7)};
                  .resize-handler {
                    min-width: 4px;
                    width: 4px;
                    height: calc(100% - 10px);
                    margin: 5px 0;
                    background: transparent;
                    border: none;
                    &.show-bg { /** When handlers.w = 0 */
                      background-color: ${a.polished.rgba(l,.7)};
                      height: 100%;
                      margin: 0;
                      &:hover {
                        background-color: ${a.polished.rgba(l,.9)};
                      }
                    }
                  }
                  &:hover {
                    .resize-handler {
                      background: ${a.polished.rgba(l,.7)};
                    }
                  }
                }
              }
            }
          }
          .timeline-arrow {
            z-index: 2;
            top: 68px;
            &.left-arrow{
              left: ${o?"unset":"50px"};
              right: ${o?"50px":"unset"};
            }
            &.right-arrow{
              left: ${o?"50px":"unset"};
              right: ${o?"unset":"50px"};
            }
          }
        }
      }
    }
  `}(v,0,c,g,f)),[v,7,c,g,f]),rt=a.React.useMemo((()=>{const e=(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",disabled:0===K,onClick:()=>{et(!1),te(Math.max(0,K-1))}},(0,a.jsx)(U,null)),t=(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",disabled:K===(null==ne?void 0:ne.zoomLevel),onClick:()=>{et(!0),te(Math.min(null==ne?void 0:ne.zoomLevel,K+1))}},(0,a.jsx)(z,null));return(0,a.jsx)("div",{className:"zoom-container"},0===K?e:(0,a.jsx)(l.Tooltip,{title:ue("zoomOut"),placement:"bottom"},e),K===(null==ne?void 0:ne.zoomLevel)?t:(0,a.jsx)(l.Tooltip,{title:ue("zoomIn"),placement:"bottom"},t))}),[K,ue,ne,et]),ct=a.React.useMemo((()=>W?(0,a.jsx)(l.Tooltip,{title:ue(he?"pause":"play"),placement:"bottom"},(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",className:"play-btn",onClick:()=>{ge(!he)}},he?(0,a.jsx)(q,null):(0,a.jsx)(G,null))):null),[W,he,ue]),ut=a.React.useMemo((()=>(0,a.jsx)(l.Tooltip,{title:ue("previous"),placement:"bottom"},(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",onClick:e=>{tt(!1)}},(0,a.jsx)(ee,null)))),[ue,tt]),dt=a.React.useMemo((()=>(0,a.jsx)(l.Tooltip,{title:ue("next"),placement:"bottom"},(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",className:"next-btn",onClick:e=>{tt(!0)}},(0,a.jsx)(ae,null)))),[ue,tt]),mt=a.React.useMemo((()=>{const e=a.dateUtils.formatDateLocally(y,le,d,m),t=a.dateUtils.formatDateLocally(w,le,d,m);return(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",onClick:e=>{Ue(!Fe)},ref:e=>{$e.current=e}},(0,a.jsx)(H,null)),(0,a.jsx)(l.Popper,{open:Fe,keepMount:!0,showArrow:!0,reference:$e,toggle:e=>{Ue(!e),a.lodash.defer((()=>{$e.current.focus()}))}},(0,a.jsx)("div",{className:"p-3"},(0,a.jsx)("h6",{className:"mb-2"},ue("overallTimeExtent")),(0,a.jsx)("div",{className:"mb-3"},`${e} - ${t}`),(0,a.jsx)(l.Label,{check:!0,className:"d-flex align-items-center"},(0,a.jsx)("h6",{className:"flex-grow-1 mb-0 mr-1"},ue("filteringApplied")),(0,a.jsx)(l.Switch,{checked:s,onChange:(e,t)=>{Y(t)}})))))}),[ue,y,w,le,Fe,s,Y]),pt=a.React.useMemo((()=>(0,a.jsx)(l.Dropdown,{activeIcon:!0},(0,a.jsx)(l.Tooltip,{title:ue("speed"),placement:"bottom"},(0,a.jsx)(l.DropdownButton,{icon:!0,type:"tertiary",arrow:!1,"aria-label":ue("speed"),"a11y-description":de.filter((e=>e.value===me))[0].label},(0,a.jsx)(oe,null))),(0,a.jsx)(l.DropdownMenu,null,de.map((e=>(0,a.jsx)(l.DropdownItem,{key:e.value,value:e.value,active:e.value===me,onClick:e=>{pe(e.target.value)}},e.label)))))),[de,me,ue]),ht=a.hooks.useEventCallback((e=>{const t=w-y,n=L(_,K,ne);let a=(y+be/100*t+t/n*(e?1:-1)-y)/(w-y)*100;a=Math.max(0,a),a=Math.min(a,(n-1)/n*100),xe(a)})),gt=L(_,K,ne),ft=(0,a.getAppStore)().getState().appContext.isRTL,vt=Re||Se,yt=Ee||Te||je,{startPositionForStep:wt,widthForStep:bt}=((t,n)=>{let a=(t-y)/(w-y),i=(n-y)/(w-y)-a;return t===w?(a=r===e.Classic?"calc(100% - 16px)":"calc(100% - 8px)",i=0):a=100*a+"%",{startPositionForStep:a,widthForStep:i}})(vt,yt),xt=a.dateUtils.formatDateLocally(vt,le,d,m),St=a.dateUtils.formatDateLocally(yt,le,d,m),Mt=0!==be,jt=100-be-1/gt*100>1e-11;return(0,a.jsx)("div",{css:st,dir:"ltr",className:(0,a.classNames)("timeline w-100",{"timeline-classic":r===e.Classic,"timeline-modern":r===e.Modern})},r===e.Classic?(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)("div",{className:"timeline-header"},(0,a.jsx)("div",{className:"range-label",dir:ft?"rtl":"ltr"},(0,a.jsx)("div",{className:"range-label-badge"}),(0,a.jsx)("div",{className:"range-label-context"},xt+" - "+St)),rt),(0,a.jsx)("div",{className:"timeline-content"},(0,a.jsx)("div",{className:"timeline-content-inside"},(0,a.jsx)("div",{className:"timeline-whole",ref:e=>fe.current=e,style:{width:100*gt+"%",height:J+"px",marginLeft:-be*gt+"%"}},ot,Mt&&(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow left-arrow",onClick:e=>ht(!1)},(0,a.jsx)(l.Icon,{width:4,height:16,icon:re})),jt&&(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow right-arrow",onClick:e=>ht(!0)},(0,a.jsx)(l.Icon,{width:4,height:16,icon:re}))),(0,a.jsx)("div",{className:"timeline-range-container",style:{width:100*gt+"%",marginLeft:-be*gt+"%"}},(0,a.jsx)("div",{className:"resize-handlers",ref:e=>Ve.current=e,style:{marginLeft:wt,width:100*bt+"%"}},(0,a.jsx)("button",{className:"resize-handler resize-left",ref:e=>{Ae.current=e},title:xt}),(0,a.jsx)("button",{className:"resize-handler resize-right",ref:e=>{We.current=e},title:St}))))),(0,a.jsx)("div",{className:"timeline-footer"},mt,(0,a.jsx)("div",{className:"play-container"},ut,ct,dt),W?pt:(0,a.jsx)("div",null))):(0,a.jsx)(a.React.Fragment,null,(0,a.jsx)("div",{className:"timeline-header"},mt,(0,a.jsx)("div",{className:"range-label",dir:ft?"rtl":"ltr"},(0,a.jsx)("div",{className:"range-label-badge"}),xt+" - "+St),rt),(0,a.jsx)("div",{className:"timeline-content"},(0,a.jsx)("div",{className:"timeline-left"},(0,a.jsx)("div",{className:"play-container"},dt,ut)),(0,a.jsx)("div",{className:"timeline-middle"},Mt&&(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow left-arrow",style:{left:!W&&ft?"25px":"null"},onClick:e=>ht(!1)},(0,a.jsx)(l.Icon,{width:4,height:16,icon:re})),(0,a.jsx)("div",{className:"timeline-content-inside"},(0,a.jsx)("div",{className:"timeline-whole",ref:e=>fe.current=e,style:{width:100*gt+"%",height:J+"px",marginLeft:-be*gt+"%"}},(0,a.jsx)("div",{style:{height:J-32+"px"}}),ot,(0,a.jsx)("div",{className:"timeline-range-container",style:{height:J+"px",marginTop:-(J-32)+"px"}},(0,a.jsx)("div",{className:"resize-handlers",ref:e=>Ve.current=e,style:{marginLeft:wt,width:100*bt+"%"}},(0,a.jsx)("button",{className:"resize-handler resize-left "+(vt===yt?"show-bg":""),ref:e=>{Ae.current=e},title:xt}),(0,a.jsx)("button",{className:"resize-handler resize-right "+(vt===yt?"show-bg":""),ref:e=>{We.current=e},title:St}))))),jt&&(0,a.jsx)(l.Button,{icon:!0,type:"tertiary",size:"sm",className:"timeline-arrow right-arrow",style:{right:W||ft?"null":"25px"},onClick:e=>ht(!0)},(0,a.jsx)(l.Icon,{width:4,height:16,icon:re}))),(0,a.jsx)("div",{className:"timeline-right"},(0,a.jsx)("div",{className:"play-container"},W&&pt,ct)))))};var de=function(e,t,n,a){return new(n||(n=Promise))((function(i,l){function o(e){try{r(a.next(e))}catch(e){l(e)}}function s(e){try{r(a.throw(e))}catch(e){l(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}r((a=a.apply(e,t||[])).next())}))};class me extends a.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.11.0",description:"",upgrader:e=>de(this,void 0,void 0,(function*(){let t=e;if(!t.honorTimeSettings)if(t.timeSettings){const{stepLength:e,dividedCount:n}=t.timeSettings;t=e?t.setIn(["timeSettings","stepLength","val"],Math.round(e.val)):t.setIn(["timeSettings","dividedCount"],Math.round(n))}else t=t.set("honorTimeSettings",!0);return t}))},{version:"1.12.0",description:"",upgrader:e=>de(this,void 0,void 0,(function*(){let n=e;return n=n.without("speed"),!n.honorTimeSettings&&n.timeSettings&&(n=n.setIn(["timeSettings","speed"],t.Medium)),n}))}]}}const pe=new me,he=s(7586),ge="156px",fe=e=>{var o,s,r,c;const{useDataSources:u,theme:d,id:m,config:h,intl:v,autoWidth:b,autoHeight:x}=e,{enablePlayControl:S,autoPlay:M,timeSettings:j,honorTimeSettings:k,dataSourceType:T,timeStyle:D,foregroundColor:R,backgroundColor:O,sliderColor:E}=h,{speed:C}=j||{},[N,L]=a.React.useState(null),[I,P]=a.React.useState(!0),[A,W]=a.React.useState(C),[z,$]=a.React.useState(null),[F,U]=a.React.useState(null),[B,Z]=a.React.useState(null),[H,Y]=a.React.useState(!0),[_,G]=a.React.useState(!0),[X,J]=a.React.useState(null),[q,Q]=a.React.useState(null),K=a.React.useRef(null),ee=a.React.useMemo((()=>i.MapViewManager.getInstance()),[]),te=a.React.useMemo((()=>a.DataSourceManager.getInstance()),[]);a.React.useEffect((()=>{var e;return J(null===(e=K.current)||void 0===e?void 0:e.clientWidth),(0,i.loadArcGISJSAPIModules)(["esri/core/reactiveUtils"]).then((e=>{U(e[0])})),()=>{ne(null,null,!0)}}),[]),a.React.useEffect((()=>{if(Z(null),T!==a.DataSourceTypes.FeatureLayer){let e=null;if((null==u?void 0:u.length)>0){e=[];const t=[];u.forEach((e=>{t.push(te.createDataSourceByUseDataSource((0,a.Immutable)(e)).then((e=>e.isDataSourceSet&&!e.areChildDataSourcesCreated()?e.childDataSourcesReady().then((()=>e)):e)))})),Promise.all(t).then((t=>{const n={};t.forEach((e=>{n[e.id]=e})),t.forEach((t=>{t.getAllChildDataSources().forEach((t=>{var n,i;t.type===a.DataSourceTypes.FeatureLayer&&t.supportTime()&&e.push({dataSourceId:t.id,mainDataSourceId:null===(n=t.getMainDataSource())||void 0===n?void 0:n.id,dataViewId:t.dataViewId,rootDataSourceId:null===(i=t.getRootDataSource())||void 0===i?void 0:i.id})}))})),Z(n),$((0,a.Immutable)(e))})).catch((e=>{}))}}else $(u)}),[u,te,T,$,Z]),a.React.useEffect((()=>{if(B&&F)if(k){const e=function(e){var t,a,l;let o=null;const s=e[Object.keys(e).filter((t=>e[t].type===i.ArcGISDataSourceTypes.WebMap))[0]],r=null===(l=null===(a=null===(t=null==s?void 0:s.getItemData())||void 0===t?void 0:t.widgets)||void 0===a?void 0:a.timeSlider)||void 0===l?void 0:l.properties;if(r){const{startTime:e,endTime:t,timeStopInterval:a,numberOfStops:i,thumbMovingRate:l,thumbCount:s}=r;if(o={speed:g(l),layerList:null,startTime:{value:e},endTime:{value:t},timeDisplayStrategy:2===s?n.current:n.cumulatively},a){const e=function(e){switch(e){case"esriTimeUnitsMonths":return"month";case"esriTimeUnitsDays":return"day";case"esriTimeUnitsHours":return"hour";case"esriTimeUnitsMinutes":return"minute";default:return"year"}}(a.units);o.accuracy=e,o.stepLength={val:a.interval,unit:e}}else if(i){o.dividedCount=i;const n=w(e,t);o.accuracy=n[0];const a=(t-e)/i;n.some((e=>a>=1e3*p[e]&&(o.accuracy=e,!0)))}}return o}(B);W(null==e?void 0:e.speed),Q(e)}else{const e=function(e,n,i=!1){const{startTime:l,endTime:o,layerList:s,accuracy:r,stepLength:c}=e||{};let u;const{startTime:d,endTime:m}=function(e,t,n,a){let i=f(n),l=f(a,!1),o=null,s=null;if(!i||!l){const n=y(e,t);n&&(e=n),Object.keys(e).forEach((t=>{var n,a;const r=e[t].getTimeInfo();if(!i){const e=null===(n=null==r?void 0:r.timeExtent)||void 0===n?void 0:n[0];o=o?Math.min(o,e):e}if(!l){const e=null===(a=null==r?void 0:r.timeExtent)||void 0===a?void 0:a[1];s=s?Math.max(s,e):e}})),i=i||o,l=l||s}return{startTime:i,endTime:l}}(n,s,l,o),h=w(d,m),g=h[0],v=function(e,t,n){const a=(t-e)/1e3/p[n];return{val:a>10?10:a>5?5:1,unit:n}}(d,m,g);if(e){u=(0,a.Immutable)(e);const t=!h.includes(r);t&&(u=u.set("accuracy",g)),c&&(t||p[c.unit]>p[g]||1e3*p[c.unit]*c.val>m-d)&&(u=u.set("stepLength",v))}else u=(0,a.Immutable)(function(e,n){return{layerList:null,startTime:{value:a.dateUtils.VirtualDateType.Min},endTime:{value:a.dateUtils.VirtualDateType.Max},timeDisplayStrategy:"CURRENT",dividedCount:null,accuracy:e,stepLength:n,speed:t.Medium}}(g,v));return i?(u=u.set("startTime",{value:d}).set("endTime",{value:m}),u):(0,a.Immutable)({config:u,exactStartTime:d,exactEndTime:m,minAccuracy:g,accuracyList:h})}(j,B,!0);W(C),Q(e)}}),[B,F,k,C,j]);const ne=a.hooks.useEventCallback(((e,t,n=!1)=>{var i;if(!B)return;const l={time:n?null:[e,t]};if(n||(()=>{let e=[],t=null;const n=ee.getAllJimuMapViewIds();T===a.AllDataSourceTypes.WebMap?(t=B[Object.keys(B)[0]],e=t.getAllChildDataSources().map((e=>e.id))):e=Object.keys(B);const i=[];e.forEach((e=>{const l=t||B[e].getRootDataSource();if((null==l?void 0:l.type)===a.AllDataSourceTypes.WebMap){const t=n.filter((e=>ee.getJimuMapViewById(e).dataSourceId===l.id));t.forEach((t=>{const n=((e,t)=>{let n=null;return Object.keys(e.jimuLayerViews).forEach((a=>{e.jimuLayerViews[a].layerDataSourceId===t&&(n=e.jimuLayerViews[a])})),n})(ee.getJimuMapViewById(t),e);(null==n?void 0:n.view)&&i.push(F.whenOnce((()=>!n.view.updating)))}))}})),Promise.all(i).then((e=>{Y(!1)}))})(),T===a.AllDataSourceTypes.WebMap){const e=y(B,null===(i=h.timeSettings)||void 0===i?void 0:i.layerList);Object.keys(e).forEach((t=>{ae(e[t],l,m)}))}else Object.keys(B).forEach((e=>{ae(B[e],l,m)}))}));a.React.useEffect((()=>{N&&ne(N[0],N[1],!I)}),[N,I,ne]);const ae=(e,t,n)=>{var i,l,o,s;e.type===a.DataSourceTypes.MapService?(null===(i=e.supportTime)||void 0===i?void 0:i.call(e))&&(t=ie(e,t),null===(l=e.changeTimeExtent)||void 0===l||l.call(e,t.time,n)):e.type===a.DataSourceTypes.FeatureLayer&&(null===(o=e.supportTime)||void 0===o?void 0:o.call(e))&&(t=ie(e,t),null===(s=e.updateQueryParams)||void 0===s||s.call(e,t,n))},ie=(e,t)=>{const n=e.getTimeInfo().exportOptions||{},{TimeOffset:a=0,timeOffsetUnits:i}=n;if((null==t?void 0:t.time)&&0!==a){let e=t.time[0],n=t.time[1];const l=new Date(e),o=new Date(n);switch(i){case"esriTimeUnitsCenturies":case"esriTimeUnitsDecades":case"esriTimeUnitsYears":const t="esriTimeUnitsCenturies"===i?100:"esriTimeUnitsDecades"===i?10:1;e=l.setFullYear(l.getFullYear()-a*t),n=o.setFullYear(o.getFullYear()-a*t);break;case"esriTimeUnitsMonths":e=l.setMonth(l.getMonth()-a),n=o.setMonth(o.getMonth()-a);break;case"esriTimeUnitsWeeks":case"esriTimeUnitsDays":const s="esriTimeUnitsWeeks"===i?7:1;e=l.setDate(l.getDate()-a*s),n=o.setDate(o.getDate()-a*s);break;case"esriTimeUnitsHours":e=l.setHours(l.getHours()-a),n=o.setHours(o.getHours()-a);break;case"esriTimeUnitsMinutes":e=l.setMinutes(l.getMinutes()-a),n=o.setMinutes(o.getMinutes()-a);break;case"esriTimeUnitsSeconds":e=l.setSeconds(l.getSeconds()-a),n=o.setSeconds(o.getSeconds()-a);break;case"esriTimeUnitsMilliseconds":e=l.setMilliseconds(l.getMilliseconds()-a),n=o.setMilliseconds(o.getMilliseconds()-a)}t.time=[e,n]}return t},le=t=>{var n,i,l,o;if(b){const{layoutId:s,layoutItemId:r}=e,c=(0,a.getAppStore)().getState(),u=null===(o=null===(l=null===(i=null===(n=null==c?void 0:c.appConfig)||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[s])||void 0===l?void 0:l.content)||void 0===o?void 0:o[r];if(!u)return;const d=u.bbox.width;if(d.includes("px"))t=d;else{const e=`div.layout[data-layoutid=${s}]`,n=document.querySelector(e),{clientWidth:a=480}=n||{};t=a*parseInt(d.split("%")[0])/100}}J(t)};if(u&&0!==u.length){if(B&&F&&null===q||(null===(o=null==q?void 0:q.startTime)||void 0===o?void 0:o.value)>(null===(s=null==q?void 0:q.endTime)||void 0===s?void 0:s.value)){const e=v.formatMessage({id:"noTlFromHonoredMapWarning",defaultMessage:V.noTlFromHonoredMapWarning}),t=v.formatMessage({id:"invalidTimeSpanWarning",defaultMessage:V.invalidTimeSpanWarning});return(0,a.jsx)("div",{className:"placeholder-container w-100 h-100 position-relative"},(0,a.jsx)(l.WidgetPlaceholder,{icon:he,widgetId:m,css:a.css`height: ${x?ge:"100%"};`,message:v.formatMessage({id:"_widgetLabel",defaultMessage:V._widgetLabel})}),(0,a.jsx)(l.Alert,{buttonType:"tertiary",form:"tooltip",size:"small",type:"warning",withIcon:!0,className:"position-absolute",style:{bottom:10,right:10,backgroundColor:"var(--warning-100)",border:"1px solid var(--warning-300)"},text:null===q?e:t}))}return(0,a.jsx)("div",{className:"timeline-widget",css:a.css`
          width: ${b?X+"px":"unset"};
          height: ${x&&!B?ge:"unset"};
          background: ${O||d.colors.white};
        `,ref:e=>K.current=e},(0,a.jsx)(a.ReactResizeDetector,{handleWidth:!0,onResize:le}),(null==z?void 0:z.length)>0&&(0,a.jsx)(a.MultipleDataSourceComponent,{useDataSources:z},((e,t)=>{if(T===a.DataSourceTypes.FeatureLayer){const n=Object.keys(t).filter((e=>{var n;return[a.DataSourceStatus.Created,a.DataSourceStatus.CreateError].includes(null===(n=t[e])||void 0===n?void 0:n.instanceStatus)})).length===u.length;!B&&n&&Object.keys(e).length===u.length&&setTimeout((()=>{Z(e)}),0)}const n=Object.keys(t).filter((e=>t[e]&&t[e].status!==a.DataSourceStatus.Loading)).length===Object.keys(t).length;return setTimeout((()=>{G(!n)}),0),null})),null===B?(0,a.jsx)("div",{className:"jimu-secondary-loading",css:a.css`position: 'absolute';left: '50%';top: '50%';`}):q&&X&&(0,a.jsx)(ue,{theme:d,width:X,updating:_||H,startTime:null===(r=q.startTime)||void 0===r?void 0:r.value,endTime:null===(c=q.endTime)||void 0===c?void 0:c.value,accuracy:q.accuracy,stepLength:q.stepLength,dividedCount:q.dividedCount,cumulatively:q.timeDisplayStrategy===n.cumulatively,timeStyle:D,foregroundColor:R,backgroundColor:O,sliderColor:E,enablePlayControl:S,speed:A,autoPlay:M,applied:I,onTimeChanged:(e,t)=>{L([e,t])},onApplyStateChanged:e=>{P(e)}}))}return(0,a.jsx)(l.WidgetPlaceholder,{icon:he,widgetId:m,css:a.css`height: ${x?ge:"100%"};`,message:v.formatMessage({id:"_widgetLabel",defaultMessage:V._widgetLabel})})};fe.versionManager=pe;const ve=fe;function ye(e){s.p=e}})(),r})())}}}));