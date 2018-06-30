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
    if (action.type == "GET_CHECKOUT") {
        console.log("action.getCheckout", action.getCheckout);
        state = {
            ...state,
            getCheckout: action.getCheckout
        };
    }

    if (action.type == "PRODUCT") {
        state = {
            ...state,
            product: action.product
        };
    }

    if (action.type == "ADD_PRODUCT_TO_CART") {
        state = {
            ...state,
            checkout: state.getCheckout
        };
    }

    if (action.type == "REMOVE_ITEM_FROM_CART") {
        state = {
            ...state,
            cart: state.cart.filter(item => {
                return item.id != action.id;
            })
        };
    }

    // if (action.type == "CHECKOUT") {
    //     console.log("checkout final ", action.cart);
    //     state = {
    //         ...state,
    //         cart: action.cart
    //     };
    // }

    localStorage.setItem("state", JSON.stringify(state));

    return state;
}

//
// let productCombined = false;
// let cart = state.getCheckout;
// console.log("state.getCheckout", state.cart);
// if (!cart) {
//     cart = [];
// }
// for (var i = 0; i < cart.length; i++) {
//     if (action.product.id == cart[i].id) {
//         let newQuantity = parseInt(cart[i].quantity);
//         newQuantity += parseInt(action.quantity);
//         cart[i].quantity = newQuantity;
//         productCombined = true;
//     }
// }
//
// if (productCombined) {
//     state = {
//         ...state,
//         cart: [...cart]
//     };
// } else {
//     const newProduct = {
//         ...action.product,
//         quantity: action.quantity
//     };
//     state = {
//         ...state,
//         cart: [...cart, newProduct]
//     };
// }
