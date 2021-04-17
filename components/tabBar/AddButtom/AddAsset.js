import React from 'react';
import {  View, Text,StyleSheet } from 'react-native';


const AddAsset = props   => {
    return (
        <View  style={styles.container}>
            <Text>AddAsset PAGE</Text>
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

export default AddAsset