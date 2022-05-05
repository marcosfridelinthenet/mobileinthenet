import styleBrief from '../style/brief'

import { getDeliveryList } from '../data/firebaseData'

import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Badge, Button, ListItem, Text } from '@rneui/base';

import MapGoogle from '../components/MapGoogle'
import DeliveryPng from '../assets/img/map/delivery.png';

import Loading from './Loading'

import { useContext, useEffect, useState } from 'react';
import { DeliveryContext } from '../context/delivery';

import { useSelector, useDispatch } from 'react-redux'
import DeliveryGps from './DeliveryGps';

const Delivery = ( {navigation, route} ) => {

    const stateSetting = useSelector(state => state.setting)
    
    const deliveryContext = useContext(DeliveryContext);
    const [ location, setLocation ] = useState({})
    const [ locationOk, setLocationOk ] = useState(false)

    const [ loading, setLoading ] = useState([])
    const [ typeView, setTypeView ] = useState('list')
    
    const handlerDeliveryInfo = (code) => {
        navigation.navigate(
            "DeliveryInfo",
            {
                code: code,
                latitude: location.latitude,
                longitude: location.longitude,                
            }
        )
    }

    useEffect(async () => {
        deliveryContext.setList(await getDeliveryList());

        setLoading(false);
    }, [])

    if(loading) {
        return (
            <Loading/>
        )
    }   

    const renderItem = (data) => {
        let status = 'success';
        let value = "Listo para retirar"
        if(data.item.status === 1) {
            status = "warning" 
            value = "En viaje a destino" 
        }
        if(data.item.status === 2) {
            status = "primary" 
            value = "Entregado"
        }
        
        const badge = <Badge status={ status } value={ value } badgeStyle={ style.statusBadge }></Badge>
        
        return (
            <>
                <TouchableOpacity onPress={ () => { handlerDeliveryInfo(data.item.code) } }>
                    <ListItem key={ data.item.id } bottomDivider 
                        containerStyle={ { ...style.listItem, backgroundColor: stateSetting.style.backgroundLight } }>
                        <ListItem.Content style={ { ...style.listItem, backgroundColor: stateSetting.style.backgroundLight } }>
                            <ListItem.Title style={ { ...style.listItemTitle, color: stateSetting.style.font } }>{ data.item.code } { badge } </ListItem.Title>
                            <ListItem.Subtitle style={ { ...style.listItemSubtitle, color: stateSetting.style.font } }>{ `${data.item.street} - ${data.item.city}` }</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron color={ { ...style.listItemArrow, color: stateSetting.style.font } } />
                    </ListItem>
                </TouchableOpacity>
            </>
        )
    }  

    const getLocationGps = (locationGps) => {
        setLocation({
            latitude: locationGps.latitude,
            longitude: locationGps.longitude 
/*             latitude: -34.55277660488457, 
            longitude: -58.515771292557 */
        });
        setLocationOk(true);

    }

    if (!locationOk) {
        return (
            <DeliveryGps
                getLocationGps = { getLocationGps }
            ></DeliveryGps>
        )
    }

    const ItemSeparator = () => <View style={ styleBrief.itemSeparator } />  

    if(locationOk && typeView === 'list')
        return (
            <>    
                <SafeAreaView 
                    style={ { ...style.container } }>
                    <View style={ { ...style.listContainer, backgroundColor: stateSetting.style.backgroundLight } } >
                        <Text style={ { ...style.listContainerText, color: stateSetting.style.font } }>PEDIDOS DISPONIBLES PARA JUGAR</Text>
                    </View>
                    <FlatList
                        style={ { ...style.list, backgroundColor: stateSetting.style.backgroundLight } }
                        data={ deliveryContext.list }
                        renderItem={ renderItem }
                        keyExtractor={ (item) => item.id }
                        ItemSeparatorComponent={ ItemSeparator }
                    >

                    </FlatList>
                    { locationOk ?
                        <Button
                            title="VER MAPA DE RETIROS DISPONIBLES"
                            onPress={() => { setTypeView('map')} }
                            icon={{
                                name: 'map',
                                type: 'ioicon',
                                size: 15,
                                color: 'white',
                            }}
                            buttonStyle={{
                                ...style.button, 
                                backgroundColor: stateSetting.style.button,
                            }} />  
                        :
                        <></>
                    }
                                       
                </SafeAreaView>
            </>
        )


    if(locationOk && typeView === 'map') {
        const markers = deliveryContext.list
            .filter((item) => {
                return item.status === 0
            })
            .map((item, index) => {
                return { 
                    id: index + 1,
                    code: item.code,
                    latitude: item.coordinate.latitude,
                    longitude: item.coordinate.longitude,
                    title: `Código: ${item.code}`,
                    description:item.street ? item.street : '',
                }
            }
        )
        
        markers.push(
            { 
                id: markers.length + 1,
                latitude: location.latitude,
                longitude: location.longitude,
                title: 'Tu ubicación',
                img: DeliveryPng
            }
        )

        return (
            <>
                <SafeAreaView style={ style.container }>
                    <MapGoogle
                        style={ style.map }
                        markers= {markers}
                        onPress={ handlerDeliveryInfo }
                    >
                    </MapGoogle>
                    <Button
                        title="VER LISTA DE PEDIDOS"
                        onPress={() => { setTypeView('list')} }
                        icon={{
                            name: 'list',
                            type: 'ioicon',
                            size: 15,
                            color: 'white',
                        }}
                        buttonStyle={{
                            ...style.button, 
                            backgroundColor: stateSetting.style.button
                        }}
                    />   
                </SafeAreaView>
            </>
        )        
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    listContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: styleBrief.colors.light.background
    },
    listContainerText: {
        ...styleBrief.text,
        fontSize: 15
    },
    list: {
        flex: 1
    },
    listItemArrow: {
        fontSize: 30
    },
    button: {
        ...styleBrief.button,
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,   
        height: 50     
    },
    map: {
        flex: 1
    },
    statusBadge: {
        borderRadius: 0
    },
    locationContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        fontSize: 20,
        padding: 15
    },

})

export default Delivery;