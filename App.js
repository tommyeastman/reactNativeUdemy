// Import libraries to help create a component.

import React from 'react';

//import just the Text property from the react-native library
//import { Text, AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

// Create a component.
//tell ReactNative that we want to render some text to the screen of our device.
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Some Text.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Render it to the device.
//AppRegistry.registerComponent('my-app', () => App);
