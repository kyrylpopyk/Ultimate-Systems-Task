import { boardApi } from "../../api/boardApi";

const SET_LISTS = "board/SET_LISTS";
const SET_IS_FETCHING = "board/SET_IS_FETCHING";
const SET_IS_OPEN_LIST = "board/SET_IS_OPEN_LIST";
const SET_OPEN_LIST = "board/SET_OPEN_LIST";
const UPDATE_LIST_BY_ID = "board/UPDATE_LIST_BY_ID";
const SET_CHANGE_TASK_ID = "board/SET_CHANGE_TASK_ID";
const SET_NEW_TASK_SORAGE = "board/SET_NEW_TASK_SORAGE";
const SET_NEW_LIST = "board/SET_NEW_LIST";
const SET_CHANGE_LIST_ID = "board/SET_CHANGE_LIST_ID";
const REMOVE_LIST = "board/REMOVE_LIST";
const SET_SORT_BY = "board/SET_SORT_BY";
const RESET_BOARD_REDUCER = "board/RESET_BOARD_REDUCER";

const initialState = {
    actualSort: "",
    changeTaskId: "",
    changeListId: "",
    sortBy: "created_at",
    isFetching: false,
    isOpenList: false,
    openList: {},
    toDoLists: {},
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
        case RESET_BOARD_REDUCER:
            return initialState;
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
export const resetBoardReducer = () => ({type: RESET_BOARD_REDUCER});

//Middleware thunks
export const getLists = (sortBy) => {
    return async (dispatch) => { workWithLists(dispatch, boardApi.getLists, {sortBy}, setLists) }
}

export const updateList = (id, changedList) => {
    return async (dispatch) => { workWithLists(dispatch, boardApi.updateList, {id, changedList}, uppdateListById) }
}

export const createNewList = (listData) => {
    return async (dispatch) => { workWithLists(dispatch, boardApi.createNewList, {listData}, setNewList) }
}

export const removeList = (listId) => {
    return async (dispatch) => { workWithLists(dispatch, boardApi.removeList, {listId}, removeListById) }
}

//Helpers
const workWithLists = async (dispatch, apiFunc, apiFuncParams, actionFunc) => {
    dispatch(setFetchng(true));
    let responceData = await apiFunc({...apiFuncParams});
    dispatch(actionFunc(responceData));
    dispatch(setFetchng(false));
}