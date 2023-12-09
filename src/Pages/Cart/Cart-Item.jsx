import React, {useContext} from 'react'
import { ProductContext } from "../../Context/Product-Context";
import './CartHero.css'
import './CartItem.css'

export const CartItem = (props) => {
    const{name, price, image} = props.data;
  return ( 
    <div className='cartItem'>
            <img src={image} />
            <div className='description'>
                <p className='name'>{name}</p>
                <p className='price'>₱{price}</p>
            </div>
        </div>
  )
}
