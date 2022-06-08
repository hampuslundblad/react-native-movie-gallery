import 'react-native';
import React from 'react';
import Home from '../screens/Home';

// Comps

// Note: test renderer must be required after react-native.
//import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import MovieDetailed from '../screens/MovieDetailed';
import MovieResult from '../models/MovieResult';
const MovieData: MovieResult = {
  score = 'hej',
};

// Need to mock moviedata as prop somehow.
describe(MovieDetailed, () => {
  it('should render MovieCards', () => {
    const page = render(<MovieDetailed navigation={MovieData} />);
    const header = page.getByTestId('home_movieCard');
    expect(header).toBeTruthy();
  });
});
