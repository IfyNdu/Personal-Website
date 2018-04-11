import React from 'react';
import PropTypes from 'prop-types';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

//sound cloud model

import { DJ_MIX } from '../models'

//redux 

import { connect } from 'react-redux';
import store from '../../../store'

/* 
  MusicSection Component
  @returns Brief about me section contained within parallax
 */

const MusicSection = ({ handleHover, handleHoverOut, styles, isActive }) => {

    let music = Object.entries(DJ_MIX).map((item, index) => {
        return <div className="musicWork"
            onMouseOver={() => handleHover(item[0])}
            onMouseLeave={handleHoverOut}
            onClick={() => window.open(item[1].link, "_blank")}>
            <span>{item[1].title}</span> <FaAngleRight className={`section1__AngleRight ${isActive(item[0])}`} />
        </div>
    })
    return (
        <div className="parallax__MusicWork">
            <div className="parallax__Container --musicwork"
                style={styles}>
            </div>
            <p>Music</p>
            <h3>Check out a few of my afro mixes<br />
                more to come still...</h3>
            <h4 className="musicWork__title">WATCH THIS SPACE</h4>
            <div className="muicWork__container">
                {music}
            </div>
        </div>
    );
}

MusicSection.propTypes = {
};

const storeToProps = (store) => {
    return {
        animateButton: store.bodyReducer.animateButton
    }
}

export default connect(storeToProps)(MusicSection);