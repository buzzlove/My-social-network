import React from 'react';
import classes from "../dialogs.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {

let UserData = props.User.map(dialog =><p><NavLink to={"/Сообщения/" + dialog.id}>{dialog.name}</NavLink></p> );
    return (
        <div className={classes.users}>
            {UserData}
        </div>
    )
}

export default Users;