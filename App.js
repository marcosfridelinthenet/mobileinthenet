import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import TrackResult from './screens/TrackResult'
import TrackSearch from './screens/TrackSearch'

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

    const handlerSwitchScreen = (screen, props) => {
/*         console.log('handlerSwitchScreen screen', screen)
        console.log('handlerSwitchScreen props', props) */
        setSwitchScreen(screen)
        setSwitchScreenProps(props)
    }

    let content = <TrackSearch onSearch={ handlerSwitchScreen } ></TrackSearch>

    if(switchScreen === 'TrackResult') {
        content = <TrackResult { ...switchScreenProps } onBack={ handlerSwitchScreen }></TrackResult>
    }

    return (
        <View style={style.container}>
            { content }
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#aaaaaa',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
        width: "100%"
    },
});
