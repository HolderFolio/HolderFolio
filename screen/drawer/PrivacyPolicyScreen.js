import React from 'react';
import { View, Text, StyleSheet } from "react-native";


const PrivacyPolicyScreen = () => {
    const { containerInput } = styles

    return (
        <View style={containerInput}>
            <Text>PrivacyPolicyScreen</Text>
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

export default PrivacyPolicyScreen;