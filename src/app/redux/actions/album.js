export const GET_ALBUM_INFO = "ALBUM/ Get Album Info";
export const GET_ALBUM_INFO_SUCCESS = "ALBUM/ Get Album Info Success";
export const GET_ALBUM_INFO_FAIL = "ALBUM/ Get Album Info Fail";

const GetAlbumInfo = (name,artist) => ({type:GET_ALBUM_INFO,name,artist});
const GetAlbumInfoSuccess = (payload) => ({type:GET_ALBUM_INFO_SUCCESS,payload});
const GetAlbumInfoFail = (message) => ({type:GET_ALBUM_INFO_FAIL,message});

const albumActions = {
    GetAlbumInfo,GetAlbumInfoSuccess,GetAlbumInfoFail
}

export default albumActions;