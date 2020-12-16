import { ArticleHeader } from '@src/components/ArticleHeader';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';


type Props = {
    navigation: any
}


const ActivityScreen = (props: Props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <ArticleHeader />

                <TextInput placeholder="Enter text here..."></TextInput>
            </View>
        </SafeAreaView>

    );

}

export { ActivityScreen }

ActivityScreen.navigationOptions = {}
