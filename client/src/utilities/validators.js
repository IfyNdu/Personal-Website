export const isEmailValid = (emailInput) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return {
      value: emailInput,
      message: re.test(String(emailInput).toLowerCase()) ? 'valid' : 'not valid',
      isValid: re.test(String(emailInput).toLowerCase())
    };
  };
  
  export const isNameValid = (name) => {
    return {
      value: name,
      message: name.length >= 2 ? 'valid' : 'not valid',
      isValid: name.length >= 2
    };
  }
  export const isMessageValid = (body) => {
    return {
      value: body,
      message: body.length >= 5 ? 'valid' : 'not valid',
      isValid: body.length >= 5
    };
  }
  
  export const formReady = (model, fields) => {
    let keys = Object.keys(model);
    let key = '';
    for (let i = 0; i < keys.length; i++) {
      key = keys[i];
      if ((!fields[key] && model[key].isRequired) || !model[key].validator(fields[key]).isValid) {
        return false;
      }
    }
    return true
  }
  
