import React from 'react'
import renderer from 'react-test-renderer'
import Blog from '../../components/carAuction/blog'

it('renders correctly', () => {
  const tree = renderer.create(<Blog />).toJSON()
  expect(tree).toMatchSnapshot()
})
