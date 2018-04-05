import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { findDOMNode } from 'react-dom'

// custom
import Parallax from './sub-components/parallax';
import Intro from './sub-components/intro';
import AboutSection from './sub-components/about';
import NameSection from './sub-components/name';
import SkillSection from './sub-components/skills';
import ExperienceSection from './sub-components/experience';
import { TITLE_SECTIONS } from './intro.sections'

// modules
import Observer from 'react-intersection-observer'

// redux
import store from '../../store'
import { animateFbButton, animateIgButton } from './body.actions'

class Body extends Component {
    constructor(props) {
        super(props);

        this.addScrollAnimation = this.addScrollAnimation.bind(this);
        this.handleFBHover = this.handleFBHover.bind(this);
        this.handleIGHover = this.handleIGHover.bind(this);
        this.handleSocialHoverOut = this.handleSocialHoverOut.bind(this);
    };

    componentDidMount = () => { }

    addScrollAnimation = (shouldAdd) => {
    }
    handleFBHover = (e) => {
        store.dispatch(animateFbButton(`animate--fb`));
    }
    handleIGHover = (e) => {
        store.dispatch(animateIgButton(`animate--ig`));
    }
    handleSocialHoverOut = (e) => {
        store.dispatch(animateFbButton(''))
        store.dispatch(animateIgButton(''))
    }
    render() {


        // let chill = [
        //     {
        //         image: TITLE_SECTIONS.name.path,
        //         name: 'home',
        //         childElement: <NameSection />
        //     },
        //     {
        //         image: null,
        //         name: 'about',
        //         childElement: <AboutSection handleFBHover={this.handleFBHover} handleIgHover={this.handleIGHover} handleHoverOut={this.handleSocialHoverOut} />
        //     },
        //     {
        //         image: TITLE_SECTIONS.programmer.path,
        //         name: 'skill',
        //         childElement: <SkillSection styles={bgImg} />
        //     },
        //     {
        //         image: null,
        //         name: 'experience',
        //         childElement: <ExperienceSection />
        //     },
        // ];

        // let r = Object.entries(TITLE_SECTIONS).map((item, index) => {
        //     return <Element name= {item.name}>
        //     <Observer onChange={inView => this.addScrollAnimation(inView)}> <Parallax children={<NameSection />} /></Observer>
        // </Element>
        // })

        // let sections = chill.map((item, index) => {
        //     let bgImg = { backgroundImage: `url(${item.image})` };
        //     return <Element name={item.name}>
        //         <Observer onChange={inView => this.addScrollAnimation(inView)}> <Parallax key={`parallax-${index}`} children={item.childElement} /></Observer>
        //     </Element>
        // })

        let bgImg2 = { backgroundColor: `lighten(blue, 20%)` };
        let aboutSection = <AboutSection handleFBHover={this.handleFBHover} handleIgHover={this.handleIGHover} handleHoverOut={this.handleSocialHoverOut} styles={bgImg2} />

        let bgImg = { backgroundImage: `url(${TITLE_SECTIONS.programmer.path})` };
        let skillSection = <SkillSection styles={bgImg} />

        let bgImg1 = { backgroundImage: `url(${TITLE_SECTIONS.name.path})` };
        let nameSection = <NameSection styles={bgImg1} />

        let experienceSection = <ExperienceSection />

        return (
            <div className={`body__container`}>
                <Intro />
                {/* {sections} */}
                <Element name='home'>
                    <Observer onChange={inView => this.addScrollAnimation(inView)}> <Parallax children={nameSection} /></Observer>
                </Element>
                <Element name='about'>
                    <Observer onChange={inView => this.addScrollAnimation(inView)}> <Parallax children={aboutSection} /></Observer>
                </Element>
                <Element name='skill'>
                    <Observer onChange={inView => this.addScrollAnimation(inView)}> <Parallax children={skillSection} /></Observer>
                </Element>
                <Element name='experience'>
                    <Observer onChange={inView => this.addScrollAnimation(inView)}> <Parallax children={experienceSection} /></Observer>
                </Element>
            </div>
        );
    }
}
Body.defaultProps = {};
export default Body