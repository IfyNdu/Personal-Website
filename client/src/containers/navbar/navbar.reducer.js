const initalState = {
    isMenuOpen: false,
  };

  export default (state = initalState, action) => {
    switch (action.type) {
      case 'SET_SIDE_MENU_STATUS':
        return Object.assign({}, state, {
            isMenuOpen: action.payload
        });  
      default: 
        return state;
    }
  };