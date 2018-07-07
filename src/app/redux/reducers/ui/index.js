import {combineReducers} from 'redux';
import searchUIReducer from './searchUI';
import artistPageReducer from './artistPage';
import albumPageReducer from './albumPage';
import trackPageReducer from './trackPage';

const uiReducers = combineReducers({
    searchUI: searchUIReducer,
    artistPage: artistPageReducer,
    albumPage: albumPageReducer,
    trackPage: trackPageReducer
});

export default uiReducers;