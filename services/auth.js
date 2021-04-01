import axios from "axios";
import { LocalStorage } from '../helpers/LocalStorage'




const loginManuel =  user => {
var data = {
    "email": user.email,
    "password": user.password
}
var data = {
    "email": "andres.gomesiglesias@gmail.com",
    "password": "12Nevers34*"
}
var conf = {
  headers: {
    'Content-Type': 'application/json'
    }
}
return axios.post(`https://holderfolio-backend.herokuapp.com/api/v1/users/login`, JSON.stringify(data), conf).then(user => {
      LocalStorage.setStorage('user', user.data)
      return user;
  }).catch(function (err) {
      LocalStorage.removeStarge('user')
      return err
  })
}



const logout =  () => {
  var conf = {
    headers: {
      'Content-Type': 'application/json'
      }
  }
  return axios.get(`https://holderfolio-backend.herokuapp.com/api/v1/users/logout`, conf).then(user => {
  if (user.status === 200) {
      LocalStorage.removeStarge('user')
      return true
    }
  }).catch(function (err) {
      return false
  })
}


export const Auth = {
  loginManuel: loginManuel,
  logout: logout
}
  