import style from "../Login.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginForm = React.memo((props) => {
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
})

export default LoginForm;