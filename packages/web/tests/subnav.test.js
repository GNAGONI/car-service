import React from 'react'
import renderer from 'react-test-renderer'
import subnav from 'components/subnav'

it('renders correctly', () => {
  const tree = renderer.create(<subnav />).toJSON()
  expect(tree).toMatchSnapshot()
})
