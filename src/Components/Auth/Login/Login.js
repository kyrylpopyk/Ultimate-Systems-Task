import AuthForm from "../../Library/AuthForm.style.js";
import style from "./Login.module.css";
import React from "react";
import LoginForm from "./Form/LoginForm.js";

const Login = React.memo((props) => {

    return(
        <AuthForm
            backgroundColor = "#2D2D2D"
            columns="100%"
            rows="3fr 8fr">

            <div className={style.loginTitle}>Login</div>
            <LoginForm getUser={props.getUser}/>
        </AuthForm>
    );
})

export default Login;