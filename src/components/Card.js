//import libraries
import React from 'react';
import { View } from 'react-native';

//define Card as function component.
const Card = () => {
    return (
        <View style={styles.containerStyle}>
        </View>);
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2, // rounded corners
        borderColor: '#ddd', //light gray
        borderBottomWidth: 0, //no bottom border
        shadowColor: '#000', //black
        shadowOffset: { width: 0, height: 2 }, //no side shadow, some bottom
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1, //??
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    }
};

//export
export default Card;
