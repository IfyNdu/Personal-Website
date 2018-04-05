export const setNavBarVisibility = (isVisible) => {
    return {
        type: 'SET_NAVBAR_VISIBILITY',
        payload: isVisible
    }
}
export const setNavBarTransparency = (isTransparent) => {
    return {
        type: 'SET_NAVBAR_TRANSPARENCY',
        payload: isTransparent
    }
}