import { GET_ALBUM_INFO, GET_ALBUM_INFO_SUCCESS,GET_ALBUM_INFO_FAIL } from "app/redux/actions/album";

const initialState = {
    isFetching : false,
    errorMessage : null
}

const albumPageReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALBUM_INFO:
            return {...state,isFetching : true};
        case GET_ALBUM_INFO_SUCCESS:
            return {isFetching : false, errorMessage:null};
        case GET_ALBUM_INFO_FAIL:
            return {isFetching : false, errorMessage:action.message}
        default: return state
    }
}

export default albumPageReducer;