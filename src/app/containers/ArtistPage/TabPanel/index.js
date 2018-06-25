import React, {Component} from 'react';
import { 
  TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,
  ListGroup, ListGroupItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import classnames from 'classnames';
import './styles.css';
import NetworkErrorIcon from '../../../components/NetworkErrorIcon';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'top-songs'
    };
  }
  static propTypes = {
    topAlbums : PropTypes.array,
    topTracks : PropTypes.array,
    isLoading : PropTypes.bool
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const topTrackList = this.props.topTracks.map((track)=>{
      const linkPath = "/artist/"+track.artistName+"/track/"+track.name;
      return (
        <Link to={linkPath} style={{color:"inherit",textDecoration:"none"}}>
        <ListGroupItem tag="button" action className="data-list">
            <Row >
                <Col className="data-text-container">
                  {track.name}
                </Col>
            </Row>
        </ListGroupItem>
        </Link>
      )
    });
    const topAlbumsList = this.props.topAlbums.map((album)=> {
      const linkPath = "/artist/"+album.artistName+"/album/"+album.name;
      return (
        <Link to={linkPath} style={{color:"inherit",textDecoration:"none"}}>
        <ListGroupItem tag="button" action className="data-list">
            <Row >
                <Col xs={2} className="data-img-container">
                <Row>
                    <img height="90%" width="90%" src={album.image} />
                </Row>
                </Col>
                <Col>
                  <Row className="data-text-container">{album.name}</Row>
                </Col>
            </Row>
        </ListGroupItem>
        </Link>
      )
    });

    return (
      <div>
        <Nav tabs id="tabs-container">
          <NavItem className="tabs-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === 'top-songs' })}
              onClick={() => { this.toggle('top-songs'); }}
            >
              Top Songs
            </NavLink>
          </NavItem>
          <NavItem className="tabs-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === 'top-albums' })}
              onClick={() => { this.toggle('top-albums'); }}
            >
              Top Albums
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="top-songs">
            <Row>
              <Col sm="12">
                <ListGroup className="data-list-container">
                    {topTrackList.length!=0 ? topTrackList : !this.props.isLoading &&
                    <NetworkErrorIcon size="3em" margin="5em" text="Failed to load top tracks" textColor="white"/>}
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="top-albums">
            <Row>
              <Col sm="12">
                <ListGroup  className="data-list-container">
                    {topAlbumsList.length!=0 ? topAlbumsList : !this.props.isLoading &&
                    <NetworkErrorIcon size="3em" margin="5em" text="Failed to load top albums" textColor="white"/>}
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}