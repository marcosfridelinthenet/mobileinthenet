import Button from '../components/Button'
import { Text } from 'react-native';

const Index = ( { navigation } ) => {

    const handlerClickMode = (mode) => {
        navigation.navigate(mode)
    }

    return (
        <>
            <Button title="Cliente" onPress={ () => { handlerClickMode('ModeClient') } }></Button>
            <Button title="Servidor" onPress={ () => { handlerClickMode('ModeServer') } }></Button>
            <Button title="Ajustes" onPress={ () => { handlerClickMode('Settings') } }></Button>
        </>
    )
}

export default Index;