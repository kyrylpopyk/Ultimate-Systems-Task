import React, { useState } from "react";
import style from "../Register.module.css";

const RegisterForm = React.memo((props) => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [repeatPassword, setRepeatPassword] = useState("");

    const submit = (username, email, password, repeatPassword) => {
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
                <input onChange={(e) => {setPassword(e.target.value)}} value={password} type="password" name={"password"} placeholder="Password"></input>
            </div>
            <div>
                <input onChange={(e) => {setRepeatPassword(e.target.value)}} value={repeatPassword} type="password" name={"repeatPassword"} placeholder="Repeat Password"></input>
            </div>
            <div>
                <button onClick={() => {submit(username, email, password, repeatPassword)}} className={style.registerBtn}>Create</button>
            </div>
        </div>
    );
})

export default RegisterForm;