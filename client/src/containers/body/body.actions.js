
export const animateButton = (animate) => {
    return {
        type: 'SET_BUTTON_ANIMATION',
        payload: animate
    }
}
export const animateH1 = (animate) => {
    return {
        type: 'SET_H1_ANIMATION',
        payload: animate
    }
}
export const videoPLayerState = (state) => {
    return {
        type: 'SET_PLAYER_STATE',
        payload: state
    }
}
export const setVideoPlayerObject = (object) => {
    return {
        type: 'SET_VIDEO_PLAYER_OBJECT',
        payload: object
    }
}
