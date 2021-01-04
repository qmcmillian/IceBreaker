import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Modal, Button, TouchableOpacity } from 'react-native';
import {globalStyles} from '../styles/global.js';
import {MaterialIcons} from '@expo/vector-icons';
import questionData from '../data/question.js';

const Categories = () => {
  const [displayModal, openModal] = useState(false);
  const [questions, setQuestions] = useState(questionData);
  const [modalQuestion, setModalTitle] =  useState('');

  return (
    <View style={globalStyles.container}>

      <Modal
        visible={displayModal}
        animationType='fade'
        transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.text}>{modalQuestion}</Text>
            <MaterialIcons name='close' size={28} onPress={() => openModal(false)} style={styles.close}/>
          </View>
        </View>
      </Modal>

      <FlatList
        data={questions}
        renderItem={({item}) => (
        <TouchableOpacity onPress={() => {
          const questionAmount =  item.questions.length;
          const random = Math.floor(Math.random() * (questionAmount - 1 + 1))
          setModalTitle(item.questions[random])
          openModal(true)
        }}>
          <View style={globalStyles.itemContainer}>
            <Text style={globalStyles.itemText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: 'Kalam-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  modalView: {
    position: 'relative',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 8
  }
});