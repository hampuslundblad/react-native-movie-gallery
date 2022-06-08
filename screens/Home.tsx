import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';

import {MovieResult} from '../models/MovieResult';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../App';
import MovieCard from '../components/MovieCard';
import axios, {AxiosResponse} from 'axios';

const Home = ({}) => {
  const [movieData, setMovieData] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const getMovies = () => {
    axios
      .get<MovieResult[]>('https://api.tvmaze.com/search/shows?q=zombie')
      .then(setLoading(false))
      .then((response: AxiosResponse) => {
        setMovieData(response.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            style={styles.flatList}
            data={movieData}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <MovieCard
                  movieResult={item}
                  onPress={movieResult => {
                    navigation.navigate('MovieDetailed', {
                      movieResult,
                    });
                  }}
                />
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {flexGrow: 0},
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    height: 100,
    width: 100,
  },
});
export default Home;
