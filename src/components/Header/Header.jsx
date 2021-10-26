import { NavLink } from 'react-router-dom';
import ava from '../../images/ava.png';
import logo from '../../images/logo.png';
import FormSearch from './FormSearch/FormSearch';

const Header = () => {

    return (
        <header className='header'>
            <div className='logo'>
                <NavLink to='/'>
                    <img className='header__img' src={logo} />
                </NavLink>
                <h1><NavLink to='/' className='logo__link'>Turn Mood</NavLink></h1>
            </div>

            <FormSearch />

            <NavLink to='/' className='shop'>shop</NavLink>

            <div className='header__profile bg-profile'>
                <span>Alex Honey</span>
                <img className='header__img' src={ava} />
            </div>
        </header>
    );
};

export default Header;