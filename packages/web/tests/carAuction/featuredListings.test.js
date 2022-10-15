import React from 'react'
import renderer from 'react-test-renderer'
import FeaturedListings from '../../components/featuredListings'

it('renders correctly', () => {
  const tree = renderer.create(<FeaturedListings />).toJSON()
  expect(tree).toMatchSnapshot()
})
