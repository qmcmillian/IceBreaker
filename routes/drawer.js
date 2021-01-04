import {createDrawerNavigator} from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack.js';
import TriviaStack from './triviaStack.js';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack
  },
  Trivia: {
    screen: TriviaStack
  }
})

export default createAppContainer(RootDrawerNavigator);


// const Drawer = createDrawerNavigator()

// const DrawerNav = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeStack} />
//         <Drawer.Screen name="Trivia" component={TriviaStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }


// export default DrawerNav;