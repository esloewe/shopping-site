import React from "react";
import axios from "./axios";
import { connect } from "react-redux";
import { product, addProductToCart, getCheckout } from "./actions";
import LazyLoad from "react-lazyload";

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
            addProductToCart(
                this.props.product.variants[0].id,
                this.state.quantity,
                this.props.getCheckout.id
            )
        );

        this.setState({ changeTextButton: "added to cart" });
    }

    renderModal() {
        if (!this.props.product) {
            return null;
        }
        return (
            <LazyLoad height={650} offset={100}>
                <div className="single-prod-container">
                    <img
                        className="single-prod-image"
                        src={this.props.product.images[0].src}
                    />
                    <div className="single-prod-text-info">
                        <h2 className="single-prod-name">
                            {this.props.product.title}
                            {this.props.product.variants.id}
                        </h2>

                        <p className="single-prod-description">
                            {this.props.product.description}
                        </p>
                        <span className="price">
                            {" "}
                            € {this.props.product.variants[0].price}
                        </span>
                        <span id="qty">Qty:</span>
                        <input
                            id="qty-input"
                            onChange={this.handleChange}
                            className="shopping-cart-quantity ui-spinner-input"
                            type="number"
                            name="quantity"
                            value={this.state.quantity}
                            min="1"
                            max="20"
                        />
                        <button
                            onClick={this.handleClick}
                            className="add-to-cart"
                        >
                            {this.state.changeTextButton}
                        </button>
                    </div>
                </div>
            </LazyLoad>
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
    return {
        product: state.product,
        getCheckout: state.getCheckout
    };
}
export default connect(mapStateToProps)(ProductModal);
