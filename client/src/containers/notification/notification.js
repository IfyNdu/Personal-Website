import React from 'react';
import PropTypes from 'prop-types';

// redux
import store from '../../store'
import { connect } from 'react-redux';

/* 
  Notification Component
  @returns Pop up notification from bottom of screen
 */

const Notifier = ({ isEmailSent }) => {
    return (
        <div
            className={`notification ${isEmailSent ? 'popUp' : ''}`}>
            <span>Email sent...</span>
        </div>
    );
}

Notifier.propTypes = {
};
const storeToProps = (store) => {
    return {
        isEmailSent: store.contactMeReducer.isEmailSent
    }
}
export default connect(storeToProps)(Notifier);