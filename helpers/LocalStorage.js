import AsyncStorage from '@react-native-async-storage/async-storage';


const setStorage = async (value, data) => {
  
    try {
        await AsyncStorage.setItem(value, JSON.stringify(data))
    } catch (e) {
        console.log(e)
        await AsyncStorage.setItem('error', JSON.stringify(e))
    }
  }


const getStorage = async (value) => {
    try {
        let user = await AsyncStorage.getItem(value)
        return JSON.parse(user)
    } catch(e) {
        let err = await AsyncStorage.getItem('error')
        console.log('Erreur GetStorage', err)
        return JSON.parse(err)
    }
}


const removeStarge = async value => {
    return await AsyncStorage.removeItem(value)
}


export const LocalStorage = {
    setStorage: setStorage,
    getStorage: getStorage,
    removeStarge: removeStarge
}