import React from "react";
import style from "./Main.module.css";
import {Link} from 'react-router-dom';

function Main() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
              <Link to="/signup"><button className={style.btn}>Sign Up</button></Link>
              <Link to="/login"><button className={style.btn}>Log in</button></Link>
            </div>
        </div>
    );
}

export default Main;