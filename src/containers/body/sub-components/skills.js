import React from 'react';
import PropTypes from 'prop-types';

/* 
  SkillSection Component
  @returns What i can do contained within parallax
 */

const SkillSection = ({ styles }) => {
    return (
        <div className="parallax__Skill">
            <div className="parallax__Container --skill"
                style={styles}>
            </div>
            <h1>I make web and mobile stuff...</h1>
        </div>
    );
}

SkillSection.propTypes = {
};

export default SkillSection;