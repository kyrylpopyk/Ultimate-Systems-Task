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