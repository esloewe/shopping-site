import React from "react";
let initialState = JSON.parse(localStorage.getItem("state"));

console.log("initial state", initialState);

export default function reducer(state = initialState || {}, action) {
    if (action.type == "PRODUCT_LIST") {
        state = {
            ...state,
            productList: action.productList
        };
    }

    if (action.type == "PRODUCT") {
        state = {
            ...state,
            product: action.product
        };
    }

    if (action.type == "ADD_PRODUCT_TO_CART") {
        let productCombined = false;
        let cart = state.cart;
        if (!cart) {
            cart = [];
        }
        for (var i = 0; i < cart.length; i++) {
            if (action.product.sku == cart[i].sku) {
                let newQuantity = parseInt(cart[i].quantity);
                newQuantity += parseInt(action.quantity);
                cart[i].quantity = newQuantity;
                productCombined = true;
            }
        }
        console.log("checking the cart in reducer", cart, action.product);

        if (productCombined) {
            state = {
                ...state,
                cart: [...cart]
            };
        } else {
            const newProduct = {
                ...action.product,
                quantity: action.quantity
            };
            state = {
                ...state,
                cart: [...cart, newProduct]
            };
        }
    }

    if (action.type == "REMOVE_ITEM_FROM_CART") {
        console.log("remove from cart stuff", action.sku);
        state = {
            ...state,
            cart: state.cart.filter(item => {
                console.log("item in remove from cart", item);
                return item.sku != action.sku;
            })
        };
    }

    localStorage.setItem("state", JSON.stringify(state));

    return state;
}
