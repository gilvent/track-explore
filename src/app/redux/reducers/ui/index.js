import {combineReducers} from 'redux';
import searchUIReducer from './searchUI';

const uiReducers = combineReducers({
    searchUI: searchUIReducer
});

export default uiReducers;