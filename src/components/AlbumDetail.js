//AlbumDetail is the "inner loop"
//This function is called for every album in the array fetched from the API.
//The function displays a card for the album.
//The card is composed of several card sections for
//1. header (image, album, artist)
//2. album artwork
//3. Buy button

//import libraries and local files.
import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

//define AlbumDetail as function component
//display album title, which is passed in
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer} >
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={styles.thumbnailStyle}
                    />
                </View>
                <View style={styles.headerContentStyle} >
                    <Text style={styles.titleStyle}>
                        {title}
                    </Text>
                    <Text>
                        {artist}
                    </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image }}
                    style={styles.imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button
                    onPress={() => Linking.openURL(url)}
                    title='Click me'
                />
            </CardSection>
        </Card>
    );
};

//style
const styles = {
    titleStyle: {
        fontSize: 18
    },
    //vertically space out album and artist text
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    //fill the screen with image
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

//export component
export default AlbumDetail;
