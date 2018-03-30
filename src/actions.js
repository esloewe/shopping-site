import axios from "./axios";

export function productList() {
    return axios.get("/product-list").then(resp => {
        console.log("resp", resp);
        return {
            type: "PRODUCT_LIST",
            productList: resp.data.productList
        };
    });
}
