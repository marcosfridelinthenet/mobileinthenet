import { Pressable, StyleSheet, Text } from 'react-native'
import Style from '../constants/Style';

const Button = (p) => {

    const handlerOnPress = () => {
        if(p.onPress) p.onPress();
    }

    //console.log('style.button', style.button)

    return (
        <>
            <Pressable style={ { ...style.button, ...p.style } }  onPress={ () => { handlerOnPress() } }>
                <Text style={ { ...style.button, ...p.style } }>{ p.title }</Text>
            </Pressable>        
        </>
    )
}


const style = StyleSheet.create({
    button: Style.button
})

export default Button;