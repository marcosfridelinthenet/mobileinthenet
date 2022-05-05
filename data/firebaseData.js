import db from './firebaseConfig'
import { collection, doc, docs, getDocs, orderBy, query, setDoc, updateDoc, where } from 'firebase/firestore'

export const getTrackInfo = async (code) => {
    try{
        const queryCollection = 
            query(collection(db, "tracks"), where('code', '==', code));
        const querySnapshot = await getDocs(queryCollection);
        
        return querySnapshot.docs.map(
            document => ({
                id: document.id,
                ...document.data()
            })
        )
        
    } catch (e) {
        console.log('Error firebaseData getTrackInfo', e)
        console.error(e);
    }

    return null;
}

export const getDeliveryList = async () => {
    try{
        const queryCollection = 
            query(collection(db, "tracks"));
        const querySnapshot = await getDocs(queryCollection);

        return (
            querySnapshot.docs.map(
                (document, index) => ({
                    id: document.id,
                    ...document.data()
                })
            )
        )
    } catch (e) {
        console.log('Error firebaseData getTrackInfo', e)
        console.error(e);        
    }

    return null;
}

export const updateDeliveryStatus = async (id, status, latitude, longitude) => {
    try{
        const deliveryDoc = doc(collection(db, "tracks"), id)
        
        await updateDoc(deliveryDoc, {
            status: status,
            delivery: {
                latitude: latitude,
                longitude: longitude
            }
        })

    } catch (e) {
        console.log('Error firebaseData updateDeliveryStatus', e)
        console.error(e);    
    }

    return null;
}

export const setDeliveryCoordinate = async (latitude, longitude) => {
    try{
        const deliveryDoc = doc(collection(db, "delivery"), 'eoXH73AHNPW401R0jBPb')
        
        await setDoc(deliveryDoc, {
            coordinate: {
                latitude: latitude,
                longitude: longitude
            },
        })
    } catch (e) {
        console.log('Error firebaseData setDeliveryCoordinate', e)
        console.error(e);    
    }

    return null;
}

export const getDeliveryCoordinate = async (code) => {
    try{
        const queryCollection = 
            query(collection(db, "tracks"), where('code', '==', code));
        const querySnapshot = await getDocs(queryCollection);
        
        return querySnapshot.docs[0].data();
/*         console.log('getDeliveryCoordinate querySnapshot.docs', querySnapshot.docs[0].data())
        return querySnapshot.docs.map(
            document => ({
                id: document.id,
                ...document.data()
            })
        ) */
        
    } catch (e) {
        //console.log('error', e)
        console.log('Error firebaseData getDeliveryCoordinate', e)
        console.error(e);
    }

    return null;
}