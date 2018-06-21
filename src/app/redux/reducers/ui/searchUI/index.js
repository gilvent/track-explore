import { 
    SEARCH_ARTIST,SEARCH_ALBUM,SEARCH_TRACK,
    SEARCH_ARTIST_SUCCESS,SEARCH_ALBUM_SUCCESS, SEARCH_TRACK_SUCCESS,
    SEARCH_ARTIST_FAIL,SEARCH_ALBUM_FAIL,SEARCH_TRACK_FAIL
} from '../../../actions/search';
import {
    CLOSE_SEARCH_RESULT
} from '../../../actions/ui';

const initialState = {
    isLoading: false,
    searchResultOpen: false,
    errorMessage: null
}

const searchUIReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_ARTIST:
        case SEARCH_ALBUM:
        case SEARCH_TRACK:
            return {
                ...state,
                isLoading:true,
                searchResultOpen:true,
                errorMessage: null
            }
        case SEARCH_ALBUM_SUCCESS:
        case SEARCH_ARTIST_SUCCESS:
        case SEARCH_TRACK_SUCCESS:
            return {
                ...state,
                isLoading:false,
                searchResultOpen:true,
                errorMessage: null
            }
        case SEARCH_ALBUM_FAIL:
        case SEARCH_TRACK_FAIL:
        case SEARCH_ARTIST_FAIL:
            return {
                ...state,
                isLoading:false,
                searchResultOpen:true,
                errorMessage: action.message
            }
        case CLOSE_SEARCH_RESULT:
            return {
                ...state,
                isLoading: false,
                searchResultOpen: false
            }
        default: return state
    }
}

export default searchUIReducer;