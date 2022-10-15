import React from 'react'
import renderer from 'react-test-renderer'
import LoadMore from 'components/loadMore'

it('Renders correctly', () => {
  const tree = renderer.create(<LoadMore />).toJSON()
  expect(tree).toMatchSnapshot()
})
