import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        User: state.DialogsPage.User,
        isAuth: state.auth.isAuth
    }
};

export default connect (mapStateToProps)(Users);