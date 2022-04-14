import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import TrackResult from '../screens/TrackResult';
import TrackData from '../screens/TrackData';
import TrackMap from '../screens/TrackMap';


const TrackNavigator = (p) => {

    //console.log('p.id', p.code)

    const Tab = createBottomTabNavigator();
    
    const TabNavigatorScreenOptions = (route) => {
        return ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              switch(route.name) {
                case 'Seguimiento':
                    iconName = 'ios-cube';
                    break;
                case 'Destino':
                    iconName = 'ios-information-circle';
                    break;
                case 'Ubicación':
                    iconName = 'ios-location';
                    break;
            }

            return <Ionicons name={ iconName } size={ size } color={ color } />;
            },
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            }
        )
    }

      return (
        <>
            <NavigationContainer>
                <Tab.Navigator 
                    screenOptions={ ({ route }) => TabNavigatorScreenOptions(route) } >
                    <Tab.Screen name="Seguimiento" component={ TrackResult } 
                        options={ {headerShown: false } } 
                        initialParams={ { code: p.code, onBack: p.onBack } }
                        ></Tab.Screen>
                    <Tab.Screen name="Destino" component={ TrackData } options={ { headerShown: false } } ></Tab.Screen>
                    <Tab.Screen name="Ubicación" component={ TrackMap } options={ { headerShown: false } } ></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        </>
      );
    }    

        

export default TrackNavigator;