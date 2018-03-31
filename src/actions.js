import axios from "./axios";

export function productList() {
    return axios.get("/product-list").then(resp => {
        return {
            type: "PRODUCT_LIST",
            productList: resp.data.productList
        };
    });
}

export function product() {
    return axios
        .get(`/product-list/${this.props.match.params.sku}`)
        .then(resp => {
            console.log("resp in modal ");
            return {
                type: "PRODUCT",
                product: resp.data.productInfo
            };
        });
}
