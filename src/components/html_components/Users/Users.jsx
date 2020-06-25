import React from "react";
import userPhoto from "./img/user.png";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

        return (
    <div>
            <div>
                {pages.map(page => {
                    return <button onClick={() => {props.onPageChange(page);}}
                                   className={props.currentPage === page && style.selectedPage}>
                        {page}</button>
                })}
               <span>...{pagesCount}</span>
            </div>
            {props.users.map(users =>
                <div key={users.id}>
                    <div>{users.name}</div>
                    <div className={style.photo}>
                    <NavLink to={'/Профиль/' + users.id}>
                        <img src={users.photos.small != null ? users.photos.small : userPhoto} alt='Лого'/>
                    </NavLink>
                    </div>
                    <div>
                        {users.followed
                            ? <button disabled={props.inProgress.some(id => id === users.id)}
                                      onClick={() => {props.unfollow(users.id)}}>Отписаться</button>

                            : <button disabled={props.inProgress.some(id => id === users.id)}
                                      onClick={() => {props.follow(users.id)}}>Подписаться</button>}
                    </div>
                    <div>{props.users.status}</div>
                </div>)}
        </div>
        )
    }

export default Users;