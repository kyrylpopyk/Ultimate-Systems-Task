import AuthForm from "../../Library/AuthForm.style.js";
import style from "./Login.module.css";
import {NavLink} from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return(
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} type="text" name={"userName"} placeholder="Email or Username"></Field>
            </div>
            <div>
                <Field component={"input"} type="text" name={"password"} placeholder="Password"></Field>
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

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    let onSubmit = (formData) => {
        console.log(formData);
    }

    return(
        <AuthForm
            backgroundColor = "#2D2D2D"
            columns="100%"
            rows="3fr 8fr">

            <div className={style.loginTitle}>Login</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </AuthForm>
    );
}

export default Login;