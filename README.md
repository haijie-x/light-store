# light-storer

Light store based on React, inspired by Zustand

# Installation

```bash
yarn add light-storer --save-dev
# or
npm install light-storer --save-dev
# or
pnpm install light-storer --save-dev
```

# Features

1. Only have one dependency `use-sync-external-store` which is the shim of react
   hooks of version v18 `useSyncExternalStore`.
2. It can create multiple stores and is easy to manage stores.
3. The shim of `useSyncExternalStore` support selector to avoid unnecessary
   rerendering. But it does not support when your react version >=18 and it will
   use built-in hooks called `useSyncExternalStore` to implement reactive
   updates.

# Usage Example

`store.ts`

```js
import { createStore } from 'light-storer'

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
```

`Foo.tsx`

```jsx
import React, { FC } from 'react'
import { useStore } from 'light-storer'
import store from './store'
const Foo: FC = () => {
  const { count, setCount } = useStore(store)
  return (
    <>
      <h2>{count}</h2>
      <button onClick={setCount}>+1</button>
    </>
  )
}
export default Foo
```

`Bar.tsx`

```jsx
import React, { FC } from 'react'
import { useStore } from 'light-storer'
import store from './store'

const Bar: FC = () => {
  const { count } = useStore(store)
  return (
    <>
      <h2>{count}</h2>
    </>
  )
}

export default Bar
```
