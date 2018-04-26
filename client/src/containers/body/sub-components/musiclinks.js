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

const MusicSection = ({ handleHover, handleHoverOut, isActive }) => {

    let music = Object.entries(DJ_MIX).map((item, index) => {
        return <div className="outLink"
            onMouseOver={() => handleHover(item[0])}
            onMouseLeave={handleHoverOut}
            onClick={() => window.open(item[1].link, "_blank")}>
            <span className="outlink__Title">{item[1].title}</span> <FaAngleRight className={`section1__AngleRight ${isActive(item[0])}`} />
        </div>
    })
    return (
        <div className="non__Parallax-Container --musicwork">
            <div className="non__Parallax">
                <p>Music</p>
                <h3>Check out some of my mixes...</h3>
                <div className="outlinks__Container --muicWork__container">
                    {music}
                </div>
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