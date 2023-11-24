import React, { useContext } from 'react'
import { ProductContext } from "../../Context/Product-Context";
import { FiShoppingCart } from "react-icons/fi"
import { LuHeart } from "react-icons/lu";
import './Styles.css'


export const Items = (props) => {

    const{id, name, category, image} = props.data;
    const {addToCart, cartItems, addToWishList, wishItems} = useContext(ProductContext)
    const cartAmount = cartItems[id]

  return  <div className='items'>
            <div className='items-display'>
            <p>{category}</p>
            <img src={image} />
            <h4>{name}</h4>
            </div>
            <div className='hidden-buttons'>
          <button className='viewmore btns'>View More</button>
          <button className='add-to-cart btns' onClick={()=> addToCart(id)}><FiShoppingCart /></button>
          <button
            className="add-to-wish-list btns"
            onClick={() => addToWishList(id)}
          >
            <LuHeart/>
          </button>
          </div>       
 </div>
  
}
