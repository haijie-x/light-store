import React from 'react'
import useSyncExternalStoreExports from 'use-sync-external-store/shim/with-selector'
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports

type StoreApi<T> = {
  state: T
  setState: (
    val: Partial<T> | T | { _(_state: T): T | Partial<T> }['_']
  ) => void
  getState: () => T
  subscribe: (listener: (...args: unknown[]) => void) => () => void
}

type CreateStore = <T>(
  createState: (get: StoreApi<T>['getState'], set: StoreApi<T>['setState']) => T
) => StoreApi<T>

export const createStore: CreateStore = createState => {
  type State = ReturnType<typeof createState>
  const listeners: Set<() => void> = new Set()
  const getState: StoreApi<State>['getState'] = () => state
  const setState: StoreApi<State>['setState'] = val => {
    const prev = state
    const next =
      typeof val === 'function'
        ? (val as (_state: State) => State | Partial<State>)(state)
        : val
    if (!Object.is(prev, next)) {
      state = Object.assign({}, prev, next)
      listeners.forEach(l => l?.())
    }
  }
  const subscribe: StoreApi<State>['subscribe'] = listener => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  let state: StoreApi<State>['state'] = createState?.(getState, setState)
  const api = {
    state,
    setState,
    getState,
    subscribe
  }
  return api
}

export const useStore = <T, U>(
  api: StoreApi<T>,
  selector?: (state: StoreApi<T>['state']) => U
) => {
  let slice: StoreApi<T>['state'] | typeof selector extends (
    ...args: any[]
  ) => any
    ? Partial<StoreApi<T>['state']>
    : StoreApi<T>['state']

  if (typeof React.useSyncExternalStore === 'undefined') {
    selector = (selector ?? api.getState) as any
    slice = useSyncExternalStoreWithSelector<StoreApi<T>['state'], U>(
      api.subscribe,
      api.getState,
      () => {
        return (
          window as unknown as typeof globalThis & {
            __INIT_DATA__: T
          }
        ).__INIT_DATA__
      },
      selector!
    ) as any
  } else {
    if (selector) {
      console.warn(
        'Sorry to tell you, it does not support `selector` params. Because it use `useSyncExternalStore` api which is built in react v18+'
      )
    }
    slice = React.useSyncExternalStore<StoreApi<T>['state']>(
      api.subscribe,
      api.getState,
      () => {
        return (
          window as unknown as typeof globalThis & {
            __INIT_DATA__: T
          }
        ).__INIT_DATA__
      }
    )
  }

  return slice
}
