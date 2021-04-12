import React from 'react';
import { View, Text, StyleSheet } from "react-native";


const PortFolioSettingsScreen = () => {
    const { containerInput } = styles

    return (
        <View style={containerInput}>
            <Text>PortFolioSettingsScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        flex: 1, 
        alignContent: 'center',
        justifyContent: 'center',        
    },
})

export default PortFolioSettingsScreen;