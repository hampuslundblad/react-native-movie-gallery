import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MovieResult from '../models/MovieResult';
//import {CheckIfImageIsNull} from '../utility/utilityfunctions';
interface Props {
  movieResult: MovieResult;
  onPress: (movieResult: MovieResult) => void;
}
const CheckIfImageIsNull = (movieResult: MovieResult) => {
  var imageUri;
  var defaultImageUri =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/2560px-Question_Mark.svg.png';
  try {
    imageUri = movieResult.show.image.medium;
  } catch (error) {
    imageUri = defaultImageUri;
  }
  return imageUri;
};

const MovieCard: React.FC<Props> = ({movieResult, onPress}) => {
  var imageUri = CheckIfImageIsNull(movieResult);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(movieResult)}
      testID="home_movieCard">
      <View>
        <Image style={styles.image} source={{uri: imageUri}} />
        <Text>Title: {movieResult.show.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default MovieCard;
