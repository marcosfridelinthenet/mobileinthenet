import { Text, Switch } from 'react-native'

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { setModeTheme } from '../store/actions/setting.action';

const Setting = () => {
    const dispatch = useDispatch()
    const settingModeTheme = useSelector(state => state.modeTheme)

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        console.log('toggleSwitch')
        dispatch(setModeTheme(!isEnabled ? 'dark' : 'light'));
        setIsEnabled(previousState => !previousState); 
    }

    console.log('settingModeTheme', settingModeTheme)

    return (
        <>
            <Text>Modo oscuro (En Redux { settingModeTheme })</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                //ios_backgroundColor="#3e3e3e"
                onValueChange={ () => toggleSwitch() }
                value={isEnabled}
            />        
        </>
    )
}

export default Setting;