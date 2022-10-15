import React from 'react'
import renderer from 'react-test-renderer'
import SectionHeader from 'components/sectionHeader'

it('Renders correctly', () => {
  const tree = renderer.create(<SectionHeader />).toJSON()
  expect(tree).toMatchSnapshot()
})
