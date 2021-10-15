import { connect } from "react-redux";
import Login from "./Login";
import { getUser } from "../../../redux/reducers/userReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

const LoginComponent = (props) => {

    return(
        <Login
        isFetching={props.isFetching} 
        isAuth={props.isAuth} user={props.user}
        getUser={props.getUser}/>
    );
};

const mapStateToProps = (state) => {
    return ({
        user: state.user.user,
        isAuth: state.user.isAuth,
        isFetching: state.user.isFetching
    })
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUser}
))(LoginComponent);