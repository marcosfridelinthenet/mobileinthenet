import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenIndex from '../screens/Index';
import screenClient from '../screens/Client';
import screenClientQr from '../screens/ClientQr';
import screenError from '../screens/Error';
import screenDelivery from '../screens/Delivery';
import screenDeliveryGps from '../screens/DeliveryGps';
import screenDeliveryInfo from '../screens/DeliveryInfo';
import TabNavigator from './TabNavigator';
import screenSetting from '../screens/Setting';

import { getModeTheme } from '../store/actions/setting.action';

import { Image, Text, View } from 'react-native'

import style from '../style/brief'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const StackNavigator = (route) => {
    const dispatch = useDispatch();

    const Stack = createNativeStackNavigator();
    const stateSetting = useSelector(state => state.setting)
    
    useEffect(() => {
        dispatch(getModeTheme());
    }, [])

    const LogoTitle = () => {
        const Logo = require('../assets/img/logo.png')
        return (
            <>
                    <Image
                        style={ { 
                            width: style.navStack.image.width, 
                            height: style.navStack.image.height 
                        } }
                        source={ Logo }
                    />
                    <Text
                        style={ { 
                            fontFamily: style.navStack.fontFamily, 
                            fontSize: style.navStack.fontSize, 
                            color: style.navStack.color
                        } }
                    >
                        {`   Track.Inthenet`}
                    </Text>
            </>
        );
    }
    
    const getTitleOptions = (modeTheme) => {
        return  {
            //title: 'Home Title',
            headerTintColor: style.navStack.color,
            headerTitleAlign: 'center',
    /*         headerTitleStyle: {
                color: style.colors.background,
            }, */
            headerStyle: {
                backgroundColor: stateSetting.style.background
            },
            headerTitle: (props) => <LogoTitle {...props} />
        }
    }


    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Index'>
                    <Stack.Screen name="Index" component={ screenIndex }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Client" component={ screenClient }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="ClientQr" component={ screenClientQr }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Delivery" component={ screenDelivery }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="DeliveryGps" component={ screenDeliveryGps }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Error" component={ screenError }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="ClientNav" component={ TabNavigator }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="DeliveryInfo" component={ screenDeliveryInfo }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen>
                    <Stack.Screen name="Setting" component={ screenSetting }
                        options={ () => getTitleOptions(stateSetting.modeTheme) }
                    ></Stack.Screen> 
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )

}            

export default StackNavigator;