import React from 'react'
import renderer from 'react-test-renderer'
import CarDetails from 'components/carAuctionTemplates/carDetails'

it('renders correctly', () => {
  const tree = renderer.create(<CarDetails />).toJSON()
  expect(tree).toMatchSnapshot()
})
