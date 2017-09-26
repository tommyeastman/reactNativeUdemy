//AlbumList is basically a function to pull the data from the API
//and feed each element of the returned array into AlbumDetail as a prop

//import libraries and local files.
import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//define AlbumList as class component
class AlbumList extends React.Component {
    state = { albums: [] };

    //right before AlbumList is rendered, send http request to API then when you get a promise back,
    //set the albums piece of state to the .data object from the response.
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    //create list of AlbumDetail components
    //for each item in the albums array (which comes from the http request)
    //set the unique ID to the .title and the props property album to the full array item.
    //these values are passed as props into the Album Detail components.
    renderAlbums() {
        return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        //console.log(this.state.albums);

        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

//export
export default AlbumList;
