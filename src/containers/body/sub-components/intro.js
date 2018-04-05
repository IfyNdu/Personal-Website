import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TITLE_SECTIONS } from '../intro.sections'

/* 
  Intro Component
  @param {string} offset
  @param {string} title
  @returns introductory division
 */

class Intro extends Component {
    constructor(props) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.state = {
            animate: '',
            backgroundImage: null
        }
    };

    componentDidMount = () => { }

    handleHover = (e) => {   
        this.setState({
            animate: 'show-image',
            backgroundImage: TITLE_SECTIONS[e.target.id].path
        })
    }

    handleMouseLeave = (e) => {
        this.setState({
            animate: '',
            backgroundImage: null
        })
    }

    render() {

        let bgImg = {
            backgroundImage: `url(${this.state.backgroundImage})`,
            backgroundPosition: 'center'
        };
        return (
            <div className={`intro__Container --${this.state.animate}`}>
                <div className={`intro__Image --${this.state.animate}`}
                style={bgImg}>
                </div>
                <div className="intro__inner__Container">
                    <div className="row1">
                        <div className="title__bar">
                            <h1 onMouseOver={this.handleHover}
                                onMouseLeave={this.handleMouseLeave}
                                ref='refersss' 
                                id={TITLE_SECTIONS.name.name}>Ifeanyi Ndu</h1>
                            <div className="bar__Container">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="title__bar">
                            <h2 onMouseOver={this.handleHover}
                                onMouseLeave={this.handleMouseLeave}id={TITLE_SECTIONS.softEngr.name}>Software Engineer</h2>
                            <div className="bar__Container">
                                <span></span>
                            </div>
                        </div>
                        <div className="title__bar">
                            <h2 onMouseOver={this.handleHover}
                                onMouseLeave={this.handleMouseLeave}id={TITLE_SECTIONS.programmer.name}>programmer</h2>
                            <div className="bar__Container">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="title__bar">
                            <h2 onMouseOver={this.handleHover}
                                onMouseLeave={this.handleMouseLeave}
                                id={TITLE_SECTIONS.gym.name}>gym bunny</h2>
                            <div className="bar__Container">
                                <span></span>
                            </div>
                        </div>
                        <h2 onMouseOver={this.handleHover}
                            onMouseLeave={this.handleMouseLeave}
                            id={TITLE_SECTIONS.music.name}>music lover</h2>
                    </div>
                </div>
                <div className={`intro__Mask --${this.state.animate}`}></div>
            </div>
        );
    }
}

Intro.propTypes = {
};

export default Intro;