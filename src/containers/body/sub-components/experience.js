import React from 'react';
import PropTypes from 'prop-types';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

//redux 

import { connect } from 'react-redux';
import store from '../../../store'

/* 
  ExperienceSection Component
  @returns Brief about me section contained within parallax
 */

const ExperienceSection = ({ styles }) => {
    let tools = ["React", "Redux", "Node", "Sass", "Javascript", "Enzyme", "Jest", "Swift", "Xcode", "Git", "Linux", "Mac"]
        .map((item, index) => {
            return <div className={`tools ${item}--${index}`} >
                <span className="tools__Bar"></span>
                 <span className="tools__Title">{item}</span>
            </div>
        })
    return (
        <div className="parallax__Experience">
            <div className="parallax__Container --experience"
                style={styles}>
            </div>
            <p>Software Engineer</p>
            <h2>From client to server, I contribute to it all...</h2>
            <h4 className="tools__subHeading">Preferred tools of choice includes but not limited to</h4>
            <div className="experience__Tools">
                {tools}
            </div>
        </div>
    );
}

ExperienceSection.propTypes = {
};

export default ExperienceSection