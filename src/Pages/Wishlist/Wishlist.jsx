import React, {useContext} from 'react'
import { PRODUCTS } from '../../assets/ProductPage/Products'
import { ProductContext } from "../../Context/Product-Context";
import { WishItem } from './Wish-Item';


export const Wishlist = () => {
  const {wishItems} = useContext(ProductContext)
  return (
    <div className='wish-list-header'>   
      <div>
        <h1>Favorites</h1>
      </div>
      <div className='wishItems'>
        {PRODUCTS.map((product) => {
          if (wishItems[product.id] !== false ){
            return <WishItem data={product} />;
          }
        })}
        
        
      </div>
    </div>
  )
}