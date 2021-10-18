import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNoAuthRedirect } from "../../hoc/withNoAuthRedirect";
import Board from "./Board";
import boardSelectors from "../../redux/selectors/boardSelectors";
import { getLists, setOpenList, setIsOpenList, createNewList,
    setChangeListId, updateList, removeList, setsortBy } from "../../redux/reducers/boardReducer.js";

class BoardComponent extends React.Component{

    componentDidMount(){
        this.props.getLists(this.props.sortBy);
    }

    render(){
        return(
            <Board {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toDoLists: boardSelectors.getToDoList(state),
        isOpenList: boardSelectors.getIsOpenList(state),
        changeListId: boardSelectors.getChangeListId(state),
        sortBy: boardSelectors.getSortBy(state)
    }
}

export default compose(
    withNoAuthRedirect,
    connect(mapStateToProps, {getLists, setIsOpenList, setOpenList, 
        createNewList, setChangeListId, updateList, removeList, setsortBy})
)(BoardComponent);