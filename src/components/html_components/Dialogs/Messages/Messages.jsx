import React from "react";
import classes from "../dialogs.module.css";
import {Redirect} from "react-router-dom";
import ReduxMessagesForm from "../MessagesForm/MessagesForm";

const Messages = (props) => {

    let NewMessagesData = props.DialogsPage.MessagesOld.map(message => <p>{message.message}</p>);
    const onSubmit = (formData) => {
        props.addMassage(formData.AddMessage)

    }

    if (props.isAuth === false) return <Redirect to={'/Авторизация'}/>
    return (
        <div className={classes.messages}>
            <ReduxMessagesForm onSubmit={onSubmit}/>
            <div className={classes.userList}>
                {NewMessagesData}
            </div>
        </div>
    )
};

export default Messages;