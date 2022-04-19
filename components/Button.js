import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import styleBrief from '../style/brief';

const Button = (p) => {

    const handlerOnPress = () => {
        //console.log('p.onPress', p.onPress)
        if(p.onPress) p.onPress();
    }

    //console.log('style.button', style.button)

    return (
        <>
            <TouchableOpacity style={ { ...style.button, ...p.style, padding: 0 } }  onPress={ () => { handlerOnPress() } }>
                <Text style={ { ...style.button, ...p.style } }>{ p.title }</Text>
            </TouchableOpacity>        
        </>
    )
}


const style = StyleSheet.create({
    button: styleBrief.button
})

export default Button;