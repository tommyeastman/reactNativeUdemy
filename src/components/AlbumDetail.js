//import libraries and local files.
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//define AlbumDetail as function component
//display album title, which is passed in
const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text style={styles.textStyle}>
                    {props.album.title}
                </Text>
            </CardSection>
            <CardSection>
                <Text style={styles.textStyle}>
                    {props.album.artist}
                </Text>
            </CardSection>
        </Card>);
};

//style
const styles = {
    textStyle: {
        //fontSize: 20,
        //borderWidth: 1,
        //borderColor: '#000'
    }
};

//export component
export default AlbumDetail;
