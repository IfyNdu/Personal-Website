import axios from 'axios';
import { apiDomain } from '../../config';

// redux
import { setEmailStatus } from './contact-form.actions'
import store from '../../store'

export const sendMeAn = (email) => {
    return new Promise((resolve, reject) => {
        axios
            .post(`${apiDomain}/email`, {
                email: email.sender,
                name: email.name,
                message: email.message
            })
            .then(response => {
                resolve(response.data);
                store.dispatch(setEmailStatus(response.data.delivered));
            })
            .catch(error => reject(error))
    });
}