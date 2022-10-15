import React from 'react'
import renderer from 'react-test-renderer'
import FilterBox from '../../components/carAuction/filterBox'

it('renders correctly', () => {
  const tree = renderer.create(<FilterBox />).toJSON()
  expect(tree).toMatchSnapshot()
})
