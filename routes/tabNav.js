// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {createAppContainer} from 'react-navigation';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import HomeStack from './homeStack.js';
// import TriviaStack from './triviaStack.js';

// const BottomTabNavigator = createBottomTabNavigator({
//   Home: {
//     screen: HomeStack
//   },
//   Trivia: {
//     screen: TriviaStack
//   }
// });

// export default createAppContainer(BottomTabNavigator);

///////////////////////////////////////////////////////////

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome5';


import HomeStack from './homeStack.js';
import TriviaStack from './triviaStack.js';
import DessertStack from './dessertStack.js';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      inactiveColor="#B0B0B0"
      barStyle={{ backgroundColor: '#25a5dd' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="snow-outline" color={color} size={26}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Trivia"
        component={TriviaStack}
        options={{
          tabBarLabel: 'Trivia',
          tabBarIcon: ({ color }) => (
            <Icon name="help-outline" color={color} size={26}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Finder"
        component={DessertStack}
        options={{
          tabBarLabel: 'Finder',
          tabBarIcon: ({ color }) => (
            <FontIcon name="ice-cream" color={color} size={26}></FontIcon>
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

export default BottomTabNavigator;