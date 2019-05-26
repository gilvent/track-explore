import { GET_ARTIST_TOP_TRACKS_SUCCESS } from 'app/redux/actions/artist';
import { GET_ALBUM_INFO_SUCCESS } from 'app/redux/actions/album';
import { GET_TRACK_INFO_SUCCESS, GET_SIMILAR_TRACKS_SUCCESS } from 'app/redux/actions/track';

const initialState ={
    allIds: [],
    byId: {
        "id" : {
            id: ":artist/:name}",
            mbid: "",
            name: "",
            artistName: "",
            albumId:null,
            image: "",
            listeners:0,
            playcount:0,
            wiki: null,
            toptags:[]
        }
    }
}

const tracksReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ARTIST_TOP_TRACKS_SUCCESS:
            return addTracks(state,action.payload);
        case GET_ALBUM_INFO_SUCCESS:
            return addTracks(state,action.payload.tracks.track);
        case GET_TRACK_INFO_SUCCESS:
            return addTrackEntry(state,action.payload);
        case GET_SIMILAR_TRACKS_SUCCESS:
            return addSimilarTracks(state,action.payload)
        default: return state
    }
}

const addTrackEntry = (state,payload)=> {
    const allIds = state.allIds;
    const byId = state.byId;

    const id = payload.artist.name+"/"+payload.name;
    if(allIds.indexOf(id)==-1)
        allIds.push(id);
    byId[id]= {
        ...byId[id],
        id: id,
        mbid: payload.mbid ? payload.mbid : byId[id] && byId[id].mbid ? byId[id].mbid :null,
        name: payload.name,
        artistName: payload.artist.name,
        albumId: payload.album.artist + "/"+payload.album.title,
        duration: payload.duration ? payload.duration : byId[id] && byId[id].duration ? byId[id].duration : null,
        listeners: payload.listeners ? payload.listeners : byId[id] && byId[id].listeners ? byId[id].listeners : null,
        playcount: payload.playcount ? payload.playcount : byId[id] && byId[id].playcount ? byId[id].playcount : null,
        wiki: payload.wiki ? payload.wiki.content : byId[id] && byId[id].wiki ? byId[id].wiki : null,
        toptags: payload.toptags ? payload.toptags.tag.map((tag)=>tag.name) : []
    }
    return {
        allIds,
        byId
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
            id: id,
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

const addSimilarTracks = (state,payload) => {
    const id = payload.artist+"/"+payload.track;
    const nextState = addTracks(state,payload.similarTracks);

    nextState.byId[id] = {
        ...nextState.byId[id],
        similarTracks: payload.similarTracks.map((track)=>{
            const trackid = track.artist.name+"/"+track.name
            return trackid;
        })
    }

    return nextState;

}
export default tracksReducer;