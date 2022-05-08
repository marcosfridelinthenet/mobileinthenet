import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker  } from 'react-native-maps';

import Mark from '../assets/img/map/mark.png'

const MapGoogle = (props) => {
    const { markers, onPress } = props;
    //const style = { style.map, ...props.style} 

    const { width, height } = Dimensions.get('window');

    let initLatitude = 0;
    let initLongitude = 0;
    let initLatitudeDelta = 0;
    let initLongitudeDelta = 0;

    if(markers) {
        if (markers.length === 1) {
            initLatitude = markers[0].latitude;
            initLongitude = markers[0].longitude;
/*             initLatitudeDelta = 0.02;
            initLongitudeDelta = 0.02; */
        }


        if (markers.length > 1) {
            let limit = {
                minLatitude: markers[0].latitude,
                maxLatitude: markers[0].latitude,
                minLongitude: markers[0].longitude,
                maxLongitude: markers[0].longitude
            }
            /* console.log('limit', limit) */
            limit = markers.reduce((limiteTotal, item) => {
                return {
                    minLatitude: item.latitude < limiteTotal.minLatitude ? item.latitude : limiteTotal.minLatitude,
                    maxLatitude: item.latitude > limiteTotal.maxLatitude ? item.latitude : limiteTotal.maxLatitude,
                    minLongitude: item.longitude < limiteTotal.minLongitude ? item.longitude : limiteTotal.minLongitude,
                    maxLongitude: item.longitude > limiteTotal.maxLongitude ? item.longitude : limiteTotal.maxLongitude
                }
            }, limit)
    
//            console.log('limit', limit)
            initLatitude = (limit.maxLatitude + limit.minLatitude) / 2;
            initLongitude = (limit.maxLongitude + limit.minLongitude) / 2;
/*             initLatitudeDelta = (limit.maxLatitude - limit.minLatitude) * 1.4;
            initLongitudeDelta = (limit.maxLongitude - limit.minLongitude) * 1.4; */
//            console.log(Math.abs(limit.maxLatitude), Math.abs(limit.minLatitude), Math.abs(limit.maxLongitude), Math.abs(limit.minLongitude));

            if((Math.abs(limit.maxLatitude) / Math.abs(limit.minLatitude)) > (Math.abs(limit.maxLongitude) / Math.abs(limit.minLongitude))){
                initLatitudeDelta = initLongitudeDelta = ((Math.abs(limit.maxLatitude) > Math.abs(limit.minLatitude) ? Math.abs(limit.maxLatitude) : Math.abs(limit.minLatitude)) - Math.abs(initLatitude)) * 3;
                //initLongitudeDelta = initLatitudeDelta;

            } else {    
                initLatitudeDelta = initLongitudeDelta = ((Math.abs(limit.maxLongitude) > Math.abs(limit.minLongitude) ? Math.abs(limit.maxLongitude) : Math.abs(limit.minLongitude)) - Math.abs(initLongitude)) * 3;
            }
        }
    }

/*     const initLatitude = (result.coordenate.latitude + (-34.5149956)) / 2;
    const initLongitude = (result.coordenate.longitude + (-58.4852447)) / 2;
    const initLatitudeDelta = (result.coordenate.longitude - (-58.4852447)) * 15;
    const initLongitudeDelta = (result.coordenate.longitude - (-58.4852447)) * 15; */
    if(initLatitudeDelta < 0) initLatitudeDelta = initLatitudeDelta * -1;
    if(initLongitudeDelta < 0) initLongitudeDelta = initLongitudeDelta * -1 ;



/*     console.log('latitude:  ', initLatitude);
    console.log('longitude: ', initLongitude);
    console.log('latitudeDelta: ', initLatitudeDelta);
    console.log('longitudeDelta: ', initLatitudeDelta);
  */
/*     if(props.style)
        if(!props.style.flex)
            props.style['heigth'] = Dimensions.get('window').heigth; */

    return (
        <>
            <MapView 
                style={ { ...style.map, ...props.style } }
                provider={ PROVIDER_GOOGLE }
                initialRegion={{
                    latitude: initLatitude,
                    longitude: initLongitude,
                    latitudeDelta: initLatitudeDelta,
                    longitudeDelta: initLatitudeDelta,
                }} 
                pitchEnabled={ true }
                zoomEnabled={ true }
                showUserLocation = {false}
                mapType="standard" 
                >
                {
                    markers.map((marker) => (
                        <Marker
                            key={marker.id}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                                }}
                            title={ marker.title }
                            description={ marker.description ? marker.description : '' }
                            onCalloutPress={() => { if(onPress) onPress(marker.code) } }
                        >
                            <Image
                                source={ marker.img ? marker.img : Mark }
                                style={{width: 35, height: 35}}
                                resizeMode="contain"
                            />
                            <MapView.Callout>
                                <View style={ { width: 100 }}>
                                    <Text>{ marker.title }</Text>
                                </View>
                            </MapView.Callout>                        
                        </Marker>
                    ))
                }                        
            </MapView>
        </>
    )
}


const style = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
      }
})

export default MapGoogle;