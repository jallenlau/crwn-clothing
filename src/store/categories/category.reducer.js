import { CATEGORIES_STATE } from './category.types'

const CATEGORIES_INITIAL_STATE = {
    categories: [],
}

export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_STATE.SET_CATEGORIES:
            return { ...state, categories: payload };
        default:
            return state;
    };
};