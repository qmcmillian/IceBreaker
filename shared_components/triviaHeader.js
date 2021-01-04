import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const TriviaHeader = ({navigation}) => {
  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View>
        <Text style={styles.headerText}>Trivia</Text>
      </View>
    </View>
  )
}

export default TriviaHeader;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    color: 'white'
  },
  icon: {
    position: 'absolute',
    left: -65,
    color: 'white'
  }
})