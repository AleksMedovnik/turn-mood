import classes from './Home.module.scss'
import HomeUser from './HomeUser/HomeUser';

const Home = props => {
    const users = props.users.map(user => {
        return (
            <HomeUser key={user.id}
                name={user.name}
                status={user.status}
                followed={user.followed} />
        )
    })
    return (
        <div className='item'>
            {users}
        </div>
    )
}
export default Home;