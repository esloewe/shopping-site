import React from "react";
import { connect } from "react-redux";
import CommingSoon from "./comingSoon";
import { Link } from "react-router-dom";
import {
    addProductToCart,
    removeProductFromCart,
    checkout,
    getCheckout
} from "./actions";

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.renderAddProductToCart = this.renderAddProductToCart.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
    }

    componentDidMount() {
        let checkoutId = localStorage.getItem(
            "checkoutId",
            this.props.getCheckout
        );
        console.log("checkout id header", checkoutId);
        this.props.dispatch(checkout(checkoutId));
    }

    handleRemoveItem(lineitemId) {
        this.props.dispatch(removeProductFromCart(lineitemId));
    }

    renderAddProductToCart() {
        if (!this.props.cart) {
            return null;
        } else {
            return this.props.cart.map((item, i) => {
                return (
                    item && (
                        <div className="shopping-cart-container" key={i}>
                            <div className="shopping-cart-item-container">
                                <div className="image-container-cart">
                                    <img
                                        className="shopping-cart-image"
                                        src={item.variant.images.src}
                                        alt=""
                                    />
                                </div>
                                <div className="name-container-cart">
                                    <h3 id="name-cart-single">
                                        {item.lineitems[0].title}
                                    </h3>
                                </div>

                                <span id="single-cart-price">
                                    € {item.variant.price}
                                </span>
                                <span id="single-cart-qty">
                                    Qty: {item.lineitems[0].quantity}
                                </span>
                                <button
                                    onClick={() =>
                                        this.handleRemoveItem(item.variant.id)
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
        // let total = 0;
        // this.props.cartItems.forEach(item => {
        //     total += parseInt(item.variants[0].price * item.quantity);
        // });

        return (
            <div className="renderer-container-shopping-cart">
                <div>{this.renderAddProductToCart()}</div>
                <div className="total-shopping-cart-container">
                    <h2 className="header-title-shopping-cart">Total</h2>

                    <div className="sub-total">
                        <div className="middle-text-payment">Sub-total </div>
                        <div className="right-side-text-payment">€ total</div>
                    </div>
                    <div className="sub-total">
                        <div className="middle-text-payment">Delivery</div>
                        <div className="right-side-text-payment">free</div>
                    </div>
                    <div className="final-total">
                        <div className="middle-text-payment total">Total</div>{" "}
                        <div className="right-side-text-payment total-amount">
                            {" "}
                            € total
                        </div>
                    </div>
                    <div />
                    <div className="container-button">
                        <button className="checkout-button">
                            Go to Checkout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("getCheckout in shopping cart", state.getCheckout);
    return {
        cart: state.cart,
        getCheckout: state.getCheckout
    };
}
export default connect(mapStateToProps)(ShoppingCart);
