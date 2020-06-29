import React, {useEffect, useState} from "react";
import userPhoto from "../../../Users/img/user.png";

const ProfileStatusHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status)}, [props.status]
    )

    const setTrueEditMode = () => {setEditMode(true);}
    const setFalseEditMode = () => {setEditMode(false);
        props.updateStatus(status)}
    const enteringText = (text) => {setStatus(text.currentTarget.value)}

    return (
        <div>
            <img src={props.profile.photos.large != null ?
                props.profile.photos.large : userPhoto} alt='logo'/>
            <div>
                Имя: {props.profile.fullName}
            </div>
            <div>
                {!editMode ?
                    <span onDoubleClick={setTrueEditMode}> Статус: {
                        props.status || 'нет статуса'} </span>
                    :
                    <input onChange={enteringText} autoFocus={true} value={status}
                           onBlur={setFalseEditMode}/>
                }
            </div>
        </div>
    )
}

export default ProfileStatusHook;