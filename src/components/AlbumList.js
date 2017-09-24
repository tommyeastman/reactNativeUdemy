//import libraries
import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

//make component
class AlbumList extends React.Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        //console.log(this.state);

        return (
            <View>
                { this.renderAlbums() }
            </View>
        );
    }
}

//style
// const styles = {
//     viewStyle: {
//         backgroundColor: '#aaf442', //green
//         borderWidth: 1,
//         borderColor: '#000',
//         //justifyContent: 'center',
//         //alignItems: 'center'
//     }
// };

//export
export default AlbumList;
