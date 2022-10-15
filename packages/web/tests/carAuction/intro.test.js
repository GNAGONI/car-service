import React from 'react'
import renderer from 'react-test-renderer'
import Intro from 'containers/intro'
import { connectTestComponentToRedux } from 'test/utils/redux'

it('renders correctly', () => {
  const tree = renderer.create(connectTestComponentToRedux(<Intro />)).toJSON()
  expect(tree).toMatchSnapshot()
})
