import React from 'react'
import renderer from 'react-test-renderer'
import EndingSoon from '../../components/carAuction/endingSoon'

it('renders correctly', () => {
  const tree = renderer.create(<EndingSoon />).toJSON()
  expect(tree).toMatchSnapshot()
})
