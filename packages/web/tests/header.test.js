import React from 'react';
import renderer from 'react-test-renderer';
import { DefaultHeader } from '../components/Header';

it('renders correctly', () => {
  const tree = renderer.create(<DefaultHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
