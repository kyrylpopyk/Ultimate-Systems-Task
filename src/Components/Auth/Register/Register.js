import React from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../Library/AuthForm.style";
import style from "./Register.module.css";
import RegisterForm from "./Form/RegisterForm.js";

const Register = React.memo((props) => {

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
            <RegisterForm createUser={props.createUser}/>
        </AuthForm>
    )
})

export default Register;