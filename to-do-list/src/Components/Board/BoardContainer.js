import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withNoAuthRedirect } from "../../hoc/withNoAuthRedirect";
import Board from "./Board";
import { getLists, setOpenList, setIsOpenList } from "../../redux/reducers/boardReducer.js";

class BoardComponent extends React.Component{

    componentDidMount(){
        this.props.getLists();
    }

    render(){
        let {toDoLists, isOpenList, setIsOpenList, setOpenList} = this.props;
        return(
            <Board 
            toDoLists={toDoLists} isOpenList={isOpenList} setIsOpenList={setIsOpenList}
            setOpenList={setOpenList}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toDoLists: state.board.toDoLists,
        isOpenList: state.board.isOpenList,
    }
}

export default compose(
    withNoAuthRedirect,
    connect(mapStateToProps, {getLists, setIsOpenList, setOpenList})
)(BoardComponent);