import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import screenClientInfo from '../screens/ClientInfo';
import screenClientMap from '../screens/ClientMap';
import screenClientTrack from '../screens/ClientTrack';

import styleBrief from '../style/brief'

const TabNavigatorClient = ({ navigation, route }) => {

    const style = styleBrief.navTab;

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
                }
            }
        )
    }
    
    return (
        <>
            {/* <NavigationContainer> */}
                <Tab.Navigator 
                    screenOptions={ ({ route }) => TabNavigatorScreenOptions(route) } >
                    <Tab.Screen name="Información" component={ screenClientInfo } 
                        options={ { headerShown: false } } 
                        initialParams={ { result: route.params.result } } ></Tab.Screen>
                    <Tab.Screen name="Seguimiento" component={ screenClientTrack } 
                        options={ { headerShown: false } } 
                        initialParams={ { result: route.params.result } }
                        ></Tab.Screen>
                    <Tab.Screen name="Ubicación" component={ screenClientMap } 
                        options={ { headerShown: false } } 
                        initialParams={ { result: route.params.result } } ></Tab.Screen>
                </Tab.Navigator>
            {/* </NavigationContainer> */}
        </>
    );    
}

export default TabNavigatorClient;