import { Text } from 'react-native'

const ServerDelivery = ( { navigation, route } ) => {

    return (
        <>
            <Text>{ route.params.code }</Text>
        </>
    )

}

export default ServerDelivery;