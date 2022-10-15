import React from 'react'
import renderer from 'react-test-renderer'
import SubHeader from '../components/subHeader'

it('renders correctly', () => {
  const tree = renderer.create(<SubHeader />).toJSON()
  expect(tree).toMatchSnapshot()
})
