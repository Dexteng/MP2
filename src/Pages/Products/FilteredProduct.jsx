import React, { useEffect, useState, useContext } from "react";
import { PRODUCTS } from "../../assets/ProductPage/Products";
import { FiShoppingCart } from "react-icons/fi"
import { LuHeart } from "react-icons/lu";
import { ProductContext } from "../../Context/Product-Context";
import './Products.css'


export default function FilteredProduct(props) {
  const{id, name , category} = props.data;
  const {addToCart, addToWishList} = useContext(ProductContext)
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(PRODUCTS);

  let filters = ["Limited Edition", "Latest", "HIGH CP"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = PRODUCTS.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...PRODUCTS]);
    }
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
      {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <div className='items'>
            <div className='items-display'>
            <p>{item.category}</p>
            <img src={item.image} />
            <h4>{item.name}</h4>
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
          </div>
        ))}

      </div>
    </div>
  );
}
