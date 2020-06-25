import {AddPostFunc} from "../../../../Redux/profileReducer";
import MyPosts from "./myposts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {return {ProfilePage: state.ProfilePage}};
export default connect(mapStateToProps, {AddPostFunc})(MyPosts);
