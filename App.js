import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView,View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, ActivityIndicator, Colors  } from 'react-native-paper';

import store from "./redux/store"
import Index from './Index'





const App = props => {

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


