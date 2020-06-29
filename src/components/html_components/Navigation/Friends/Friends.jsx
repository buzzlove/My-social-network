import React from "react";
import style from './../nav.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let FriendsData =
        props.NavPage.Friends && props.NavPage.Friends.map(
            usersName => <NavLink to={`/Профиль/${usersName.id}`} key={usersName.name} >
                {usersName.name}</NavLink>);
    return (
        <div className ={style.Friends}>
            <h4>Друзья</h4>
            {FriendsData}
        </div>
    )
}

export default Friends;