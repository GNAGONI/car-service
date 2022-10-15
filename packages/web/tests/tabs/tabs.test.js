import React from 'react'
import renderer from 'react-test-renderer'
import Tabs from '../../components/tabs/tabs'

it('renders correctly', () => {
  const tree = renderer.create(<Tabs />).toJSON()
  expect(tree).toMatchSnapshot()
})
