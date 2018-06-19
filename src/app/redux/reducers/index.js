import {combineReducers} from 'redux';
import entitiesReducer from './entities';
import searchReducer from './search';
import uiReducer from './ui';

const getRootReducer = () => {
    return combineReducers({
        entities : entitiesReducer,
        search: searchReducer,
        ui : uiReducer
    });
}

export default getRootReducer;