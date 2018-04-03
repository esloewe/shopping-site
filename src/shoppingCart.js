import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "./actions";

class ShoppingCart extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.renderAddProductToCart = this.renderAddProductToCart.bind(this);
        this.handleRemoveitem = this.handleRemoveitem.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(addProductToCart());
    }

    handleRemoveitem(e) {
        e.preventDefault();
        console.log("clicking");
    }

    renderAddProductToCart() {
        console.log(
            "logging in render add rpd to cart",
            this.props.addProductToCart
        );
        if (!this.props.addProductToCart) {
            return null;
        } else {
            return this.props.addProductToCart.map((item, i) => {
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
                                    onClick={this.handleRemoveitem}
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
        return (
            <div className="renderer-container-shopping-cart">
                <div>{this.renderAddProductToCart()}</div>
                <div className="total-shopping-cart">
                    <h2 className="header-title-shopping-cart">
                        Shopping Cart
                    </h2>
                    <h4>Payment</h4>
                    <p>sub-total</p>
                    <p>delivery : FREE FOREVER</p>
                    <h3>total</h3>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state cart in shpiingcart ", state.cart);
    return {
        addProductToCart: state.cart
    };
}
export default connect(mapStateToProps)(ShoppingCart);
