export const animateIgButton = (animate) => {
    return {
        type: 'SET_IG_BUTTON_ANIMATION',
        payload: animate
    }
}
export const animateFbButton = (animate) => {
    return {
        type: 'SET_FB_BUTTON_ANIMATION',
        payload: animate
    }
}