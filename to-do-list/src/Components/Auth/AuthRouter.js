import { Switch, Route, Redirect } from "react-router";
import Register from './Register/Register';
import Login from './Login/Login';

const AuthRouter = () => {
    return(
    <Switch>
        <Route exact path="/auth">
            <Redirect to="/auth/login" />
        </Route>
        <Route exact path="/auth/login">
            <Login />
        </Route>
        <Route exact path="/auth/register">
            <Register />
        </Route>
    </Switch>
    );
}

export default AuthRouter;