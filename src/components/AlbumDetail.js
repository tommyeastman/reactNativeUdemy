//import libraries and local files.
import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//define AlbumDetail as function component
//display album title, which is passed in
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                    source={{ uri: thumbnail_image }}
                    style={styles.thumbnailStyle}
                    />
                </View>
                <View style={styles.headerContentStyle} >
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>
                    <Text style={styles.textStyle}>
                        {artist}
                    </Text>
                </View>
            </CardSection>
        </Card>);
};

//style
const styles = {
    textStyle: {
        //fontSize: 20,
        //borderWidth: 1,
        //borderColor: '#000'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

//export component
export default AlbumDetail;
