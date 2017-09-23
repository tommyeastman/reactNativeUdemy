// Import libraries and local files.
import React from 'react';
import Header from './src/components/header';

// Create a component and render it to the screen.
// Nest header component inside.
export default class App extends React.Component {
  render() {
    return (
        <Header />
    );
  }
}
