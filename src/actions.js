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
    return axios.get("/product/" + sku).then(resp => {
        console.log("resp in modal", resp);
        return {
            type: "PRODUCT",
            product: resp.data.product
        };
    });
}
