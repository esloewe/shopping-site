import React from "react";
import { connect } from "react-redux";
import { addProductToCart, removeProductFromCart } from "./actions";

class ShoppingCart extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.renderAddProductToCart = this.renderAddProductToCart.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    handleRemoveItem(sku) {
        this.props.dispatch(removeProductFromCart(sku));
    }

    // duplicatesInProductCart() {
    //     const nonDuplicateCart = [];
    //
    //     this.props.cart.forEach(function(singleItem) {
    //         if (nonDuplicateCart.indexOf(singleItem.sku) === -1)
    //             nonDuplicateCart.push(singleItem.sku);
    //     });
    // }

    renderAddProductToCart() {
        if (!this.props.cartItems) {
            return null;
        } else {
            return this.props.cartItems.map((item, i) => {
                return (
                    item && (
                        <div className="shopping-cart-container" key={i}>
                            <div className="shopping-cart-item-container">
                                <img
                                    className="shopping-cart-image"
                                    src={item.product_image_name}
                                />
                                <h3>{item.product_name}</h3>
                                <span> € {item.price}</span>
                                <input
                                    className="shopping-cart-quantity"
                                    placeholder="   1"
                                    type="number"
                                    name="quantity"
                                    min="1"
                                    max="20"
                                />
                                <button
                                    onClick={() =>
                                        this.handleRemoveItem(item.sku)
                                    }
                                    className="shopping-cart-button-remove"
                                >
                                    remove item
                                </button>
                            </div>
                        </div>
                    )
                );
            });
        }
    }

    render() {
        let total = 0;
        this.props.cartItems.forEach(item => {
            total = total += item.price - item.price.length + 5;
        });

        console.log("total", total, typeof total);

        return (
            <div className="renderer-container-shopping-cart">
                <div>{this.renderAddProductToCart()}</div>
                <div className="total-shopping-cart">
                    <h2 className="header-title-shopping-cart">
                        Shopping Cart
                    </h2>
                    <h4>Payment</h4>
                    <p>sub-total: {total}</p>
                    <p>delivery : FREE FOREVER</p>
                    <h3>total: {total} </h3>
                    <div />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state cart in shpiingcart ", state.cart);

    return {
        cartItems: state.cart
    };
}
export default connect(mapStateToProps)(ShoppingCart);
