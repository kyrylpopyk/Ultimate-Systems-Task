import { Switch, Route, Redirect } from "react-router";
import LoginContainer from "./Login/LoginContainer";
import RegisterContainer from "./Register/RegisterContainer";

const AuthRouter = () => {
    return(
    <Switch>
        <Route exact path="/auth">
            <Redirect to="/auth/login" />
        </Route>
        <Route exact path="/auth/login">
            <LoginContainer />
        </Route>
        <Route exact path="/auth/register">
            <RegisterContainer />
        </Route>
    </Switch>
    );
}

export default AuthRouter;