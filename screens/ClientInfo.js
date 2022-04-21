import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const ClientInfo = ({ navigation, route}) => {

    const result = route.params.result;

    return (
        <>
            <SafeAreaView style={ style.screen }>
            <Text>{ `#${result.code}` }</Text>
                <View style={ style.card }
                >
                    <Text>{ `${result.delivery.to}` }</Text>
                    <Text>{ `${result.delivery.street}` }</Text>
                    <Text>{ `${result.delivery.city}` }</Text>
                    <Text>{ `${result.delivery.comments}` }</Text>
                    <Text>{ `${result.delivery.status}` }</Text>
                </View>
                <View style={ style.card }
                >
                    <Text>{ `${result.packaging.weight} ${result.packaging.weightUnit}` }</Text>
                    <Text>{ `${result.packaging.volume} ${result.packaging.volumeUnit}` }</Text>
                    <Text>{ `${result.packaging.height} ${result.packaging.heightUnit}` }</Text>
                    <Text>{ `${result.packaging.lenght} ${result.packaging.lenghtUnit}` }</Text>
                    <Text>{ `${result.packaging.depth} ${result.packaging.depthUnit}` }</Text>
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

export default ClientInfo