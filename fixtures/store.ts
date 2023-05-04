import { createStore } from './../lib'

const store = createStore<{
  count: number
  setCount: () => void
}>((get, set) => ({
  count: 0,
  setCount: () => {
    set({
      count: get().count + 1
    })
  }
}))
export default store
