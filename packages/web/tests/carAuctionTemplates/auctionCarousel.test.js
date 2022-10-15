import React from 'react'
import renderer from 'react-test-renderer'
import AuctionCarousel from '../../components/carAuctionTemplates/auctionCarousel'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionCarousel images={[]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
