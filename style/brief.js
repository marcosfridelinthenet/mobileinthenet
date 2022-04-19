const colors = {      
    background: "#e83e8c",   
    backgroundLight: "#ffffff",
    font: "#000",
    fontLight: "#fff",
    border: "#ac8a65",
    item: "#ede1d6",
    color5: "#84c28f",
}

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
        backgroundColor: colors.background,
        fontFamily: fonts.principalBold,
        fontSize: 16,
        color: colors.fontLight
    },
    navTab: {
        height: 70,
        backgroundColor: colors.background,
        icon: {
            fontSize: 35,
            color: colors.fontLight
        },
        label: {
            fontFamily: fonts.principalBold,
            fontSize: 15,
            color: colors.fontLight
        },        
    },
    button: {
        backgroundColor: colors.background,
        color: colors.fontLight,
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
        borderColor: colors.font,
        borderRadius: 10,
        paddingLeft: 5,
        fontFamily: fonts.principal,
        fontSize: 12,
        color: colors.font
    },
    label: {
        fontFamily: fonts.principalBold,
        fontSize: 15,
        color: colors.font
    },
}