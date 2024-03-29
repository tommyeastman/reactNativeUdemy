import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

const MyButton = (props) =>
    (
        <TouchableHighlight
            onPress={props.pressFunction}
            style={styles.buttonStyle}
        >
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableHighlight>
    );

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

  export default MyButton;
