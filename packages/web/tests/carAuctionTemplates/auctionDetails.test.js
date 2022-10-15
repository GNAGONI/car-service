import React from 'react'
import renderer from 'react-test-renderer'
import AuctionDetails from 'components/carAuctionTemplates/auctionDetails'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionDetails />).toJSON()
  expect(tree).toMatchSnapshot()
})
