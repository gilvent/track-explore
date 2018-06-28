import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Button} from 'reactstrap';
import {PropTypes} from 'prop-types'
import './InfoPanel.css';
import NetworkErrorIcon from '../../../components/NetworkErrorIcon';


class InfoPanel extends Component {
    static propTypes ={
        albumData : PropTypes.object,
        isFetching: PropTypes.bool,
    }
    render(){
        const {albumData,isFetching} = this.props;
        return (
            <div>
                <Row id="album-title-container">
                    <Col sm={12}>
                        <h2 style={{color:"#FFFFFF"}}>{albumData.name}</h2>
                    </Col>
                    <Col sm={12} style={{color:"#bb0000"}}>
                        <span style={{color:"#FFF",fontStyle:"italic"}}>album by </span>
                        <Link style={{color:"inherit"}} 
                              to={`/artist/${albumData.artistName}`}><span>{albumData.artistName}</span></Link>
                    </Col>
                </Row>
                <Row style={{color:"#bb0000",paddingTop:"1em"}}>
                    <Col>
                        <Button className="album-buttons">{albumData.listeners} <br/> Listeners</Button>
                    </Col>
                    <Col>
                        <Button className="album-buttons">{albumData.playcount} <br/> Play Count</Button>
                    </Col>
                </Row>
                {
                    albumData.summary ? 
                    <Row style={{color:"#FFFFFF",paddingTop:"1em",paddingBottom:"1em"}} >
                        <Col id="album-summary-container" className="custom-scrollbar" md={12} >
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