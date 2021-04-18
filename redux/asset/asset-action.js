import { Asset } from '../../services/asset'
import { AssetActionTypes } from './asset-types'

// const createPortFolioSuccess = portfolio => ({
//     type: PortFolioActionTypes.PORTFOLIO_CREATE_SUCCESS,
//     payload: portfolio,
// })

// const createPortFolioError = err => ({
//     type: PortFolioActionTypes.PORTFOLIO_CREATE_ERROR,
//     payload: err,
// })

// const createPortFolioAction = name => {
//     return dispatch => {
//        return  Portfolio.getListPortFolio().then(res => {
//             dispatch(createPortFolioSuccess(res))
//         }).then(err => {
//             dispatch(createPortFolioError(err))
//         })
//     }
// }

// const getListPortFolioAction = () => {
//     return dispatch => {
//        return  Portfolio.getListPortFolio().then(res => {
//             dispatch(createPortFolioSuccess(res))
//         }).then(err => {
//             dispatch(createPortFolioError(err))
//         })
//     }
// }

export const AssetAction = {
    // createPortFolioAction: createPortFolioAction,
    // getListPortFolioAction:  getListPortFolioAction
}