// Import libraries to help create a component.

import React from 'react';

//import just the Text property from the react-native library
import { Text } from 'react-native';

// Create a component and render it to the screen.
//tell ReactNative that we want to render some text to the screen of our device.
export default class App extends React.Component {
  render() {
    return (
        <Text>Some text.</Text>
    );
  }
}
