// Test away
import React from 'react'
import { render } from '@testing-library/react';
import Dashboard from './Dashboard'
import Display from '../display/Display'
import Controls from '../controls/Controls'


test("Dashoard renders", () => {
  render(<Dashboard />)
})
test("Controls renders", () => {
  render(<Controls />)
})
test("Display  renders", () => {
  render(<Display />)
})