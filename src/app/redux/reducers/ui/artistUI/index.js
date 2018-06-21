import { GET_ARTIST_INFO, GET_ARTIST_INFO_SUCCESS, GET_ARTIST_INFO_FAIL } from "../../../actions/artist";


const initialState = {
    isLoading:false
}

const artistUIReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_ARTIST_INFO:
            return {...state,isLoading:true};
        case GET_ARTIST_INFO_SUCCESS:
        case GET_ARTIST_INFO_FAIL:
            return {...state,isLoading:false}
        default: return state
    }
}

export default artistUIReducer;