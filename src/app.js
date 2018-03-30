import React from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import ProductList from "./productList";

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
                    <Route path="/products" component={ProductList} />
                    <p>Testing component</p>
                </div>
            </BrowserRouter>
        );
    }
}
