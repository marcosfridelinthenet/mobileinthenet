import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Card, Text, SpeedDial } from '@rneui/base';

import styleBrief from '../style/brief'

import { useSelector } from 'react-redux'

const Index = ( { navigation } ) => {

    const stateSetting = useSelector(state => state.setting)

    const handlerClickMode = (mode) => {
        navigation.navigate(mode)
    }

    return (
        <>
            <SafeAreaView 
                style={ { ...style.container, backgroundColor: stateSetting.style.backgroundLight } }>
                
                {/* <Image source={ Logo }></Image> */}
                <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                    <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>PERFIL CLIENTE</Card.Title>
                    <Card.Divider style={ style.cardDivider } />
                    <Text style={{ ...style.text, color: stateSetting.style.font }}>
                        - Seguimiento de envío.
                    </Text>
                    <Text style={{ ...style.text, color: stateSetting.style.font }}>
                        - Lectura Qr
                    </Text>
                    <Text style={{ ...style.text, color: stateSetting.style.font }}>
                        - Seguimiento por Google Maps.
                    </Text>
                    <Button
                        title="INGRESO COMO CLIENTE"
                        buttonStyle={{
                            ...style.button, 
                            backgroundColor: stateSetting.style.button,
                        }}
                        onPress={ () => { handlerClickMode('Client') } }
                    />                    
                </Card>
                <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                    <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>PERFIL DELIVERY</Card.Title>
                    <Card.Divider style={ style.cardDivider } />
                    <Text style={{ ...style.text, color: stateSetting.style.font }}>
                        - Listar entregas. 
                    </Text>
                    <Text style={{ ...style.text, color: stateSetting.style.font }}>
                        - Google Maps de disponibles a retirar.
                    </Text>
                    <Text style={{ ...style.text, color: stateSetting.style.font }}>
                        - Cambiar el estado de las entregas.
                    </Text>
                    <Button
                        onPress={ () => { handlerClickMode('Delivery') } }
                        buttonStyle={{
                            ...style.button, 
                            backgroundColor: stateSetting.style.button,
                        }}
                        title="INGRESO COMO DELIVERY"
                    />
                </Card>
{/*                 {
                    Plataform.OS == 'android' ? */}
                        <SpeedDial
                            buttonStyle={{
                                backgroundColor: stateSetting.style.button,
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0,
                            }}                
                            //overlayColor={ stateSetting.style.backgroundLight }
                            overlayColor="transparent"
                            icon={{ name: 'edit', color: '#fff' }}
                            onOpen={() => handlerClickMode('Setting') }
                        >
                        </SpeedDial> 
{/*                     :
                    <Button
                        onPress={ () => { handlerClickMode('Setting') } }
                        buttonStyle={{
                            ...style.button, 
                            backgroundColor: stateSetting.style.button,
                        }}
                        title="AJUSTES"
                    /> 

                }*/}
                </SafeAreaView>
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
        margin: 5,
        paddingBottom: 5,
        paddingTop: 5,
        fontSize: 13
    }
})


export default Index;