import React from 'react';
import classes from './../nav.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className= {classes.Menu}>
        <div>
                <NavLink to="/Профиль">Профиль</NavLink>
                <NavLink to="/Сообщения">Сообщения</NavLink>
                <NavLink to="/Новости">Новости</NavLink>
                <NavLink to="/Музыка">Музыка</NavLink>
                <NavLink to="/Настройки">Настройки</NavLink>
        </div>
            <div>
                <h4>Друзья</h4>
            </div>
        
        </div>
    )
}

export default Menu;