
export const setEmailStatus = (sent) => {
    return {
        type: 'SET_EMAIL_STATUS',
        payload: sent
    }
}