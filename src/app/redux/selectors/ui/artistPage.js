import {createSelector} from 'reselect';

const getArtistPageState = (state) => state.ui.artistPage;

const getIsLoading = createSelector(getArtistPageState,(state)=>state.isLoading);
const getIsLoadingTopTracksAlbums = createSelector(getArtistPageState,(state)=>state.isLoadingTopTracksAlbums);

const artistUiSelectors = {
    getIsLoading, getIsLoadingTopTracksAlbums
}

export default artistUiSelectors;