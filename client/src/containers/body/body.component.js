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
import DJSection from './sub-components/dj.music';
import MusicSection from './sub-components/musiclinks';
import ContactSection from './sub-components/contact.me';
import Notification from '../notification/notification';

import { TITLE_SECTIONS } from './models'
import { NAVIGATION_LINKS } from '../navbar/navbar-list'

// modules
import Observer from 'react-intersection-observer'

// redux
import store from '../../store'
import { connect } from 'react-redux';
import { animateH1, animateButton, videoPLayerState, setVideoPlayerAutoplay } from './body.actions'

class Body extends Component {
    constructor(props) {
        super(props);

        this.addScrollAnimation = this.addScrollAnimation.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.isActive = this.isActive.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    };

    componentDidMount = () => {}

    addScrollAnimation = (section, inView) => {
        let payload = {
            section: section,
            inView: inView
        }
        if (inView) {
            store.dispatch(animateH1(payload));
        }
        if (section === 'contact') {
            if (inView && this.props.videoPlayer) {
                this.props.videoPlayer.target.playVideo();
            } else if (!inView && this.props.videoPlayer) {
                this.props.videoPlayer.target.pauseVideo();
            }
            store.dispatch(videoPLayerState(inView));
        }
    }

    handleHover = (e) => {
        store.dispatch(animateButton(e));
    }
    isActive = (name) => {
        return this.props.animateButton
            ? name === this.props.animateButton
                ? 'animate'
                : ''
            : ''
    }
    handleHoverOut = (e) => {
        store.dispatch(animateButton(''));
    }
    render() {
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

        let aboutSection = <AboutSection handleHover={this.handleHover} isActive={this.isActive} handleHoverOut={this.handleHoverOut} />

        let bgImg = { backgroundImage: `url(${TITLE_SECTIONS.programmer.path})` };
        let skillSection = <SkillSection styles={bgImg} addScrollAnimation={this.addScrollAnimation} />

        let bgImg1 = { backgroundImage: `url(${TITLE_SECTIONS.name.path})` };
        let nameSection = <NameSection styles={bgImg1} addScrollAnimation={this.addScrollAnimation} />

        let experienceSection = <ExperienceSection addScrollAnimation={this.addScrollAnimation} />

        let bgImg3 = { backgroundImage: `url(${TITLE_SECTIONS.music.path})` };
        let djSection = <DJSection styles={bgImg3} addScrollAnimation={this.addScrollAnimation} />

        let musicSection = <MusicSection handleHover={this.handleHover} isActive={this.isActive} handleHoverOut={this.handleHoverOut} />
        
        let contactSection = <ContactSection handleHover={this.handleHover} isActive={this.isActive} handleHoverOut={this.handleHoverOut} addScrollAnimation={this.addScrollAnimation} />

        return (
            <div className={`body__container`}>
                <Element name={NAVIGATION_LINKS[0]}>
                    <Intro />
                </Element>
                <Element name='name'>
                    <Parallax children={nameSection} />
                </Element>
                <Element name={NAVIGATION_LINKS[1]} spy={true}>
                    {/* <Parallax children={aboutSection} /> */}
                    {aboutSection}
                </Element>
                <Element name=''>
                    <Parallax children={skillSection} />
                </Element>
                <Element name={NAVIGATION_LINKS[2]} spy={true}>
                    {/* <Parallax children={experienceSection} /> */}
                    {experienceSection}
                </Element>
                <Element name=''>
                    <Parallax children={djSection} />
                </Element>
                <Element name={NAVIGATION_LINKS[3]}>
                    {/* <Parallax children={musicSection} /> */}
                    {musicSection}
                </Element>
                <Element name={NAVIGATION_LINKS[4]}>
                    <Parallax children={contactSection} />
                </Element>
                <Notification />
            </div>
        );
    }
}
Body.defaultProps = {};
const storeToProps = (store) => {
    return {
        animateButton: store.bodyReducer.animateButton,
        videoPlayer: store.bodyReducer.videoPlayer
    }
}
export default connect(storeToProps)(Body);