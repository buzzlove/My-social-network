import React from "react";
import style from './../nav.module.css';

const Friends = (props) => {


    return (
        <div className ={style.Friends}>

                {props.name}

        </div>
    )
}

export default Friends;