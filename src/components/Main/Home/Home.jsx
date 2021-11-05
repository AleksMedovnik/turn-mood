import classes from './Home.module.scss'
import axios from 'axios';
import HomeUser from './HomeUser/HomeUser';
import { useEffect } from 'react';

const Home = props => {

    useEffect(() => {
        if (props.users.length === 0) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    props.getUsers(response.data);
                })
        }
    }, [])

    const users = props.users.map(user => {
        return (
            <HomeUser key={user.id}
                id={user.id}
                name={user.username}
                company={user.company.name}
                followed={user.followed}
                follow={props.follow}/>
        )
    })

    return <div className='item'>{users}</div>
}
export default Home;