import React from 'react'
import renderer from 'react-test-renderer'
import Countdown from 'components/countdown'

it('Renders correctly', () => {
  const tree = renderer.create(<Countdown />).toJSON()
  expect(tree).toMatchSnapshot()
})
