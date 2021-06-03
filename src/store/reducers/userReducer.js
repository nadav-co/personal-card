const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')) || JSON.parse(localStorage.getItem('loggedUser'))
const initialState = {
    loggedUser: loggedUser
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...state, loggedUser: action.user }
        case 'LOGOUT':
            return {...state, loggedUser: null}
        default:
            return state
    }
}