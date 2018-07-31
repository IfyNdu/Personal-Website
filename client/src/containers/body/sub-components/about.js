import React from 'react';
import PropTypes from 'prop-types';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

//redux 

import { connect } from 'react-redux';

//socials model

import { SOCIALS } from '../models'
/* 
  AboutSection Component
  @returns Brief about me section contained within parallax
 */

const AboutSection = ({ handleHover, handleHoverOut, isActive }) => {
    let socials = Object.entries(SOCIALS).map((item, index) => {
        return <div className={`outLink --${item[1].name}`}
            onMouseOver={() => handleHover(item[1].name)}
            onMouseLeave={handleHoverOut}
            onClick={() => window.open(item[1].link, "_blank")}>
            <span className="outlink__Title">{item[1].title}</span> <FaAngleRight className={`section1__AngleRight ${isActive(item[1].name)}`} />
        </div>
    })
    return (
        <div className="non__Parallax-Container --about">
            <div className="non__Parallax">
                <p>About</p>
                <h3>London based Web and mobile app developer</h3>
                <div className="outlinks__Container --socialMedia__container">
                    {socials}
                </div>
            </div>
        </div>
    );
}

AboutSection.propTypes = {
};

const storeToProps = (store) => {
    return {
        animateButton: store.bodyReducer.animateButton
    }
}

export default connect(storeToProps)(AboutSection);