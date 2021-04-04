import axios from "axios";
import { LocalStorage } from '../helpers/LocalStorage'


// https://holderfolio-backend-dev.herokuapp.com/

const loginManuel =  user => {
var data = {
    "email": user.email,
    "password": user.password
}
// var data = {
//     "email": "andres.gomesiglesias@gmail.com1",
//     "password": "12Nevers34*"
// }
var conf = {
  headers: {
    'Content-Type': 'application/json'
    }
}
return axios.post(`https://holderfolio-backend-dev.herokuapp.com/api/v1/users/login`, JSON.stringify(data), conf).then(user => {
      LocalStorage.setStorage('user', user.data)
      return user;
  }).catch(function (err) {
      LocalStorage.removeStarge('user')
      return err
  })
}

const register = data => {
  console.log(data)
  const data2 ={
    "name": "user2",
    "email": "user4@user.com",
    "password": "ABcd1234*",
    "passwordConfirm": "ABcd1234*"
}
  var conf = {
    headers: {
      'Content-Type': 'application/json'
      }
  }
  return axios.post('https://holderfolio-backend-dev.herokuapp.com/api/v1/users/signup', data2, conf).then(newUser => {
    return newUser
  }).catch(res => {
    return res
  })
}


const logout =  () => {
  var conf = {
    headers: {
      'Content-Type': 'application/json'
      }
  }
  return axios.get(`https://holderfolio-backend-dev.herokuapp.com/api/v1/users/logout`, conf).then(user => {
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
  logout: logout,
  register: register
}
  