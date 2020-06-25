import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {disLogin, getLogin, setUserData} from "../../../Redux/authReducer";

const HeaderContainer =(props) => {

    return <Header {...props}/>
}


let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{setUserData,getLogin,disLogin})(HeaderContainer);