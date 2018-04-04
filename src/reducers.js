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

        let product = Object.assign({}, action.product, {
            quantity: action.quantity
        });
        state = {
            ...state,
            cart: [...cart, product]
        };
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
