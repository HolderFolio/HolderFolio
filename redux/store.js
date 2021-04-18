// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import logger from 'redux-logger'

import SystemReducer from './system/system-reducer'
import AuthReducer from './auth/auth-reducer'
import PortFolioReducer from './portfolio/portfolio-reducer'
import AssetReducer from './asset/asset-reducer'
import ExchangeReducer from './exchange/exchange-reducer'


const rootReducer = combineReducers({
  syteme: SystemReducer,
  Auth: AuthReducer,
  PortFolio: PortFolioReducer,
  Asset: AssetReducer,
  Exchange: ExchangeReducer,
});

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
  // composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store;


