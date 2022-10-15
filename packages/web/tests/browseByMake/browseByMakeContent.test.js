import React from 'react'
import renderer from 'react-test-renderer'
import BrowseByMakeContent from 'containers/browseByMake/browseByMakeContentContainer'
import { connectTestComponentToRedux } from 'test/utils/redux'

it('Renders correctly', () => {
  const tree = renderer.create(connectTestComponentToRedux(<BrowseByMakeContent />)).toJSON()

  expect(tree).toMatchSnapshot()
})
