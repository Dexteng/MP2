import React from 'react'
import { Link } from 'react-router-dom' 
import Logo from '../assets/LogoWhite.png'
import './Nav.css'
import { FiShoppingCart } from "react-icons/fi"
import { LuHeart } from "react-icons/lu";


function Nav() {
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

          <div className='cart-container'>
            <Link to='/cart'><FiShoppingCart className='icon' /> Cart</Link>
          </div>

          <div className='wishlist-container'>
            <Link to='/wishlist'><LuHeart className='icon'/> Wishlist</Link>
          </div>

          <div className='signup-container'>
            <Link to='/signup' >Sign up</Link>
            </div>
        </div>
      </div>
    </nav>


  )
}

export default Nav;