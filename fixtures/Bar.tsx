import React, { FC } from 'react'
import { useStore } from '../lib'
import store from './store'

const Bar: FC = () => {
  const { count } = useStore(store)
  return (
    <>
      <h2 data-testid="bar">{count}</h2>
    </>
  )
}

export default Bar
