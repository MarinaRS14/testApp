import React, { useState } from "react";
import style from "./../SignUp/SignUp.module.css";
import s from "./../MainPage/Main.module.css";
import {Link} from 'react-router-dom';

function LogIn() {

  let [login, setLogin] = useState("");
  let [pass, setPass] = useState("");

  let sendInformaion = (e) => {
    e.preventDefault();
    
    let data = {
      "login": login,
      "password": pass
    }

    let url = "https://typ-back-end.herokuapp.com/api/login"; 
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(res => alert(res.message)).catch(err => alert(err.message))
  }

  return (
    <div className={s.wrapper}>
        <div className={s.container}>

            <form className={style.container__form} onSubmit={sendInformaion}>
                <div className={style.field}>
                    <label className={style.label_field}>Login

                        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)}></input>

                    </label> 
                </div>
                
                
                <div className={style.field}>
                    <label  className={style.label_field}>Password
                        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
                    </label> 
                </div>
                
                

                <div className={style.btns}>
                    <Link to="/">
                      <button className={s.btn} style={{backgroundColor: "rgb(162, 162, 209)"}}>Back</button>
                    </Link>
                    <button className={s.btn} type="submit">Log in</button>
                </div>
            </form>


        </div>
        
    </div>
)
  }

  export default LogIn;