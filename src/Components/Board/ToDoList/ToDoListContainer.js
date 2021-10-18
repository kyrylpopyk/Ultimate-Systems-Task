import { connect } from "react-redux";
import { compose } from "redux";
import ToDoList from "./ToDoList";
import boardSelectors from "../../../redux/selectors/boardSelectors";
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
        isOpenList: boardSelectors.getIsOpenList(state),
        openList: boardSelectors.getOpenList(state),
        changeTaskId: boardSelectors.getChangeTaskId(state),
        newTaskStorage: boardSelectors.getNewTaskStorage(state)
    }
}

export default compose(
    connect(mapStateToProps, {setIsOpenList, updateList, setOpenList, setChangeTaskId, setNewTaskStorage})
)(ToDoListComponent)