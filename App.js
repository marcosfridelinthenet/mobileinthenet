import { useState } from 'react'

import StackNavigatorIndex from './navs/StackNavigatorIndex'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Provider } from 'react-redux';

import store from './store';

export default function App() {

    const [ switchScreen, setSwitchScreen ] = useState('')
    const [ switchScreenProps, setSwitchScreenProps ] = useState({})

    const [ loaded ] = useFonts({
        BIZUDPGothic: require('./assets/fonts/BIZUDPGothic-Regular.ttf'),
        BIZUDPGothicBold: require('./assets/fonts/BIZUDPGothic-Bold.ttf')
    });
    
    if(!loaded) 
        return <AppLoading></AppLoading> 

    return (
        <Provider store={ store } >
        <StackNavigatorIndex></StackNavigatorIndex>
       </Provider>
         
    );
}
