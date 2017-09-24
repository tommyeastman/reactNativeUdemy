// Import libraries and local files.
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import albumList from './src/components/AlbumList';

// Create a component and render it to the screen.
// Nest header component inside.
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Here we go'} />
        <albumList />
      </View>
    );
  }
}
