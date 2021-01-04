import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dessert from '../screens/dessert.js'


const Stack = createStackNavigator();

const DessertStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Finder"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#25a5dd',height: 125 },
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen
        name="Finder"
        component={Dessert}
        options={{
          title: 'Dessert Finder',
        }}
      />
    </Stack.Navigator>
  );
}

export default DessertStack;