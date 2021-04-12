import React, {  useState } from 'react';
import { View, TextInput,  Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { forgotPassword } from '../../services/auth'

const ForegetPassword = () => {
    const [email, setEmail] = useState(''); 
    const  { input,containerInput } = styles

    
    const handlClick = () => {
        forgotPassword(email)
    }


    return (
        <View style={containerInput}>
            <Text>Forgot you password ?</Text>
            <TextInput
                style={input}
                placeholder={'email'}
                onChangeText={(email) => setEmail(email)}
                value={email}
            />
            <Button    
                mode={'contained'}
                color={'#E50507'}     
                onPress={() => handlClick()}
            >
                Login
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput: {
        flex: 1, 
        alignContent: 'center',
        justifyContent: 'center',        
    },
    input : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFFF'

    }
})

export default ForegetPassword;