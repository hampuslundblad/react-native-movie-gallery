import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  imageUri: string;
  title: string;
  onPress: (imageUri: string, title: string) => void;
}
const MovieCard: React.FC<Props> = ({imageUri, title, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(imageUri, title)}>
      <View>
        <Image style={styles.image} source={{uri: imageUri}} />
        <Text>Title: {title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default MovieCard;
