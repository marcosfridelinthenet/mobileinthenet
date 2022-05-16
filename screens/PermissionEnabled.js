import { SafeAreaView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { Button, Text } from '@rneui/base';

const PermissionEnabled = (props) => {

    const stateSetting = useSelector(state => state.setting)

    return (
        <>
            <SafeAreaView style={ { ...style.container, backgroundColor: stateSetting.style.backgroundLight } }>
                <Text style={ { ...style.text, color: stateSetting.style.font } }>{ props.text }</Text>
                <Button 
                    title = { props.title }
                    buttonStyle={{
                        ...style.button, 
                        backgroundColor: stateSetting.style.button,
                    }}
                    onPress={ () => { props.onPress() }}></Button>
            </SafeAreaView>  
        </>          
    )

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCamera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 0,
        margin: 0
    },
    text: {
        fontSize: 20,
        padding: 15
    },
})

export default PermissionEnabled;