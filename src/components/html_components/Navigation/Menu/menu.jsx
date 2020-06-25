import React from 'react';
import style from './../nav.module.css';
import {NavLink} from "react-router-dom";
import './../../../../App.css'

const Menu = () => {
    return (
        <div className={style.Menu}>

                <NavLink to="/Профиль" activeStyle={{color: "blue"}}>Профиль</NavLink>
                <NavLink to="/Сообщения" activeStyle={{color: "blue"}}>Сообщения</NavLink>
                <NavLink to="/Новости" activeStyle={{color: "blue"}}>Новости</NavLink>
                <NavLink to="/Музыка" activeStyle={{color: "blue"}}>Музыка</NavLink>
                <NavLink to="/Пользователи" activeStyle={{color: "blue"}}>Пользователи</NavLink>
                <NavLink to="/Setup" activeStyle={{color: "blue"}}>Настройки</NavLink>

            <div>
                <h4>Друзья</h4>
            </div>
        
        </div>
    )
}

export default Menu;