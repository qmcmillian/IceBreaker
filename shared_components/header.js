import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const Header = ({navigation}) => {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
      <View>
        <Text style={styles.headerText}>IceBreaker</Text>
      </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 1,
    color: 'white',
    fontFamily: 'Nunito-Regular'
  },
  icon: {
    position: 'absolute',
    left: -40,
    color: 'white',
    // alignSelf: 'flex-end'
  }
})