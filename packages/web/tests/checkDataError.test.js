import React from 'react'
import renderer from 'react-test-renderer'
import CheckDataError from 'components/checkDataError'

it('Renders correctly', () => {
  const tree = renderer.create(<CheckDataError />).toJSON()
  expect(tree).toMatchSnapshot()
})
