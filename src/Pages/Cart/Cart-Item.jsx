import React, {useContext} from 'react'
import { ProductContext } from "../../Context/Product-Context";

export const CartItem = (props) => {
    const{id, name, model, image} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartAmount} = useContext(ProductContext)
  return ( 
    <div className='cartItem'>
        <img src={image} />
        <div className='description'>
            <p>{name}</p>
            <p>{model}</p>
            <div className='itemAmount'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartAmount(Number(e.target.value), id) }/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
