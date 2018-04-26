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

const ExperienceSection = () => {
    let tools = ["React", "Redux", "Node", "Sass", "Enzyme", "Jest", "Swift"]
        .map((item, index) => {
            return <div className={`tools ${item}--${index}`} >
                <span className="tools__Bar"></span>
                <span className="tools__Title">{item}</span>
            </div>
        })
    return (
        
        <div className="non__Parallax-Container --experience">
            <div className="non__Parallax">
                <p>Software Engineer</p>
                <h3>Client or Server I get involved in it all...</h3>
                <p className="tools__subHeading">Preferred tools of choice includes but not limited to</p>
                <div className="experience__Tools">
                    {tools}
                </div>
            </div>
        </div>
    );
}

ExperienceSection.propTypes = {
};

export default ExperienceSection