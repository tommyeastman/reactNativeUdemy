//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//define component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        height: 60,
        backgroundColor: '#4286f4', //blue
        borderWidth: 1,
        borderRadius: 2, // rounded corners
        borderColor: '#ddd', //light gray
        shadowColor: '#000', //black
        shadowOffset: { width: 0, height: 2 }, //no side shadow, some bottom
        shadowOpacity: 0.1,
        shadowRadius: 2,
        //center the child text horiz and vertically
        justifyContent: 'center',
        alignItems: 'center',
        //move text down 15 px
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20,
        //borderWidth: 1,
        //borderColor: '#000'
    }
};

//make the component available to other parts of the app
export default Header;
