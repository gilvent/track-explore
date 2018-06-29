import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row,Col} from 'reactstrap'
import {ScaleLoader} from 'react-spinners';
import MainHeader from '../../components/Headers/MainHeader';
import NetworkErrorIcon from '../../components/NetworkErrorIcon';
import InfoPanel from './InfoPanel';
import albumActions from '../../redux/actions/album';
import albumSelectors from '../../redux/selectors/entities/albums';
import './AlbumPage.css';
import albumPageSelectors from '../../redux/selectors/ui/albumPage';
import TrackList from './TrackList';


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
        const album = this.props.AlbumById(params.albumName,params.artistName);
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
        AlbumById : (name,artist) => albumSelectors.getAlbumById(name,artist)(state),
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