import {createSelector} from 'reselect';

const getArtistUiState = (state) => state.ui.artistUI;

const getIsLoading = createSelector(getArtistUiState,(state)=>state.isLoading);

const artistUiSelectors = {
    getIsLoading
}

export default artistUiSelectors;