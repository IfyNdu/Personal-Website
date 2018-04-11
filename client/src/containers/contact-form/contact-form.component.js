// modules
import React, { Component } from 'react';

//custom
import FormInput from '../../generics/form-elements/input';
import { formReady } from '../../utilities/validators';
import { model } from './contact-form.model';
import { apiDomain } from '../../config'

// API
import * as API from './contact-form.api'

// redux
import store from '../../store'
import { setEmailStatus } from './contact-form.actions'
import { connect } from 'react-redux'

// magic 
import * as magic from '../../utilities/magicValues'

class ContactMeFrom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model,
            fields: {},
            isValid: false,
            formValid: false,
            contactLabel: 'SEND'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleInputChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        let fieldIsValid = this.state.model[name].validator(value);

        this.setState({
            isValid: fieldIsValid,
            formValid: formReady(model, this.state.fields),
            fields: Object.assign(this.state.fields, { [name]: value })
        }, () => {
            console.log(this.state.formValid);
        });

    }
    submitForm = () => {
        API.sendMeAn(this.state.fields)
            .then(result => {
            }).catch(error => console.log(error));
    }

    render() {
        let validationStyle = {
            'display': !this.state.formValid
                ? 'block'
                : 'none'
        };

        let contactMeForm = Object
            .entries(model)
            .map((field, index) => {
                return <FormInput key={`${index}-contactMe-field`}
                    {...model[field[0]]} // props
                    handleChange={this.handleInputChange}
                    value={this.props[field[0]]}
                />
            });

        let shouldEnable = !this.state.formValid || this.props.isEmailSent
            ? 'disabled'
            : ''
        let submitButton = <div className="ContactMe__button">
            <button
                className={`ContactMe__submit-button --${shouldEnable}`}
                disabled={!this.state.formValid || this.props.isEmailSent}
                onClick={this.submitForm}>
                {this.state.contactLabel}
            </button>
        </div>

        if (this.props.isEmailSent) {
            setTimeout(function () {
                store.dispatch(setEmailStatus(false));
            }, magic.POP_UP_DURATION)
        }

        let message = !this.state.formValid
            ? 'Please fill out all fields'
            : ''
        return (
            <div className="ContactMe__container" >
                <span
                    className="form__input-validation"
                    style={validationStyle}>
                    {message}
                    &nbsp;
                </span>
                {contactMeForm}
                {submitButton}
            </div>
        )
    }
}
const storeToProps = (store) => {
    return {
        isEmailSent: store.contactMeReducer.isEmailSent
    }
}
export default connect(storeToProps)(ContactMeFrom);