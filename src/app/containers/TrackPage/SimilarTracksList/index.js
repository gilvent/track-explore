import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import {ScaleLoader} from 'react-spinners';
import {Link} from 'react-router-dom';

import NetworkErrorIcon from 'app/components/NetworkErrorIcon';

import './SimilarTracksList.css';


export default class SimilarTracksList extends Component {
  static propTypes = {
      tracks : PropTypes.array,
      isFetching : PropTypes.bool
  }

  renderTrackList(){
      return this.props.tracks.map((track)=>{
            return (
                <Link className="similar-track-link" style={{textDecoration:"none",color:"inherit"}}
                      to={`/artist/${track.artistName}/track/${track.name}`} >
                    <ListGroupItem className="similar-tracks-list">
                        <Row style={{maxHeight:"5em"}}>
                            <Col xs={3} style={{paddingRight:0}}>
                                <img src={track.image}  width="100%"/>
                            </Col>
                            <Col xs={9}>
                                <Col xs={12} >
                                    <span >{track.name}</span>
                                </Col>
                                <Col xs={12} >
                                    <span style={{fontSize:"90%",color:"#bb0000"}}>{track.artistName}</span>
                                </Col>
                            </Col>
                            
                        </Row>
                    </ListGroupItem>
                </Link>
            )
      });
  }

  render() {
    const tracksList = this.renderTrackList();
    return (
        <div>
            <div style={{marginBottom:"1em"}}>
            <span style={{color:"#FFFFFF",fontFamily:"Verdana"}}>Similar Tracks</span>
            </div>
            { 
              this.props.isFetching &&  tracksList.length == 0 ?
              <Row style={{marginTop:"25vh",textAlign:"center"}}>
                <Col md={12}>
                    <ScaleLoader color={"#bb0000"} loading={this.props.isFetching}/>
                </Col>
            </Row> 
            : tracksList.length != 0 ?
            <ListGroup flush id="similar-tracks-container" >
                {tracksList}
            </ListGroup>
            :
            <NetworkErrorIcon size="3em" padding="5em" text="Couldn't load similar tracks" textColor="white"/>
            }
            
        </div>
      
    );
  }
}