import React from "react";
import axios from "./axios";
import { connect } from "react-redux";

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
        return this.props.product.map(singleProd => {
            return (
                <div key={singleProd.id}>
                    <div>{singleProd.product_name}</div>
                </div>
            );
        });
    }

    render() {
        return <div>{this.renderModal()}</div>;
    }
}

function mapStateToProps(state) {
    console.log("in map state to props product modal", state.product);
    return {
        product: state.product
    };
}
export default connect(mapStateToProps)(ProductModal);
