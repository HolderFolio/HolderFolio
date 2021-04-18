import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


const PortFolioScreen = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('createPorfolio')
    }
    return (
        <View style={styles.container}>
            <Text>Portfolio</Text>
            <Button onPress={() => handlePress()}>Create PortForlio</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default PortFolioScreen