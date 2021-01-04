// import { createStackNavigator} from 'react-navigation-stack';
// import Home from '../screens/home.js';
// import Categories from '../screens/categories.js';
// import Header from '../shared_components/header.js';
// import React from 'react';

// const screens = {
//   Home: {
//     screen: Home,
//     navigationOptions: ({navigation}) => {
//       return {
//         headerTitle: () => <Header navigation={navigation} />
//       }
//     }
//     // navigationOptions: {
//     //   title: 'IceBreaker',
//     // }
//   },
//   Categories: {
//     screen: Categories,
//     navigationOptions: {
//       title: 'Pick A Category',
//     }
//   }
// }

// const HomeStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerTintColor: 'white',
//     headerStyle: {backgroundColor: '#25a5dd', height: 125},
//     headerTitleStyle: {fontSize: 22}
//   }
// });

// export default HomeStack;


////////////////////////////////////////

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