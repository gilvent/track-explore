import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Nav, NavItem, Row, Col } from 'reactstrap';

import './styles.css';

class HeaderNoSearch extends Component {
    render(){
        return (
            <Row className="App-header">
                <Col md={{size:4,offset:1}}>
                </Col>
                <Col md={{size:6,offset:1}}>
                    <Nav style={{fontFamily:"Verdana"}}>
                        <NavItem >
                            <Link className="navLink" to="/" style={{textDecoration:"none"}}>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="navLink" to="/charts" style={{textDecoration:"none"}}>Charts</Link>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        )
    }
}

export default HeaderNoSearch;