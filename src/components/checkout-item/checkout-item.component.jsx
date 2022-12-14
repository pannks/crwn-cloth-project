import "./checkout-item.styles.scss";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);

    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () =>
        dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () =>
        dispatch(removeItemFromCart(cartItems, cartItem));
    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>
                    &#10092;
                </div>
                {quantity}
                <div className="arrow" onClick={addItemHandler}>
                    &#10093;
                </div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={clearItemHandler}>
                &#10005;
            </span>
        </div>
    );
};

export default CheckoutItem;
