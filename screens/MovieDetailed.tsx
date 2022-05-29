import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {StackParams} from '../App';

type Props = NativeStackScreenProps<StackParams, 'MovieDetailed'>;

const MovieDetailed = ({route}: Props) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: route.params.imageUri}} />
      <Text>{route.params.title}</Text>
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
