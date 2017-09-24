//import libraries
import React from 'react';
import { View, Text } from 'react-native';

//make component
class AlbumList extends React.Component {
    render() {
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
        backgroundColor: '#aaf442',
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
