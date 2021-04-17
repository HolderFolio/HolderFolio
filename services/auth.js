import axios from "axios";
import { ToolbarAndroidBase } from "react-native";
import { AUTH_ENDPOINTS } from "../constants/EndPoints_API";
import { LocalStorage } from '../helpers/LocalStorage'
import { StorageToken } from "../helpers/StorageToken";
import { client } from './AxiosConfig'

const setDataStorageSuccess = (data, token) => {
  LocalStorage.setStorage('user', data)
  StorageToken.setToken(token)
}

const setDataStorageError = () => {
  LocalStorage.removeStarge('user')
  StorageToken.setToken(null)
}

const loginManuel = user => {
  // var data = {
  //   "email": user.email,
  //   "password": user.password
  // }
  var data = { data: {
    user: {
      "email": 'andres.gomesiglesias@gmail.com',
      "password": '12Nevers34*'
    }
  }
  }
  
 

  return client().post(AUTH_ENDPOINTS.LOGIN, JSON.stringify(data)).then(res => {
    setDataStorageSuccess(res.data, res.data.token)
    
    console.log(res.data)
    return res;
  }).catch(function (err) {
    console.log(err.message)
    setDataStorageSuccess(data, "data")
    // setDataStorageError()
    return err.response.data
  })
}


const loginWithGoogle = token => {
  const data = { 'idToken': token }

  return client().post(AUTH_ENDPOINTS.LOGINWITHGOOGLE, JSON.stringify(data)).then(res => {
    setDataStorageSuccess(res.data, res.data.token)
    return res
  }).catch(err => {
    console.log(err)
    setDataStorageError()
    return err.response.data
  })
}


const register = data => {

  return client().post(AUTH_ENDPOINTS.REGISTER, data).then(res => {
    setDataStorageSuccess(res.data, res.data.token)
    return newUser
  }).catch(err => {
    setDataStorageError()
    return err.response.data
  })
}


const logout = () => {
  return client().get(AUTH_ENDPOINTS.LOGOUT).then(user => {
    setDataStorageError()
    return true
  }).catch(function (err) {
    return err.response.data
  })
}

const forgotPassword = email => {
  const data = { "email": email, }

  return client().post(AUTH_ENDPOINTS.FORGETPASSWORD, data).then(res => {
  }).catch(err => {
    console.log(err.response.data)
  })

}

export const Auth = {
  loginManuel: loginManuel,
  logout: logout,
  register: register,
  forgotPassword: forgotPassword,
  loginWithGoogle: loginWithGoogle
}
