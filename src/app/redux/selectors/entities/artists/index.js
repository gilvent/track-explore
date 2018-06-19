import { createSelector } from 'reselect';
import trackSelectors from '../tracks';
import albumSelectors from '../albums';

const getArtistState = (state) => state.entities.artists;
const getAllNames = (state) => state.entities.artists.allNames;
const getByName = (state) => state.entities.artists.byName;
const getAllArtists = createSelector(getAllNames,getByName,
                        (names,object)=>names.map((name)=>object[name]))
                        
const getArtistByName = (name) => createSelector(getByName,(artists) =>artists[name]);

const getSimilarArtists = (name) => createSelector(getByName,(artists)=>{
    return !artists[name] ? [] : artists[name].similarArtists ?
            artists[name].similarArtists.map((artist)=>{
                return artists[artist]
            }) : []
    }
);
const getTopTracks = (name) => createSelector(getArtistByName(name),trackSelectors.getById,(artist,tracks)=>{
    return !artist || !artist.topTracks ? [] : artist.topTracks.map((trackId)=>tracks[trackId]);
});
const getTopAlbums = (name) => createSelector(getArtistByName(name),albumSelectors.getById,(artist,albums)=>{
    return !artist || typeof artist.topAlbums==='undefined' ? [] : artist.topAlbums.map((albumId)=>albums[albumId]);
});
const artistSelectors = {
    getArtistState,getArtistByName,getSimilarArtists,
    getTopTracks,getTopAlbums
}

export default artistSelectors;