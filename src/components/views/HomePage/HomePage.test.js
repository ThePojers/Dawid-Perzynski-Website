import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('Component OrderOption', () => {
  it('renders without crashing', () => {
    shallow(<HomePage />);
  });
});
