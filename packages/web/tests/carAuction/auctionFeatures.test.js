import React from 'react'
import renderer from 'react-test-renderer'
import AuctionFeatures from '../../components/carAuction/auctionFeatures'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionFeatures />).toJSON()
  expect(tree).toMatchSnapshot()
})
