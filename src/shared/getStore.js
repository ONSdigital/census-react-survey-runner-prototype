import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import fetchAnswersSaga from './sagas/fetch-answers-saga'; 
import saveAnswersApiSaga from './sagas/save-answers-api-saga'; 
import saveAnswersIndexedDBSaga from './sagas/save-answers-indexeddb-saga'; 
import saveAnswersTriggerSaga from './sagas/save-answers-trigger-saga';
import {routerReducer as router, routerMiddleware} from 'react-router-redux';
import * as reducers from './reducers';

export default function(history, defaultState, runSagas) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = routerMiddleware(history);
    const middlewareChain = [middleware, sagaMiddleware];
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewareChain.push(logger);
    }

    const store = createStore(combineReducers({
        ...reducers,
        router}
    ), defaultState, applyMiddleware(...middlewareChain));

    if (runSagas) {
        sagaMiddleware.run(fetchAnswersSaga);
        sagaMiddleware.run(saveAnswersApiSaga);
        sagaMiddleware.run(saveAnswersIndexedDBSaga);
        sagaMiddleware.run(saveAnswersTriggerSaga);
    }
    return store;
};