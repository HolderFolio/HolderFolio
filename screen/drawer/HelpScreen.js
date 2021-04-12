import React from 'react';
import { View, Text, StyleSheet } from "react-native";


const HelpScreen = () => {


    return (
        <View style={containerInput}>
            <Text>ContactSupportScreen</Text>
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

export default HelpScreen;