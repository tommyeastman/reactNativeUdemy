// Import libraries to help create a component.

import React from 'react';

//import just the Text property from the react-native library
//import { Text, AppRegistry } from 'react-native';
import { Text, View } from 'react-native';

// Create a component.
//tell ReactNative that we want to render some text to the screen of our device.
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Some Text.</Text>
      </View>
    );
  }
}

// Render it to the device.
//AppRegistry.registerComponent('my-app', () => App);
