import AsyncStorage from '@react-native-async-storage/async-storage';


const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@auth_token');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return null;
    }
  };
  
  const setToken = async (token) => {
    try {
      await AsyncStorage.setItem('@auth_token', token);
    } catch (e) {
      return null;
    }
  };


export const StorageToken = {
    setToken: setToken,
    getToken: getToken,
}