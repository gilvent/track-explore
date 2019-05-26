import React, { Component } from 'react';
import { Row,Col,Tooltip } from 'reactstrap';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import './SimilarPanel.css';

class SimilarArtistsList extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        }
    }
    static propTypes ={
        data : PropTypes.array
    }
    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
    }
    dataWithTooltipId(data){
        for(let i=0;i<data.length;i++){
           data[i] = {
               ...data[i],
               targetId: "tooltip"+i
           }          
        }
        return data;
    }
    render(){
        const similarArtists = this.dataWithTooltipId(this.props.data).map((artist)=> {
            return (
                <TooltipItem artist={artist}/>
            )
        });
        return (
            <Row style={{height:"5em"}}>
                <Col sm={12}>
                    Similar Artists
                </Col>
                <Col sm={12}>
                    <Row>
                    {similarArtists}
                    </Row>
                </Col>
            </Row>
        )
    }
}

class TooltipItem extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        }
    }
    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
    }
    render(){
        const {artist} = this.props;
        return (
            <Col>
                <Row>
                    <Link to={`/artist/${artist.name}`} style={{height:"100%"}}>
                        <Col className="icon-container">
                        <img style={{borderRadius:"5%"}} width="100%" height="100%" src={artist.image} id={artist.targetId}/>
                        </Col>
                    </Link>
                </Row>
                <Tooltip className="shadow" placement="top" isOpen={this.state.tooltipOpen} target={artist.targetId} 
                        toggle={this.toggle}>
                    {artist.name}
                </Tooltip>
            </Col>
        )
    }
}



export default SimilarArtistsList