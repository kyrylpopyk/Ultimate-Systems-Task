import { useHistory } from "react-router-dom";
import AuthForm from "../../Library/AuthForm.style";
import style from "./Register.module.css";

const RegisterForm = () => {
    return(
        <form className={style.registerForm}>
            <div>
                <input type="text" name={"userName"} placeholder="Username"></input>
            </div>
            <div>
                <input type="text" name={"email"} placeholder="Email"></input>
            </div>
            <div>
                <input type="text" name={"password"} placeholder="Password"></input>
            </div>
            <div>
                <input type="text" name={"repeatPassword"} placeholder="Repeat Password"></input>
            </div>
            <div>
                <button className={style.registerBtn}>Create</button>
            </div>
        </form>
    );
}

const Register = () => {

    const history = useHistory();

    const BackToLogin = () =>{
        history.push("/auth/login");
    }

    return(
        <AuthForm
            backgroundColor = "#2D2D2D"
            columns="100%"
            rows="1fr 2fr 8fr">
            
            <div className={style.backBtn}> 
                <img onClick={BackToLogin} alt="" className={style.backImage} src={process.env.PUBLIC_URL + "/LeftArrow.png"} />
            </div>

            <div className={style.registerTitle}>Create a new account</div>
            <RegisterForm />
        </AuthForm>
    )
}

export default Register;