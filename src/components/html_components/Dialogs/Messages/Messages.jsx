import React from "react";
import classes from "../dialogs.module.css";
import {addEnterMessageTextActionCreator, addMassageActionCreator} from "../../../../Redux/dialogReducer";

const Messages = (props) => {

let NewMessagesData = props.MessagesOld.map (message => <p>{message.message}</p>);
let AddText = React.createRef();
let AddNewMessage = () => {props.AddNewMessage();}
let EnteringText = () => {
    let text = AddText.current.value;
    props.EnteringText(text);
}


return (
        <div className ={classes.messages}>
            <textarea id='textarea' placeholder='Введите сообщение' ref={AddText} value={props.MessageText} onChange={EnteringText}/>
            <div>
                <button onClick={AddNewMessage}>Добавить</button>
            </div>
            <div className={classes.userList}>
                {NewMessagesData}
            </div>
        </div>
    )
}

export default Messages;