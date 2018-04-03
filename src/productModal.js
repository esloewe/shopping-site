import React from "react";
import axios from "./axios";
import { connect } from "react-redux";
import { product, addProductToCart } from "./actions";

export class ProductModal extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.renderModal = this.renderModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("clicking");
        e.preventDefault();
        this.props.dispatch(addProductToCart(this.props.product));
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
                    <button onClick={this.handleClick} className="add-to-cart">
                        add to cart
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
