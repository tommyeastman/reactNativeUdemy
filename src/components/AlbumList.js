//import libraries
import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//make component
class AlbumList extends React.Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    render() {
        console.log(this.state);

        const { viewStyle, textStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>Album 1</Text>
            </View>
        );
    }
}

//style
const styles = {
    viewStyle: {
        height: 240,
        backgroundColor: '#aaf442', //green
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#000'
    }
};

//export
export default AlbumList;
