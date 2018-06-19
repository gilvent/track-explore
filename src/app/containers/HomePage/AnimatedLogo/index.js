import React, {Component} from 'react';
import musixmatch_logo from '../../../../assets/musixmatch-logo.png';
import lastfm_logo from '../../../../assets/lastfm-logo.png'
import react_logo from '../../../../assets/react-logo.svg';
import './styles.css'
export const AnimatedLogo = (props) => {
    return (
        <div style={{zIndex:0}}>
            <div className="center">
                <img src={react_logo} styles={{height:"100%"}} className="react-logo" />
            </div>
            <div className="center">
                <img src={lastfm_logo} styles={{height:"100%"}} className="lfm-logo" />
            </div>
            <div className="center">
                <img src={musixmatch_logo} styles={{height:"100%"}} className="mxm-logo" />
            </div>
        </div>
    )
}