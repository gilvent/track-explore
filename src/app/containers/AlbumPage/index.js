import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {ScaleLoader} from 'react-spinners';

import MainHeader from 'app/components/Headers/MainHeader';
import NetworkErrorIcon from 'app/components/NetworkErrorIcon';
import albumActions from 'app/redux/actions/album';
import albumSelectors from 'app/redux/selectors/entities/albums';
import albumPageSelectors from 'app/redux/selectors/ui/albumPage';

import InfoPanel from './InfoPanel';
import TrackList from './TrackList';
import './AlbumPage.css';

class AlbumPage extends Component{
    getUrlParams(props){
        return {
            artistName: props.match.params.artistName,
            albumName: props.match.params.albumName
        };
    }
    componentDidMount(){
        const params = this.getUrlParams(this.props);
        this.props.GetAlbumInfo(params.albumName,params.artistName);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.location !== nextProps.location){
            const params = this.getUrlParams(nextProps);
            this.props.GetAlbumInfo(params.albumName,params.artistName);
        }
    }
    render(){
        const params = this.getUrlParams(this.props);
        const album = this.props.Album(params.albumName,params.artistName);
        const albumTracks = this.props.AlbumTracks(params.albumName,params.artistName);
        return (
            <div>
                <MainHeader/>
                {
                    this.props.isFetching && !album? 
                    <Row style={{marginTop:"25vh",textAlign:"center"}}>
                        <Col md={12}>
                            <ScaleLoader color={"#bb0000"} loading={this.props.isFetching}/>
                        </Col>
                    </Row>
                    : album ?
                    <div>
                    <Row id="album-title-container">
                        <Col sm={12}>
                            <h2 style={{color:"#FFFFFF"}}>{album.name}</h2>
                        </Col>
                        <Col sm={12} style={{color:"#bb0000"}}>
                            <span style={{color:"#FFF",fontStyle:"italic"}}>album by </span>
                            <Link style={{color:"inherit"}} 
                                to={`/artist/${album.artistName}`}><span>{album.artistName}</span></Link>
                        </Col>
                    </Row>
                    <Row id="album-container">
                        <Col md={4} id="album-img-container" style={{marginBottom:"1em"}}>
                            <img id="album-img" src={album.image} />
                        </Col>
                        <Col md={4} style={{marginBottom:"1em"}}>
                            <InfoPanel isFetching={this.props.isFetching} albumData={album}/>
                        </Col>
                        <Col md={4} style={{marginBottom:"1em"}}>
                            <TrackList isFetching={this.props.isFetching} data={albumTracks}/>
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
        Album : (name,artist) => albumSelectors.getAlbumByNameAndArtist(name,artist)(state),
        AlbumTracks : (name,artist) => albumSelectors.getAlbumTracks(name,artist)(state),
        isFetching : albumPageSelectors.getIsFetching(state),
        errorMessage : albumPageSelectors.getErrorMessage(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAlbumInfo : (name,artist) => dispatch(albumActions.GetAlbumInfo(name,artist)),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumPage);