const initialState = {
    navBarIsVisible: true,
    navBarIsTransparent: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAVBAR_VISIBILITY':
            return Object.assign({}, state, {
                navBarIsVisible: action.payload
            });
        case 'SET_NAVBAR_TRANSPARENCY':
            return Object.assign({}, state, {
                navBarIsTransparent: action.payload
            });
        default:
            return state
    }
}