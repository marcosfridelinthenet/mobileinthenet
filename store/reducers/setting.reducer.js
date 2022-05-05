import { SET_MODE_THEME } from "../actions/setting.action";

import style from '../../style/brief'

const initialState = {
    modeTheme: 'light',
    style: style.colors.light
}

const SettingReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_MODE_THEME:
        const styleModeTheme = action.modeTheme === 'dark' ? style.colors.dark : style.colors.light;
        return { ...state, modeTheme: action.modeTheme, style: styleModeTheme }
        break;
    default:
        return state;
    }
}

export default SettingReducer;