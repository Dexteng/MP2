import React, {useContext} from 'react'
import {ProductContext} from '../../Context/Product-Context.jsx'
import './WishItem.css'

    export const WishItem = (props) => {
    const{id, name, image} = props.data;
    const { addToCart, addToWishList ,cartAmount} = useContext(ProductContext)
    return ( 
        <div className='cartItem'>
            <img src={image} />
            <div className='description'>
                <p>{name}</p>
            </div>
            <div className='btns'>
                <button className='add-to-cart' onClick={()=> addToCart(id)}>Add to Cart{cartAmount > 0 &&<>({cartAmount})</>}
                </button>
                <button className="removeWishlist" onClick={()=>addToWishList(id)}>Remove
                </button>
            </div>
        </div>
    )
}