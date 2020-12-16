import React, { useRef, useState } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { SharedElement } from 'react-navigation-shared-element';


interface Props {

}

export const FEATURE_BUTTON_HEIGHT = 150;
const ARTICLE_HEADER_HEIGHT = 300;

const ArticleHeader = (props: Props) => {
    const fullWidth = useWindowDimensions().width;

    const height = ARTICLE_HEADER_HEIGHT;


    return (

        <View style={
            styles.container
        }>
            <SharedElement id="image1">
                <Image style={{ ...styles.image, width: fullWidth, height: '100%' }} source={require('../assets/sample.jpg')} />

            </SharedElement>

        </View>
    )
}

export { ArticleHeader }

const styles = StyleSheet.create({
    container: {
        height: ARTICLE_HEADER_HEIGHT,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    image: {
        width: '100%',

    }
})