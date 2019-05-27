import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Footer from 'app/components/Footers/MainFooter';

import './MainLayout.scss';

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