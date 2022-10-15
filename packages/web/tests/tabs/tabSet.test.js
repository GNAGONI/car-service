import React from 'react'
import renderer from 'react-test-renderer'
import TabSet from '../../components/tabs/tabSet'

it('renders correctly', () => {
  const tree = renderer.create(<TabSet />).toJSON()
  expect(tree).toMatchSnapshot()
})
