import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-scroll';

// redux 
import store from '../../../store'
import { connect } from 'react-redux';
import { setSideMenuStatus } from '../navbar.actions'

/* 
  NavLink Component
  @param {string} offset
  @param {string} title
  @returns navigation link element
 */
const NavLink = ({ href, title, isMenuOpen }) => {
    return (
        <Link
            to={href}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={1500}
            onClick={() => {
                if (isMenuOpen) {
                    store.dispatch(setSideMenuStatus(!isMenuOpen))
                }
            }}
            className={`navbar__Title ${isMenuOpen ? '--slideOut' : ''}`} >
            <div >{title}</div>
        </Link>
    );
}

NavLink.propTypes = {
    href: PropTypes.number,
    title: PropTypes.string
};
const storeToProps = (store) => {
    return {
        isMenuOpen: store.navigationReducer.isMenuOpen
    }
}
export default connect(storeToProps)(NavLink);