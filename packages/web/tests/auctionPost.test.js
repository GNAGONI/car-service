import React from 'react'
import renderer from 'react-test-renderer'
import AuctionPost from '../components/carAuctionResults/auctionPost'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionPost />).toJSON()

  expect(tree).toMatchSnapshot()
})
