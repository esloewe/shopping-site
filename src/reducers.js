import React from "react";

export default function reducer(state = {}, action) {
    if (action.type == "PRODUCT_LIST") {
        return {
            ...state,
            productList: action.productList
        };
    }

    if (action.type == "PRODUCT") {
        console.log("action in reducer product", action);
        return {
            ...state,
            product: action.product
        };

    return state;
}
