import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap';
import { ScaleLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import NetworkErrorIcon from 'app/components/NetworkErrorIcon';

import './TrackList.scss';

export default class TrackList extends Component {
  static propTypes = {
      data : PropTypes.array,
      isFetching : PropTypes.bool
  }

  renderTrackList(){
      return this.props.data.map((track)=>{
            return (
                <Link className="album-track-link" style={{textDecoration:"none"}}
                      to={`/artist/${track.artistName}/track/${track.name}`} >
                    <ListGroupItem className="album-tracks-list">{track.name}</ListGroupItem>
                </Link>
            )
      });
  }

  render() {
    const tracksList = this.renderTrackList();
    return (
        <div>
            <h4 style={{color:"#FFFFFF"}}>Songs in this album</h4>
            { 
              this.props.isFetching &&  tracksList.length == 0 ?
              <Row style={{marginTop:"25vh",textAlign:"center"}}>
                <Col md={12}>
                    <ScaleLoader color={"#bb0000"} loading={this.props.isFetching}/>
                </Col>
            </Row> 
            : tracksList.length != 0 ?
            <ListGroup flush id="album-tracks-container" className="rect-scrollbar">
                {tracksList}
            </ListGroup>
            :
            <NetworkErrorIcon size="3em" padding="5em" text="Couldn't load this album's tracks" textColor="white"/>
            }
            
        </div>
      
    );
  }
}