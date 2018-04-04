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
                                <img
                                    className="shopping-cart-image"
                                    src={item.product_image_name}
                                />
                                <h3>{item.product_name}</h3>
                                <span> € {item.price}</span>
                                <span> Qty: {item.quantity}</span>
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
                <div className="total-shopping-cart">
                    <h2 className="header-title-shopping-cart">
                        Shopping Cart
                    </h2>
                    <h3>Payment</h3>
                    <p>sub-total: € {total}</p>
                    <p>delivery : FREE FOREVER</p>
                    <h3>total: € {total} </h3>
                    <div />

                    <Link to="purchase">
                        <button>Buy Now</button>
                    </Link>
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
