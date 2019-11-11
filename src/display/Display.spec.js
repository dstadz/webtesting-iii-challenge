// Test away!
// Test away
import React from 'react'
import { render } from '@testing-library/react';
import Display from './Display'


test("Dashoard renders", () => {
  render(<Display/>)
})

test('show "Locked" if locked=true', () => {
  const { getByText } = render(<Display locked={true} />)
  expect(getByText('Locked'))
})

test('show "Unlocked" if locked=false', () => {
  const { getByText } = render(<Display locked={false} />)
  expect(getByText('Unlocked'))
})

test('show "Closed" if closed=true', () => {
  const { getByText } = render(<Display closed={true} />)
  expect(getByText('Closed'))
})

test('show "Open" if closed=fasle', () => {
  const { getByText } = render(<Display closed={false} />)
  expect(getByText('Open'))
})
