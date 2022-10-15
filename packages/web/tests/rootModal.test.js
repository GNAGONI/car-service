import React from 'react'
import renderer from 'react-test-renderer'
import RootModal from 'components/rootModal'

it('Renders correctly', () => {
  const tree = renderer.create(<RootModal />).toJSON()
  expect(tree).toMatchSnapshot()
})
