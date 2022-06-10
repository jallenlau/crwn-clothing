import { createAction } from '../../utiles/reducer/reducer.utils'
import { CATEGORIES_STATE } from './category.types'


export const setCategoriesMap = (categoryMap) => 
    createAction(CATEGORIES_STATE.SET_CATEGORIES_MAP, categoryMap);