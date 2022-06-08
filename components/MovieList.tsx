import React from 'react';
import {StackParams} from '../App';
import {MovieResult} from '../models/MovieResult';
import MovieCard from '../components/MovieCard';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  movieData: MovieResult[];
}

const MovieList: React.FC<Props> = ({movieData}) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  return (
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
export default MovieList;
