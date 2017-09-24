// Import libraries and local files.
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component and render it to the screen.
// Nest header component inside.
class App extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText={'Here we go'} />
        <AlbumList />
      </View>
    );
  }
}

//style
const styles = {
  viewStyle: {
    height: 600,
    backgroundColor: '#f4bb41',
  }
};

export default App;
