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
                    <a href="https://github.com/gilvent/track-explore" 
                           style={{textDecoration:"none",color:"inherit"}}>
                    <Row className="footer-item" style={{height:"100%"}}>
                        <Col style={{maxWidth:"5em",paddingTop:"0.5em"}}>
                            <img src={github_logo} width="100%" height="100%"/>
                        </Col>
                        <Col style={{paddingLeft:0,paddingTop:"1.5em",paddingBottom:"1em"}}> 
                            View the source code!
                        </Col>
                    </Row>
                    </a>
                </Col>
            </Row>
        )
    }
}

export default MainFooter;