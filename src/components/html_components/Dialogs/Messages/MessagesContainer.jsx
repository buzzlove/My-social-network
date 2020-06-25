import {addMassage} from "../../../../Redux/dialogReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect (mapStateToProps, {addMassage}),
    WithAuthRedirect)(Messages);