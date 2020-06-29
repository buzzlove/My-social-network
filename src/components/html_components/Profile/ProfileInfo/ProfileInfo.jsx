import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/preloader";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";

const ProfileInfo = (props) => {
    if(!props.profile) {return <Preloader/>}
    return (
        <div className = {style.info}>
         <ProfileStatusHook {...props}/>
        </div>
    )
};

export default ProfileInfo;