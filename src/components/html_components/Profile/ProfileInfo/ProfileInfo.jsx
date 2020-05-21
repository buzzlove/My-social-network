import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className = {style.main}>
        <div>    <img src={require('./../../../../img/databg.jpg')}></img>
        </div>
        <div className = {style.info}>
            AVA+desription
        </div>
        </div>
    )
}

export default ProfileInfo;