import React, {useState} from 'react'
import './Products.css'
import prodHero from '../../assets/ProductPage/prodHero.jpg'
import Footer from '../../Components/Footer.jsx';
import { Items } from './Items.jsx';
import FilteredProduct from './FilteredProduct.jsx';
import { PRODUCTS } from '../../assets/ProductPage/Products.js';

export const Products = () => {
    const [Search, setSearch] = useState("");
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
        <div className="search-container">
        <div className="input-container">
          <input id="searchInput" type="text" placeholder="Search Keyboard..." onChange={(e) => {
            setSearch(e.target.value);
          }} />
        </div>
        </div>
     
        <div className='items-container'>
        {PRODUCTS
        .filter((item) => {
        if (Search == ""){
        return item;
        } else if (item.name.toLowerCase().includes(Search.toLocaleLowerCase())||
        item.category.toLowerCase().includes(Search.toLocaleLowerCase())){
            return item; 
        }
    })
        .map((product) => (
        <Items data={product} />
    ))}
        </div>
        <Footer/>
    </div>

  
  );
}
