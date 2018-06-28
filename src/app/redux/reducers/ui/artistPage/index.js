import { GET_ARTIST_INFO, GET_ARTIST_INFO_SUCCESS, GET_ARTIST_INFO_FAIL, GET_ARTIST_TRACKS_AND_ALBUMS, GET_ARTIST_TOP_ALBUMS_SUCCESS, GET_ARTIST_TOP_ALBUMS_FAIL, GET_ARTIST_TOP_TRACKS_SUCCESS, GET_ARTIST_TOP_TRACKS_FAIL } from "../../../actions/artist";


const initialState = {
    isLoading:false,
    isLoadingTopTracksAlbums: false
}

const artistPageReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_ARTIST_INFO:
            return {...state,isLoading:true};
        case GET_ARTIST_INFO_SUCCESS:
        case GET_ARTIST_INFO_FAIL:
            return {...state,isLoading:false};
        case GET_ARTIST_TRACKS_AND_ALBUMS:
            return {...state,isLoadingTopTracksAlbums:true};
        case GET_ARTIST_TOP_ALBUMS_SUCCESS:
        case GET_ARTIST_TOP_ALBUMS_FAIL:
        case GET_ARTIST_TOP_TRACKS_SUCCESS:
        case GET_ARTIST_TOP_TRACKS_FAIL:
            return {...state,isLoadingTopTracksAlbums:false}
        default: return state
    }
}

export default artistPageReducer;