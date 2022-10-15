import React from 'react'
import renderer from 'react-test-renderer'
import Breadcrumbs from 'components/breadcrumbs'

it('Renders correctly', () => {
  const tree = renderer.create(<Breadcrumbs />).toJSON()
  expect(tree).toMatchSnapshot()
})
