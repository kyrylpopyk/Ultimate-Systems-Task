const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";

let initialState = {
    isLogged: true
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_STATUS:
            return{
                ...state,
                isLogged: action.body
            }
        default:
            return state;
    }
}

export const setUserStatus = (isLogged) => ({type: SET_LOGIN_STATUS, body: isLogged});

export default userReducer;