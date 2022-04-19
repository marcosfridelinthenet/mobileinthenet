import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TrackSearch from '../screens/TrackSearch';
import TrackInvalid from '../screens/TrackInvalid';
import TrackTabNavigator from './TrackTabNavigator';

import { getTitleOptions } from './Stack';

const TrackNavigator = (route) => {

    const Stack = createNativeStackNavigator();
    
    //options={ { title: `Seguimiento # ${route.params.result.code}` } } 
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={ TrackSearch }
                        options={ getTitleOptions }
                        ></Stack.Screen>
                    <Stack.Screen name="Invalid" component={ TrackInvalid }
                        options={ getTitleOptions }
                    ></Stack.Screen>
                    <Stack.Screen name="Result" component={ TrackTabNavigator }
                        options={ getTitleOptions }
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )

}    

        

export default TrackNavigator;