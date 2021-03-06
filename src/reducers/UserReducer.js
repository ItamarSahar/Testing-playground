
const initialState = {
    user: null,
    error: null
}

export default function UserReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}