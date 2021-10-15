import { boardApi } from "../../api/boardApi";

const SET_LISTS = "SET_LISTS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_OPEN_LIST = "SET_IS_OPEN_LIST";
const SET_OPEN_LIST = "SET_OPEN_LIST";
const UPDATE_LIST_BY_ID = "UPDATE_LIST_BY_ID";
const SET_CHANGE_TASK_ID = "SET_CHANGE_TASK_ID";
const SET_NEW_TASK_SORAGE = "SET_NEW_TASK_SORAGE";

const initialState = {
    actualSort: "",
    toDoLists: {},
    isFetching: false,
    isOpenList: false,
    openList: {},
    changeTaskId: "",
    newTaskStorage: []
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LISTS:
            return {
                ...state,
                toDoLists: action.body
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.body
            }
        case SET_IS_OPEN_LIST:
            return {
                ...state,
                isOpenList: action.body
            }
        case SET_OPEN_LIST:
            return{
                ...state,
                openList: action.body
            }
        case UPDATE_LIST_BY_ID:
            return{
                ...state,
                toDoLists: state.toDoLists.map( list => {
                    return list.id === action.body.id ? action.body: list;
                })
            }
        case SET_CHANGE_TASK_ID:
            return{
                ...state,
                changeTaskId: action.body
            }
        case SET_NEW_TASK_SORAGE:
            return {
                ...state,
                newTaskStorage: action.body
            }
        default:
            return state;
    }
}

export default boardReducer;

//Actions
const setLists = (lists) => ({type:SET_LISTS, body: lists});
const setFetchng = (isFetching) => ({type:SET_IS_FETCHING, body: isFetching});
export const setIsOpenList = (isOpenList) => ({type:SET_IS_OPEN_LIST, body: isOpenList});
export const setOpenList = (openListData) => ({type:SET_OPEN_LIST, body: openListData});
export const uppdateListById = (newListData) => ({type: UPDATE_LIST_BY_ID, body: newListData});
export const setChangeTaskId = (taskId) => ({type: SET_CHANGE_TASK_ID, body: taskId});
export const setNewTaskStorage = (newTaskData) => ({type: SET_NEW_TASK_SORAGE, body: newTaskData});

//Middleware thunks
export const getLists = () => {
    return (dispatch) => {
        dispatch(setFetchng(true));
        boardApi.getLists()
        .then( data => {
            dispatch(setLists(data));
            dispatch(setFetchng(false));
        })
    }
}

export const updateList = (id, changedList) => {
    return (dispatch) => {
        dispatch(setFetchng(true));
        boardApi.updateList(id, changedList)
        .then( data => {
            dispatch(uppdateListById(data));
            dispatch(setFetchng(false));
        })
    }
}