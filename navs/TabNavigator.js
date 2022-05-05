import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import screenClientInfo from '../screens/ClientInfo';
import screenClientMap from '../screens/ClientMap';

import styleBrief from '../style/brief'

import { useSelector } from 'react-redux'

const TabNavigator = ({ navigation, route }) => {

    const style = styleBrief.navTab;

    const stateDelivery = useSelector(state => state.delivery)
    
    const Tab = createBottomTabNavigator();
    
    const stateSetting = useSelector(state => state.setting)
    
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
                    iconName = 'ios-cube';
                    break;
                case 'Seguimiento':
                    iconName = 'ios-compass-outline';
                    break;
/*                 case 'Acerca':
                    iconName = 'ios-information-circle';
                    break; */
            }
            
            return <Ionicons 
                    name={ iconName } 
                    size={ style.icon.fontSize } 
                    color={ style.label.color } 
                />;
            },
            tabBarActiveTintColor: stateSetting.style.font,
            tabBarInactiveTintColor: stateSetting.style.font,
            tabBarStyle: { 
                height: style.height,
                backgroundColor: stateSetting.style.background,
                paddingBottom: 5,           
                }
            }
        )
    }
    
    return (
        <>
            <Tab.Navigator 
                screenOptions={ ({ route }) => TabNavigatorScreenOptions(route) } >
                <Tab.Screen name="Información" component={ screenClientInfo } 
                    options={ { headerShown: false } } 
                    initialParams={ { result: route.params.result } } ></Tab.Screen>
                {
                    stateDelivery.showmap ?
                    <Tab.Screen name="Seguimiento" component={ screenClientMap } 
                        options={ { headerShown: false } } 
                        initialParams={ { result: route.params.result } }
                    ></Tab.Screen>
                    : <></>
                }
            </Tab.Navigator>
        </>
    );    
}

export default TabNavigator;