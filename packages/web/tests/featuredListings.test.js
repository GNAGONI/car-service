import React from 'react'
import renderer from 'react-test-renderer'
import FeaturedListings from 'components/featuredListings'

it('Renders correctly', () => {
  const tree = renderer.create(<FeaturedListings />).toJSON()
  expect(tree).toMatchSnapshot()
})
