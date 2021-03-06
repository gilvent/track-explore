import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col} from 'reactstrap';
import { ScaleLoader } from 'react-spinners';

import MainHeader from 'app/components/Headers/MainHeader';
import NetworkErrorIcon from 'app/components/NetworkErrorIcon';
import artistPageSelectors from 'app/redux/selectors/ui/artistPage';
import artistActions from 'app/redux/actions/artist';
import artistSelectors from 'app/redux/selectors/entities/artists';

import BioPanel from './BioPanel';
import TabPanel from './TabPanel';
import SimilarArtistsList from './SimilarArtistsList';

import './ArtistPage.scss';

class ArtistPage extends Component {
    getArtistNameFromPath(props){
        return props.match.params.artistName;
    }
    componentDidMount(){
        console.log("mount")
        const name = this.getArtistNameFromPath(this.props);
        this.props.GetArtistInfo(name);
        this.props.GetArtistTracksAndAlbums(name);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.location !== nextProps.location){
            const name = this.getArtistNameFromPath(nextProps);
            console.log(nextProps)
            this.props.GetArtistInfo(name);
            this.props.GetArtistTracksAndAlbums(name);
        }
    }
    render(){
        const {ArtistInfo,SimilarArtists,TopTracks,TopAlbums,
               isLoading,isLoadingTopTracksAlbums} = this.props;
        const artistName = this.getArtistNameFromPath(this.props);
        const artist = ArtistInfo(artistName) ? ArtistInfo(artistName): {};
        const similarArtists = SimilarArtists(artistName);
        return (
            <div>
                <MainHeader/>
            {
                isLoading && !ArtistInfo(artistName)? 
                <Row style={{marginTop:"25vh",textAlign:"center"}}>
                    <Col md={12}>
                        <ScaleLoader color={"#bb0000"} loading={isLoading}/>
                    </Col>
                </Row>
                : ArtistInfo(artistName) ?
                <Row id="artist-container">
                    <Col md={4} id="artist-img-container">
                        <img id="artist-img" src={artist.image} />
                    </Col>
                    <Col md={4} id="bio-container">
                        <BioPanel data={artist} isLoading={isLoading}/>
                    </Col>
                    <Col md={4} id="tab-container">
                        <TabPanel topTracks={TopTracks(artistName)} topAlbums={TopAlbums(artistName)} 
                                  isLoading={isLoadingTopTracksAlbums}/>
                    </Col>
                    <Col md={{size:4}} id="similar-container">
                        {
                            similarArtists.length!=0 &&
                            <SimilarArtistsList data={similarArtists} />
                        }
                    </Col>
                </Row>
                :
                <NetworkErrorIcon size="5em" padding="10em" text="Network Error. Try refreshing the page" textColor="white"/>
            }
           
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ArtistInfo : (name) => artistSelectors.getArtistByName(name)(state),
        SimilarArtists : (name) => artistSelectors.getSimilarArtists(name)(state),
        TopTracks : (name) => artistSelectors.getTopTracks(name)(state),
        TopAlbums : (name) => artistSelectors.getTopAlbums(name)(state),
        isLoading : artistPageSelectors.getIsLoading(state),
        isLoadingTopTracksAlbums : artistPageSelectors.getIsLoadingTopTracksAlbums(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetArtistInfo : (name) => dispatch(artistActions.GetArtistInfo(name)),
        GetArtistTracksAndAlbums: (name) => dispatch(artistActions.GetArtistTracksAndAlbums(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistPage);