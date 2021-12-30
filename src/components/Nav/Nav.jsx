import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className='nav'>
            <ul className="nav__menu">
                <li className='hover-link'><NavLink to='/home'>Home</NavLink></li>
                <li className='hover-link'><NavLink to='/profile'>Profile</NavLink></li>
                <li className='hover-link'><NavLink to='/chat'>Chat</NavLink></li>
            </ul>
        </div>
    )
}
export default Nav;