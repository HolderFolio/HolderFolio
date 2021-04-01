import React, { useEffect, useState } from 'react';
import { Provider as PaperProvider, ActivityIndicator, Colors  } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import NavigationFile from './NavigationFile'
import {LightTheme, DarkTheme} from "./assets/CustomTheme"
import { AuthAction } from './redux/auth/auth-action';
import { LocalStorage } from './helpers/LocalStorage';



const Index = () => {
  const toggle = useSelector(state => state.syteme.theme)
  const isLoading = useSelector(state => state.Auth.loginLoading)
 
  const user =  LocalStorage.getStorage('user')
  const dispatch = useDispatch()

  // const [ loading , isLoading] = useState(true)


  useEffect(() => {
    
    user.then(user =>{
        dispatch(AuthAction.setCurrentUser(user))
        dispatch(AuthAction.loginLoadingAction())
    })
  }, [user])

  if (isLoading) {
    return (<View style={{justifyContent: 'center', flex: 1, alignContent:'center'}}>
     <ActivityIndicator size='large'/>
    </View>)
  }
 

  return (
    <PaperProvider  style={styles.safeAreaView} theme={toggle ? DarkTheme : LightTheme}>
      <NavigationFile />
    </PaperProvider>
  )
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});


export default Index