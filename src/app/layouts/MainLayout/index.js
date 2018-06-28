import React, {Component} from 'react';
import './styles.css';
import {Row,Col,Container} from 'reactstrap';
import Footer from '../../components/Footers/MainFooter';
import Header from '../../components/Headers/MainHeader';

class MainLayout extends Component{
    componentDidMount(){
       
    }
    render(){
        return(
            <div className="App">
                <div id="App-content">
                
                <Container>
                    {this.props.children}
                </Container>
                </div>
                <Footer />
            </div>

        );
    }
}

export default MainLayout;