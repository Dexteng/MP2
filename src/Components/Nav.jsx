import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import Logo from '../assets/LogoWhite.png'
import './Nav.css'
import Dropdown from 'react-bootstrap/Dropdown';




const Nav = (props) => {
    const cart_user = window.localStorage.getItem("user");

    const [user, setUser] = useState(JSON.parse(cart_user));
    

    const toggleLogout = (event) => {
        localStorage.removeItem("user");

    }



    return (
    <nav>
        <div className='logo-container'>
        <Link to='/'><img className='logo' src={Logo} alt="" /></Link>
        </div>
        <div>
            <div className='navigations'>
                <div className='home-container'>
                    <Link to='/'>Home</Link>
                </div>

                <div className='products-container'>
                    <Link to='/products'>Products</Link>
                </div>

                <div className='aboutus-container'>
                    <Link to='/aboutus'> About Us</Link>
                </div>
                <div className='aboutus-container'>
                    <Link to='/cart'> Cart</Link>
                </div>
                <div className='aboutus-container'>
                    <Link to='/wishlist'> Wishlist</Link>
                </div>
                <div className='aboutus-container'>
                    <Link to='/register'> Register</Link>
                </div>                
            </div>
        </div>
    </nav>


)
}

export default Nav