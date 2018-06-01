const initialState = {
    animateButton: null,
    videoPlayerState: null,
    videoPlayer: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BUTTON_ANIMATION':
            return Object.assign({}, state, {
                animateButton: action.payload
            })
        case 'SET_H1_ANIMATION':
            return Object.assign({}, state, {
                [`${action.payload.section}Parallax`]: 'animate'
            })
        case 'SET_PLAYER_STATE':
            return Object.assign({}, state, {
                videoPlayerState: action.payload
            })
        case 'SET_VIDEO_PLAYER_OBJECT':
            return Object.assign({}, state, {
                videoPlayer: action.payload
            })
        default:
            return state
    }
}