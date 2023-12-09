import React, {useContext} from 'react'
import { PRODUCTS } from '../../assets/ProductPage/Products'
import { ProductContext } from "../../Context/Product-Context";
import { useNavigate } from 'react-router-dom';
import { TbMoodEmpty } from "react-icons/tb";
import { SeeMoreItems } from './SeeMoreItems';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';



export const SeeMore = () => {
  const {seeItems, getTotalProductAmount} = useContext(ProductContext)
  const totalProduct = getTotalProductAmount()
  const navigate = useNavigate()
  return (
    <div className='seemore'>   
    <div className='seeItems'>
        {PRODUCTS.map((product) => {
        if (seeItems[product.id] !== false ){
            return <SeeMoreItems data={product} />;
        }
        })}
        {totalProduct > 0 ?
        <div className='checkout'>
            <p hidden>Subtotal: ${totalProduct}</p>
        </div>
        :
        <div className='empty'>
            <p>No Product Selected{<TbMoodEmpty/>}</p>
           <Link to='/products'><button className=''>Go back to Product Page</button></Link>
        </div>
        }
    </div>
</div>
  )
}
