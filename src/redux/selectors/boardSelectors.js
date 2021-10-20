// import { createSelector } from "reselect"; //reselect library

const boardSelectors = {
    getToDoList(state){
        return state.board.toDoLists;
    },
    getIsOpenList(state){
        return state.board.isOpenList;
    },
    getChangeListId(state){
        return state.board.changeListId;
    },
    getSortBy(state){
        return state.board.sortBy;
    },
    getOpenList(state){
        return state.board.openList;
    },
    getChangeTaskId(state){
        return state.board.changeTaskId;
    },
    getNewTaskStorage(state){
        return state.board.newTaskStorage
    }
}

export default boardSelectors;



// const getUserSuperSelector = createSelector(getUsers, (users) => {
//     return users.filter( user => user.age > 10);
// })  // If you want to return copy of data from state with selector you need tou use reselect and createSelector. 
// Reselect return new object only if state was changed. else it return ref for the same object and do not rerender component.