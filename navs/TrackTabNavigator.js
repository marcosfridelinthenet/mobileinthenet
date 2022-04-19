import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import TrackResult from '../screens/TrackResult';
import TrackInfo from '../screens/TrackInfo';
import TrackMap from '../screens/TrackMap';

import styleBrief from '../style/brief'

const TrackTabNavigator = ({ navigation, route }) => {

    const style = styleBrief.navTab;

    //console.log('TrackTabNavigator route.params.result', route.params.result)
    const Tab = createBottomTabNavigator();
    
    const TabNavigatorScreenOptions = (route) => {
        return ({
            tabBarLabel: ({ focused }) => {
                let label = route.name;

                return (
                    <Text style={ { 
                        fontFamily: style.label.fontFamily, 
                        fontSize: style.label.fontSize, 
                        color: style.label.color 
                        } }>
                        { label }
                    </Text>
                )
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              switch(route.name) {
                case 'Información':
                    iconName = 'ios-information-circle';
                    break;
                case 'Seguimiento':
                    iconName = 'ios-cube';
                    break;
                case 'Ubicación':
                    iconName = 'ios-location';
                    break;
            }

            return <Ionicons 
                    name={ iconName } 
                    size={ style.icon.fontSize } 
                    color={ style.icon.color } 
                />;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { 
                height: style.height,
                backgroundColor: style.backgroundColor,
                paddingBottom: 5,
/*                 height: 90,
                paddingHorizontal: 5,
                paddingTop: 0,
                position: 'absolute',
                borderTopWidth: 0,    */             
                }
            }
        )
    }
    
    return (
        <>
            {/* <NavigationContainer> */}
                <Tab.Navigator 
                    screenOptions={ ({ route }) => TabNavigatorScreenOptions(route) } >
                    <Tab.Screen name="Información" component={ TrackInfo } 
                        options={ { headerShown: false } } 
                        initialParams={ { result: route.params.result } } ></Tab.Screen>
                    <Tab.Screen name="Seguimiento" component={ TrackResult } 
                        options={ { headerShown: false } } 
                        initialParams={ { result: route.params.result } }
                        ></Tab.Screen>
                    <Tab.Screen name="Ubicación" component={ TrackMap } 
                        options={ { headerShown: false } } 
                        initialParams={ { result: route.params.result } } ></Tab.Screen>
                </Tab.Navigator>
            {/* </NavigationContainer> */}
        </>
    );    
}

export default TrackTabNavigator;