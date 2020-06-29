import React from "react";
import style from './Auth.module.css'
import ReduxLoginForm from "./Login/LoginForm";
import {Redirect} from "react-router-dom";

const Auth = (props) => {
    const onSubmit = (formData) => {
        props.setLogin(formData.login, formData.pass, formData.rememberMe)
    }

    return (
        <div className={style.main}>
            <h4>Авторизация</h4>
            <div>
                {!props.isAuth ?
                    <ReduxLoginForm onSubmit={onSubmit}/>
                    : <Redirect to='/Профиль'/>
                }
            </div>
        </div>
    )
}

export default Auth;