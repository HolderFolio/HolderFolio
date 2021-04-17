import React from 'react';
import {  View, Text,StyleSheet } from 'react-native';
import ModalAdd from '../ModalAdd';


const AddApi = ({navigation})   => {

    return (
        <View  style={styles.container}>
            <Text slyle={styles.text}>AddApi PAGE</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black'
    }
})

export default AddApi