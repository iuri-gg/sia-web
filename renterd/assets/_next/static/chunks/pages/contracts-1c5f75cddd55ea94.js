(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{77441:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contracts",function(){return s(4197)}])},89630:function(e,n,s){"use strict";s.d(n,{J:function(){return h}});var t=s(52322),l=s(61771),i=s(9969),a=s(6391),c=s.n(a),r=s(71930),o=s(25573),d=s(86811);function x(){var e,n,s,a,c;let{openDialog:r}=(0,d.Rh)(),x=(0,i.d_)({config:{swr:{revalidateOnFocus:!1}}}),u=(0,i.X2)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,i.cQ)(),j=(0,o.n)(),f=null===(e=x.data)||void 0===e?void 0:e.version,g="?"===f?"https://github.com/SiaFoundation/renterd/commits/":(null==f?void 0:f.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/renterd/releases/".concat(f):"https://github.com/SiaFoundation/renterd/tree/".concat(f);return(0,t.jsxs)(l.HfT,{name:"renterd",peerCount:null===(n=h.data)||void 0===n?void 0:n.length,connectPeer:()=>r("connectPeer"),isSynced:j.isSynced,syncPercent:j.syncPercent,nodeBlockHeight:j.nodeBlockHeight,estimatedBlockHeight:j.estimatedBlockHeight,firstTimeSyncing:j.firstTimeSyncing,moreThan100BlocksToSync:j.moreThan100BlocksToSync,children:[(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(l.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,t.jsx)(l.XxW,{size:"14",maxLength:50,value:null===(s=u.data)||void 0===s?void 0:s.address,type:"address"})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(l.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,t.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden -mr-0.5 pr-0.5",children:(0,t.jsx)(l.xvT,{size:"14",children:null===(a=x.data)||void 0===a?void 0:a.network})})]}),(0,t.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,t.jsx)(l.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,t.jsx)(l.rUS,{size:"14",href:g,underline:"hover",target:"_blank",ellipsis:!0,children:null===(c=x.data)||void 0===c?void 0:c.version})]})]})}function u(){let e=(0,i.d_)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,t.jsx)(l.t6k,{testnetName:e.data.network}):null}function h(e){let n=(0,i.X2)(),{isSynced:s}=(0,o.n)();return(0,t.jsx)(l.tU3,{appName:"renterd",profile:(0,t.jsx)(x,{}),banner:(0,t.jsx)(u,{}),connectivityRoute:r.h,isSynced:s,walletBalanceSc:n.data&&{spendable:new(c())(n.data.spendable),confirmed:new(c())(n.data.confirmed),unconfirmed:new(c())(n.data.unconfirmed)},...e})}},91930:function(e,n,s){"use strict";s.d(n,{e:function(){return d}});var t=s(52322),l=s(61771),i=s(88242),a=s(9969),c=s(82851),r=s(71930),o=s(86811);function d(){var e,n;let s=(0,a.Z7)(),{openDialog:d}=(0,o.Rh)(),x=!(null===(e=s.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),u=(null===(n=s.data)||void 0===n?void 0:n.length)||0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.KJW,{title:"Files",route:r._.files.index,children:(0,t.jsx)(i.ROc,{})}),(0,t.jsx)(l.KJW,{title:"Configuration",route:r._.config.index,children:(0,t.jsx)(i.wWN,{})}),(0,t.jsx)(l.KJW,{title:"Contracts",route:r._.contracts.index,children:(0,t.jsx)(i.VBo,{})}),(0,t.jsx)(l.KJW,{title:"Hosts",route:r._.hosts.index,children:(0,t.jsx)(i.VHe,{})}),(0,t.jsxs)("div",{className:"relative",children:[!!u&&x&&(0,t.jsx)("div",{className:(0,c.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!u&&!x&&(0,t.jsx)(l.xvT,{size:"10",className:(0,c.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:u.toLocaleString()}),(0,t.jsx)(l.KJW,{title:"Alerts",onClick:()=>d("alerts"),children:(0,t.jsx)(i.Dkj,{})})]})]})}},4197:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return T}});var t=s(52322),l=s(91930),i=s(71930),a=s(61771),c=s(86811),r=s(26592),o=s(89630),d=s(88242);function x(){return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(d.Hb6,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No active contracts matching filters."})]})}function u(){return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(d.VBo,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"There are currently no active contracts. Configure autopilot or manually form contracts to get started."})]})}var h=s(56860),j=s(3440),f=s.n(j);function g(){let{configurableColumns:e,toggleColumnVisibility:n,resetDefaultColumnVisibility:s,setColumnsVisible:l,setColumnsHidden:i,sortField:c,setSortField:o,sortDirection:x,setSortDirection:u,enabledColumns:j}=(0,r.G)(),g=e.filter(e=>"general"===e.category).map(e=>({label:e.label,value:e.id})),m=e.filter(e=>"time"===e.category).map(e=>({label:e.label,value:e.id})),p=e.filter(e=>"financial"===e.category).map(e=>({label:e.label,value:e.id}));return(0,t.jsxs)(a.J2e,{trigger:(0,t.jsxs)(a.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,t.jsx)(d.hiv,{}),"View",(0,t.jsx)(d.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,t.jsxs)(a.WVB,{children:[(0,t.jsx)(a.__J,{children:"Order by"}),(0,t.jsx)(a.kFS,{children:(0,t.jsx)(a.PhF,{value:c,onChange:e=>{o(e.currentTarget.value)},children:Object.entries(f()(h.Fo,"category")).map(e=>{let[n,s]=e;return(0,t.jsx)("optgroup",{label:n,children:s.map(e=>(0,t.jsx)(a.Wxm,{value:e.id,children:e.label},e.id))},n)})})})]}),(0,t.jsxs)(a.WVB,{children:[(0,t.jsx)(a.__J,{children:"Direction"}),(0,t.jsx)(a.kFS,{children:(0,t.jsxs)(a.PhF,{value:x,onClick:e=>{e.stopPropagation()},onChange:e=>{u(e.currentTarget.value)},children:[(0,t.jsx)(a.Wxm,{value:"desc",children:"descending"},"desc"),(0,t.jsx)(a.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,t.jsx)(a.Clw,{}),(0,t.jsxs)(a.WVB,{children:[(0,t.jsx)(a.__J,{children:"Display properties"}),(0,t.jsx)(a.kFS,{children:(0,t.jsx)(a.zxk,{tip:"Reset all to defaults",variant:"ghost",onClick:e=>{e.stopPropagation(),s()},children:(0,t.jsx)(d.Wet,{})})})]}),(0,t.jsx)(a.FzK,{label:"General",columns:g.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:i}),(0,t.jsx)(a.WVB,{children:(0,t.jsx)(a.j4H,{options:g,values:j,onChange:e=>n(e)})}),(0,t.jsx)(a.FzK,{label:"Time",columns:m.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:i}),(0,t.jsx)(a.WVB,{children:(0,t.jsx)(a.j4H,{options:m,values:j,onChange:e=>n(e)})}),(0,t.jsx)(a.FzK,{label:"Financial",columns:p.map(e=>e.value),enabled:j,setColumnsVisible:l,setColumnsHidden:i}),(0,t.jsx)(a.WVB,{children:(0,t.jsx)(a.j4H,{options:p,values:j,onChange:e=>n(e)})})]})}function m(){let{setViewMode:e}=(0,r.G)();return(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(a.zxk,{tip:"Toggle graphs",onClick:()=>e(e=>"detail"===e?"list":"detail"),children:(0,t.jsx)(d.oce,{})}),(0,t.jsx)(g,{})]})}function p(e){let{error:n}=e;return(null==n?void 0:n.message.startsWith("404"))?(0,t.jsx)(u,{}):(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(d.Ckx,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching contracts."})]})}var v=s(99182),b=s(2784),k=s(93216);function w(){let{filters:e,removeFilter:n,removeLastFilter:s}=(0,r.G)(),[l,i]=(0,b.useState)(!1),[c,o]=(0,b.useState)(""),[x,u]=(0,b.useState)([]),h=x[x.length-1],j=(x.length,(0,b.useRef)(null)),f=(0,b.useRef)(null),g=(0,b.useCallback)(e=>{u(n=>[...n,e])},[u]),m=(0,b.useCallback)(()=>{u([])},[u]);(0,b.useEffect)(()=>{let e=e=>{j.current&&!j.current.contains(e.target)&&i(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}},[]);let p=(0,b.useCallback)(()=>{var e;null===(e=f.current)||void 0===e||e.focus()},[f]),w=(0,b.useCallback)(()=>{o(""),m()},[m]);return(0,t.jsxs)("div",{className:"flex gap-1",children:[e.map(e=>(0,t.jsxs)(a.eQh,{children:[(0,t.jsx)(a.zxk,{variant:"active",state:"waiting",children:e.label}),(0,t.jsx)(a.zxk,{variant:"active",size:"small",onClick:()=>n(e.id),children:(0,t.jsx)(d.PcV,{})})]},e.id)),(0,t.jsxs)(v.mY,{ref:j,label:"Command Menu",onFocus:()=>i(!0),onKeyDown:e=>{if(x.length>0)"Escape"!==e.key&&("Backspace"!==e.key||c)||(e.preventDefault(),u(e=>e.slice(0,-1)));else if(0===x.length&&("Backspace"!==e.key||c||s(),"Escape"===e.key&&!c)){var n;i(!1),null===(n=f.current)||void 0===n||n.blur()}},children:[(0,t.jsx)(v.mY.Input,{ref:f,value:c,onValueChange:o,className:(0,a.cEb)({variant:"ghost",focus:"none"}),placeholder:"Filter contracts"}),l&&(0,t.jsx)(a.s_4,{className:"absolute z-20 min-w-[200px] max-h-[400px] overflow-auto p-1",children:(0,t.jsxs)(a.xrM,{children:[h&&(0,t.jsx)(a.__J,{className:"px-1.5 py-1",children:h.label}),(0,t.jsx)(v.mY.List,{children:(0,t.jsx)(k.F,{currentPage:h,beforeSelect:p,afterSelect:w,pushPage:g})})]})})]})]})}function N(){let{dataState:e,offset:n,limit:s,datasetFilteredCount:l,pageCount:i}=(0,r.G)();return(0,t.jsxs)("div",{className:"flex gap-2 w-full",children:[(0,t.jsx)(w,{}),(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(a.uDJ,{isLoading:"loading"===e,offset:n,limit:s,datasetTotal:l,pageTotal:i})]})}var y=s(82851);function C(){return(0,t.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,t.jsx)(a.xvT,{children:(0,t.jsx)(d.uTh,{className:"scale-[200%]"})}),(0,t.jsx)(a.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No data available."})]})}function _(){let{selectedContract:e,allContractsSpendingMetrics:n,selectedContractSpendingMetrics:s,contractSetCountMetrics:l,graphMode:i,setGraphMode:c}=(0,r.G)(),o=(0,t.jsxs)("div",{className:"flex gap-2",children:[!e&&(0,t.jsx)(a.zxk,{variant:"spending"===i?"accent":"gray",onClick:()=>c("spending"),children:"Funding & spending: All contracts"}),e&&(0,t.jsxs)(a.zxk,{variant:"spending"===i?"accent":"gray",onClick:()=>c("spending"),children:["Funding & spending: Contract"," ",(0,a.I13)(e.id).slice(0,6)]}),!e&&(0,t.jsx)(a.zxk,{variant:"count"===i?"accent":"gray",onClick:()=>c("count"),children:"Count"})]});return(0,t.jsxs)("div",{className:"w-full h-full",children:["spending"===i&&!e&&(0,t.jsx)(a.b0u,{id:"fundingAndSpending",height:"100%",data:n.data,config:n.config,isLoading:n.isLoading,actionsLeft:o,emptyState:(0,t.jsx)(C,{})}),"spending"===i&&e&&(0,t.jsx)(a.b0u,{id:"fundingAndSpending",height:"100%",data:s.data,config:s.config,isLoading:s.isLoading,actionsLeft:o,emptyState:(0,t.jsx)(C,{})}),"count"===i&&!e&&(0,t.jsx)(a.b0u,{id:"count",height:"100%",data:l.data,config:l.config,isLoading:l.isLoading,actionsLeft:o,emptyState:(0,t.jsx)(C,{})})]})}function S(){let{openDialog:e}=(0,c.Rh)(),{columns:n,datasetPage:s,sortField:d,sortDirection:h,sortableColumns:j,toggleSort:f,limit:g,dataState:v,cellContext:b,error:k,viewMode:w,filters:C,selectedContract:S}=(0,r.G)(),T="detail"===w&&(!C.length||S),z=T?s&&s.length?"".concat(400-Math.max((2-s.length)*100,0),"px"):"400px":"100%";return(0,t.jsx)(o.J,{title:"Active contracts",routes:i._,sidenav:(0,t.jsx)(l.e,{}),openSettings:()=>e("settings"),stats:(0,t.jsx)(N,{}),actions:(0,t.jsx)(m,{}),size:"full",scroll:!1,children:(0,t.jsxs)("div",{className:"relative flex flex-col overflow-hidden h-full w-full",children:[(0,t.jsx)("div",{className:(0,y.cx)("absolute w-full",T?"block":"invisible","transition-all","p-6"),style:{height:T?"calc(100% - ".concat(z,")"):0},children:T?(0,t.jsx)(_,{}):null}),(0,t.jsx)("div",{className:(0,y.cx)("absolute overflow-hidden transition-all w-full","duration-300","overflow-hidden"),style:{bottom:0,height:z},children:(0,t.jsx)(a.xrM,{className:"z-0",id:"scroll-hosts",children:(0,t.jsx)("div",{className:(0,y.cx)(T?"pb-6 px-6":"p-6","min-w-fit"),children:(0,t.jsx)(a.iA_,{context:b,isLoading:"loading"===v,emptyState:"noneMatchingFilters"===v?(0,t.jsx)(x,{}):"noneYet"===v?(0,t.jsx)(u,{}):"error"===v?(0,t.jsx)(p,{error:k}):null,sortableColumns:j,pageSize:g,data:s,columns:n,sortDirection:h,sortField:d,toggleSort:f,focusId:null==S?void 0:S.id,rowSize:"default"})})})})]})})}function T(){return(0,t.jsx)(S,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=77441)}),_N_E=e.O()}]);