import { SafeAreaView } from "react-native";
import { useSelector } from 'react-redux'

import { Text, LinearProgress } from '@rneui/themed';

import styleBrief from '../style/brief'

const Loading = (props) => {

    const stateSetting = useSelector(state => state.setting)

    const text = props.text ? props.text : 'Cargando...'

    return (
        <>
            <SafeAreaView style={ { ...style.container, backgroundColor: stateSetting.style.backgroundLight } }>
                <Text style={ { ...style.text, color: stateSetting.style.font } }>{ text }</Text>
                <LinearProgress style={ style. linearProgress } color={ styleBrief.colors.light.background } />
            </SafeAreaView>
        </>
    )
}

const style = ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    },
    linearProgress: {
        heigth: 200,
        width: "90%"
    }
})

export default Loading;