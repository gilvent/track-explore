import { GET_ARTIST_TOP_TRACKS_SUCCESS } from '../../../actions/artist';
import { GET_ALBUM_INFO_SUCCESS } from '../../../actions/album';

const initialState ={
    allIds: [],
    byId: {
        //id format = {artist}/{name}
        "id" : {
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
        case GET_ALBUM_INFO_SUCCESS:
            return addTracks(state,action.payload.tracks.track);
        default: return state
    }
}

const addTracks = (state,payload) => {
    const allIds = state.allIds;
    const byId = state.byId;

    for(let i=0;i<payload.length;i++){
        const track = payload[i];
        const id = track.artist.name+"/"+track.name;
        if(allIds.indexOf(id)==-1)
            allIds.push(id);
        byId[id] = {
            ...byId[id],
            mbid: track.mbid ? track.mbid : byId[id] && byId[id].mbid ? byId[id].mbid :null,
            name: track.name,
            artistName: track.artist.name,
            duration: track.duration ? track.duration : byId[id] && byId[id].duration ? byId[id].duration : null, 
            image: track.image ? track.image[3]["#text"] : byId[id] && byId[id].image ? byId[id].image : null,
            listeners: track.listeners ? track.listeners : byId[id] && byId[id].listeners ? byId[id].listeners : null,
            playcount: track.playcount ? track.playcount : byId[id] && byId[id].playcount ? byId[id].playcount : null
        }
    }
    return {
        allIds,
        byId
    }
}

export default tracksReducer;