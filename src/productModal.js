import React from "react";
import axios from "./axios";
import { connect } from "react-redux";
import { product, addProductToCart } from "./actions";

export class ProductModal extends React.Component {
    constructor() {
        super();
        this.state = {
            quantity: 1,
            changeTextButton: "add to cart"
        };
        this.renderModal = this.renderModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ quantity: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        this.props.dispatch(
            addProductToCart(this.props.product, this.state.quantity)
        );
        this.setState({ changeTextButton: "added to cart" });
    }

    renderModal() {
        if (!this.props.product) {
            return null;
        }
        return (
            <div className="single-prod-container">
                <img
                    className="single-prod-image"
                    src={this.props.product.product_image_name}
                />
                <div className="single-prod-text-info">
                    <h2 className="single-prod-name">
                        {this.props.product.product_name}
                    </h2>

                    <p className="single-prod-description">
                        {this.props.product.product_description}
                    </p>
                    <span className="price"> € {this.props.product.price}</span>
                    <span id="qty">Qty:</span>
                    <input
                        id="qty-input"
                        onChange={this.handleChange}
                        className="shopping-cart-quantity"
                        type="number"
                        name="quantity"
                        value={this.state.quantity}
                        min="1"
                        max="20"
                    />
                    <button onClick={this.handleClick} className="add-to-cart">
                        {this.state.changeTextButton}
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>{this.renderModal()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("in map state to props product modal", state.product);

    return {
        product: state.product
    };
}
export default connect(mapStateToProps)(ProductModal);
