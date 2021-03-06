import React from 'react';
import PropTypes from 'prop-types';

// modules
import Observer from 'react-intersection-observer'

// custom 
import { NAVIGATION_LINKS } from '../../navbar/navbar-list'
import { connect } from 'react-redux';

/* 
  DJSection Component
  @returns My Dj skills contained within parallax
 */

const DJSection = ({ styles, addScrollAnimation, craftParallax }) => {
    return (
        <div className="parallax__Music">
            <div className="parallax__Container --music"
                style={styles}>
            </div>
            <Observer onChange={inView => addScrollAnimation(NAVIGATION_LINKS[3], inView)}>
                <h1 className={craftParallax}>I also do some Djing...</h1>
            </Observer>
        </div>
    );
}

DJSection.propTypes = {
};
const storeToProps = (store) => {
    return {
        craftParallax: store.bodyReducer.craftParallax
    }
}
export default connect(storeToProps)(DJSection);