import React from 'react';
import { 
  Dropdown, DropdownMenu, DropdownToggle, Input, DropdownItem,
  Row,Col
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {ScaleLoader} from 'react-spinners';
import PropTypes from 'prop-types';
import './styles.css';
import logo from '../../../../assets/musixmatch-logo.png';

class ResultDropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    results: PropTypes.object, 
    isOpen: PropTypes.bool, 
    onToggle: PropTypes.func, //handle function
    searchType: PropTypes.string,
    isLoading: PropTypes.bool
  }
  static defaultProps = {
    resultOpen: false, 
    isOpen: false
  }

  render() {
    var {results,searchType,isOpen,onToggle,isLoading} =this.props;
    var resultList = Object.keys(results).map(function(key){
                          const path = searchType == "Artist" ? `/artist/${results[key].name}` : 
                                       `/artist/${results[key].artist}/${searchType.toLowerCase()}/${results[key].name}`
                          return <DropdownItem>
                                  <Link style={{color:"inherit",textDecoration:"none"}} 
                                     to={path}> 
                                      <Row className="result-list">
                                          <Col xs={2} className="result-img-container">
                                              <img height="100%" width="100%" src={results[key].image} />
                                          </Col>
                                          <Col>
                                            <Row className="result-text-container">{results[key].name}</Row>
                                            {searchType!=="Artist" && 
                                            <Row className="result-artist-container">{results[key].artist}</Row> 
                                            }
                                          </Col>
                                      </Row>
                                  </Link>
                                 </DropdownItem>;
                      })
    
  return (
      <Dropdown isOpen={isOpen} toggle={onToggle} >
          <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={isOpen}>
          </DropdownToggle>
          <DropdownMenu id="result-list-container">
              <Col style={{textAlign:"center"}}>
                  <ScaleLoader className="loading-overlay" color={"#bb0000"} loading={isLoading}/>
              </Col>
              
              <div >
              {resultList}
              {
                Object.keys(resultList).length !== 0 &&
                <Col style={{textAlign:"center",color:"#bb0000",paddingTop:"1%"}}>
                  <a style={{color:'inherit',textDecoration:"none"}} href="javascript:void(0)">
                    See more results
                  </a>
                </Col>
              }
              { (Object.keys(results).length === 0 && isLoading == false) &&
                <Col style={{textAlign:"center",fontSize:"110%"}}>
                  <a style={{color:'inherit',textDecoration:"none"}} href="javascript:void(0)">
                    No result found
                  </a>
                </Col> 
              }
              </div>
          </DropdownMenu>
      </Dropdown>
    );
  }
}

export default ResultDropdown;