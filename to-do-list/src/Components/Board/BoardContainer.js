import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNoAuthRedirect } from "../../hoc/withNoAuthRedirect";
import Board from "./Board";
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
        toDoLists: state.board.toDoLists,
        isOpenList: state.board.isOpenList,
        changeListId: state.board.changeListId,
        sortBy: state.board.sortBy
    }
}

export default compose(
    withNoAuthRedirect,
    connect(mapStateToProps, {getLists, setIsOpenList, setOpenList, 
        createNewList, setChangeListId, updateList, removeList, setsortBy})
)(BoardComponent);