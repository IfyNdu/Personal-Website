import React from 'react';
import ReactDOM from 'react-dom';

import ContactForm from '../containers/contact-form/contact-form.component'
import { Provider } from 'react-redux'
import store from '../store'

describe('Contact form', () => {
    // let wrapper,
    //     mountedWrapper;
    // beforeEach(() => {
    //     //wrapper = shallow(<Provider store={store}><ContactForm /></ Provider>)
    //     mountedWrapper = shallow(<Provider store={store}><ContactForm /></ Provider>)
    // });

    it('renders succesfully', () => {
        let wrapper = shallow(<Provider store={store}><ContactForm /></ Provider>)
        expect(wrapper).toMatchSnapshot();
    });

    it('contains 3 FormInput components', () => {
        let wrapper = mount(<Provider store={store}><ContactForm /></ Provider>)
        let formInput = wrapper.find('FormInput');
        expect(formInput).toHaveLength(3);
    });

    it('submit button is disabled', () => {
        let wrapper = mount(<Provider store={store}><ContactForm /></ Provider>)
        let submitButton = wrapper.find('button').props();
        expect(submitButton.disabled).toBe(true);
    });
    // it('isEmailSent props is false', () => {
    //     let wrapper = mount(<Provider store={store}><ContactForm /></ Provider>)
    //     let submitButton = wrapper.props();
    //     console.log(submitButton)
    //     expect(submitButton.isEmailSent).toBe(true);
    // });
}) 