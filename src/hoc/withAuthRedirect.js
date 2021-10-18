import { connect } from "react-redux"
import { Redirect } from "react-router"

const mapStateToProps = (state) => {
    return({
        isAuth: state.user.isAuth
    });
}

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if(props.isAuth) return <Redirect to="/board" />
        return <Component {...props} />
    }

    return connect(mapStateToProps)(RedirectComponent);
}