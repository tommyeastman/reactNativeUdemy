//import libraries
import React from 'react';
import { View, Text } from 'react-native';

//define AlbumDetail as function component
//display album title, which is passed in
const AlbumDetail = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>
                {props.album.title}
            </Text>
        </View>);
};

//style
const styles = {
    viewStyle: {
        height: 100,
        backgroundColor: '#aaf442', //green
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: 50
    },
    textStyle: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#000'
    }
};

//export component
export default AlbumDetail;
