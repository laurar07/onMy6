
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight / 1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    bottom: 0,
  },
  input: {
    marginBottom: 20,
  },
  newuser: {
    marginTop: 20,
    flexDirection: 'row',
  },
  newusertxt: {
    width: 100,
    fontSize: 20,
  },
  newuserbtn: {
    width: 250,
  },
  loginbtn: {
    marginTop: 20,
    width: 350,
    alignItems: 'center',
  },
});
