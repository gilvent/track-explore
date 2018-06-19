import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row,Col, Container} from 'reactstrap';
import github_logo from '../../../assets/github-logo.png';
import './styles.css';

class MainFooter extends Component{
    render(){
        return (
            <Row className="App-footer">
                <Col sm={4} style={{color:'#FFFFFF'}}>
                    View the source code!
                    <Row className="footer-item">
                    <Col  xs={2}>
                        <img src={github_logo} width="100%" height="100%"/>
                    </Col>
                    <Col> 
                        <Link style={{textDecoration:"none",color:"inherit"}} to="">https://github.com/gilvent</Link>
                    </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default MainFooter;