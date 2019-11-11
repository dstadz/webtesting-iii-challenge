// Test away
import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls'



test('Controls rendering', () =>{
  expect(render(<Controls />)).toMatchSnapshot();
})

test("unlock => lock ", () => {
  const toggleLock = jest.fn()
  const { getByText } = render(
    <Controls toggleLocked = { toggleLock } locked={false} />
  )
  fireEvent.click(getByText(/close gate/i))
  expect(toggleLock).toHaveBeenCalled()
})