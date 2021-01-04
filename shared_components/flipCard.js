import React, {Component} from 'react';
import { StyleSheet, Text, View,  Button, ImageBackground} from 'react-native';
import {globalStyles} from '../styles/global.js';
import FlipCard from 'react-native-flip-card';



const Flip = ({route, navigation}) => {
  const {answer, question} = route.params.trivia;

  return (

    <View >
        <ImageBackground
          source={require('../assets/icedOut.png')}
          style={{width:'100%',height: '100%'}}
          resizeMode={'repeat'}
          >
          <View style={styles.flipContainer}>
            <View style={styles.flipWrapper}>
              <FlipCard
              friction={6}
              perspective={600}
              flipHorizontal={true}
              flipVertical={false}
              flip={false}
              clickable={true}>
                <View style={styles.questionView} >
                  <Text style={styles.questionText}>{question + '?'}</Text>
                </View>
                <View style={styles.answerView} >
                  <Text style={styles.answerText}>{answer}</Text>
                </View>
              </FlipCard>
            </View>
          </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  flipContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipWrapper: {
    backgroundColor: 'white',
    height:200,
    width: 325,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#25a5dd",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  questionView: {
    flex: 1,
    height:250,
    width: 325,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  questionText: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: "#C8C8C8",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  answerView: {
    flex: 1,
    height:200,
    width: 325,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#25a5dd',
    borderRadius: 20,
  },
  answerText: {
    textAlign: "center",
    fontSize: 28 ,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: "black",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
})


export default Flip;