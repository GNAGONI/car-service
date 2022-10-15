import React from 'react'
import renderer from 'react-test-renderer'
import AwaitingCollectionContent from 'components/awaitingCollection/awaitingCollectionContent'
import { connectTestComponentToRedux } from 'test/utils/redux'

it('Renders correctly', () => {
  const tree = renderer.create(connectTestComponentToRedux(<AwaitingCollectionContent />)).toJSON()

  expect(tree).toMatchSnapshot()
})
