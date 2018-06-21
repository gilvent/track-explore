import {combineReducers} from 'redux';
import searchUIReducer from './searchUI';
import artistUIReducer from './artistUI';

const uiReducers = combineReducers({
    searchUI: searchUIReducer,
    artistUI: artistUIReducer
});

export default uiReducers;