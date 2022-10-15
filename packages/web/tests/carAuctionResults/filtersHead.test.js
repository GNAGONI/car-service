import React from 'react'
import renderer from 'react-test-renderer'
import FiltersHead from '../../components/carAuctionResults/filtersHead'

it('renders correctly', () => {
  const tree = renderer.create(<FiltersHead />).toJSON()
  expect(tree).toMatchSnapshot()
})
