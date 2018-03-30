import React from "react";

export default function reducer(state = {}, action) {
    if (action.type == "PRODUCT_LIST") {
        console.log("action in reducer", action);
        return {
            ...state,
            productList: action.productList
        };
    }

    return state;
}
