import React from 'react'
import renderer from 'react-test-renderer'
import NewsWidget from '../../components/widgets/newsWidget'

it('renders correctly', () => {
  const tree = renderer.create(<NewsWidget />).toJSON()
  expect(tree).toMatchSnapshot()
})
