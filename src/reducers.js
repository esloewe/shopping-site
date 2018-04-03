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
        let cart = state.cart;

        if (!cart) {
            cart = [];
        }
        state = {
            ...state,
            cart: [...cart, action.product]
        };
    }

    localStorage.setItem("state", JSON.stringify(state));

    return state;
}
