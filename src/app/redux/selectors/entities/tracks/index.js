import { createSelector} from 'reselect';

const getTrackState = (state) => state.entities.tracks;
const getAllIds = createSelector(getTrackState,(state)=>state.allIds);
const getById = createSelector(getTrackState,(state)=>state.byId);

const getTrackById = (id)=> createSelector(getById,(byId)=>byId[id]);

const getTrackByNameAndArtist = (name,artist) => createSelector(getById,(byId)=>{
    const matchedIds = Object.keys(byId).filter( (id) =>{     
        return byId[id] && byId[id].name == name && byId[id].artistName == artist;
    })
    return byId[matchedIds[0]];
});

const getSimilarTracks = (id) => createSelector(getTrackById(id),getById,
    (track,byId) => {
        return track && track.similarTracks ? track.similarTracks.map((trackId)=> byId[trackId]) : [];
    }
);
const trackSelectors = {
    getTrackState,getAllIds,getById,getTrackByNameAndArtist,getTrackById, getSimilarTracks
}

export default trackSelectors;