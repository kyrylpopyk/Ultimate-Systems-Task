import React from "react";
//import { connect } from "react-redux";
//import { compose } from "redux";
import Login from "./Login";

class LoginComponent extends React.Component{

    render(){
        return(
            <Login />
        );
    }
};

// const mapStateToProps = (state) => {

// }

// export default compose(
//     //connect(mapStateToProps, {}),
//     reduxForm({form: "login"})
// )(LoginComponent);

export default LoginComponent;