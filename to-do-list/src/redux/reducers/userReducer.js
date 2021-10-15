import { userApi } from "../../api/userApi.js";

const SET_USER = "SET_USER";
const SET_FETCHING = "SET_FETCHING";

let initialState = {
    isAuth: false,
    user: "",
    isFetching: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                user: action.body,
                isAuth: true
            }
        case SET_FETCHING:
            return{
                ...state,
                isFetching: action.body
            }
        default:
            return state;
    }
}

//Actions
const setUser = (user) => ({type: SET_USER, body: user});
export const setFetchng = (fetching) => ({type: SET_FETCHING, body: fetching});

//Middleware
export const getUser = (login, password) => {
    return (dispatch) => {
        dispatch(setFetchng(true));
        userApi.loginUser(login, password)
        .then( data => {
            if("jwt" in data){
                localStorage.setItem("token",data.jwt);
                dispatch(setUser(data.user.username))
            }
            dispatch(setFetchng(false));
        });
    }
}

export const createUser = (username, email, password) => {
    return (dispatch) => {
        dispatch(setFetchng(true));
        userApi.registerUser(username, email, password)
        .then( data => {
            debugger;
            if("jwt" in data){
                debugger;
                localStorage.setItem("token",data.jwt);
                dispatch(setUser(data.user.username));
                dispatch(setFetchng(false));
            }
        })
    }
}

export default userReducer;