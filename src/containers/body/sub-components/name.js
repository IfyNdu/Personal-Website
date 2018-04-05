import React from 'react';
import PropTypes from 'prop-types';

/* 
  NameSection Component
  @returns My introduction contained within parallax
 */

const NameSection = ({ styles }) => {
    return (
        <div className="parallax__Name">
            <div className="parallax__Container --name"
                style={styles}>
            </div>
            <h1>Hello! I'm Ifeanyi a.k.a Ify</h1>
        </div>
    );
}

NameSection.propTypes = {
};

export default NameSection;