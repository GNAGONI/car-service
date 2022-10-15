import React from 'react'
import renderer from 'react-test-renderer'
import BrowseByMakeHeader from 'components/browseByMake/browseByMakeHeader'
import { connectTestComponentToRedux } from 'test/utils/redux'

it('Renders correctly', () => {
  const tree = renderer.create(connectTestComponentToRedux(<BrowseByMakeHeader />)).toJSON()

  expect(tree).toMatchSnapshot()
})
