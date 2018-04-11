import React from 'react';
import PropTypes from 'prop-types';

// redux
import store from '../../store'
import { connect } from 'react-redux';

/* 
  Overlay Component
  @returns an overlay over the entire viewport
 */

const Overlay = ({ isMenuOpen }) => {
    return (
        <div 
        className={`Overlay__container ${isMenuOpen ? '--overlay':''}`}>
        </div>
    );
}

Overlay.propTypes = {
};
const storeToProps = (store) => {
    return {
        isMenuOpen: store.navigationReducer.isMenuOpen
    }
}
export default connect(storeToProps)(Overlay);