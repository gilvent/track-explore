export const GET_TRACK_INFO = "TRACK/ Get Track Info";
export const GET_TRACK_INFO_SUCCESS = "TRACK/ Get Track Info Success";
export const GET_TRACK_INFO_FAIL = "TRACK/ Get Track Info Fail";

export const GET_SIMILAR_TRACKS = "TRACK/ Get Similar Tracks";
export const GET_SIMILAR_TRACKS_SUCCESS = "TRACK/ Get Similar Tracks Success";
export const GET_SIMILAR_TRACKS_FAIL = "TRACK/ Get Similar Tracks Fail";

const GetTrackInfo = (name,artist) => ({type:GET_TRACK_INFO,name,artist});
const GetTrackInfoSuccess = (payload) => ({type:GET_TRACK_INFO_SUCCESS,payload});
const GetTrackInfoFail = (message) => ({type:GET_TRACK_INFO_FAIL,message});

const GetSimilarTracks = (name,artist) => ({type:GET_SIMILAR_TRACKS,name,artist});
const GetSimilarTracksSuccess = (track,artist,similarTracks) => (
    {
        type:GET_SIMILAR_TRACKS_SUCCESS,
        payload: {
            track,
            artist,
            similarTracks
        }
    }
);
const GetSimilarTracksFail = (message) => ({type:GET_SIMILAR_TRACKS_FAIL,message});


const trackActions = {
    GetTrackInfo,GetTrackInfoSuccess,GetTrackInfoFail,
    GetSimilarTracks,GetSimilarTracksSuccess,GetSimilarTracksFail
}

export default trackActions;