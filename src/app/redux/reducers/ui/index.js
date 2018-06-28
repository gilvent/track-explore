import {combineReducers} from 'redux';
import searchUIReducer from './searchUI';
import artistPageReducer from './artistPage';
import albumPageReducer from './albumPage';
const uiReducers = combineReducers({
    searchUI: searchUIReducer,
    artistPage: artistPageReducer,
    albumPage: albumPageReducer
});

export default uiReducers;