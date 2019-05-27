import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row,Col} from 'reactstrap';
import {ScaleLoader} from 'react-spinners';
import {Link} from 'react-router-dom';

import MainHeader from 'app/components/Headers/MainHeader';
import NetworkErrorIcon from 'app/components/NetworkErrorIcon';
import trackActions from 'app/redux/actions/track';
import trackSelectors from 'app/redux/selectors/entities/tracks';
import trackPageSelectors from 'app/redux/selectors/ui/trackPage';
import albumSelectors from 'app/redux/selectors/entities/albums';
import artistSelectors from 'app/redux/selectors/entities/artists';

import TrackInfo from './TrackInfo';
import TabPanel from './TabPanel';
import SimilarTracksList from './SimilarTracksList';
import './TrackPage.scss';


class TrackPage extends Component{
    getUrlParams(props){
        return {
            artistName: props.match.params.artistName,
            trackName: props.match.params.trackName
        };
    }
    componentDidMount(){
        const params = this.getUrlParams(this.props);
        this.props.GetTrackInfo(params.trackName,params.artistName);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.location !== nextProps.location){
            const params = this.getUrlParams(nextProps);
            this.props.GetTrackInfo(params.trackName,params.artistName);
        }
    }
    render(){
        const params = this.getUrlParams(this.props);
        const track = this.props.Track(params.trackName,params.artistName);
        const trackAlbum = track? this.props.TrackAlbum(track.albumId) : {};
        const similarTracks = track? this.props.SimilarTracks(track.id) : [];
        const topTags = track && track.toptags? track.toptags : [];
        return (
            <div>
                <MainHeader/>
                {
                    this.props.isFetchingTrack ? 
                    <Row style={{marginTop:"25vh",textAlign:"center"}}>
                        <Col md={12}>
                            <ScaleLoader color={"#bb0000"} loading={this.props.isFetchingTrack}/>
                        </Col>
                    </Row>
                    : track ?
                    <div>
                    <Row >
                        <Col sm={6} style={{paddingLeft:"5%",paddingTop:"3%",color:"#FFF"}}>
                            <h2>{track.name}</h2>
                            <span>by </span>
                            <Link style={{textDecorationColor:"#bb0000"}}
                                  to={`/artist/${track.artistName}`}>
                                <span style={{color:"#bb0000",fontSize:"110%"}}>{track.artistName}</span>
                            </Link>
                        </Col>
                    </Row>
                    <Row id="trackpage-container">
                        <Col md={4} id="trackpage-album-img-container" style={{marginBottom:"1em"}}>
                            <img id="trackpage-album-img" src={trackAlbum.image} />
                        </Col>
                        <Col md={4} style={{marginBottom:"1em"}}>
                            <TrackInfo topTags={topTags} 
                                       track={track} 
                                       album={trackAlbum}/>
                        </Col>
                        <Col md={4} style={{marginBottom:"1.5em"}}>
                            <SimilarTracksList tracks={similarTracks} 
                                               isFetching={this.props.isFetchingSimilarTracks}/>
                        </Col>
                        <Col sm={6} style={{marginBottom:"1em"}}>
                            <TabPanel wiki={track.wiki} 
                                      lyric={""} 
                                      isFetchingTrack={this.props.isFetchingTrack}
                                      isFetchingLyric={false}/>
                        </Col>
                    </Row>
                    </div>
                    :
                    <NetworkErrorIcon size="5em" padding="10em" 
                        text={this.props.errorMessage?this.props.errorMessage:"Network Error. Try refreshing the page"} textColor="white"/>
                }  
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Track : (name,artist) => trackSelectors.getTrackByNameAndArtist(name,artist)(state),
        TrackAlbum : (albumId) => albumSelectors.getAlbumById(albumId)(state),
        TrackArtist: (name) => artistSelectors.getArtistByName(name)(state),
        SimilarTracks: (id) => trackSelectors.getSimilarTracks(id)(state),
        isFetchingTrack : trackPageSelectors.getIsFetchingTrack(state),
        isFetchingSimilarTracks : trackPageSelectors.getIsFetchingSimilarTracks(state),
        errorMessage : trackPageSelectors.getErrorMessage(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetTrackInfo : (name,artist) => dispatch(trackActions.GetTrackInfo(name,artist)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TrackPage);