import React from 'react';
import { StyleSheet,TouchableOpacity, View, Image, StatusBar} from 'react-native';
import {globalStyles} from '../styles/global.js';
import { Ionicons } from '@expo/vector-icons';
import Card from '../shared_components/card.js';

const Home  = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Categories')
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
      <TouchableOpacity onPress={pressHandler}>
        <Image style={styles.image} source={require('../assets/icebreaker2.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1EBEE'
  },
  image: {
    width:300,
    height: 245,
  }
});