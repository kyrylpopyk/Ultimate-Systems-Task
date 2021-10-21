import { userApi } from "../../api/userApi.js";

const SET_USER = "auth/SET_USER";
const SET_FETCHING = "auth/SET_FETCHING";
const SET_IS_AUTH = "auth/SET_IS_AUTH";
const RESET_USER_REDUCER = "auth/RESET_USER_REDUCER";

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
                isAuth: action.body && true
            }
        case SET_FETCHING:
            return{
                ...state,
                isFetching: action.body
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.body
            }
        case RESET_USER_REDUCER:
            return initialState;
        default:
            return state;
    }
}

//Actions
const setUser = (user) => ({type: SET_USER, body: user});
export const setFetchng = (fetching) => ({type: SET_FETCHING, body: fetching});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, body: isAuth});
export const resetUserReducer = () => ({type: RESET_USER_REDUCER});

//Middleware thunks
export const getUser = (identifier, password) => {
    return async (dispatch) => { workWithUser(dispatch, userApi.loginUser, {identifier, password}) }
}

export const createUser = (username, email, password) => {
    return async (dispatch) => { workWithUser(dispatch, userApi.registerUser, {username, email, password}) }
}

//Helpers
const workWithUser = async (dispatch, apiActionFunc, apiActionFuncProps = {}) => {
    dispatch(setFetchng(true));
    let responceData = await apiActionFunc({...apiActionFuncProps})

    if("jwt" in responceData){
        localStorage.setItem("token", responceData.jwt);
        dispatch(setUser(responceData.user.username));
    }
    dispatch(setFetchng(false));
}

export default userReducer;