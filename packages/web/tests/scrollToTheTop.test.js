import React from 'react'
import renderer from 'react-test-renderer'
import ScrollToTheTop from 'components/scrollToTheTop'

it('Renders correctly', () => {
  const tree = renderer.create(<ScrollToTheTop />).toJSON()
  expect(tree).toMatchSnapshot()
})
