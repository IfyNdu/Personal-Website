import React from 'react';
import PropTypes from 'prop-types';

/* 
  Parallax Component
  @param {array} children
  @returns parallax background with children
 */
const Parallax = ({ children, name }) => {
    return (
        <div className={`parallax`}>
            {children}
        </div>
    );
}

Parallax.propTypes = {
    children: PropTypes.array,
    name: PropTypes.string
};

export default Parallax;