import React, { useEffect } from 'react';
import { Provider as PaperProvider, ActivityIndicator, Colors  } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import {LightTheme, DarkTheme} from "./assets/CustomTheme"
import { AuthAction } from './redux/auth/auth-action';
import { LocalStorage } from './helpers/LocalStorage';
import AppStackNavigator from './navigations/AppStackNavigator';



const Index = props => {
  const toggle = useSelector(state => state.Auth.userPreferences.theme)
  const isLoading = useSelector(state => state.Auth.loginLoading)
  const user =  LocalStorage.getStorage('user')
  const dispatch = useDispatch()

  useEffect(() => {
    
      user.then(res =>{
        dispatch(AuthAction.setCurrentUser(res))
        dispatch(AuthAction.loginLoadingAction())
    })
  }, [user])


if (isLoading) {
  return (<View style={{justifyContent: 'center', flex: 1, alignContent:'center'}}>
  <ActivityIndicator size='large'/>
 </View>)
}
 
return (
    <PaperProvider  style={styles.safeAreaView} theme={toggle === 'dark' ? DarkTheme : LightTheme}>
      <AppStackNavigator />
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});


export default Index