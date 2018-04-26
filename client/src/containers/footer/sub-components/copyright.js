import React from 'react';
import PropTypes from 'prop-types';

import FaCopyright from 'react-icons/lib/fa/copyright'
/* 
  Copyright Component
  @returns my name with a copy right icon
 */
const Copyright = () => {
    return (
        <div className="Footer__copyright">
            <span>© Ifeanyi Ndu</span>
        </div>
    );
}

Copyright.propTypes = {
    href: PropTypes.number,
    title: PropTypes.string
};

export default Copyright;