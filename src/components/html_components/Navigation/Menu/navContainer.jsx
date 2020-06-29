import React from "react";
import NavBar from "../nav";
import {connect} from "react-redux";
import {requestFriendsAC, setProfileFriends} from "../../../../Redux/navbarReducer";
import {disLogin} from "../../../../Redux/authReducer";
class Navigation extends React.Component {
    componentDidMount() {
        this.props.requestFriendsAC()
    }

    render() {
        return <NavBar {...this.props}/>;
    }
}
let mapStateToProps = (state) => {
    return {
        NavPage: state.NavbarPage,
        id: state.NavbarPage.id

    }
}

export default connect (mapStateToProps,{disLogin,requestFriendsAC,setProfileFriends})(Navigation);