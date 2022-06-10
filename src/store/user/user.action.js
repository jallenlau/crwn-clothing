import { createAction } from '../../utiles/reducer/reducer.utils'
import  { SET_CURRENT_USER_STATE }  from './user.types'


export const setCurrentUser = (user) => 
    createAction(SET_CURRENT_USER_STATE.SET_CURRENT_USER, user);