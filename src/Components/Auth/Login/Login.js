import AuthForm from "../../Library/AuthForm.style.js";
import style from "./Login.module.css";
import {NavLink} from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");
    return(
        <div className={style.loginForm}>
            <div>
                <input value={login} type="text" name={"userName"} placeholder="Email or Username" onChange={(e) => setLogin(e.target.value)}></input>
            </div>
            <div>
                <input value={password} component={"input"} type="password" name={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => props.getUser(login, password)} className={style.loginBtn}>Login</button>
            </div>
            <div>
                <span className={style.additional}>or</span>
            </div>
            <div>
                <NavLink to="/auth/register" className={style.loginCreate}>Create an account</NavLink>
            </div>
        </div>
    );
}

const Login = (props) => {

    return(
        <AuthForm
            backgroundColor = "#2D2D2D"
            columns="100%"
            rows="3fr 8fr">

            <div className={style.loginTitle}>Login</div>
            <LoginForm getUser={props.getUser}/>
        </AuthForm>
    );
}

export default Login;