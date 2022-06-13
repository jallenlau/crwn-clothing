import { createAction } from '../../utiles/reducer/reducer.utils'
import { CATEGORIES_STATE } from './category.types'


export const setCategories = (categoryArray) => 
    createAction(CATEGORIES_STATE.SET_CATEGORIES, categoryArray);