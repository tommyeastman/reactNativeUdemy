//AlbumDetail is the "inner loop"
//This function is called for every album in the array fetched from the API.
//The function displays a card for the album.
//The card is composed of several card sections for
//1. header (image, album, artist)
//2. album artwork
//3. Buy button

//import libraries and local files.
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import MyButton from './MyButton';

//define AlbumDetail as function component
//display album title, which is passed in
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { headerContentStyle, thumbnailStyle, thumbnailContainer,
            titleStyle, imageStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer} >
                    <Image
                        source={{ uri: thumbnail_image }}
                        style={thumbnailStyle}
                    />
                </View>
                <View style={headerContentStyle} >
                    <Text style={titleStyle}>
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
                    style={imageStyle}
                />
            </CardSection>

            <CardSection>
                <MyButton
                    pressFunction={() => Linking.openURL(url)}
                    text={'Click me'}
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
