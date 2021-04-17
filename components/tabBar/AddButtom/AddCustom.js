import React from 'react';
import {  View, Text,StyleSheet } from 'react-native';


const AddCustom = props   => {
    return (
        <View  style={styles.container}>
            <Text>CUSTOM PAGE</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AddCustom