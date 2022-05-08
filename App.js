import { LogBox } from 'react-native';

import { useState } from 'react'

import StackNavigator from './navs/StackNavigator' 
/* import DrawerNavigator from './navs/DrawerNavigator' */

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Provider } from 'react-redux';

import ProviderContextProvider from './context/delivery';

import store from './store';

/* import { API_KEY_GOOGLE_MAPS } from '@env' */

export default function App() {

    const [ switchScreen, setSwitchScreen ] = useState('')
    const [ switchScreenProps, setSwitchScreenProps ] = useState({})

    const [ loaded ] = useFonts({
        BIZUDPGothic: require('./assets/fonts/BIZUDPGothic-Regular.ttf'),
        BIZUDPGothicBold: require('./assets/fonts/BIZUDPGothic-Bold.ttf')
    });
    
    LogBox.ignoreLogs(['Setting a timer']);
    LogBox.ignoreLogs(['Cannot update a component']);

    if(!loaded) 
        return <AppLoading></AppLoading> 

/*     console.log('API_KEY_GOOGLE_MAPS', API_KEY_GOOGLE_MAPS)  */

    return (
        <Provider store={ store } >
            <ProviderContextProvider>
                <StackNavigator></StackNavigator>
                {/* <DrawerNavigator></DrawerNavigator> */}
            </ProviderContextProvider>
        </Provider>         
    );
}
