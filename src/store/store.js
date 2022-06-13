import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

const logger = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currenState: ', store.getState());

    next(action);

    console.log('next: ', store.getState());
}

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);