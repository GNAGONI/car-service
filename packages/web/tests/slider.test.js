import React from 'react'
import renderer from 'react-test-renderer'
import Slider from '../components/slider'

it('renders correctly', () => {
  const tree = renderer.create(<Slider />).toJSON()
  expect(tree).toMatchSnapshot()
})
