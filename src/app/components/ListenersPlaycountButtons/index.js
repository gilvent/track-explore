import React, { Component} from 'react';
import { Row,Col } from 'reactstrap';
import {PropTypes} from 'prop-types';

import './ListenersPlaycountButtons.css';


class ListenersPlaycountButtons extends Component{
    static propTypes = {
        listeners : PropTypes.string,
        playcount : PropTypes.string
    }
    render(){

        return (
            <Row style={{color:"#bb0000"}}>
                <Col xs={6}>
                    <div className="listeners-playcount-buttons">{this.props.listeners} <br/> Listeners</div>
                </Col>
                <Col xs={6}>
                    <div className="listeners-playcount-buttons">{this.props.playcount} <br/> Play Count</div>
                </Col>
            </Row>
        )
    }
}

export default ListenersPlaycountButtons;