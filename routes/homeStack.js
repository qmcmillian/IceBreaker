import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/home.js';
import Categories from '../screens/categories.js';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#25a5dd',height: 125 },
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontSize: 26,
          textShadowColor: "black",
          textShadowRadius: 3
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'IceBreaker',
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'Break The Ice',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;