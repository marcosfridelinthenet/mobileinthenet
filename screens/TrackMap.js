import { Dimensions , SafeAreaView, StyleSheet, Text } from 'react-native'
import MapView from 'react-native-maps';

import Style from '../constants/Style'

const TrackMap = () => {
    return (
        <>
            <SafeAreaView style={ style.screen }>
                <MapView style={ style.map } />
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }
})

export default TrackMap;