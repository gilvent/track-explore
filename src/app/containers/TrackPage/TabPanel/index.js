import React, {Component} from 'react';
import { 
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Col
} from 'reactstrap';
import {PropTypes} from 'prop-types';
import classnames from 'classnames';

import NetworkErrorIcon from 'app/components/NetworkErrorIcon';

import './TabPanel.css';


export default class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 'Wiki'
    };
  }
  static propTypes = {
    wiki : PropTypes.string,
    lyric : PropTypes.string,
    isFetchingTrack : PropTypes.bool,
    isFetchingLyric : PropTypes.bool
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    
    return (
      <div>
        <Nav tabs id="tabs-container">
          <NavItem className="tabs-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === 'Wiki' })}
              onClick={() => { this.toggle('Wiki'); }}
            >
              Wiki
            </NavLink>
          </NavItem>
          <NavItem className="tabs-item">
            <NavLink
              className={classnames({ active: this.state.activeTab === 'Lyric' })}
              onClick={() => { this.toggle('Lyric'); }}
            >
              Lyric
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="Wiki">
            <Row>
              <Col sm="12">
                
                {this.props.wiki ? 
                    <Row style={{color:"#FFFFFF",paddingTop:"1em",paddingBottom:"1em"}} >
                        <Col id="track-wiki-tab-container" className="track-tab-container" md={12}>
                            {this.props.wiki}
                        </Col>
                    </Row> 
                 : !this.props.isFetchingTrack &&
                    <Row style={{color:"#FFFFFF",paddingTop:"1em",paddingBottom:"1em"}} >
                        <Col id="track-wiki-tab-container" className="track-tab-container" md={12}>
                            <NetworkErrorIcon size="4em" padding="5em" text="No available wiki" 
                                              textColor="white"/>
                        </Col>
                    </Row> 
                }
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="Lyric">
            <Row>
              <Col sm="12">
                {
                    this.props.lyric ? 
                    <Row style={{color:"#FFFFFF",paddingTop:"1em",paddingBottom:"1em"}} >
                        <Col id="track-lyric-tab-container" className="track-tab-container" md={12}>
                            {this.props.wiki}
                        </Col>
                    </Row> 
                    : !this.props.isFetchingLyric &&
                    <Row style={{color:"#FFFFFF",paddingTop:"1em",paddingBottom:"1em"}} >
                        <Col id="track-lyric-tab-container" className="track-tab-container" md={12}>
                             <NetworkErrorIcon size="4em" padding="5em" text="Couldn't load lyric from musixmatch" 
                                               textColor="white" type="mxm"/>
                        </Col>
                    </Row> 
                }
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}