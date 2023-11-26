import React, {useContext} from 'react'
import { PRODUCTS } from '../../assets/ProductPage/Products'
import { ProductContext } from "../../Context/Product-Context";
import { useNavigate } from 'react-router-dom';
import { TbMoodEmpty } from "react-icons/tb";
import { SeeMoreItems } from './SeeMoreItems';
import Footer from '../../Components/Footer';



export const SeeMore = () => {
  const {seeItems, getTotalProductAmount} = useContext(ProductContext)
  const totalProduct = getTotalProductAmount()
  const navigate = useNavigate()
  return (
    <div className='seemore'>   
      <div>
        <h1>See More of the Product</h1>
      </div>
      <div className='seeItems'>
        {PRODUCTS.map((product) => {
          if (seeItems[product.id] !== false ){
            return <SeeMoreItems data={product} />;
          }
        })}
        {totalProduct > 0 ?
        <div className='checkout'>

          <p>Subtotal: ${totalProduct}</p>
          <button onClick={() => navigate("/products")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        :<div className=''>
          <h1 className=''>No Product Selected{<TbMoodEmpty/>}</h1>
          <button className=''>Go back to Product Page</button>
        </div>

        }
      </div>
      <Footer/>
    </div>
  )
}
