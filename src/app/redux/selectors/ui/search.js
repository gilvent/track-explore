import {createSelector} from 'reselect';

const getSearchUIState = (state) => state.ui.searchUI;

const getIsLoading = createSelector(getSearchUIState, (state)=>state.isLoading);
const getErrorMessage = createSelector(getSearchUIState,(state)=>state.errorMessage);

const searchUISelectors = {
    getIsLoading,getErrorMessage
}
export default searchUISelectors;