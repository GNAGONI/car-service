import React from 'react'
import renderer from 'react-test-renderer'
import InviteCustometWidget from '../../components/widgets/inviteCustometWidget'

it('renders correctly', () => {
  const tree = renderer.create(<InviteCustometWidget />).toJSON()
  expect(tree).toMatchSnapshot()
})
