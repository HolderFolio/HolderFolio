import React, { useEffect, useState } from 'react';
import { withTheme, Title, Button, ActivityIndicator, Colors} from 'react-native-paper';
import { StyleSheet, View, TextInput, Text, Linking  } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from '../../redux/auth/auth-action';



const SignInScreen = ( props, navigation ) => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [isloading, setIsloading] = useState(null)
    const error = useSelector(state => state.Auth.errors)
    const dispatch = useDispatch(); 
    const { container, ConatainerButtonLogin, 
        containerTitlteWelcome, titleWelcome,
        containerInput, containerSignUp,
        textSignUp, textAccount,} = styles

    const handlClick = () => {
        setIsloading(true)
        dispatch(AuthAction.loginManuel(email,password)).then(user => {   
            setIsloading(false)
            try {
                if (user.data.status === 'success' || user.data.status === 200) {
                //  navigation.navigate('HomeScreen');
                }
             } catch {
                return user
             } 
        })
    }

    const handleClickSignUp = () => {
        props.navigation.navigate('SignUp');
    }

    return (
        <View style={[container, {backgroundColor: props.theme.colors.surface}]}>
            <View style={containerTitlteWelcome}>
                <Title style={titleWelcome}>Welcome</Title>
            </View>
            <View style={containerInput}>
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
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {isloading === true ?  
                    <ActivityIndicator animating={true} color={Colors.red800} />
                    :
                    error && error.user &&  (<Text style={{color: 'red'}}>{error.user}</Text>)
            }  
            </View>
            <View style={ConatainerButtonLogin}>
                <Button    
                    mode={'contained'}
                    color={'#E50507'}     
                    onPress={() => handlClick()}
                >
                    Login
                </Button>
            </View>
            <View style={containerSignUp}>
                <Text style={textAccount}>Do you don't have account?  </Text>
                <Text style={textSignUp} onPress={() => props.navigation.navigate('SignUp')}>SingUp</Text>
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

export default withTheme(SignInScreen)



