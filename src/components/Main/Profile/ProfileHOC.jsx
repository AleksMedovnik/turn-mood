import { connect } from "react-redux";
import Profile from "./Profile";
import { getPosts, addPost, updateNewPostText, deletePost } from '../../../store/reducers/profileReducer'

const mapStateToProps = state => {
    return {
        userName: state.profile.userName,
        status: state.profile.status,
        newPostText: state.profile.newPostText,
        posts: state.profile.posts,
    }
};

export default connect(mapStateToProps, { getPosts, addPost, updateNewPostText, deletePost })(Profile);