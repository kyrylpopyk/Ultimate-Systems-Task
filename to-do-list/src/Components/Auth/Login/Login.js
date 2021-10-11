import AuthForm from "../../Library/AuthForm.style.js";
import style from "./Login.module.css";
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    return(
        <form className={style.loginForm}>
            <div>
                <input type="text" placeholder="Email or Username"></input>
            </div>
            <div>
                <input type="text" placeholder="Password"></input>
            </div>
            <div>
                <button className={style.loginBtn}>Login</button>
            </div>
            <div>
                <span className={style.additional}>or</span>
            </div>
            <div>
                <NavLink to="/auth/register" className={style.loginCreate}>Create an account</NavLink>
            </div>
        </form>
    );
}

const Login = () => {
    return(
        <AuthForm
            backgroundColor = "#2D2D2D"
            columns="100%"
            rows="3fr 8fr">

            <div className={style.loginTitle}>Login</div>
            <LoginForm />
        </AuthForm>
    );
}

export default Login;