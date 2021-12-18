var H=Object.defineProperty;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var T=(s,e,a)=>e in s?H(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,x=(s,e)=>{for(var a in e||(e={}))R.call(e,a)&&T(s,a,e[a]);if(D)for(var a of D(e))N.call(e,a)&&T(s,a,e[a]);return s};var P=(s,e,a)=>(T(s,typeof e!="symbol"?e+"":e,a),a);import{s as k,p as O,j,a as E,F,u as _,l as q,c as Y,b as y,S as z}from"./vendor.8e71a745.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))$(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&$(f)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function $(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};J();var A;(function(s){s.en="en",s.ru="ru"})(A||(A={}));var L=A;class M{makePersistent(){k(this,()=>{localStorage.setItem(this.constructor.name,JSON.stringify(this))});const e=localStorage.getItem(this.constructor.name);if(e){const a=JSON.parse(e);Object.assign(this,a)}return this}}class K extends M{constructor(){super(...arguments);P(this,"language",L.en)}}var U=O(new K).makePersistent();const W="Frontend Template",X="User count: {{count}}";var B={title:W,userCount:X};const G="\u0422\u0435\u043C\u043F\u043B\u0435\u0439\u0442 \u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434\u0430",Q="\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439: {{count}}";var V={title:G,userCount:Q};const Z={en:B,ru:x(x({},B),V)},t=j,v=E,ee=F,te=({children:s})=>{const e=_(U);return t(q.exports.LocalizationProvider,{locale:e.language,defaultLocale:L.en,translations:Z,disableCache:!0,children:s})},se=Y,ae=se("container","mx-auto","pb-10","max-w-4xl","py-4"),ne=({children:s})=>t("div",{className:ae,children:s}),re=({initialAmount:s,period:e,dayToStartSaving:a,percentToSave:$,crashAfter:n,logs:i=!1})=>{const f=e-40;let c=0,h=0,u=0;const g=[];let p=s*.05,d=0,m=!0,l="",r="";const S=o=>o>=.05?(u+=o,g.push({counter:40,depositedAmount:o,isActive:!0}),d=0,!0):(i&&(r=r.concat("<p>Can not reinvest. Amount is too small. The strategy may be more effective with bigger initial investment</p>")),C(),c>=.05&&(u+=c,g.push({counter:40,depositedAmount:c,isActive:!0}),c=0),!1),C=o=>{o?o<=d&&(c=+o,d-=o):(c+=d,d=0)};S(s);for(let o=0;o<e;o++){if(i&&(r=r.concat("<p>----------------------------------------------------------</p>"),r=r.concat(`<p>Day ${o+1} START: activeDeposit: ${u}, dailyHarvest: ${p}, savingsBalance: ${h}, walletBalance: ${c}, amountToHarvest: ${d}, isPreviousReinvestSuccessed: ${m}</p>`)),n>0&&o>=n){u=0,d=0,p=0,r=r.concat("<p>----------------------------------------------------------</p>"),r=r.concat(`<p>We crashed on day ${o+1}. Your savings: ${h}, walletBalance: ${c}, TOTAL: ${h+c}</p>`);break}if(g.forEach((w,I)=>{const b=g[I];b.counter-=1,b.counter===0&&(b.isActive=!1,u>b.depositedAmount&&(u-=b.depositedAmount),i&&(r=r.concat(`<p>-- Just removed ${b.depositedAmount} from active deposit.</p>`)))}),o>=a&&o<=f){const w=p*($/100);h+=w,p-=w}if(d+=p,o>f){i&&(r=r.concat("<p>Today no reinvesting. Time to withdraw!</p>")),C(),o===e-1&&(c+=h,h=0),i&&(r=r.concat(`<p>Day ${o+1} END: activeDeposit: ${u}, dailyHarvest: ${p}, savingsBalance: ${h}, walletBalance: ${c}, amountToHarvest: ${d}, isPreviousReinvestSuccessed: ${m}</p>`));continue}if(m)m=S(p);else{const w=u;S(c),u>w&&(m=!0)}p=u*.05,i&&(r=r.concat(`<p>Day ${o+1} END: activeDeposit: ${u}, dailyHarvest: ${p}, savingsBalance: ${h}, walletBalance: ${c}, amountToHarvest: ${d}, isPreviousReinvestSuccessed: ${m}</p>`),r=r.concat("<p>----------------------------------------------------------</p>"))}return n===0&&(l+=`You started with ${g[0].depositedAmount}. Your wallet balance after ${e} days is ${c}. You ended reinvest your daily harvest after ${e-40} days.`),{result:l,logsData:r}};function ie(){const[s,e]=y(0),[a,$]=y(0),[n,i]=y(0),[f,c]=y(0),[h,u]=y(0),[g,p]=y(!1),[d,m]=y({});return v(ee,{children:[t("h1",{class:"text-white",children:"BNB Harvest Calculator Tool"}),v("div",{class:"desc text-white",children:["This tool will calculate your total harvest amount if you make interest compound. There is an option to set a certain amount that you will put aside from every harvest before you reinvest. Also you can imitate crash (test your strategy in case of contacrt balance going to 0 after X days). ",t("br",{})," This is a BETA version. If you have a question - DM"," ",t("a",{href:"https://t.me/rise_agggainst",class:"underline",target:"_blank",children:"@rise_agggainst"})]}),v("form",{class:"calc",onSubmit:l=>{l.preventDefault(),m(re({initialAmount:parseFloat(s),period:parseInt(a),dayToStartSaving:parseInt(n),percentToSave:parseInt(f),crashAfter:parseInt(h),logs:g}))},children:[v("div",{class:"input-wrapper",children:[t("label",{for:"initial-amount",class:"text-white",children:"Initial Amount"}),t("input",{type:"number",required:!0,id:"initial-amount",min:"0.05",step:"any",onChange:l=>e(l.target.value)})]}),v("div",{class:"input-wrapper",children:[t("label",{for:"preiod",class:"text-white",children:"Period"}),t("input",{type:"number",id:"period",required:!0,onChange:l=>$(l.target.value)})]}),v("div",{class:"input-wrapper",children:[t("label",{for:"day-to-start-saving",class:"text-white",children:"Day to start saiving"}),t("input",{type:"number",id:"day-to-start-saving",onChange:l=>i(l.target.value)})]}),v("div",{class:"input-wrapper",children:[t("label",{for:"percent-to-save",class:"text-white",children:"Percent to save"}),t("input",{type:"number",id:"percent-to-save",onChange:l=>c(l.target.value)})]}),v("div",{class:"input-wrapper",children:[t("label",{for:"crash-after",class:"text-white",children:"Test crash after"}),t("input",{type:"number",id:"crash-after",onChange:l=>u(l.target.value)})]}),v("div",{class:"input-wrapper check-wrapper",children:[t("label",{for:"logs",class:"text-white",children:"Show logs"}),t("input",{type:"checkbox",id:"logs",onChange:l=>p(l.target.checked)})]}),t("button",{type:"submit",id:"calculate",class:"text-white",children:"Calculate!"}),v("div",{id:"result",class:"mt-5 text-white",children:[t("span",{class:"underline",children:"Result:"}),t("br",{}),d.result]}),v("div",{id:"logs-data",class:"text-white",children:[t("span",{class:"underline",children:"Logs:"}),t("br",{}),t("div",{dangerouslySetInnerHTML:{__html:d.logsData}})]})]})]})}const oe=()=>t(ne,{children:t(te,{children:t(ie,{})})});z(t(oe,{}),document.getElementById("root"));
