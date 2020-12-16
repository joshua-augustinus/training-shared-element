import React, { useEffect } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler } from 'react-native';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';
import { ArticleHeader } from '@src/components/ArticleHeader';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: any
}

const MasterScreen = (props: Props) => {

    useEffect(() => {

    }, []);

    const onMenuPress = () => {
        props.navigation.push("Activity");
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ArticleHeader />
            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }

MasterScreen.sharedElements = (navigation, otherNavigation, showing) => {
    return [`image1`];
};