import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {StackParams} from '../App';

type Props = NativeStackScreenProps<StackParams, 'MovieDetailed'>;
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

const MovieDetailed = ({route}: Props) => {
  var imageUri = CheckIfImageIsNull(route.params.movieResult);
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri: imageUri}}
        testID="movieDetailed_image"
      />
      <Text testID="movieDetailed_titleText">
        {route.params.movieResult.show.name}
      </Text>
      <Text testID="'movieDetailed_rating">
        {'Rating: ' + route.params.movieResult.show.rating.average}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

export default MovieDetailed;
