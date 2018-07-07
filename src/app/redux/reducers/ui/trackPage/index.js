import {GET_TRACK_INFO,GET_TRACK_INFO_SUCCESS,GET_TRACK_INFO_FAIL, 
    GET_SIMILAR_TRACKS, GET_SIMILAR_TRACKS_SUCCESS, GET_SIMILAR_TRACKS_FAIL} from '../../../actions/track';

const initialState = {
    isFetchingTrack : false,
    isFetchingSimilarTracks : false,
    isFetchingLyric : false,
    errorMessage : null
}

const trackPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TRACK_INFO:
            return {...state,isFetchingTrack : true};
        case GET_TRACK_INFO_SUCCESS:
            return {...state,isFetchingTrack : false, errorMessage:null};
        case GET_TRACK_INFO_FAIL:
            return {...state,isFetchingTrack : false, errorMessage:action.message}
        case GET_SIMILAR_TRACKS:
            return {...state,isFetchingSimilarTracks : true};
        case GET_SIMILAR_TRACKS_SUCCESS:
            return {...state,isFetchingSimilarTracks : false, errorMessage:null};
        case GET_SIMILAR_TRACKS_FAIL:
            return {...state,isFetchingSimilarTracks : false, errorMessage:action.message}
        default: return state
    }
}

export default trackPageReducer;