import classes from './Profile.module.scss'
import ava from '../../../images/ava.png'

const Profile = props => {
    return (
        <div className={classes.profile}>
            <div>
                <img src={ava} alt={props.userName}  className={classes.profile__image} />
            </div>
            <div>
                <span className={classes.profile__name}>{props.userName}</span>
                <br />
                <span className={classes.profile__status}>{props.status}</span>
            </div>
        </div>
    )
}
export default Profile;