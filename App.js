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
      <View>
        <Header headerText={'Here we go'} />
        <View style={styles.viewStyle}>
        <AlbumList />
        </View>
      </View>
    );
  }
}

//style
const styles = {
  viewStyle: {
    backgroundColor: '#f4bb41', //orange
    paddingTop: 50
  }
};

export default App;
