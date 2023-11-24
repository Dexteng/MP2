import React from 'react'
import { Items } from "./Items.jsx";
import {PRODUCTS} from '../../assets/ProductPage/Products.js'
import './Styles.css'
import prodHero from '../../assets/ProductPage/prodHero.jpg'

export const Products = () => {
  return ( 
    
    <div className='products'>
        <div className='prod-hero-container'>
        <img src={prodHero} alt="prod hero img" />
        <div className='text-container'>
            <p className='text1'>OUR PRODUCT</p>
            <p className='text2'>Mechanical Keyboard</p>
            <p className='text3'>Made to provide the ultimate typing experience</p>
        </div>
    </div>
     {/*SEARCH BAR*/}
     <div className='search-bar-container'>
        <div className='bar'>
            
        </div>
    </div>
    

    <div><p>all</p></div>

        <div className='items-container'>
            {PRODUCTS.map((product) => (
                <Items data={product} />
            ))}
        </div>
    </div>
  
  );
}
