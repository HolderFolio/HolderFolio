import { StorageToken } from './StorageToken';

export const  AuthHeader = async () => {
  const token = await StorageToken.getToken()
    if (token !== null) {
      return 'Token ' + token;
    } else {
      return null;
    }
}