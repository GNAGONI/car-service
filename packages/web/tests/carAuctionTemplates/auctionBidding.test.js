import React from 'react'
import renderer from 'react-test-renderer'
import AuctionBidding from '../../components/carAuctionTemplates/auctionBidding'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AuctionBidding
        distance={{
          postcode: '',
          distance: '',
        }}
        preferredCollectionTime={[]}
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
