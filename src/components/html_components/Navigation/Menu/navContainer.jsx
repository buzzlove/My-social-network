import NavBar from "../nav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        NavPage: state.NavbarPage
    }
}

export default connect (mapStateToProps)(NavBar);