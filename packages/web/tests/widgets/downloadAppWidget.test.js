import React from 'react'
import renderer from 'react-test-renderer'
import DownloadAppWidget from '../../components/widgets/downloadAppWidget'

it('renders correctly', () => {
  const tree = renderer.create(<DownloadAppWidget />).toJSON()
  expect(tree).toMatchSnapshot()
})
