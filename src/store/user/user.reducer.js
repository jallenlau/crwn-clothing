import { SET_CURRENT_USER_STATE } from './user.types'

const INITIAL_USER = {
    currentUser: null,
};

export const userReducer = (state = INITIAL_USER, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_CURRENT_USER_STATE.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload };
        case SET_CURRENT_USER_STATE.SIGN_IN_FAILED:
            return { ...state, currentUser: payload };
        default:
            return state;
    };
};