import axios from "./axios";

export function productList() {
    return axios.get("/product-list").then(resp => {
        return {
            type: "PRODUCT_LIST",
            productList: resp.data.productList
        };
    });
}

export function product(sku) {
    return axios.get(`/product/` + sku.sku).then(resp => {
        return {
            type: "PRODUCT",
            product: resp.data.product
        };
    });
}

export function addProductToCart(product) {
    // let cart = localStorage.getItem("cart");
    // cart = cart && JSON.parse(cart);
    //
    // if (!cart) {
    //     cart = [product];
    // } else {
    //     cart.push(product);
    // }
    // localStorage.setItem("cart", JSON.stringify(cart));
    return {
        type: "ADD_PRODUCT_TO_CART",
        product
    };
}

export function removeProductFromCart(sku) {
    console.log("cart item in remove");
    return {
        type: "REMOVE_ITEM_FROM_CART",
        sku
    };
}
