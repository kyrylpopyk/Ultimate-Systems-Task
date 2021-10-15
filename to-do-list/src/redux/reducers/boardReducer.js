import { boardApi } from "../../api/boardApi";

const SET_LISTS = "SET_LISTS";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_OPEN_LIST = "SET_IS_OPEN_LIST";
const SET_OPEN_LIST = "SET_OPEN_LIST";
const UPDATE_LIST_BY_ID = "UPDATE_LIST_BY_ID";
const SET_CHANGE_TASK_ID = "SET_CHANGE_TASK_ID";
const SET_NEW_TASK_SORAGE = "SET_NEW_TASK_SORAGE";
const SET_NEW_LIST = "SET_NEW_LIST";
const SET_CHANGE_LIST_ID = "SET_CHANGE_LIST_ID";
const REMOVE_LIST = "REMOVE_LIST";
const SET_SORT_BY = "SET_SORT_BY";

const initialState = {
    actualSort: "",
    toDoLists: {},
    isFetching: false,
    isOpenList: false,
    openList: {},
    changeTaskId: "",
    newTaskStorage: [],
    changeListId: "",
    sortBy: "created_at"
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
        case SET_NEW_LIST:
            return {
                ...state,
                toDoLists: state.toDoLists.concat([action.body])
            }
        case SET_CHANGE_LIST_ID:
            return {
                ...state,
                changeListId: action.body
            }
        case REMOVE_LIST:
            return {
                ...state,
                toDoLists: state.toDoLists.filter( list => list.id !== action.body)
            }
        case SET_SORT_BY:
            return{
                ...state,
                sortBy: action.body
            }
        default:
            return state;
    }
}

export default boardReducer;

//Actions
const setLists = (lists) => ({type:SET_LISTS, body: lists});
const setFetchng = (isFetching) => ({type:SET_IS_FETCHING, body: isFetching});
const uppdateListById = (newListData) => ({type: UPDATE_LIST_BY_ID, body: newListData});
const setNewList = (newList) => ({type: SET_NEW_LIST, body: newList});
const removeListById = (listId) => ({type: REMOVE_LIST, body: listId});
export const setChangeTaskId = (taskId) => ({type: SET_CHANGE_TASK_ID, body: taskId});
export const setNewTaskStorage = (newTaskData) => ({type: SET_NEW_TASK_SORAGE, body: newTaskData});
export const setIsOpenList = (isOpenList) => ({type:SET_IS_OPEN_LIST, body: isOpenList});
export const setOpenList = (openListData) => ({type: SET_OPEN_LIST, body: openListData});
export const setChangeListId = (listId) => ({type: SET_CHANGE_LIST_ID, body: listId});
export const setsortBy = (sortBy) => ({type: SET_SORT_BY, body: sortBy});

//Middleware thunks
export const getLists = (sortBy) => {
    return (dispatch) => {
        dispatch(setFetchng(true));
        boardApi.getLists(sortBy)
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

export const createNewList = (listData) => {
    return (dispatch) => {
        dispatch(setFetchng(true));
        boardApi.createNewList(listData)
        .then( data => {
            dispatch(setNewList(data));
            dispatch(setFetchng(false));
        })
    }
}

export const removeList = (listId) => {
    return (dispatch) => {
        dispatch(setFetchng(true));
        boardApi.removeList(listId)
        .then( data => {
            dispatch(removeListById(data.id));
            dispatch(setFetchng(false));
        })
    }
}