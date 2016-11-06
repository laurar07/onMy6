
const React = require('react-native');

const { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    flex: 1,
    alignItems: 'center',
  },
  bottombar: {
    width: 380,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  mt: {
    marginTop: 20,
  },
  btncat: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#272822',
    color: 'white',
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  pair: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
  },
  item: {
    backgroundColor: '#6696c8',
    margin: 10,
    width: 150,
    height: 150,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});
