import React from 'react'
import renderer from 'react-test-renderer'
import SecondaryNav from 'components/secondaryNav'

it('Renders correctly', () => {
  const tree = renderer.create(<SecondaryNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
