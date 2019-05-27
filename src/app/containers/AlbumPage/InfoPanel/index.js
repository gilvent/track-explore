import React, { Component } from 'react';
import { Row,Col } from 'reactstrap';
import {PropTypes} from 'prop-types'

import NetworkErrorIcon from 'app/components/NetworkErrorIcon';
import ListenersPlaycountButtons from 'app/components/ListenersPlaycountButtons';

import './InfoPanel.scss';

class InfoPanel extends Component {
    static propTypes ={
        albumData : PropTypes.object,
        isFetching: PropTypes.bool,
    }
    render(){
        const {albumData,isFetching} = this.props;
        return (
            <div>
                <ListenersPlaycountButtons listeners={albumData.listeners} playcount={albumData.playcount}/>
                {
                    albumData.summary ? 
                    <Row style={{color:"#FFFFFF",paddingTop:"1em",paddingBottom:"1em"}} >
                        <Col id="album-summary-container" className="circle-scrollbar" md={12} >
                            {albumData.summary}
                        </Col>
                    </Row> 
                    : !isFetching &&
                    <NetworkErrorIcon size="3em" padding="5em" text="No available summary" textColor="white"/>
                }
                
                
            </div>
        )
    }
}

export default InfoPanel;