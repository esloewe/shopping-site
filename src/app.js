import React from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import ProductList from "./productList";
import ProductModal from "./productModal";
import Graphic from "./graphic";
import ShoppingCart from "./shoppingCart";
import CommingSoon from "./comingSoon";

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

                    <Switch>
                        <Route exact path="/" component={Graphic} />
                        <Route exact path="/products" component={ProductList} />
                    </Switch>

                    <Route path="/product" component={ProductModal} />
                    <Route path="/shopping-cart" component={ShoppingCart} />
                    <Route path="/purchase" component={CommingSoon} />
                </div>
            </BrowserRouter>
        );
    }
}
