import React from "react";
let initialState = JSON.parse(localStorage.getItem("state"));

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

        if (productCombined) {
            state = {
                ...state,
                cart: [...cart]
            };
        }
    }

    if (action.type == "REMOVE_ITEM_FROM_CART") {
        state = {
            ...state,
            cart: state.cart.filter(item => {
                return item.sku != action.sku;
            })
        };
    }

    localStorage.setItem("state", JSON.stringify(state));

    return state;
}
