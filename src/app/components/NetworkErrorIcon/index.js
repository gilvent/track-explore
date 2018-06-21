import React, {Component} from 'react';
import {Row,Col} from 'reactstrap';
import {PropTypes} from 'prop-types';
import error_lfm from '../../../assets/icons/network-error-lfm.png';

class NetworkErrorIcon extends Component{
    static propTypes = {
        text : PropTypes.string,
        margin: PropTypes.string,
        textColor: PropTypes.string,
        size: PropTypes.string //em
    }
    static defaultProp = {
        textColor: "white"
    }
    render(){
        const {text,textColor,margin,size} = this.props;
        return (
            <Row style={{marginTop:margin,marginBottom:margin,textAlign:"center"}}>
                <Col sm={{size:12}} style={{height:size}}>
                    <img height="100%" src={error_lfm} />
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