import React from 'react';
import PropTypes from 'prop-types';

// modules
import Observer from 'react-intersection-observer'
import YouTube from 'react-youtube';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

// redux
import store from '../../../store'
import { connect } from 'react-redux';

// custom 
import { NAVIGATION_LINKS } from '../../navbar/navbar-list'
import { setVideoPlayerObject } from '../body.actions'
import { VID_CREDIT, LINKEDIN } from '../models'
import ContactMeForm from '../../contact-form/contact-form.component';

/* 
  ContactMeSection Component
  @returns Contact me section contained within parallax
 */

const ContactMeSection = ({ styles, addScrollAnimation, contactParallax, handleHover, handleHoverOut, isActive }) => {
    const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            loop: 1,
            modestbranding: 1,
            controls: 0,
            rel: 0
        }
    };
    const remi = {

    }
    return (
        <div className="parallax__ContactMe">
            <Observer
                onChange={inView => addScrollAnimation(NAVIGATION_LINKS[4], inView)}>
                <YouTube
                    videoId="wamL0A9Qzxg"
                    className="parallax__Container --contactMe"
                    opts={opts}
                    onReady={(e) => {
                        store.dispatch(setVideoPlayerObject(e));
                    }}
                />
            </Observer>
            <fieldset>
                <legend
                    className="contactMe__legend"><h3>Get in contact</h3></legend>
                <ContactMeForm />
            </fieldset>
            <div className="outlinks__Container --linkedin__Container">
                <div className={`outLink --${LINKEDIN.name}`}
                    onMouseOver={() => handleHover(LINKEDIN.name)}
                    onMouseLeave={handleHoverOut}
                    onClick={() => window.open(LINKEDIN.link, "_blank")}>
                    <span className="outlink__Title">{LINKEDIN.title}</span>
                    <FaAngleRight
                        className={`section1__AngleRight 
                ${isActive(LINKEDIN.name)}`} />
                </div>
            </div>
            <div className="outlinks__Container --vidcredit__Container">
                <div className={`outLink --${VID_CREDIT.name}`}
                    // onMouseOver={() => handleHover(VID_CREDIT.name)}
                    // onMouseLeave={handleHoverOut}
                    onClick={() => window.open(VID_CREDIT.link, "_blank")}>
                    <span className="outlink__Title">{VID_CREDIT.title}</span>
                    <FaAngleRight
                        className={`section1__AngleRight`} />
                </div>
            </div>
        </div>
    );
}

ContactMeSection.propTypes = {
};
const storeToProps = (store) => {
    return {
        contactParallax: store.bodyReducer.contactParallax,
        animateButton: store.bodyReducer.animateButton
    }
}
export default connect(storeToProps)(ContactMeSection);