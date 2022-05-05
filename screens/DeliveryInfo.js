import { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, } from 'react-native'

import { Button, Card, Text } from '@rneui/base';

import styleBrief from '../style/brief'

import Loading from './Loading'

import { getDeliveryList, updateDeliveryStatus } from '../data/firebaseData';

import { DeliveryContext } from '../context/delivery';

import { useSelector } from 'react-redux'

const DeliveryInfo = ( { navigation, route } ) => {

    const deliveryContext = useContext(DeliveryContext);

    const stateSetting = useSelector(state => state.setting)

    const [ loading, setLoading ] = useState(true)
    const [ loadingButton, setLoadingButton ] = useState(false)
    const [ result, setResult ] = useState({});

    const { code, latitude, longitude } = route.params;


    useEffect(() => {
        setResult(deliveryContext.list.find((item) => { return item.code === code }))
        setLoading(false);
    }, [])


    useEffect(() => {
        setResult(deliveryContext.list.find((item) => { return item.code === code }))
    }, [deliveryContext])

    if(loading) {
        return (
            <Loading />
        )
    }

    const setStatusDelivery = async (id, status) => {
        setLoadingButton(true)
            
//      await updateDeliveryStatus(id, status, -34.55277660488457, -58.515771292557)
        await updateDeliveryStatus(id, status, latitude, longitude)

        deliveryContext.setList(await getDeliveryList());
        
        setLoadingButton(false)
    }

    const ButtonOption = (props) => {
        if(loadingButton) {
            return (
                <>
                    <Button
                        loading
                        buttonStyle={{
                            ...style.buttonOption, 
                            backgroundColor: stateSetting.style.button
                        }}
                    />                  
                </>
            )
        }

        return (
            <>
                <Button
                    title={ props.title }
                    onPress={ props.onPress }
                    buttonStyle={{
                        ...style.buttonOption, 
                        backgroundColor: stateSetting.style.button
                    }}
                />   
            </>
        )

    }

    return (
        <>
            <SafeAreaView style={ { ...style.container, backgroundColor: stateSetting.style.backgroundLight } }>

                <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                    <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>#{result.code}</Card.Title>
                    <Card.Divider />
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.to}` }</Text>
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.street}` }</Text>
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.city}` }</Text>
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.state}` }</Text>
                    { result.comments ? <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `${result.comments}` }</Text> : <></> }
                </Card>
                <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                    <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>Información del paquete</Card.Title>
                    <Card.Divider />
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Peso: ${result.packagingweight} ${result.packagingweightunit}` }</Text>
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Volumen: ${result.packagingvolume} ${result.packagingvolumeunit}` }</Text>
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Alto: ${result.packagingheight} ${result.packagingheightunit}` }</Text>
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Largo: ${result.packaginglength} ${result.packaginglengthunit}` }</Text>
                    <Text style={ { ...style.text, color: stateSetting.style.font } }>{ `Profundidad: ${result.packagingdepth} ${result.packagingdepthunit}` }</Text>
                </Card>
                <Card containerStyle={ { ...style.card, backgroundColor: stateSetting.style.backgroundLight } }>
                    <Card.Title style={ { ...style.cardTitle, color: stateSetting.style.font } }>¿Que desea hacer con el paquete?</Card.Title>
                    <Card.Divider />
                    { result.status != 0 ? <Text style={ { ...style.text, color: stateSetting.style.font } }>Para reiniciar la entrega</Text> : <></> }
                    { result.status != 0 ? <ButtonOption title="DEVOLVER A ORIGEN" onPress={ () => { setStatusDelivery(result.id, 0); } } ></ButtonOption> : <></> }
                    { result.status == 0 ? <Text style={ { ...style.text, color: stateSetting.style.font } }>Para habilitar el mapa en cliente y gps del delivery</Text> : <></> }
                    { result.status == 0 ? <ButtonOption title="RETIRAR" onPress={ () => { setStatusDelivery(result.id, 1); } }></ButtonOption> : <></> }
                    { result.status == 1 ? <Text style={ { ...style.text, color: stateSetting.style.font } }>Lo quita del mapa de entregas</Text> : <></> }
                    { result.status == 1 ? <ButtonOption title="ENTREGA FINALIZADA" onPress={ () => { setStatusDelivery(result.id, 2) } }></ButtonOption> : <></> }
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
    card: {
        width: '90%',
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
        marginBottom: 5,        
    },
    text: {
        ...styleBrief.text,
        marginTop: 2,
        marginBottom: 2,
        fontSize: 13
    },
    buttonOption: {
        ...styleBrief.button,
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,      
        marginTop: 5,
        marginBottom: 5  
    },
})

export default DeliveryInfo;