import React from "react";
import userPhoto from "../../../Users/img/user.png";

class ProfileStatus extends React.Component {
    state = {editMode: false, status: this.props.status}
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (text) => {
        this.setState({
            status: text.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status!== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
    return (
        <>
            <div>
                <img src={this.props.profile.photos.large != null ?
                          this.props.profile.photos.large : userPhoto} alt='logo'/>
            </div>
            <div>
                Имя: {this.props.profile.fullName}
            </div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode}> Статус: {
                        this.props.status || 'нет статуса' } </span>
                </div>
                :
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                           onBlur={this.deactivateEditMode}/>
                </div>}
        </>
    )
}


}

export default ProfileStatus;