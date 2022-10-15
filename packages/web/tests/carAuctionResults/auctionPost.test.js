import React from 'react'
import renderer from 'react-test-renderer'
import AuctionPost from '../../components/carAuctionResults/auctionPost'

it('renders correctly', () => {
  const tree = renderer
    .create(<AuctionPost images={[]} name="TestName" price={123} numberOfBids={321} timeRemaining="1" />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
