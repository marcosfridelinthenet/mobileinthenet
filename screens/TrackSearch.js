import { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

import Button from '../components/Button'

import styleBrief from '../style/brief';

import trackData from '../data/track'

const TrackSearch = ( { navigation } ) => {
    
    const Logo = require('../assets/img/logo.png')

    const [ codeInput, setCodeInput ] = useState('12345');

    const handlerChangeTextCode = (text) => { 
        setCodeInput(text.replace((/[^0-9]/g), '')) 
    }

    const handlerOnSearch = () => {
        //if (!Number.isInteger(Number.parseInt(codeInput))) return;

        //navigation.navigate('TrackResult')
        //p.onSearch('TrackResult', { code: codeInput } )
        //console.log('navigation', navigation)
        const result = trackData.filter((item) => {
            return item.code === codeInput
        })

        //console.log('result[0]', result[0])

        if (result.length === 0){
            navigation.navigate('Invalid')

        } else {
            navigation.navigate( 
                'Result', 
                { 
                    result: result[0] 
                } 
            )

        }

        setCodeInput('');
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <>
                    <SafeAreaView style= { style.screen }>

                        <Image source={ Logo }></Image>
                        <Text>Track.Inthenet</Text>
                        <Text>Ingrése el código de seguimiento</Text>
                        <TextInput
                            style={ style.input }
                            blurOnSubmit
                            autoCapitalization="none"
                            autoCorrect={ false } 
                            keyboardType="numeric"
                            maxLength={ 5 }
                            onChangeText={ handlerChangeTextCode }
                            value={ codeInput }
                        ></TextInput>
                        <Button title="Buscar" onPress={ () => { handlerOnSearch() } }></Button>
                        <Text>Códigos habilitados: 12345 y 56789</Text>
                        <Text>Todo otro valor ingresado sera inválido</Text>


                    </SafeAreaView>               
                </>
            </TouchableWithoutFeedback>
        </>
    )
}

const style = StyleSheet.create({
    screen: {
        alignItems: 'center',
        paddingTop: 100
    },
    input: {
        ...styleBrief.input,
        fontSize: 20,
        width: 100,
        textAlign: 'center',
    }
})

export default TrackSearch;