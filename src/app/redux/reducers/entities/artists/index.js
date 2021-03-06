import { 
    GET_ARTIST_INFO_SUCCESS,GET_ARTIST_TOP_TRACKS_SUCCESS,GET_ARTIST_TOP_ALBUMS_SUCCESS 
} from 'app/redux/actions/artist';
import { GET_TRACK_INFO_SUCCESS } from 'app/redux/actions/track';

const initialState ={
    allNames: [],
    byName: {
        "artistName" : {
            name: "",
            image: "",
            mbid: "",
            bio_content: "",
            bio_published: "",
            similarArtists:[],
            topTracks:[],
            topAlbums:[] 
        }
    }
}

const artistsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_ARTIST_INFO_SUCCESS:
            return addArtistInfo(state,action.payload);
        case GET_ARTIST_TOP_TRACKS_SUCCESS:
            return addArtistTopTracks(state,action.payload);
        case GET_ARTIST_TOP_ALBUMS_SUCCESS:
            return addArtistTopAlbums(state,action.payload);
        case GET_TRACK_INFO_SUCCESS:
            const artist = action.payload.artist;
            const id = artist.name;
            if(state.allNames.indexOf(id)==-1) state.allNames.push(id);
            state.byName[id] = {
                ...state.byName[id],
                mbid: artist.mbid?artist.mbid: "",
                name: artist.name
            }
            return {
                allNames: state.allNames,
                byName: {...state.byName}
            }
        default: return state
    }
}

const addArtistInfo = (state,payload) => {
    const allNames = state.allNames;
    const byName = state.byName;
    
    if(allNames.indexOf(payload.name)==-1)
        allNames.push(payload.name);
    byName[payload.name] = {
        ...byName[payload.name],
        name : payload.name,
        image : payload.image[4]["#text"],
        mbid : payload.mbid,
        bio_content : payload.bio.content,
        bio_published: payload.bio.published,
        similarArtists: payload.similar.artist.map((artist)=>artist.name)
    }
    
    const{artist} = payload.similar;
    for(let i=0;i<artist.length;i++){
        if(allNames.indexOf(artist[i].name)==-1)
            allNames.push(artist[i].name);
        byName[artist[i].name] = {
            ...byName[artist[i].name],
            name: artist[i].name,
            image: artist[i].image[4]["#text"]
        }
    }
    return {allNames,byName}
}

const addArtistTopTracks = (state,payload) => {
    const byName = state.byName;
    const artistName = payload[0].artist.name;
    byName[artistName] ={
        ...byName[artistName],
        topTracks : payload.map((track)=>track.artist.name+"/"+track.name) 
    }
    return {...state, byName}
}
const addArtistTopAlbums = (state,payload) => {
    const byName = state.byName;
    const artistName = payload[0].artist.name;
    byName[artistName] ={
        ...byName[artistName],
        topAlbums : payload.map((album)=>album.artist.name+"/"+album.name) 
    }
    return {...state, byName}
}
export default artistsReducer;