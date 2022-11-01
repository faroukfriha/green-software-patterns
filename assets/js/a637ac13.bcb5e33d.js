"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[6187],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const i={version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",tags:["kubernetes","role:cloud-engineer","size:medium"]},a="Time-shift Kubernetes cron jobs",s={unversionedId:"catalog/cloud/time-shift-kubernetes-cron-jobs",id:"catalog/cloud/time-shift-kubernetes-cron-jobs",title:"Time-shift Kubernetes cron jobs",description:"Description",source:"@site/docs/catalog/cloud/time-shift-kubernetes-cron-jobs.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/time-shift-kubernetes-cron-jobs",permalink:"/catalog/cloud/time-shift-kubernetes-cron-jobs",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/time-shift-kubernetes-cron-jobs.md",tags:[{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",tags:["kubernetes","role:cloud-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Shed lower priority traffic",permalink:"/catalog/cloud/shed-lower-priority-traffic"},next:{title:"Use cloud native network security tools and controls",permalink:"/catalog/cloud/use-cloud-native-network-security-tools-and-controls"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"time-shift-kubernetes-cron-jobs"},"Time-shift Kubernetes cron jobs"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The carbon emissions of a software system depends on the power consumed by that software, but also on the Carbon intensity of the electricity it is powered on. For this reason, running energy-efficient software on carbon intensive electricity grid, might be inefficient to reduce its global carbon emissions. "),(0,o.kt)("p",null,"Carbon aware time scheduling, is about scheduling workloads to execute, when electricity carbon intensity is low."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Kubernetes recurrent Jobs (such as ML Training Jobs, Batchs, etc.) are implemented ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"},"as CronJobs"),".  They can be time shifted by using ",(0,o.kt)("strong",{parentName:"p"},"carbon intensity Forecast data")," (24h usually, depdening on the Electricity data provider),  to calculate the best time in the future to execute the job."),(0,o.kt)("p",null,"To capture the impact of time shifting, the following image shows variation of electricity carbon intensity during a day, from one the electricity data providers, ",(0,o.kt)("a",{parentName:"p",href:"https://app.electricitymaps.com/map"},"ElectricityMap"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"zez",src:n(9137).Z,width:"2426",height:"877"})),(0,o.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,o.kt)("p",null,"Regarding the SCI equation, Time shifting will impact:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"I"),": The goal is to reduce SCI by reducing carbon intensity.")),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,"In order to estimate the best time to schedule the CronJob:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The execution duration of the Job is assumed to be known."),(0,o.kt)("li",{parentName:"ul"},"The Job should ideally have a flexible deadline which allows a wider time window for scheduling.")),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This pattern does not require an application code change and can be handled at the platform operating level."),(0,o.kt)("li",{parentName:"ul"},"When cron jobs have scheduling constraints or dependencies, it can be difficult to change their timing.")))}d.isMDXComponent=!0},9137:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/time-shift-37ee67e815001ab5bdabf6e3de729124.png"}}]);