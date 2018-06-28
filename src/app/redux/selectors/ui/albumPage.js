import {createSelector} from 'reselect';

const getAlbumPageState = (state) => state.ui.albumPage;
const getIsFetching = createSelector(getAlbumPageState,(albumPage)=>albumPage.isFetching);
const getErrorMessage = createSelector(getAlbumPageState,(albumPage)=>albumPage.errorMessage);

const albumPageSelectors = {
    getIsFetching,getErrorMessage
}

export default albumPageSelectors;