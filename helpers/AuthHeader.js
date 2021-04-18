import { StorageToken } from './StorageToken';

export const  AuthHeader = async () => {
  const token = await StorageToken.getToken()
    if (token !== null) {
      const authorization ='Bearer ' + token
      return authorization
    } else {
      return null;
    }
}