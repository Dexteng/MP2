import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import {PRODUCTS} from '../../assets/ProductPage/Products.js'
import {ProductContext} from '../../Context/Product-Context.jsx';
import {WishItem} from './Wish-Item';
import './WishHero.css'
import carthero from '../../assets/CartPage/Hero.jpg'


    export const Wishlist = () => {
    const {wishItems, getTotalWishList} = useContext(ProductContext)
    const totalItems = getTotalWishList()
    const navigate = useNavigate()
    return (
        <div className='favorites'>
            <div className='carthero'>
                <img src={carthero} alt="" />
                <p className='heading'>FAVORITES</p>
            </div>
        <div className='wishItems'>
            {PRODUCTS.map((product) => {
            if (wishItems[product.id] !== false ){
                return <WishItem data={product} />;
            }
            })}
            </div>
            {totalItems > 0 ?
            <div className='checkout'>
            <p hidden>Subtotal: ${totalItems}</p>
            <button onClick={() => navigate("/products")}>Continue Shopping</button>
            </div>
            :
            <div className='empty'>
                    <p className=''>
                        Empty
                    </p>
                    <button onClick={() => navigate("/products")}>
                        Continue Shopping
                    </button>
                </div>}
        </div>
    )
}