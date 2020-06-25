import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})
export const WithAuthRedirect = WrapperComponent => {
    class RedirectComp extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/Авторизация'/>
            return <WrapperComponent {...this.props}/>
        }
    }




    return connect(mapStateToPropsForRedirect)(RedirectComp);
}
