(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{87314:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(66953)}])},92522:function(e,a,s){"use strict";s.d(a,{q:function(){return x}});var t=s(52322),o=s(46731),i=s(13369),l=s(6391),n=s.n(l),d=s(74881),r=s(41491),c=s(34581);function g(){var e,a,s,l,n,d,g;let{openDialog:x}=(0,c.Rh)(),f=(0,i.On)({config:{swr:{revalidateOnFocus:!1}}}),u=(0,i.rV)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,r.n)(),v=(0,i.cQ)(),j=null===(e=f.data)||void 0===e?void 0:e.version,m=(null==j?void 0:j.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(j):"https://github.com/SiaFoundation/hostd/tree/".concat(j);return(0,t.jsxs)(o.HfT,{name:"hostd",peerCount:null===(a=v.data)||void 0===a?void 0:a.length,connectPeer:()=>x("connectPeer"),isSynced:h.isSynced,percent:h.percent,nodeBlockHeight:h.nodeBlockHeight,estimatedBlockHeight:h.estimatedBlockHeight,firstTimeSyncing:h.firstTimeSyncing,moreThan100BlocksToSync:h.moreThan100BlocksToSync,children:[(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(o.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(o.xS1,{className:"overflow-hidden",size:"14",value:null===(s=u.data)||void 0===s?void 0:s.netAddress,maxLength:50,label:"network address"})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(o.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(o.xS1,{className:"overflow-hidden",size:"14",value:null===(l=f.data)||void 0===l?void 0:l.publicKey,maxLength:50,label:"public key"})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(o.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(o.xS1,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(n=f.data)||void 0===n?void 0:n.walletAddress,type:"address"})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(o.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(o.xvT,{size:"14",children:null===(d=f.data)||void 0===d?void 0:d.network})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(o.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,t.jsx)(o.rUS,{size:"14",href:m,target:"_blank",children:null===(g=f.data)||void 0===g?void 0:g.version})})]})]})}function x(e){let a=(0,i.Os)(),{isSynced:s}=(0,r.n)();return(0,t.jsx)(o.tU3,{appName:"hostd",connectivityRoute:d.h,profile:(0,t.jsx)(g,{}),isSynced:s,walletBalance:a.data?new(n())(a.data.spendable).plus(a.data.unconfirmed):void 0,...e})}},39031:function(e,a,s){"use strict";s.d(a,{N:function(){return l}});var t=s(52322),o=s(46731),i=s(74881);function l(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.KJW,{title:"Dashboard",route:i._.home,children:(0,t.jsx)(o.K2o,{})}),(0,t.jsx)(o.KJW,{title:"Volumes",route:i._.volumes.index,children:(0,t.jsx)(o.zvn,{})}),(0,t.jsx)(o.KJW,{title:"Contracts",route:i._.contracts.index,children:(0,t.jsx)(o.VBo,{})}),(0,t.jsx)(o.KJW,{title:"Configuration",route:i._.config.index,children:(0,t.jsx)(o.wWN,{})})]})}},41491:function(e,a,s){"use strict";s.d(a,{n:function(){return i}});var t=s(82337),o=s(13369);function i(){var e,a,s,i;let{isUnlocked:l}=(0,t.Hv)(),n=(0,o.d$)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.synced)?6e4:1e4}}}),d=(0,o.Os)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.scanHeight)>=c-5?6e4:1e4}}}),r=(0,o.nH)(),c=n.data?null===(e=n.data)||void 0===e?void 0:e.chainIndex.height:0,g=l&&c&&r?Number((100*Math.min(c/r,1)).toFixed(1)):0;return{isSynced:null===(a=n.data)||void 0===a?void 0:a.synced,isWalletSynced:(null===(s=n.data)||void 0===s?void 0:s.synced)&&(null===(i=d.data)||void 0===i?void 0:i.scanHeight)>=c-5,nodeBlockHeight:c,estimatedBlockHeight:r,percent:g,moreThan100BlocksToSync:!!c&&!!r&&r-c>100,firstTimeSyncing:!!c&&!!r&&r-c>5e4}}},66953:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return L}});var t=s(52322),o=s(46731),i=s(48028),l=s(19190);function n(){let{revenue:e}=(0,i.B)();return(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(o.X6q,{children:"Revenue"}),(0,t.jsxs)(o.Vy9,{bleed:!0,children:[(0,t.jsx)(o.A06,{label:"earned revenue",color:e.config.data.earned.color,sc:e.stats.earned,defaultMode:"total",isLoading:e.isLoading}),(0,t.jsx)(o.A06,{label:"potential revenue",color:e.config.data.potential.color,sc:e.stats.potential,defaultMode:"total",isLoading:e.isLoading,showChange:!1}),(0,t.jsx)(o.A06,{label:"storage",color:e.config.data.storage.color,sc:e.stats.storage,defaultMode:"total",isLoading:e.isLoading}),(0,t.jsx)(o.A06,{label:"egress",color:e.config.data.egress.color,sc:e.stats.egress,defaultMode:"total",isLoading:e.isLoading}),(0,t.jsx)(o.A06,{label:"ingress",color:e.config.data.ingress.color,sc:e.stats.ingress,defaultMode:"total",isLoading:e.isLoading}),(0,t.jsx)(o.A06,{label:"registry read",color:e.config.data.registryRead.color,sc:e.stats.registryRead,defaultMode:"total",isLoading:e.isLoading}),(0,t.jsx)(o.A06,{label:"registry write",color:e.config.data.registryWrite.color,sc:e.stats.registryWrite,defaultMode:"total",isLoading:e.isLoading})]}),(0,t.jsx)(o.b0u,{id:"revenue",height:300,data:e.data,config:e.config,isLoading:e.isLoading,chartType:e.chartType,actionsLeft:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.xvT,{font:"mono",weight:"semibold",children:"Revenue"})})})]})}var d=s(2288);function r(){let{storage:e}=(0,i.B)();return(0,t.jsxs)("div",{className:"flex flex-col gap-3 flex-1 overflow-hidden",children:[(0,t.jsx)(o.X6q,{children:"Storage"}),(0,t.jsxs)(o.Vy9,{children:[(0,t.jsx)(o.A06,{label:"storage",color:e.config.data.contractSectors.color,value:e.stats.contractSectors,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average","total"],format:d.vW}),(0,t.jsx)(o.A06,{label:"registry",color:e.config.data.registryEntries.color,value:e.stats.registryEntries,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average","total"],format:d.vW})]}),(0,t.jsx)(o.b0u,{id:"storage",height:300,data:e.data,config:e.config,isLoading:e.isLoading,chartType:e.chartType,actionsLeft:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.xvT,{font:"mono",weight:"semibold",children:"Storage"})})})]})}function c(){let{contracts:e}=(0,i.B)();return(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(o.X6q,{children:"Contracts"}),(0,t.jsxs)(o.Vy9,{bleed:!0,children:[(0,t.jsx)(o.A06,{label:"Active contracts",color:e.config.data.active.color,value:e.stats.active,format:e=>e.toFixed(0),defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"Successful contracts",color:e.config.data.successful.color,value:e.stats.successful,format:e=>e.toFixed(0),defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"Failed contracts",color:e.config.data.failed.color,value:e.stats.failed,format:e=>e.toFixed(0),defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]})]}),(0,t.jsx)(o.b0u,{id:"contracts",actionsLeft:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.xvT,{font:"mono",weight:"semibold",children:"Contracts"})}),data:e.data,config:e.config,isLoading:e.isLoading,chartType:e.chartType,height:300})]})}function g(){let{pricing:e}=(0,i.B)();return(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,t.jsx)(o.X6q,{children:"Pricing"}),(0,t.jsxs)(o.Vy9,{bleed:!0,children:[(0,t.jsx)(o.A06,{label:"storage",color:e.config.data.storage.color,sc:e.stats.storage,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"ingress",color:e.config.data.ingress.color,sc:e.stats.ingress,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"egress",color:e.config.data.egress.color,sc:e.stats.egress,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"collateral",color:e.config.data.collateral.color,sc:e.stats.collateral,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"contract",color:e.config.data.contract.color,sc:e.stats.contract,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"sector access",color:e.config.data.sectorAccess.color,sc:e.stats.sectorAccess,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]}),(0,t.jsx)(o.A06,{label:"base RPC",color:e.config.data.baseRPC.color,sc:e.stats.baseRPC,defaultMode:"latest",isLoading:e.isLoading,enabledModes:["latest","average"]})]}),(0,t.jsx)(o.b0u,{id:"pricing",height:300,data:e.data,config:e.config,isLoading:e.isLoading,chartType:e.chartType,actionsLeft:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.xvT,{font:"mono",weight:"semibold",children:"Pricing"})})})]})}var x=s(92522),f=s(74881),u=s(39031),h=s(34581),v=s(62517);function j(){let{operations:e}=(0,i.B)();return(0,t.jsx)("div",{className:"flex gap-3",children:(0,t.jsxs)("div",{className:"flex flex-col gap-3 flex-1 overflow-hidden",children:[(0,t.jsx)(o.X6q,{children:"Operations"}),(0,t.jsxs)(o.Vy9,{children:[(0,t.jsx)(o.A06,{label:"storage reads",color:e.config.data.storageReads.color,value:e.stats.storageReads,defaultMode:"total",isLoading:e.isLoading,enabledModes:["total","average","latest"],format:d.yF}),(0,t.jsx)(o.A06,{label:"storage writes",color:e.config.data.storageWrites.color,value:e.stats.storageWrites,defaultMode:"total",isLoading:e.isLoading,enabledModes:["total","average","latest"],format:d.yF}),(0,t.jsx)(o.A06,{label:"registry reads",color:e.config.data.registryReads.color,value:e.stats.registryReads,defaultMode:"total",isLoading:e.isLoading,enabledModes:["total","average","latest"],format:d.yF}),(0,t.jsx)(o.A06,{label:"registry writes",color:e.config.data.registryWrites.color,value:e.stats.registryWrites,defaultMode:"total",isLoading:e.isLoading,enabledModes:["total","average","latest"],format:d.yF})]}),(0,t.jsx)(o.b0u,{id:"operations",height:300,data:e.data,config:e.config,isLoading:e.isLoading,chartType:e.chartType,actionsLeft:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.xvT,{font:"mono",weight:"semibold",children:"Operations"})})})]})})}function m(){let{bandwidth:e}=(0,i.B)();return(0,t.jsxs)("div",{className:"flex flex-col gap-3 flex-1 overflow-hidden",children:[(0,t.jsx)(o.X6q,{children:"Bandwidth"}),(0,t.jsxs)(o.Vy9,{children:[(0,t.jsx)(o.A06,{label:"ingress",color:e.config.data.ingress.color,value:e.stats.ingress,defaultMode:"total",isLoading:e.isLoading,format:d.vW}),(0,t.jsx)(o.A06,{label:"egress",color:e.config.data.egress.color,value:e.stats.egress,defaultMode:"total",isLoading:e.isLoading,format:d.vW})]}),(0,t.jsx)(o.b0u,{id:"bandwidth",height:300,data:e.data,config:e.config,isLoading:e.isLoading,chartType:e.chartType,actionsLeft:(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.xvT,{font:"mono",weight:"semibold",children:"Bandwidth"})})})]})}function b(){let{openDialog:e}=(0,h.Rh)(),{timeRange:a,dataTimeSpan:s,setDataTimeSpan:d,dataInterval:b}=(0,i.B)();return(0,t.jsx)(x.q,{title:"Overview",routes:f._,sidenav:(0,t.jsx)(u.N,{}),openSettings:()=>e("settings"),nav:(0,t.jsx)("div",{className:"flex gap-2 flex-1",children:(0,t.jsxs)(o.eQh,{children:[(0,t.jsx)(o.zxk,{state:"waiting",children:(0,t.jsx)(o.xvT,{size:"12",children:(0,l.Z)(a.start,"PP")})}),(0,t.jsx)(o.zxk,{state:"waiting",children:(0,t.jsx)(o.xvT,{size:"12",color:"subtle",children:"to"})}),(0,t.jsx)(o.zxk,{state:"waiting",children:(0,t.jsx)(o.xvT,{size:"12",children:(0,l.Z)(a.end,"PP")})})]})}),size:"full",actions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.ua7,{content:"Data interval: ".concat(b),children:(0,t.jsx)("div",{children:(0,t.jsxs)(o.zxk,{variant:"ghost",state:"waiting",children:[(0,t.jsx)(o.BB5,{}),b]})})}),(0,t.jsx)(o.PhF,{value:String(s),onChange:e=>{let a=e.currentTarget.value;d(a)},icon:(0,t.jsx)(o.ua7,{content:"Data time range",children:(0,t.jsx)(o.xvT,{className:"pl-1 pr-2",children:(0,t.jsx)(o.YV2,{})})}),children:v.lv.map(e=>(0,t.jsx)(o.Wxm,{value:e.value,children:e.label},e.value))})]}),children:(0,t.jsxs)("div",{className:"p-6 flex flex-col gap-14",children:[(0,t.jsx)(n,{}),(0,t.jsx)(r,{}),(0,t.jsx)(m,{}),(0,t.jsx)(j,{}),(0,t.jsx)(c,{}),(0,t.jsx)(g,{})]})})}function L(){return(0,t.jsx)(b,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=87314)}),_N_E=e.O()}]);