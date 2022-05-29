import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {MovieResult} from '../models/MovieResult';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackParams} from '../App';
import MovieCard from '../components/MovieCard';
import axios, {AxiosResponse} from 'axios';
import Movie from '../components/Movie';

//type Props = NativeStackNavigationProp<StackParams, 'Home'>;

const renderImage = (item: MovieResult) => {
  console.log('From renderimage', item.show.image.medium);
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: item.show.image.medium}} />
    </View>
  );
};

const Home = ({}) => {
  const [movieData, setMovieData] = useState<MovieResult[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const getMovies = () => {
    console.log('Started api call');
    axios
      .get<MovieResult[]>('https://api.tvmaze.com/search/shows?q=girls')
      .then(setLoading(false))
      .then((response: AxiosResponse) => {
        setMovieData(response.data);
      })
      .then(console.log('sDone :)'))
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
            renderItem={({item}) => renderImage(item)}
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
    resizeMode: 'cover',
  },
});
export default Home;
