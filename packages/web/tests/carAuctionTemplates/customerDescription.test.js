import React from 'react'
import renderer from 'react-test-renderer'
import CustomerDescription from '../../components/carAuctionTemplates/customerDescription'

it('renders correctly', () => {
  const tree = renderer.create(<CustomerDescription />).toJSON()
  expect(tree).toMatchSnapshot()
})
