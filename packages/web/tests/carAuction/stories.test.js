import React from 'react'
import renderer from 'react-test-renderer'
import Stories from '../../components/carAuction/stories'

it('renders correctly', () => {
  const tree = renderer.create(<Stories />).toJSON()
  expect(tree).toMatchSnapshot()
})
