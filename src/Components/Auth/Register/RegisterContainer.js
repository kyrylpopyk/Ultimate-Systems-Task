import Register from "./Register"
import { createUser } from "../../../redux/reducers/userReducer"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"

const RegisterComponent = (props) => {
    return(
        <Register
        isFetching={props.isFetching} 
        isAuth={props.isAuth} 
        createUser={props.createUser}/>
    )
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.user.isAuth,
        isFetching: state.user.isFetching
    })
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {createUser})
)(RegisterComponent);
