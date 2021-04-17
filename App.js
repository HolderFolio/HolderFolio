import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider as ReduxProvider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
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


// import React, { useState } from 'react';
// import AppLoading from 'expo-app-loading';

// const fetchDatas = () => {
//   // fetch des datas qui doit se terminer avant d'afficher le vrai écran de l'app
//   return fetch().then().catch()
// }

// export default function App() {
//   const [dataLoaded, setDataLoaded] = useState(false)

//   if (!fontLoaded) {
//     // Ecran de loading tant que fetchDatas n'est pas terminé
//     return <AppLoading startAsync={fetchDatas} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />
//   }

//   return (
//     // <App>
//   );
// }


