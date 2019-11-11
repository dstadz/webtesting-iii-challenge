// Test away!
// Test away
import React from 'react'
import { render } from '@testing-library/react';
import Display from '../display/Display'


test("Dashoard renders", () => {
  render(<Display/>)
})

//- displays if gate is open/closed and if it is locked/unlocked
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
test('show "Open" if closed=false', () => {
  const { getByText } = render(<Display closed={false} />)
  expect(getByText('Open'))
})

//check if red/green when needed
test('have class "red-led" if locked=true', () => {
  const { container } = render(<Display locked={true} />)
  expect(container.contains('red-led')).toBe(true)
})
