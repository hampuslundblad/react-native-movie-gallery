import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  errorMessage: string;
}
const ErrorComponent: React.FC<Props> = ({errorMessage}) => {
  return (
    <View>
      <Text> Oh no! Something went wrong! </Text>
      <Text> {errorMessage}</Text>
    </View>
  );
};
export default ErrorComponent;
