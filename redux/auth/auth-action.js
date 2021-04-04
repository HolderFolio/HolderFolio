import { AuthActionTypes } from './auth-types'
import { Auth } from '../../services/auth'

const setCurrentUser = (user) => ({
    type: AuthActionTypes.SET_CURRENT_USER,
    payload: user,
  });

const loginLoadingAction = () => ({
    type: AuthActionTypes.LOGIN_LOADING,
    payload: false,
  });

const errorSetUser = err => ({
  type: AuthActionTypes.ERROR_LOGIN_USER,
  payload: err,
})



const loginManuel = (email, password) =>  {
  return dispatch => {
    var data = { email, password }
    return Auth.loginManuel(data).then(user => {
      try {
          if (user.data.status === 'success' || user.data.status === 200) {
            dispatch(setCurrentUser(user))
          }
       } catch {
          var err = user.message
          dispatch(errorSetUser(err))
       }
    })
  }
}

const registersuccess = data => ({
  type: AuthActionTypes.REGISTER_SUCCES,
  payload: data
})

const registerAction = data => {
  return dispatch => {
    return Auth.register(data).then(newUser => {
      console.log(newUser)
      dispatch(registersuccess(newUser))
    })

  }
}
 
 
  

  const logout = () => dispatch => {
      Auth.logout().then(user => {
        dispatch(logoutSuccess())
      })
  }
  const logoutSuccess = () => ({
    type: AuthActionTypes.LOGOUT_SUCCESS,
    payload: null
  })

  export const AuthAction = {
    loginManuel: loginManuel,
    setCurrentUser: setCurrentUser,
    logout: logout,
    loginLoadingAction: loginLoadingAction,
    registerAction, registerAction,
  }