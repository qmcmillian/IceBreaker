import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './routes/drawer.js';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './routes/tabNav.js';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Kalam-Regular': require('./assets/fonts/Kalam/Kalam-Regular.ttf'),
    'Nunito-Regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf')
  });

    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <TabNavigator/>
        // <DrawerNavigation/>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
