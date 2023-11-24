import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../assets/ProductPage/Products';

export const ProductContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i < PRODUCTS.length +1; i++){
        cart[i] = 0;
    }
    return cart;
};
const getDefaultWish = () => {
    let wish = {}
    for (let i =1; i < PRODUCTS.length +1; i++){
        wish[i] = false;
    }
    return wish;
};


export const ProductContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const [wishItems , setWishItems] = useState(getDefaultWish());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1 }));
    };
    const addToCartMore = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +10 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }));
    };
    const removeFromCartMore = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -10 }));
    };

    const updateCartAmount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0 ) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

    const addToWishList = (itemId) => {
        setWishItems((prev) => ({...prev, [itemId]: !prev[itemId]}));
    };


    const contextValue = {cartItems, addToCart,addToCartMore, removeFromCart,removeFromCartMore, updateCartAmount, addToWishList, wishItems,getTotalCartAmount}


    

return (
<ProductContext.Provider value={contextValue}>{props.children}</ProductContext.Provider>
);
};
