import React, { useState } from 'react';
import { withTheme } from 'react-native-paper';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useDispatch } from "react-redux";
import { AuthAction } from '../../redux/auth/auth-action';



const SignInScreen = ( props, navigation ) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const dispatch = useDispatch(); 
    const { container } = styles

    const handlClick = () => {
        dispatch(AuthAction.loginManuel(email,password)).then(user => {
            props.navigation.navigate('HomeScreen');
        })
    }

    return (
        <View style={[container, {backgroundColor: props.theme.colors.surface}]}>
            <TextInput
                style={styles.input}
                placeholder={'email'}
                onChangeText={(email) => setEmail(email)}
                value={email}
            />
            <TextInput
                style={styles.input}
                value={password}
                placeholder="password"
                onChangeText={(password) => setPassword(password)}
            />
            <Button 
                title={'login'}
                onPress={() => handlClick()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {  
        flex: 1, 
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor: '#FFFF'
      },
})

export default withTheme(SignInScreen)



