import { SafeAreaView, StyleSheet, Text } from 'react-native'

import Style from '../constants/Style'

const TrackMap = () => {
    return (
        <>
            <SafeAreaView style={ style.screen }>
                <Text>TrackMap</Text>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    screen: Style.screen,
    viewContent: {
        backgroundColor: "#111111",
        width: "100%",
        height: "100%"
    },
    viewSearchTop: Style.viewSearchTop,
    viewSearchContent: Style.viewSearchContent,
    input: {
        ...Style.input,
        backgroundColor: "white"
    },
    viewSearchTopText: Style.viewSearchTopText,
     button: {
        fontSize: 50,
    }, 
    viewSearchCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    viewSearchNoteText: {
        color: "white"
    },
})

export default TrackMap;