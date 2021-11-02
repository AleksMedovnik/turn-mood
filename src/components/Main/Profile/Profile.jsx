import classes from './Profile.module.scss'
import ava from '../../../images/ava.png'
import Post from './Post/Post';

const Profile = props => {

    const posts = props.posts.map(post => <Post post={post.post} />);
    return (
        <div>
            <div className={classes.profile}>
                <div>
                    <img src={ava} alt={props.userName} className={classes.profile__image} />
                </div>
                <div>
                    <span className={classes.profile__name}>{props.userName}</span>
                    <br />
                    <span className={classes.profile__status}>{props.status}</span>
                </div>
            </div>
            <div className={classes.profile__wall}>
                {posts}
            </div>
        </div>
    )
}
export default Profile;