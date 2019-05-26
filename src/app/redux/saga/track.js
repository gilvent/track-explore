import { fork,call,take,put} from 'redux-saga/effects';
import trackActions, { GET_TRACK_INFO, GET_SIMILAR_TRACKS } from 'app/redux/actions/track';
import {getInfo, getSimilar} from 'app/services/api/lastfm/track';

function* GetTrackInfo(action){
    const {name,artist} = action;
    
    const {payload,error} = yield call(getInfo,name,artist);

    if(payload){
        if(payload.error)
            yield put(trackActions.GetTrackInfoFail(payload.message));
        else {
            yield put(trackActions.GetTrackInfoSuccess(payload.track));
            yield put(trackActions.GetSimilarTracks(name,artist));
        }
            
    }
    else if(error){
        yield put(trackActions.GetTrackInfoFail(error.message));
    }
    
}

function* GetSimilarTracks(action){
    const {name,artist} = action;
    const {payload,error} = yield call(getSimilar,name,artist);
    if(payload){
        if(payload.error)
            yield put(trackActions.GetSimilarTracksFail(payload.message));
        else 
            yield put(trackActions.GetSimilarTracksSuccess(name,artist,payload.similartracks.track));
    }
    else if(error){
        yield put(trackActions.GetSimilarTracksFail(error.message));
    }
    
}

function* watchGetTrackInfo(){
    while(true){
        const action = yield take(GET_TRACK_INFO);
        yield call(GetTrackInfo,action);
    }
}

function* watchGetTrackSimilar(){
    while(true){
        const action = yield take(GET_SIMILAR_TRACKS);
        yield call(GetSimilarTracks,action);
    }
}

export default function* albumSaga(){
    yield [
        fork(watchGetTrackInfo),
        fork(watchGetTrackSimilar)
    ]
}