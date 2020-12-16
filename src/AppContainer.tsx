import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SideMenu } from './components/SideMenu';
import { ActivityScreen } from './screens/ActivityScreen';
import { MasterScreen } from './screens/MasterScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const StackNavigatorConfig = {
    initialRouteName: 'Stack1',
    defaultNavigationOptions: ({ navigation }) => ({
        cardStyle: {
            backgroundColor: 'transparent'
        }
    }),

}

const InnerStack = createSharedElementStackNavigator({
    Stack1: MasterScreen,
    Activity: ActivityScreen

},
    StackNavigatorConfig
)

const RootStack = createDrawerNavigator({
    Home: {
        // @ts-ignore
        screen: InnerStack
    },
    SecondScreen: {
        // @ts-ignore
        screen: InnerStack
    },

}, {
    contentComponent: SideMenu,
    backBehavior: "initialRoute"
});
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };