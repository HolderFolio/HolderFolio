import React, { useState } from 'react';
import { withTheme, Title, Button, } from 'react-native-paper';
import { StyleSheet, View, TextInput, } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from '../../redux/auth/auth-action';


const SignUpScreen = ( props ) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); 
    const [confirmpassword, setConfirmPassword] = useState('');

    const { container, ConatainerButtonLogin, 
        containerTitlteWelcome, titleWelcome,
        containerInput,} = styles

    const dispatch = useDispatch();
    const handlClick = () => {
      var data = {
        'name': name,
        'email': email,
        'password': password,
        'confirmpassword': confirmpassword
      }
      dispatch(AuthAction.registerAction(data))
    }


    return (
        <View style={[container, {backgroundColor: props.theme.colors.surface}]}>
            <View style={containerTitlteWelcome}>
                <Title style={titleWelcome}>Register</Title>
            </View>
            <View style={containerInput}>
              <TextInput
                    style={styles.input}
                    placeholder={'name'}
                    onChangeText={() => setName()}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'email'}
                    onChangeText={() => setEmail()}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="password"
                    onChangeText={() => setPassword()}
                />
                <TextInput
                    style={styles.input}
                    value={confirmpassword}
                    placeholder="confirmpassword"
                    onChangeText={() => setConfirmPassword()}
                />
            </View>
            <View style={ConatainerButtonLogin}>
                <Button    
                    mode={'contained'}
                    color={'#E50507'}     
                    onPress={() => handlClick()}
                >
                    Register
                </Button>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {  
        flex: 1, 
        alignContent: 'center',
        justifyContent: 'center', 
    },
    containerTitlteWelcome : {
        height: 'auto',
        alignItems: 'center'
    },
    titleWelcome: {
        height: 'auto',
        paddingVertical: 20,
        fontSize: 40
    },
    containerInput: {    
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFFF'
      },
    ConatainerButtonLogin : {
        marginTop: 50,
        marginHorizontal: 50,
    },

    ButtonLogin : { 
    },
    containerSignUp: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginTop: 20,
    },
    textAccount: {
        color: 'grey',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textSignUp: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
    }

})

export default withTheme(SignUpScreen)



