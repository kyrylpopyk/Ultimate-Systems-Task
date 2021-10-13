import { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "../../Library/AuthForm.style";
import style from "./Register.module.css";

const RegisterForm = (props) => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [repeatPassword, setRepeatPassword] = useState("");

    const submit = (username, email, password, repeatPassword) => {
        debugger;
        password === repeatPassword && props.createUser(username, email, password);
    }
    
    return(
        <div className={style.registerForm}>
            <div>
                <input onChange={(e) => {setUsername(e.target.value)}} value={username} type="text" name={"userName"} placeholder="Username"></input>
            </div>
            <div>
                <input onChange={(e) => {setEmail(e.target.value)}} value={email} type="text" name={"email"} placeholder="Email"></input>
            </div>
            <div>
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="text" name={"password"} placeholder="Password"></input>
            </div>
            <div>
                <input onChange={(e) => {setRepeatPassword(e.target.value)}} value={repeatPassword} type="text" name={"repeatPassword"} placeholder="Repeat Password"></input>
            </div>
            <div>
                <button onClick={() => {submit(username, email, password, repeatPassword)}} className={style.registerBtn}>Create</button>
            </div>
        </div>
    );
}

const Register = (props) => {

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
}

export default Register;