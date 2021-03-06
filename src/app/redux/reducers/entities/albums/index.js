import { GET_ARTIST_TOP_ALBUMS_SUCCESS } from 'app/redux/actions/artist';
import { GET_ALBUM_INFO_SUCCESS } from 'app/redux/actions/album';
import { GET_TRACK_INFO_SUCCESS } from 'app/redux/actions/track';

const initialState ={
    allIds: [],
    byId: {
        "id" : {
            id: "artist_name/album_name",
            mbid: "",
            name: "",
            image: "",
            playcount: "",
            artistName: "",
            summary: "",
            tracks:[]
        }
    }
}

const albumsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ARTIST_TOP_ALBUMS_SUCCESS:
            return addAlbums(state,action.payload);
        case GET_ALBUM_INFO_SUCCESS:
            return addAlbumEntry(state,action.payload);
        case GET_TRACK_INFO_SUCCESS:
            const album = action.payload.album;
            const id = album.artist+"/"+album.title;
            if(state.allIds.indexOf(id)==-1) state.allIds.push(id);
            state.byId[id] = {
                ...state.byId[id],
                id: id,
                mbid: album.mbid?album.mbid: "",
                image: album.image[3]["#text"],
                name: album.title
            }
            return {
                allIds: state.allIds,
                byId: {...state.byId}
            }
        default: return state
    }
}

const addAlbumEntry = (state,payload)=>{
    const allIds = state.allIds;
    const byId = state.byId;
    const album = payload;
    const id = album.artist+"/"+album.name;
    if(allIds.indexOf(id)==-1) 
        allIds.push(id);
    byId[id] = {
        ...byId[id],
        id: id,
        mbid: album.mbid?album.mbid:"",
        name: album.name,
        image: album.image[3]["#text"],
        playcount: album.playcount ? album.playcount : "-",
        listeners: album.listeners ? album.listeners : "-",
        artistName: album.artist,
        summary : album.wiki? album.wiki.summary : "",
        tracks : album.tracks.track.map((track)=>album.artist+"/"+track.name)
    }
    return {allIds,byId}

}

const addAlbums = (state,payload) => {
    const allIds = state.allIds;
    const byId = state.byId;

    for(let i=0;i<payload.length;i++){
        const album = payload[i];
        const id = album.artist.name+"/"+album.name;
            if(allIds.indexOf(id)==-1) 
                allIds.push(id);
            byId[id] = {
                ...byId[id],
                id: id,
                mbid: album.mbid?album.mbid:"",
                name: album.name,
                image: album.image[3]["#text"],
                playcount: album.playcount ? album.playcount : "-",
                artistName: album.artist.name
            }
    }
    return {
        allIds,
        byId
    }
}
export default albumsReducer;