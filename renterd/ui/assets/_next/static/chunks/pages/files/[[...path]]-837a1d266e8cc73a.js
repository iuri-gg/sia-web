(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{8345:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files/[[...path]]",function(){return s(1002)}])},6133:function(e,n,s){"use strict";s.d(n,{J:function(){return u}});var i=s(2322),t=s(4866),l=s(3621),r=s(6391),c=s.n(r),a=s(4881),o=s(6095),d=s(650);function x(){var e,n;let{openDialog:s}=(0,d.Rh)(),r=(0,l.gM)({config:{swr:{revalidateOnFocus:!1}}}),c=(0,l.GJ)({config:{swr:{revalidateOnFocus:!1}}}),a=(0,l.cQ)(),x=(0,o.n)();return(0,i.jsxs)(t.HfT,{name:"renterd",peerCount:null===(e=a.data)||void 0===e?void 0:e.length,connectPeer:()=>s("connectPeer"),isSynced:x.isSynced,percent:x.percent,nodeBlockHeight:x.nodeBlockHeight,estimatedBlockHeight:x.estimatedBlockHeight,firstTimeSyncing:x.firstTimeSyncing,moreThan100BlocksToSync:x.moreThan100BlocksToSync,children:[(0,i.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,i.jsx)(t.__J,{size:"14",color:"subtle",children:"Wallet address"}),(0,i.jsx)(t.xS1,{size:"14",value:c.data,type:"address"})]}),(0,i.jsxs)("div",{className:"flex gap-2 justify-between items-center",children:[(0,i.jsx)(t.__J,{size:"14",color:"subtle",children:"Network"}),(0,i.jsx)(t.xvT,{size:"14",children:null===(n=r.data)||void 0===n?void 0:n.Name})]})]})}function u(e){let n=(0,l.tM)(),{isSynced:s}=(0,o.n)();return(0,i.jsx)(t.tU3,{appName:"renterd",profile:(0,i.jsx)(x,{}),connectivityRoute:a.h,isSynced:s,walletBalance:n.data?new(c())(n.data):void 0,...e})}},5755:function(e,n,s){"use strict";s.d(n,{e:function(){return c}});var i=s(2322),t=s(4866),l=s(4881),r=s(3121);function c(){let{autopilotMode:e}=(0,r.K)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.KJW,{title:"Files",route:l._.files.index,children:(0,i.jsx)(t.ROc,{})}),"on"===e&&(0,i.jsx)(t.KJW,{title:"Autopilot",route:l._.autopilot.index,children:(0,i.jsx)(t.aFQ,{})}),(0,i.jsx)(t.KJW,{title:"Contracts",route:l._.contracts.index,children:(0,i.jsx)(t.VBo,{})}),(0,i.jsx)(t.KJW,{title:"Hosts",route:l._.hosts.index,children:(0,i.jsx)(t.VHe,{})}),(0,i.jsx)(t.KJW,{title:"Configuration",route:l._.config.index,children:(0,i.jsx)(t.wWN,{})})]})}},6095:function(e,n,s){"use strict";s.d(n,{n:function(){return l}});var i=s(2337),t=s(3621);function l(){var e,n;let{isUnlocked:s}=(0,i.Hv)(),l=(0,t.DQ)({config:{swr:{refreshInterval:e=>(null==e?void 0:e.Synced)?6e4:1e4}}}),r=(0,t.nH)(),c=l.data?null===(e=l.data)||void 0===e?void 0:e.BlockHeight:0,a=s&&c&&r?Number((100*Math.min(c/r,1)).toFixed(1)):0;return{isSynced:null===(n=l.data)||void 0===n?void 0:n.Synced,nodeBlockHeight:c,estimatedBlockHeight:r,percent:a,moreThan100BlocksToSync:!!c&&!!r&&r-c>100,firstTimeSyncing:!!c&&!!r&&r-c>5e4}}},1002:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return S}});var i=s(2322),t=s(5755),l=s(4881),r=s(650),c=s(4866),a=s(2495);function o(){return(0,i.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,i.jsx)(c.xvT,{children:(0,i.jsx)(c.Ckx,{className:"scale-[200%]"})}),(0,i.jsx)(c.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching files."})]})}function d(){return(0,i.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,i.jsx)(c.xvT,{children:(0,i.jsx)(c.Hb6,{className:"scale-[200%]"})}),(0,i.jsx)(c.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No files matching filters."})]})}function x(){return(0,i.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px] cursor-pointer",children:[(0,i.jsx)(c.xvT,{children:(0,i.jsx)(c.Y9T,{className:"scale-[200%]"})}),(0,i.jsx)(c.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No files, drag and drop files or click here to start uploading."})]})}function u(){let{uploadFiles:e,datasetPage:n,pageCount:s,dataState:t,columns:l,sortColumn:r,sortDirection:u,toggleSort:j}=(0,a.Y)();return(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(c.fhJ,{onDrop:e,noClick:s>0,children:(0,i.jsx)(c.iA_,{isLoading:"loading"===t,emptyState:"noneMatchingFilters"===t?(0,i.jsx)(d,{}):"noneYet"===t?(0,i.jsx)(x,{}):"error"===t?(0,i.jsx)(o,{}):null,pageSize:10,data:n,columns:l,sortColumn:r,sortDirection:u,toggleSort:j,rowSize:"dense"})})})}var j=s(2784);function h(){let{activeDirectory:e,setActiveDirectory:n}=(0,a.Y)(),s=(0,j.useRef)(null);return(0,j.useEffect)(()=>{let e=setTimeout(()=>{var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},100);return()=>{clearTimeout(e)}},[e]),(0,i.jsx)(c.xrM,{children:(0,i.jsxs)("div",{className:"flex gap-1 items-center h-full",children:[(0,i.jsx)(c.xvT,{onClick:()=>n(()=>[]),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:"Files"}),!!e.length&&(0,i.jsx)(c.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,i.jsx)(c.F3j,{})}),e.map((e,s)=>(0,i.jsxs)(j.Fragment,{children:[s>0&&(0,i.jsx)(c.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,i.jsx)(c.F3j,{})}),(0,i.jsx)(c.xvT,{onClick:()=>n(e=>e.slice(0,s+1)),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:e})]},e+s)),(0,i.jsx)("div",{ref:s})]})})}var f=s(6133),v=s(4424);function m(){let{configurableColumns:e,toggleColumnVisibility:n,resetDefaultColumnVisibility:s,sortOptions:t,sortColumn:l,setSortColumn:r,sortDirection:o,setSortDirection:d,enabledColumns:x}=(0,a.Y)();return(0,i.jsxs)(c.J2e,{trigger:(0,i.jsxs)(c.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,i.jsx)(c.hiv,{}),"View",(0,i.jsx)(c.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,i.jsxs)(c.WVB,{children:[(0,i.jsx)(c.__J,{children:"Order by"}),(0,i.jsx)(c.kFS,{children:(0,i.jsx)(c.PhF,{value:l,onChange:e=>{r(e.currentTarget.value)},children:Object.entries(t).map(e=>{let[n,s]=e;return(0,i.jsx)("optgroup",{label:n,children:s.map(e=>(0,i.jsx)(c.Wxm,{value:e.id,children:e.label},e.id))},n)})})})]}),(0,i.jsxs)(c.WVB,{children:[(0,i.jsx)(c.__J,{children:"Direction"}),(0,i.jsx)(c.kFS,{children:(0,i.jsxs)(c.PhF,{value:o,onClick:e=>{e.stopPropagation()},onChange:e=>{d(e.currentTarget.value)},children:[(0,i.jsx)(c.Wxm,{value:"desc",children:"descending"},"desc"),(0,i.jsx)(c.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,i.jsx)(c.Clw,{}),(0,i.jsxs)(c.WVB,{children:[(0,i.jsx)(c.__J,{children:"Display properties"}),(0,i.jsx)(c.kFS,{children:(0,i.jsx)(c.zxk,{onClick:e=>{e.stopPropagation(),s()},children:"Reset default"})})]}),(0,i.jsx)(c.WVB,{children:(0,i.jsx)(c.j4H,{options:e.map(e=>({label:e.label,value:e.id})),values:x,onChange:e=>n(e)})})]})}function p(){let{openDialog:e}=(0,r.Rh)(),{uploadFiles:n}=(0,a.Y)(),{getRootProps:s,getInputProps:t}=(0,v.uI)({noDrag:!0,onDrop:n});return(0,i.jsxs)("div",{className:"flex gap-2",children:[(0,i.jsx)(c.zxk,{onClick:()=>e("filesSearch"),tip:"Search files",children:(0,i.jsx)(c.UBs,{})}),(0,i.jsxs)(c.zxk,{...s(),tip:"Upload files",children:[(0,i.jsx)("input",{...t()}),(0,i.jsx)(c.bQp,{})]}),(0,i.jsx)(c.zxk,{onClick:()=>e("filesCreateDirectory"),tip:"Create directory",children:(0,i.jsx)(c.L37,{})}),(0,i.jsx)(m,{})]})}var g=s(3621),N=s(2288);function T(){var e,n;let{pageCount:s}=(0,a.Y)(),t=(0,g.Q5)({config:{swr:{refreshInterval:6e4,keepPreviousData:!0,revalidateOnFocus:!1}}});return(0,i.jsx)("div",{className:"flex gap-2 justify-end w-full",children:(0,i.jsxs)("div",{className:"flex gap-4",children:[(0,i.jsxs)("div",{className:"flex gap-2",children:[(0,i.jsx)(c.ua7,{content:"Filtered statistics",children:(0,i.jsx)(c.xvT,{size:"12",color:"verySubtle",children:(0,i.jsx)(c.q0D,{})})}),(0,i.jsx)(c.ua7,{content:"Number of files in current directory",children:(0,i.jsxs)(c.xvT,{size:"12",font:"mono",children:[s.toLocaleString(),t.data?" of ".concat(null===(e=t.data)||void 0===e?void 0:e.numObjects.toLocaleString()," files"):" files"]})})]}),t.data&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z0O,{variant:"vertical",className:"h-full"}),(0,i.jsxs)("div",{className:"flex gap-2",children:[(0,i.jsx)(c.ua7,{content:"Global statistics",children:(0,i.jsx)(c.xvT,{size:"12",color:"verySubtle",children:(0,i.jsx)(c.nDH,{})})}),(0,i.jsx)(c.ua7,{content:"Size of all files",children:(0,i.jsx)(c.xvT,{size:"12",font:"mono",children:(0,N.vW)(null===(n=t.data)||void 0===n?void 0:n.totalUploadedSize)})})]})]})]})})}function k(){let{openDialog:e}=(0,r.Rh)();return(0,i.jsx)(f.J,{title:"Files",navTitle:null,routes:l._,sidenav:(0,i.jsx)(t.e,{}),nav:(0,i.jsx)(h,{}),stats:(0,i.jsx)(T,{}),actions:(0,i.jsx)(p,{}),openSettings:()=>e("settings"),children:(0,i.jsx)("div",{className:"p-6 min-w-fit",children:(0,i.jsx)(u,{})})})}function S(){return(0,i.jsx)(k,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8345)}),_N_E=e.O()}]);