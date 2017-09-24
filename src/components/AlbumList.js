//import libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//make component
class albumList extends Component {
    render() {
        const { textStyle, viewStyle } = styles;

        return (
            <View style={viewStyle}>
                <View style={viewStyle}><Text style={textStyle}>Album 1</Text></View>
                <View style={viewStyle}><Text style={textStyle}>Album 2</Text></View>
                <View style={viewStyle}><Text style={textStyle}>Album 3</Text></View>
            </View>
        );
    }
}

//style
const styles = {
    viewStyle: {
        backgroundColor: '#4286f4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

//export
export default albumList;
