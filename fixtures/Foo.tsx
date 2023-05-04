import React, { FC } from 'react'
import { useStore } from '../lib'
import store from './store'

const Foo: FC = () => {
  const { count, setCount } = useStore(store)
  return (
    <>
      <h2 data-testid="foo">{count}</h2>
      <button onClick={setCount}>+1</button>
    </>
  )
}

export default Foo
