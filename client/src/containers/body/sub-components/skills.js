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
  SkillSection Component
  @returns What i can do contained within parallax
 */

const SkillSection = ({ styles, skillsParallax, addScrollAnimation }) => {
    return (
        <div className="parallax__Skill">
            <div className="parallax__Container --skill"
                style={styles}>
            </div>
            <Observer onChange={inView => addScrollAnimation(NAVIGATION_LINKS[2], inView)}>
                <h1 className={skillsParallax}>I make web and mobile stuff...</h1>
            </Observer>
        </div>
    );
}

SkillSection.propTypes = {
};
const storeToProps = (store) => {
    return {
        skillsParallax: store.bodyReducer.skillsParallax
    }
}
export default connect(storeToProps)(SkillSection);