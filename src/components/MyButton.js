import React from 'react';
import { Button } from 'react-native';

const MyButton = (props) =>
    (
        <Button
            onPress={props.pressFunction}
            title={props.text}
            style={styles.buttonStyle}
            color='#4286f4'
        />
    );

const styles = {
    /*textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },*/
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#4286f4',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
    }
  };

  export default MyButton;
