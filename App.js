// Import libraries to help create a component.
//import keyword introduced in ES6.

//React is used to instruct components how to behave and interact with each other
import React from 'react';
//ReactNative is used to display components on the screen and build default core components
//import just the Text property from the react-native library
import { Text, AppRegistry } from 'react-native';

// Create a component.
//tell ReactNative that we want to render some text to the screen of our device.
//block statement is unnecessary with this arrow function so will shorthand it.
//original:
/*
const App = () => {
  return (
    <Text>Some Text.</Text>
  );
};
*/
//modified:
const App = () => (
  <Text>Some Text.</Text>
);

// Render it to the device.
// use implicit return from arrow function
AppRegistry.registerComponent('my-app', () => App);
