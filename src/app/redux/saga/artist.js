import {fork,call,take,put} from 'redux-saga/effects';
import {getInfo, getTopTracks, getTopAlbums} from '../../services/api/lastfm/artist';
import artistActions, {GET_ARTIST_INFO, GET_ARTIST_TOP_TRACKS, GET_ARTIST_TOP_ALBUMS, GET_ARTIST_TRACKS_AND_ALBUMS } from '../actions/artist';


function* GetArtistInfo(action){
    const {name} = action;
    const {response,error} = yield call(getInfo,name);
    if(response){
        yield put(artistActions.GetArtistInfoSuccess(response));
    }
    else {
        yield put(artistActions.GetArtistInfoFail(error.message));
    }
}
function* GetArtistTracksAndAlbums(action){
    const {name} = action;
    const {tracks,errorTracks} = yield call(getTopTracks,name);
    const {albums,errorAlbums} = yield call(getTopAlbums,name);
    if(tracks){
        yield put(artistActions.GetArtistTopTracksSuccess(tracks));
    }
    else {
        yield put(artistActions.GetArtistTopTracksFail(errorTracks.message));
    }
    if(albums){
        yield put(artistActions.GetArtistTopAlbumsSuccess(albums));
    }
    else {
        yield put(artistActions.GetArtistTopAlbumsFail(errorAlbums.message));
    }

}

function* watchGetArtistInfo(){
    while(true){
        const action = yield take(GET_ARTIST_INFO);
        yield call(GetArtistInfo,action);
    }
}
function* watchGetArtistTracksAndAlbums(){
    while(true){
        const action = yield take(GET_ARTIST_TRACKS_AND_ALBUMS);
        yield call(GetArtistTracksAndAlbums,action);
    }
}

export default function* artistSaga(){
    yield [
        fork(watchGetArtistInfo),
        fork(watchGetArtistTracksAndAlbums)
    ]
}