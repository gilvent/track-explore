import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import getRootReducer from './reducers';

import searchSaga from './saga/search';
import artistSaga from './saga/artist';

const sagaMiddleware = createSagaMiddleware();

const getStore = () => {
    const store = createStore(
        getRootReducer(),
        {},
        applyMiddleware(sagaMiddleware,logger)
    );
    sagaMiddleware.run(searchSaga);
    sagaMiddleware.run(artistSaga)
    return store;
}

export default getStore;