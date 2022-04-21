import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import styleBrief from '../style/brief'


const ClientTrack = ({ navigation, route}) => {

    const result = route.params.result

    const renderItem = (data) => {
        return (
            <Text
                style={ !data.item.complete ? { ...style.itemList, ...style.itemListCompleteFalse } : style.itemList }
                key={ data.item.id }
            > { data.item.text }</Text>
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
                    data={ result.history.sort((item1, item2) =>{
                            return (item2.id - item1.id)
                        } 
                    )}
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


export default ClientTrack;