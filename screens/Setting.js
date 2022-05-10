import { StyleSheet, View } from 'react-native'

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { setModeTheme } from '../store/actions/setting.action';

import { Button, Switch , Text } from '@rneui/themed';
import styleBrief from '../style/brief'

const Setting = ({ navigation, route}) => {
    const dispatch = useDispatch()
    const stateSetting = useSelector(state => state.setting)

    const [isEnabled, setIsEnabled] = useState(stateSetting.modeTheme === 'dark');
    const modeThemeInit = stateSetting.modeTheme;

    const toggleSwitch = () => {
        //console.log('toggleSwitch')
        //console.log('>>>>>>>> Setting stateSetting', stateSetting)
        setIsEnabled(previousState => !previousState); 
    }

    const handlerSaveSetting = () => {
        dispatch(setModeTheme(isEnabled ? 'dark' : 'light'));
        navigation.goBack();
    }

    return (
        <>
            <View style={ { ...style.container, backgroundColor: stateSetting.style.backgroundLight } }>
                <View style= { style.containerSetting }>
                    <View style={ style.modeThemeContainer }>
                        <View style={ style.modeThemeContainerText }>
                            <Text  style={ { ...style.text, color: stateSetting.style.font } }>Modo oscuro (En Redux { stateSetting.modeTheme })</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? styleBrief.colors.light.background : "#f4f3f4"}
                            //ios_backgroundColor="#3e3e3e"
                            onValueChange={ () => toggleSwitch() }
                            value={ isEnabled }
                        />                    
                    </View>
                </View>
                <View style={ style.containerFooter }>
                    <Button
                        title="GUARDAR"
                        buttonStyle={{
                            ...style.button, 
                            backgroundColor: stateSetting.style.button,
                        }}
                        onPress={ () => { handlerSaveSetting('Client') } }
                    />     
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerSetting: {
        flex: 1
    },
    modeThemeContainer: {
        flexDirection: 'row',
        height: 50
    },
    modeThemeContainerText: {
        flex: 1,
    },
    text: {
        ...styleBrief.text,
        margin: 15,
        fontSize: 13
    }
})

export default Setting;