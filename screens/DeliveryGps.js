import * as Location from 'expo-location'
import { useEffect, useState } from 'react';

import PermissionEnabled from './PermissionEnabled'
import Loading from './Loading'

import { useSelector, useDispatch } from 'react-redux'

const DeliveryGps = (props) => {

    const stateSetting = useSelector(state => state.setting)

    const [ hasPermission, setHasPermission] = useState(true);

    const verifyPermissions = async () => {
        const { status } = await Location.getForegroundPermissionsAsync();
        return (status === 'granted');
    }
  
    const onPressEnableLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === 'granted'){
            setHasPermission(status === 'granted');

            getLocation();
        }
    }
    
    const getLocation = async () => {
        try{
            const location = await Location.getCurrentPositionAsync({
                timeout: 10000 
            });

            if(location.coords) {
                props.getLocationGps(location.coords)
                return;
            }
    
            return (
                <PermissionEnabled
                    title = "REINTENTAR"
                    text = "No se pudo obtener información del gps. Por favor, reintente."
                    onPress = { getLocation }
                ></PermissionEnabled>   
            )
        } catch (e) {
            console.log('error', e)
            setHasPermission(false);
        }
    } 

    useEffect(async () => {
        const asyncHasPermission = await verifyPermissions()

        setHasPermission (asyncHasPermission);

        if(asyncHasPermission)
            return getLocation();
    }, [])
    
    if  (!hasPermission) {
        return (
                <PermissionEnabled
                    title = "HABILITAR GPS"
                    text = "Necesitamos permiso para acceder a la geolocalización de tu celular."
                    onPress = { onPressEnableLocation }
                ></PermissionEnabled>                
            )
    }

    if  (hasPermission){
        return (
            <>   
                <Loading
                    text = "Obteniendo geolocalización..."
                />         
            </>
        )
    }
}

const style = ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    },
    linearProgress: {
        heigth: 200,
        width: "90%"
    }
})


export default DeliveryGps;