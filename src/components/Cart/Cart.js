import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='cart-info'>
            <h3>Meal Cart</h3>
            <p>Item Name: {cart}</p>
        </div>
    );
};

export default Cart;