import React from 'react';
import PropTypes from 'prop-types';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

//redux 

import { connect } from 'react-redux';
import store from '../../../store'

/* 
  AboutSection Component
  @returns Brief about me section contained within parallax
 */

const AboutSection = ({ handleFBHover, handleIgHover, animateFB, animateIG, handleHoverOut, styles }) => {
    return (
        <div className="parallax__About">
            <div className="parallax__Container --about"
                style={styles}>
            </div>
            <p>About</p>
            <h3>London based Web and mobile app developer</h3>
            <div className="socialMedia__container">
                <div className="socialMedia --fb"
                    onMouseOver={handleFBHover}
                    onMouseLeave={handleHoverOut}
                    onClick={() => window.open("//www.facebook.com/Mrflameon", "_blank")}>
                    <span>Facebook</span> <FaAngleRight className={`section1__AngleRight ${animateFB}`} />
                </div>
                <div className="socialMedia --ig"
                    onMouseOver={handleIgHover}
                    onMouseLeave={handleHoverOut}
                    onClick={() => window.open("//www.instagram.com/manlikeiffy/", "_blank")}>
                    <span>Instagram</span> <FaAngleRight className={`section1__AngleRight ${animateIG}`} />
                </div>
            </div>
        </div>
    );
}

AboutSection.propTypes = {
};

const storeToProps = (store) => {
    return {
        animateFB: store.bodyReducer.animateFB,
        animateIG: store.bodyReducer.animateIG
    }
}

export default connect(storeToProps)(AboutSection);