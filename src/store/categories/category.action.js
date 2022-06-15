import { createAction } from '../../utiles/reducer/reducer.utils'
import { CATEGORIES_STATE } from './category.types'
import { getCategoriesAndDocuments } from '../../utiles/firebase/firebase.utiles'


// export const setCategories = (categoryArray) => 
//     createAction(CATEGORIES_STATE.SET_CATEGORIES, categoryArray);

export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_STATE.SET_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoryArray) => 
    createAction(CATEGORIES_STATE.SET_CATEGORIES_SUCCESS, categoryArray);

export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_STATE.SET_CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoryArray = await getCategoriesAndDocuments('categories');
        dispatch(fetchCategoriesSuccess(categoryArray));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }
};