import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const TrackData = ({ navigation, route}) => {

    const result = route.params.result;

    return (
        <>
            <SafeAreaView style={ style.screen }>
                <View style={ style.card }
                >
                    <Text>{ `#${result.code}` }</Text>
                    <Text>{ `${result.info.to}` }</Text>
                    <Text>{ `${result.info.street}` }</Text>
                    <Text>{ `${result.info.city}` }</Text>
                    <Text>{ `${result.info.comments}` }</Text>
                    <Text>{ `${result.info.status}` }</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    card: {
        width: Dimensions.get('window').width * .8,
        //height: Dimensions.get('window').height,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        elevation: 5,
        padding: 10
    }
})

export default TrackData