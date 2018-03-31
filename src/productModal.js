import React from "react";
import axios from "./axios";
import { connect } from "react-redux";
import { product } from "./actions";

export class ProductModal extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.renderProduct = this.renderProduct.bind(this);
    }

    renderProduct() {
        this.props.dispatch(product());
    }

    render() {
        return <div>test {this.renderProduct()}</div>;
    }
}

function mapStateToProps(state) {
    console.log("in map state to props product", state.product);
    return {
        product: state.product
    };
}
export default connect(mapStateToProps)(ProductModal);
