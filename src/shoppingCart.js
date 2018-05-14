import React from "react";
import { connect } from "react-redux";
import CommingSoon from "./comingSoon";
import { Link } from "react-router-dom";
import { addProductToCart, removeProductFromCart } from "./actions";

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.renderAddProductToCart = this.renderAddProductToCart.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.checkingForDuplicates = this.checkingForDuplicates.bind(this);
    }

    handleRemoveItem(sku) {
        this.props.dispatch(removeProductFromCart(sku));
    }

    checkingForDuplicates() {}

    renderAddProductToCart() {
        if (!this.props.cartItems) {
            return null;
        } else {
            return this.props.cartItems.map((item, i) => {
                return (
                    item && (
                        <div className="shopping-cart-container" key={i}>
                            <div className="shopping-cart-item-container">
                                <div className="image-container-cart">
                                    <img
                                        className="shopping-cart-image"
                                        src={item.product_image_name}
                                        alt=""
                                    />
                                </div>
                                <div className="name-container-cart">
                                    <h3 id="name-cart-single">
                                        {item.product_name}
                                    </h3>
                                </div>

                                <span id="single-cart-price">
                                    € {item.price}
                                </span>
                                <span id="single-cart-qty">
                                    Qty: {item.quantity}
                                </span>
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
            total += parseInt(item.price * item.quantity);
        });

        return (
            <div className="renderer-container-shopping-cart">
                <div>{this.renderAddProductToCart()}</div>
                <div className="total-shopping-cart-container">
                    <h2 className="header-title-shopping-cart">Total</h2>

                    <div className="sub-total">
                        <div className="middle-text-payment">Sub-total </div>
                        <div className="right-side-text-payment">€ {total}</div>
                    </div>
                    <div className="sub-total">
                        <div className="middle-text-payment">Delivery</div>
                        <div className="right-side-text-payment">free</div>
                    </div>
                    <div className="final-total">
                        <div className="middle-text-payment total">Total</div>{" "}
                        <div className="right-side-text-payment total-amount">
                            {" "}
                            € {total}
                        </div>
                    </div>
                    <div />
                    <div className="container-button">
                        <Link to="/checkout">
                            <button className="checkout-button">
                                Go to Checkout
                            </button>
                        </Link>
                    </div>
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
