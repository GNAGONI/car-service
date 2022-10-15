import React from 'react'
import renderer from 'react-test-renderer'
import AuctionSearchFilter from 'components/carAuctionResults/auctionSearchFilter'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionSearchFilter />).toJSON()
  expect(tree).toMatchSnapshot()
})
