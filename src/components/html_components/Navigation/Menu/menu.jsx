import React from 'react';
import style from './../nav.module.css';
import {NavLink} from "react-router-dom";
import './../../../../App.css'

const Menu = ({disLogin}) => {
    return (
        <div className={style.Menu}>
                <NavLink to="/Профиль"  activeClassName={style.activeLink}>Профиль</NavLink>
                <NavLink to="/Сообщения" activeClassName={style.activeLink}>Сообщения</NavLink>
                <NavLink to="/Новости" activeClassName={style.activeLink}>Новости</NavLink>
                <NavLink to="/Музыка" activeClassName={style.activeLink}>Музыка</NavLink>
                <NavLink to="/Пользователи" activeClassName={style.activeLink}>Пользователи</NavLink>
                <NavLink to="/Настройки" activeClassName={style.activeLink}>Настройки</NavLink>
                <NavLink to="/Авторизация" onClick={disLogin}>Выйти</NavLink>
        </div>
    )
}

export default Menu;