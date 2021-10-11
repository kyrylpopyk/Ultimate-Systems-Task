import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Header from "./Header";

class HeaderComponent extends React.Component{

    render(){
        return(
            <Header isLogged={this.props.isLogged}/>
        );
    }
}

const mapStateToProps = (state) => {
    debugger
    return{
        isLogged: state.user.isLogged
    }
}

export default compose(
    connect(mapStateToProps, {})
)(HeaderComponent);