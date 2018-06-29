import { createSelector} from 'reselect';
import  trackSelectors from '../tracks';

const getAlbumState = (state) => state.entities.albums;
const getAllIds = (state) => state.entities.albums.allIds;
const getById = (state) => state.entities.albums.byId;

const getAlbumById = (name,artist) => createSelector(getById,(byId)=>{
    const matchedIds = Object.keys(byId).filter( (id) =>
        byId[id] && byId[id].name == name && byId[id].artistName == artist);
    return byId[matchedIds[0]];
})

const getAlbumTracks = (name,artist) => createSelector(getAlbumById(name,artist),trackSelectors.getById,
    (album,tracks)=> album && album.tracks? album.tracks.map((trackId)=>tracks[trackId]) : []
)
const albumSelectors = {
    getAlbumState,getAllIds,getById, getAlbumById, getAlbumTracks
}

export default albumSelectors;