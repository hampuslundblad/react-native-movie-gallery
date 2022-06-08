import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import axios, {AxiosResponse, AxiosError} from 'axios';
import {MovieResult} from '../models/MovieResult';
import MovieList from './MovieList';
import ErrorComponent from './ErrorComponent';

const ApiComponent = ({}) => {
  const [movieData, setMovieData] = useState<MovieResult[]>([]);
  const [errorData, setErrorData] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const getRequestMovies = () => {
    axios
      .get<MovieResult[]>('https://api.tvmaze.com/search/shows?q=zombie')
      .then((response: AxiosResponse) => {
        setMovieData(response.data);
      })
      .catch((err: Error | AxiosError) => {
        if (axios.isAxiosError(err)) {
          setErrorData(true);
          setErrorMessage(err.message);
        } else {
          setErrorData(true);
          setErrorMessage(err.message);
        }
      });
  };

  useEffect(() => {
    getRequestMovies();
  }, []);
  return (
    <View>
      {errorData ? (
        <ErrorComponent errorMessage= {errorMessage} />
      ) : (
        <MovieList movieData={movieData} />
      )}
    </View>
  );
};

export default ApiComponent;
