export const SET_MODE_THEME = 'SET_MODE_THEME'
export const GET_MODE_THEME = 'GET_MODE_THEME'
import { fetchSetting  } from "../../db"

/* import style from '../../style/brief' */

export const setModeTheme = (modeTheme) => ({
    type: SET_MODE_THEME,
    modeTheme: modeTheme
})

export const getModeTheme = () => {
    return async dispatch => {
        try {
            const result = await fetchSetting()
            if(!result.length) return;
            dispatch({ type: GET_MODE_THEME, setting: result[0] })
        } catch(error) {
            console.log(error);
        }
    }
}