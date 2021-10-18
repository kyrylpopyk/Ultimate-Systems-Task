import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Header from "./Header";
import { setIsAuth, resetUserReducer } from "../../redux/reducers/userReducer";
import { resetBoardReducer } from "../../redux/reducers/boardReducer";

class HeaderComponent extends React.Component{

    render(){
        return(
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.user.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {setIsAuth, resetUserReducer, resetBoardReducer})
)(HeaderComponent);