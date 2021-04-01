import { SystemActionTypes } from './system-types'

export const toggleDrawerAction = drawerNav => ({
    type: SystemActionTypes.TOGGLE_DRAWER,
    payload: drawerNav
})

export const toggleThemeColorAction = toggle => ({
    type: SystemActionTypes.TOGGLE_THEME_COLOR,
    payload: toggle
})