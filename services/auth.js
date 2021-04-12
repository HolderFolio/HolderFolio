import axios from "axios";
import { AUTH_ENDPOINTS } from "../constants/EndPoints_API";
import { LocalStorage } from '../helpers/LocalStorage'
import { StorageToken } from "../helpers/StorageToken";
import { client } from './AxiosConfig'

const loginManuel = user => {
  var data = {
      "email": user.email,
      "password": user.password
  }
  // var data = {
  //   "email": "andres.gomesiglesias@gmail.com",
  //   "password": "12Nevers34*"
  // }
  return client().post(AUTH_ENDPOINTS.LOGIN, JSON.stringify(data)).then(res => {
    LocalStorage.setStorage('user', res.data)
    StorageToken.setToken(res.data.token)
    return res;
  }).catch(function (err) {
    LocalStorage.removeStarge('user')
    StorageToken.setToken(null)
    return err.response.data
  })
}


const register = data => {

  return client().post(AUTH_ENDPOINTS.REGISTER, data ).then(newUser => {
    LocalStorage.setStorage('user', newUser.data)
    StorageToken.setToken(newUser.token)
    return newUser
  }).catch(res => {
    LocalStorage.removeStarge('user')
    StorageToken.setToken(null)
    return res
  })
}


const logout =  () => {
  return client().get(AUTH_ENDPOINTS.LOGOUT).then(user => {
      LocalStorage.removeStarge('user')
      StorageToken.setToken(null)
      return true
  }).catch(function (err) {
      return false
  })
}

const forgotPassword = email => {
    var data = {
      "email": email,
  }
  return client().post(AUTH_ENDPOINTS.FORGETPASSWORD, data).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err.response.data)
  })

}

export const Auth = {
  loginManuel: loginManuel,
  logout: logout,
  register: register,
  forgotPassword: forgotPassword
}
  