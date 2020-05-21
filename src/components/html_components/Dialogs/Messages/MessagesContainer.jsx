import React from "react";
import {addEnterMessageTextActionCreator, addMassageActionCreator} from "../../../../Redux/dialogReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
   let state = props.store.getState().DialogsPage;
let AddNewMessage = () => {props.store.dispatch(addMassageActionCreator());}
let EnteringText = (text) => {props.store.dispatch(addEnterMessageTextActionCreator(text));}


return (
        <div>
            <Messages MessagesOld={state.MessagesOld}
                      AddNewMessage={AddNewMessage}
                      EnteringText={EnteringText}
                      MessageText={state.MessageText}/>
        </div>
    )
}

export default MessagesContainer;