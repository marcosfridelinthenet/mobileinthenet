import { useState } from 'react'

import TrackNavigator from './navs/TrackNavigator'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

    const [ switchScreen, setSwitchScreen ] = useState('')
    const [ switchScreenProps, setSwitchScreenProps ] = useState({})

    const [ loaded ] = useFonts({
        BIZUDPGothic: require('./assets/fonts/BIZUDPGothic-Regular.ttf'),
        BIZUDPGothicBold: require('./assets/fonts/BIZUDPGothic-Bold.ttf')
    });
    
    if(!loaded) 
        return <AppLoading></AppLoading> 

    const content = <TrackNavigator></TrackNavigator>

    return (
        content 
    );
}
