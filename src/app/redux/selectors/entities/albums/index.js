import { createSelector} from 'reselect';

const getAlbumState = (state) => state.entities.albums;
const getAllIds = (state) => state.entities.albums.allIds;
const getById = (state) => state.entities.albums.byId;

const albumSelectors = {
    getAlbumState,getAllIds,getById
}

export default albumSelectors;