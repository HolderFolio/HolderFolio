// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger'

import SystemReducer from './system/system-reducer'
import AuthReducer from './auth/auth-reducer'


const rootReducer = combineReducers({
  syteme: SystemReducer,
  Auth: AuthReducer
});

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
  // composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store;


