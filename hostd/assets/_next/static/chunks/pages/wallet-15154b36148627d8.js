(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{69171:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet",function(){return t(21990)}])},14134:function(e,n,t){"use strict";t.d(n,{q:function(){return m}});var s=t(52322),i=t(93463),a=t(27444),l=t(6391),r=t.n(l),c=t(71930),d=t(25573);function o(){let e=(0,a.On)({config:{swr:{revalidateOnFocus:!1}}});return e.data&&"Mainnet"!==e.data.network?(0,s.jsx)(i.t6k,{testnetName:e.data.network}):null}var u=t(22515);function x(){var e,n,t,l,r,c,o;let{openDialog:x}=(0,u.Rh)(),m=(0,a.On)({config:{swr:{revalidateOnFocus:!1}}}),f=(0,a.rV)({config:{swr:{revalidateOnFocus:!1}}}),h=(0,d.n)(),v=(0,a.cQ)(),p=null===(e=m.data)||void 0===e?void 0:e.version,j=(null==p?void 0:p.match(/^v\d+\.\d+\.\d+/))?"https://github.com/SiaFoundation/hostd/releases/".concat(p):"https://github.com/SiaFoundation/hostd/tree/".concat(p);return(0,s.jsxs)(i.HfT,{name:"hostd",peerCount:null===(n=v.data)||void 0===n?void 0:n.length,connectPeer:()=>x("connectPeer"),isSynced:h.isSynced,syncPercent:h.syncPercent,nodeBlockHeight:h.nodeBlockHeight,estimatedBlockHeight:h.estimatedBlockHeight,firstTimeSyncing:h.firstTimeSyncing,moreThan100BlocksToSync:h.moreThan100BlocksToSync,children:[(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Net address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(t=f.data)||void 0===t?void 0:t.netAddress,maxLength:50,label:"network address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Public key"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",value:null===(l=m.data)||void 0===l?void 0:l.publicKey,maxLength:50,label:"public key"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Wallet address"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.XxW,{className:"overflow-hidden",size:"14",maxLength:50,value:null===(r=m.data)||void 0===r?void 0:r.walletAddress,type:"address"})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Network"}),(0,s.jsx)("div",{className:"flex-1 flex justify-end overflow-hidden",children:(0,s.jsx)(i.xvT,{size:"14",children:null===(c=m.data)||void 0===c?void 0:c.network})})]}),(0,s.jsxs)("div",{className:"flex gap-4 justify-between items-center",children:[(0,s.jsx)(i.__J,{size:"14",color:"subtle",noWrap:!0,className:"w-[100px]",children:"Version"}),(0,s.jsx)(i.rUS,{size:"14",href:j,underline:"hover",target:"_blank",ellipsis:!0,children:null===(o=m.data)||void 0===o?void 0:o.version})]})]})}function m(e){let n=(0,a.Os)(),{isSynced:t}=(0,d.n)();return(0,s.jsx)(i.tU3,{appName:"hostd",connectivityRoute:c.h,banner:(0,s.jsx)(o,{}),profile:(0,s.jsx)(x,{}),isSynced:t,walletBalanceSc:n.data&&{spendable:new(r())(n.data.spendable),confirmed:new(r())(n.data.confirmed),unconfirmed:new(r())(n.data.unconfirmed)},...e})}},66724:function(e,n,t){"use strict";t.d(n,{N:function(){return o}});var s=t(52322),i=t(93463),a=t(41775),l=t(27444),r=t(82851),c=t(71930),d=t(22515);function o(){var e,n;let{openDialog:t}=(0,d.Rh)(),o=(0,l.Z7)(),u=!(null===(e=o.data)||void 0===e?void 0:e.find(e=>"info"!==e.severity)),x=(null===(n=o.data)||void 0===n?void 0:n.length)||0;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.KJW,{title:"Dashboard",route:c._.home,children:(0,s.jsx)(a.K2o,{})}),(0,s.jsx)(i.KJW,{title:"Volumes",route:c._.volumes.index,children:(0,s.jsx)(a.zvn,{})}),(0,s.jsx)(i.KJW,{title:"Contracts",route:c._.contracts.index,children:(0,s.jsx)(a.VBo,{})}),(0,s.jsx)(i.KJW,{title:"Configuration",route:c._.config.index,children:(0,s.jsx)(a.wWN,{})}),(0,s.jsxs)("div",{className:"relative",children:[!!x&&u&&(0,s.jsx)("div",{className:(0,r.cx)("absolute -right-[2px] top-px w-1 h-1","rounded-full","bg-gray-1000 dark:bg-white","pointer-events-none")}),!!x&&!u&&(0,s.jsx)(i.xvT,{size:"10",className:(0,r.cx)("absolute -right-[9px] -top-1 py-px px-[5px]","text-white","bg-red-500 dark:bg-red-500 rounded","pointer-events-none"),color:"none",children:x.toLocaleString()}),(0,s.jsx)(i.KJW,{title:"Alerts",onClick:()=>t("alerts"),children:(0,s.jsx)(a.Dkj,{})})]})]})}},21990:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var s=t(52322),i=t(93463),a=t(27444),l=t(2784),r=t(22515),c=t(71930),d=t(6391),o=t.n(d),u=t(66724),x=t(14134),m=t(25573),f=t(41775);function h(){let{openDialog:e}=(0,r.Rh)();return(0,s.jsxs)("div",{className:"flex flex-col gap-10 justify-center items-center h-[400px] cursor-pointer",children:[(0,s.jsx)(i.xvT,{children:(0,s.jsx)(f.HCc,{className:"scale-[200%]"})}),(0,s.jsxs)("div",{className:"flex flex-col gap-6 justify-center items-center",children:[(0,s.jsxs)(i.xvT,{color:"subtle",className:"text-center max-w-[500px]",children:["Send funds to your ",(0,s.jsx)(i.EKh,{children:"hostd"})," wallet address to get started."]}),(0,s.jsx)(i.zxk,{variant:"accent",onClick:()=>e("addressDetails"),children:"View address"})]})]})}function v(){let e=(0,a.Qq)({params:{limit:50,offset:0}}),n=(0,a.a0)(),{openDialog:t}=(0,r.Rh)(),d=(0,a.Os)(),f=(0,l.useMemo)(()=>[...(n.data||[]).map(e=>({type:"transaction",txType:(0,i.leQ)(e.transaction,e.source),hash:e.ID,timestamp:new Date(e.timestamp).getTime(),sc:new(o())(e.inflow).minus(e.outflow),unconfirmed:!0})),...(e.data||[]).map(e=>({type:"transaction",txType:(0,i.leQ)(e.transaction,e.source),hash:e.ID,timestamp:new Date(e.timestamp).getTime(),onClick:()=>t("transactionDetails",e.ID),sc:new(o())(e.inflow).minus(e.outflow)})).sort((e,n)=>e.timestamp<n.timestamp?1:-1)],[n,e,t]),v=(0,l.useMemo)(()=>{let e=new Date().getTime(),n=(0,i.NrH)(30);return new Date(e-n).toISOString()},[]),p=(0,a.KU)({params:{interval:"daily",start:v}}),j=(0,l.useMemo)(()=>(p.data||[]).map(e=>({sc:Number(e.balance),timestamp:new Date(e.timestamp).getTime()})).sort((e,n)=>e.timestamp>=n.timestamp?1:-1),[p.data]),{isSynced:w,isWalletSynced:g,syncPercent:y,walletScanPercent:N}=(0,m.n)();return(0,s.jsx)(x.q,{routes:c._,sidenav:(0,s.jsx)(u.N,{}),openSettings:()=>t("settings"),title:"Wallet",actions:(0,s.jsx)(i.QUh,{isSynced:w,isWalletSynced:g,syncPercent:y,walletScanPercent:N,balanceSc:d.data?{spendable:new(o())(d.data.spendable),unconfirmed:new(o())(d.data.unconfirmed),confirmed:new(o())(d.data.confirmed)}:void 0,receiveSiacoin:()=>t("addressDetails"),sendSiacoin:()=>t("sendSiacoin")}),stats:(0,s.jsx)(i.DmW,{isSynced:w,isWalletSynced:g,syncPercent:y,walletScanPercent:N}),children:(0,s.jsxs)("div",{className:"p-6 flex flex-col gap-5",children:[(null==j?void 0:j.length)&&j.find(e=>e.sc)?(0,s.jsx)(i.Z58,{balances:j,isLoading:p.isValidating}):null,(0,s.jsx)(i.XOF,{title:"Transactions",entities:f.slice(0,100),emptyState:(0,s.jsx)(h,{})})]})})}function p(){return(0,s.jsx)(v,{})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=69171)}),_N_E=e.O()}]);