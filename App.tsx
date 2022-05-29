import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Components
import Header from './components/Header';
import Home from './screens/Home';
import MovieDetailed from './screens/MovieDetailed';

export type StackParams = {
  Home;
  MovieDetailed: {
    imageUri: string;
    title: string;
  };
};
const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Header title="Application page" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieDetailed" component={MovieDetailed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
