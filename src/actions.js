import axios from "./axios";
import Client from "shopify-buy";

const client = Client.buildClient({
    domain: ".myshopify.com",
    storefrontAccessToken: "123"
});

export function getCheckout() {
    return client.checkout.create().then(getCheckout => {
        console.log("checkout in action", getCheckout.id);
        return {
            type: "GET_CHECKOUT",
            getCheckout
        };
    });
}

export function productList() {
    return client.product.fetchAll().then(productList => {
        console.log("prducts from shopify", productList);
        return {
            type: "PRODUCT_LIST",
            productList
        };
    });
}

export function product(id) {
    return client.product.fetchAll().then(() => {
        console.log(id, "product.id");
        return {
            type: "PRODUCT",
            product: id
        };
    });
}

export function addProductToCart(variantId, quantity, checkoutId) {
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    console.log("lineItemsToAdd", lineItemsToAdd, checkoutId);
    return client.checkout
        .addLineItems(checkoutId, lineItemsToAdd)
        .then(checkout => {
            console.log("add items checkout", checkout);
            return {
                type: "ADD_PRODUCT_TO_CART",
                checkout
            };
        });
}

export function checkout(checkoutId) {
    return client.checkout.fetch(checkoutId).then(cart => {
        console.log("checcheckoutId", checkoutId, "and", cart);
        return {
            type: "CHECKOUT",
            cart
        };
    });
}

// export function removeProductFromCart(lineitemId) {
//     return {
//         type: "REMOVE_ITEM_FROM_CART",
//         lineitemId
//     };
// }

/////

// addVariantToCart(variantId, quantity){
//   this.setState({
//     isCartOpen: true,
//   });
//
//   const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
//   const checkoutId = this.state.checkout.id
//
//   return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
//     this.setState({
//       checkout: res,
//     });
//   });
// }
//
// updateQuantityInCart(lineItemId, quantity) {
//   const checkoutId = this.state.checkout.id
//   const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
//
//   return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
//     this.setState({
//       checkout: res,
//     });
//   });
// }
//
// removeLineItemInCart(lineItemId) {
//   const checkoutId = this.state.checkout.id
//
//   return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
//     this.setState({
//       checkout: res,
//     });
//   });
// }
//
// handleCartClose() {
//   this.setState({
//     isCartOpen: false,
//   });
// }

// export function addProductToCart(product, quantity) {
//     console.log("quantity", quantity);
//     return {
//         type: "ADD_PRODUCT_TO_CART",
//         product,
//         quantity
//     };
// }

// export function productList() {
//     return axios.get("/product-list").then(resp => {
//         return {
//             type: "PRODUCT_LIST",
//             productList: resp.data.productList
//         };
//     });
// }

// export function product(sku) {
//     return axios.get(`/product/` + sku.sku).then(resp => {
//         return {
//             type: "PRODUCT",
//             product: resp.data.product
//         };
//     });
// }
//
// export function addProductToCart(product, quantity) {
//     console.log("quantity", quantity);
//     return {
//         type: "ADD_PRODUCT_TO_CART",
//         product,
//         quantity
//     };
// }
//
// export function removeProductFromCart(sku) {
//     console.log("cart item in remove");
//     return {
//         type: "REMOVE_ITEM_FROM_CART",
//         sku
//     };
// }
