import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { setShowMap } from '../store/actions/delivery.action';

import { Card, Text } from '@rneui/base';

import styleBrief from '../style/brief'

const ClientInfo = ({ navigation, route}) => {

    const stateSetting = useSelector(state => state.setting)

    const dispatch = useDispatch()
    const result = route.params.result;
    
    let statusText = '';
    switch(result.status) {
        case 0:
            dispatch(setShowMap(false));
            statusText = "Esperando ser retirado"; break;
        case 1:
            dispatch(setShowMap(true));
            statusText = "Retirado, yendo a entregar"; break;
        case 2:
            dispatch(setShowMap(false));
            statusText = "Entregado"; break;
        default:
            dispatch(setShowMap(false));
            statusText = "Sin información"
    }

    return (
        <>
            <SafeAreaView style={ { ...style.container, backgroundColor: stateSetting.style.backgroundLight } }>
                <View style={ style.containerCard }>
                    <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                        <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>#{result.code}</Card.Title>
                        <Card.Divider style={ style.cardDivider } />
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.to}` }</Text>
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.street}` }</Text>
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.city}` }</Text>
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.state}` }</Text>
                        { result.comments ? <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.comments}` }</Text> : <></> }
                    </Card>
                    <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                        <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>Información del paquete</Card.Title>
                        <Card.Divider style={ style.cardDivider } />
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Peso: ${result.packagingweight} ${result.packagingweightunit}` }</Text>
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Volumen: ${result.packagingvolume} ${result.packagingvolumeunit}` }</Text>
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Alto: ${result.packagingheight} ${result.packagingheightunit}` }</Text>
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Largo: ${result.packaginglength} ${result.packaginglengthunit}` }</Text>
                        <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Profundidad: ${result.packagingdepth} ${result.packagingdepthunit}` }</Text>
                    </Card>

                </View>
                
                <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                    <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>Estado</Card.Title>
                    <Card.Divider style={ style.cardDivider } />
                    <View style= { style.containerCardStatus } >
                        <Text style={ { ...style.textStatus, color: stateSetting.style.font } }>{ statusText }</Text>
                    </View>
                </Card>
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
    containerCard: { 
        flex: 1, 
        width: '100%', 
        alignItems: 'center',
        marginBottom: 20
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
        marginTop: 2,
        marginBottom: 2,
        fontSize: 13
    },
    containerCardStatus: {
        alignItems: 'center',
        justifyContent: 'center'        
    },
    textStatus: {
        ...styleBrief.text,
        fontSize: 14,
        textTransform: 'uppercase',
        padding: 4
    },
})

export default ClientInfo