import React, {Component} from 'react';
import {
   InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';

import './styles.css';

class TypeButton extends Component {
    constructor(props){
        super(props);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
            dropdownOpen: false,
        }
    }
    static propTypes = {
        onSelectType: PropTypes.func,
        type: PropTypes.string,
        disabled: PropTypes.bool
    }
    static defaultProps = {
        type: "Artist"
    }
    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    handleSelection(type){
        this.props.onSelectType(type);
    }
    render(){
        return (
            <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                <DropdownToggle disabled={this.props.disabled} id="toggle" caret>
                    {this.props.type}
                </DropdownToggle>
                <DropdownMenu id="toggle-menu">
                    <DropdownItem style={{color:"#ce0000"}} header>Type</DropdownItem>
                    <DropdownItem className="toggle-menu-item" onClick={() => this.handleSelection('Artist')}>Artist</DropdownItem>
                    <DropdownItem className="toggle-menu-item" onClick={() => this.handleSelection('Track')}>Track</DropdownItem>
                    <DropdownItem className="toggle-menu-item" onClick={() => this.handleSelection('Album')}>Album</DropdownItem>
                </DropdownMenu>
            </InputGroupButtonDropdown>
        )
    }
}

export default TypeButton;