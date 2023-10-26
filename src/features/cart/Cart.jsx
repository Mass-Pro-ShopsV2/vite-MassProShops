//Angel Single Product Merge
// import React, { useEffect, useState } from "react";
// import { useCart } from "react-use-cart";
// import Checkout from "./CheckoutTest";

// export const Cart = () => {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();

//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     getTotal();
//   }, [items]); // added this!!! Update the total when the items in the cart change

//   const totalPrice = (price, method) => {
//     if (method === "minus") {// added this!!!! Ensure the total does not go below zero
//       if (total <= 0) {
//         setTotal(0);
//       } else {
//         setTotal((prevTotal) => prevTotal - price);
//       }
//     } else {
//       setTotal((prevTotal) => prevTotal + price);
//     }
//   };

//   const getTotal = () => {
//     let res = 0;
//     if (items === undefined) {
//       return setTotal(0);
//     }
//     for (let i = 0; i < items.length; i++) {
//       res += items[i].price * items[i].quantity; // added this!!!!! Multiply price x quantity
//     }
//     setTotal(res);
//   };

//   const formatter = new Intl.NumberFormat("en-us", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//   });

//   if (isEmpty) return <p>Your cart is empty!</p>;

//   return (
//     <div className="cart">
//       <h1>Cart ({totalUniqueItems})</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.quantity} {item.name} {formatter.format(item.price)} &mdash;
//             <button
//               className="quantityButton"
//               onClick={() =>
//                 updateItemQuantity(item.id, item.quantity - 1, totalPrice(item.price, "minus"))
//               }
//             >
//               -
//             </button>
//             <button
//               className="quantityButton"
//               onClick={() =>
//                 updateItemQuantity(item.id, item.quantity + 1, totalPrice(item.price, "add"))
//               }
//             >
//               +
//             </button>
//             <button className="removeButton" onClick={() => removeItem(item.id)}>
//               Remove item
//             </button>
//           </li>
//         ))}
//         <li className="total">{formatter.format(total)}</li>
//         <Checkout name="Total items" amount={total} />
//         <button className="emptyButton" onClick={() => emptyCart()}>
//           Empty cart
//         </button>
//       </ul>
//     </div>
//   );
// };

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    addItem,
    decreaseCart,
    getCart,
    removeFromCart,
    clearCart,
    getTotals,
} from './cartSlice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PayButton from '../checkout/PayButton';

export const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(getCart);

    useEffect(() => {
        dispatch(getTotals());
    }, [cart]);
    const removeHandler = (item) => {
        dispatch(removeFromCart(item));
    };

    const decreaseItem = (item) => {
        dispatch(decreaseCart(item));
    };

    const increaseItem = (item) => {
        dispatch(addItem(item));
    };

    const clearCartHandler = () => {
        dispatch(clearCart());
    };

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="cart-container">
            <h1 id="cart-page-title">Shopping cart</h1>
            <div className="cartItems">
                {cart.cartItems && cart.cartItems.length ? (
                    cart.cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <div className="item-info">
                                <h3>Product: {item.name}</h3>
                                <img className="cart-image" src={item.image} />
                                <p>Price: {USDollar.format(item.price)}</p>
                                <p>
                                    Total:{' '}
                                    {USDollar.format(
                                        item.price * item.cartQuantity
                                    )}
                                </p>
                            </div>
                            <div className="item-buttons">
                                <Button
                                    variant="secondary"
                                    className="incButton"
                                    onClick={() => increaseItem(item)}>
                                    +
                                </Button>
                                <p>QTY: {item.cartQuantity}</p>
                                <Button
                                    variant="secondary"
                                    className="incButton"
                                    onClick={() => decreaseItem(item)}>
                                    -
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="incButton"
                                    onClick={() => removeHandler(item)}>
                                    remove
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="cart-empty">
                        <h3>Cart empty!</h3>
                        <Link to="/home">
                            <span>Start shopping!</span>
                        </Link>
                    </div>
                )}
            </div>
            <div className="cart-total-checkout">
                <div className="cart-total">
                    <span>
                        Subtotal: {USDollar.format(cart.cartTotalAmount)}
                    </span>
                    <Button
                        variant="primary"
                        onClick={() => clearCartHandler()}>
                        Clear cart
                    </Button>
                </div>
                <div className="cart-checkout">
                    <small>Taxes and shipping calculated at checkout.</small>
                    <PayButton cartItems={cart.cartItems}/>
                    <Link to ='/home'>Continue shopping.</Link>
                </div>
            </div>
        </div>
    );
};
