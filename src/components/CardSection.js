//import libraries
import React from 'react';
import { View } from 'react-native';

//define Card as function component.
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        justifyContent: 'flex-start', // will come back to this
        flexDirection: 'row', // will come back to this
        position: 'relative'
    }
};

//export
export default CardSection;
