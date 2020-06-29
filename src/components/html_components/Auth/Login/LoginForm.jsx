import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../../Common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../Utilits/Validators/validators";
import style from "./../../Common/FormsControl/FormsControl.module.css";

const maxLengthCreator20 = maxLengthCreator(20);
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField('Введите логин', Input, 'login', 'email', [required, maxLengthCreator20])}
            {CreateField('Введите пароль', Input, 'pass', 'password', [required, maxLengthCreator20])}
            {CreateField('', Input, 'check', 'checkbox')}Запомнить
            <div>
                <button>Войти</button>
            </div>
            {error && <div className={style.validationError}>{error}</div>}
        </form>
    )
};
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);
export default ReduxLoginForm;