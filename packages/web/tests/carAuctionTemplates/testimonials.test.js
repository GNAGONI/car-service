import React from 'react'
import renderer from 'react-test-renderer'
import Testimonials from '../../components/carAuctionTemplates/testimonials'

it('renders correctly', () => {
  const tree = renderer.create(<Testimonials />).toJSON()
  expect(tree).toMatchSnapshot()
})
