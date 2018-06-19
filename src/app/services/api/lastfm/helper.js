import axios from 'axios';
import {lastfm_apikey} from '../../../../environment';

export const createRequest = (method,parameter) => {
    return axios.get("http://ws.audioscrobbler.com/2.0/",{
            params: {
                format: "json",
                api_key: lastfm_apikey,
                method: method,
                ...parameter 
            }
        });
}