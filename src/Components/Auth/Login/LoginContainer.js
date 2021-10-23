import { connect } from "react-redux";
import Login from "./Login";
import { getUser } from "../../../redux/reducers/userReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import userSelectors from "../../../redux/selectors/userSelectors";

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
        user: userSelectors.getUser(state),
        isAuth: userSelectors.getIsAuth(state),
        isFetching: userSelectors.getIsFetching(state)
    })
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUser})
)(LoginComponent);