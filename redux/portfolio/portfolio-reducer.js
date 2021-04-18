import { PortFolioActionTypes } from './portfolio-types'

const INITIAL_STATE = {
    postFolioList: null,
    error: {}
  };

const PortFolioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PortFolioActionTypes.PORTFOLIO_CREATE_SUCCESS :
            // console.log('TEST------',action.payload.data)
            return {
                ...state,
                postFolioList: action.payload
            }
        case PortFolioActionTypes.PORTFOLIO_CREATE_ERROR :
            return {
                ...state,
                error: {portfolio: action.payload}
            }
        default:
            return state 
    }
}

export default PortFolioReducer;