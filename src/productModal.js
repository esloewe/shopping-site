import React from "react";
import axios from "./axios";
import { connect } from "react-redux";

export class ProductModal extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>{this.props.product_name}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("in map state to props", state.product);
    return {
        product: state.product
    };
}
export default connect(mapStateToProps)(ProductModal);