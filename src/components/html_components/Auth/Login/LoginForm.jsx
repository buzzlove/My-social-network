import React from "react"
import {Field, reduxForm} from "redux-form"
import {Input} from "../../Common/FormsControl/FormsControl"
import {maxLengthCreator, required} from "../../Utilits/Validators/validators"
import style from "./../../Common/FormsControl/FormsControl.module.css"

const maxLengthCreator20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLengthCreator20]} placeholder={'Введите логин'} component={Input}
                       name={'login'}/>
            </div>
            <div>
                <Field validate={[required, maxLengthCreator20]} placeholder={'Введите пароль'} component={Input}
                       name={'pass'} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'check'} />Запомнить
            </div>
            <div>
                <button>Войти</button>
            </div>

            {props.error  && <div className={style.validationError}>{props.error}</div>}

        </form>
    )
}
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)
export default ReduxLoginForm