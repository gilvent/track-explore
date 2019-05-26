import React, { Component } from 'react';
import './styles.css';
import { Container } from 'reactstrap';

import Footer from 'app/components/Footers/MainFooter';

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