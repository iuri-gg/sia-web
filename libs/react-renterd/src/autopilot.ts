import { AutopilotConfig, Host } from './siaTypes'
import { HostsSearchPayload, StateResponse } from './bus'
import {
  useGetSwr,
  usePostSwr,
  usePutFunc,
  HookArgsSwr,
  HookArgsCallback,
  HookArgsWithPayloadSwr,
  delay,
  usePostFunc,
} from '@siafoundation/react-core'

type AutopilotStatus = {
  configured: boolean
  migrating: boolean
  migratingLastStart: string
  scanning: boolean
  scanningLastStart: string
  synced: boolean
  uptimeMS: string
}

type AutopilotState = AutopilotStatus & StateResponse

const autopilotStateKey = '/autopilot/state'

export function useAutopilotState(args?: HookArgsSwr<void, AutopilotState>) {
  return useGetSwr({
    ...args,
    route: autopilotStateKey,
  })
}

const autopilotConfigKey = '/autopilot/config'
export function useAutopilotConfig(args?: HookArgsSwr<void, AutopilotConfig>) {
  return useGetSwr({
    ...args,
    route: autopilotConfigKey,
  })
}

export function useAutopilotConfigUpdate(
  args?: HookArgsCallback<void, AutopilotConfig, void>
) {
  return usePutFunc({ ...args, route: autopilotConfigKey }, async (mutate) => {
    mutate((key) => key === autopilotConfigKey)
    // might need a delay before revalidating status which returns whether
    // or not autopilot is configured
    const func = async () => {
      await delay(1000)
      mutate((key) => key === autopilotStateKey)
    }
    func()
  })
}

export type AutopilotHost = {
  host: Host
  checks?: {
    score: number
    scoreBreakdown: {
      age: number
      collateral: number
      interactions: number
      storageRemaining: number
      prices: number
      uptime: number
      version: number
    }
    unusableReasons: string[]
    gougingBreakdown: {
      contractErr?: string
      downloadErr?: string
      gougingErr?: string
      uploadErr?: string
    }
    gouging: boolean
    usable: boolean
  }
}

export const autopilotHostsKey = '/autopilot/hosts'

export function useAutopilotHostsSearch(
  args?: HookArgsWithPayloadSwr<void, HostsSearchPayload, AutopilotHost[]>
) {
  return usePostSwr({
    ...args,
    route: autopilotHostsKey,
  })
}

export function useAutopilotTrigger(
  args?: HookArgsCallback<void, { forceScan: boolean }, { triggered: boolean }>
) {
  return usePostFunc({
    ...args,
    route: '/autopilot/trigger',
  })
}
