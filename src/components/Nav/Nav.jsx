import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className='nav'>
            <ul className="nav__menu">
                <li className='hover-link'><NavLink to='/home' activeClassName="active">Home</NavLink></li>
                <li className='hover-link'><NavLink to='/profile' activeClassName="active">Profile</NavLink></li>
                <li className='hover-link'><NavLink to='/chat' activeClassName="active">Chat</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav;