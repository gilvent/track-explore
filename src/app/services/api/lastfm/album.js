import {createRequest} from './helper';

export const searchAlbum = (query) => {
    let params = {
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