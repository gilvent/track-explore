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


export const getInfo = async (name,artist) => {
    const params = {
        artist: artist,
        track: name,
        autocorrect: 1
    }

    return await createRequest("track.getInfo",params)
                    .then((response)=>{
                        const payload = response.data
                        return {payload};
                    })
                    .catch((error)=>{
                        return {error};
                    });
}

export const getSimilar = async (name,artist) => {
    const params = {
        artist: artist,
        track: name,
        autocorrect: 1,
        limit: 5
    }

    return await createRequest("track.getSimilar",params)
                    .then((response)=>{
                        const payload = response.data
                        return {payload};
                    })
                    .catch((error)=>{
                        return {error};
                    });
}
