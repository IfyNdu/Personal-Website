import React from 'react';
import PropTypes from 'prop-types';

import ContactMeForm from '../../contact-form/contact-form.component';

// modules
import Observer from 'react-intersection-observer'
import YouTube from 'react-youtube';

// redux
import store from '../../../store'
import { connect } from 'react-redux';

// custom 
import { NAVIGATION_LINKS } from '../../navbar/navbar-list'
import { setVideoPlayerObject } from '../body.actions'
/* 
  ContactMeSection Component
  @returns Contact me section contained within parallax
 */

const ContactMeSection = ({ styles, addScrollAnimation, contactParallax }) => {
    const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            loop: 1,
            modestbranding: 1,
            controls: 0,
            rel: 0
        }
    };
    return (
        <div className="parallax__ContactMe">
            <Observer onChange={inView => addScrollAnimation(NAVIGATION_LINKS[4], inView)}>
                <YouTube
                    videoId="SYM-RJwSGQ8"
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

        </div>
    );
}

ContactMeSection.propTypes = {
};
const storeToProps = (store) => {
    return {
        contactParallax: store.bodyReducer.contactParallax
    }
}
export default connect(storeToProps)(ContactMeSection);