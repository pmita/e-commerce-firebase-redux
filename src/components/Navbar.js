import React, { useState } from 'react'
//ROUTING
import { NavLink, Link } from 'react-router-dom'
//ASSETS
import logoIcon from '../assets/images/logo.png'
import cartIcon from '../assets/icons/cart.svg'
import burgerIcon from '../assets/icons/burger.svg';

const Navbar = () => {
    //STATE & VARIABLES
    const [toggleNav, setToggleNav] = useState(false);

    //EVENT HANDLERS
    const handleToggle = () => {
        setToggleNav(!toggleNav);
    }
    return(
        <nav>
            <span className='navbar-burger'>
                <img 
                    src={burgerIcon} 
                    alt='navbar menu icon' 
                    onClick={handleToggle}    
                />
            </span>

            <div className='navbar-logo'>
                <img src={logoIcon} alt='candkeaf logo, in green and white' />
            </div>
            
            <ul className={toggleNav ? 'navbar-middle active' : 'navbar-middle'}>
                <li>
                    <NavLink to='/products'>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>

            <ul className='navbar-actions'>
                <li>
                    <Link to='/cart'>
                        <img src={cartIcon} alt='cart icon' />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;