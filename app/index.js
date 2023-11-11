import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home/HomeScreen'; 
import StoryDetails from './components/map/StoryDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StoryDetails" component={StoryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
