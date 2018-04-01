import React from "react";
import axios from "./axios";
import { connect } from "react-redux";
import { product } from "./actions";

export class ProductModal extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.renderModal = this.renderModal.bind(this);
    }

    renderModal() {
        if (!this.props.product) {
            return null;
        }
        return (
            <div>
                <div>{this.props.product.product_name}</div>
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
