import {GET_ARTIST_TOP_ALBUMS_SUCCESS} from '../../../actions/artist';
const initialState ={
    allIds: [],
    byId: {
        //if no mbid, use this format No_mbid/{name}/{artist_name}
        "mbid" : {
            mbid: "",
            name: "",
            image: "",
            playcount: "",
            artistName: "",
            tracks:[]
        }
    }
}

const albumsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ARTIST_TOP_ALBUMS_SUCCESS:
            return addAlbums(state,action.payload)
        default: return state
    }
}

const addAlbums = (state,payload) => {
    const allIds = state.allIds;
    const byId = state.byId;

    for(let i=0;i<payload.length;i++){
        const album = payload[i];
        const key = album.mbid? album.mbid :"No_mbid/"+album.name+"/"+album.artist.name;
            if(allIds.indexOf(key)==-1) 
                allIds.push(key);
            byId[key] = {
                ...byId[key],
                mbid: album.mbid?album.mbid:"",
                name: album.name,
                image: album.image[3]["#text"],
                playcount: album.playcount,
                artistName: album.artist.name
            }
        
    }
    return {
        allIds,
        byId
    }
}
export default albumsReducer;