import React from 'react';
import PropTypes from 'prop-types';

// redux 
import store from '../../../store'
import { connect } from 'react-redux';

/* 
  HamburgerMenu Component
  @returns Hamburgre menu
 */
const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
    return (
        <div className={`navbar__Hamburger ${isMenuOpen ? 'animateBars' : ''}`} onClick={toggleMenu} >
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
const storeToProps = (store) => {
    return {
        isMenuOpen: store.navigationReducer.isMenuOpen
    }
}
export default connect(storeToProps)(HamburgerMenu);