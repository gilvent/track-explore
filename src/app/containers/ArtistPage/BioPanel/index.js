import React, {Component} from 'react';
import {Row,Col} from 'reactstrap';
import {PropTypes} from 'prop-types';

import NetworkErrorIcon from 'app/components/NetworkErrorIcon';

import './BioPanel.css';

class BioPanel extends Component {
    static propTypes ={
        data : PropTypes.object,
        isLoading: PropTypes.bool
    }
    render(){
        const {data,isLoading} = this.props;
        return (
            <div>
                <Row id="bio-title-container">
                    <Col>
                        <h2 style={{color:"#FFFFFF"}}>{data.name}</h2>
                    </Col>
                </Row>
                {
                    data.bio_content ? 
                    <Row style={{color:"#FFFFFF"}}>
                        <Col id="bio-published"><span>Bio published on {data.bio_published}</span></Col>
                        <Col id="bio-content-container" className="custom-scrollbar" md={12} >
                            {data.bio_content}
                        </Col>
                    </Row> 
                    : !isLoading &&
                    <NetworkErrorIcon size="3em" padding="5em" text="Failed to load bio" textColor="white"/>
                }
                
                
            </div>
        )
    }
}

export default BioPanel;