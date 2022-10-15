import React from 'react'
import renderer from 'react-test-renderer'
import PaginationSection from '../../components/carAuctionResults/paginationSection'

it('renders correctly', () => {
  const tree = renderer.create(<PaginationSection auctionsPerPageOptions={[]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
