(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{14573:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallets/[id]/addresses",function(){return t(72950)}])},10676:function(e,n,t){"use strict";t.d(n,{v:function(){return u}});var s=t(52322),r=t(25426),l=t(71930),i=t(25573),a=t(41345),c=t(83753);function o(){var e;let{openDialog:n}=(0,c.Rh)(),t=(0,a.cQ)(),l=(0,i.n)(),o=(0,a.gM)();return(0,s.jsx)(r.HfT,{name:"walletd",peerCount:null===(e=t.data)||void 0===e?void 0:e.length,connectPeer:()=>n("connectPeer"),isSynced:l.isSynced,syncPercent:l.syncPercent,nodeBlockHeight:l.nodeBlockHeight,estimatedBlockHeight:l.estimatedBlockHeight,firstTimeSyncing:l.firstTimeSyncing,moreThan100BlocksToSync:l.moreThan100BlocksToSync,children:o.data&&(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(r.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)(r.xvT,{size:"14",children:o.data.name})]})})}function d(){let e=(0,a.gM)({config:{swr:{revalidateOnFocus:!1}}});if(!e.data||"mainnet"===e.data.name)return null;let n="zen"===e.data.name?"Zen Testnet":e.data.name;return(0,s.jsx)(r.t6k,{testnetName:n})}function u(e){let{isSynced:n}=(0,i.n)();return(0,s.jsx)(r.tU3,{appName:"walletd",profile:(0,s.jsx)(o,{}),connectivityRoute:l.h,banner:(0,s.jsx)(d,{}),showWallet:!1,isSynced:n,...e})}},48427:function(e,n,t){"use strict";t.d(n,{_:function(){return a}});var s=t(52322),r=t(25426),l=t(20876),i=t(71930);function a(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.KJW,{title:"Dashboard",route:i._.home,children:(0,s.jsx)(l.K2o,{})})})}},25573:function(e,n,t){"use strict";t.d(n,{n:function(){return i}});var s=t(25426),r=t(2850),l=t(41345);function i(){var e;let{isUnlocked:n}=(0,r.Hv)(),t=(0,l.XC)({config:{swr:{refreshInterval:1e4}}}),s=(0,l.ek)({config:{swr:{refreshInterval:e=>a(e)?6e4:1e4}}}),i=(0,l.nH)(),c=t.data?null===(e=t.data)||void 0===e?void 0:e.height:0,o=n&&c&&i?Number((100*Math.min(c/i,1)).toFixed(1)):0;return{isSynced:a(s.data),nodeBlockHeight:c,estimatedBlockHeight:i,syncPercent:o,moreThan100BlocksToSync:!!c&&!!i&&i-c>100,firstTimeSyncing:!!c&&!!i&&i-c>5e4}}function a(e){return!!e&&function(e){if(!e||!e.length)return!1;let n=e[0],t=Date.now()-(0,s.ytg)(2);return new Date(n).getTime()>t}(e.prevTimestamps)}},72950:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var s=t(52322),r=t(25426),l=t(71930),i=t(83753),a=t(10676),c=t(48427),o=t(20876),d=t(6110),u=t(5632),x=t(81612),h=t(3440),j=t.n(h),m=t(45283);function f(){let{configurableColumns:e,toggleColumnVisibility:n,resetDefaultColumnVisibility:t,setColumnsVisible:l,setColumnsHidden:i,sortField:a,setSortField:c,sortDirection:d,setSortDirection:u,enabledColumns:h}=(0,m.Jz)(),f=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id}));return(0,s.jsxs)(r.J2e,{trigger:(0,s.jsxs)(r.zxk,{size:"small",tip:"Configure view",tipAlign:"end",tipSide:"bottom",children:[(0,s.jsx)(o.hiv,{}),"View",(0,s.jsx)(o.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,s.jsxs)(r.WVB,{children:[(0,s.jsx)(r.__J,{children:"Order by"}),(0,s.jsx)(r.kFS,{children:(0,s.jsx)(r.PhF,{value:a,onChange:e=>{c(e.currentTarget.value)},children:Object.entries(j()(x.Fo,"category")).map(e=>{let[n,t]=e;return(0,s.jsx)("optgroup",{label:n,children:t.map(e=>(0,s.jsx)(r.Wxm,{value:e.id,children:e.label},e.id))},n)})})})]}),(0,s.jsxs)(r.WVB,{children:[(0,s.jsx)(r.__J,{children:"Direction"}),(0,s.jsx)(r.kFS,{children:(0,s.jsxs)(r.PhF,{value:d,onClick:e=>{e.stopPropagation()},onChange:e=>{u(e.currentTarget.value)},children:[(0,s.jsx)(r.Wxm,{value:"desc",children:"descending"},"desc"),(0,s.jsx)(r.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,s.jsx)(r.Clw,{}),(0,s.jsxs)(r.WVB,{children:[(0,s.jsx)(r.__J,{children:"Display properties"}),(0,s.jsx)(r.kFS,{children:(0,s.jsx)(r.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),t()},children:(0,s.jsx)(o.Wet,{})})})]}),(0,s.jsx)(r.FzK,{label:"General",columns:f.map(e=>e.value),enabled:h,setColumnsVisible:l,setColumnsHidden:i}),(0,s.jsx)(r.WVB,{children:(0,s.jsx)(r.j4H,{options:f,values:h,onChange:e=>n(e)})})]})}function g(){let{openDialog:e}=(0,i.Rh)(),n=(0,u.useRouter)(),{wallet:t}=(0,d.r)(),l=n.query.id;return(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsxs)(r.zxk,{variant:"accent",onClick:()=>{if((null==t?void 0:t.type)==="seed"){e("walletAddressesGenerate",{walletId:l});return}if((null==t?void 0:t.type)==="watch"){e("walletAddressesAdd",{walletId:l});return}if((null==t?void 0:t.type)==="ledger"){e("walletLedgerAddressGenerate",{walletId:l});return}},children:[(0,s.jsx)(o.aXP,{}),"Add addresses"]}),(0,s.jsx)(f,{})]})}function v(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(r.xvT,{children:(0,s.jsx)(o.Hb6,{className:"scale-[200%]"})}),(0,s.jsx)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No addresses matching filters."})]})}function p(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(r.xvT,{children:(0,s.jsx)(o.oaN,{className:"scale-[200%]"})}),(0,s.jsx)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"The wallet has no addresses. Add some to get started."})]})}function w(){return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,s.jsx)(r.xvT,{children:(0,s.jsx)(o.Ckx,{className:"scale-[200%]"})}),(0,s.jsx)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching addresses."})]})}function y(){let{datasetCount:e}=(0,m.Jz)();return(0,s.jsx)("div",{className:"flex gap-2 justify-end w-full",children:(0,s.jsx)(r.xvT,{size:"12",font:"mono",children:1===e?"1 address":"".concat(e.toLocaleString()," addresses")})})}function T(){let e=(0,u.useRouter)(),n=e.query.id,{openDialog:t}=(0,i.Rh)(),{wallet:o}=(0,d.r)(),{dataset:x,dataState:h,columns:j,sortableColumns:f,sortDirection:T,sortField:N,toggleSort:_}=(0,m.Jz)();return(0,s.jsx)(a.v,{routes:l._,sidenav:(0,s.jsx)(c._,{}),openSettings:()=>t("settings"),title:null==o?void 0:o.name,navTitle:(0,s.jsxs)("div",{className:"flex gap-2 relative -top-px",children:[(0,s.jsx)(r.rUS,{underline:"hover",font:"mono",size:"18",weight:"bold",href:{pathname:l._.wallet.view,query:{id:n}},children:(0,r.$Gg)(null==o?void 0:o.name,20)}),(0,s.jsx)(r.xvT,{font:"mono",size:"18",weight:"normal",color:"verySubtle",children:"/"}),(0,s.jsx)(r.xvT,{font:"mono",size:"18",weight:"bold",children:"Addresses"})]}),actions:(0,s.jsx)(g,{}),stats:(0,s.jsx)(y,{}),size:"3",children:(0,s.jsx)("div",{className:"px-6 py-7 min-w-fit",children:(0,s.jsx)(r.iA_,{isLoading:"loading"===h,emptyState:"noneMatchingFilters"===h?(0,s.jsx)(v,{}):"noneYet"===h?(0,s.jsx)(p,{}):"error"===h?(0,s.jsx)(w,{}):null,pageSize:6,data:x,columns:j,sortableColumns:f,sortDirection:T,sortField:N,toggleSort:_})})})}function N(){return(0,s.jsx)(T,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=14573)}),_N_E=e.O()}]);