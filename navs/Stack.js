import { Image, Text } from 'react-native'

import style from '../style/brief'

export const LogoTitle = () => {
    const Logo = require('../assets/img/logo.png')
    return (
        <>
                <Image
                    style={ { 
                        width: style.navStack.image.width, 
                        height: style.navStack.image.height 
                    } }
                    source={ Logo }
                />
                <Text
                    style={ { 
                        fontFamily: style.navStack.fontFamily, 
                        fontSize: style.navStack.fontSize, 
                        color: style.navStack.color
                    } }
                >
                    {`   Track.Inthenet`}
                </Text>
            {/* </View> */}
        </>
    );
}

/* export const getHeaderTitle = (props) => {
     <LogoTitle {...props} />
} */
export const getTitleOptions = (modeTheme) => {
    return  {
        //title: 'Home Title',
        headerTintColor: style.navStack.color,
        headerTitleAlign: 'center',
/*         headerTitleStyle: {
            color: style.colors.background,
        }, */
        headerStyle: {
            backgroundColor: 
                modeTheme === 'dark' ? style.colors.dark.background : style.colors.light.background
        },
        headerTitle: (props) => <LogoTitle {...props} />
    }
}