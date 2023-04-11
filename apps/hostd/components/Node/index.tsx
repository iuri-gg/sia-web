import { DatumCard, TxPoolList, PeerList } from '@siafoundation/design-system'
import {
  useConsensusState,
  useSyncerPeers,
  useTxPoolTransactions,
} from '@siafoundation/react-core'
import { routes } from '../../config/routes'
import { useDialog } from '../../contexts/dialog'
import { HostdSidenav } from '../HostdSidenav'
import { HostdAuthedLayout } from '../HostdAuthedLayout'

export function Node() {
  const peers = useSyncerPeers()
  const txPool = useTxPoolTransactions({
    config: {
      swr: {
        refreshInterval: 30_000,
      },
    },
  })
  const state = useConsensusState({
    config: {
      swr: {
        refreshInterval: 30_000,
      },
    },
  })
  const { openDialog } = useDialog()

  return (
    <HostdAuthedLayout
      routes={routes}
      sidenav={<HostdSidenav />}
      openSettings={() => openDialog('settings')}
      title="Node"
    >
      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-wrap gap-7">
          <DatumCard
            label="Height"
            value={
              state.data
                ? Number(state.data.BlockHeight).toLocaleString()
                : undefined
            }
            comment={!state.data?.Synced ? 'Syncing' : undefined}
          />
          <DatumCard label="Connected peers" value={peers.data?.length} />
          <DatumCard label="Transactions in pool" value={txPool.data?.length} />
        </div>
        <div className="flex flex-wrap gap-7">
          <div className="flex-1">
            <PeerList connectPeer={() => openDialog('connectPeer')} />
          </div>
          <div className="flex-1">
            <TxPoolList />
          </div>
        </div>
      </div>
    </HostdAuthedLayout>
  )
}