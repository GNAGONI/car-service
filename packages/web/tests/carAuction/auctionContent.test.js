import React from 'react'
import renderer from 'react-test-renderer'
import AuctionContent from '../../components/carAuction/auctionContent'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionContent />).toJSON()
  expect(tree).toMatchSnapshot()
})
