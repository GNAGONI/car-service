import React from 'react'
import renderer from 'react-test-renderer'
import AsideRecomended from '../../components/carAuction/asideRecomended'

it('renders correctly', () => {
  const tree = renderer.create(<AsideRecomended />).toJSON()
  expect(tree).toMatchSnapshot()
})
