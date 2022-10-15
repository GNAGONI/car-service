import React from 'react'
import renderer from 'react-test-renderer'
import Model from '../../components/carAuction/model'

it('renders correctly', () => {
  const tree = renderer.create(<Model />).toJSON()
  expect(tree).toMatchSnapshot()
})
