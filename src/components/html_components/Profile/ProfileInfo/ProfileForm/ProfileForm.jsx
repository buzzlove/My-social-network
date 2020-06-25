import React from "react"
import {Field, reduxForm} from "redux-form"
import {required,maxLengthCreator} from "../../../Utilits/Validators/validators"
import {Textarea} from "../../../Common/FormsControl/FormsControl"


const maxLengthCreator10 = maxLengthCreator(10)

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLengthCreator10]} name='profileMessage' component={Textarea} placeholder='Введите текст'/>
            <button>Добавить пост</button>
        </form>
    )
}
export default reduxForm({form: 'profileMessage'})(ProfileForm)

