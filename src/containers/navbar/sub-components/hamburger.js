import React from 'react';
import PropTypes from 'prop-types';

/* 
  HamburgerMenu Component
  @returns Hamburgre menu
 */
const HamburgerMenu = ({ toggleMenu, animateBars }) => {
    return (
        <div className={`navbar__Hamburger ${animateBars ? 'animateBars' : ''}`} onClick={toggleMenu} >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
        </div>
    );
}

HamburgerMenu.propTypes = {
    toggleMenu: PropTypes.func,
    animateBars: PropTypes.bool
};

export default HamburgerMenu;