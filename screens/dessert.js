import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput,Text,View,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';

const Dessert = () => {
  const [dessertsList, setDessertList] = useState([]);
  const [text, setText] = useState('');

  const submitZip = (zip) =>{

  }

  const findDesserts = () => {
    return fetch(
      'https://developers.zomato.com/api/v2.1/search?entity_id=3861&entity_type=city&count=20&cuisines=233',
      {
        headers: {
          'Content-Type': 'application/json',
          'user-key': '73ceed205746d438316bf2a6d9957edc',
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('data:', responseJson);
        setDessertList(responseJson.restaurants)
      })
      .catch((error) => console.log(error));
  }

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: '#C6E2FF', borderWidth: 3 }}
        placeholder="Enter zipcode"
        onChangeText={text => setText(text)}
        defaultValue={text}
        keyboardType={'default'}
        blurOnSubmit={true}
        returnKeyType={"done"}
      />
        <TouchableOpacity
        style={styles.submitButton}
        onPress={()=>{ findDesserts() }}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        {/* <FlatList
          data={dessertsList}
          renderItem={({item}) => (
            <Text>item.name</Text>
          )}
        /> */}
    </View>
  )
}

export default Dessert;

const styles = StyleSheet.create({
  submitButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center'
  }
});