import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col } from 'reactstrap';

import HeaderNoSearch from 'app/components/Headers/HeaderNoSearch';

class ChartsPage extends Component{
    componentDidMount(){
    }
    render(){
        return (
            <div>
                <HeaderNoSearch />
                <Row style={{marginTop:100,textAlign:"center",color:"white"}}>
                    <Col md={12}>
                        <h2>Coming Soon</h2>
                    </Col>
                </Row>      
            </div>       
        )
    }
}

const mapStateToProps = () => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChartsPage) ;