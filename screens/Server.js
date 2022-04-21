import styleBrief from '../style/brief'

import trackData from '../data/track'

import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

const Server = ( {navigation, route} ) => {

    //console.log('trackData', trackData)
    const handlerViewDelivery = (code) => {
        navigation.navigate(
            "Delivery",
            {
                code: code
            }
        )
    }


    const renderItem = (data) => {
        return (
            <>
                <Text
                    style={ style.itemList }
                    key={ data.item.id }
                > { data.item.code }</Text>
                <Button title="Ver" onPress={ () => { handlerViewDelivery(data.item.code) } }></Button>
            </>
        )
    }  

/*     const resultHeader = () => {
        return (
            <View style={ style.viewResultTop } >
                <View style={ style.viewResultTopLeft } >
                    <Text style={ style.viewResultTopText } >Código de seguimiento:</Text>
                    <Text style={ style.viewResultTopTextCode } >{ result.code } </Text>
                </View>

            </View>
        )
    } */

    const ItemSeparator = () => <View style={ styleBrief.itemSeparator } />  

    return (
        <>
            <SafeAreaView 
                style={ style.screen }>
                {/* { resultHeader() } */}
                <FlatList
                    data={ trackData }
                    renderItem={ renderItem }
                    keyExtractor={ (item) => item.id }
                    ItemSeparatorComponent={ ItemSeparator }
                >

                </FlatList>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({

})

export default Server;