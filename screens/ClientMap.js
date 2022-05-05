import { useEffect, useState } from 'react'
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native'

import Loading from './Loading'

import MapGoogle from '../components/MapGoogle'
import Home from '../assets/img/map/home.png';
import Delivery from '../assets/img/map/delivery.png';

const ClientMap = ({ navigation, route}) => {
    const result = route.params.result
    
    const [ loading, setLoading ] = useState([])
    
    useEffect(async () => {
        setLoading(false);
    }, [])

    if(loading) {
        return (
            <Loading />
        )
    }

    const markers = [
        { 
            id: 1,
            latitude: result.coordinate.latitude,
            longitude: result.coordinate.longitude,
            title: result.to,
            description: result.street ? result.street : '',
            img: Home
        }
    ]

    if(result.delivery){
        markers.push(
            { 
                id: 2,
                latitude: result.delivery.latitude,
                longitude: result.delivery.longitude,
                title: 'Tu paquete está en camino',
                img: Delivery
            }
        )
    }

    return (
        <>
            <SafeAreaView 
                style={ style.screen }>

                <MapGoogle
                    style={ style.map }
                    markers={ markers }
                >

                </MapGoogle>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    map: {
        /* alignSelf: 'stretch',  */
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }
})

export default ClientMap; 