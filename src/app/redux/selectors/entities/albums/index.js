import { createSelector} from 'reselect';
import  trackSelectors from '../tracks';

const getAlbumState = (state) => state.entities.albums;
const getAllIds = (state) => state.entities.albums.allIds;
const getById = (state) => state.entities.albums.byId;

const getAlbumById = (id) => createSelector(getById,(byId)=>byId[id] ? byId[id] : {})
const getAlbumByNameAndArtist = (name,artist) => createSelector(getById,(byId)=>{
    const matchedIds = Object.keys(byId).filter( (id) =>{     
        return byId[id] && byId[id].name == name && byId[id].artistName == artist;
    })
    return byId[matchedIds[0]];
})

const getAlbumTracks = (name,artist) => createSelector(getAlbumByNameAndArtist(name,artist),trackSelectors.getById,
    (album,tracks)=> album && album.tracks? album.tracks.map((trackId)=>tracks[trackId]) : []
)
const albumSelectors = {
    getAlbumState,getAllIds,getById, getAlbumById, getAlbumTracks, getAlbumByNameAndArtist
}

export default albumSelectors;