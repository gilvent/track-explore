import {combineReducers} from 'redux';
import albumsReducer from './albums';
import artistsReducer from './artists';
import tracksReducer from './tracks';

const entitiesReducers = combineReducers({
    albums : albumsReducer,
    artists : artistsReducer,
    tracks : tracksReducer
});

export default entitiesReducers;