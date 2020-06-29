import {connect} from "react-redux";
import Auth from "./Auth";
import {setLogin} from "../../../Redux/authReducer";

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.Profile,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps, {setLogin})(Auth);