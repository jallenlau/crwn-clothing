import { CATEGORIES_STATE } from './category.types'

const CATEGORIES_INITIAL_STATE = {
    categoriesMap: {},
}

export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_STATE.SET_CATEGORIES_MAP:
            return { ...state, categoriesMap: payload };
        default:
            return state;
    };
};