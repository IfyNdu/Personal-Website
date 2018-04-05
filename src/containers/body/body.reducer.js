const initialState = {
    animateFB: null,
    animateIG: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FB_BUTTON_ANIMATION':
            return Object.assign({}, state, {
                animateFB: action.payload
            })
        case 'SET_IG_BUTTON_ANIMATION':
            return Object.assign({}, state, {
                animateIG: action.payload
            })
        default:
            return state
    }
}