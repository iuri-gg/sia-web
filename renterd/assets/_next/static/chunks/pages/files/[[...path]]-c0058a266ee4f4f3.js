(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{38345:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/files/[[...path]]",function(){return t(15855)}])},89630:function(e,s,t){"use strict";t.d(s,{J:function(){return h}});var i=t(52322),n=t(23305),l=t(9969),a=t(6391),r=t.n(a),o=t(71930),c=t(25573),d=t(86450);function x(){var e,s,t,a,r;let{openDialog:o}=(0,d.Rh)(),x=(0,l.d_)({config:{swr:{revalidateOnFocus:!1}}}),u=(0,l.Tu)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,l.cQ)(),j=(0,c.n)(),v=null===(e=x.data)||void 0===e?void 0:e.version,f="?"===v?"https://github.com/SiaFoundation/renterd/commits/":(null==v?void 0:v.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/renterd/releases/".concat(v):"https://github.com/SiaFoundation/renterd/tree/".concat(v);return(0,i.jsxs)(n.HfT,{name:"renterd",peerCount:null===(s=h.data)||void 0===s?void 0:s.length,connectPeer:()=>o("connectPeer"),isSynced:j.isSynced,syncPercent:j.syncPercent,nodeBlockHeight:j.nodeBlockHeight,estimatedBlockHeight:j.estimatedBlockHeight,firstTimeSyncing:j.firstTimeSyncing,moreThan100BlocksToSync:j.moreThan100BlocksToSync,children:[(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,i.jsx)(n.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(t=u.data)||void 0===t?void 0:t.address,type:"address"})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,i.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,i.jsx)(n.xvT,{size:"14",children:null===(a=x.data)||void 0===a?void 0:a.network})})]}),(0,i.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,i.jsx)(n.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,i.jsx)(n.rUS,{size:"14",href:f,underline:"hover",target:"_blank",ellipsis:!0,children:null===(r=x.data)||void 0===r?void 0:r.version})]})]})}function u(){let e=(0,l.d_)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,i.jsx)(n.t6k,{testnetName:e.data.network}):null}function h(e){let s=(0,l.Tu)(),{isSynced:t}=(0,c.n)();return(0,i.jsx)(n.tU3,{appName:"renterd",profile:(0,i.jsx)(x,{}),banner:(0,i.jsx)(u,{}),connectivityRoute:o.h,isSynced:t,walletBalance:s.data?new(r())(s.data.spendable).plus(s.data.unconfirmed):void 0,...e})}},91930:function(e,s,t){"use strict";t.d(s,{e:function(){return d}});var i=t(52322),n=t(23305),l=t(88242),a=t(9969),r=t(82851),o=t(71930),c=t(86450);function d(){var e,s;let t=(0,a.Z7)(),{openDialog:d}=(0,c.Rh)(),x=!(null===(e=t.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),u=(null===(s=t.data)||void 0===s?void 0:s.length)||0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.KJW,{title:"Files",route:o._.files.index,children:(0,i.jsx)(l.ROc,{})}),(0,i.jsx)(n.KJW,{title:"Configuration",route:o._.config.index,children:(0,i.jsx)(l.wWN,{})}),(0,i.jsx)(n.KJW,{title:"Contracts",route:o._.contracts.index,children:(0,i.jsx)(l.VBo,{})}),(0,i.jsx)(n.KJW,{title:"Hosts",route:o._.hosts.index,children:(0,i.jsx)(l.VHe,{})}),(0,i.jsxs)("div",{className:"relative",children:[!!u&&x&&(0,i.jsx)("div",{className:(0,r.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!u&&!x&&(0,i.jsx)(n.xvT,{size:"10",className:(0,r.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:u.toLocaleString()}),(0,i.jsx)(n.KJW,{title:"Alerts",onClick:()=>d("alerts"),children:(0,i.jsx)(l.Dkj,{})})]})]})}},15855:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return q}});var i=t(52322),n=t(91930),l=t(71930),a=t(86450),r=t(23305),o=t(48528),c=t(88242),d=t(9969),x=t(91641);function u(){let{autopilot:e}=(0,x.q)(),s=(0,d.e$)({config:{swr:{errorRetryCount:0}}});return{active:"on"===e.status&&!!s.error}}var h=t(4370);function j(){return(0,i.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,i.jsx)(r.xvT,{children:(0,i.jsx)(c.Ckx,{className:"scale-[200%]"})}),(0,i.jsx)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Error fetching files."})]})}function v(){return(0,i.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px]",children:[(0,i.jsx)(r.xvT,{children:(0,i.jsx)(c.Hb6,{className:"scale-[200%]"})}),(0,i.jsx)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No files matching filters."})]})}function f(){return(0,i.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px] cursor-pointer",children:[(0,i.jsx)(r.xvT,{children:(0,i.jsx)(c.Y9T,{className:"scale-[200%]"})}),(0,i.jsx)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"No files, drag and drop files or click here to start uploading."})]})}function m(){let{dataState:e,isViewingRootOfABucket:s}=(0,o.Y)(),t=u(),n=(0,h.F)();return"noneMatchingFilters"===e?(0,i.jsx)(v,{}):"error"===e?(0,i.jsx)(j,{}):s&&"noneYet"===e&&t.active?(0,i.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px] cursor-pointer",children:[(0,i.jsx)(r.xvT,{children:(0,i.jsx)(c.Y9T,{className:"scale-[200%]"})}),(0,i.jsxs)("div",{className:"flex flex-col gap-6 justify-center items-center",children:[(0,i.jsx)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:"Before you can upload files you must configure autopilot. Autopilot finds contracts with hosts based on the settings you choose. Autopilot also repairs your data as hosts come and go."}),(0,i.jsx)(r.Qjf,{variant:"accent",href:l._.config.index,children:"Configure autopilot →"})]})]}):s&&"noneYet"===e&&n.active?(0,i.jsxs)("div",{className:"flex flex-col gap-12 justify-center items-center h-[400px] cursor-pointer",children:[(0,i.jsx)(r.xvT,{children:(0,i.jsx)(c.Y9T,{className:"scale-[200%]"})}),(0,i.jsxs)("div",{className:"flex flex-col gap-4 justify-center items-center",children:[(0,i.jsxs)(r.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:["There are not enough contracts to upload data yet. Redundancy is configured to use ",n.required," shards which means at least that many contracts are required."]}),(0,i.jsxs)(r.xvT,{size:"30",className:"text-center max-w-[500px]",children:[n.count,"/",n.required]})]})]}):"noneYet"===e?(0,i.jsx)(f,{}):null}function g(){let{isViewingABucket:e}=(0,o.Y)(),s=u(),t=(0,h.F)();return e&&!s.active&&!t.active}function p(){let{uploadFiles:e,datasetPage:s,pageCount:t,dataState:n,columns:l,sortField:a,sortDirection:c,sortableColumns:d,toggleSort:x}=(0,o.Y)(),u=g();return(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(r.fhJ,{onDrop:e,noClick:!u||t>0,noDrag:!u,children:(0,i.jsx)(r.iA_,{isLoading:"loading"===n,emptyState:(0,i.jsx)(m,{}),pageSize:10,data:s,columns:l,sortableColumns:d,sortField:a,sortDirection:c,toggleSort:x,rowSize:"dense"})})})}var b=t(2784);function N(){let{activeDirectory:e,setActiveDirectory:s}=(0,o.Y)(),t=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let e=setTimeout(()=>{var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},100);return()=>{clearTimeout(e)}},[e]),(0,i.jsx)(r.xrM,{children:(0,i.jsxs)("div",{className:"flex gap-1 items-center h-full",children:[(0,i.jsx)(r.xvT,{onClick:()=>s(()=>[]),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:"Files"}),e.length>0&&(0,i.jsx)(r.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,i.jsx)(c.F3j,{})}),e.map((e,t)=>(0,i.jsxs)(b.Fragment,{children:[t>0&&(0,i.jsx)(r.xvT,{size:"16",color:"verySubtle",className:"flex items-center",children:(0,i.jsx)(c.F3j,{})}),(0,i.jsx)(r.xvT,{onClick:()=>s(e=>e.slice(0,t+1)),size:"18",weight:"semibold",className:"flex items-center cursor-pointer",noWrap:!0,children:e})]},e+t)),(0,i.jsx)("div",{ref:t})]})})}var T=t(89630),w=t(74424),z=t(81471),y=t(3440),k=t.n(y);function S(){let{configurableColumns:e,toggleColumnVisibility:s,resetDefaultColumnVisibility:t,sortField:n,setSortField:l,sortDirection:a,setSortDirection:d,enabledColumns:x}=(0,o.Y)();return(0,i.jsxs)(r.J2e,{trigger:(0,i.jsxs)(r.zxk,{size:"small",tip:"Configure view",tipAlign:"end",children:[(0,i.jsx)(c.hiv,{}),"View",(0,i.jsx)(c.EMN,{})]}),contentProps:{align:"end",className:"max-w-[300px]"},children:[(0,i.jsxs)(r.WVB,{children:[(0,i.jsx)(r.__J,{children:"Order by"}),(0,i.jsx)(r.kFS,{children:(0,i.jsx)(r.PhF,{value:n,onChange:e=>{l(e.currentTarget.value)},children:Object.entries(k()(z.Fo,"category")).map(e=>{let[s,t]=e;return(0,i.jsx)("optgroup",{label:s,children:t.map(e=>(0,i.jsx)(r.Wxm,{value:e.id,children:e.label},e.id))},s)})})})]}),(0,i.jsxs)(r.WVB,{children:[(0,i.jsx)(r.__J,{children:"Direction"}),(0,i.jsx)(r.kFS,{children:(0,i.jsxs)(r.PhF,{value:a,onClick:e=>{e.stopPropagation()},onChange:e=>{d(e.currentTarget.value)},children:[(0,i.jsx)(r.Wxm,{value:"desc",children:"descending"},"desc"),(0,i.jsx)(r.Wxm,{value:"asc",children:"ascending"},"asc")]})})]}),(0,i.jsx)(r.Clw,{}),(0,i.jsxs)(r.WVB,{children:[(0,i.jsx)(r.__J,{children:"Display properties"}),(0,i.jsx)(r.kFS,{children:(0,i.jsx)(r.zxk,{onClick:e=>{e.stopPropagation(),t()},children:"Reset default"})})]}),(0,i.jsx)(r.WVB,{children:(0,i.jsx)(r.j4H,{options:e.map(e=>({label:e.label,value:e.id})),values:x,onChange:e=>s(e)})})]})}function _(){let{openDialog:e}=(0,a.Rh)(),{uploadFiles:s,isViewingBuckets:t}=(0,o.Y)(),n=g(),{getRootProps:l,getInputProps:d}=(0,w.uI)({noDrag:!0,noClick:!n,onDrop:s});return(0,i.jsxs)("div",{className:"flex gap-2",children:[t?(0,i.jsxs)(r.zxk,{onClick:()=>e("filesCreateBucket"),tip:"Create bucket",children:[(0,i.jsx)(c.aXP,{}),"Create bucket"]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.zxk,{onClick:()=>e("filesSearch"),tip:"Search files",children:(0,i.jsx)(c.UBs,{})}),(0,i.jsxs)(r.zxk,{...l(),tip:"Upload files",disabled:!n,children:[(0,i.jsx)("input",{...d()}),(0,i.jsx)(c.bQp,{})]}),(0,i.jsx)(r.zxk,{disabled:!n,onClick:()=>e("filesCreateDirectory"),tip:"Create directory",children:(0,i.jsx)(c.L37,{})})]}),(0,i.jsx)(S,{})]})}var F=t(96206);function C(){let e=(0,d.Q5)({config:{swr:{refreshInterval:6e4,keepPreviousData:!0,revalidateOnFocus:!1}}});if(!e.data&&e.isValidating)return(0,i.jsx)(r.xgg,{className:"pr-1"});if(!e.data)return null;let s=e.data.totalObjectsSize?e.data.totalSectorsSize/e.data.totalObjectsSize:0;return(0,i.jsx)(r.ua7,{side:"bottom",content:(0,i.jsxs)(r.xvT,{className:"flex justify-between gap-6",children:[(0,i.jsxs)(r.xvT,{className:"flex flex-col gap-1",children:[(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"size of all files"}),(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"with redundancy"}),!!s&&(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"average redundancy factor"}),(0,i.jsx)(r.Z0O,{className:"w-full my-1"}),(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"reclaimable space"}),(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"total storage utilization"})]}),(0,i.jsxs)(r.xvT,{className:"flex flex-col gap-1 items-end",children:[(0,i.jsx)(r.xvT,{size:"12",children:(0,F.vW)(e.data.totalObjectsSize)}),(0,i.jsx)(r.xvT,{size:"12",children:(0,F.vW)(e.data.totalSectorsSize)}),!!s&&(0,i.jsxs)(r.xvT,{size:"12",font:"mono",children:[s.toFixed(1),"x"]}),(0,i.jsx)(r.Z0O,{className:"w-full my-1"}),(0,i.jsx)(r.xvT,{size:"12",children:(0,F.vW)(e.data.totalUploadedSize-e.data.totalSectorsSize)}),(0,i.jsx)(r.xvT,{size:"12",children:(0,F.vW)(e.data.totalUploadedSize)})]})]}),children:(0,i.jsx)(r.xvT,{size:"12",font:"mono",children:"".concat((0,F.vW)(e.data.totalObjectsSize)).concat(s?" @ ".concat(s.toFixed(1),"x"):"")})})}var W=t(82439);function O(){var e;let{activeBucket:s}=(0,o.Y)(),t=(0,d.Jv)({disabled:!s,params:{key:"",bucket:s},config:{swr:{dedupingInterval:5e3}}}),n=(0,b.useMemo)(()=>{var e,s,i,n;return null===(n=t.data)||void 0===n?void 0:null===(i=n.entries)||void 0===i?void 0:i.reduce((e,s)=>{let{health:t}=s;return t<e?t:e},(null===(s=t.data)||void 0===s?void 0:null===(e=s.entries[0])||void 0===e?void 0:e.health)||1)},[t.data]),{displayHealth:l,label:a}=(0,W.B)({health:n,size:1,isDirectory:!0});return s&&(null===(e=t.data)||void 0===e?void 0:e.entries)&&0!==t.data.entries.length?(0,i.jsx)(r.ua7,{align:"end",content:(0,i.jsxs)("div",{className:"flex flex-col overflow-hidden mb-1",children:[(0,i.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,i.jsx)(r.xvT,{size:"12",children:a}),(0,i.jsxs)(r.xvT,{size:"12",children:[(100*l).toFixed(0),"%"]})]}),(0,i.jsx)(r.Z0O,{className:"w-full my-1.5"}),(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"Health is calculated as the minimum health value from across all file slabs. For directories this is across all contained files."}),(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"Slab health is calculated as the number of shards with active contracts in the autopilot contract set above the minimum required shards and expressed as a percentage."})]}),(0,i.jsx)(r.Z0O,{className:"w-full my-1.5"}),(0,i.jsxs)("div",{className:"flex gap-3 justify-between",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"excellent health"}),(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"good health"}),(0,i.jsx)(r.xvT,{size:"12",color:"subtle",children:"poor health"})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-1 items-end",children:[(0,i.jsxs)(r.xvT,{size:"12",color:"subtle",children:[100*W.V.excellent,"%"]}),(0,i.jsxs)(r.xvT,{size:"12",color:"subtle",children:[100*W.V.good,"% -"," ",100*W.V.excellent,"%"]}),(0,i.jsxs)(r.xvT,{size:"12",color:"subtle",children:[100*W.V.poor,"% - ",100*W.V.good,"%"]})]})]})]}),children:(0,i.jsx)(r.xvT,{size:"12",font:"mono",className:"flex",children:a})}):null}var V=t(80489);function Y(){let{dataState:e,isViewingRootOfABucket:s,isViewingBuckets:t}=(0,o.Y)(),n=function(){let{autopilot:e}=(0,x.q)(),s=function(){var e,s;let{autopilot:t}=(0,x.q)(),i=(0,d.e$)({disabled:"on"!==t.status}),n=(0,V.a)();return{isValidating:i.isValidating||n.isValidating,data:(null===(e=i.data)||void 0===e?void 0:e.contracts.set)===(null===(s=n.data)||void 0===s?void 0:s.default)}}(),t="on"===e.status&&!s.isValidating&&!s.data;return{active:t}}(),a=function(){var e;let s=(0,V.a)();return{active:s.data&&!(null===(e=s.data)||void 0===e?void 0:e.default)}}(),j=u(),v=(0,h.F)();if(a.active)return(0,i.jsxs)("div",{className:"flex gap-1",children:[(0,i.jsx)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:(0,i.jsx)(c.qdM,{})}),(0,i.jsxs)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:["Configure a default contract set to get started."," ",(0,i.jsx)(r.rUS,{underline:"hover",size:"12",font:"mono",weight:"medium",color:"amber",href:l._.config.index,children:"Configuration →"})]})]});if(n.active)return(0,i.jsx)(r.ua7,{align:"start",content:(0,i.jsx)(i.Fragment,{children:"The autopilot contract set does not match the default contract set. This means that by default workers will not upload data to contracts that autopilot manages. Unless these contract are being manually maintained, this will result in data loss. Continue with caution or update the autopilot contract set to match the default contract set."}),children:(0,i.jsxs)("div",{className:"flex gap-1",children:[(0,i.jsx)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:(0,i.jsx)(c.qdM,{})}),(0,i.jsx)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:"Uploaded data will not be managed by autopilot."})]})});let f=j.active&&t,m=j.active&&s&&"noneYet"!==e,g=j.active&&!s;if(f||m||g)return(0,i.jsxs)("div",{className:"flex gap-1",children:[(0,i.jsx)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:(0,i.jsx)(c.qdM,{})}),(0,i.jsxs)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:["Configure autopilot to get started."," ",(0,i.jsx)(r.rUS,{underline:"none",size:"12",font:"mono",weight:"medium",color:"amber",href:l._.config.index,children:"Autopilot →"})]})]});let p=v.active&&t,b=v.active&&s&&"noneYet"!==e,N=v.active&&!s;return p||b||N?(0,i.jsxs)("div",{className:"flex gap-1",children:[(0,i.jsx)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:(0,i.jsx)(c.qdM,{})}),(0,i.jsxs)(r.xvT,{size:"12",font:"mono",weight:"medium",color:"amber",children:["Not enought contracts to upload files. ",v.count,"/",v.required]})]}):null}function B(){var e,s;let{isViewingABucket:t,pageCount:n}=(0,o.Y)(),l=(0,d.Q5)({config:{swr:{refreshInterval:6e4,keepPreviousData:!0,revalidateOnFocus:!1}}});return t?(0,i.jsx)(r.ua7,{side:"bottom",content:"Number of files in current directory",children:(0,i.jsxs)(r.xvT,{size:"12",font:"mono",children:[n.toLocaleString(),l.data?" of ".concat(null===(s=l.data)||void 0===s?void 0:s.numObjects.toLocaleString()," files"):" files"]})}):(0,i.jsx)(r.ua7,{side:"bottom",content:"Number of files across all buckets",children:l.data?(0,i.jsxs)(r.xvT,{size:"12",font:"mono",children:[null===(e=l.data)||void 0===e?void 0:e.numObjects.toLocaleString()," files"]}):(0,i.jsx)(r.xgg,{})})}function J(){return(0,i.jsxs)("div",{className:"flex gap-2 w-full",children:[(0,i.jsx)(Y,{}),(0,i.jsx)("div",{className:"flex-1"}),(0,i.jsxs)("div",{className:"flex gap-3",children:[(0,i.jsxs)("div",{className:"flex gap-3",children:[(0,i.jsx)(r.ua7,{side:"bottom",content:"Filtered statistics",children:(0,i.jsx)(r.xvT,{size:"12",color:"verySubtle",children:(0,i.jsx)(c.q0D,{})})}),(0,i.jsx)(B,{})]}),(0,i.jsx)(r.Z0O,{variant:"vertical",className:"h-full"}),(0,i.jsxs)("div",{className:"flex gap-3",children:[(0,i.jsx)(r.ua7,{side:"bottom",content:"Global statistics",children:(0,i.jsx)(r.xvT,{size:"12",color:"verySubtle",children:(0,i.jsx)(c.RFr,{})})}),(0,i.jsx)(C,{}),(0,i.jsx)(O,{})]})]})]})}function P(){let{openDialog:e}=(0,a.Rh)();return(0,i.jsx)(T.J,{title:"Files",navTitle:null,routes:l._,sidenav:(0,i.jsx)(n.e,{}),nav:(0,i.jsx)(N,{}),stats:(0,i.jsx)(J,{}),actions:(0,i.jsx)(_,{}),openSettings:()=>e("settings"),children:(0,i.jsx)("div",{className:"p-6 min-w-fit",children:(0,i.jsx)(p,{})})})}function q(){return(0,i.jsx)(P,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=38345)}),_N_E=e.O()}]);