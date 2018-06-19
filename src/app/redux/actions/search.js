export const SEARCH_ARTIST = "LASTFM_SEARCH/ Search Artist";
export const SEARCH_ARTIST_SUCCESS = "LASTFM_SEARCH/ Search Artist Success";
export const SEARCH_ARTIST_FAIL = "LASTFM_SEARCH/ Search Artist Fail";

export const SEARCH_ALBUM = "LASTFM_SEARCH/ Search Album";
export const SEARCH_ALBUM_SUCCESS = "LASTFM_SEARCH/ Search Album Success";
export const SEARCH_ALBUM_FAIL = "LASTFM_SEARCH/ Search Album Fail";

export const SEARCH_TRACK = "LASTFM_SEARCH/ Search Track";
export const SEARCH_TRACK_SUCCESS = "LASTFM_SEARCH/ Search Track Success";
export const SEARCH_TRACK_FAIL = "LASTFM_SEARCH/ Search Track Fail";

const SearchArtist = (query) => ({ type: SEARCH_ARTIST, query})
const SearchArtistSuccess = (query,payload) => ({ type: SEARCH_ARTIST_SUCCESS, query,payload })
const SearchArtistFail = (message) => ({ type: SEARCH_ARTIST_FAIL, message })

const SearchAlbum = (query) => ({ type: SEARCH_ALBUM, query})
const SearchAlbumSuccess = (query,payload) => ({ type: SEARCH_ALBUM_SUCCESS, query,payload })
const SearchAlbumFail = (message) => ({ type: SEARCH_ALBUM_FAIL, message })

const SearchTrack = (query) => ({ type: SEARCH_TRACK, query})
const SearchTrackSuccess = (query,payload) => ({ type: SEARCH_TRACK_SUCCESS, query,payload })
const SearchTrackFail = (message) => ({ type: SEARCH_TRACK_FAIL, message })

const searchActions = {
    SearchArtist, SearchArtistSuccess, SearchArtistFail,
    SearchAlbum, SearchAlbumSuccess, SearchAlbumFail,
    SearchTrack, SearchTrackSuccess, SearchTrackFail
}

export default searchActions;