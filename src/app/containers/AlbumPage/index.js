import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row,Col} from 'reactstrap'
import MainHeader from '../../components/Headers/MainHeader';
class AlbumPage extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return (
            <div>
                <MainHeader/>
                <Row style={{marginTop:100,textAlign:"center",color:"white"}}>
                    <Col md={12}>
                        <h2>In Development</h2>
                    </Col>
                </Row>      
            </div>    
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AlbumPage);