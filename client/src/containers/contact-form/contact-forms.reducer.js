const initalState = {
  isEmailSent: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case 'SET_EMAIL_STATUS':
      return Object.assign({}, state, {
        isEmailSent: action.payload
      });
    default:
      return state;
  }
};