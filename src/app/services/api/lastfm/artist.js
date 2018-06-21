import {createRequest} from './helper';

export const searchArtist = (query,limit,page = 1) => {
    const params = {
        limit: limit,
        page: page,
        artist: query
    }
    return createRequest("artist.search",params)
            .then((response) => {
                const result = response.data.results.artistmatches.artist;
                return {result};
            })
            .catch((error) => {
                return {error};
            });
}

export const getInfo = (artist) => {
    const params = {
        artist: artist,
        autocorrect: 1 
    }
    return createRequest("artist.getinfo",params)
            .then((res)=>{
                const response = res.data.artist;
                return {response};
            })
            .catch((error)=>{
                return {error};
            })
}

export  const getTopTracks = (artist) => {
    const params = {
        artist: artist,
        limit: 10,
        autocorrect: 1
    }
    return createRequest("artist.gettoptracks",params)
            .then((res)=>{
                const tracks = res.data.toptracks.track;
                return {tracks}
            })
            .catch((errorTracks)=>{
                return {errorTracks}
            })
}

export const getTopAlbums =  (artist) => {
    const params = {
        artist: artist,
        limit: 10,
        autocorrect: 1
    }
    return createRequest("artist.gettopalbums",params)
            .then((res)=>{
                const albums = res.data.topalbums.album;
                return {albums}
            })
            .catch((errorAlbums)=>{
                return {errorAlbums}
            })
}