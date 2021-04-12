import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider as ReduxProvider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

import store from "./redux/store"
import Index from './Index'

import * as firebase from 'firebase'
import{ firebaseConfig } from './services/FireBaseConfig'
 




const App = props => {

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
      })
    }
        
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ReduxProvider store={store}>
        <NavigationContainer >
          <Index />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});


export default App


