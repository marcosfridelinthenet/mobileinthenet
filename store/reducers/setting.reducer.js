import { GET_MODE_THEME, SET_MODE_THEME } from "../actions/setting.action";

import style from '../../style/brief'

import { fetchSetting, saveSetting } from '../../db'
import { Slider } from "@rneui/base";

const initialState = {
    modeTheme: 'light',
    style: style.colors.light
}

const SettingReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_MODE_THEME:
        const styleModeTheme = action.modeTheme === 'dark' ? style.colors.dark : style.colors.light;
        saveSetting(action.modeTheme);

        return { ...state, modeTheme: action.modeTheme, style: styleModeTheme }
        break;
    case GET_MODE_THEME:
        const styleModeDark = action.setting.modetheme === 'dark' ? style.colors.dark : style.colors.light;
        return { ...state, modeTheme: action.modedark, style: styleModeDark } 
        break;
    default:
        return state
    }
}

export default SettingReducer;