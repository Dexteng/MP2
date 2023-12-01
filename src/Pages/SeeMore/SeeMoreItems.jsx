import React, {useContext} from 'react'
import { ProductContext } from "../../Context/Product-Context";
import { Link } from 'react-router-dom';

export const SeeMoreItems = (props) => {
    const{id,
        heroImg,
        heroText,
        description1,
        description1Img,
        description2,
        description2Img,
        description3,
        description3Img,
        name,
        image,
        price
      } = props.data;
    const { seeMore,addToCart, cartItems, addToWishList } = useContext(ProductContext)
    const cartAmount = cartItems[id]
  return ( 
    <div className='seemore-container'>
        <p>{heroImg}</p>
        <p>{heroText}</p>
        <img src={image} />
        <p>{name}</p>
        <p>{price}</p>
        <button className='add-to-cart btns' onClick={()=> addToCart(id)}>Add to Cart{cartAmount > 0 && <><p className='cart-amount'>{cartAmount}</p></>}</button>
        <button
            className="add-to-wish-list btns"
            onClick={() => addToWishList(id)}
          >Add to WishList
          </button>
        <div className='description'>
            <p>{description1}</p>
            <p>{description1Img}</p>
            <p>{description2}</p>
            <p>{description2Img}</p>
            <p>{description3}</p>
            <p>{description3Img}</p>
            <Link to= '/products'><button className="removeWishlist" onClick={()=>seeMore(id)}>Go Back</button></Link>
        </div>
    </div>
  )
}
