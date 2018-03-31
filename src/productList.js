import React from "react";
import axios from "./axios";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { connect } from "react-redux";
import { ProductModal } from "./productModal";
import { productList, product } from "./actions";

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(productList());
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    renderProductList() {
        if (!this.props.productList) {
            return null;
        }
        return this.props.productList.map(product => {
            return (
                <div key={product.id}>
                    <div className="product-list-item">
                        <img
                            id="product-image-list"
                            src={product.product_image}
                        />
                        <h3 onClick={this.handleSubmit}>
                            {product.product_name} {ProductModal}
                        </h3>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="product-list-container">
                    {this.renderProductList()}
                </div>
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
