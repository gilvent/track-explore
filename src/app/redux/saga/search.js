import {fork,call,put,take} from 'redux-saga/effects';

import {searchArtist} from 'app/services/api/lastfm/artist';
import {searchAlbum} from 'app/services/api/lastfm/album';
import {searchTrack} from 'app/services/api/lastfm/track';
import searchActions,{SEARCH_ARTIST, SEARCH_ALBUM, SEARCH_TRACK} from 'app/redux/actions/search'

function* SearchArtist(action){
    const {query} = action;
    var limit = 5;
    const {result,error} = yield call(searchArtist,query,limit);
    if(result){
        yield put(searchActions.SearchArtistSuccess(query,result));
    }
    else{
        yield put(searchActions.SearchArtistFail(error.message));
    }
}



function* SearchAlbum(action){
    const {query} = action;
    const {albums,error} = yield call(searchAlbum,query);
    if(albums){
        yield put(searchActions.SearchAlbumSuccess(query,albums));
    }
    else{
        yield put(searchActions.SearchAlbumFail());
    }
}

function* SearchTrack(action){
    const {query} = action;
    const {tracks,error} = yield call(searchTrack,query);
    if(tracks){
        yield put(searchActions.SearchTrackSuccess(query,tracks));
    }
    else{
        yield put(searchActions.SearchTrackFail());
    }
}

function* watchSearchArtist(){
    while(true){
        const action = yield take(SEARCH_ARTIST);
        yield call(SearchArtist,action)
    }
}
function* watchSearchAlbum(){
    while(true){
        const action = yield take(SEARCH_ALBUM);
        yield call(SearchAlbum,action)
    }
}
function* watchSearchTrack(){
    while(true){
        const action = yield take(SEARCH_TRACK);
        yield call(SearchTrack,action)
    }
}


export default function* searchSagas(){
    yield [
        fork(watchSearchArtist),
        fork(watchSearchAlbum),
        fork(watchSearchTrack)
    ]
}