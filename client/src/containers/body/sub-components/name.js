import React from 'react';
import PropTypes from 'prop-types';

// modules
import Observer from 'react-intersection-observer'

// redux
import store from '../../../store'
import { connect } from 'react-redux';

// custom 
import { NAVIGATION_LINKS } from '../../navbar/navbar-list'

/* 
  NameSection Component
  @returns My introduction contained within parallax
 */

const NameSection = ({ styles, infoParallax, addScrollAnimation }) => {
    return (
        <div className="parallax__Name">
            <div className="parallax__Container --name"
                style={styles}>
            </div>
            <Observer onChange={inView => addScrollAnimation(NAVIGATION_LINKS[0], inView)}>
                <h1 className={infoParallax}>Hello! I'm Ifeanyi a.k.a Ify...</h1>
            </Observer>
        </div>
    );
}

NameSection.propTypes = {
};
const storeToProps = (store) => {
    return {
        infoParallax: store.bodyReducer.infoParallax
    }
}
export default connect(storeToProps)(NameSection);