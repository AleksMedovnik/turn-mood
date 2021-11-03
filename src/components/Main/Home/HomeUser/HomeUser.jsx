import { NavLink } from 'react-router-dom';
import classes from '../Home.module.scss'
import ava from '../../../../images/ava.png'


const HomeUser = props => {
 
    return (
        <div className={classes.user}>
            <div>
                <NavLink to='/'><img src={ava} alt="" className={classes.user__image} /></NavLink>
            </div>
            <div>
                <NavLink to='/' className={classes.user__name}>{props.name}</NavLink>
                <br />
                <span className={classes.user__status}>{props.company}</span>
            </div>
            <div>
                <button type='button' className='btn'>
                    {props.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    )
}
export default HomeUser;