import 'react-native';
import React from 'react';
import App from '../App';

// Comps

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';

describe(App, () => {
  it('should render header', () => {
    const page = render(<App />);
    const header = page.getByTestId('app_header');
    expect(header).toBeTruthy();
  });
});
