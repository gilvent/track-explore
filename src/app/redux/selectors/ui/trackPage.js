import {createSelector} from 'reselect';

const getTrackPageState = (state) => state.ui.trackPage;
const getIsFetchingTrack = createSelector(getTrackPageState,(trackPage)=>trackPage.isFetchingTrack);
const getErrorMessage = createSelector(getTrackPageState,(trackPage)=>trackPage.errorMessage);
const getIsFetchingSimilarTracks = createSelector(getTrackPageState,(trackPage)=>trackPage.isFetchingSimilarTracks);

const trackPageSelectors = {
    getIsFetchingTrack,getErrorMessage,getIsFetchingSimilarTracks
}

export default trackPageSelectors;