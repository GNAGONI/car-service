import React from 'react'
import renderer from 'react-test-renderer'
import Info from '../../components/carAuctionResults/commonCollapse'

it('renders correctly', () => {
  const tree = renderer.create(<Info />).toJSON()
  expect(tree).toMatchSnapshot()
})
