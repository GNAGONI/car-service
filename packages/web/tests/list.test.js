import React from 'react'
import renderer from 'react-test-renderer'
import List from 'components/list'

it('Renders correctly', () => {
  const tree = renderer.create(<List />).toJSON()
  expect(tree).toMatchSnapshot()
})
