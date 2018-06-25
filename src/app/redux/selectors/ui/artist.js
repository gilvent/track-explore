import {createSelector} from 'reselect';

const getArtistUiState = (state) => state.ui.artistUI;

const getIsLoading = createSelector(getArtistUiState,(state)=>state.isLoading);
const getIsLoadingTopTracksAlbums = createSelector(getArtistUiState,(state)=>state.isLoadingTopTracksAlbums);

const artistUiSelectors = {
    getIsLoading, getIsLoadingTopTracksAlbums
}

export default artistUiSelectors;