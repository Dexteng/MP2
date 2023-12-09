import React, {useContext, useState} from 'react'
import {PRODUCTS} from '../../assets/ProductPage/Products.js';
import {ProductContext} from '../../Context/Product-Context.jsx';
import { CartItem } from "./Cart-Item";
import { Link, useNavigate } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/offcanvas';
import Checkout from './Checkout';
import './Offcanvas.css'
import './CartHero.css'
import carthero from '../../assets/CartPage/Hero.jpg'
import { MdOutlineClose } from "react-icons/md";
import './Modal.css'



    export const Cart = () => {
    const {cartItems, getTotalCartAmount, getTotalCheckoutPrice} = useContext(ProductContext)
    const totalAmount = getTotalCartAmount()
    const checkoutPrice = getTotalCheckoutPrice()
    const navigate = useNavigate()
    const [show,setShow] = useState(false);
    const handleShow = () => {setShow(true);}
    const handleClose = () => {setShow(false);}
    const [modal,setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div className='cart'>   
            <div className='carthero'>
                <img src={carthero} alt="" />
                <p className='heading'>CART</p>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0 ){
                    return <CartItem data={product} />;
                }
                })}
                {totalAmount > 0 ?
                
                <div className='checkout'>
                    <p hidden>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/products")}>Continue Shopping</button>
                    <button className='checkoutButton' onClick={handleShow}>Checkout</button>
                </div>
                :
                <div className='empty'>
                    <p className=''>
                        Your Cart is Empty :
                    </p>
                    <button onClick={() => navigate("/products")}>
                        Continue Shopping
                    </button>
                </div>}
            </div>
            
            <>
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <MdOutlineClose />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='heading'>
                        <p>Checkout</p>
                    </div>
                    
                    <div>
                    {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0 ){
                        return <Checkout data={product} />;
                    }
                    })}
                    </div>
                
                    <div className='totals'>
                        <p>Subtotal: ₱{totalAmount}</p>
                        <p>Shipping Fee: ₱13</p>
                        <p>GrandTotal: ₱{checkoutPrice}</p>
                        <button onClick={toggleModal}>Place order</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            </>
            
            {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <p className='heading'>Thank You for Your Purchase on Keebs <br /> Your New Keyboard is on its Way!</p>
                        <p className='subtext'>We are thrilled to inform you that your recent purchase on Keebs has been successfully processed! Your satisfaction is our top priority, and we can't wait for you to experience the exceptional features of your new keyboard. 
                        </p>
                        <Link to='/'>
                            <button className='close-modal'>
                                <MdOutlineClose />
                            </button>
                        </Link>
                    </div>
                </div>
            )}
    </div>
    )
}