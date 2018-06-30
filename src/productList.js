import React from "react";
import axios from "./axios";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { connect } from "react-redux";
import { productList, product, getCheckout } from "./actions";
import { ProductModal } from "./productModal";
import { Link } from "react-router-dom";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

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
                        <Link to="/product">
                            <img
                                onClick={() => {
                                    this.props.dispatch(product(prod));
                                    this.props.dispatch(getCheckout());
                                }}
                                id="product-image-list"
                                src={prod.images[0].src}
                            />
                        </Link>
                        <Link to="/product">
                            <h3 id="product-name-list">{prod.title}</h3>
                            <span className="price-list">
                                EUR {prod.variants[0].price}
                            </span>
                        </Link>
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
                    {this.props.product && <ProductModal />}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        productList: state.productList,
        product: state.product
    };
}
export default connect(mapStateToProps)(ProductList);
