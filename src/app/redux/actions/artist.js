export const GET_ARTIST_INFO = "ARTIST/ Get Artist Info";
export const GET_ARTIST_INFO_SUCCESS = "ARTIST/ Get Artist Info Success";
export const GET_ARTIST_INFO_FAIL = "ARTIST/ Get Artist Info Fail";

export const GET_ARTIST_TRACKS_AND_ALBUMS ="ARTIST/ Get Top Tracks and Albums"
export const GET_ARTIST_TOP_TRACKS_SUCCESS = "ARTIST/ Get Top Tracks Success";
export const GET_ARTIST_TOP_TRACKS_FAIL = "ARTIST/ Get Top Tracks Fail";
export const GET_ARTIST_TOP_ALBUMS_SUCCESS = "ARTIST/ Get Top Albums Success";
export const GET_ARTIST_TOP_ALBUMS_FAIL = "ARTIST/ Get Top Albums Fail";

const GetArtistInfo = (name) => ({type:GET_ARTIST_INFO,name});
const GetArtistInfoSuccess = (payload) => ({type:GET_ARTIST_INFO_SUCCESS,payload});
const GetArtistInfoFail = (message) => ({type:GET_ARTIST_INFO_FAIL,message});

const GetArtistTracksAndAlbums = (name) => ({type:GET_ARTIST_TRACKS_AND_ALBUMS,name});

const GetArtistTopTracksSuccess = (payload) => ({type:GET_ARTIST_TOP_TRACKS_SUCCESS,payload});
const GetArtistTopTracksFail = (message) => ({type:GET_ARTIST_TOP_TRACKS_FAIL,message});
const GetArtistTopAlbumsSuccess = (payload) => ({type:GET_ARTIST_TOP_ALBUMS_SUCCESS,payload})
const GetArtistTopAlbumsFail = (message) => ({type:GET_ARTIST_TOP_ALBUMS_FAIL,message})

const artistActions = {
    GetArtistInfo,GetArtistInfoSuccess,GetArtistInfoFail,
    GetArtistTracksAndAlbums,GetArtistTopTracksSuccess,GetArtistTopTracksFail,
    GetArtistTopAlbumsFail,GetArtistTopAlbumsSuccess
}

export default artistActions;