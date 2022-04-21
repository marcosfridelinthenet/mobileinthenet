import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenIndex from '../screens/Index';
import screenClient from '../screens/Client';
import screenError from '../screens/Error';
import screenServer from '../screens/Server';
import screenSetting from '../screens/Setting';
import screenServerDelivery from '../screens/ServerDelivery';
import tabNavigatorClient from './TabNavigatorClient';

import { getTitleOptions } from './Stack';

import { useSelector } from 'react-redux'

const StackNavigatorIndex = (route) => {

    const Stack = createNativeStackNavigator();
    
    const modeTheme = useSelector(state => state.modeTheme)

    console.log('StackNavigatorIndex modeTheme', modeTheme)
    //options={ { title: `Seguimiento # ${route.params.result.code}` } } 
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Index'>
                    <Stack.Screen name="Index" component={ screenIndex }
                        options={ () => getTitleOptions(modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="ModeClient" component={ screenClient }
                        options={ () => getTitleOptions(modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="ModeServer" component={ screenServer }
                        options={ () => getTitleOptions(modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Error" component={ screenError }
                        options={ () => getTitleOptions(modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Client" component={ tabNavigatorClient }
                        options={ () => getTitleOptions(modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Delivery" component={ screenServerDelivery }
                        options={ () => getTitleOptions(modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Settings" component={ screenSetting }
                        options={ () => getTitleOptions(modeTheme) }
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )

}            

export default StackNavigatorIndex;