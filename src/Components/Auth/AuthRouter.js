import React from "react";
import { Switch, Route, Redirect } from "react-router";
import LoginContainer from "./Login/LoginContainer";
let RegisterContainer = React.lazy( () => import("./Register/RegisterContainer"));

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
            <React.Suspense fallback={<div>Loading...</div>}>
                <RegisterContainer />
            </React.Suspense>
        </Route>
    </Switch>
    );
}

export default AuthRouter;