import { connect } from "react-redux";
import Profile from "./Profile";

const mapStateToProps = state => {
    return {
        userName: state.profile.userName,
        status: state.profile.status,
        posts: state.profile.posts,
    }
};

export default connect(mapStateToProps, { })(Profile);