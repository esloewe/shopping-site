import React from "react";
import axios from "./axios";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { connect } from "react-redux";

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.renderProductList = this.renderProductList.bind(this);
    }

    renderProductList() {
        if (!this.props.productList) {
            return null;
        }

        return this.props.productList.map(product => {
            console.log("product in compo", product);
            return (
                <div key={product.id}>
                    <div>{product.product_name}</div>

                    <img id="product-image-list" src={product.product_image} />
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <p>new test here product list component</p>
                <div>{this.renderProductList()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("in map state to props", state.productList);
    return {
        productList: state.productList
    };
}
export default connect(mapStateToProps)(ProductList);
