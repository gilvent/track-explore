export const CLOSE_SEARCH_RESULT = "SEARCH_UI/ Close Search Result";
export const SELECT_SEARCH_TYPE = "SEARCH_UI/ Select Search Type"

const CloseSearchResult = () => ({type: CLOSE_SEARCH_RESULT});
const SelectSearchType = (searchType) => ({type: SELECT_SEARCH_TYPE,searchType});

const uiAction = {
    CloseSearchResult,
    SelectSearchType
}
export default uiAction;