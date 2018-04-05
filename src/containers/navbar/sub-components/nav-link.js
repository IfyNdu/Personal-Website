import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-scroll';

/* 
  NavLink Component
  @param {string} offset
  @param {string} title
  @returns navigation link element
 */
const NavLink = ({ href, title }) => {
    return (
        <Link to={href}
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            className="navbar__Title" >
            <div >{title}</div>
        </Link>
    );
}

NavLink.propTypes = {
    href: PropTypes.number,
    title: PropTypes.string
};

export default NavLink;