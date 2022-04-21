import { SET_MODE_THEME } from "../actions/setting.action";

const initialState = {
    modeTheme: 'light'
}

const SettingReducer = (state = initialState, action) => {
    switch(action.type) {
    case SET_MODE_THEME:
        return { ...state, modeTheme: action.modeTheme }
        break;
    default:
        return state;
    }
}

export default SettingReducer;