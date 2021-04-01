import { SystemActionTypes } from './system-types'

const INITIAL_STATE = {
    drawerNav: false,
    theme: true
  };

const SystemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SystemActionTypes.TOGGLE_DRAWER:
            return {
                ...state,
                drawerNav: !action.payload,
            }
        case SystemActionTypes.TOGGLE_THEME_COLOR:
            return {
                ...state,
                theme: !action.payload,
            }
        default:
            return state 
    }
}

export default SystemReducer;