import React from 'react';
import {Route} from 'react-router';
import HomePage from './containers/HomePage';
import ChartsPage from './containers/ChartsPage';
import ArtistPage from './containers/ArtistPage';
import AlbumPage from './containers/AlbumPage';
import TrackPage from './containers/TrackPage';

export const MainRoutes = () => {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/charts" component={ChartsPage} />
            <Route exact path={`/artist/:artistName`} component={ArtistPage}/>
            <Route path={`/artist/:artistName/album/:albumName`} component={AlbumPage} />
            <Route path={`/artist/:artistName/track/:trackName`} component={TrackPage}/>
        </div>
    )
}



