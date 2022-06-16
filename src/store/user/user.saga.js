import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCurrentUser } from '../../utiles/firebase/firebase.utiles';
import { signInFailed, signInSuccess } from './user.action'
import { SET_CURRENT_USER_STATE } from './user.types'
import { createUserDocumentFromAuth } from '../../utiles/firebase/firebase.utiles'


export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            additionalDetails
        );
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        put(signInFailed(error));
    }
}


export function* onCheckUserSession() {
    yield takeLatest(SET_CURRENT_USER_STATE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
    yield all([call(onCheckUserSession)]);
}