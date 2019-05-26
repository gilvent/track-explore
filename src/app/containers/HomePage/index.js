import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row,Col,Button } from 'reactstrap';

import HeaderNoSearch from 'app/components/Headers/HeaderNoSearch';
import SearchBar from 'app/containers/SearchBar';
import { LASTFM_PRIMARY,LASTFM_SECONDARY, MUSIXMATCH_PRIMARY, MUSIXMATCH_SECONDARY} from 'app/shared/colors';

import { AnimatedLogo } from './AnimatedLogo';
import './styles.css';

class HomePage extends Component{
    constructor(props) {
        super(props);
    
      }
    
    render(){
        return (
            <div>
                <HeaderNoSearch />
                <Row className="title-container">
                    <Col md={12} >
                        <h3><b>EXPLORE MUSIC ARTISTS, ALBUMS, AND SONGS</b></h3>
                        Multiple APIs integrated in one platform
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={{textAlign:"center",paddingTop:"5%",zIndex:1000}}>
                        <h4 className="sub-heading">Start Exploring</h4>
                        <div className="searchbox-container">
                        <SearchBar/>
                        </div>
                    </Col>
                    <Col sm={{size:2,offset:1}} style={{textAlign:"center",marginTop:"6%",height:"5em"}}>
                        <AnimatedLogo/>
                    </Col>
                    <Col sm={{size:4,offset:1}} style={{textAlign:"center",paddingTop:"5%"}}>
                        <h4 className="sub-heading">Visit API's website</h4>
                        <a href="https://last.fm/">
                        <Button id="btn-lfm" className="api-link-button" size="lg" onClick={this.toggle}
                                >
                            Last.fm
                        </Button>
                        </a>
                        <a href="https://musixmatch.com/">
                        <Button id="btn-mxm" className="api-link-button" size="lg" onClick={this.toggle}
                                style={{backgroundColor:MUSIXMATCH_PRIMARY,borderColor:MUSIXMATCH_SECONDARY}}>
                            Musixmatch
                        </Button>
                        </a>
                    </Col>
                    

                </Row>
            </div>
            
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);