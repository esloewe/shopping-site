import React from "react";
import axios from "./axios";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { connect } from "react-redux";
import { productList, product } from "./actions";

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.renderProductList = this.renderProductList.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(productList());
    }

    renderProductList() {
        if (!this.props.productList) {
            return null;
        }
        return this.props.productList.map(prod => {
            return (
                <div key={prod.id}>
                    <div className="product-list-item">
                        <img id="product-image-list" src={prod.product_image} />
                        <h3 onClick={() => this.props.dispatch(product(prod))}>
                            {prod.product_name}
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
    console.log("in map state to props", state.productList, state.product);
    return {
        productList: state.productList,
        product: state.product
    };
}
export default connect(mapStateToProps)(ProductList);
// <!--<div>{this.props.product && <ProductModal />}</div>//-->
