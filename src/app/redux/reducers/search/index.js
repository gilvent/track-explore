import {
    SEARCH_ALBUM_SUCCESS,SEARCH_ARTIST_SUCCESS,SEARCH_TRACK_FAIL, SEARCH_TRACK_SUCCESS
} from '../../actions/search';
import { SELECT_SEARCH_TYPE } from '../../actions/ui';

const initialState = {
    type: "Artist",
    results: {
        artists:{
            "query": {
                "name1": {}
            }
        },
        albums:{},
        tracks:{}
    }
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_ARTIST_SUCCESS:
            return addSearchResults(state,action,"artists");
        case SEARCH_ALBUM_SUCCESS:
            return addSearchResults(state,action,"albums");
        case SEARCH_TRACK_SUCCESS:
            return addSearchResults(state,action,"tracks");
        case SELECT_SEARCH_TYPE:
            return {...state, type: action.searchType}
        default : return state
    }
}

const addSearchResults = (state,action,searchTypeKey = "artists") => {
    let resultsObject = {};
    const {query,payload} = action;
    for(let i=0;i<payload.length;i++){
        resultsObject[payload[i].name] = {
            ...payload[i],
            image: payload[i].image[1]["#text"]
        }
    }

    const newState = {
        ...state,
        results: {
            ...state.results,
            [searchTypeKey] : {
                ...state.results[searchTypeKey],
                [query] : resultsObject
            }
        }
    };
    return newState;
}

export default searchReducer;


