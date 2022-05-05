import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { StyleSheet } from 'react-native'

import { useSelector } from 'react-redux'

import ScreenEnabled from './PermissionEnabled'

const ClientQr = ({ navigation }) => {

    const stateSetting = useSelector(state => state.setting)
    
    const [ hasPermission, setHasPermission] = useState(null);
    const [ scanned, setScanned] = useState(false);

    useEffect(() => {(
        async () => {
            const { status } = await BarCodeScanner.getPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);

        navigation.navigate(
            'Client', 
            { 
                qr: data
            }      
        );  
    };
  
    const onPressEnableCamara = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    }

    if (hasPermission === null) {
        return (
            <>
                <ScreenEnabled
                    title = "HABILITAR CÁMARA"
                    text = "Necesitamos permiso para acceder a la cámara de tu celular."
                    onPress = { onPressEnableCamara }
                ></ScreenEnabled>
            </>
        )
    }

    if  (hasPermission === false) {
        return (
            <>
                <ScreenEnabled
                    title = "HABILITAR CÁMARA"
                    text = "No se habilito permiso para acceder a la cámara."
                    onPress = { onPressEnableCamara }
                ></ScreenEnabled>
            </>
        )
    }

    return (
        <>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={ { ...StyleSheet.absoluteFillObject, ...style.containerCamera, backgroundColor: stateSetting.style.backgroundLight }  }
            />
            { scanned }
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerCamera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 0,
        margin: 0
    },
    text: {
        fontSize: 20,
        padding: 15
    },
})

export default ClientQr