import { NavLink } from 'react-router-dom';
import classes from '../Home.module.scss'
import ava from '../../../../images/ava.png'
import axios from 'axios';


const HomeUser = props => {

    const follow = (e, id, followed) => {
        e.target.disabled = true;
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
            body: JSON.stringify({
                id,
                userId: id,
                followed,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => JSON.parse(response.data.body))
            .then((user) => props.follow(user.id, user.followed))
            .then(() => e.target.disabled = false);
    }

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
                {
                    props.followed ?
                        <button type='button'
                            className='btn btn-send'
                            onClick={(e) => follow(e, props.id, false)}>Unfollow</button>
                        : <button type='button'
                            className='btn btn-send'
                            onClick={(e) => follow(e, props.id, true)}>Follow</button>
                }
            </div>
        </div>
    )
}
export default HomeUser;