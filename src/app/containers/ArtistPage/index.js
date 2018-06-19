import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row,Col} from 'reactstrap'
import './styles.css';
import artistActions from '../../redux/actions/artist';
import artistSelectors from '../../redux/selectors/entities/artists';
import MainHeader from '../../components/Headers/MainHeader';
import BioPanel from './BioPanel';
import TabPanel from './TabPanel';
import SimilarPanel from './SimilarPanel';

class ArtistPage extends Component {
    getArtistNameFromPath(){
        return this.props.match.params.artistName;
    }
    componentWillMount(){
        const name = this.getArtistNameFromPath();
        this.props.GetArtistInfo(name);
        this.props.GetArtistTracksAndAlbums(name);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.location !== nextProps.location){
            const name = this.getArtistNameFromPath(nextProps);
            this.props.GetArtistInfo(name);
            this.props.GetArtistTracksAndAlbums(name);
        }
    }
    render(){
        const {ArtistInfo,SimilarArtists,TopTracks,TopAlbums} = this.props;
        const artistName = this.getArtistNameFromPath();
        const artist = ArtistInfo(artistName) ? ArtistInfo(artistName): {};
        const similarArtists = SimilarArtists(artistName);
        return (
            <div>
            <MainHeader/>
            <Row id="artist-container">
                <Col md={4} id="artist-img-container">
                    <img id="artist-img" src={artist.image} />
                </Col>
                <Col md={4} id="bio-container">
                    <BioPanel data={artist} />
                </Col>
                <Col md={4} id="tab-container">
                    <TabPanel topTracks={TopTracks(artistName)} topAlbums={TopAlbums(artistName)} />
                </Col>
                <Col md={{size:4}} id="similar-container">
                    <SimilarPanel data={similarArtists} />
                </Col>
            </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ArtistInfo : (name) => artistSelectors.getArtistByName(name)(state),
        SimilarArtists : (name) => artistSelectors.getSimilarArtists(name)(state),
        TopTracks : (name) => artistSelectors.getTopTracks(name)(state),
        TopAlbums : (name) => artistSelectors.getTopAlbums(name)(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetArtistInfo : (name) => dispatch(artistActions.GetArtistInfo(name)),
        GetArtistTracksAndAlbums: (name) => dispatch(artistActions.GetArtistTracksAndAlbums(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistPage);