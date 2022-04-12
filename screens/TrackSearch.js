import { useState } from 'react'
import { Input, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

import Style from '../constants/Style'
import Button from '../components/Button'

const TrackSearch = ( p ) => {
    
    const [ codeInput, setCodeInput ] = useState('12345');

    const handlerChangeTextCode = (text) => { 
        setCodeInput(text.replace((/[^0-9]/g), '')) 
    }

    const handlerOnSearch = () => {
        if (!Number.isInteger(Number.parseInt(codeInput))) return;

        //navigation.navigate('TrackResult')
        p.onSearch('TrackResult', { code: codeInput } )
        setCodeInput('');
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <>
                    <SafeAreaView style= { style.screen }>
                        <View style={ style.viewSearchTop } >
                            <Text style={ style.viewSearchTopText } >Ingrése el código de seguimiento</Text>
                        </View>
                        
                        <View style={ style.viewSearchContent } >
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
                        </View>
                        <View style={ style.viewSearchCenter } >
                            <Button title="Buscar" style={ style.button }  onPress={ handlerOnSearch }></Button>
                        </View>

                        <View style={ style.viewSearchCenter } >
                            <Text style={ style. viewSearchNoteText} >Códigos habilitados: 12345 y 56789</Text>
                            <Text style={ style. viewSearchNoteText}>Todo otro valor ingresado sera inválido</Text>
                        </View>     

                    </SafeAreaView>               
                </>
            </TouchableWithoutFeedback>
        </>
    )
}

const style = StyleSheet.create({
    viewContent: {
        backgroundColor: "#111111",
        width: "100%",
        height: "100%"
    },
    viewSearchTop: Style.viewSearchTop,
    viewSearchContent: Style.viewSearchContent,
    input: {
        ...Style.input,
        backgroundColor: "white"
    },
    viewSearchTopText: Style.viewSearchTopText,
     button: {
        fontSize: 50,
    }, 
    viewSearchCenter: {
        alignItems: "center",
        justifyContent: "center"
    },
    viewSearchNoteText: {
        color: "white"
    },
})

export default TrackSearch;