import React from 'react'
import renderer from 'react-test-renderer'
import AwaitingCollectionList from 'components/awaitingCollection/awaitingCollectionList'

it('Renders correctly', () => {
  const tree = renderer.create(<AwaitingCollectionList />).toJSON()

  expect(tree).toMatchSnapshot()
})
