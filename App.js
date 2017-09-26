// Import libraries and local files.
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create App component and render it to the screen.
// Nest Header and AlbumList components inside.
class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <View>
          <AlbumList />
        </View>
      </View>
    );
  }
}

export default App;
