import { GET_ARTIST_TOP_TRACKS_SUCCESS } from '../../../actions/artist';

const initialState ={
    allIds: [],
    byId: {
        //if no mbid, use this format No_mbid/{name}/{artist_name}
        "mbid" : {
            mbid: "",
            name: "",
            artistName: "",
            image: "",
            listeners:0,
            playcount:0,

        }
    }
}

const tracksReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ARTIST_TOP_TRACKS_SUCCESS:
            return addTracks(state,action.payload);
        default: return state
    }
}

const addTracks = (state,payload) => {
    const allIds = state.allIds;
    const byId = state.byId;

    for(let i=0;i<payload.length;i++){
        const track = payload[i];
        const key = track.mbid? track.mbid :"No_mbid/"+track.name+"/"+track.artist.name;
        if(allIds.indexOf(key)==-1)
            allIds.push(key);
        byId[key] = {
            ...byId[key],
            mbid: track.mbid? track.mbid:"",
            name: track.name,
            artistName: track.artist.name,
            image: track.image[3]["#text"],
            listeners: track.listeners,
            playcount: track.playcount
        }
    }
    return {
        allIds,
        byId
    }
}

export default tracksReducer;