import { createSelector} from 'reselect';

const getSearchState = (state) => state.search;
const getSearchType = (state) => state.search.type;
const getSearchResults = (state) => state.search.results;
const getResultByQuery = (query) => createSelector(getSearchResults,getSearchType,(results,type)=>{
    switch(type){
        case "Artist": return results.artists[query];break;
        case "Album": return results.albums[query];break;
        case "Track": return results.tracks[query];break;
    }
})

const searchSelectors = {
    getSearchType,
    getResultByQuery
}

export default searchSelectors;