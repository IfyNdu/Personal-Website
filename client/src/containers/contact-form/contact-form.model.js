import * as validators from '../../utilities/validators';

export const model = {
  sender: {
    className: 'Contact__email-input',
    name: 'sender',
    label: 'sender',
    group: 'contact',
    type: 'email',
    value: null,
    placeholder: 'email...',
    isRequired: true,
    validator: validators.isEmailValid
  },
  
  name: {
    className: 'Contact__name-input',
    name: 'name',
    label: 'name',
    placeholder: 'name...',
    validator: validators.isNameValid,
    group: 'contact',
    type: 'text',
    isRequired: true,
    value: null
  },

  message: {
    className: 'Contact__body-text-area',
    name: 'message',
    label: 'message',
    placeholder: 'message...',
    validator: validators.isMessageValid,
    group: 'contact',
    type: 'textArea',
    isRequired: true,
    value: null
  }
};
