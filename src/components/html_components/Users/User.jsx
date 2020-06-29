import React from "react";
import userPhoto from "./img/user.png";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../Common/Preloader/preloader";

const User = ({isFetching, inProgress, follow, currentPage, pageSize, users}) => {
    return (
        <div>
            {isFetching ? <Preloader/>
                :
                <div>
                    <div>{users.name}</div>
                    <div className={style.photo}>
                        <NavLink to={'/Профиль/' + users.id}>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto} alt='Лого'/>
                        </NavLink>
                    </div>

                    <div>
                        <button disabled={inProgress.some(id => id === users.id)}
                                onClick={() => {
                                    follow(users.id, users.followed, currentPage, pageSize)
                                }}>
                            {(users.followed) ? 'Отписаться' : 'Подписаться'}
                        </button>
                    </div>

                    <div>{users.status}</div>

                </div>}
        </div>
                )}

                export default User;