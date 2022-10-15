import React from 'react'
import renderer from 'react-test-renderer'
import Regions from 'containers/carAuctionResults/regions'
import { connectTestComponentToRedux } from 'test/utils/redux'

it('renders correctly', () => {
  const tree = renderer.create(connectTestComponentToRedux(<Regions />)).toJSON()
  expect(tree).toMatchSnapshot()
})
