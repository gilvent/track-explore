import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row,Col,Badge } from 'reactstrap';
import { PropTypes } from 'prop-types';

import ListenersPlaycountButtons from 'app/components/ListenersPlaycountButtons';

class TrackInfo extends Component{
    static propTypes ={
        topTags: PropTypes.array,
        track: PropTypes.object,
        album: PropTypes.object 
    }
    renderTagBadges(tags){
        return tags.map((tag)=>{
            return (
                <div style={{margin:"0.5em"}}>
                    <Badge href="" style={{padding:"0.5em"}}>
                       <span style={{fontSize:"120%",fontFamily:"Verdana"}}>{tag}</span>
                    </Badge>
                </div>
            )
        })
    }
    render(){
        const tagBadges = this.renderTagBadges(this.props.topTags);
        const {track,album} = this.props;
        return (
            <div>
                <Row style={{marginBottom:"1em"}}>
                    <Col xs={12}>
                        <span style={{fontFamily:"Verdana",color:"#FFFFFF",fontSize:"110%"}}>
                        From the album</span>
                    </Col>
                    <Col xs={12}>
                        <Link style={{textDecorationColor:"#bb0000",fontSize:"120%"}}
                            to={`/artist/${track.artistName}/album/${album.name}`}>
                            <span style={{color:"#bb0000",fontSize:"110%"}}>{album.name}</span>
                        </Link>
                    </Col>
                </Row>
                <ListenersPlaycountButtons listeners={track.listeners} playcount={track.playcount}/>
                <Row style={{marginTop:"1em"}}>
                    <Col xs={12}>
                        <span style={{fontFamily:"Verdana",color:"#FFFFFF",fontSize:"110%"}}>
                        Top Tags</span>
                    </Col>
                    {tagBadges}
                </Row>
            </div>
        )
    }
}

export default TrackInfo;