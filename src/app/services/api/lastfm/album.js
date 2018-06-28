import {createRequest} from './helper';

export const searchAlbum = (query) => {
    const params = {
        limit: 10,
        page: 1,
        album: query
    }
    return createRequest("album.search",params)
            .then((response) => {
                const albums = response.data.results.albummatches.album;
                return {albums};
            })
            .catch((error) => {
                return {error};
            });
}

export const getInfo = async (name,artist) => {
    const params = {
        artist: artist,
        album: name,
        autocorrect: 1
    }

    return await createRequest("album.getInfo",params)
                    .then((response)=>{
                        const payload = response.data
                        return {payload};
                    })
                    .catch((error)=>{
                        return {error};
                    });
}