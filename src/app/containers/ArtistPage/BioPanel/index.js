import React, {Component} from 'react';
import {Row,Col} from 'reactstrap';
import {PropTypes} from 'prop-types'
import './BioPanel.css';

class BioPanel extends Component {
    static propTypes ={
        data : PropTypes.object
    }
    render(){
        const {data} = this.props;
        return (
            <div>
                <Row id="bio-title-container">
                    <Col>
                        <h2 style={{color:"#FFFFFF"}}>{data.name}</h2>
                    </Col>
                </Row>
                <Row style={{color:"#FFFFFF"}}>
                    <Col id="bio-published"><span>Bio published on {data.bio_published}</span></Col>
                    <Col id="bio-content-container" className="custom-scrollbar" md={12} >
                        {data.bio_content}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default BioPanel;