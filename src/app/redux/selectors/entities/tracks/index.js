import { createSelector} from 'reselect';

const getTrackState = (state) => state.entities.tracks;
const getAllIds = (state) => state.entities.tracks.allIds;
const getById = (state) => state.entities.tracks.byId;

const trackSelectors = {
    getTrackState,getAllIds,getById
}

export default trackSelectors;