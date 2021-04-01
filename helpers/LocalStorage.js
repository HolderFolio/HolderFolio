import AsyncStorage from '@react-native-async-storage/async-storage';


const setStorage = async (value, data) => {
    try {
        await AsyncStorage.setItem(value, JSON.stringify(data))
    } catch (e) {
        await AsyncStorage.setItem('error', JSON.stringify(e))
    }
  }


const getStorage = async (value) => {
    let user = ''
    try {
        user = await AsyncStorage.getItem(value)
        return user
    } catch(e) {
        return await AsyncStorage.getItem('error')
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