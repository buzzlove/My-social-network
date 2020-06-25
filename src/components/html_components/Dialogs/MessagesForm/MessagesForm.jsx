import React from "react";
import {Field, reduxForm} from "redux-form";

import {maxLengthCreator, required} from "../../Utilits/Validators/validators";
import {Textarea} from "../../Common/FormsControl/FormsControl";

const MaxLength100 = maxLengthCreator(30)

const MessagesForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, MaxLength100]} name='AddMessage' placeholder='Введите сообщение' component={Textarea}/>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}

const ReduxMessagesForm = reduxForm({form: 'Messages'})(MessagesForm)
export default ReduxMessagesForm;