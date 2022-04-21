import { useSelector } from "react-redux"


//const settingModeTheme = useSelector(state => state.modeTheme)
const colors = {    
    light: {
        background: "#e83e8c",   
        backgroundLight: "#ffffff",
        font: "#000",
        fontLight: "#fff",
        border: "#ac8a65",
        item: "#ede1d6",
        color5: "#84c28f",
    },
    dark: {
        background: '#000000',
        backgroundLight: "#ffffff",
        font: "#000",
        fontLight: "#fff",
        border: "#ac8a65",
        item: "#ede1d6",
        color5: "#84c28f",
    }  
}

/* const getColors = () => {
    const modeTheme = useSelector(state => state.modeTheme);
    return (modeTheme === 'dark' ? colors.dark : colors.light)
} */

const fonts = {        
    principal: 'BIZUDPGothic',
    principalBold: 'BIZUDPGothicBold',
}

export default {
    colors: colors,
    fonts: fonts,
    navStack: {
        image: {
            width: 30,
            height: 30
        },
        backgroundColor: colors.light.background,
        fontFamily: fonts.principalBold,
        fontSize: 16,
        color: colors.light.fontLight
    },
    navTab: {
        height: 70,
        backgroundColor: colors.light.background,
        icon: {
            fontSize: 35,
            color: colors.light.fontLight
        },
        label: {
            fontFamily: fonts.principalBold,
            fontSize: 15,
            color: colors.fontLight
        },        
    },
    button: {
        backgroundColor: colors.light.background,
        color: colors.light.fontLight,
        fontFamily: fonts.secundaryBold,
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
/*         borderWidth: 1,
        borderColor: colors.border,
 */        borderRadius: 10,
    },
    input: {        
/*         fontFamily: fonts.principal,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
 */
        
        //flex: 1,
        borderBottomWidth: 1,
        borderColor: colors.light.font,
        borderRadius: 10,
        paddingLeft: 5,
        fontFamily: fonts.principal,
        fontSize: 12,
        color: colors.light.font
    },
    label: {
        fontFamily: fonts.principalBold,
        fontSize: 15,
        color: colors.light.font
    },
    itemSeparator: {
        height: 2,
        width: "100%",
        backgroundColor: "#eeeeee",
    }
}