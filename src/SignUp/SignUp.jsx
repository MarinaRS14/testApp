import React from "react";
import style from "./SignUp.module.css";
import s from "./../MainPage/Main.module.css";
import {Link} from 'react-router-dom';
import { useState } from "react/cjs/react.development";

function SignUp() {
    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");
    //let [checked, setChecked] = useState(true)

    let sendRegistration = (e) => {
        e.preventDefault();

        let data = {
            "login": login,
            "password": password,
            "isAdmin": false
        }

        let urls = "https://typ-back-end.herokuapp.com/api/users/register";  
            fetch(urls, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then(response => response.json()).then(res => alert("Success")).catch(err => alert(err.errors.msg))
    }

    
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <form className={style.container__form} onSubmit={sendRegistration}>
                    <div className={style.field}>

                        <label className={style.label_field}>Login
                            <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}></input>
                        </label> 
                    </div>
                    {/* <div className={style.field}>
                        <label className={style.label_field}>Email
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.email)}></input>
                        </label>
                    </div> */}
                    
                    <div className={style.field}>
                        <label  className={style.label_field}>Password
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </label> 
                    </div>
                    
                    {/* <div className={style.field}>
                        <label  className={style.label_field}>I agree that I am not admin
                            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}></input>
                        </label>
                    </div> */}
                    

                    <div className={style.btns}>
                        <Link to="/"><button className={s.btn} style={{backgroundColor: "rgb(162, 162, 209)"}}>Back</button></Link>
                        <button className={s.btn} type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default SignUp;