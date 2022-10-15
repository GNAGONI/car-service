import React from 'react'
import renderer from 'react-test-renderer'
import AuctionsFilterForm from 'components/auctionsFilterForm'

it('renders correctly', () => {
  const tree = renderer.create(<AuctionsFilterForm sortByOptions={[]} onSubmit={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})
