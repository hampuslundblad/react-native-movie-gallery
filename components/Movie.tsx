import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

interface Props {
  uri: string;
}

const Movie: React.FC<Props> = ({uri}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: uri}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
export default Movie;
