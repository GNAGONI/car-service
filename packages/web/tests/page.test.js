import React from 'react'
import renderer from 'react-test-renderer'
import Page from '../components/page'

it('renders correctly', () => {
  const tree = renderer.create(<Page />).toJSON()
  expect(tree).toMatchSnapshot()
})
