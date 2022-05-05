import { useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import { getTrackInfo } from '../data/firebaseData';

import styleBrief from '../style/brief';

import { Button, Card, Input, Text } from '@rneui/base';

import { useSelector } from 'react-redux'

const Client = ( { navigation, route } ) => {

    const stateSetting = useSelector(state => state.setting)

    const [ codeInput, setCodeInput ] = useState('');
    const [ loadingButton, setLoadingButton ] = useState(false);
    
    const qr = route.params ? route.params.qr : undefined;

    const handlerChangeTextCode = (text) => { 
        setCodeInput(text.replace((/[^0-9]/g), '')) 
    }

    const searchCode = async (code) => {
        await getTrackInfo(code)
            .then(result => {
                if (result.length === 0){
                    navigation.navigate(
                        'Error', { 
                            message: 'Código no válido'
                        }
                    )
        
                } else {
                    navigation.navigate( 
                        'ClientNav', { 
                            result: result[0] 
                        } 
                    )
        
                }
                setLoadingButton(false);
            })
            .catch(e => 
                console.log(e)
            )    
        setLoadingButton(false);
    }

    const handlerOnSearch =  () => {
        setLoadingButton(true);
        searchCode(codeInput);

        setCodeInput('');
    }

    const handlerClientQr = () => {
        navigation.navigate( 
            'ClientQr'
        )        
    }

    if(qr) {
        try{
            const qrCode = qr.split('/').pop();
            searchCode(qrCode);
        } 
        catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <>
                    <SafeAreaView style= { { ...style.container, backgroundColor: stateSetting.style.backgroundLight } }>

                        <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                            <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>¿DONDE ESTA MI ENVIO?</Card.Title>
                            <Card.Divider style={ style.cardDivider } />
                            <Text style={{ ...style.text, color: stateSetting.style.font }}>
                                Ingrése el código de seguimiento
                            </Text>
                            <Input
                                style={ { ...style.input, color: stateSetting.style.font } } 
                                blurOnSubmit
                                autoCapitalization="none"
                                autoCorrect={ false } 
                                keyboardType="numeric"
                                maxLength={ 5 }
                                onChangeText={ handlerChangeTextCode }
                                value={ codeInput }
                            ></Input>   
                            { !loadingButton  ?
                                <Button
                                    title="BUSCAR"
                                    buttonStyle={{
                                        ...style.button, 
                                        backgroundColor: stateSetting.style.button,
                                    }}
                                    onPress={ () => { handlerOnSearch('') } }
                                /> : 
                                <Button
                                    loading
                                    buttonStyle={{
                                        ...style.button, 
                                        backgroundColor: stateSetting.style.button
                                    }}
                                />    
                            }
                            <Text style={{ ...style.text, color: stateSetting.style.font }}>
                                - Si tenés el código QR haz click en el siguiente botón.
                            </Text>  
                            { !loadingButton  ?
                                <Button
                                    title="CÓDIGO QR"
                                    buttonStyle={{
                                        ...style.button, 
                                        backgroundColor: stateSetting.style.button,
                                    }}
                                    onPress={ () => { handlerClientQr('') } }
                                />  : 
                                <Button
                                    loading
                                    buttonStyle={{
                                        ...style.button, 
                                        backgroundColor: stateSetting.style.button
                                    }}
                                /> 
                            }           
                        </Card>
                        <Text style={{ ...style.text, color: stateSetting.style.font }}>Códigos habilitados: 12345 y 56789</Text>
                        <Text style={{ ...style.text, color: stateSetting.style.font }}>Todo otro valor ingresado sera inválido</Text>

                    </SafeAreaView>               
                </>
            </TouchableWithoutFeedback>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        width: '90%',
    },
    cardDivider: {
        borderWidth: 2,
        borderColor: styleBrief.colors.light.background
    },
    cardTitle: {
        ...styleBrief.text,
        fontSize: 16,
        padding: 4
    },
    button: {
        ...styleBrief.button,
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,        
    },
    text: {
        ...styleBrief.text,
        margin: 15,
        fontSize: 13
    },
    input: {
        ...styleBrief.input,
        fontSize: 20,
        width: 100,
        textAlign: 'center',
    }
})

export default Client;