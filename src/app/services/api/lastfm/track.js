import {createRequest} from './helper';
export const searchTrack = (query) => {
    let params = {
        limit: 10,
        page: 1,
        track: query
    }
    return createRequest("track.search",params)
            .then((response) => {
                const tracks = response.data.results.trackmatches.track;
                return {tracks};
            })
            .catch((error) => {
                return {error};
            });
}