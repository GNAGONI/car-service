import React from 'react'
import renderer from 'react-test-renderer'
import AuctionFilter from '../../components/carAuction/auctionFilter'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionFilter />).toJSON()
  expect(tree).toMatchSnapshot()
})
