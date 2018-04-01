import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import ProductList from "./productList";
import ProductModal from "./productModal";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/products" component={ProductList} />
                    <Route path="/product" component={ProductModal} />
                </div>
            </BrowserRouter>
        );
    }
}
