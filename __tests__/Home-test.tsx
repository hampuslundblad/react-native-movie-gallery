import 'react-native';
import React from 'react';
import Home from '../screens/Home';

// Comps

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

describe(Home, () => {
  it('should render MovieCards', () => {
    const page = render(<Home />);
    const header = page.getByTestId('home_movieCard');
    expect(header).toBeTruthy();
  });
});
