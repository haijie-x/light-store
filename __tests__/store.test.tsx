import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Foo from '../fixtures/Foo'
import React from 'react'
import Bar from '../fixtures/Bar'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

describe('init', () => {
  test('renders component with correct text', () => {
    render(<Foo />)
    const count = screen.getByTestId('foo')
    expect(count).toHaveTextContent('0')
    fireEvent.click(screen.getByText('+1'))
    expect(count).toHaveTextContent('1')
  })
})

describe('test store', () => {
  test('share count between Bar and Foo', () => {
    render(<Foo />)
    render(<Bar />)
    const BarCount = screen.getByTestId('foo')
    expect(BarCount).toHaveTextContent('0')
    fireEvent.click(screen.getByText('+1'))
    expect(BarCount).toHaveTextContent('1')
  })
})
