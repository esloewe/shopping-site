import React from "react";
import axios from "./axios";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { connect } from "react-redux";

class ProductList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>new test here product list component</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("in map state to props", state);
    return {
        productList: state.productList
    };
}
export default connect(mapStateToProps)(ProductList);
