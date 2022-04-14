import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

/* import TrackResult from './screens/TrackResult' */
import TrackSearch from './screens/TrackSearch'
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

    const handlerSwitchScreen = (screen, props) => {
/*         console.log('handlerSwitchScreen screen', screen)
        console.log('handlerSwitchScreen props', props) */
        setSwitchScreen(screen)
        setSwitchScreenProps(props)
    }
        {/* <View style={style.container}> */}
       /*  </View> */

    let content = (<>
            <TrackSearch onSearch={ handlerSwitchScreen } ></TrackSearch>
        </>
    )

     console.log('switchScreen: ', switchScreen)
     console.log('switchScreenProps: ', switchScreenProps)
    if(switchScreen === 'TrackResult') 
        content = <TrackNavigator code={ switchScreenProps.code } onBack={ () => handlerSwitchScreen('TrackSearch') } > </TrackNavigator>
        
        {/* <SafeAreaView style={style.container} > */}
        /* </SafeAreaView> */
    return (
        content 
    );
}
