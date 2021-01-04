import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, Button} from 'react-native';
import {globalStyles} from '../styles/global.js';
import FlipCard from 'react-native-flip-card';
import Flip from '../shared_components/flipCard.js';

class Trivia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList: [],
      isVisible: false,
      triviaQuestion: '',
      triviaAnswer: ''
    }
  }

  componentDidMount() {
    Promise.all([
      fetch('https://jservice.io/api/clues?value=200&category=21'), // Animals
      fetch('https://jservice.io/api/clues?value=200&category=7'), // Us Cities
      fetch('https://jservice.io/api/clues?value=200&category=253'), // Food & Drink
      fetch('https://jservice.io/api/clues?value=200&category=105'), // 3 Letter Word
      fetch('https://jservice.io/api/clues?value=200&category=897'), // Body Language
      fetch('https://jservice.io/api/clues?value=200&category=176') // Business and Industry
    ])
    .then(([res1, res2, res3, res4, res5,res6]) => Promise.all([res1.json(), res2.json(),res3.json(),res4.json(),res5.json(),res6.json()]))
    .then(([animalQuestions, citiesQuestions, foodQuestions, threeLetterQuestions, bodyQuestions, businessQuestions]) => {
      this.setState({
        categoryList:[
        {title: 'Animals', key: '1', question: animalQuestions},
        {title: 'U.S Cities', key:'2', question: citiesQuestions},
        {title: 'Food and Drinks', key: '3', question: foodQuestions},
        {title: '3 Letter Words', key: '4', question: threeLetterQuestions},
        {title: 'Body Language', key: '5', question: bodyQuestions},
        {title: 'Business and Industry', key:'6', question: businessQuestions}
        ]
      })
    })
  }

  openQuestion(question) {
    this.props.navigation.navigate('Questions', {
      trivia: question
    })
  }

  render () {
    return (
      <View style={globalStyles.container}>
        <FlatList
          data={this.state.categoryList}
          renderItem={({item}) => (
          <TouchableOpacity onPress={()=> {
            const questionAmount =  item.question.length;
            const random = Math.floor(Math.random() * (questionAmount - 1 + 1));
            const question = item.question[random];
            const answer = item.question[answer];
            this.openQuestion(question)}}>
            <View style={globalStyles.itemContainer}>
              <Text style={globalStyles.itemText} >{item.title}</Text>
            </View>
          </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Trivia;
