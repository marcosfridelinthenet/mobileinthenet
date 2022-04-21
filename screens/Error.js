import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import styleBrief from '../style/brief'

const Error = ({ navigation, route}) => {

    return (
        <>
        <SafeAreaView style={ style.screen }>
            <Text style={ style.text } >{ route.params.message } </Text>  
        </SafeAreaView>
    </>
    )
}

const style = StyleSheet.create({
    screen: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    text: {
        color: 'white',
        fontFamily: styleBrief.fonts.principalBold,
        fontSize: 30
    }
})

export default Error;