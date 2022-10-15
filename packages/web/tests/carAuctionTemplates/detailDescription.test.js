import React from 'react'
import renderer from 'react-test-renderer'
import DetailDescription from '../../components/carAuctionTemplates/detailDescription'

it('renders correctly', () => {
  const tree = renderer.create(<DetailDescription />).toJSON()
  expect(tree).toMatchSnapshot()
})
