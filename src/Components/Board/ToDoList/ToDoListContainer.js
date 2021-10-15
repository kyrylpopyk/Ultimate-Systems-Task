import { connect } from "react-redux";
import { compose } from "redux";
import ToDoList from "./ToDoList";
import { updateList, setIsOpenList, setOpenList, setChangeTaskId, setNewTaskStorage } from "../../../redux/reducers/boardReducer.js";
import React from "react";

class ToDoListComponent extends React.Component{
    render(){

        return(
            <ToDoList {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpenList: state.board.isOpenList,
        openList: state.board.openList,
        changeTaskId: state.board.changeTaskId,
        newTaskStorage: state.board.newTaskStorage
    }
}

export default compose(
    connect(mapStateToProps, {setIsOpenList, updateList, setOpenList, setChangeTaskId, setNewTaskStorage})
)(ToDoListComponent)