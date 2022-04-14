import { Pressable, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Style from '../constants/Style.js' 
import Button from '../components/Button'

const TrackResult = ({ navigation, route}) => {

    //const p = {};

    //const { code } = p;
    const code = route.params.code
    const onBack = route.params.onBack

    //console.log('route.params.code', route.params.code)

    const handlerOnBack = () => {
        onBack()
    }

    const trackData = [
        {
            code: '12345',
            history: [
                { id: 1, text: 'En depósito', complete: true },
                { id: 2, text: 'Preparando despacho', complete: false },
            ]
        },
        {
            code: '56789',
            history: [
                { id: 3, text: 'En depósito', complete: true },
                { id: 4, text: 'Preparando despacho', complete: true },
                { id: 5, text: 'En camino', complete: false },
            ]
        }
    ]

    const renderItem = (data) => {
        console.log('renderItem', data.item.id)
        return (
/*             <ItemList
                style={ styles.itemlist }
                data={ data }
                onDelete={ onDelete }
                onComplete={ onComplete }
            ></ItemList> */
            <Text
                style={ !data.item.complete ? { ...style.itemList, ...style.itemListCompleteFalse } : style.itemList }
                key={ data.item.id }
            > { data.item.text }</Text>
        )
    }  
    //console.log(trackData);
    const trackOk = trackData.filter((item) => {
        return item.code === code
    })

    const resultHeader = () => {
        return (
            <View style={ style.viewResultTop } >
                <View style={ style.viewResultTopLeft } >
                    <Text style={ style.viewResultTopText } >Código de seguimiento:</Text>
                    <Text style={ style.viewResultTopTextCode } >{ code } </Text>
                </View>
                <View style={ style.viewResultTopRight } >
                    <Button title="Volver" style={ style.button }  onPress={ () => { route.params.onBack() } }></Button>
                </View>
            </View>
        )
    }


    if(trackOk.length == 0) {
        return (
            <>
                <SafeAreaView style={ style.screen }>
                    { resultHeader() }
                    <View style={ style.viewResultContent } >
                        <Text style={ style.viewResultContentText } >CODIGO INVALIDO</Text>  
                    </View>   
                </SafeAreaView>
            </>
        )
    }

    const ItemSeparator = () => <View style={ Style.itemSeparator } />  

    return (
        <>
            <SafeAreaView style={ style.screen }>
                { resultHeader() }
                {/* <Button title="Volver" style={ style.button }  onPress={ handlerOnBack }></Button> */}            
                <View style={ style.viewResultList } >         
                    <FlatList
                        data={ trackOk[0].history.sort((item1, item2) =>{
                                return (item2.id - item1.id)
                            } 
                        )}
                        renderItem={ renderItem }
                        keyExtractor={ (item) => item.id }
                        ItemSeparatorComponent={ ItemSeparator }
                    >

                    </FlatList>
                </View>
            </SafeAreaView>
        </>
    )
}

const style = StyleSheet.create({
    //viewContent: Style.viewContent,
    screen: Style.screen,
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    viewResultTop: Style.viewResultTop,
    viewResultTopLeft: Style.viewResultTopLeft,
    viewResultTopRight: Style.viewResultTopRight,
    viewResultTopText: Style.viewResultTopText,
    viewResultTopTextCode: Style.viewResultTopTextCode,
    button: Style.button,
    viewResultList: Style.viewResultList,
    viewResultContent: Style.viewResultContent,
    viewResultContentText: Style.viewResultContentText,
    itemSeparator: Style.itemSeparator,
    itemList: Style.itemList,
    itemListCompleteFalse: {
        color: 'green'
    }
})


export default TrackResult;