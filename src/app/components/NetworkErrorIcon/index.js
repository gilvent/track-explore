import React, { Component } from 'react';
import { Row,Col } from 'reactstrap';
import { PropTypes } from 'prop-types';
import error_lfm from 'assets/icons/network-error-lfm.png';
import error_mxm from 'assets/icons/network-error-mxm.png';

class NetworkErrorIcon extends Component{
    static propTypes = {
        text : PropTypes.string,
        padding: PropTypes.string,
        textColor: PropTypes.string,
        size: PropTypes.string, //em,
        type : PropTypes.string // mxm or lfm
    }
    static defaultProp = {
        textColor: "white"
    }
    render(){
        const {text,textColor,padding,size} = this.props;
        const type = this.props.type? this.props.type : "lfm"
        return (
            <Row style={{paddingTop:padding,paddingBottom:padding,textAlign:"center"}}>
                <Col sm={{size:12}} style={{height:size}}>
                    { type == "lfm" ?
                        <img height="100%" src={error_lfm} />
                      : type =="mxm" &&
                        <img height="100%" src={error_mxm} />
                    }
                    
                </Col>
                {
                    text &&
                    <Col sm={{size:12}} style={{color:textColor,fontSize:"90%"}}>
                        <div>{text}</div>
                    </Col>
                }
                
            </Row>
        )
    }
}
export default NetworkErrorIcon;