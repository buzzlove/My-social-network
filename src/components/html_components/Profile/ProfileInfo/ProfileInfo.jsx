import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile) {return <Preloader/>}

    return (
        <div className = {style.info}>
         <ProfileStatus {...props}/>
        </div>
    )
};

export default ProfileInfo;