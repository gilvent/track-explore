import { fork,call,take,put} from 'redux-saga/effects';

import albumActions, { GET_ALBUM_INFO } from 'app/redux/actions/album';
import { getInfo } from 'app/services/api/lastfm/album';

function* GetAlbumInfo(action){
    const {name,artist} = action;
    
    const {payload,error} = yield call(getInfo,name,artist);
    if(payload){
        if(payload.error)
            yield put(albumActions.GetAlbumInfoFail(payload.message));
        else 
            yield put(albumActions.GetAlbumInfoSuccess(payload.album));
    }
    else if(error){
        yield put(albumActions.GetAlbumInfoFail(error.message));
    }
    
}

function* watchGetAlbumInfo(){
    while(true){
        const action = yield take(GET_ALBUM_INFO);
        yield call(GetAlbumInfo,action);
    }
}

export default function* albumSaga(){
    yield [
        fork(watchGetAlbumInfo)
    ]
}