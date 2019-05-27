import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  InputGroup, InputGroupAddon, Input
 } from 'reactstrap';

import searchActions from 'app/redux/actions/search';
import uiActions from 'app/redux/actions/ui';
import searchSelectors from 'app/redux/selectors/search';
import searchUiSelectors from 'app/redux/selectors/ui/search';
import logo from 'assets/search-icon.png';

import ResultDropdown from './ResultDropdown';
import TypeButton from './TypeButton';
import './SearchBar.scss';





class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.handleResultToggle = this.handleResultToggle.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleTypeSelection = this.handleTypeSelection.bind(this);
        this.state = {
          input: '',
          typingTimeout: 0
        };
      }
      handleResultToggle(){
        if(!this.props.isLoading){
            this.props.CloseSearchResult();
        }
      }
      handleTypeSelection(type){
        this.props.SelectSearchType(type);
        if(this.state.input!==""){
            switch(type){
                case "Artist": this.props.SearchArtist(this.state.input);break;
                case "Album": this.props.SearchAlbum(this.state.input);break;
                case "Track": this.props.SearchTrack(this.state.input);break;
            }
        }
      }
      handleInput(event){
        const self = this;
        this.setState({
            input: event.target.value
        });
        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }
        if (event.target.value=='') {
            this.props.CloseSearchResult();
        }else{
            this.setState({
                typingTimeout: setTimeout(function(){
                        switch(self.props.SearchType){
                            case "Artist": self.props.SearchArtist(self.state.input);break;
                            case "Album": self.props.SearchAlbum(self.state.input);break;
                            case "Track": self.props.SearchTrack(self.state.input);break;
                        }
                },1500)
            })
        }

      }

     render(){
        let {input} = this.state;
        let {ResultByQuery,searchResultOpen,isLoading,SearchType,errorMessage} = this.props;
        var results = ResultByQuery(input) ? ResultByQuery(input) : {};
         return (
            <div>
            <InputGroup id="search-bar">
                <InputGroupAddon id="left-addon" addonType="prepend" tag="div">
                    <img id="search-logo" src={logo}/>
                </InputGroupAddon>
                <Input autoComplete="off" disabled={isLoading} onChange={this.handleInput} id="search-box" placeholder="Type a name ..."/>
                <TypeButton disabled={isLoading} onSelectType={this.handleTypeSelection} type={SearchType}/>
            </InputGroup>
            <ResultDropdown results={results} 
                            isOpen={searchResultOpen} 
                            onToggle={this.handleResultToggle}
                            searchType={SearchType}
                            isLoading={isLoading}
                            errorMessage={errorMessage}
                            /> 
            
            </div>
         )
     }
 }

const mapStateToProps = (state) => {
    return {
        ResultByQuery:(query) => searchSelectors.getResultByQuery(query)(state),
        searchResultOpen: state.ui.searchUI.searchResultOpen,
        isLoading: searchUiSelectors.getIsLoading(state),
        errorMessage: searchUiSelectors.getErrorMessage(state),
        SearchType: searchSelectors.getSearchType(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchArtist : (query) => {dispatch(searchActions.SearchArtist(query))},
        SearchAlbum : (query) => {dispatch(searchActions.SearchAlbum(query))},
        SearchTrack : (query) => {dispatch(searchActions.SearchTrack(query))},
        CloseSearchResult : () => dispatch(uiActions.CloseSearchResult()),
        SelectSearchType : (searchType) => dispatch(uiActions.SelectSearchType(searchType))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);