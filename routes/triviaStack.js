// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from 'react-navigation-stack';
// import Trivia from '../screens/trivia.js';
// import TriviaHeader from '../shared_components/triviaHeader.js';
// import React from 'react';
// import Flip from '../shared_components/flipCard.js';

// const screens = {
//   Trivia: {
//     screen: Trivia,
//     // params: {user: 'test'},
//     navigationOptions: ({navigation}) => {
//       return {
//         headerTitle: () => <TriviaHeader navigation={navigation} />
//       }
//     }
//   },
//   Questions: {
//     screen:  Flip
//   }
// }

// const TriviaStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerTintColor: 'white',
//     headerStyle: {backgroundColor: '#25a5dd', height: 100},
//     headerTitleStyle: {fontSize: 22}
//   }
// });

// export default TriviaStack;

//////////////////////////////////////////


import { createStackNavigator } from '@react-navigation/stack';
import Trivia from '../screens/trivia.js';
import React from 'react';
import Flip from '../shared_components/flipCard.js';

const Stack = createStackNavigator();

const TriviaStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Trivia"
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
        name="Trivia"
        component={Trivia}
        options={{
          title: 'Pick A Category',
        }}
      />
      <Stack.Screen
        name="Questions"
        component={Flip}
        options={{
          title: 'Trivia',
        }}
      />
    </Stack.Navigator>
  );
}

export default TriviaStack;