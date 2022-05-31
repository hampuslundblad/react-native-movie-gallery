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

const renderImage = ({item}: {item: MovieResult}) => {
  var uri;
  try {
    uri = item.show.image.medium;
  } catch (error) {
    uri =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2560px-Question_Mark.svg.png';
  }

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
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
            renderItem={({item}) => {
              return (
                <MovieCard
                  movieResult={item}
                  onPress={movieResult => {
                    navigation.navigate('MovieDetailed', {
                      movieResult,
                    });
                    console.log('Yes u clicked :)');
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