import React from 'react'
import renderer from 'react-test-renderer'
import RatingStars from 'components/ratingStars'

it('Renders correctly', () => {
  const tree = renderer.create(<RatingStars />).toJSON()
  expect(tree).toMatchSnapshot()
})
