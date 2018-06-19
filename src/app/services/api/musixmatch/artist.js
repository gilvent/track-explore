import {root} from './config';
import {musixmatch_apikey as apikey} from '../../../../environment';
import axios from 'axios';

export function artistSearch(query){
    axios.get(root+"artist.search",{
        params: {
            q_artist: query,
            page_size: 5,
            page: 1,
            apikey: apikey
        }
    })
        .then((response) => {
            console.log(response)
            return response;
        })
        .catch((error) => {
            console.log(error)
        })
}

