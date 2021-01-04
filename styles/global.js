import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    backgroundColor: '#B9D9EB'
  },
  titleText: {
    fontSize: 18,
  },
  itemContainer: {
    backgroundColor: '#25a5dd',
    width: 275,
    textAlign: 'center',
    padding: 20,
    borderRadius: 20,
    margin: 10,
    borderWidth: 2.5,
    borderColor: '#D3D3D3',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemText: {
    fontSize: 26,
    margin: 7.5,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5
  },
});